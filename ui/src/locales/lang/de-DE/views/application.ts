export default {
  title: 'APP',
  createApplication: 'Einfache APP erstellen',
  createWorkFlowApplication: 'Workflow-APP erstellen',
  importApplication: 'APP importieren',
  copyApplication: 'APP kopieren',
  workflow: 'WORKFLOW',
  simple: 'SIMPLE',
  simplePlaceholder: 'Geeignet für Einsteiger, um einen Assistenten über Formulareinstellungen zu erstellen',
  workflowPlaceholder:
    'Geeignet für fortgeschrittene Nutzer, um komplexe AI-Assistenten mit Low-Code-Drag-and-Drop zu gestalten',
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
    toChat: 'Chat',
    publish: 'Veröffentlichen',
  },
  delete: {
    confirmTitle: 'Möchtest du diese APP wirklich löschen: ',
    confirmMessage:
      'Nach dem Löschen steht diese APP nicht mehr zur Verfügung. Bitte mit Vorsicht fortfahren.',
  },
  tip: {
    publishSuccess: 'Erfolgreich veröffentlicht',
    ExportError: 'Export fehlgeschlagen',
    professionalMessage:
      'Die Community Edition unterstützt bis zu 5 APPs. Wenn du mehr benötigst, upgrade bitte auf die Professional Edition.',
    saveErrorMessage: 'Speichern fehlgeschlagen – bitte Eingaben prüfen oder später erneut versuchen.',
    loadingErrorMessage: 'Konfiguration konnte nicht geladen werden – bitte Eingaben prüfen oder später erneut versuchen.',
  },

  form: {
    appName: {
      label: 'Name',
      placeholder: 'Bitte APP-Namen eingeben',
      requiredMessage: 'APP-Name ist erforderlich',
    },
    appDescription: {
      placeholder:
        'Beschreibe den Anwendungsfall, z. B.: XXX-Assistent beantwortet Nutzerfragen zur Verwendung des XXX-Produkts.',
    },
    appType: {
      label: 'Typ',
      simplePlaceholder: 'Geeignet für Einsteiger zur einfachen Assistentenerstellung.',
      workflowPlaceholder: 'Geeignet für fortgeschrittene Nutzer zur individuellen Workflow-Gestaltung.',
    },
    appTemplate: {
      blankApp: {
        title: 'Leere APP',
      },
      assistantApp: {
        title: 'Wissens-Assistent',
        description: 'Geeignet für fortgeschrittene Nutzer zur individuellen Workflow-Gestaltung.',
      },
    },
    aiModel: {
      label: 'AI-Modell',
      placeholder: 'Bitte AI-Modell auswählen',
    },
    roleSettings: {
      label: 'System Prompt',
      placeholder:
        'System Prompt – du kannst Systemvariablen verwenden: {data} ist der Trefferabschnitt aus der Wissensbasis; {question} ist die vom Benutzer gestellte Frage.',
      tooltip: 'Rolle oder Instruktionen für das Modell festlegen',
    },

    prompt: {
      label: 'User Prompt',
      noReferences: '(Keine Wissensreferenzen)',
      references: '(Mit Wissensreferenzen)',
      placeholder:
        'User Prompt – du kannst Systemvariablen verwenden: {data} ist der Trefferabschnitt aus der Wissensbasis; {question} ist die vom Benutzer gestellte Frage.',
      requiredMessage: 'Bitte User Prompt eingeben',
      tooltip:
        'Die Frage oder Anweisung, die der Benutzer an das Modell richtet',

      noReferencesTooltip:
        'Durch Anpassen des Prompts kannst du die Richtung des Modelldialogs steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Variable: {question} ist die Frage des Benutzers.',
      referencesTooltip:
        'Durch Anpassen des Prompts kannst du die Richtung des Modelldialogs steuern. Dieser Prompt wird am Anfang des Kontexts fixiert. Variablen: {data} enthält bekannte Informationen aus dem Wissen; {question} ist die Benutzerfrage.',
      defaultPrompt: `Bekannte Informationen: {data}
        Frage: {question}
        Antwortanforderungen:
        - Bitte in klarer und professioneller Sprache auf die Benutzerfrage antworten.
        `,
    },
    historyRecord: {
      label: 'Chatverlauf',
    },
    relatedKnowledge: {
      label: 'Verknüpftes Wissen',
      placeholder: 'Verknüpftes Wissen wird hier angezeigt',
    },
    multipleRoundsDialogue: 'Mehrstufiger Dialog',

    prologue: 'Begrüßung',
    defaultPrologue:
      'Hallo, ich bin der XXX-Assistent. Du kannst mir Fragen zur Nutzung von XXX stellen.\n- Was sind die Hauptfunktionen von XXX?\n- Welche LLMs unterstützt XXX?\n- Welche Dokumenttypen unterstützt XXX?',
    problemOptimization: {
      label: 'Fragenoptimierung',
      tooltip:
        'Optimiert die aktuelle Frage anhand des bisherigen Chatverlaufs, um Wissenspunkte besser zuzuordnen.',
    },

    voiceInput: {
      label: 'Spracheingabe',
      placeholder: 'Bitte Spracherkennungsmodell auswählen',
      requiredMessage: 'Bitte Sprachmodell für Eingabe auswählen',
      autoSend: 'Automatisches Senden',
    },
    voicePlay: {
      label: 'Sprachausgabe',
      placeholder: 'Bitte Sprachsynthesemodell auswählen',
      requiredMessage: 'Bitte Sprachmodell für Ausgabe auswählen',
      autoPlay: 'Automatische Wiedergabe',
      browser: 'Browser-Wiedergabe (kostenlos)',
      tts: 'TTS-Modell',
      listeningTest: 'Vorschau',
    },
    reasoningContent: {
      label: 'Gedankengang anzeigen',
      tooltip:
        'Bitte die Denkmarkierungen basierend auf der Modellausgabe festlegen. Der Inhalt zwischen den Markierungen wird als Denkprozess erkannt.',
      start: 'Start',
      end: 'Ende',
    },
    mcp_output_enable: 'MCP-/Tool-Ausführungsprozess anzeigen',
  },
  generateDialog: {
    label: 'Generieren',
    generatePrompt: 'Prompt generieren',
    placeholder: 'Bitte Thema des Prompts eingeben',
    title: 'Der generierte Prompt wird hier angezeigt',
    remake: 'Neu generieren',
    stop: 'Generierung stoppen',
    continue: 'Fortsetzen',
    replace: 'Ersetzen',
    exit: 'Möchtest du wirklich beenden und den AI-generierten Inhalt verwerfen?',
    loading: 'Wird generiert …',
  },
  dialog: {
    addKnowledge: 'Wissen hinzufügen',
    addKnowledgePlaceholder: 'Das ausgewählte Wissen muss dasselbe Embedding-Modell verwenden',
    selectSearchMode: 'Suchmodus auswählen',
    vectorSearch: 'Vektorsuche',
    vectorSearchTooltip:
      'Vektorsuche basiert auf Distanzberechnungen und eignet sich für große Wissensmengen.',
    fullTextSearch: 'Volltextsuche',
    fullTextSearchTooltip:
      'Volltextsuche basiert auf Textähnlichkeiten und eignet sich für kleine Wissensmengen.',
    hybridSearch: 'Hybridsuche',
    hybridSearchTooltip:
      'Hybridsuche kombiniert Vektor- und Textähnlichkeiten und eignet sich für mittlere Wissensmengen.',
    similarityThreshold: 'Ähnlichkeit größer als',
    similarityTooltip: 'Je höher die Ähnlichkeit, desto stärker die inhaltliche Verbindung.',
    topReferences: 'Top-N-Abschnitte',
    maxCharacters: 'Maximale Zeichen pro Referenz',
    noReferencesAction: 'Wenn keine Wissensreferenzen vorhanden sind',
    continueQuestioning: 'Weitere Fragen an das AI-Modell stellen',
    provideAnswer: 'Antwortinhalt vorgeben',
    designated_answer:
      'Hallo, ich bin der XXX-Assistent. Mein Wissen umfasst nur Informationen zu XXX-Produkten. Bitte formuliere deine Frage neu.',
    defaultPrompt1:
      'Der Inhalt in den Klammern () steht für die Benutzerfrage. Bitte ergänze die Frage ({question}) anhand des Kontexts und gib sie vollständig aus, eingeklammert in',
    defaultPrompt2: 'Tag',
  },
  applicationAccess: {
    title: 'APP-Zugriff',
    wecom: 'WeCom',
    wecomTip: 'WeCom-Intelligent-APP erstellen',
    wecomBot: 'WeCom Bot',
    wecomBotTip: 'WeCom-Intelligent-Bot erstellen',
    dingtalk: 'DingTalk',
    dingtalkTip: 'DingTalk-Intelligent-APP erstellen',
    wechat: 'WeChat',
    wechatTip: 'WeChat-Intelligent-APP erstellen',
    lark: 'Lark',
    larkTip: 'Lark-Intelligent-APP erstellen',
    setting: 'Einstellungen',
    callback: 'Callback-Adresse',
    callbackTip: 'Bitte Callback-Adresse eintragen',
    wecomPlatform: 'WeCom Open Platform',
    wechatPlatform: 'WeChat Open Platform',
    dingtalkPlatform: 'DingTalk Open Platform',
    larkPlatform: 'Lark Open Platform',
    slack: 'Slack',
    slackTip: 'Slack-Intelligent-APP erstellen',
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
        '-APP-Verwaltung → Selbst erstellt → Erstellte APP → Nachrichtenempfang → API-„URL“ festlegen',
    },
    dingtalkSetting: {
      title: 'DingTalk-Konfiguration',
      clientIdPlaceholder: 'Bitte Client ID eingeben',
      clientSecretPlaceholder: 'Bitte Client Secret eingeben',
      urlInfo:
        '-Auf der Bot-Seite den „Nachrichtenempfangsmodus“ auf HTTP stellen und obige URL als „Empfangsadresse“ eintragen',
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
      aesKeyPlaceholder: 'Bitte Verschlüsselungsschlüssel eingeben',
      urlInfo:
        '-Einstellungen & Entwicklung → Basis-Konfiguration → „Serveradresse URL“ in der Server-Konfiguration',
    },
    wecomBotSetting: {
      title: 'WeCom-Bot-Konfiguration',
      urlInfo: '-Verwaltungstools → Smart Bot → Bot erstellen → API-Modus „URL“ eintragen',
    },
    larkSetting: {
      title: 'Lark-Konfiguration',
      appIdPlaceholder: 'Bitte APP ID eingeben',
      appSecretPlaceholder: 'Bitte APP Secret eingeben',
      verificationTokenPlaceholder: 'Bitte Verification Token eingeben',
      urlInfo:
        '-Events & Callbacks → Event-Konfiguration → „Request-Adresse“ der Abonnementmethode festlegen',
    },
    slackSetting: {
      title: 'Slack-Konfiguration',
      signingSecretPlaceholder: 'Bitte Signing Secret eingeben',
      botUserTokenPlaceholder: 'Bitte Bot User Token eingeben',
    },
    copyUrl: 'Link kopieren und einfügen',
  },
  hitTest: {
    title: 'Wissens-Retrieval-Test',
    text: 'Teste die Trefferqualität des Wissens anhand eines Suchtexts.',
    emptyMessage1: 'Testergebnisse werden hier angezeigt',
    emptyMessage2: 'Keine passenden Abschnitte gefunden',
  },
  publishTime: 'Veröffentlichungszeit',
}
