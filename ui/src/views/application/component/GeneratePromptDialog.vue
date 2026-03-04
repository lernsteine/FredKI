<template>
  <el-dialog
    align-center
    :title="$t('views.application.generateDialog.generatePrompt')"
    v-model="dialogVisible"
    style="width: 600px"
    append-to-body
    :close-on-click-modal="true"
    :close-on-press-escape="true"
    :before-close="handleDialogClose"
  >
    <div class="generate-prompt-dialog-bg border-r-8">
      <div class="scrollbar-height">
        <!-- 生成内容 -->
        <div class="p-16 pb-0 lighter">
          <el-scrollbar ref="scrollDiv">
            <div
              ref="dialogScrollbar"
              v-if="answer"
              class="pre-wrap lighter"
              style="max-height: calc(100vh - 400px)"
            >
              {{ answer }}
            </div>
            <p v-else-if="loading" shadow="always" style="margin: 0.5rem 0">
              <el-icon class="is-loading color-primary mr-4"><Loading /></el-icon>
              {{ $t('views.application.generateDialog.loading') }}
              <span class="dotting"></span>
            </p>
            <p v-else class="flex align-center">
              <AppIcon iconName="app-generate-star" class="color-primary mr-4"></AppIcon>
              {{ $t('views.application.generateDialog.title') }}
            </p>
          </el-scrollbar>

          <div v-if="answer && !loading && !isStreaming && !showContinueButton" class="mt-8">
            <el-button type="primary" @click="() => emit('replace', answer)">
              {{ $t('views.application.generateDialog.replace') }}
            </el-button>
            <el-button @click="copyClick(answer)">
              {{ $t('common.copy') }}
            </el-button>
            <el-button @click="reAnswerClick" :disabled="!answer || loading" :loading="loading">
              {{ $t('views.application.generateDialog.remake') }}
            </el-button>
          </div>
          <div class="mt-8" v-else>
            <el-button type="primary" v-if="showContinueButton" @click="continueStreaming" link>
              {{ $t('views.application.generateDialog.continue') }}
            </el-button>
          </div>
        </div>

        <!-- 文本输入框 -->

        <div class="generate-prompt-operate p-16">
          <div v-if="showStopButton" class="text-center mb-8">
            <el-button class="border-primary video-stop-button" @click="pauseStreaming">
              <app-icon iconName="app-video-stop" class="mr-8"></app-icon>
              {{ $t('views.application.generateDialog.stop') }}
            </el-button>
          </div>

          <div class="operate-textarea">
            <el-input
              ref="quickInputRef"
              v-model="inputValue"
              :autosize="{ minRows: 1, maxRows: 10 }"
              type="textarea"
              :placeholder="$t('views.application.generateDialog.placeholder')"
              :maxlength="100000"
              class="chat-operate-textarea"
              @keydown.enter="handleSubmit($event)"
            />

            <div class="operate">
              <div class="text-right">
                <el-button
                  text
                  class="sent-button"
                  :disabled="!inputValue.trim() || loading || isStreaming"
                  @click="handleSubmit"
                >
                  <img
                    v-show="!inputValue.trim() || loading || isStreaming"
                    src="@/assets/chat/icon_send.svg"
                    alt=""
                  />
                  <SendIcon v-show="inputValue.trim() && !loading && !isStreaming" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { MsgConfirm } from '@/utils/message'
import { t } from '@/locales'
import systemGeneratePromptAPI from '@/api/system-resource-management/application'
import generatePromptAPI from '@/api/application/application'
import useStore from '@/stores'
import { copyClick } from '@/utils/clipboard'
const emit = defineEmits(['replace'])
const { user } = useStore()
const route = useRoute()

const chatMessages = ref<Array<any>>([])

const apiType = computed(() => {
  if (route.path.includes('resource-management')) {
    return 'systemManage'
  } else {
    return 'workspace'
  }
})
// 原始输入
const originalUserInput = ref<string>('')
const modelID = ref('')
const applicationID = ref('')
const dialogVisible = ref(false)
const inputValue = ref<string>('')
const loading = ref<boolean>(false)

