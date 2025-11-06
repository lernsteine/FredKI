import tool from '@/api/tool/tool'

export default {
  title: 'Anwendungen',
  createApplication: 'Einfache Anwendung erstellen',
  createWorkFlowApplication: 'Erweiterte Orchestrierungsanwendung erstellen',
  importApplication: 'Anwendung importieren',
  copyApplication: 'Anwendung kopieren',
  workflow: 'Erweiterte Orchestrierung',
  simple: 'Einfache Anwendung',
  simplePlaceholder: 'Geeignet für Einsteiger: per Formular einen KI-Chat-Assistenten erstellen',
  workflowPlaceholder: 'Geeignet für Fortgeschrittene: per Low-Code-Drag-and-Drop komplexe Logik für einen KI-Chat-Assistenten erstellen',
  appTest: 'Debug-Vorschau',
  searchBar: {
    placeholder: 'Nach Name suchen',
  },
  status: {
    published: 'Veröffentlicht',
    unpublished: 'Nicht veröffentlicht',
  },

  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Zum Chat',
    publish: 'Veröffentlichen',
  },
  delete: {
    confirmTitle: 'Soll die Anwendung gelöscht werden: ',
    confirmMessage: 'Nach dem Löschen steht diese Anwendung nicht mehr zur Verfügung. Bitte vorsichtig fortfahren.',
  },
  tip: {
    publishSuccess: 'Veröffentlichung erfolgreich',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage: 'Die Community Edition unterstützt maximal 5 Anwendungen. Für mehr Anwendungen bitte auf die Professional Edition upgraden.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte Eingaben prüfen oder später erneut versuchen',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte Eingaben prüfen oder später erneut versuchen',
  },
  form: {
    appName: {
      label: 'Name',
      placeholder: 'Bitte Anwendungsnamen eingeben',
      requiredMessage: 'Bitte Anwendungsnamen eingeben',
    },
    appDescription: {
      placeholder: 'Beschreibe die Einsatzszenarien und den Zweck dieser Anwendung, z. B.: Der XXX-Assistent beantwortet vom Nutzer gestellte Fragen zur Nutzung des XXX-Produkts',
    },
    appType: {
      label: 'Typ',
      simplePlaceholder: 'Geeignet für Einsteiger zur Erstellung eines Assistenten',
      workflowPlaceholder: 'Geeignet für Fortgeschrittene zur individuellen Workflow-Erstellung des Assistenten',
    },
    appTemplate: {
      blankApp: {
        title: 'Leere Vorlage',
      },
      assistantApp: {
        title: 'Wissensbasis-Q&A-Assistent',
        description: 'Basierend auf der Nutzerfrage werden relevante Inhalte der Wissensbasis als Referenz für das KI-Modell herangezogen',
      },
    },
    aiModel: {
      label: 'AI-Modell',
      placeholder: 'Bitte AI-Modell auswählen',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt; du kannst Variablen des Systems referenzieren: {data} sind die in der Wissensbasis gefundenen Abschnitte; {question} ist die vom Nutzer gestellte Frage.',
      tooltip: 'Legt die Rolle des Modells oder die zu befolgenden Anweisungen fest',
    },

    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: ' (keine Wissensbasisreferenz)',
      references: ' (mit Wissensbasis-Referenz)',
      placeholder:
        'Benutzer-Prompt; du kannst Variablen des Systems referenzieren: {data} sind die in der Wissensbasis gefundenen Abschnitte; {question} ist die vom Nutzer gestellte Frage.',
      requiredMessage: 'Bitte Benutzer-Prompt eingeben',
      tooltip:
        'Frage oder Anweisung, die der Nutzer an das Modell richtet',
      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts kannst du die Gesprächsrichtung steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwende z. B. die Variable {question} als Platzhalter für die Nutzerfrage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts kannst du die Gesprächsrichtung steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwende Variablen: {data} als Platzhalter für zitierte Abschnitte aus der Wissensbasis; {question} als Platzhalter für die Nutzerfrage.',
      defaultPrompt: `Bekannte Informationen: {data}
Nutzerfrage: {question}
Anforderungen an die Antwort:
- Bitte auf Chinesisch antworten`,
    },
    historyRecord: {
      label: 'Chatverlauf',
    },
    relatedKnowledge: {
      label: 'Verknüpfte Wissensbasis',
      placeholder: 'Die verknüpfte Wissensbasis wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrstufiger Dialog',

    prologue: 'Begrüßung',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Du kannst mir Fragen zur Nutzung von XXX stellen.\n- Welche Hauptfunktionen hat XXX?\n- Wie wird XXX abgerechnet?\n- Weiterleitung an den menschlichen Support benötigt',

    problemOptimization: {
      label: 'Fragen-Optimierung',
      tooltip: 'Optimiert die aktuelle Frage anhand des Chatverlaufs, um Wissenspunkte besser zu treffen.',
    },
    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte Spracherkennungsmodell auswählen',
      requiredMessage: 'Bitte Spracheingabe-Modell auswählen',
      autoSend: 'Automatisch senden',
    },
    voicePlay: {
      label: 'Sprachausgabe',
      placeholder: 'Bitte Sprachsynthese-Modell auswählen',
      requiredMessage: 'Bitte Sprachausgabe-Modell auswählen',
      autoPlay: 'Automatisch abspielen',
      browser: 'Im Browser abspielen (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Probehören',
    },
    reasoningContent: {
      label: 'Gedanken ausgeben',
      tooltip: 'Bitte gemäß den vom Modell zurückgegebenen „Gedanken“-Tags einstellen; der Inhalt zwischen den Tags gilt als Denkprozess',
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'MCP/Tool-Ausführungsprozess ausgeben',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte Thema des Prompts eingeben',
    title: 'Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Weiter generieren',
    replace: 'Ersetzen',
    exit: 'Beenden bestätigen und die von der KI generierten Inhalte verwerfen?',
    loading: 'Wird generiert...',
  },
  dialog: {
    addKnowledge: 'Verknüpfte Wissensbasis hinzufügen',
    addKnowledgePlaceholder: 'Die ausgewählte Wissensbasis muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Suchmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip: 'Die Vektorsuche basiert auf Vektorähnlichkeit und eignet sich für große Datenmengen in der Wissensbasis.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip: 'Die Volltextsuche basiert auf Textähnlichkeit und eignet sich für kleine Datenmengen in der Wissensbasis.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Die Hybridsuche kombiniert Vektor- und Textähnlichkeit und eignet sich für mittlere Datenmengen in der Wissensbasis.',
    similarityThreshold: 'Ähnlichkeit größer als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Relevanz.',
    topReferences: 'Anzahl der zitierten Abschnitte (TOP)',
    maxCharacters: 'Maximale Anzahl zitierter Zeichen',
    noReferencesAction: 'Wenn keine Wissensbasisabschnitte zitiert werden',
    continueQuestioning: 'Weiter Fragen an das KI-Modell stellen',
    provideAnswer: 'Vorgegebene Antwort',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Meine Wissensbasis enthält nur Wissen zum XXX-Produkt. Bitte beschreibe deine Frage erneut.',
    defaultPrompt1:
      'In den Klammern () steht die Nutzerfrage. Leite anhand des Kontexts die Nutzerfrage ({question}) ab. Anforderungen: Gib eine vervollständigte Frage aus und setze sie in',
    defaultPrompt2: 'Tags',
  },
  applicationAccess: {
    title: 'Anwendungsanbindung',
    wecom: 'Enterprise-WeChat-App',
    wecomTip: 'Intelligente Enterprise-WeChat-App erstellen',
    wecomBot: 'Enterprise-WeChat-Bot',
    wecomBotTip: 'Intelligenten Enterprise-WeChat-Bot erstellen',
    dingtalk: 'DingTalk-App',
    dingtalkTip: 'Intelligente DingTalk-App erstellen',
    wechat: 'WeChat-Offizieller Account',
    wechatTip: 'Intelligente Lösung für offiziellen Account erstellen',
    lark: 'Feishu-App',
    larkTip: 'Intelligente Feishu-App erstellen',
    slack: 'Slack',
    slackTip: 'Intelligente Slack-App erstellen',
    setting: 'Konfigurieren',
    callback: 'Callback-URL',
    callbackTip: 'Bitte Callback-URL eingeben',
    wecomPlatform: 'Enterprise-WeChat-Backend',
    wechatPlatform: 'WeChat-Öffentliche Plattform',
    dingtalkPlatform: 'DingTalk-Open-Plattform',
    larkPlatform: 'Feishu-Open-Plattform',
    wecomSetting: {
      title: 'Konfiguration der Enterprise-WeChat-App',
      cropId: 'Unternehmens-ID',
      cropIdPlaceholder: 'Bitte Unternehmens-ID eingeben',
      agentIdPlaceholder: 'Bitte Agent-ID eingeben',
      secretPlaceholder: 'Bitte Secret eingeben',
      tokenPlaceholder: 'Bitte Token eingeben',
      encodingAesKeyPlaceholder: 'Bitte EncodingAESKey eingeben',
      authenticationSuccessful: 'Authentifizierung erfolgreich',
      urlInfo: '- App-Verwaltung → Eigene → Erstellte App → Nachrichten empfangen → in der „API-Empfangs-URL“',
    },
    wecomBotSetting: {
      title: 'Konfiguration des Enterprise-WeChat-Bots',
      urlInfo: '- Verwaltungstools → Intelligenter Bot → Bot erstellen → in der „URL“ des API-Modus',
    },
    dingtalkSetting: {
      title: 'DingTalk-App-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo: '- Auf der Bot-Seite den „Nachrichtenempfangsmodus“ auf HTTP stellen und die obige URL in „Nachrichtenempfangsadresse“ eintragen',
    },
    wechatSetting: {
      title: 'Konfiguration des WeChat-Official-Accounts',
      appId: 'Entwickler-ID (APP ID)',
      appIdPlaceholder: 'Bitte Entwickler-ID (APP ID) eingeben',
      appSecret: 'Entwickler-Schlüssel (APP SECRET)',
      appSecretPlaceholder: 'Bitte Entwickler-Schlüssel (APP SECRET) eingeben',
      token: 'Token (TOKEN)',
      tokenPlaceholder: 'Bitte Token (TOKEN) eingeben',
      aesKey: 'Schlüssel zur Nachrichten-Ver/Entschlüsselung',
      aesKeyPlaceholder: 'Bitte Schlüssel zur Nachrichten-Ver/Entschlüsselung eingeben',
      urlInfo: '- Einstellungen & Entwicklung → Grundkonfiguration → in „Serveradresse-URL“',
    },
    larkSetting: {
      title: 'Feishu-App-Konfiguration',
      appIdPlaceholder: 'Bitte App ID eingeben',
      appSecretPlaceholder: 'Bitte App Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verification Token eingeben',
      urlInfo: '- Ereignisse & Callback → Ereigniskonfiguration → in der „Request-URL“',
      folderTokenPlaceholder: 'Bitte Folder Token eingeben',
    },
    slackSetting: {
      title: 'Slack-App-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot User Token eingeben',
    },
    copyUrl: 'Link kopieren und einfügen in',
  },
  hitTest: {
    title: 'Treffer-Test',
    text: 'Debuggt die Absatz-Treffer bei Nutzerfragen, um die Antwortqualität sicherzustellen.',
    emptyMessage1: 'Getroffene Abschnitte werden hier angezeigt',
    emptyMessage2: 'Keine getroffenen Abschnitte',
  },
  publishTime: 'Veröffentlichungszeit',
}
