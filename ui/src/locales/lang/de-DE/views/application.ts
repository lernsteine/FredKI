export default {
  title: 'APP',
  createApplication: 'Einfache APP erstellen',
  createWorkFlowApplication: 'Workflow-APP erstellen',
  importApplication: 'APP importieren',
  copyApplication: 'APP kopieren',
  workflow: 'WORKFLOW',
  simple: 'EINFACH',
  simplePlaceholder: 'Geeignet für Einsteiger, um Assistenten über Formulareinstellungen zu erstellen',
  workflowPlaceholder:
    'Geeignet für fortgeschrittene Nutzer, um komplexe Logik-KI-Assistenten mit Low-Code-Drag-and-Drop zu bauen',
  appTest: 'Debug-Vorschau',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
  },
  delete: {
    confirmTitle: 'Möchten Sie diese APP wirklich löschen: ',
    confirmMessage:
      'Nach dem Löschen der APP wird sie nicht mehr zur Verfügung stehen. Bitte gehen Sie vorsichtig vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt maximal 5 APPS. Für mehr APPS bitte auf die Professional Edition upgraden.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte Eingaben überprüfen oder später erneut versuchen',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte Eingaben überprüfen oder später erneut versuchen',
    noDocPermission: 'Keine Berechtigung zum Erstellen von Dokumenten',
    confirmUse: 'Möchten Sie wirklich verwenden',
    overwrite: 'den aktuellen Workflow überschreiben',
  },

  form: {
    appName: {
      placeholder: 'Bitte APP-Namen eingeben',
      requiredMessage: 'APP-Name ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das Szenario und den Einsatz der APP, z. B.: XXX-Assistent, der Fragen zu XXX-Produktnutzung beantwortet',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Einsteiger, um Assistenten zu erstellen.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Nutzer, um den Workflow des Assistenten anzupassen',
    },
    appTemplate: {
      blankApp: {
        title: 'Leere APP',
      },
      assistantApp: {
        title: 'Wissens-Assistent',
        description: 'Geeignet für fortgeschrittene Nutzer, um den Workflow des Assistenten anzupassen',
      },
    },
    aiModel: {
      label: 'KI-Modell',
      placeholder: 'Bitte KI-Modell auswählen',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt, Sie können System-Variablen verwenden: {data} ist der getroffene Wissensabschnitt; {question} ist die gestellte Frage.',
      tooltip: 'Legen Sie die Rolle oder Anweisungen fest, die das Modell befolgen soll',
    },

    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '（Keine Referenz-Wissen）',
      references: ' (Referenz-Wissen)',
      placeholder:
        'Benutzer-Prompt, Sie können System-Variablen verwenden: {data} ist der getroffene Wissensabschnitt; {question} ist die gestellte Frage',
      requiredMessage: 'Bitte Benutzer-Prompt eingeben',
      tooltip: 'Die Frage oder der Befehl, den der Benutzer an das Modell stellt',

      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des großen Modell-Chats steuern. Dieser Prompt wird am Anfang des Kontexts festgelegt. Verwendete Variablen: {question} ist die gestellte Frage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des großen Modell-Chats steuern. Dieser Prompt wird am Anfang des Kontexts festgelegt. Verwendete Variablen: {data} enthält bekannte Informationen aus dem Wissen; {question} ist die gestellte Frage.',
      defaultPrompt: `Bekannte Informationen: {data}
Frage: {question}
Antwortanforderungen:
- Bitte verwenden Sie knappe und professionelle Sprache, um die Frage des Benutzers zu beantworten.
`,
    },
    historyRecord: {
      label: 'Chat-Verlauf',
    },
    relatedKnowledge: {
      label: 'Verwandtes Wissen',
      placeholder: 'Hier wird das ausgewählte Wissen angezeigt',
    },
    multipleRoundsDialogue: 'Mehrere Runden Dialog',

    prologue: 'Einführungstext',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Sie können mir Fragen zur Nutzung von XXX stellen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Optimierung der aktuellen Frage basierend auf dem Chat-Verlauf, um besser zu Wissenspunkten zu passen.',
    },

    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte Spracherkennungsmodell auswählen',
      requiredMessage: 'Bitte ein Sprach-Eingabemodell auswählen',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachwiedergabe',
      placeholder: 'Bitte Sprachsynthese-Modell auswählen',
      requiredMessage: 'Bitte ein Sprachwiedergabe-Modell auswählen',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Denkprozess ausgeben',
      tooltip:
        'Bitte setzen Sie das Denk-Label basierend auf der Rückgabe des Modells, der Inhalt zwischen den Labels wird als Denkprozess erkannt.',
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'MCP/Tool-Ausführungsprozess ausgeben',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte Prompt-Thema eingeben',
    title: 'Der Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Generierung fortsetzen',
    replace: 'Ersetzen',
    exit: 'Möchten Sie wirklich beenden und den KI-generierten Inhalt verwerfen?',
    loading: 'Generieren...',
  },
  dialog: {
    addKnowledge: 'Verwandtes Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss das gleiche Embedding-Modell verwenden',
    selectSearchMode: 'Abrufmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Vektorsuche ist eine Abrufmethode basierend auf Vektordistanzberechnungen, geeignet für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Volltextsuche ist eine Abrufmethode basierend auf Textähnlichkeit, geeignet für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybrid-Suche',
    hybridSearchTooltip:
      'Hybrid-Suche ist eine Abrufmethode basierend auf Vektor- und Textähnlichkeit, geeignet für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top N Abschnitte',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weiterfragen an das KI-Modell',
    provideAnswer: 'Antwortinhalt festlegen',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      'Der Inhalt in Klammern () stellt die Frage des Benutzers dar. Bitte ergänzen und vervollständigen Sie die Frage des Benutzers basierend auf dem Kontext ({question}). Die Anforderung ist, eine vervollständigte Frage auszugeben und sie in',
    defaultPrompt2: 'zu setzen',
  },
  applicationAccess: {
    title: 'APP-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'WeCom-intelligente APP erstellen',
    wecomBot: 'WeCom Bot',
    wecomBotTip: 'WeCom-intelligenten Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk-intelligente APP erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat-intelligente APP erstellen',
    lark: 'Lark',
    larkTip: 'Lark-intelligente APP erstellen',
    setting: 'Einstellung',
    callback: 'Callback-Adresse',
    callbackTip: 'Bitte Callback-Adresse eingeben',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-intelligente APP erstellen',
    wecomSetting: {
      title: 'WeCom-Konfiguration',
      cropId: 'Crop ID',
      cropIdPlaceholder: 'Bitte Crop ID eingeben',
      agentIdPlaceholder: 'Bitte Agent ID eingeben',
      secretPlaceholder: 'Bitte Secret eingeben',
      tokenPlaceholder: 'Bitte Token eingeben',
      encodingAesKeyPlaceholder: 'Bitte EncodingAESKey eingeben',
      authenticationSuccessful: 'Erfolgreich',
      urlInfo:
        '-APP-Verwaltung-Selbst erstellt-Erstellte APP-Nachrichten empfangen-Setzen der "URL" für den API-Empfang',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo:
        '-Auf der Robot-Seite "Nachrichtenempfangsmodus" auf HTTP setzen und die obenstehende URL in "Nachrichtenempfangsadresse" eintragen',
    },
    wechatSetting: {
      title: 'WeChat-Konfiguration',
      appId: 'APP ID',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Bitte APP SECRET eingeben',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte TOKEN eingeben',
      aesKey: 'Nachrichtenverschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte Nachrichtenverschlüsselungsschlüssel eingeben',
      urlInfo:
        '-Einstellungen und Entwicklung-Grundkonfiguration-"Server-Adresse URL" in der Server-Konfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom Bot-Konfiguration',
      urlInfo: '-Verwaltungstools-Intelligenter Bot-Bot erstellen-API-Modus "URL" erstellen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecretPlaceholder: 'Bitte APP Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verifizierungs-Token eingeben',
      urlInfo:
        '-Events und Callbacks - Ereigniskonfiguration - "Anfrageadresse" der Abonnementmethode konfigurieren',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot User Token eingeben',
    },
    copyUrl: 'Link kopieren und eintragen',
  },
  hitTest: {
    title: 'Abruf-Test',
    text: 'Testen Sie die Trefferwirkung des Wissens basierend auf dem eingegebenen Abfragetext.',
    emptyMessage1: 'Abruf-Test-Ergebnisse werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
  publishStatus: 'Veröffentlichungsstatus',
}
