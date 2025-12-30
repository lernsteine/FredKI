export default {
  title: 'Agent',
  createApplication: 'Einfachen Agenten erstellen',
  createWorkFlowApplication: 'Workflow-Agenten erstellen',
  importApplication: 'Agenten importieren',
  copyApplication: 'Agenten kopieren',
  workflow: 'WORKFLOW',
  simple: 'EINFACH',
  senior: 'WORKFLOW',
  simpleAgent: 'EINFACH',
  simplePlaceholder: 'Geeignet für Einsteiger, um Assistenten mit Formulareinstellungen zu erstellen',
  workflowPlaceholder:
    'Geeignet für fortgeschrittene Benutzer, um komplexe logische KI-Assistenten mit Low-Code-Drag-and-Drop zu erstellen',
  appTest: 'Debug-Vorschau',
  skill: 'Skill',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
  },
  delete: {
    confirmTitle: 'Sind Sie sicher, dass Sie diesen Agenten löschen möchten: ',
    confirmMessage:
      'Das Löschen dieses Agenten macht seine Dienste nicht mehr verfügbar. Bitte gehen Sie vorsichtig vor.',
    resourceCountMessage:
      'Dieser Agent ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte gehen Sie vorsichtig vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt bis zu 5 Agenten. Wenn Sie mehr Agenten benötigen, upgraden Sie bitte auf die Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    noDocPermission: 'Keine Berechtigung zum Erstellen von Dokumenten',
    confirmUse: 'Sind Sie sicher, dass Sie',
    overwrite: 'den aktuellen Workflow überschreiben möchten',
  },
  form: {
    appName: {
      placeholder: 'Bitte Agentennamen eingeben',
      requiredMessage: 'Agentenname ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das Agentenszenario und die Nutzung, z. B.: XXX-Assistent, der Benutzerfragen zur Nutzung des XXX-Produkts beantwortet',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Einsteiger zum Erstellen von Assistenten.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Benutzer zum Anpassen des Assistenten-Workflows',
    },
    appTemplate: {
      blankApp: {
        title: 'Leerer Agent',
      },
      assistantApp: {
        title: 'Wissens-Assistent',
        description: 'Geeignet für fortgeschrittene Benutzer zum Anpassen des Assistenten-Workflows',
      },
    },
    aiModel: {
      label: 'KI-Modell',
      placeholder: 'Bitte KI-Modell auswählen',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt, Sie können Systemvariablen referenzieren: {data} ist der getroffene Abschnitt in der Wissensbasis; {question} ist die gestellte Frage des Benutzers.',
      tooltip: 'Legen Sie die Rolle oder Anweisungen fest, die das Modell befolgen soll',
    },
    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '（Keine Wissensreferenzen）',
      references: ' (Wissensreferenzen)',
      placeholder:
        'Benutzer-Prompt, Sie können Systemvariablen referenzieren: {data} ist der getroffene Abschnitt in der Wissensbasis; {question} ist die gestellte Frage des Benutzers',
      requiredMessage: 'Bitte Benutzer-Prompt eingeben',
      tooltip: 'Die Frage oder der Befehl, den der Benutzer dem Modell stellt',
      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Large-Model-Chats steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {question} ist die gestellte Frage des Benutzers.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Large-Model-Chats steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {data} trägt bekannte Informationen aus dem Wissen; {question} ist die gestellte Frage des Benutzers.',
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
      label: 'Zugehöriges Wissen',
      placeholder: 'Zugehöriges Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehr-Runden-Dialog',
    prologue: 'Prolog',
    defaultPrologue:
      'Hallo, ich bin XXX-Assistent. Sie können mir Fragen zur Nutzung von XXX stellen.\n- Welche Hauptfunktionen hat XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Optimieren Sie die aktuelle Frage basierend auf dem historischen Chat, um besser zu Wissenspunkten zu passen.',
    },
    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte Spracherkennungsmodell auswählen',
      requiredMessage: 'Bitte Sprach-Eingabemodell auswählen',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachwiedergabe',
      placeholder: 'Bitte Sprachsynthesemodell auswählen',
      requiredMessage: 'Bitte Sprachwiedergabemodell auswählen',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Denkprozess ausgeben',
      tooltip:
        "Bitte legen Sie das Denk-Label basierend auf der Modellrückgabe fest, der Inhalt zwischen den Labels wird als Denkprozess erkannt.",
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'Ausführungsprozess ausgeben',
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
    exit: 'Sind Sie sicher, dass Sie beenden und den KI-generierten Inhalt verwerfen möchten?',
    loading: 'Generiere...',
  },
  dialog: {
    addKnowledge: 'Zugehöriges Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Abrufmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Vektorsuche ist eine Abrufmethode basierend auf Vektorabstandsberechnungen, geeignet für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Volltextsuche ist eine Abrufmethode basierend auf Textähnlichkeit, geeignet für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Hybridsuche ist eine Abrufmethode basierend auf Vektor- und Textähnlichkeit, geeignet für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top-N-Abschnitte',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weiterfragen an das KI-Modell',
    provideAnswer: 'Feste Antwortinhalt angeben',
    designated_answer:
      'Hallo, ich bin XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Frage des Benutzers dar. Basierend auf dem Kontext spekulieren und vervollständigen Sie bitte die Frage des Benutzers ({question}). Die Anforderung ist, eine vervollständigte Frage auszugeben und sie zu platzieren",
    defaultPrompt2: 'Tag',
  },
  applicationAccess: {
    title: 'Drittanbieter-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'WeCom-Agent erstellen',
    wecomBot: 'WeCom-Bot',
    wecomBotTip: 'Intelligenten WeCom-Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk-Agent erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat-Agent erstellen',
    lark: 'Lark',
    larkTip: 'Lark-Agent erstellen',
    setting: 'Einstellung',
    callback: 'Rückruf-Adresse',
    callbackTip: 'Bitte Rückruf-Adresse ausfüllen',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-Agent erstellen',
    wecomSetting: {
      title: 'WeCom-Konfiguration',
      cropId: 'Crop-ID',
      cropIdPlaceholder: 'Bitte Crop-ID eingeben',
      agentIdPlaceholder: 'Bitte Agent-ID eingeben',
      secretPlaceholder: 'Bitte Secret eingeben',
      tokenPlaceholder: 'Bitte Token eingeben',
      encodingAesKeyPlaceholder: 'Bitte EncodingAESKey eingeben',
      authenticationSuccessful: 'Erfolgreich',
      urlInfo:
        '-APP-Verwaltung-Selbstgebaut-Erstellte APP-Nachrichten empfangen-"URL" der API-Empfangs einstellen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client-ID eingeben',
      clientSecretPlaceholder: 'Bitte Client-Secret eingeben',
      urlInfo:
        '-Auf der Robot-Seite "Nachrichtenempfangsmodus" auf HTTP-Modus einstellen und die obige URL in die "Nachrichtenempfangsadresse" eintragen',
    },
    wechatSetting: {
      title: 'WeChat-Konfiguration',
      appId: 'APP-ID',
      appIdPlaceholder: 'Bitte APP-ID eingeben',
      appSecret: 'APP-SECRET',
      appSecretPlaceholder: 'Bitte APP-SECRET eingeben',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte TOKEN eingeben',
      aesKey: 'Nachrichten-Verschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte Nachrichten-Verschlüsselungsschlüssel eingeben',
      urlInfo:
        '-Einstellungen und Entwicklung-Basis-Konfiguration-"Server-Adresse URL" in der Server-Konfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom-Bot-Konfiguration',
      urlInfo: '-Verwaltungstools-Intelligenter Bot-Bot erstellen-API-Modus "URL" erstellen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte APP-ID eingeben',
      appSecretPlaceholder: 'Bitte APP-Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verifizierungstoken eingeben',
      urlInfo:
        '-Events und Rückrufe - Event-Konfiguration - "Anforderungsadresse" der Abonnementmethode konfigurieren',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing-Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot-Benutzer-Token eingeben',
    },
    copyUrl: 'Link kopieren und eintragen',
  },
  hitTest: {
    title: 'Abruftest',
    text: 'Testen Sie den Treffereffekt des Wissens basierend auf dem gegebenen Abfragetext.',
    emptyMessage1: 'Abruftest-Ergebnisse werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
  publishStatus: 'Veröffentlichungsstatus',
}