const promptTemplates = {
  INIT_TEMPLATE: `
Bitte generieren Sie eine vollständige KI-Vorlage basierend auf der Beschreibung:

Anwendungsname：{application_name}
Anwendungsbeschreibung：{detail}
Benutzeranforderungen：{userInput}

Wichtiger Hinweis:
1. Der Zeichensatz muss die Kernfunktionalität der Anwendung "{application_name}" erfüllen.
2. Nutzer dürfen den spezifischen Inhalt des Zeichensatzes anpassen und optimieren.
3. Bei Änderungswünschen können erforderliche Anpassungen vorgenommen werden.

Bitte beachten Sie das folgende Format:
Diese Regeln müssen eingehalten werden:
1. Erklärungen, Vorworte und zusätzliche Anweisungen sind untersagt. Es wird nur das Endergebnis ausgegeben.
2. Bitte beachten Sie das folgende Format. Überschriften und zusätzliche Absätze dürfen nicht weggelassen werden.
3. \*\*Bei Änderungswünschen zu bestimmten Teilen des Zeichensatzes nehmen wir Anpassungen vor, wobei die Kernfunktionalität der Anwendung erhalten bleibt.\*\*
4. Wenn die Anfrage des Nutzers nichts mit der Zeichensatzgenerierung zu tun hat (z. B. Smalltalk oder andere Themen), generieren wir primär einen Standardzeichensatz basierend auf den Anwendungsinformationen. 

Wir werden Nutzereingaben jedoch nicht vollständig ignorieren und können wertvolle Zusatzinformationen (wie z. B. Domänenhintergrund, Ton und Stil) als sekundäre Referenz heranziehen.

#Rolle:
Eine einzeilige Beschreibung der Rolle und der Hauptaufgaben.

## Ziel:
Die Arbeitsziele der Rolle. 
Falls mehrere Ziele vorhanden sind, können Sie diese in Stichpunkten auflisten. Es empfiehlt sich jedoch, sich auf ein oder zwei zu konzentrieren.

## Kernkompetenzen：
### Kompetenz 1: Bezeichnung der Kompetenz, z. B. Arbeitsempfehlung/Informationsabfrage/Fachanalyse usw.]
1. [Schritt 1 ausführen – Beschreiben Sie den ersten spezifischen Arbeitsschritt der Kompetenz, einschließlich bedingter Beurteilungen und Verarbeitungsmethoden.]
2. [Schritt 2 ausführen – Beschreiben Sie den zweiten spezifischen Arbeitsschritt der Kompetenz, einschließlich der Informationsbeschaffung und -verarbeitung.]
3. [Schritt 3 ausführen – Beschreiben Sie den letzten Ausgabeschritt der Kompetenz und erläutern Sie die Ergebnispräsentation.]

===Antwortbeispiel===
- 📋 [Kennung]: <Spezifische Anweisungen zur Inhaltsformatierung>
- 🎯 [Kennung]: <Spezifische Anweisungen zur Inhaltsformatierung>
- 💡 [Kennung]: <Spezifische Anweisungen zur Inhaltsformatierung>
===Ende des Beispiels===

### Kompetenz 2: [Bezeichnung der Kompetenz]
1. [Schritt 1 ausführen – Beschreiben Sie die auslösenden Bedingungen und die anfängliche Verarbeitung.
2. [Schritt 2 ausführen – Beschreiben Sie die spezifischen Methoden zur Erfassung und Weiterverarbeitung von Informationen.]
3. [Schritt 3 ausführen – Beschreiben Sie die spezifischen Anforderungen und das Format für die endgültige Ausgabe.]

### Fähigkeit  3: [Name der Fähigkeit]
- [Beschreibung der Kernkompetenz – Erläutern Sie den Hauptzweck und die Wissensbasis dieser Fähigkeit.]
- [Anwendungsmethode – Beschreiben Sie, wie diese Fähigkeit zur Bereitstellung von Diensten für Nutzer eingesetzt wird, einschließlich spezifischer Implementierungsmethoden.]

## Workflow：
1. Beschreiben Sie den ersten Schritt des Rollen-Workflows.
2. Beschreiben Sie den zweiten Schritt des Rollen-Workflows.
3. Beschreiben Sie den dritten Schritt des Rollen-Workflows.

## Ausgabeformat：
Falls Sie spezifische Anforderungen an das Ausgabeformat der Rolle haben, können Sie diese hier hervorheben und Beispiele für das gewünschte Ausgabeformat angeben.


## Einschränkungen：
1. Antwortumfang streng begrenzen: Beantworten Sie nur Fragen, die sich auf die Rolleneinstellung beziehen.
- Wenn die Frage eines Nutzers nicht mit der Rolle zusammenhängt, muss das folgende feste Antwortformat verwendet werden：
     “Entschuldigen Sie, ich kann nur Fragen zu [Rolleneinstellung] beantworten. Ihre Frage liegt außerhalb unseres Bereichs.”
   - Geben Sie keine Antworten, die nicht mit der Rolleneinstellung zusammenhängen.
2. Beschreiben Sie die Einschränkungen, die der Charakter während der Interaktion einhalten muss.
3. Beschreiben Sie die Einschränkungen, die der Charakter während der Interaktion einhalten muss.

Die Ausgabe darf keine Erklärungen oder zusätzlichen Anweisungen enthalten. Es dürfen nur Inhalte zurückgegeben werden, die dem oben genannten Format entsprechen.
  `,
}

