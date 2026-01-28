export default {
  title: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Grundkomponente',
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
    restoreCurrentVersion: 'Zu dieser Version wiederherstellen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Veröffentlichungshistorie',
    autoSave: 'Automatisches Speichern',
    latestRelease: 'Neueste Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Beenden',
    exitSave: 'Speichern & Beenden',
    templateCenter: 'Vorlagenzentrum',
  },
  tip: {
    noData: 'Keine zugehörigen Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen können nur vom rechten Anker hergestellt werden',
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen können nur zum linken Anker hergestellt werden',
    applicationNodeError: 'Diese Anwendung ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Beenden speichern?',
  },
  delete: {
    confirmTitle: 'Bestätigen Sie die Löschung dieses Knotens?',
    deleteMessage: 'Dieser Knoten kann nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    fitView: 'An Ansicht anpassen',
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
    placeholder: 'Bitte wählen Sie eine Variable aus',
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
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Drahtlose Schleife muss einen Break-Knoten enthalten',
  },
  nodes: {
    knowledgeWriteNode: {
      label: 'Wissen schreiben',
      text: 'Eingabe-Absatzliste in die aktuelle Wissensbasis schreiben und Vektorisierung durchführen',
    },
    dataSourceWebNode: {
      label: 'Website',
      text: 'Root-URL eingeben, um Webdaten automatisch zu crawlen (ein Link entspricht einem Dokument), Ausgabe einer Dokumentenliste mit Inhalt',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, Dokumentenliste ausgeben (Inhalt nicht geparst, muss mit "Dokumentinhalt extrahieren"-Knoten geparst werden)',
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
        tooltip: 'Wenn aktiviert, wird auf der Q&A-Seite ein Datei-Upload-Button angezeigt.',
      },
      FileUploadSetting: {
        title: 'Datei-Upload-Einstellungen',
        maxFiles: 'Maximale Anzahl Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Erlaubte Dateitypen für Upload',
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
                  Wenn der Benutzer die Ausgabe dieses Knotens sehen soll, bitte den Schalter aktivieren.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Datensätze',
    },
    searchKnowledgeNode: {
      label: 'Wissensabruf',
      text: 'Ermöglicht das Abfragen von textbezogenem Inhalt zu Benutzerfragen aus dem Wissen',
      paragraph_list: 'Liste der abgerufenen Segmente',
      is_hit_handling_method_list: 'Liste der Segmente, die direkte Antwortkriterien erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Segmente, die direkte Antwortkriterien erfüllen',
      searchParam: 'Abrufparameter',
      showKnowledge: {
        label: 'Ergebnisse in der Wissensquelle anzeigen',
        requiredMessage: 'Bitte Parameter einstellen',
      },
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Abruf',
      text: 'Suche nach Dokumenten, die den Bedingungen entsprechen, basierend auf dem Dokument-Tag im angegebenen Suchbereich',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Tag-Filterbedingungen manuell einstellen',
      auto: 'Automatisch',
      autoTooltip: 'Tag-Filterbedingungen automatisch basierend auf der Suchfrage einstellen',
      documentList: 'Dokumentenliste',
      knowledgeList: 'Wissensbasisliste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: `Wert oder Name`,
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragenoptimierung',
      text: 'Aktuelle Frage basierend auf historischen Chat-Datensätzen optimieren und verbessern, um besser zu Wissenssegmenten zu passen',
      result: 'Optimierte Fragen-Ergebnis',
      systemDefault: `#Rolle
Sie sind ein Meister der Problemboptimierung, geschickt darin, Benutzerabsichten basierend auf Kontext genau zu erschließen und die von Benutzern gestellten Fragen zu optimieren.

##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Benutzereingabe-Fragen empfangen.
3. Die Bedeutung des Problems sorgfältig basierend auf dem Kontext analysieren.
4. Optimierte Probleme ausgeben.

##Einschränkungen:
-Nur das optimierte Problem zurückgeben, ohne zusätzliche Erklärung oder Klärung.
-Stellen Sie sicher, dass das optimierte Problem die ursprüngliche Problembabsicht genau widerspiegelt und die ursprüngliche Absicht nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingter Zweig',
      text: 'Unterschiedliche Knoten basierend auf Bedingungen auslösen',
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
      label: 'Festgelegte Antwort',
      text: 'Antwortinhalt festlegen, referenzierte Variablen werden in Strings umgewandelt und ausgegeben',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrwege-Abruf',
      text: 'Ein Re-Ranking-Modell verwenden, um Abruf-Ergebnisse aus mehreren Wissensquellen zu verfeinern',
      result_list: 'Neu gerankte Ergebnisliste',
      result: 'Re-Ranking-Ergebnis',
      rerankerContent: {
        label: 'Re-Ranking-Inhalt',
        requiredMessage: 'Bitte Re-Ranking-Inhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichenanzahl',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Bitte ein Rerank auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Benutzereingaben während Q&A sammeln und in nachfolgenden Prozessen verwenden',
      form_content_format1: 'Hallo, bitte füllen Sie das untenstehende Formular aus:',
      form_content_format2: 'Klicken Sie nach dem Ausfüllen auf die [Absenden]-Schaltfläche.',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Formular-Ausgabeinhalt',
        requiredMessage:
          'Bitte den Ausgabeinhalt dieses Knotens einstellen, { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Den Ausgabeinhalt dieses Knotens definieren. { form } ist ein Platzhalter für das Formular',
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
      label: 'Dokumententeilung',
      text: 'Eingabedokumentinhalt gemäß der Teilungsstrategie teilen, Liste der geteilten Texte ausgeben',
      paragraphList: 'Liste der geteilten Segmente',
      splitStrategy: {
        label: 'Teilungsstrategie',
        placeholder: 'Bitte Teilungsstrategie auswählen',
        requiredMessage: 'Bitte Teilungsstrategie auswählen',
      },
      chunk_length: {
        label: 'Blocklänge',
        tooltip1: 'Kernziel ist das Balancieren von Abrufgenauigkeit und Recall-Effizienz',
        tooltip2:
          'Vermeiden Sie übermäßig kurze Teilung: Ein einzelnes Segment <50 Zeichen kann zu semantischer Fragmentierung führen und möglicherweise bei Abruf aufgrund fehlenden Kontexts die Abfrageabsicht nicht treffen.',
        tooltip3:
          'Vermeiden Sie übermäßige Teilung: Ein Block über 500 Zeichen erhöht redundante Informationen, reduziert Abrufgenauigkeit und verbraucht mehr Speicher- und Rechenressourcen.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments setzen',
      title2: 'Dokumentname als zugehörige Frage des Segments setzen',
    },
    imageUnderstandNode: {
      label: 'Bildverstehen',
      text: 'Bilder analysieren, um Objekte, Szenen zu identifizieren und Antworten zu geben',
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
      text: 'Objekte, Szenen und andere Informationen in Videos identifizieren, um Benutzerfragen zu beantworten',
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
      text: 'Variablen jeder Gruppe gemäß der Aggregationsstrategie aggregieren',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Den ersten nicht-null Wert jeder Gruppe zurückgeben',
      placeholder1: 'Die Menge der Variablen jeder Gruppe zurückgeben',
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
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte ein Tool auswählen',
      configLabel: 'MCP-Server-Konfiguration (Nur SSE/streambare HTTP-Aufrufe unterstützt)',
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
        tooltip: 'Beschreiben Sie Elemente und visuelle Merkmale, die Sie im generierten Bild wünschen',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die Sie aus dem generierten Bild ausschließen möchten',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die Sie nicht generieren möchten, wie Farben, blutige Inhalte',
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
          'Positiver Prompt, verwendet um Elemente und visuelle Merkmale zu beschreiben, die im generierten Video erwartet werden',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, verwendet um Inhalte zu beschreiben, die im Video nicht gesehen werden sollen, was die Videogenerierung einschränken kann",
        placeholder:
          "Bitte beschreiben Sie Videoinhalte, die Sie nicht generieren möchten, wie: Farben, blutige Inhalte",
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
          'Positiver Prompt, verwendet um Elemente und visuelle Merkmale zu beschreiben, die im generierten Video erwartet werden',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          "Negativer Prompt, verwendet um Inhalte zu beschreiben, die im Video nicht gesehen werden sollen, was die Videogenerierung einschränken kann",
        placeholder:
          "Bitte beschreiben Sie Videoinhalte, die Sie nicht generieren möchten, wie: Farben, blutige Inhalte",
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
      text: 'Benutzerdefinierte Skripte ausführen, um Datenverarbeitung zu erreichen',
    },
    intentNode: {
      label: 'Intent-Knoten',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassifikationen abgleichen',
      other: 'andere',
      error2: 'Wiederholte Intent',
      placeholder: 'Bitte Klassifikationsoption auswählen',
      classify: {
        label: 'Intent klassifizieren',
      },
      input: {
        label: 'Eingabe',
      },
    },
    applicationNode: {
      label: 'Anwendungs-Knoten',
    },
    loopNode: {
      label: 'Schleifenknoten',
      text: 'Eine Serie von Aufgaben durch Einstellen der Schleifenzahl und Logik wiederholen',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Bestimmte Anzahl Schleifen',
        infiniteLoop: 'Unendliche Schleife',
      },
      loopNumber: {
        label: 'Schleifenzahl',
        requiredMessage: 'Bitte Schleifenzahl eingeben',
      },
      loopArray: {
        label: 'Schleifen-Array',
        requiredMessage: 'Schleifen-Array ist erforderlich',
        placeholder: 'Bitte Schleifen-Array auswählen',
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
      text: 'Verwendet, um die aktuelle Schleife zu beenden und zur nächsten überzugehen.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Unterbrechen',
      text: 'Aktuelle Schleife beenden und den Schleifenkörper verlassen',
      isBreak: 'Unterbrechen',
    },
    variableSplittingNode: {
      label: 'Variablenteilung',
      text: 'Durch Konfigurieren von JSON-Path-Ausdrücken die Eingabe-JSON-Format-Variable parsen und teilen',
      result: 'Ergebnis',
      splitVariables: 'Geteilte Variablen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte geteilte Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip: 'Bitte JSON-Path-Ausdrücke verwenden, um Variablen zu teilen, z.B.: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Parameter-Extraktion',
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
  },
  SystemPromptPlaceholder: 'System-Prompt, kann Systemvariablen referenzieren, wie z.B.',
  UserPromptPlaceholder: 'Benutzer-Prompt, kann Systemvariablen referenzieren, wie z.B.',
  ExecutionRecord: 'Ausführungsprotokoll',
  initiator: 'Initiator',
  debug: {},
}
