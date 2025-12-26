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
    toImportDoc: 'Zu Dokumenten importieren gehen',
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
    templateCenter: 'Vorlagencenter',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen dürfen nur vom rechten Ankerpunkt ausgehen',
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen dürfen nur zum linken Ankerpunkt führen',
    applicationNodeError: 'Diese Anwendung ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Beenden speichern?',
  },
  delete: {
    confirmTitle: 'Diesen Knoten löschen?',
    deleteMessage: 'Dieser Knoten kann nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Herauszoomen',
    zoomIn: 'Hineinzoomen',
    fitView: 'An Bildschirm anpassen',
    retract: 'Alle einklappen',
    extend: 'Alle ausklappen',
    beautify: 'Automatisch anordnen',
  },
  variable: {
    global: 'Globale Variable',
    Referencing: 'Referenzierte Variable',
    ReferencingRequired: 'Referenzierte Variable ist erforderlich',
    ReferencingError: 'Ungültige referenzierte Variable',
    NoReferencing: 'Referenzierte Variable existiert nicht',
    placeholder: 'Bitte Variable auswählen',
    inputPlaceholder: 'Bitte Variable eingeben',
    loop: 'Schleifenvariable',
  },
  condition: {
    title: 'Ausführungsbedingung',
    front: 'Vorbedingung',
    AND: 'Alle',
    OR: 'Eine',
    text: 'Nach Ausführung des verbundenen Knotens den aktuellen Knoten ausführen',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Nur ein Startknoten erlaubt',
    baseNodeRequired: 'Basisinformationsknoten ist erforderlich',
    baseNodeOnly: 'Nur ein Basisinformationsknoten erlaubt',
    notInWorkFlowNode: 'Knoten nicht im Workflow',
    noNextNode: 'Nachfolgeknoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Drahtlose Schleife muss einen Break-Knoten enthalten',
  },
  nodes: {
    knowledgeWriteNode: {
      label: 'Wissen schreiben',
      text: 'Die Eingabe-Absatzliste in die aktuelle Wissensbasis schreiben und Vektorisierung durchführen',
    },
    dataSourceWebNode: {
      label: 'Website',
      text: 'Root-URL eingeben, um automatisch Webdaten zu crawlen (ein Link entspricht einem Dokument), Ausgabe einer Dokumentenliste mit Inhalt',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, Dokumentenliste ausgeben (Inhalt nicht geparst, muss mit "Dokumentinhalt extrahieren"-Knoten kombiniert werden)',
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
      label: 'Basisinformationen',
      appName: {
        label: 'App-Name',
      },
      appDescription: {
        label: 'App-Beschreibung',
      },
      fileUpload: {
        label: 'Datei-Upload',
        tooltip: 'Wenn aktiviert, wird auf der Q&A-Seite eine Datei-Upload-Schaltfläche angezeigt.',
      },
      FileUploadSetting: {
        title: 'Datei-Upload-Einstellungen',
        maxFiles: 'Maximale Anzahl Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Erlaubte Dateitypen',
          documentText: 'Benötigt "Dokumentinhalt extrahieren"-Knoten zum Parsen des Dokumentinhalts',
          imageText: 'Benötigt "Bildverstehen"-Knoten zum Parsen des Bildinhalts',
          videoText: 'Benötigt "Videoverstehen"-Knoten zum Parsen des Videoinhalts',
          audioText: 'Benötigt "Sprache-zu-Text"-Knoten zum Parsen des Audioinhalts',
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
        tooltip: `Wenn deaktiviert, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Wenn der Benutzer die Ausgabe dieses Knotens sehen soll, bitte Schalter aktivieren.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Datensätze',
    },
    searchKnowledgeNode: {
      label: 'Wissensabruf',
      text: 'Textinhalte zur Benutzerfrage aus dem Wissen abfragen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die direkte Antwortkriterien erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente, die direkte Antwortkriterien erfüllen',
      searchParam: 'Abrufparameter',
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Abruf',
      text: 'Dokumente suchen, die den Bedingungen anhand des Dokument-Tags im angegebenen Suchbereich entsprechen',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Tag-Filterbedingungen manuell einstellen',
      auto: 'Automatisch',
      autoTooltip: 'Tag-Filterbedingungen automatisch basierend auf der Suchfrage einstellen',
      documentList: 'Dokumentenliste',
      knowledgeList: 'Wissensbasenliste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: `Wert oder Name `,
      showKnowledge: {
        label: 'Ergebnisse in der Wissensquelle anzeigen',
        requiredMessage: 'Bitte Parameter einstellen',
      },
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragenoptimierung',
      text: 'Aktuelle Frage basierend auf historischen Chat-Datensätzen optimieren, um besser zu Wissenssegmenten zu passen',
      result: 'Optimierte Fragen-Ergebnis',
      systemDefault: `#Role
Sie sind ein Meister der Problemboptimierung und können basierend auf dem Kontext genau die Absichten des Benutzers ableiten und die gestellten Fragen optimieren.

##Skills
###Skill 1: Probleme optimieren
2. Benutzereingabefragen empfangen.
3. Die Bedeutung des Problems sorgfältig anhand des Kontexts analysieren.
4. Optimierte Probleme ausgeben.

##Limitations:
-Nur das optimierte Problem zurückgeben, ohne zusätzliche Erklärungen oder Klärungen.
-Stellen Sie sicher, dass das optimierte Problem die ursprüngliche Problembabsicht genau widerspiegelt und die ursprüngliche Absicht nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingungsverzweigung',
      text: 'Verschiedene Knoten basierend auf Bedingungen auslösen',
      branch_name: 'Zweigname',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt die folgenden',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte einen Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Feste Antwort',
      text: 'Antwortinhalt festlegen, referenzierte Variablen werden in Strings umgewandelt und ausgegeben',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrwege-Abruf',
      text: 'Mit einem Re-Ranking-Modell die Abruf-Ergebnisse aus mehreren Wissensquellen verfeinern',
      result_list: 'Neu sortierte Ergebnisliste',
      result: 'Re-Ranking-Ergebnis',
      rerankerContent: {
        label: 'Re-Ranking-Inhalt',
        requiredMessage: 'Bitte Re-Ranking-Inhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichenanzahl',
      reranker_model: {
        label: 'Re-Rank',
        placeholder: 'Bitte Re-Rank auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Während des Q&A Benutzereingaben sammeln und in nachfolgenden Prozessen verwenden',
      form_content_format1: 'Hallo, bitte füllen Sie das untenstehende Formular aus:',
      form_content_format2: 'Nach dem Ausfüllen auf die Schaltfläche [Absenden] klicken.',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Formular-Ausgabeinhalt',
        requiredMessage:
          'Bitte legen Sie den Ausgabeinhalt dieses Knotens fest, { form } ist Platzhalter für das Formular.',
        tooltip: 'Definiert den Ausgabeinhalt dieses Knotens. { form } ist Platzhalter für das Formular',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formularkonfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalt extrahieren',
      text: 'Eingabedokumente parsen, um strukturierten Dokumentinhalt auszugeben',
      content: 'Dokumentinhalt',
    },
    documentSplitNode: {
      label: 'Dokument aufteilen',
      text: 'Eingabe-Dokumentinhalt gemäß Segmentierungsstrategie aufteilen, Liste der Segmenttexte ausgeben',
      paragraphList: 'Liste der aufgeteilten Segmente',
      splitStrategy: {
        label: 'Segmentierungsstrategie',
        placeholder: 'Bitte Segmentierungsstrategie auswählen',
        requiredMessage: 'Bitte Segmentierungsstrategie auswählen',
      },
      chunk_length: {
        label: 'Blocklänge',
        tooltip1: 'Kernziel ist das Gleichgewicht zwischen Abrufgenauigkeit und Recall-Effizienz',
        tooltip2:
          'Zu kurze Segmentierung vermeiden: Ein einzelnes Segment <50 Zeichen kann zu semantischer Fragmentierung führen und während des Abrufs aufgrund fehlenden Kontexts die Abfrageabsicht nicht treffen.',
        tooltip3:
          'Zu lange Segmentierung vermeiden: Ein Block >500 Zeichen erhöht redundante Informationen, verringert die Abrufgenauigkeit und verbraucht mehr Speicher- und Rechenressourcen.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments setzen',
      title2: 'Dokumentname als zugehörige Frage des Segments setzen',
    },
    imageUnderstandNode: {
      label: 'Bildverstehen',
      text: 'Bilder analysieren, um Objekte, Szenen zu erkennen und Fragen zu beantworten',
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
      text: 'Objekte, Szenen und andere Informationen in Videos erkennen, um Benutzerfragen zu beantworten',
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
      text: 'Den Wert der globalen Variable aktualisieren',
      assign: 'Wert setzen',
    },
    variableAggregationNode: {
      label: 'Variablenaggregation',
      text: 'Variablen jeder Gruppe gemäß Aggregationsstrategie aggregieren',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Den ersten nicht-null-Wert jeder Gruppe zurückgeben',
      placeholder1: 'Die Menge der Variablen jeder Gruppe zurückgeben',
      group: {
        noneError: 'Name darf nicht leer sein',
        dupError: 'Name darf nicht dupliziert werden',
      },
      addGroup: 'Gruppe hinzufügen',
      editGroup: 'Gruppe bearbeiten',
    },
    mcpNode: {
      label: 'MCP-Knoten',
      text: 'Externe MCP-Dienste aufrufen, um Daten zu verarbeiten',
      getToolsSuccess: 'Tools erfolgreich abgerufen',
      getTool: 'Tools abrufen',
      toolParam: 'Tool-Parameter',
      mcpServerTip: 'Bitte MCP-Server-Konfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte ein Tool auswählen',
      configLabel: 'MCP-Server-Konfig (nur SSE/Streamable HTTP-Aufrufe unterstützt)',
      reference: 'MCP referenzieren',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder basierend auf bereitgestelltem Textinhalt generieren',
      answer: 'KI-Inhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die im generierten Bild gewünscht sind',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die aus dem generierten Bild ausgeschlossen werden sollen',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die nicht generiert werden sollen, z. B. Farben, blutiger Inhalt',
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
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, zur Beschreibung gewünschter Elemente und visueller Merkmale im generierten Video',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, zur Beschreibung von Inhalten, die im Video nicht gewünscht sind und die Videogenerierung einschränken können",
        placeholder:
          "Bitte beschreiben Sie Videoinhalte, die nicht generiert werden sollen, z. B.: Farben, blutiger Inhalt",
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
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt, zur Beschreibung gewünschter Elemente und visueller Merkmale im generierten Video',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, zur Beschreibung von Inhalten, die im Video nicht gewünscht sind und die Videogenerierung einschränken können",
        placeholder:
          "Bitte beschreiben Sie Videoinhalte, die nicht generiert werden sollen, z. B.: Farben, blutiger Inhalt",
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
      label: 'Sprache-zu-Text',
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
      text: 'Text durch Sprachsynthese-Modell in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Benutzerdefinierte Skripte ausführen, um Datenverarbeitung zu erreichen',
    },
    intentNode: {
      label: 'Intent-Knoten',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassifikationen abgleichen',
      other: 'andere',
      error2: 'Wiederholte Intent',
      placeholder: 'Bitte Klassifikationsoption auswählen',
      classify: {
        label: 'Intent-Klassifikation',
      },
      input: {
        label: 'Eingabe',
      },
    },
    applicationNode: {
      label: 'APP-Knoten',
    },
    loopNode: {
      label: 'Schleifenknoten',
      text: 'Eine Reihe von Aufgaben durch Einstellung der Schleifenzahl und Logik wiederholen',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Bestimmte Anzahl Schleifen',
        infiniteLoop: 'Endlosschleife',
      },
      loopNumber: {
        label: 'Schleifenzahl',
        requiredMessage: 'Bitte Schleifenzahl eingeben',
      },
      loopArray: {
        label: 'Schleifenarray',
        requiredMessage: 'Schleifenarray ist erforderlich',
        placeholder: 'Bitte Schleifenarray auswählen',
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
      label: 'Schleifenrumpf',
      text: 'Schleifenrumpf',
    },
    loopContinueNode: {
      label: 'Weiter',
      text: 'Aktuelle Schleife beenden und zur nächsten fortfahren.',
      isContinue: 'Weiter',
    },
    loopBreakNode: {
      label: 'Break',
      text: 'Aktuelle Schleife beenden und Schleifenrumpf verlassen',
      isBreak: 'Break',
    },
    variableSplittingNode: {
      label: 'Variablenteilung',
      text: 'Durch Konfiguration von JSON-Path-Ausdrücken die Eingabe-Variable im JSON-Format parsen und teilen',
      result: 'Ergebnis',
      splitVariables: 'Geteilte Variablen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte geteilte Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip: 'Bitte JSON-Path-Ausdrücke zur Teilung von Variablen verwenden, z. B.: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Parameter-Extraktion',
      text: 'Mit KI-Modellen strukturierte Parameter extrahieren',
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
    ge: 'Größer oder gleich',
    gt: 'Größer als',
    le: 'Kleiner oder gleich',
    lt: 'Kleiner als',
    len_eq: 'Länge gleich',
    len_ge: 'Länge größer oder gleich',
    len_gt: 'Länge größer als',
    len_le: 'Länge kleiner oder gleich',
    len_lt: 'Länge kleiner als',
  },
  SystemPromptPlaceholder: 'System-Prompt, kann Systemvariablen referenzieren, z. B.',
  UserPromptPlaceholder: 'Benutzer-Prompt, kann Systemvariablen referenzieren, z. B.',
  ExecutionRecord: 'Ausführungsdatensatz',
  initiator: 'Initiator',
  debug: {},
}
