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
Bitte generiere auf Grundlage der Benutzerbeschreibung eine vollständige AI-Charakter-Vorlage:

Anwendungsname: {application_name}
Anwendungsbeschreibung: {detail}
Benutzeranforderung: {userInput}

Wichtige Hinweise:
1. Die Charakterbeschreibung muss dem Kernzweck der Anwendung "{application_name}" dienen.
2. Der Benutzer darf den Charaktertext anpassen oder optimieren.
3. Wenn der Benutzer bestimmte Fähigkeiten oder Abschnitte ändern möchte, soll die Anpassung unter Beibehaltung des Anwendungsthemas erfolgen.

Bitte im folgenden Format ausgeben:

Es müssen unbedingt die folgenden Regeln beachtet werden:
1. **Streng verboten sind Erklärungen, Vorreden oder Zusatzinformationen**, es darf nur das Endergebnis ausgegeben werden.
2. **Das folgende Format ist strikt einzuhalten**, keine Titel dürfen fehlen und keine zusätzlichen Abschnitte hinzugefügt werden.
3. **Wenn der Benutzer Änderungen an einem Teil des Charakters verlangt, müssen diese unter Wahrung der Kernfunktion der Anwendung erfolgen.**
4. **Wenn die Benutzeranforderung nichts mit der Charaktererstellung zu tun hat (z. B. Smalltalk), soll der Standardcharakter auf Basis der App-Informationen erzeugt werden. Dabei können relevante Hinweise (z. B. Stil, Fachbereich) aus der Eingabe als sekundäre Referenz genutzt werden.**

# Charakter:
Eine kurze Beschreibung des Charakters und seiner Hauptaufgaben

## Ziel:
Arbeitsziele des Charakters, ggf. in Punkten aufgeführt (1–2 Hauptziele empfohlen)

## Kernfähigkeiten:
### Fähigkeit 1: [Fähigkeitsname, z. B. Empfehlung / Informationssuche / Analyse]
1. [Schritt 1 – Beschreibung der ersten Aktion, inklusive Bedingungen und Reaktion]
2. [Schritt 2 – Beschreibung, wie Informationen beschafft oder verarbeitet werden]
3. [Schritt 3 – Beschreibung der Endausgabe und wie das Ergebnis dargestellt wird]

===Antwortbeispiel===
- 📋 [Kennzeichnung]: <Formatbeschreibung>
- 🎯 [Kennzeichnung]: <Formatbeschreibung>
- 💡 [Kennzeichnung]: <Formatbeschreibung>
===Beispiel Ende===

### Fähigkeit 2: [Fähigkeitsname]
1. [Schritt 1 – Auslöser und erste Verarbeitung]
2. [Schritt 2 – Detaillierte Methoden zur Informationsverarbeitung]
3. [Schritt 3 – Anforderungen und Format der Endausgabe]

### Fähigkeit 3: [Fähigkeitsname]
- [Beschreibung der Kernkompetenz]
- [Anwendungsmethode – wie die Fähigkeit zur Unterstützung des Nutzers eingesetzt wird]

## Arbeitsablauf:
1. Beschreibung des ersten Schritts im Arbeitsprozess
2. Beschreibung des zweiten Schritts
3. Beschreibung des dritten Schritts

## Ausgabeformat:
Falls das Ausgabeformat des Charakters besonderen Anforderungen unterliegt, hier Beispiele und Hinweise ergänzen.

## Einschränkungen:
1. **Strikte Beschränkung des Antwortbereichs**: Nur Fragen zum Charakterkonzept dürfen beantwortet werden.
   - Wenn der Nutzer etwas anderes fragt, muss folgender Satz ausgegeben werden:
     „Entschuldigung, ich kann nur Fragen zum [Charakterkonzept] beantworten. Ihre Anfrage liegt außerhalb meines Aufgabenbereichs.“
   - Es dürfen keine anderen Antworten gegeben werden.
2. Beschreibung weiterer Interaktionsbeschränkungen
3. Beschreibung zusätzlicher Verhaltensregeln während der Interaktion

Bei der Ausgabe dürfen keine Erklärungen oder Anmerkungen enthalten sein – nur reines Ergebnis im oben beschriebenen Format.
  `,
}

const isStreaming = ref<boolean>(false) // Wird gerade gestreamt?
const isPaused = ref<boolean>(false) // Ist pausiert?
const fullContent = ref<string>('') // Vollständiger Inhaltspuffer
const currentDisplayIndex = ref<number>(0) // Aktuell angezeigter Zeichenindex
let streamTimer: number | null = null // Timer-Referenz
const isOutputComplete = ref<boolean>(false)

// Timer-Funktion zur Simulation von Stream-Ausgabe
const startStreamingOutput = () => {
  ...
}

// Streaming stoppen
const stopStreaming = () => {
  ...
}

const showStopButton = computed(() => {
  return isStreaming.value
})

// Streaming pausieren
const pauseStreaming = () => {
  ...
}

// Streaming fortsetzen
const continueStreaming = () => {
  ...
}

/**
 * Holt eine rekursive Funktion, um Stream-Daten zu verarbeiten
 * @param chat    einzelne Chat-Nachricht
 * @param reader  Datenstrom
 * @param stream  Ob es sich um einen Stream handelt
 */
const getWrite = (reader: any) => {
  ...
}

// API vollständig?
const isApiComplete = ref<boolean>(false)
const answer = computed(() => {
  ...
})

// Button-Zustände berechnen
const showContinueButton = computed(() => {
  ...
})

function generatePrompt(inputValue: any) {
  ...
}

// Klick auf „Neu generieren“
const reAnswerClick = () => {
  if (originalUserInput.value) {
    generatePrompt(`Die vorherige Antwort war unbefriedigend. Bitte generiere auf Grundlage der ursprünglichen Frage "${originalUserInput.value}" und des bisherigen Gesprächs eine neue Version, die strikt den Formatregeln entspricht.`)
  }
}

...
const handleDialogClose = (done: () => void) => {
  if (answer.value) {
    // Bestätigungsnachricht anzeigen
    MsgConfirm(t('common.tip'), t('views.application.generateDialog.exit'), {
      ...
    })
      .then(() => {
        // Wenn der Nutzer bestätigt
        ...
      })
      .catch(() => {
        // Wenn der Nutzer abbricht
      })
  } else {
    done()
  }
}

// Timer beim Verlassen des Components aufräumen
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
