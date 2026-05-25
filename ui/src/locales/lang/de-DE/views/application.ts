export default {
  title: 'Agent',
  createApplication: 'Einfachen Agent erstellen',
  createWorkFlowApplication: 'Workflow-Agent erstellen',
  importApplication: 'Agent importieren',
  copyApplication: 'Agent kopieren',
  simple: 'EINFACH',
  senior: 'WORKFLOW',
  simpleAgent: 'Einfacher Agent',
  AdvancedAgent: 'Erweiterter Agent',
  simplePlaceholder: 'Schnell intelligente Agenten mit grundlegenden Funktionen über Formulareinstellungen erstellen',
  advancedPlaceholder:
    'Mit Low-Code Drag-and-Drop komplexe Logik und funktionsreiche Agenten flexibel orchestrieren',
  appTest: 'Debug-Vorschau',
  operation: {
    addModel: 'Modell hinzufügen',
    toChat: 'Chat',
  },
  delete: {
    confirmTitle: 'Möchten Sie diesen Agent wirklich löschen: ',
    confirmTitle2: 'Agenten?',
    confirmMessage:
      'Das Löschen dieses Agents stellt seine Dienste nicht mehr zur Verfügung. Bitte gehen Sie vorsichtig vor.',
    resourceCountMessage:
      'Dieser Agent ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte gehen Sie vorsichtig vor.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt maximal 5 Agenten. Für mehr Agenten upgraden Sie bitte auf die Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen, bitte prüfen Sie Ihre Eingaben oder versuchen Sie es später erneut',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden, bitte prüfen Sie Ihre Eingaben oder versuchen Sie es später erneut',
    noDocPermission: 'Keine Berechtigung zum Erstellen von Dokumenten',
    confirmUse: 'Möchten Sie wirklich',
    overwrite: 'den aktuellen Workflow überschreiben',
  },
  longTermMemory: {
    title: 'Langzeitgedächtnis',
    setting: 'Langzeitgedächtnis-Einstellungen',
    triggerType: 'Auslösertyp',
    roundTrigger: 'Rundenbasierter Auslöser',
    roundTriggerTip:
      'Nach Erreichen von N Runden automatisch N Gesprächsrunden extrahieren, um Gedächtnis zu generieren',
    triggerInterval: 'Auslöseintervall',
    scheduledTrigger: 'Zeitgesteuerter Auslöser',
    scheduledTriggerTip:
      'Nach Erreichen der eingestellten Zeit alle Gespräche im Zyklus extrahieren, um Gedächtnis zu generieren',
    cronExpressionInvalid: 'Cron-Ausdruck ist ungültig',
    tips1: `Nach Aktivierung werden neue Gespräche ab dem Aktivierungszeitpunkt aufgezeichnet und periodisch Gedächtnis generiert, das über`,
    tips2: `Variablen im System-Prompt aufgerufen werden kann.
Bei Deaktivierung wird das Langzeitgedächtnis der Gesprächsbenutzer gelöscht. Bei erneuter Aktivierung wird die Akkumulation ab dem Aktivierungszeitpunkt fortgesetzt.`,
  },
  form: {
    appName: {
      label: 'Agent-Name',
      placeholder: 'Bitte geben Sie den Agent-Namen ein',
      requiredMessage: 'Agent-Name ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreiben Sie das Agent-Szenario und die Verwendung, z. B.: XXX-Assistent zur Beantwortung von Fragen zur Nutzung von XXX-Produkten',
    },
    appType: {
      simplePlaceholder: 'Geeignet für Einsteiger zum Erstellen eines Assistenten.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Benutzer zur Anpassung des Workflow des Assistenten',
    },
    appTemplate: {
      blankApp: {
        title: 'Leerer Agent',
      },
      assistantApp: {
        title: 'Wissensassistent',
        description: 'Geeignet für fortgeschrittene Benutzer zur Anpassung des Workflow des Assistenten',
      },
    },
    aiModel: {
      label: 'KI-Modell',
      placeholder: 'Bitte wählen Sie ein KI-Modell aus',
    },
    roleSettings: {
      label: 'System-Prompt',
      placeholder:
        'System-Prompt, Sie können Systemvariablen referenzieren: {data} sind die Treffer aus der Wissensbasis; {question} ist die gestellte Benutzerfrage, {memory} ist das Benutzergedächtnis nach Aktivierung des Langzeitgedächtnisses.',
      tooltip: 'Legen Sie die Rolle oder Anweisungen fest, die das Modell befolgen soll',
    },
    prompt: {
      label: 'User-Prompt',
      noReferences: '（Keine Wissensreferenzen）',
      references: ' (Wissensreferenzen)',
      placeholder:
        'User-Prompt, Sie können Systemvariablen referenzieren: {data} sind die Treffer aus der Wissensbasis; {question} ist die gestellte Benutzerfrage',
      requiredMessage: 'Bitte User-Prompt eingeben',
      tooltip: 'Die Frage oder der Befehl, den der Benutzer an das Modell stellt',
      noReferencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Large-Language-Model-Chats lenken. Dieser Prompt steht am Anfang des Kontexts. Verwendete Variablen: {question} ist die Benutzerfrage.',
      referencesTooltip:
        'Durch Anpassen des Prompt-Inhalts können Sie die Richtung des Large-Language-Model-Chats lenken. Dieser Prompt steht am Anfang des Kontexts. Verwendete Variablen: {data} enthält bekannte Informationen aus dem Wissen; {question} ist die Benutzerfrage.',
      defaultPrompt: `Bekannte Informationen: {data}
Frage: {question}
Antwortanforderungen:
- Bitte beantworten Sie die Benutzerfrage in knapper und professioneller Sprache.`,
    },
    historyRecord: {
      label: 'Chat-Verlauf',
    },
    relatedKnowledge: {
      label: 'Verknüpftes Wissen',
      placeholder: 'Verknüpftes Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrere Dialogrunden',
    prologue: 'Prolog',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Sie können mir Fragen zur Nutzung von XXX stellen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Frageoptimierung',
      tooltip:
        'Optimierung der aktuellen Frage basierend auf dem Chat-Verlauf für eine bessere Übereinstimmung mit Wissensinhalten.',
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
        'Bitte legen Sie das Denk-Label entsprechend der Modell-Rückgabe fest. Der Inhalt zwischen den Labels wird als Denkprozess erkannt.',
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'Ausführungsprozess ausgeben',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte Thema des Prompts eingeben',
    title: 'Der Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Generierung fortsetzen',
    replace: 'Ersetzen',
    exit: 'Möchten Sie wirklich abbrechen und den von der KI generierten Inhalt verwerfen?',
    loading: 'Wird generiert...',
  },
  dialog: {
    addKnowledge: 'Verknüpftes Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Abrufmodus',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Vektorsuche basiert auf Vektorabstandsberechnungen und eignet sich für große Datenmengen im Wissen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Volltextsuche basiert auf Textähnlichkeit und eignet sich für kleine Datenmengen im Wissen.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Hybridsuche kombiniert Vektor- und Textähnlichkeit und eignet sich für mittlere Datenmengen im Wissen.',
    similarityThreshold: 'Ähnlichkeit höher als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die Korrelation.',
    topReferences: 'Top N Abschnitte',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weiter Fragen an das KI-Modell stellen',
    provideAnswer: 'Feste Antwort festlegen',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Mein Wissen enthält nur Informationen zu XXX-Produkten. Bitte formulieren Sie Ihre Frage um.',
    defaultPrompt1:
      "Der Inhalt in den Klammern () stellt die Benutzerfrage dar. Bitte ergänzen und vervollständigen Sie basierend auf dem Kontext die Benutzerfrage ({question}). Die Anforderung lautet, eine vervollständigte Frage auszugeben und sie im",
    defaultPrompt2: 'Tag zu platzieren',
  },
  applicationAccess: {
    title: 'Drittanbieter-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'WeCom-Agent erstellen',
    wecomBot: 'WeCom Bot',
    wecomBotTip: 'WeCom intelligenten Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk-Agent erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat-Agent erstellen',
    lark: 'Lark',
    larkTip: 'Lark-Agent erstellen',
    setting: 'Einstellungen',
    callback: 'Callback-Adresse',
    callbackTip: 'Bitte Callback-Adresse eintragen',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-Agent erstellen',
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
        '-APP-Verwaltung-Selbst erstellt-Erstellte APP-Nachrichten empfangen-"URL" für API-Empfang einstellen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo:
        '-Auf der Robot-Seite "Nachrichtenempfangsmodus" auf HTTP stellen und die obige URL in die "Nachrichtenempfangsadresse" eintragen',
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
        '-Einstellungen und Entwicklung-Grundkonfiguration-"Server Address URL" in der Serverkonfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom Bot-Konfiguration',
      urlInfo: '-Verwaltungstools-Smart Bot-Bot erstellen-API-Modus "URL" erstellen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecretPlaceholder: 'Bitte APP Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verification Token eingeben',
      urlInfo:
        '-Events und Callbacks - Event-Konfiguration - "Request Address" der Abonnementmethode konfigurieren',
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
    text: 'Testen Sie die Trefferwirkung des Wissens anhand des angegebenen Suchtexts.',
    emptyMessage1: 'Abruf-Testergebnisse werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
  publishStatus: 'Veröffentlichungsstatus',
}
