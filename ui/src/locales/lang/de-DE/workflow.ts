export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Basis',
  nodeSetting: 'Knoteneinstellungen',
  workflow: 'Workflow',
  knowledgeWorkflow: 'Wissens-Workflow',
  info: {
    previewVersion: 'Vorschauversion:',
    saveTime: 'Zuletzt gespeichert:',
  },
  operation: {
    toImportDoc: 'Zum Dokumentenimport',
    importWorkflow: 'Workflow importieren',
    exportWorkflow: 'Workflow exportieren',
  },
  setting: {
    restoreVersion: 'Vorherige Version wiederherstellen',
    restoreCurrentVersion: 'Diese Version wiederherstellen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Veröffentlichungsverlauf',
    autoSave: 'Automatisch speichern',
    latestRelease: 'Letzte Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Verlassen',
    exitSave: 'Speichern & Verlassen',
    templateCenter: 'Vorlagenzentrum',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen können nur vom rechten Anker ausgehen',
    notRecyclable: 'Schleifenverbindungen sind nicht erlaubt',
    onlyLeft: 'Verbindungen können nur zum linken Anker hergestellt werden',
    applicationNodeError: 'Dieser Agent ist nicht verfügbar',
    toolNodeError: 'Dieser Tool-Knoten ist nicht verfügbar',
    repeatedNodeError: 'Ein Knoten mit diesem Namen existiert bereits',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten wurde bereits kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Vor dem Verlassen speichern?',
    searchPlaceholder: 'Bitte Knotennamen eingeben',
    disabled: 'Der Knoten wurde deaktiviert',
  },
  delete: {
    confirmTitle: 'Möchten Sie diesen Knoten wirklich löschen?',
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
    placeholder: 'Bitte Variable auswählen',
    inputPlaceholder: 'Bitte Variable eingeben',
    loop: 'Schleifenvariable',
  },
  condition: {
    title: 'Ausführungsbedingung',
    front: 'Vorbedingung',
    AND: 'Alle',
    OR: 'Beliebige',
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
    loopNodeBreakNodeRequired: 'Unendliche Schleife muss einen Break-Knoten haben',
  },
  nodes: {
    toolWorlflowNode: {
      label: 'Workflow-Tool',
      text: 'Workflow-Tool',
    },
    knowledgeWriteNode: {
      label: 'Wissen schreiben',
      text: 'Schreibt die Eingabe-Abschnittsliste in die aktuelle Wissensbasis und führt die Vektorisierung durch',
    },
    dataSourceWebNode: {
      label: 'Website',
      text: 'Root-URL eingeben, um Web-Daten automatisch zu crawlen (ein Link = ein Dokument), gibt eine Dokumentenliste mit Inhalt aus',
      field_label: 'Dokumentenliste',
    },
    dataSourceLocalNode: {
      label: 'Lokale Datei',
      text: 'Lokale Dokumente hochladen, gibt Dokumentenliste aus (Inhalt nicht geparst, muss mit "Dokumenteninhalt-Extraktion" kombiniert werden)',
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
      dataProcessing: 'Datenverarbeitung',
    },
    startNode: {
      label: 'Start',
      question: 'Benutzerfrage',
      currentTime: 'Aktuelle Zeit',
    },
    baseNode: {
      visibilitySetting: {
        label: 'Sichtbarkeitseinstellung',
        showCondition: 'Bedingung anzeigen',
        hideCondition: 'Bedingung ausblenden',
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
          documentText: 'Erfordert "Dokumenteninhalt-Extraktion"-Knoten zum Parsen',
          imageText: 'Erfordert "Bildverstehen"-Knoten zum Parsen',
          videoText: 'Erfordert "Videoverstehen"-Knoten zum Parsen',
          audioText: 'Erfordert "Sprache-zu-Text"-Knoten zum Parsen',
          uploadMethod: 'Upload-Methode',
        },
      },
    },
    KnowledgeBaseNode: {
      DocumentSetting: 'Dokumentenverarbeitungseinstellung',
    },
    aiChatNode: {
      label: 'KI-Chat',
      text: 'Mit einem KI-Modell chatten',
      answer: 'KI-Inhalt',
      returnContent: {
        label: 'Inhalt zurückgeben',
        tooltip: `Wenn ausgeschaltet, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Wenn der Benutzer die Ausgabe sehen soll, schalten Sie den Schalter ein.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Protokolle',
    },
    searchKnowledgeNode: {
      label: 'Wissensabfrage',
      text: 'Ermöglicht das Abfragen von Textinhalten aus dem Wissen, die zur Benutzerfrage passen',
      paragraph_list: 'Liste der abgerufenen Abschnitte',
      is_hit_handling_method_list: 'Liste der Abschnitte, die direkte Antwortkriterien erfüllen',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Abschnitte, die direkte Antwortkriterien erfüllen',
      searchParam: 'Abfrageparameter',
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
      label: 'Dokumenten-Tag-Abfrage',
      text: 'Sucht Dokumente, die den Bedingungen entsprechen, basierend auf Dokumenten-Tags im angegebenen Suchbereich',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Manuelle Tag-Filterbedingungen festlegen',
      auto: 'Automatisch',
      autoTooltip: 'Automatisch Tag-Bedingungen basierend auf der Suchfrage filtern',
      documentList: 'Dokumentenliste',
      knowledgeList: 'Wissensbasis-Liste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: 'Wert oder Name',
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Frageoptimierung',
      text: 'Optimierung der aktuellen Frage basierend auf Chat-Verlauf für bessere Übereinstimmung mit Wissensabschnitten',
      result: 'Ergebnis der optimierten Frage',
      systemDefault: `#Rolle
Sie sind ein Meister der Problemoptimierung und können die Absichten des Benutzers aus dem Kontext ableiten und Fragen optimieren.
##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Benutzereingaben empfangen.
3. Die Bedeutung des Problems im Kontext analysieren.
4. Optimierte Probleme ausgeben.
##Einschränkungen:
- Nur das optimierte Problem zurückgeben, ohne zusätzliche Erklärungen.
- Sicherstellen, dass die optimierte Frage die ursprüngliche Absicht beibehält.`,
    },
    conditionNode: {
      label: 'Bedingungsverzweigung',
      text: 'Verschiedene Knoten je nach Bedingung ausführen',
      branch_name: 'Zweigname',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt folgendes',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Feste Antwort',
      text: 'Antwortinhalt festlegen, referenzierte Variablen werden in Strings umgewandelt',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrpfad-Ranking',
      text: 'Verfeinert Abruf-Ergebnisse aus mehreren Wissensquellen mit einem Re-Ranking-Modell',
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
        label: 'Reranker',
        placeholder: 'Bitte Reranker auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Benutzereingaben während der Q&A sammeln und in nachfolgenden Prozessen verwenden',
      form_content_format1: 'Hallo, bitte füllen Sie das folgende Formular aus:',
      form_content_format2: 'Klicken Sie nach dem Ausfüllen auf [Absenden].',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Formular-Ausgabeinhalt',
        requiredMessage:
          'Bitte Ausgabeinhalt dieses Knotens festlegen. { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Definieren Sie den Ausgabeinhalt dieses Knotens. { form } ist ein Platzhalter für das Formular',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formular-Konfiguration',
    },
    documentExtractNode: {
      label: 'Dokumenteninhalt-Extraktion',
      text: 'Eingabedokumente parsen und strukturierten Inhalt ausgeben',
      content: 'Dokumenteninhalt',
    },
    documentSplitNode: {
      label: 'Dokumentenaufteilung',
      text: 'Eingabedokumenteninhalt nach Segmentierungsstrategie aufteilen und Liste von Segmenten ausgeben',
      paragraphList: 'Liste der aufgeteilten Abschnitte',
      splitStrategy: {
        label: 'Segmentierungsstrategie',
        placeholder: 'Bitte Segmentierungsstrategie auswählen',
        requiredMessage: 'Bitte Segmentierungsstrategie auswählen',
      },
      chunk_length: {
        label: 'Chunk-Länge',
        tooltip1: 'Ziel ist ein Ausgleich zwischen Abrufgenauigkeit und Effizienz',
        tooltip2:
          'Vermeiden Sie zu kurze Segmente: Ein Segment <50 Zeichen kann zu semantischer Fragmentierung führen.',
        tooltip3:
          'Vermeiden Sie zu große Segmente: Ein Block >500 Zeichen erhöht Redundanz und Ressourcenverbrauch.',
      },
      title1: 'Segmenttitel als zugehörige Frage des Segments setzen',
      title2: 'Dokumentname als zugehörige Frage des Segments setzen',
    },
    imageUnderstandNode: {
      label: 'Bildverstehen',
      text: 'Bilder analysieren, Objekte, Szenen erkennen und Antworten geben',
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
      text: 'Objekte, Szenen und andere Informationen in Videos erkennen',
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
      assign: 'Wert setzen',
    },
    variableAggregationNode: {
      label: 'Variablenaggregation',
      text: 'Variablen jeder Gruppe nach Aggregationsstrategie zusammenfassen',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Ersten nicht-leeren Wert jeder Gruppe zurückgeben',
      placeholder1: 'Array der Variablen jeder Gruppe zurückgeben',
      placeholder2: 'Dictionary der Variablen jeder Gruppe zurückgeben',
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
      mcpToolTip: 'Bitte Tool auswählen',
      configLabel: 'MCP-Server-Konfiguration (nur SSE/Streamable HTTP)',
      reference: 'MCP referenzieren',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder basierend auf Textbeschreibung generieren',
      answer: 'KI-Inhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreiben Sie gewünschte Elemente und visuelle Merkmale',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreiben Sie Elemente, die nicht im Bild erscheinen sollen',
        placeholder:
          'Bitte beschreiben Sie Inhalte, die nicht generiert werden sollen (z. B. Farben, blutige Inhalte)',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video basierend auf Textbeschreibung generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt zur Beschreibung gewünschter Elemente und visueller Merkmale',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt zur Beschreibung unerwünschter Inhalte',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die nicht generiert werden sollen (z. B. Farben, blutige Inhalte)',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Video basierend auf Bildern generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt zur Beschreibung gewünschter Elemente und visueller Merkmale',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt zur Beschreibung unerwünschter Inhalte',
        placeholder:
          'Bitte beschreiben Sie Videoinhalte, die nicht generiert werden sollen (z. B. Farben, blutige Inhalte)',
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
      text: 'Audio in Text umwandeln mittels Spracherkennungsmodell',
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
      text: 'Text in Audio umwandeln mittels Sprachsynthesemodell',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Benutzerdefinierte Skripte ausführen zur Datenverarbeitung',
    },
    intentNode: {
      label: 'IntentNode',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassifizierungen abgleichen',
      error2: 'Doppelte Absicht',
      placeholder: 'Bitte Klassifizierungsoption wählen',
      classify: {
        label: 'Intent-Klassifizierung',
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
      text: 'Wiederholung einer Reihe von Aufgaben durch Schleifenanzahl und Logik',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Bestimmte Anzahl Schleifen',
        infiniteLoop: 'Unendliche Schleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Bitte Anzahl der Schleifen eingeben',
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
      label: 'Continue',
      text: 'Aktuelle Schleifeniteration beenden und zur nächsten gehen',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Break',
      text: 'Aktuelle Schleife beenden und Schleifenkörper verlassen',
      isBreak: 'Abbrechen',
    },
    variableSplittingNode: {
      label: 'Variablenaufteilung',
      text: 'JSON Path-Ausdrücke verwenden, um JSON-Variablen zu parsen und aufzuteilen',
      result: 'Ergebnis',
      splitVariables: 'Aufgeteilte Variablen',
      inputVariables: 'Eingabevariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte aufgeteilte Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip:
          'Bitte JSON Path-Ausdrücke verwenden, z. B.: $.store.book <a href="https://pypi.org/project/jsonpath-ng/1.8.0/" target="_blank" class="expression_tip">Details → pypi.org</a>',
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
  SystemPromptPlaceholder: 'System-Prompt, kann Systemvariablen referenzieren, z. B.',
  UserPromptPlaceholder: 'User-Prompt, kann Systemvariablen referenzieren, z. B.',
  initiator: 'Initiator',
  abnormalInformation: 'Abnormale Information',
}
