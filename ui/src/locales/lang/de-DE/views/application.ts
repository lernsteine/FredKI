export default {
  title: 'Agent',
  createApplication: 'Einfachen Agenten erstellen',
  createWorkFlowApplication: 'Workflow-Agenten erstellen',
  importApplication: 'Agenten importieren',
  copyApplication: 'Agenten kopieren',
  simple: 'EINFACH',
  senior: 'WORKFLOW',
  simpleAgent: 'Einfacher Agent',
  AdvancedAgent: 'Erweiterter Agent',
  simplePlaceholder: 'Schnell intelligente Agenten mit grundlegenden Funktionen über Formulareinstellungen erstellen',
  advancedPlaceholder:
    'Mit Low-Code-Drag-and-Drop-Methoden komplexe Logik und funktionsreiche Agenten flexibel orchestrieren',
  appTest: 'Debug-Vorschau',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
  },
  delete: {
    confirmTitle: 'Möchten Sie diesen Agenten wirklich löschen: ',
    confirmTitle2: 'Agenten?',
    confirmMessage:
      'Nach dem Löschen dieses Agenten stehen seine Dienste nicht mehr zur Verfügung. Bitte vorsichtig vorgehen.',
    resourceCountMessage:
      'Dieser Agent ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte vorsichtig vorgehen.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community-Edition unterstützt bis zu 5 Agenten. Für mehr Agenten upgraden Sie bitte zur Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte Eingaben überprüfen oder später erneut versuchen',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte Eingaben überprüfen oder später erneut versuchen',
    noDocPermission: 'Keine Berechtigung zum Erstellen von Dokumenten',
    confirmUse: 'Möchten Sie wirklich verwenden',
    overwrite: 'aktuellen Workflow überschreiben',
  },
  form: {
    appName: {
      placeholder: 'Bitte Agenten-Namen eingeben',
      requiredMessage: 'Agenten-Name ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das Agenten-Szenario und den Einsatz, z. B.: XXX-Assistent beantwortet Benutzerfragen zur Nutzung von XXX-Produkt',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Einsteiger, um einen Assistenten zu erstellen.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Nutzer, um den Workflow eines Assistenten individuell anzupassen',
    },
    appTemplate: {
      blankApp: {
        title: 'Leerer Agent',
      },
      assistantApp: {
        title: 'Wissens-Assistent',
        description: 'Geeignet für fortgeschrittene Nutzer, um den Workflow eines Assistenten individuell anzupassen',
      },
    },
    aiModel: {
      label: 'KI-Modell',
      placeholder: 'Bitte KI-Modell auswählen',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt, Sie können Systemvariablen referenzieren: {data} ist das getroffene Segment in der Wissensbasis; {question} ist die vom Benutzer gestellte Frage.',
      tooltip: 'Rolle oder Anweisungen festlegen, die das Modell befolgen soll',
    },
    prompt: {
      label: 'Benutzer-Prompt',
      noReferences: '（Keine Wissensreferenzen）',
      references: ' (Wissensreferenzen)',
      placeholder:
        'Benutzer-Prompt, Sie können Systemvariablen referenzieren: {data} ist das getroffene Segment in der Wissensbasis; {question} ist die vom Benutzer gestellte Frage',
      requiredMessage: 'Bitte Benutzer-Prompt eingeben',
      tooltip: 'Die Frage oder der Befehl, den der Benutzer dem Modell stellt',
      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des großen Modell-Chats steuern. Dieser Prompt wird fix am Anfang des Kontexts stehen. Verwendete Variablen: {question} ist die vom Benutzer gestellte Frage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des großen Modell-Chats steuern. Dieser Prompt wird fix am Anfang des Kontexts stehen. Verwendete Variablen: {data} trägt bekannte Informationen aus dem Wissen; {question} ist die vom Benutzer gestellte Frage.',
      defaultPrompt: `Bekannte Informationen: {data}
Frage: {question}
Antwortanforderungen:
- Bitte verwenden Sie präzise und professionelle Sprache, um die Frage des Benutzers zu beantworten.`,
    },
    historyRecord: {
      label: 'Chat-Verlauf',
    },
    relatedKnowledge: {
      label: 'Verknüpftes Wissen',
      placeholder: 'Ausgewähltes verknüpftes Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrere Runden Dialog',
    prologue: 'Prolog',
    defaultPrologue:
      'Hallo, ich bin XXX-Assistent. Sie können mir Fragen zur Nutzung von XXX stellen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLM unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Aktuelle Frage basierend auf Chat-Verlauf optimieren, um besser zu Wissenspunkten zu passen.',
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
      requiredMessage: 'Bitte Sprach-Wiedergabemodell auswählen',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Denkprozess ausgeben',
      tooltip:
        'Bitte setzen Sie das Denk-Label basierend auf der Rückgabe des Modells, Inhalt zwischen den Labels wird als Denkprozess erkannt.',
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
    exit: 'Möchten Sie wirklich beenden und den KI-generierten Inhalt verwerfen?',
    loading: 'Wird generiert...',
  },
  dialog: {
    addKnowledge: 'Verknüpftes Wissen hinzufügen',
    addKnowledgePlaceholder: 'Ausgewähltes Wissen muss dasselbe Einbettungsmodell verwenden',
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
    topReferences: 'Top N Segmente',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weiter Fragen an das KI-Modell stellen',
    provideAnswer: 'Antwortinhalt festlegen',
    designated_answer:
      'Hallo, ich bin XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Frage des Benutzers dar. Bitte vervollständigen Sie basierend auf dem Kontext die Frage des Benutzers ({question}). Anforderung: Geben Sie nur eine vervollständigte Frage aus und platzieren Sie sie im",
    defaultPrompt2: 'Tag',
  },
  applicationAccess: {
    title: 'Zugriff Drittanbieter',
    wecom: 'WeCom',
    wecomTip: 'WeCom-Agenten erstellen',
    wecomBot: 'WeCom Bot',
    wecomBotTip: 'Intelligenten WeCom-Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk-Agenten erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat-Agenten erstellen',
    lark: 'Lark',
    larkTip: 'Lark-Agenten erstellen',
    setting: 'Einstellung',
    callback: 'Rückrufadresse',
    callbackTip: 'Bitte Rückrufadresse eingeben',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-Agenten erstellen',
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
        '-APP-Verwaltung-Selbst erstellt-Erstellte APP-Nachrichten empfangen-„URL“ im API-Empfang einstellen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo:
        '-Auf der Robot-Seite „Nachrichtenempfangsmodus“ auf HTTP setzen und die oben stehende URL in „Nachrichtenempfangsadresse“ eintragen',
    },
    wechatSetting: {
      title: 'WeChat-Konfiguration',
      appId: 'APP ID',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecret: 'APP SECRET',
      appSecretPlaceholder: 'Bitte APP SECRET eingeben',
      token: 'TOKEN',
      tokenPlaceholder: 'Bitte TOKEN eingeben',
      aesKey: 'Nachrichten-Verschlüsselungsschlüssel',
      aesKeyPlaceholder: 'Bitte Nachrichten-Verschlüsselungsschlüssel eingeben',
      urlInfo:
        '-Einstellungen und Entwicklung-Grundkonfiguration-"Server-Adresse URL" in Server-Konfiguration',
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
        '-Events und Callbacks - Event-Konfiguration - "Anfrageadresse" der Abonnementmethode konfigurieren',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot User Token eingeben',
    },
    copyUrl: 'Link kopieren und einfügen',
  },
  hitTest: {
    title: 'Abruf-Test',
    text: 'Testen Sie den Treffereffekt des Wissens basierend auf dem eingegebenen Abfragetext.',
    emptyMessage1: 'Abruf-Test-Ergebnisse werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
  publishStatus: 'Veröffentlichungsstatus',
}