const isStreaming = ref<boolean>(false) // 是否正在流式输出
const isPaused = ref<boolean>(false) // 是否暂停
const fullContent = ref<string>('') // 完整内容缓存
const currentDisplayIndex = ref<number>(0) // 当前显示到的字符位置
let streamTimer: number | null = null // 定时器引用
const isOutputComplete = ref<boolean>(false)

// 模拟流式输出的定时器函数
const startStreamingOutput = () => {
  if (streamTimer) {
    clearInterval(streamTimer)
  }

  isStreaming.value = true
  isPaused.value = false

  streamTimer = setInterval(() => {
    if (isApiComplete.value && !isPaused.value) {
      // 更新显示内容
      const currentAnswer = chatMessages.value[chatMessages.value.length - 1]
      if (currentAnswer && currentAnswer.role === 'ai') {
        currentAnswer.content = fullContent.value
      }
      stopStreaming()
      return
    }
    if (!isPaused.value && currentDisplayIndex.value < fullContent.value.length) {
      // 每次输出1-3个字符，模拟真实的流式输出
      const step = Math.min(3, fullContent.value.length - currentDisplayIndex.value)
      currentDisplayIndex.value += step

      // 更新显示内容
      const currentAnswer = chatMessages.value[chatMessages.value.length - 1]
      if (currentAnswer && currentAnswer.role === 'ai') {
        currentAnswer.content = fullContent.value.substring(0, currentDisplayIndex.value)
      }
    } else if (loading.value === false && currentDisplayIndex.value >= fullContent.value.length) {
      stopStreaming()
    }
  }, 50) as any
}

// 停止流式输出
const stopStreaming = () => {
  if (streamTimer) {
    clearInterval(streamTimer)
    streamTimer = null
  }
  isStreaming.value = false
  isPaused.value = false
  loading.value = false
  isOutputComplete.value = true
}

const showStopButton = computed(() => {
  return isStreaming.value
})

// 暂停流式输出
const pauseStreaming = () => {
  isPaused.value = true
  isStreaming.value = false
}

// 继续流式输出
const continueStreaming = () => {
  if (currentDisplayIndex.value < fullContent.value.length) {
    startStreamingOutput()
  }
}

/**
 * 获取一个递归函数,处理流式数据
 * @param chat    每一条对话记录
 * @param reader  流数据
 * @param stream  是否是流式数据
 */
