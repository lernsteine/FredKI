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
        <!-- Generierter Inhalt -->
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

        <!-- Texteingabefeld -->

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
                    src="@/assets/icon_send.svg"
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
// Ursprüngliche Eingabe
const originalUserInput = ref<string>('')
const modelID = ref('')
const applicationID = ref('')
const dialogVisible = ref(false)
const inputValue = ref<string>('')
const loading = ref<boolean>(false)

const promptTemplates = {
  INIT_TEMPLATE: `
Bitte generieren Sie eine vollständige KI-Vorlage basierend auf der Beschreibung:

Anwendungsname: {application_name}
Anwendungsbeschreibung: {detail}
Benutzeranforderungen: {userInput}

Wichtiger Hinweis:
1. Der Zeichensatz muss die Kernfunktionalität der Anwendung "{application_name}" erfüllen.
2. Nutzer dürfen den spezifischen Inhalt des Zeichensatzes anpassen und optimieren.
3. Bei Änderungswünschen können erforderliche Anpassungen vorgenommen werden.

Bitte beachten Sie das folgende Format:

Diese Regeln müssen eingehalten werden:
1. **Erklärungen, Vorworte und zusätzliche Anweisungen sind untersagt.** Es wird nur das Endergebnis ausgegeben.
2. **Bitte beachten Sie das folgende Format.** Überschriften und zusätzliche Absätze dürfen nicht weggelassen werden.
3. **Bei Änderungswünschen zu bestimmten Teilen des Zeichensatzes nehmen wir Anpassungen vor, wobei die Kernfunktionalität der Anwendung erhalten bleibt.**
4. **Wenn die Anfrage des Nutzers nichts mit der Zeichensatzgenerierung zu tun hat (z. B. Smalltalk oder andere Themen), generieren wir primär einen Standardzeichensatz basierend auf den Anwendungsinformationen. Wir werden Nutzereingaben jedoch nicht vollständig ignorieren und können wertvolle Zusatzinformationen (wie z. B. Domänenhintergrund, Ton und Stil) als sekundäre Referenz heranziehen**.

# Rolle:
Eine einzeilige Beschreibung der Rolle und der Hauptaufgaben.

## Ziel:
Die Arbeitsziele der Rolle. Falls mehrere Ziele vorhanden sind, können Sie diese in Stichpunkten auflisten. Es empfiehlt sich jedoch, sich auf ein oder zwei zu konzentrieren.

## Kernkompetenzen:
###  Kompetenz 1: [Bezeichnung der Kompetenz, z. B. Arbeitsempfehlung/Informationsabfrage/Fachanalyse usw.]
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

### Fähigkeit 3: [Name der Fähigkeit]
- [Beschreibung der Kernkompetenz – Erläutern Sie den Hauptzweck und die Wissensbasis dieser Fähigkeit.]
- [Anwendungsmethode – Beschreiben Sie, wie diese Fähigkeit zur Bereitstellung von Diensten für Nutzer eingesetzt wird, einschließlich spezifischer Implementierungsmethoden.]

## Workflow:
1. Beschreiben Sie den ersten Schritt des Rollen-Workflows.
2. Beschreiben Sie den zweiten Schritt des Rollen-Workflows.
3. Beschreiben Sie den dritten Schritt des Rollen-Workflows.

## Ausgabeformat:
Falls Sie spezifische Anforderungen an das Ausgabeformat der Rolle haben, können Sie diese hier hervorheben und Beispiele für das gewünschte Ausgabeformat angeben.


## Einschränkungen:
1.  **Antwortumfang streng begrenzen**: Beantworten Sie nur Fragen, die sich auf die Rolleneinstellung beziehen.
   - Wenn die Frage eines Nutzers nicht mit der Rolle zusammenhängt, muss das folgende feste Antwortformat verwendet werden:
     „Entschuldigen Sie, ich kann nur Fragen zu [Rolleneinstellung] beantworten. Ihre Frage liegt außerhalb unseres Bereichs.“
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

// Timerfunktion zur Simulation der Streaming-Ausgabe
const startStreamingOutput = () => {
  if (streamTimer) {
    clearInterval(streamTimer)
  }

  isStreaming.value = true
  isPaused.value = false

  streamTimer = setInterval(() => {
    if (isApiComplete.value && !isPaused.value) {
       // Anzeigeinhalt aktualisieren
      const currentAnswer = chatMessages.value[chatMessages.value.length - 1]
      if (currentAnswer && currentAnswer.role === 'ai') {
        currentAnswer.content = fullContent .value
      }
      stopStreaming()
      return
    }
    if (!isPaused.value && currentDisplayIndex.value < fullContent.value.length) {
      // Geben Sie jedes Mal 1–3 Zeichen aus und simulieren Sie so eine echte Streaming-Ausgabe
      const step = Math.min(3, fullContent.value.length - currentDisplayIndex.value)
      currentDisplayIndex.value += step

      // Anzeigeinhalt aktualisieren
      const currentAnswer = chatMessages.value[chatMessages.value.length - 1]
      if (currentAnswer && currentAnswer.role === 'ai') {
        currentAnswer.content = fullContent.value.substring(0, currentDisplayIndex.value)
      }
    } else if (loading.value === false && currentDisplayIndex.value >= fullContent.value.length) {
      stopStreaming()
    }
  }, 50) as any
}

// Streaming-Ausgabe beenden
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

// Streaming-Ausgabe anhalten
const pauseStreaming = () => {
  isPaused.value = true
  isStreaming.value = false
}

// Streaming-Ausgabe fortsetzen
const continueStreaming = () => {
  if (currentDisplayIndex.value < fullContent.value.length) {
    startStreamingOutput()
  }
}

/**
 * Holen Sie sich eine rekursive Funktion zum Verarbeiten von Streaming-Daten
 * @param chat    Jede Gesprächsaufzeichnung
 * @param reader  Streaming-Daten
 * @param stream  Handelt es sich um Streaming-Daten?
 */
const getWrite = (reader: any) => {
  let tempResult = ''
  const middleAnswer = reactive({ content: '', role: 'ai' })
  chatMessages.value.push(middleAnswer)

  // Status initialisieren
  fullContent.value = ''
  currentDisplayIndex.value = 0
  isOutputComplete.value = false

  let streamingStarted = false

  /**
   *
   * @param done  Ist es vorbei?
   * @param value Wert
   */
  const write_stream = ({ done, value }: { done: boolean; value: any }) => {
    try {
      if (done) {
        // Die Stream-Daten werden empfangen, der Timer läuft jedoch weiter, bis der gesamte Inhalt angezeigt wird.
        loading.value = false
        isApiComplete.value = true
        return
      }
      const decoder = new TextDecoder('utf-8')
      let str = decoder.decode(value, { stream: true })
      // Hier ist eine Erklärung zu „Start“, da der Datenstrom-Rückgabestrom nicht gemäß dem Backend-Block zurückgegeben wird. Der Block, den wir erhalten möchten, ist „data:{xxx}\n\n“, aber er kann auch „data:{ -> xxx}\n\n“ erhalten. Kurz gesagt: „fetch“ kann nicht garantieren, dass jeder Block mit „data:\n\n“ beginnt und mit „data“ endet:
      tempResult += str
      const split = tempResult.match(/data:.*}\n\n/g)
      if (split) {
        str = split.join('')
        tempResult = tempResult.replace(str, '')
      } else {
        return reader.read().then(write_stream)
      }
      // Hier ist die Erklärung一下 end
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
              // Neu empfangene Inhalte werden in Echtzeit zum Gesamtinhalt hinzugefügt
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

// Berechnung des Schaltflächenzustands
const showContinueButton = computed(() => {
  return (
    !isStreaming.value && isPaused.value && currentDisplayIndex.value < fullContent.value.length
  )
})

function generatePrompt(inputValue: any) {
  isApiComplete.value=false
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
            // 将Scrollen Sie mit der Bildlaufleiste nach unten
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
            // Scrollen Sie mit der Bildlaufleiste nach unten
            scrollDiv.value.setScrollTop(getMaxHeight())
          }
        })
        const reader = response.body.getReader()
        reader.read().then(getWrite(reader))
      })
  }
}

// Klicks neu generieren
const reAnswerClick = () => {
  if (originalUserInput.value) {
    generatePrompt(`Die vorherige Antwort ist unbefriedigend. Bitte generieren Sie sie basierend auf der ursprünglichen Frage "${originalUserInput.value}" und dem Gesprächsverlauf neu und halten Sie sich dabei strikt an die Formatierungsvorgaben.`)
  }
}

const quickInputRef = ref()

const handleSubmit = (event?: any) => {
  if (!event?.ctrlKey && !event?.shiftKey && !event?.altKey && !event?.metaKey) {
    // Wird die Tastenkombination nicht gedrückt, wird das Standardereignis verhindert
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
    // Wenn Sie drücken ctrl/shift/cmd/opt +enter，Es wird einwickeln
    insertNewlineAtCursor(event)
  }
}
const insertNewlineAtCursor = (event?: any) => {
  const textarea = quickInputRef.value.$el.querySelector(
    '.el-textarea__inner',
  ) as HTMLTextAreaElement
  const startPos = textarea.selectionStart
  const endPos = textarea.selectionEnd
  // Standardverhalten verhindern (zusätzliche Zeilenumbrüche vermeiden)
  event.preventDefault()
  // Fügt am Cursor eine neue Zeile ein
  inputValue.value = inputValue.value.slice(0, startPos) + '\n' + inputValue.value.slice(endPos)
  nextTick(() => {
    textarea.setSelectionRange(startPos + 1, startPos + 1) // Der Cursor steht hinter dem Zeilenumbruch
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
 * Handhabung von Folge-Bildlaufleisten
 */
const handleScroll = () => {
  if (scrollDiv.value) {
    // Wenn die Innenhöhe kleiner als die Außenhöhe ist, ist eine Bildlaufleiste erforderlich.
    if (scrollDiv.value.wrapRef.offsetHeight < dialogScrollbar.value?.scrollHeight) {
      // Wenn sich die aktuelle Bildlaufleiste innerhalb des angegebenen Abstands vom unteren Rand befindet, folgt die Bildlaufleiste
      scrollDiv.value.setScrollTop(getMaxHeight())
    }
  }
}

const handleDialogClose = (done: () => void) => {
  if (answer.value) {
    // Popup-Nachricht
    MsgConfirm(t('common.tip'), t('views.application.generateDialog.exit'), {
      confirmButtonText: t('common.confirm'),
      cancelButtonText: t('common.cancel'),
      distinguishCancelAndClose: true,
    })
      .then(() => {
        // Klicken Sie auf OK, um den Status zu löschen
        stopStreaming()
        chatMessages.value = []
        fullContent.value = ''
        currentDisplayIndex.value = 0
        isOutputComplete.value = false
        done() // Wirklich geschlossen
      })
      .catch(() => {
        // Klicken Sie auf „Abbrechen“.
      })
  } else {
    done()
  }
}

// Timer bereinigen, wenn eine Komponente deinstalliert wird
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
    box-shadow: 0px 6px 24px 0px rgba(31, 35, 41, 0.08);
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
    box-shadow: 0px 6px 24px 0px rgba(31, 35, 41, 0.08);

    &:hover {
      background: #ffffff;
    }
  }
}
</style>
