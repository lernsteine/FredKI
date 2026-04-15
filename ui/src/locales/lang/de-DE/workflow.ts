export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Grundlegend',
  nodeSetting: 'Knoteneinstellungen',
  workflow: 'Workflow',
  knowledgeWorkflow: 'Wissens-Workflow',
  info: {
    previewVersion: 'Vorschauversion:',
    saveTime: 'Zuletzt gespeichert:',
  },
  operation: {
    toImportDoc: 'Zu Dokumentimport gehen',
    importWorkflow: 'Workflow importieren',
    exportWorkflow: 'Workflow exportieren',
  },
  setting: {
    restoreVersion: 'Vorherige Version wiederherstellen',
    restoreCurrentVersion: 'Auf diese Version wiederherstellen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Veröffentlichungsverlauf',
    autoSave: 'Automatisch speichern',
    latestRelease: 'Neueste Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Beenden',
    exitSave: 'Speichern & Beenden',
    templateCenter: 'Vorlagenzentrum',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen können nur vom rechten Anker aus hergestellt werden',
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen können nur zum linken Anker hergestellt werden',
    applicationNodeError: 'Dieser Agent ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Beenden speichern?',
    searchPlaceholder: 'Bitte Knotennamen eingeben',
  },
  delete: {
    confirmTitle: 'Diesen Knoten wirklich löschen?',
    deleteMessage: 'Dieser Knoten kann nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Herauszoomen',
    zoomIn: 'Hineinzoomen',
    fitView: 'An Bildschirm anpassen',
    retract: 'Alle einklappen',
    extend: 'Alle erweitern',
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
    placeholder: 'Bitte Variable auswählen',
    inputPlaceholder: 'Bitte Variable eingeben',
    loop: 'Schleifenvariable',
  },
  condition: {
    title: 'Ausführungsbedingung',
    front: 'Vorbedingung',
    AND: 'Alle',
    OR: 'Beliebig',
    text: 'Nach Ausführung des verbundenen Knotens wird der aktuelle Knoten ausgeführt',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Nur ein Startknoten ist erlaubt',
    baseNodeRequired: 'Basisknoten ist erforderlich',
    baseNodeOnly: 'Nur ein Basisknoten ist erlaubt',
    notInWorkFlowNode: 'Knoten nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Drahtlose Schleife muss einen Break-Knoten haben',
  },
  nodes: {
    knowledgeWriteNode: {
      label: 'Wissensschreiben',
      text: 'Die Eingabe-Paragraphenliste in die aktuelle Wissensdatenbank schreiben und die Vektorisierung abschließen',
    },
    dataSourceWebNode: {
      label: 'Webseite',
      text: 'Root-URL eingeben, um Webdaten automatisch zu crawlen (einzelner Link entspricht einem Dokument), gibt eine Dokumentenliste mit Inhalt aus',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, gibt Dokumentenliste aus (Inhalt nicht analysiert, muss mit dem Knoten „Dokumentinhalts-Extraktion“ kombiniert werden)',
      fileList: 'Dateiliste',
      fileFormat: {
        label: 'Unterstützte Dateiformate',
        requiredMessage: 'Bitte Dateiformate auswählen',
      },
      maxFileNumber: {
        label: 'Maximale Anzahl Dateien pro Upload',
      },
      maxFileCountNumber: {
        label: 'Maximale Größe pro Datei (MB)',
      },
    },
    classify: {
      aiCapability: 'KI-Fähigkeit',
      businessLogic: 'Geschäftslogik',
      other: 'Sonstiges',
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
        maxFiles: 'Maximale Anzahl Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Erlaubte Dateitypen',
          documentText: 'Erfordert den Knoten „Dokumentinhalts-Extraktion“ zur Analyse des Dokumentinhalts',
          imageText: 'Erfordert den Knoten „Bildverstehen“ zur Analyse des Bildinhalts',
          videoText: 'Erfordert den Knoten „Videoverstehen“ zur Analyse des Videoinhalts',
          audioText: 'Erfordert den Knoten „Speech-to-Text“ zur Analyse des Audioinhalts',
          uploadMethod: 'Upload-Methode',
        },
      },
    },
    KnowledgeBaseNode: {
      DocumentSetting: 'Dokumentverarbeitungseinstellung',
    },
    aiChatNode: {
      label: 'KI-Chat',
      text: 'Mit einem KI-Modell chatten',
      answer: 'KI-Inhalt',
      returnContent: {
        label: 'Inhalt zurückgeben',
        tooltip: `Wenn ausgeschaltet, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Wenn der Benutzer die Ausgabe dieses Knotens sehen soll, schalten Sie den Schalter ein.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Verläufe',
    },
    searchKnowledgeNode: {
      label: 'Wissensabfrage',
      text: 'Ermöglicht die Abfrage von Textinhalten aus der Wissensdatenbank, die mit der Benutzerfrage zusammenhängen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die den Kriterien für direkte Antwort erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente, die den Kriterien für direkte Antwort erfüllen',
      searchParam: 'Abfrageparameter',
      showKnowledge: {
        label: 'Ergebnisse werden in der Wissensquelle angezeigt',
        requiredMessage: 'Bitte Parameter festlegen',
      },
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Abfrage',
      text: 'Suche nach Dokumenten, die den Bedingungen entsprechen, basierend auf Dokument-Tags im angegebenen Suchbereich',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Manuell Tag-Filterbedingungen festlegen',
      auto: 'Automatisch',
      autoTooltip: 'Automatisch Tag-Bedingungen basierend auf der Suchfrage filtern',
      documentList: 'Dokumentenliste',
      knowledgeList: 'Wissensdatenbank-Liste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: `Wert oder Name `,
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Frageoptimierung',
      text: 'Optimieren und verbessern der aktuellen Frage basierend auf historischen Chat-Verläufen, um besser zu Wissenssegmenten zu passen',
      result: 'Ergebnis der optimierten Frage',
      systemDefault: `#Rolle
Sie sind ein Meister der Problemoptimierung und können Benutzerabsichten aus dem Kontext genau ableiten und die vom Benutzer gestellten Fragen optimieren.
##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Benutzereingabe-Fragen empfangen.
3. Die Bedeutung des Problems sorgfältig anhand des Kontexts analysieren.
4. Optimierte Probleme ausgeben.
##Einschränkungen:
-Nur das optimierte Problem zurückgeben, ohne zusätzliche Erklärungen oder Klarstellungen.
-Sicherstellen, dass das optimierte Problem die ursprüngliche Absicht des Problems genau widerspiegelt und die ursprüngliche Intention nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingter Zweig',
      text: 'Verschiedene Knoten basierend auf Bedingungen auslösen',
      branch_name: 'Zweigname',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt folgende',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Spezifische Antwort',
      text: 'Antwortinhalt festlegen, referenzierte Variablen werden in Zeichenketten umgewandelt und ausgegeben',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrpfad-Rückruf',
      text: 'Verwenden eines Re-Ranking-Modells zur Verfeinerung der Abfrageergebnisse aus mehreren Wissensquellen',
      result_list: 'Liste der neu gerankten Ergebnisse',
      result: 'Re-Ranking-Ergebnis',
      rerankerContent: {
        label: 'Re-Ranking-Inhalt',
        requiredMessage: 'Bitte Re-Ranking-Inhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichenanzahl',
      reranker_model: {
        label: 'Re-Ranker',
        placeholder: 'Bitte Re-Ranker auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Benutzereingaben während der Q&A sammeln und in nachfolgenden Prozessen verwenden',
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
      text: 'Eingabedokumente analysieren und strukturierten Dokumentinhalt ausgeben',
      content: 'Dokumentinhalt',
    },
    documentSplitNode: {
      label: 'Dokumentaufteilung',
      text: 'Eingabedokumentinhalt gemäß der Segmentierungsstrategie aufteilen und eine Liste segmentierter Texte ausgeben',
      paragraphList: 'Liste der aufgeteilten Segmente',
      splitStrategy: {
        label: 'Aufteilungsstrategie',
        placeholder: 'Bitte Aufteilungsstrategie auswählen',
        requiredMessage: 'Bitte Aufteilungsstrategie auswählen',
      },
      chunk_length: {
        label: 'Chunk-Länge',
        tooltip1: 'Kernziel ist der Ausgleich von Abfragegenauigkeit und Rückrufeffizienz',
        tooltip2:
          'Vermeiden Sie zu kurze Segmentierung: Ein einzelnes Segment <50 Zeichen kann zu semantischer Fragmentierung führen und die Abfrageabsicht möglicherweise nicht treffen.',
        tooltip3:
          'Vermeiden Sie zu große Segmentierung: Ein Block >500 Zeichen erhöht redundante Informationen, verringert die Abfragegenauigkeit und verbraucht mehr Speicher- und Rechenressourcen.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments setzen',
      title2: 'Dokumentname als zugehörige Frage des Segments setzen',
    },
    imageUnderstandNode: {
      label: 'Bildverstehen',
      text: 'Bilder analysieren, um Objekte, Szenen zu erkennen und Antworten zu geben',
      answer: 'KI-Inhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte Vision-Modell auswählen',
      },
      image: {
        label: 'Bild auswählen',
        requiredMessage: 'Bitte Bild auswählen',
      },
    },
    videoUnderstandNode: {
      label: 'Videoverstehen',
      text: 'Objekte, Szenen und weitere Informationen in Videos erkennen, um Benutzerfragen zu beantworten',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte Vision-Modell auswählen',
      },
      video: {
        label: 'Video auswählen',
        requiredMessage: 'Bitte Video auswählen',
      },
    },
    variableAssignNode: {
      label: 'Variable zuweisen',
      text: 'Wert der globalen Variable aktualisieren',
      assign: 'Wert festlegen',
    },
    variableAggregationNode: {
      label: 'Variablenaggregation',
      text: 'Variablen jeder Gruppe gemäß der Aggregationsstrategie zusammenfassen',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Den ersten nicht-leeren Wert jeder Gruppe zurückgeben',
      placeholder1: 'Array der Variablen jeder Gruppe zurückgeben',
      placeholder2: 'Dict der Variablen jeder Gruppe zurückgeben',
      group: {
        noneError: 'Name darf nicht leer sein',
        dupError: 'Name darf nicht dupliziert werden',
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
      mcpServerTip: 'Bitte MCP-Server-Konfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte Tool auswählen',
      configLabel: 'MCP-Server-Konfiguration (nur SSE/Streamable HTTP-Aufrufe werden unterstützt)',
      reference: 'MCP referenzieren',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder basierend auf bereitgestelltem Textinhalt generieren',
      answer: 'KI-Inhalt',
      model: {
        label: 'Bildgenerierungs-Modell',
        requiredMessage: 'Bitte Bildgenerierungs-Modell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die Sie im generierten Bild wünschen',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die Sie aus dem generierten Bild ausschließen möchten',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die Sie nicht generieren möchten, z. B. Farbe, blutige Inhalte',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video basierend auf bereitgestelltem Textinhalt generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (positiv)',
        tooltip:
          'Positiver Prompt, um Elemente und visuelle Merkmale zu beschreiben, die im generierten Video erwartet werden',
      },
      negative_prompt: {
        label: 'Prompt (negativ)',
        tooltip:
          'Negativer Prompt, um Inhalte zu beschreiben, die im Video nicht erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die Sie nicht generieren möchten, z. B. Farben, blutige Inhalte',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Video basierend auf bereitgestellten Bildern generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (positiv)',
        tooltip:
          'Positiver Prompt, um Elemente und visuelle Merkmale zu beschreiben, die im generierten Video erwartet werden',
      },
      negative_prompt: {
        label: 'Prompt (negativ)',
        tooltip:
          'Negativer Prompt, um Inhalte zu beschreiben, die im Video nicht erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die Sie nicht generieren möchten, z. B. Farben, blutige Inhalte',
      },
      first_frame: {
        label: 'Erstes Frame-Bild',
        requiredMessage: 'Bitte erstes Frame-Bild auswählen',
      },
      last_frame: {
        label: 'Letztes Frame-Bild',
        requiredMessage: 'Bitte letztes Frame-Bild auswählen',
      },
    },
    speechToTextNode: {
      label: 'Speech2Text',
      text: 'Audio durch Spracherkennungsmodell in Text umwandeln',
      stt_model: {
        label: 'Spracherkennungsmodell',
      },
      audio: {
        label: 'Audiodatei auswählen',
        placeholder: 'Bitte Audiodatei auswählen',
      },
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'Text durch Sprachsynthesemodell in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Benutzerdefinierte Skripte ausführen, um Datenverarbeitung zu realisieren',
    },
    intentNode: {
      label: 'IntentNode',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassifikationen abgleichen',
      other: 'Sonstiges',
      error2: 'Wiederholter Intent',
      placeholder: 'Bitte Klassifikationsoption auswählen',
      classify: {
        label: 'Intent-Klassifikation',
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
      text: 'Wiederholen einer Reihe von Aufgaben durch Festlegen der Schleifenanzahl und Logik',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Schleife für festgelegte Anzahl',
        infiniteLoop: 'Unendliche Schleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Bitte Anzahl der Schleifen eingeben',
      },
      loopArray: {
        label: 'Zirkuläres Array',
        requiredMessage: 'Zirkuläres Array ist erforderlich',
        placeholder: 'Bitte zirkuläres Array auswählen',
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
      text: 'Wird verwendet, um die aktuelle Schleife zu beenden und zur nächsten überzugehen.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Abbrechen',
      text: 'Aktuelle Schleife beenden und den Schleifenkörper verlassen',
      isBreak: 'Abbrechen',
    },
    variableSplittingNode: {
      label: 'Variablenaufteilung',
      text: 'Durch Konfiguration von JSON-Path-Ausdrücken die Eingabe-JSON-Variable parsen und aufteilen',
      result: 'Ergebnis',
      splitVariables: 'Aufgeteilte Variablen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte aufgeteilte Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip: 'Bitte JSON-Path-Ausdrücke verwenden, um Variablen aufzuteilen, z. B.: $.store.book <a href="https://pypi.org/project/jsonpath-ng/1.8.0/" target="_blank" class="expression_tip">Details hier ➜ pypi.org</a>',
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
  SystemPromptPlaceholder: 'System-Prompt, kann auf Systemvariablen verweisen, z. B.',
  UserPromptPlaceholder: 'Benutzer-Prompt, kann auf Systemvariablen verweisen, z. B.',
  initiator: 'Initiator',
  abnormalInformation: 'Abnormale Informationen',
}
