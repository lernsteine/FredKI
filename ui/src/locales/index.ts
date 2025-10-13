import { useLocalStorage, usePreferredLanguages } from '@vueuse/core'
import { computed } from 'vue'
import { createI18n } from 'vue-i18n'

// Sprachmodule dynamisch laden (z. B. ./lang/de-DE/index.ts)
const langModules = import.meta.glob('./lang/*/index.ts', { eager: true }) as Record<
  string,
  { default: object }
>

// Recordable-Typ
type Recordable<T = any> = Record<string, T>

const langModuleMap = new Map<string, any>()
export const langCode: Array<string> = []
export const localeConfigKey = 'MaxKB-locale'

// Bevorzugte Sprachen aus dem Browser
const languages = usePreferredLanguages()

// Locale normalisieren -> unsere Ordner heißen z. B. zh-CN, zh-Hant, en-US, de-DE
function normalizeLocale(input: string): string {
  const s = (input || '').toLowerCase()

  // Deutsch: de, de-de, de-at, de-ch -> de-DE
  if (s === 'de' || s.startsWith('de-')) return 'de-DE'

  // Chinesisch: Mapping wie zuvor
  if (s === 'zh-cn') return 'zh-CN'
  if (s === 'zh-hk' || s === 'zh-tw' || s === 'zh-hant') return 'zh-Hant'

  // Englisch Default
  return 'en-US'
}

export function getBrowserLang() {
  const browserLang = (typeof navigator !== 'undefined' && navigator.language)
    ? navigator.language
    : languages.value[0]
  return normalizeLocale(browserLang)
}

// Sprachmodule-Liste erstellen (Schlüssel = Verzeichnisname, z. B. /de-DE)
const generateLangModuleMap = () => {
  const fullPaths = Object.keys(langModules)
  fullPaths.forEach((fullPath) => {
    const k = fullPath.replace('./lang', '') // z. B. /de-DE/index.ts
    const startIndex = 1
    const lastIndex = k.lastIndexOf('/')
    const code = k.substring(startIndex, lastIndex) // z. B. de-DE
    if (!langModuleMap.has(code)) {
      langCode.push(code)
      langModuleMap.set(code, langModules[fullPath])
    }
  })
}

// Messages exportieren
const importMessages = computed(() => {
  generateLangModuleMap()
  const message: Recordable = {}
  langModuleMap.forEach((value: any, key) => {
    message[key] = value.default
  })
  return message
})

// Start-Locale bestimmen: bevorzugte Sprache → auf unterstützte Ordner normalisieren
const initialLocale = (() => {
  const stored = useLocalStorage(localeConfigKey, getBrowserLang()).value
  const normalized = normalizeLocale(stored || getBrowserLang())
  // Falls es (noch) kein Sprachpaket für normalized gibt, auf en-US zurückfallen
  return importMessages.value[normalized] ? normalized : 'en-US'
})()

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en-US',
  messages: importMessages.value,
  globalInjection: true
})

export const langList = computed(() => {
  if (langModuleMap.size === 0) generateLangModuleMap()

  const list: any = []
  langModuleMap.forEach((value: any, key) => {
    list.push({
      label: (value.default as any).lang, // z. B. 'Deutsch'
      value: key                             // z. B. 'de-DE'
    })
  })

  return list
})

export const { t } = i18n.global
export default i18n