const getWrite = (reader: any) => {
  let tempResult = ''
  const middleAnswer = reactive({ content: '', role: 'ai' })
  chatMessages.value.push(middleAnswer)

  // 初始化状态并
  fullContent.value = ''
  currentDisplayIndex.value = 0
  isOutputComplete.value = false

  let streamingStarted = false

  /**
   *
   * @param done  是否结束
   * @param value 值
   */
  const write_stream = ({ done, value }: { done: boolean; value: any }) => {
    try {
      if (done) {
        // 流数据接收完成，但定时器继续运行直到显示完所有内容
        loading.value = false
        isApiComplete.value = true
        return
      }
      const decoder = new TextDecoder('utf-8')
      let str = decoder.decode(value, { stream: true })
      // 这里解释一下 start 因为数据流返回流并不是按照后端chunk返回 我们希望得到的chunk是data:{xxx}\n\n 但是它获取到的可能是 data:{ -> xxx}\n\n 总而言之就是 fetch不能保证每个chunk都说以data:开始 \n\n结束
      tempResult += str
      const split = tempResult.match(/data:.*}\n\n/g)
      if (split) {
        str = split.join('')
        tempResult = tempResult.replace(str, '')
      } else {
        return reader.read().then(write_stream)
      }
      // 这里解释一下 end
      if (str && str.startsWith('data:')) {
        if (split) {
          for (const index in split) {
            const chunk = JSON?.parse(split[index].replace('data:', ''))
            if (chunk.error) {
              loading.value = false
              stopStreaming()
              middleAnswer.content = chunk.error
              return Promise.reject(new Error(chunk.error))
            }
            if (!chunk.is_end) {
              // 实时将新接收的内容添加到完整内容中
              fullContent.value += chunk.content
              if (!streamingStarted) {
                streamingStarted = true
                startStreamingOutput()
              }
            }
            if (chunk.is_end) {
              return Promise.resolve()
            }
          }
        }
      }
    } catch (e) {
      loading.value = false
      stopStreaming()
      return Promise.reject(e)
    }
    return reader.read().then(write_stream)
  }

  return write_stream
}
const isApiComplete = ref<boolean>(false)
const answer = computed(() => {
  const result = chatMessages.value[chatMessages.value.length - 1]

  if (result && result.role == 'ai') {
    return result.content
  }
  return ''
})

// 按钮状态计算
const showContinueButton = computed(() => {
  return (
    !isStreaming.value && isPaused.value && currentDisplayIndex.value < fullContent.value.length
  )
})

function generatePrompt(inputValue: any) {
  isApiComplete.value = false
  loading.value = true
  const workspaceId = user.getWorkspaceId() || 'default'
  chatMessages.value.push({ content: inputValue, role: 'user' })
  const requestData = {
    messages: chatMessages.value,
    prompt: promptTemplates.INIT_TEMPLATE,
  }
  if (apiType.value === 'workspace') {
    generatePromptAPI
      .generate_prompt(workspaceId, modelID.value, applicationID.value, requestData)
      .then((response) => {
        nextTick(() => {
          if (dialogScrollbar.value) {
            // 将滚动条滚动到最下面
            scrollDiv.value.setScrollTop(getMaxHeight())
          }
        })
        const reader = response.body.getReader()
        reader.read().then(getWrite(reader))
      })
  } else if (apiType.value === 'systemManage') {
    systemGeneratePromptAPI
      .generate_prompt(applicationID.value, modelID.value, requestData)
      .then((response) => {
        nextTick(() => {
          if (dialogScrollbar.value) {
            // 将滚动条滚动到最下面
            scrollDiv.value.setScrollTop(getMaxHeight())
          }
        })
        const reader = response.body.getReader()
        reader.read().then(getWrite(reader))
      })
  }
}

// 重新生成点击
const reAnswerClick = () => {
  if (originalUserInput.value) {
    generatePrompt(
     `Die vorherige Antwort ist unbefriedigend. Bitte generieren Sie sie basierend auf der ursprünglichen Frage"${originalUserInput.value}" und dem Gesprächsverlauf neu und halten Sie sich dabei strikt an die Formatierungsvorgaben.`,
    )
  }
}

const quickInputRef = ref()

