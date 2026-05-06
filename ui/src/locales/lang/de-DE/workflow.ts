export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Basis',
  nodeSetting: 'Knoteneinstellungen',
  workflow: 'Workflow',
  knowledgeWorkflow: 'Wissens-Workflow',
  info: {
    previewVersion: 'Vorschau-Version:',
    saveTime: 'Zuletzt gespeichert:',
  },
  operation: {
    toImportDoc: 'Zu Dokumente importieren',
    importWorkflow: 'Workflow importieren',
    exportWorkflow: 'Workflow exportieren',
  },
  setting: {
    restoreVersion: 'Vorherige Version wiederherstellen',
    restoreCurrentVersion: 'Auf diese Version zurücksetzen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Versionsverlauf',
    autoSave: 'Automatisch speichern',
    latestRelease: 'Neueste Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Beenden',
    exitSave: 'Speichern & Beenden',
    templateCenter: 'Vorlagen-Center',
  },
  tip: {
    noData: 'Keine relevanten Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen können nur vom rechten Ankerpunkt aus erstellt werden',
    notRecyclable: 'Schleifenverbindungen sind nicht zulässig',
    onlyLeft: 'Verbindungen können nur zum linken Ankerpunkt erstellt werden',
    applicationNodeError: 'Dieser Agent ist nicht verfügbar',
    toolNodeError: 'Dieser Werkzeugknoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten wurde bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Beenden speichern?',
    searchPlaceholder: 'Bitte Knotennamen eingeben',
    disabled: 'Der Knoten wurde deaktiviert',
  },
  delete: {
    confirmTitle: 'Löschen dieses Knotens bestätigen?',
    deleteMessage: 'Dieser Knoten kann nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    fitView: 'An Bildschirm anpassen',
    retract: 'Alle einklappen',
    extend: 'Alle ausklappen',
    beautify: 'Automatisch anordnen',
  },
  variable: {
    global: 'Globale Variable',
    chat: 'Chat-Variable',
    Referencing: 'Referenzierte Variable',
    ReferencingRequired: 'Referenzierte Variable ist erforderlich',
    ReferencingError: 'Ungültige referenzierte Variable',
    NoReferencing: 'Referenzierte Variable existiert nicht',
    placeholder_key: 'Schlüssel eingeben',
    placeholder: 'Bitte eine Variable auswählen',
    inputPlaceholder: 'Bitte Variable eingeben',
    loop: 'Schleifenvariable',
  },
  condition: {
    title: 'Ausführungsbedingung',
    front: 'Vorbedingung',
    AND: 'Alle',
    OR: 'Beliebige',
    text: 'Nachdem der verbundene Knoten ausgeführt wurde, führe den aktuellen Knoten aus',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Es ist nur ein Startknoten zulässig',
    baseNodeRequired: 'Basisinformationsknoten ist erforderlich',
    baseNodeOnly: 'Es ist nur ein Basisinformationsknoten zulässig',
    notInWorkFlowNode: 'Knoten befindet sich nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Eine Endlosschleife benötigt einen Break-Knoten',
  },
  nodes: {
    toolWorlflowNode: {
      label: 'Workflow-Werkzeug',
      text: 'Workflow-Werkzeug',
    },
    knowledgeWriteNode: {
      label: 'Wissen schreiben',
      text: 'Schreibe die eingegebene Absatzliste in die aktuelle Wissensdatenbank und schließe die Vektorisierung ab',
    },
    dataSourceWebNode: {
      label: 'Website',
      text: 'Geben Sie die Stamm-URL ein, um Webdaten automatisch zu crawlen (ein Link entspricht einem Dokument). Ausgabe ist eine Liste von Dokumenten mit Inhalt.',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, Dokumentenliste ausgeben (Inhalt wird nicht geparst, muss mit dem Knoten "Dokumentinhalts-Extraktion" verwendet werden)',
      fileList: 'Dateiliste',
      fileFormat: {
        label: 'Unterstützte Dateiformate',
        requiredMessage: 'Bitte Dateiformate auswählen',
      },
      maxFileNumber: {
        label: 'Maximale Anzahl der Dateien pro Upload',
      },
      maxFileCountNumber: {
        label: 'Maximale Größe pro Datei (MB)',
      },
    },
    classify: {
      aiCapability: 'KI-Funktion',
      businessLogic: 'Geschäftslogik',
      other: 'Andere',
      dataProcessing: 'Datenverarbeitung',
    },
    startNode: {
      label: 'Start',
      question: 'Benutzerfrage',
      currentTime: 'Aktuelle Zeit',
    },
    baseNode: {
      fileUpload: {
        label: 'Datei-Upload',
        tooltip: 'Wenn aktiviert, wird auf der Q&A-Seite eine Schaltfläche zum Hochladen von Dateien angezeigt.',
      },
      FileUploadSetting: {
        title: 'Datei-Upload-Einstellungen',
        maxFiles: 'Maximale Anzahl an Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Erlaubte Dateitypen für den Upload',
          documentText: 'Erfordert den Knoten "Dokumentinhalts-Extraktion" zum Parsen von Texten',
          imageText: 'Erfordert den Knoten "Bildverstehen" zum Parsen von Bildern',
          videoText: 'Erfordert den Knoten "Videoverstehen" zum Parsen von Videos',
          audioText: 'Erfordert den Knoten "Sprache-zu-Text" zum Parsen von Audio',
          uploadMethod: 'Upload-Methode',
        },
      },
    },
    KnowledgeBaseNode: {
      DocumentSetting: 'Dokumentverarbeitungs-Einstellung',
    },
    aiChatNode: {
      label: 'KI-Chat',
      text: 'Mit einem KI-Modell chatten',
      answer: 'KI-Inhalt',
      returnContent: {
        label: 'Inhalt zurückgeben',
        tooltip: `Falls deaktiviert, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Aktivieren Sie den Schalter, wenn der Benutzer die Ausgabe dieses Knotens sehen soll.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Protokolle',
    },
    searchKnowledgeNode: {
      label: 'Wissensabfrage',
      text: 'Ermöglicht das Abfragen von Textinhalten aus dem Wissen bezogen auf Benutzerfragen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die Kriterien für eine direkte Antwort erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente für direkte Antwort',
      searchParam: 'Abfrageparameter',
      showKnowledge: {
        label: 'Ergebnisse werden in der Wissensquelle angezeigt',
        requiredMessage: 'Bitte Parameter festlegen',
      },
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte eine Suchfrage auswählen',
        requiredMessage: 'Bitte eine Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Suche',
      text: 'Suche nach Dokumenten, die Bedingungen basierend auf Dokument-Labels innerhalb des angegebenen Suchbereichs erfüllen',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Tag-Filterbedingungen manuell festlegen',
      auto: 'Automatisch',
      autoTooltip: 'Tag-Bedingungen automatisch basierend auf der Suchfrage filtern',
      documentList: 'Dokumentenliste',
      knowledgeList: 'Wissensdatenbank-Liste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: 'Wert oder Name',
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte eine Suchfrage auswählen',
        requiredMessage: 'Bitte eine Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragenoptimierung',
      text: 'Optimiert und verbessert die aktuelle Frage basierend auf dem Chat-Verlauf, um Wissenssegmente besser zu finden',
      result: 'Ergebnis der optimierten Frage',
      systemDefault: `#Rolle
Sie sind ein Experte für Problemoptimierung. Sie sind geschickt darin, Benutzerintentionen basierend auf dem Kontext genau abzuleiten und die vom Benutzer gestellten Fragen zu optimieren.

##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Empfangen von Benutzereingabefragen.
3. Sorgfältige Analyse der Bedeutung des Problems basierend auf dem Kontext.
4. Ausgabe optimierter Probleme.

##Einschränkungen:
- Geben Sie nur das optimierte Problem zurück, ohne zusätzliche Erklärungen oder Klarstellungen.
- Stellen Sie sicher, dass das optimierte Problem die ursprüngliche Absicht genau widerspiegelt und die Intention nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingter Zweig',
      text: 'Löst basierend auf Bedingungen verschiedene Knoten aus',
      branch_name: 'Zweig-Name',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt Folgendes',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte einen Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Spezifizierte Antwort',
      text: 'Antwortinhalt festlegen; referenzierte Variablen werden für die Ausgabe in Strings umgewandelt',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Multi-Pfad Recall',
      text: 'Verwendet ein Reranking-Modell, um Suchergebnisse aus mehreren Wissensquellen zu verfeinern',
      result_list: 'Liste der neu sortierten Ergebnisse',
      result: 'Reranking-Ergebnis',
      rerankerContent: {
        label: 'Reranking-Inhalt',
        requiredMessage: 'Bitte Reranking-Inhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichenanzahl',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Bitte ein Rerank-Modell auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Sammelt Benutzereingaben während der Q&A-Sitzung zur Verwendung in nachfolgenden Prozessen',
      form_content_format1: 'Hallo, bitte füllen Sie das folgende Formular aus:',
      form_content_format2: 'Klicken Sie nach dem Ausfüllen auf die Schaltfläche [Absenden].',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Formular-Ausgabeinhalt',
        requiredMessage:
          'Bitte legen Sie den Ausgabeinhalt dieses Knotens fest, { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Definieren Sie den Ausgabeinhalt dieses Knotens. { form } ist ein Platzhalter für das Formular',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formularkonfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalts-Extraktion',
      text: 'Eingabedokumente parsen, um strukturierten Dokumentinhalt auszugeben',
      content: 'Dokumentinhalt',
    },
    documentSplitNode: {
      label: 'Dokument-Splitting',
      text: 'Teilt den Inhalt des Eingabedokuments gemäß der Segmentierungsstrategie auf und gibt eine Liste segmentierter Texte aus',
      paragraphList: 'Liste der geteilten Segmente',
      splitStrategy: {
        label: 'Splitting-Strategie',
        placeholder: 'Bitte eine Splitting-Strategie auswählen',
        requiredMessage: 'Bitte eine Splitting-Strategie auswählen',
      },
      chunk_length: {
        label: 'Segmentlänge',
        tooltip1: 'Kernziel ist das Gleichgewicht zwischen Suchpräzision und Recall-Effizienz',
        tooltip2:
          'Vermeiden Sie zu kurze Segmente: Ein Segment <50 Zeichen kann zu semantischer Fragmentierung führen und die Absicht der Abfrage mangels Kontext verfehlen.',
        tooltip3:
          'Vermeiden Sie zu lange Segmente: Ein Block über 500 Zeichen erhöht redundante Informationen, verringert die Suchgenauigkeit und verbraucht mehr Ressourcen.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments festlegen',
      title2: 'Dokumentname als zugehörige Frage des Segments festlegen',
    },
    imageUnderstandNode: {
      label: 'Bildverstehen',
      text: 'Analysiert Bilder, um Objekte und Szenen zu identifizieren und Antworten zu geben',
      answer: 'KI-Inhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte ein Vision-Modell auswählen',
      },
      image: {
        label: 'Bild auswählen',
        requiredMessage: 'Bitte ein Bild auswählen',
      },
    },
    videoUnderstandNode: {
      label: 'Videoverstehen',
      text: 'Identifiziert Objekte, Szenen und andere Informationen in Videos, um Benutzerfragen zu beantworten',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte ein Vision-Modell auswählen',
      },
      video: {
        label: 'Video auswählen',
        requiredMessage: 'Bitte ein Video auswählen',
      },
    },
    variableAssignNode: {
      label: 'Variablenzuweisung',
      text: 'Aktualisiert den Wert der globalen Variable',
      assign: 'Wert festlegen',
    },
    variableAggregationNode: {
      label: 'Variablen-Aggregation',
      text: 'Aggregiert Variablen jeder Gruppe gemäß der Aggregationsstrategie',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Gibt den ersten Nicht-Null-Wert jeder Gruppe zurück',
      placeholder1: 'Gibt das Array der Variablen für jede Gruppe zurück',
      placeholder2: 'Gibt das Dict (Objekt) der Variablen für jede Gruppe zurück',
      group: {
        noneError: 'Name darf nicht leer sein',
        dupError: 'Name darf nicht doppelt vorkommen',
      },
      addGroup: 'Gruppe hinzufügen',
      editGroup: 'Gruppe bearbeiten',
    },
    mcpNode: {
      label: 'MCP-Aufruf',
      text: 'Externe MCP-Dienste aufrufen, um Daten zu verarbeiten',
      getToolsSuccess: 'Werkzeuge erfolgreich abgerufen',
      getTool: 'Werkzeuge abrufen',
      toolParam: 'Werkzeugparameter',
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte ein Werkzeug auswählen',
      configLabel: 'MCP-Serverkonfiguration (Nur SSE/Streamable HTTP-Aufrufe werden unterstützt)',
      reference: 'Referenz-MCP',
    },
    imageGenerateNode: {
      label: 'Bilderzeugung',
      text: 'Erzeugt Bilder basierend auf dem bereitgestellten Textinhalt',
      answer: 'KI-Inhalt',
      model: {
        label: 'Bilderzeugungsmodell',
        requiredMessage: 'Bitte ein Bilderzeugungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die im Bild enthalten sein sollen',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die vom Bild ausgeschlossen werden sollen',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die nicht erzeugt werden sollen, z. B. Farben oder blutige Inhalte',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Erzeugt Videos basierend auf dem bereitgestellten Textinhalt',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte ein Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, um erwartete Elemente und visuelle Merkmale im Video zu beschreiben',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt, um Inhalte zu beschreiben, die nicht im Video erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die nicht erzeugt werden sollen, z. B. Farben oder blutige Inhalte',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Erzeugt Videos basierend auf bereitgestellten Bildern',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte ein Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, um erwartete Elemente und visuelle Merkmale im Video zu beschreiben',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt, um Inhalte zu beschreiben, die nicht im Video erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die nicht erzeugt werden sollen, z. B. Farben oder blutige Inhalte',
      },
      first_frame: {
        label: 'Bild für den ersten Frame',
        requiredMessage: 'Bitte das Bild für den ersten Frame auswählen',
      },
      last_frame: {
        label: 'Bild für den letzten Frame',
        requiredMessage: 'Bitte das Bild für den letzten Frame auswählen',
      },
    },
    speechToTextNode: {
      label: 'Sprache-zu-Text',
      text: 'Konvertiert Audio über ein Spracherkennungsmodell in Text',
      stt_model: {
        label: 'Spracherkennungsmodell',
      },
      audio: {
        label: 'Audiodatei auswählen',
        placeholder: 'Bitte eine Audiodateien auswählen',
      },
    },
    textToSpeechNode: {
      label: 'Text-zu-Sprache',
      text: 'Konvertiert Text über ein Sprachsynthesemodell in Audio',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Werkzeug',
      text: 'Führt benutzerdefinierte Skripte zur Datenverarbeitung aus',
    },
    intentNode: {
      label: 'Absicht-Knoten',
      text: 'Gleicht Benutzerfragen mit benutzerdefinierten Absichtsklassifizierungen ab',
      other: 'Andere',
      error2: 'Wiederholte Absicht',
      placeholder: 'Bitte eine Klassifizierungsoption wählen',
      classify: {
        label: 'Absichtsklassifizierung',
      },
      input: {
        label: 'Eingabe',
      },
    },
    applicationNode: {
      label: 'Agent-Knoten',
    },
    loopNode: {
      label: 'Schleife',
      text: 'Wiederholt eine Reihe von Aufgaben durch Festlegen der Anzahl der Durchläufe und der Logik',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte einen Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Bestimmte Anzahl an Durchläufen',
        infiniteLoop: 'Endlosschleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Bitte die Anzahl der Durchläufe eingeben',
      },
      loopArray: {
        label: 'Zirkuläres Array',
        requiredMessage: 'Zirkuläres Array ist erforderlich',
        placeholder: 'Bitte ein zirkuläres Array auswählen',
      },
      loopSetting: 'Schleifeneinstellungen',
      loopDetail: 'Schleifendetails',
    },
    loopStartNode: {
      label: 'Schleifenstart',
      loopIndex: 'Index',
      loopItem: 'Schleifenelement',
    },
    loopBodyNode: {
      label: 'Schleifenkörper',
      text: 'Schleifenkörper',
    },
    loopContinueNode: {
      label: 'Fortsetzen',
      text: 'Wird verwendet, um den aktuellen Durchlauf zu beenden und mit dem nächsten fortzufahren.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Abbrechen',
      text: 'Beendet die aktuelle Schleife und verlässt den Schleifenkörper',
      isBreak: 'Abbrechen (Break)',
    },
    variableSplittingNode: {
      label: 'Variablensplittung',
      text: 'Parse und teile die eingegebene JSON-Variable durch Konfiguration von JSON-Path-Ausdrücken auf',
      result: 'Ergebnis',
      splitVariables: 'Variablen aufteilen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte geteilte Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip:
          'Bitte verwenden Sie JSON-Path-Ausdrücke, um Variablen zu teilen, z. B.: $.store.book <a href="https://pypi.org/project/jsonpath-ng/1.8.0/" target="_blank" class="expression_tip">Klicken für Details ➜ pypi.org</a>',
      },
    },
    parameterExtractionNode: {
      label: 'Parameterextraktion',
      text: 'Verwendet KI-Modelle, um strukturierte Parameter zu extrahieren',
      extractParameters: {
        label: 'Parameter extrahieren',
        variableListPlaceholder: 'Bitte Extraktionsparameter hinzufügen',
        parameterType: 'Parametertyp',
      },
    },
  },
  compare: {
    is_null: 'Ist leer (null)',
    is_not_null: 'Ist nicht leer',
    contain: 'Enthält',
    not_contain: 'Enthält nicht',
    eq: 'Gleich',
    not_eq: 'Ungleich',
    ge: 'Größer oder gleich',
    gt: 'Größer als',
    le: 'Kleiner oder gleich',
    lt: 'Kleiner als',
    len_eq: 'Länge gleich',
    len_ge: 'Länge größer oder gleich',
    len_gt: 'Länge größer als',
    len_le: 'Länge kleiner oder gleich',
    len_lt: 'Länge kleiner als',
    is_true: 'Ist wahr',
    is_not_true: 'Ist nicht wahr',
    regex: 'Regex-Übereinstimmung',
    wildcard: 'Wildcard-Übereinstimmung',
  },
  SystemPromptPlaceholder: 'System-Prompt, kann Systemvariablen referenzieren, wie z. B.',
  UserPromptPlaceholder: 'Benutzer-Prompt, kann Systemvariablen referenzieren, wie z. B.',
  initiator: 'Initiator',
  abnormalInformation: 'Fehlerinformationen / Abnormalität',
}
