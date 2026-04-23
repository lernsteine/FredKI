export default {
  title: 'Agent',
  createApplication: 'Einfachen Agenten erstellen',
  createWorkFlowApplication: 'Workflow-Agenten erstellen',
  importApplication: 'Agent importieren',
  copyApplication: 'Agent kopieren',
  simple: 'EINFACH',
  senior: 'WORKFLOW',
  simpleAgent: 'Einfacher Agent',
  AdvancedAgent: 'Fortgeschrittener Agent',
  simplePlaceholder: 'Erstellen Sie schnell intelligente Agenten mit Basisfunktionen über Formulareinstellungen',
  advancedPlaceholder:
    'Nutzen Sie Low-Code Drag-and-Drop-Methoden, um komplexe Logik und funktionsreiche Agenten flexibel zu orchestrieren',
  appTest: 'Debug-Vorschau',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chatten',
  },
  delete: {
    confirmTitle: 'Sind Sie sicher, dass Sie diesen Agenten löschen möchten: ',
    confirmTitle2: 'Agenten?',
    confirmMessage:
      'Wenn Sie diesen Agenten löschen, werden seine Dienste nicht mehr zur Verfügung stehen. Bitte gehen Sie mit Vorsicht vor.',
    resourceCountMessage:
      'Dieser Agent ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte gehen Sie mit Vorsicht vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt bis zu 5 Agenten. Wenn Sie mehr Agenten benötigen, führen Sie bitte ein Upgrade auf die Professional Edition durch.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte überprüfen Sie Ihre Eingabe oder versuchen Sie es später erneut',
    noDocPermission: 'Keine Berechtigung zum Erstellen von Dokumenten',
    confirmUse: 'Sind Sie sicher, dass Sie dies verwenden möchten?',
    overwrite: 'den aktuellen Workflow überschreiben',
  },
  longTermMemory: {
    title: 'Langzeitgedächtnis',
    setting: 'Einstellungen für Langzeitgedächtnis',
    triggerType: 'Trigger-Typ',
    roundTrigger: 'Rundenbasierter Trigger',
    roundTriggerTip: 'Nach N Runden werden automatisch N Konversationsrunden extrahiert, um ein Gedächtnis zu generieren',
    triggerInterval: 'Trigger-Intervall',
    scheduledTrigger: 'Geplanter Trigger',
    scheduledTriggerTip: 'Nach Erreichen der eingestellten Zeit werden automatisch alle Konversationen innerhalb des Zyklus extrahiert, um ein Gedächtnis zu generieren',
    cronExpressionInvalid: 'Cron-Ausdruck ist ungültig',
    tips1: `Nach der Aktivierung werden neue Konversationen ab dem Aktivierungszeitpunkt aufgezeichnet und periodisch ein Gedächtnis generiert, das über`,
    tips2: `Variablen im System-Prompt aufgerufen werden kann.
Nach der Deaktivierung wird das Langzeitgedächtnis der Konversationsbenutzer gelöscht, und bei erneuter Aktivierung beginnt die Aufzeichnung ab dem Aktivierungspunkt von vorn.`,
  },
  form: {
    appName: {
      placeholder: 'Bitte geben Sie den Namen des Agenten ein',
      requiredMessage: 'Name des Agenten ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das Szenario und den Einsatz des Agenten, z. B.: XXX-Assistent beantwortet Benutzerfragen zur Nutzung des Produkts XXX',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Anfänger, um Assistenten zu erstellen.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Benutzer, um den Workflow des Assistenten anzupassen',
    },
    appTemplate: {
      blankApp: {
        title: 'Leerer Agent',
      },
      assistantApp: {
        title: 'Wissens-Assistent',
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
        'System-Prompt; Sie können auf Systemvariablen verweisen: {data} ist der gefundene Abschnitt in der Wissensdatenbank; {question} ist die Frage des Benutzers.',
      tooltip: 'Legen Sie die Rolle oder Anweisungen fest, denen das Modell folgen soll',
    },

    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '（Kein Referenzwissen）',
      references: ' (Mit Referenzwissen)',
      placeholder:
        'Benutzer-Prompt; Sie können auf Systemvariablen verweisen: {data} ist der gefundene Abschnitt in der Wissensdatenbank; {question} ist die Frage des Benutzers',
      requiredMessage: 'Bitte geben Sie einen Benutzer-Prompt ein',
      tooltip: 'Die Frage oder der Befehl, den der Benutzer an das Modell stellt',

      noReferencesTooltip:
        'Durch Anpassen des Prompts können Sie die Richtung des KI-Chats steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {question} ist die Frage des Benutzers.',
      referencesTooltip:
        'Durch Anpassen des Prompts können Sie die Richtung des KI-Chats steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Verwendete Variablen: {data} enthält Informationen aus dem Wissen; {question} ist die Frage des Benutzers.',
      defaultPrompt: `Bekannte Informationen: {data}
        Frage: {question}
        Antwortanforderungen:
        - Bitte verwenden Sie eine präzise und professionelle Sprache, um die Frage des Benutzers zu beantworten.
        `,
    },
    historyRecord: {
      label: 'Chat-Verlauf',
    },
    relatedKnowledge: {
      label: 'Zugehöriges Wissen',
      placeholder: 'Zugehöriges Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrstufiger Dialog',

    prologue: 'Prolog',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Sie können mir Fragen zur Nutzung von XXX stellen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragen-Optimierung',
      tooltip:
        'Optimiert die aktuelle Frage basierend auf dem Chat-Verlauf, um Wissenspunkte besser zu finden.',
    },

    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte wählen Sie ein Spracherkennungsmodell',
      requiredMessage: 'Bitte wählen Sie ein Spracheingabemodell',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachwiedergabe',
      placeholder: 'Bitte wählen Sie ein Sprachsynthesemodell',
      requiredMessage: 'Bitte wählen Sie ein Sprachwiedergabemodell',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Denkprozess ausgeben',
      tooltip:
        "Bitte legen Sie die Thinking-Tags basierend auf der Rückgabe des Modells fest. Der Inhalt zwischen den Tags wird als Denkprozess erkannt.",
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'Ausführungsprozess ausgeben',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte geben Sie das Thema des Prompts ein',
    title: 'Der Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Generierung fortsetzen',
    replace: 'Ersetzen',
    exit: 'Sind Sie sicher, dass Sie den Vorgang abbrechen und die KI-generierten Inhalte verwerten möchten?',
    loading: 'Generiere...',
  },
  dialog: {
    addKnowledge: 'Zugehöriges Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das gewählte Wissen muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Abrufmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Die Vektorsuche ist eine Abrufmethode basierend auf Vektordistanzberechnungen, geeignet für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Die Volltextsuche ist eine Abrufmethode basierend auf Textähnlichkeit, geeignet für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybride Suche',
    hybridSearchTooltip:
      'Die hybride Suche basiert sowohl auf Vektor- als auch auf Textähnlichkeit, geeignet für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top N Segmente',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Frage weiterhin an das KI-Modell stellen',
    provideAnswer: 'Bestimmte Antwort festlegen',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Frage des Benutzers dar. Bitte vervollständigen Sie basierend auf dem Kontext die Frage des Benutzers ({question}). Die Anforderung ist, eine vervollständigte Frage auszugeben und diese in das",
    defaultPrompt2: 'Tag zu setzen',
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
    callback: 'Callback-Adresse',
    callbackTip: 'Bitte geben Sie die Callback-Adresse ein',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-Agent erstellen',
    wecomSetting: {
      title: 'WeCom Konfiguration',
      cropId: 'Corporation ID',
      cropIdPlaceholder: 'Bitte geben Sie die Corporation ID ein',
      agentIdPlaceholder: 'Bitte geben Sie die Agent ID ein',
      secretPlaceholder: 'Bitte geben Sie das Secret ein',
      tokenPlaceholder: 'Bitte geben Sie das Token ein',
      encodingAesKeyPlaceholder: 'Bitte geben Sie den EncodingAESKey ein',
      authenticationSuccessful: 'Erfolgreich',
      urlInfo:
        '-APP Management-Eigenbau-Erstellte APP-Nachrichten empfangen-Setzen Sie die vom API empfangene "URL"',
    },
    dingtalkSetting: {
      title: 'DingTalk Konfiguration',
      clientIdPlaceholder: 'Bitte geben Sie die Client ID ein',
      clientSecretPlaceholder: 'Bitte geben Sie das Client Secret ein',
      urlInfo:
        '-Stellen Sie auf der Roboter-Seite den "Nachrichten-Empfangsmodus" auf HTTP-Modus um und tragen Sie die obige URL in die "Empfangsadresse" ein',
    },
    wechatSetting: {
      title: 'WeChat Konfiguration',
      appId: 'APP ID',
      appIdPlaceholder: 'Bitte geben Sie die APP ID ein',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Bitte geben Sie das APP SECRET ein',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte geben Sie das TOKEN ein',
      aesKey: 'Verschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte geben Sie den Schlüssel zur Nachrichtenverschlüsselung ein',
      urlInfo:
        '-Einstellungen & Entwicklung-Basiskonfiguration-"Server-Adresse URL" in der Serverkonfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom Bot Konfiguration',
      urlInfo: '-Management Tools-Smart Bot-Bot erstellen-API-Modus "URL" erstellen',
    },
    larkSetting: {
      title: 'Lark Konfiguration',
      appIdPlaceholder: 'Bitte geben Sie die APP ID ein',
      appSecretPlaceholder: 'Bitte geben Sie das APP Secret ein',
      verificationTokenPlaceholder: 'Bitte geben Sie das Verifizierungs-Token ein',
      urlInfo:
        '-Ereignisse und Callbacks - Ereigniskonfiguration - Konfigurieren Sie die "Anfrageadresse" der Abonnementmethode',
    },
    slackSetting: {
      title: 'Slack Konfiguration',
      signingSecretPlaceholder: 'Bitte geben Sie das Signing Secret ein',
      botUserTokenPlaceholder: 'Bitte geben Sie das Bot User Token ein',
    },
    copyUrl: 'Link kopieren und einfügen',
  },
  hitTest: {
    title: 'Abruf-Test',
    text: 'Testen Sie die Trefferquote der Wissensdatenbank basierend auf einem Suchtext.',
    emptyMessage1: 'Ergebnisse des Abruf-Tests werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeitpunkt',
  publishStatus: 'Veröffentlichungsstatus',
}
