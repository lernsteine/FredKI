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
    latestRelease: 'Neueste Version',
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
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen können nur zum linken Ankerpunkt erstellt werden',
    applicationNodeError: 'Dieser Agent ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
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
    placeholder_key: 'Key eingeben',
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
    startNodeOnly: 'Nur ein Startknoten ist erlaubt',
    baseNodeRequired: 'Basis-Informationsknoten ist erforderlich',
    baseNodeOnly: 'Nur ein Basis-Informationsknoten ist erlaubt',
    notInWorkFlowNode: 'Knoten nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Eine Endlosschleife benötigt einen Break-Knoten',
  },
  nodes: {
    knowledgeWriteNode: {
      label: 'Wissen schreiben',
      text: 'Schreibe die eingegebene Paragraphenliste in die aktuelle Wissensdatenbank und schließe die Vektorisierung ab',
    },
    dataSourceWebNode: {
      label: 'Webseite',
      text: 'Geben Sie die Root-URL ein, um Webdaten automatisch zu crawlen (ein Link entspricht einem Dokument). Ausgabe ist eine Liste von Dokumenten mit Inhalt.',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, Dokumentenliste ausgeben (Inhalt wird nicht analysiert, muss mit "Dokumentinhalt-Extraktion" verwendet werden).',
      fileList: 'Dateiliste',
      fileFormat: {
        label: 'Unterstützte Dateiformate',
        requiredMessage: 'Bitte Dateiformate auswählen',
      },
      maxFileNumber: {
        label: 'Maximale Anzahl an Dateien pro Upload',
      },
      maxFileCountNumber: {
        label: 'Maximale Größe pro Datei (MB)',
      },
    },
    classify: {
      aiCapability: 'KI-Funktion',
      businessLogic: 'Geschäftslogik',
      other: 'Sonstiges',
      dataProcessing: 'Datenverarbeitung',
    },
    startNode: {
      label: 'Start',
      question: 'Benutzerfrage',
      currentTime: 'Aktuelle Uhrzeit',
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
          documentText: 'Erfordert den Knoten "Dokumentinhalt-Extraktion", um Dokumentinhalte zu parsen',
          imageText: 'Erfordert den Knoten "Bildverständnis", um Bildinhalte zu parsen',
          videoText: 'Erfordert den Knoten "Videoverständnis", um Videoinhalte zu parsen',
          audioText: 'Erfordert den Knoten "Speech-to-Text", um Audioinhalte zu parsen',
          uploadMethod: 'Upload-Methode',
        },
      },
    },
    KnowledgeBaseNode: {
      DocumentSetting: 'Dokumentverarbeitung-Einstellung',
    },
    aiChatNode: {
      label: 'AI Chat',
      text: 'Mit einem KI-Modell chatten',
      answer: 'KI-Inhalt',
      returnContent: {
        label: 'Inhalt zurückgeben',
        tooltip: `Wenn deaktiviert, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Aktivieren Sie den Schalter, wenn der Benutzer die Ausgabe sehen soll.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Verläufe',
    },
    searchKnowledgeNode: {
      label: 'Wissensabfrage',
      text: 'Ermöglicht die Abfrage von Textinhalten aus dem Wissen, die sich auf Benutzerfragen beziehen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die die Kriterien für eine direkte Antwort erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente, die die Kriterien für eine direkte Antwort erfüllen',
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
      text: 'Suche nach Dokumenten, die die Bedingungen basierend auf dem Dokumenten-Label innerhalb des Suchbereichs erfüllen',
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
      text: 'Optimiert und verbessert die aktuelle Frage basierend auf dem Chatverlauf, um Wissenssegmente besser zu finden',
      result: 'Optimiertes Fragenergebnis',
      systemDefault: `#Rolle
Sie sind ein Experte für Problemoptimierung und darin versiert, Benutzerintentionen basierend auf dem Kontext genau zu erschließen und Fragen zu optimieren.

##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Benutzereingabe empfangen.
3. Bedeutung des Problems basierend auf dem Kontext sorgfältig analysieren.
4. Optimierte Probleme ausgeben.

##Einschränkungen:
- Nur das optimierte Problem zurückgeben, ohne zusätzliche Erklärungen oder Klarstellungen.
- Sicherstellen, dass das optimierte Problem die ursprüngliche Absicht genau widerspiegelt und nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingter Zweig',
      text: 'Verschiedene Knoten basierend auf Bedingungen auslösen',
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
      text: 'Antwortinhalt festlegen; referenzierte Variablen werden zur Ausgabe in Strings umgewandelt',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Multi-Path Recall',
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
      text: 'Erfasst Benutzereingaben während des Q&A und verwendet sie in nachfolgenden Prozessen',
      form_content_format1: 'Hallo, bitte füllen Sie das folgende Formular aus:',
      form_content_format2: 'Klicken Sie nach dem Ausfüllen auf die Schaltfläche [Absenden].',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Formular-Ausgabeinhalt',
        requiredMessage:
          'Bitte legen Sie den Ausgabeinhalt fest. { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Definiert den Ausgabeinhalt dieses Knotens. { form } ist ein Platzhalter für das Formular',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formular-Konfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalt-Extraktion',
      text: 'Analysiert Eingabedokumente, um strukturierten Inhalt auszugeben',
      content: 'Dokumentinhalt',
    },
    documentSplitNode: {
      label: 'Dokumentensplittung',
      text: 'Teilt Dokumentinhalte gemäß der Segmentierungsstrategie auf und gibt eine Liste segmentierter Texte aus',
      paragraphList: 'Liste der Split-Segmente',
      splitStrategy: {
        label: 'Splitting-Strategie',
        placeholder: 'Bitte eine Strategie auswählen',
        requiredMessage: 'Bitte eine Strategie auswählen',
      },
      chunk_length: {
        label: 'Chunk-Länge',
        tooltip1: 'Kernziel ist die Balance zwischen Suchpräzision und Recall-Effizienz',
        tooltip2:
          'Vermeiden Sie zu kurze Segmente: Ein Segment < 50 Zeichen kann zu semantischer Fragmentierung führen.',
        tooltip3:
          'Vermeiden Sie zu lange Segmente: Ein Block > 500 Zeichen erhöht redundante Informationen und verbraucht mehr Ressourcen.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments festlegen',
      title2: 'Dokumentname als zugehörige Frage des Segments festlegen',
    },
    imageUnderstandNode: {
      label: 'Bildverständnis',
      text: 'Bilder analysieren, um Objekte und Szenen zu identifizieren und Antworten zu geben',
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
      label: 'Videoverständnis',
      text: 'Objekte, Szenen und andere Informationen in Videos identifizieren, um Fragen zu beantworten',
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
      label: 'Variablen-Zuweisung',
      text: 'Aktualisiert den Wert der globalen Variable',
      assign: 'Wert festlegen',
    },
    variableAggregationNode: {
      label: 'Variablen-Aggregation',
      text: 'Aggregiert Variablen jeder Gruppe gemäß der Aggregationsstrategie',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Gibt den ersten Nicht-Null-Wert jeder Gruppe zurück',
      placeholder1: 'Gibt das Array der Variablen für jede Gruppe zurück',
      placeholder2: 'Gibt das Dictionary der Variablen für jede Gruppe zurück',
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
      getToolsSuccess: 'Tools erfolgreich abgerufen',
      getTool: 'Tools abrufen',
      toolParam: 'Tool-Parameter',
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte ein Tool auswählen',
      configLabel: 'MCP-Server-Konfiguration (Nur SSE/Streamable HTTP-Aufrufe werden unterstützt)',
      reference: 'MCP-Referenz',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder basierend auf bereitgestelltem Text generieren',
      answer: 'KI-Inhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte ein Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die im Bild erscheinen sollen',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die nicht im Bild erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die nicht generiert werden sollen (z.B. Farben, blutige Inhalte)',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video basierend auf bereitgestelltem Text generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte ein Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt zur Beschreibung erwünschter Elemente im Video',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt zur Einschränkung unerwünschter Inhalte im Video',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die nicht generiert werden sollen',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Video basierend auf bereitgestellten Bildern generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte ein Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip: 'Positiver Prompt zur Beschreibung der gewünschten Video-Features',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip: 'Negativer Prompt zur Vermeidung bestimmter Videoinhalte',
        placeholder: 'Inhalte beschreiben, die nicht generiert werden sollen',
      },
      first_frame: {
        label: 'Erstes Einzelbild (First Frame)',
        requiredMessage: 'Bitte das erste Einzelbild auswählen',
      },
      last_frame: {
        label: 'Letztes Einzelbild (Last Frame)',
        requiredMessage: 'Bitte das letzte Einzelbild auswählen',
      },
    },
    speechToTextNode: {
      label: 'Speech-to-Text',
      text: 'Audio über ein Spracherkennungsmodell in Text umwandeln',
      stt_model: {
        label: 'Spracherkennungsmodell',
      },
      audio: {
        label: 'Audiodatei auswählen',
        placeholder: 'Bitte eine Audiodatei auswählen',
      },
    },
    textToSpeechNode: {
      label: 'TTS (Text-to-Speech)',
      text: 'Text über ein Sprachsynthesemodell in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Benutzerdefinierte Skripte zur Datenverarbeitung ausführen',
    },
    intentNode: {
      label: 'Intent-Knoten',
      text: 'Benutzerfragen mit vordefinierten Absichten (Intents) abgleichen',
      other: 'Andere',
      error2: 'Doppelte Absicht',
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
      text: 'Wiederholt Aufgaben basierend auf einer Anzahl oder Logik',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte einen Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Bestimmte Anzahl an Wiederholungen',
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
      label: 'Fortsetzen (Continue)',
      text: 'Beendet den aktuellen Durchlauf und springt zum nächsten.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Abbrechen (Break)',
      text: 'Beendet die aktuelle Schleife und verlässt den Schleifenkörper',
      isBreak: 'Abbrechen',
    },
    variableSplittingNode: {
      label: 'Variablen-Splitting',
      text: 'Mittels JSON-Path-Ausdrücken eine Eingabe im JSON-Format parsen und aufteilen',
      result: 'Ergebnis',
      splitVariables: 'Variablen aufteilen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte Split-Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip:
          'Verwenden Sie JSON-Path-Ausdrücke, z.B.: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Parameterextraktion',
      text: 'KI-Modelle verwenden, um strukturierte Parameter zu extrahieren',
      extractParameters: {
        label: 'Parameter extrahieren',
        variableListPlaceholder: 'Bitte Extraktionsparameter hinzufügen',
        parameterType: 'Parametertyp',
      },
    },
  },
  compare: {
    is_null: 'Ist null',
    is_not_null: 'Ist nicht null',
    contain: 'Enthält',
    not_contain: 'Enthält nicht',
    eq: 'Gleich',
    not_eq: 'Nicht gleich',
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
  SystemPromptPlaceholder: 'System-Prompt, kann Systemvariablen referenzieren wie',
  UserPromptPlaceholder: 'Benutzer-Prompt, kann Systemvariablen referenzieren wie',
  initiator: 'Initiator',
  abnormalInformation: 'Abnormalitäts-Information',
}
