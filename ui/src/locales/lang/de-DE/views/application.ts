export default {
  title: 'APP',
  createApplication: 'Einfache APP erstellen',
  createWorkFlowApplication: 'Workflow APP erstellen',
  importApplication: 'APP importieren',
  copyApplication: 'APP kopieren',
  workflow: 'WORKFLOW',
  simple: 'EINFACH',
  simplePlaceholder: 'Geeignet für Anfänger, um Assistenten mit Formulareinstellungen zu erstellen',
  workflowPlaceholder:
    'Geeignet für fortgeschrittene Benutzer, um komplexe Logik-KI-Assistenten mit Low-Code-Drag-and-Drop zu bauen',
  appTest: 'Debug-Vorschau',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
  },
  delete: {
    confirmTitle: 'Sind Sie sicher, dass Sie diese APP löschen möchten: ',
    confirmMessage:
      'Das Löschen dieser APP stellt ihre Dienste nicht mehr zur Verfügung. Bitte gehen Sie vorsichtig vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt bis zu 5 APPs. Wenn Sie mehr APPs benötigen, upgraden Sie bitte zur Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    loadingErrorMessage: 'Laden der Konfiguration fehlgeschlagen, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    noDocPermission: 'Keine Berechtigung, Dokumente zu erstellen',
  },

  form: {
    appName: {
      placeholder: 'Bitte geben Sie den APP-Namen ein',
      requiredMessage: 'APP-Name ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das APP-Szenario und die Nutzung, z. B.: XXX-Assistent, der Benutzerfragen zur Nutzung des XXX-Produkts beantwortet',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Anfänger, um Assistenten zu erstellen.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Benutzer, um den Workflow des Assistenten anzupassen',
    },
    appTemplate: {
      blankApp: {
        title: 'Leere APP',
      },
      assistantApp: {
        title: 'Wissensassistent',
        description: 'Geeignet für fortgeschrittene Benutzer, um den Workflow des Assistenten anzupassen',
      },
    },
    aiModel: {
      label: 'KI-Modell',
      placeholder: 'Bitte wählen Sie ein KI-Modell aus',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt, Sie können Systemvariablen referenzieren: {data} ist das getroffene Segment in der Wissensbasis; {question} ist die vom Benutzer gestellte Frage.',
      tooltip: 'Rollen- oder Anweisungen für das Modell festlegen',
    },

    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '(Keine Referenzwissen)',
      references: '(Referenzwissen)',
      placeholder:
        'Benutzer-Prompt, Sie können Systemvariablen referenzieren: {data} ist das getroffene Segment in der Wissensbasis; {question} ist die vom Benutzer gestellte Frage',
      requiredMessage: 'Bitte geben Sie den Benutzer-Prompt ein',
      tooltip: 'Die Frage oder Anweisung, die der Benutzer dem Modell stellt',

      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Chat-Richtung des großen Modells leiten. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {question} ist die vom Benutzer gestellte Frage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Chat-Richtung des großen Modells leiten. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {data} enthält bekannte Informationen aus dem Wissen; {question} ist die vom Benutzer gestellte Frage.',
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
      placeholder: 'Verwandtes Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrere Runden Dialog',

    prologue: 'Prolog',
    defaultPrologue:
      'Hallo, ich bin XXX-Assistent. Sie können mich zu Fragen zur Nutzung von XXX befragen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Optimieren Sie die aktuelle Frage basierend auf dem historischen Chat, um besser zu Wissenspunkten zu passen.',
    },

    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte wählen Sie ein Spracherkennungsmodell aus',
      requiredMessage: 'Bitte wählen Sie ein Sprach-Eingabemodell aus',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachwiedergabe',
      placeholder: 'Bitte wählen Sie ein Sprachsynthese-Modell aus',
      requiredMessage: 'Bitte wählen Sie ein Sprachwiedergabe-Modell aus',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Denkprozess ausgeben',
      tooltip:
        "Bitte legen Sie das Denk-Label basierend auf der Rückgabe des Modells fest, und der Inhalt in der Mitte des Labels wird als Denkprozess erkannt.",
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'MCP/Tool-Ausführungsprozess ausgeben',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte geben Sie das Prompt-Thema ein',
    title: 'Der Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Generierung fortsetzen',
    replace: 'Ersetzen',
    exit: 'Sind Sie sicher, dass Sie beenden und den KI-generierten Inhalt verwerfen möchten?',
    loading: 'Wird generiert...',
  },
  dialog: {
    addKnowledge: 'Verwandtes Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss dasselbe Einbettungsmodell verwenden',
    selectSearchMode: 'Abrufmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Vektorsuche ist eine Abrufmethode basierend auf Vektordistanzberechnungen, geeignet für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Volltextsuche ist eine Abrufmethode basierend auf Textähnlichkeit, geeignet für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Hybridsuche ist eine Abrufmethode basierend auf sowohl Vektor- als auch Textähnlichkeit, geeignet für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top N Segmente',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weiterfragen beim KI-Modell',
    provideAnswer: 'Antwortinhalt festlegen',
    designated_answer:
      'Hallo, ich bin XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Frage des Benutzers dar. Basierend auf dem Kontext, bitte die Frage des Benutzers ({question}) spekulieren und vervollständigen. Die Anforderung ist, eine vollständige Frage auszugeben und sie in",
    defaultPrompt2: 'Tag zu platzieren',
  },
  applicationAccess: {
    title: 'APP-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'WeCom intelligente APP erstellen',
    wecomBot: 'WeCom Bot',
    wecomBotTip: 'WeCom intelligente Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk intelligente APP erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat intelligente APP erstellen',
    lark: 'Lark',
    larkTip: 'Lark intelligente APP erstellen',
    setting: 'Einstellung',
    callback: 'Rückrufadresse',
    callbackTip: 'Bitte geben Sie die Rückrufadresse ein',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack intelligente APP erstellen',
    wecomSetting: {
      title: 'WeCom-Konfiguration',
      cropId: 'Corp ID',
      cropIdPlaceholder: 'Bitte geben Sie die Corp ID ein',
      agentIdPlaceholder: 'Bitte geben Sie die Agent ID ein',
      secretPlaceholder: 'Bitte geben Sie das Secret ein',
      tokenPlaceholder: 'Bitte geben Sie das Token ein',
      encodingAesKeyPlaceholder: 'Bitte geben Sie den EncodingAESKey ein',
      authenticationSuccessful: 'Erfolgreich',
      urlInfo:
        '-APP-Management-Selbst erstellte APP-Nachrichten empfangen-"URL" für API empfangen einstellen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte geben Sie die Client ID ein',
      clientSecretPlaceholder: 'Bitte geben Sie das Client Secret ein',
      urlInfo:
        '-Auf der Robot-Seite "Nachrichtenempfangsmodus" auf HTTP-Modus einstellen und die obige URL in die "Nachrichtenempfangsadresse" einfügen',
    },
    wechatSetting: {
      title: 'WeChat-Konfiguration',
      appId: 'APP ID',
      appIdPlaceholder: 'Bitte geben Sie die APP ID ein',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Bitte geben Sie das APP SECRET ein',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte geben Sie das TOKEN ein',
      aesKey: 'Nachrichtenverschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte geben Sie den Nachrichtenverschlüsselungsschlüssel ein',
      urlInfo:
        '-Einstellungen und Entwicklung-Basis-Konfiguration-"Serveradresse URL" in der Server-Konfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom Bot-Konfiguration',
      urlInfo: '-Management-Tools-Smart Bot-Bot erstellen-API-Modus "URL" erstellen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte geben Sie die APP ID ein',
      appSecretPlaceholder: 'Bitte geben Sie das APP Secret ein',
      verificationTokenPlaceholder: 'Bitte geben Sie das Verification Token ein',
      urlInfo:
        '-Ereignisse und Callbacks - Ereignis-Konfiguration - "Anfrageadresse" der Abonnementmethode konfigurieren',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte geben Sie das Signing Secret ein',
      botUserTokenPlaceholder: 'Bitte geben Sie das Bot User Token ein',
    },
    copyUrl: 'Link kopieren und einfügen',
  },
  hitTest: {
    title: 'Treffertest',
    text: 'Testen Sie den Treffereffekt des Wissens basierend auf dem gegebenen Abfragetext.',
    emptyMessage1: 'Ergebnisse des Treffertests werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
  publishStatus: 'Veröffentlichungsstatus',
}