const handleSubmit = (event?: any) => {
  if (!event?.ctrlKey && !event?.shiftKey && !event?.altKey && !event?.metaKey) {
    // 如果没有按下组合键，则会阻止默认事件
    event?.preventDefault()
    if (!inputValue.value.trim() || loading.value || isStreaming.value) {
      return
    }
    if (!originalUserInput.value) {
      originalUserInput.value = inputValue.value
    }
    if (isPaused.value || isStreaming.value) {
      return
    }
    if (inputValue.value) {
      generatePrompt(inputValue.value)
      inputValue.value = ''
    }
  } else {
    // 如果同时按下ctrl/shift/cmd/opt +enter，则会换行
    insertNewlineAtCursor(event)
  }
}
const insertNewlineAtCursor = (event?: any) => {
  const textarea = quickInputRef.value.$el.querySelector(
    '.el-textarea__inner',
  ) as HTMLTextAreaElement
  const startPos = textarea.selectionStart
  const endPos = textarea.selectionEnd
  // 阻止默认行为（避免额外的换行符）
  event.preventDefault()
  // 在光标处插入换行符
  inputValue.value = inputValue.value.slice(0, startPos) + '\n' + inputValue.value.slice(endPos)
  nextTick(() => {
    textarea.setSelectionRange(startPos + 1, startPos + 1) // 光标定位到换行后位置
  })
}

const open = (modelId: string, applicationId: string) => {
  modelID.value = modelId
  applicationID.value = applicationId
  dialogVisible.value = true
  originalUserInput.value = ''
  chatMessages.value = []
}

const scrollDiv = ref()
const dialogScrollbar = ref()

const getMaxHeight = () => {
  return dialogScrollbar.value!.scrollHeight
}

/**
 * 处理跟随滚动条
 */
const handleScroll = () => {
  if (scrollDiv.value) {
    // 内部高度小于外部高度 就需要出滚动条
    if (scrollDiv.value.wrapRef.offsetHeight < dialogScrollbar.value?.scrollHeight) {
      // 如果当前滚动条距离最下面的距离在 规定距离 滚动条就跟随
      scrollDiv.value.setScrollTop(getMaxHeight())
    }
  }
}

const handleDialogClose = (done: () => void) => {
  if (answer.value) {
    // 弹出 消息
    MsgConfirm(t('common.tip'), t('views.application.generateDialog.exit'), {
      confirmButtonText: t('common.confirm'),
      cancelButtonText: t('common.cancel'),
      distinguishCancelAndClose: true,
    })
      .then(() => {
        // 点击确认，清除状态
        stopStreaming()
        chatMessages.value = []
        fullContent.value = ''
        currentDisplayIndex.value = 0
        isOutputComplete.value = false
        done() // 真正关闭
      })
      .catch(() => {
        // 点击取消
      })
  } else {
    done()
  }
}

// 组件卸载时清理定时器
onUnmounted(() => {
  stopStreaming()
})

watch(
  answer,
  () => {
    handleScroll()
  },
  { deep: true, immediate: true },
)

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>
.generate-prompt-dialog-bg {
  background: var(--dialog-bg-gradient-color);
  overflow: hidden;
  box-sizing: border-box;
}

.generate-prompt-operate {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;

  :deep(.operate-textarea) {
    box-shadow: 0px 6px 24px 0px rgba(var(--el-text-color-primary-rgb), 0.08);
    background-color: #ffffff;
    border-radius: var(--app-border-radius-large);
    border: 1px solid #ffffff;
    box-sizing: border-box;

    &:has(.el-textarea__inner:focus) {
      border: 1px solid var(--el-color-primary);
    }

    .el-textarea__inner {
      border-radius: var(--app-border-radius-large) !important;
      box-shadow: none;
      resize: none;
      padding: 13px 16px;
      box-sizing: border-box;
      min-height: 47px !important;
      height: 0;
    }

    .operate {
      padding: 6px 10px;

      .el-icon {
        font-size: 20px;
      }

      .sent-button {
        max-height: none;

        .el-icon {
          font-size: 24px;
        }
      }

      .el-loading-spinner {
        margin-top: -15px;

        .circular {
          width: 31px;
          height: 31px;
        }
      }
    }
  }
  .video-stop-button {
    box-shadow: 0px 6px 24px 0px rgba(var(--el-text-color-primary-rgb), 0.08);

    &:hover {
      background: #ffffff;
    }
  }
}
</style>
