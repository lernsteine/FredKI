export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Basis-Komponenten',
  nodeSetting: 'Knoten-Einstellungen',
  workflow: 'Workflow',
  searchBar: {
    placeholder: 'Nach Name suchen',
  },
  info: {
    previewVersion: 'Vorschauversion:',
    saveTime: 'Speicherzeit:',
  },
  setting: {
    restoreVersion: 'Version wiederherstellen',
    restoreCurrentVersion: 'Diese Version wiederherstellen',
    addComponent: 'Komponente hinzufügen',
    releaseHistory: 'Veröffentlichungshistorie',
    autoSave: 'Automatisch speichern',
    latestRelease: 'Zuletzt veröffentlicht',
    copyParam: 'Parameter kopieren',
    debug: 'Debuggen',
    exit: 'Direkt beenden',
    exitSave: 'Speichern und beenden',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen dürfen nur vom rechten Anker ausgehen',
    notRecyclable: 'Zyklische Verbindungen nicht erlaubt',
    onlyLeft: 'Es ist nur die Verbindung mit dem linken Anker erlaubt',
    applicationNodeError: 'Diese Anwendung ist nicht verfügbar',
    toolNodeError: 'Dieses Tool ist nicht verfügbar',
    repeatedNodeError: 'Knotenname ist bereits vorhanden!',
    cannotCopy: 'Kann nicht kopiert werden',
    copyError: 'Knoten kopiert',
    paramErrorMessage: 'Parameter existiert bereits: ',
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Jetzt speichern und beenden?',
  },
  delete: {
    confirmTitle: 'Diesen Knoten wirklich löschen?',
    deleteMessage: 'Knoten darf nicht gelöscht werden',
  },
  control: {
    zoomOut: 'Verkleinern',
    zoomIn: 'Vergrößern',
    fitView: 'Ansicht anpassen',
    retract: 'Alle Knoten einklappen',
    extend: 'Alle Knoten ausklappen',
    beautify: 'Mit einem Klick verschönern',
  },
  variable: {
    global: 'Globale Variablen',
    chat: 'Sitzungsvariablen',
    Referencing: 'Variablenreferenz',
    ReferencingRequired: 'Variablenreferenz ist erforderlich',
    ReferencingError: 'Fehler bei der Variablenreferenz',
    NoReferencing: 'Nicht existente Variablenreferenz',
    placeholder: 'Bitte Variable auswählen',
    inputPlaceholder: 'Bitte Variable eingeben',
    loop: 'Schleifenvariable',
  },
  condition: {
    title: 'Ausführungsbedingungen',
    front: 'Vorbedingung',
    AND: 'Alle',
    OR: 'Mindestens eine',
    text: 'Nach Ausführung des verbundenen Knotens diesen Knoten ausführen',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Es darf nur einen Startknoten geben',
    baseNodeRequired: 'Knoten „Grundinformationen“ ist erforderlich',
    baseNodeOnly: 'Es darf nur einen Knoten „Grundinformationen“ geben',
    notInWorkFlowNode: 'Knoten befindet sich nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der',
    needConnect2: '-Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Bei unendlicher Schleife muss ein Break-Knoten vorhanden sein',
  },
  nodes: {
    classify: {
      aiCapability: 'KI-Fähigkeiten',
      businessLogic: 'Geschäftslogik',
      other: 'Sonstiges',
      dataProcessing: 'Datenverarbeitung',
    },
    startNode: {
      label: 'Start',
      question: 'Nutzerfrage',
      currentTime: 'Aktuelle Zeit',
    },
    baseNode: {
      label: 'Grundinformationen',
      appName: {
        label: 'Anwendungsname',
      },
      appDescription: {
        label: 'Anwendungsbeschreibung',
      },
      fileUpload: {
        label: 'Datei-Upload',
        tooltip: 'Wenn aktiviert, wird auf der Q&A-Seite eine Schaltfläche zum Hochladen angezeigt.',
      },
      FileUploadSetting: {
        title: 'Einstellungen für Datei-Upload',
        maxFiles: 'Maximale Anzahl Dateien pro Upload',
        fileLimit: 'Maximale Dateigröße (MB) pro Datei',
        fileUploadType: {
          label: 'Typ der hochgeladenen Dateien',
          documentText: 'Erfordert den Knoten „Dokumentinhalt extrahieren“, um den Dokumentinhalt zu analysieren',
          imageText: 'Erfordert den Knoten „Visuelles Modell“, um den Bildinhalt zu analysieren',
          audioText: 'Erfordert den Knoten „Sprache zu Text“, um Audio zu transkribieren',
          videoText: 'Erfordert den Knoten „Videoverständnis“, um Videoinhalte zu analysieren',
          otherText: 'Dieser Dateityp muss eigenständig verarbeitet werden',
        },
      },
    },
    aiChatNode: {
      label: 'KI-Dialog',
      text: 'Dialog mit einem großen KI-Modell',
      answer: 'KI-Antwortinhalt',
      returnContent: {
        label: 'Rückgabedaten',
        tooltip: `Wenn deaktiviert, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Wenn der Benutzer den Ausgabewert dieses Knotens sehen soll, bitte einschalten.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Chatverlauf',
    },
    searchKnowledgeNode: {
      label: 'Wissensbasis-Suche',
      text: 'Wissensbasis verknüpfen und zum Problem passende Abschnitte finden',
      paragraph_list: 'Abschnittsliste der Suchergebnisse',
      is_hit_handling_method_list: 'Liste der Abschnitte mit Direktantwort',
      result: 'Suchergebnis',
      directly_return: 'Abschnitte, die eine Direktantwort ermöglichen',
      searchParam: 'Suchparameter',
      showKnowledge: {
        label: 'Ergebnis in „Wissensquelle“ anzeigen',
        requiredMessage: 'Bitte Parameter festlegen',
      },
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Suche',
      text: 'Dokumente anhand von Tags innerhalb des festgelegten Bereichs finden',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Tag-Filterbedingungen manuell festlegen',
      auto: 'Automatisch',
      autoTooltip: 'Dokument-Tags automatisch gemäß Suchfrage abgleichen',
      document_list: 'Dokumentenliste',
      knowledge_list: 'Wissensbasisliste',
      result: 'Suchergebnis',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: `Wert oder Variable`,
      showKnowledge: {
        label: 'Ergebnis in „Wissensquelle“ anzeigen',
        requiredMessage: 'Bitte Parameter festlegen',
      },
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragen-Optimierung',
      text: 'Optimiert die aktuelle Frage anhand des Chatverlaufs, um Wissensabschnitte besser zu treffen',
      result: 'Ergebnis der Fragen-Optimierung',
      systemDefault: `# Rolle
Du bist ein Meister der Fragen-Optimierung. Du kannst auf Basis des Kontexts die Nutzerintention präzise erfassen und die gestellte Frage verbessern.

## Fähigkeiten
### Fähigkeit 1: Frage optimieren
2. Empfange die vom Nutzer eingegebene Frage.
3. Analysiere die Bedeutung der Frage sorgfältig anhand des Kontexts.
4. Gib die optimierte Frage aus.

## Einschränkungen:
- Gib nur die optimierte Frage zurück, ohne zusätzliche Erklärungen.
- Stelle sicher, dass die optimierte Frage die ursprüngliche Intention korrekt widerspiegelt und den Sinn nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingungsprüfer',
      text: 'Führt je nach Bedingung verschiedene Knoten aus',
      branch_name: 'Name des Zweigs',
      conditions: {
        label: 'Bedingungen',
        info: 'Erfüllt die folgenden',
        requiredMessage: 'Bitte Bedingungen auswählen',
      },
      valueMessage: 'Bitte Wert eingeben',
      addCondition: 'Bedingung hinzufügen',
      addBranch: 'Zweig hinzufügen',
    },
    replyNode: {
      label: 'Vorgegebene Antwort',
      text: 'Vorgegebenen Inhalt ausgeben; referenzierte Variablen werden als Zeichenkette ausgegeben',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrkanal-Recall',
      text: 'Mit einem Re-Ranking-Modell Ergebnisse mehrerer Wissensbasen erneut abrufen',
      result_list: 'Liste der Re-Ranking-Ergebnisse',
      result: 'Re-Ranking-Ergebnis',
      rerankerContent: {
        label: 'Re-Ranking-Inhalt',
        requiredMessage: 'Bitte Re-Ranking-Inhalt auswählen',
      },
      higher: 'Größer als',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Anzahl zitierter Zeichen',
      reranker_model: {
        label: 'Re-Ranking-Modell',
        placeholder: 'Bitte Re-Ranking-Modell auswählen',
      },
    },
    formNode: {
      label: 'Formularerfassung',
      text: 'Während der Q&A sammelt Nutzerdaten; der weitere Ablauf kann anhand der Formulardaten gesteuert werden',
      form_content_format1: 'Hallo, bitte fülle zuerst das folgende Formular aus:',
      form_content_format2: 'Klicke nach dem Ausfüllen auf „Absenden“, um zu übermitteln.',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Ausgabeinhalt des Formulars',
        requiredMessage: 'Bitte Formular-Ausgabeinhalt angeben',
        tooltip: 'Lege den vom Knoten ausgegebenen Inhalt fest; { form } ist der Platzhalter für das Formular.',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formularkonfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalt extrahieren',
      text: 'Inhalte aus dem Dokument extrahieren',
      content: 'Dokumentinhalt',
    },
    imageUnderstandNode: {
      label: 'Bildverständnis',
      text: 'Objekte, Szenen usw. im Bild erkennen und Nutzerfragen beantworten',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Visuelles Modell',
        requiredMessage: 'Bitte visuelles Modell auswählen',
      },
      image: {
        label: 'Bild auswählen',
        requiredMessage: 'Bitte Bild auswählen',
      },
    },
    variableAggregationNode: {
      label: 'Variablenaggregation',
      text: 'Variablen je Gruppe nach Aggregationsstrategie zusammenführen',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Gibt pro Gruppe den ersten nicht-leeren Wert zurück',
      placeholder1: 'Gibt die Menge der Variablen jeder Gruppe zurück',
      group: {
        noneError: 'Name darf nicht leer sein',
        dupError: 'Name darf nicht doppelt sein',
      },
      addGroup: 'Gruppe hinzufügen',
      editGroup: 'Gruppe bearbeiten',
    },
    variableAssignNode: {
      label: 'Variablenzuweisung',
      text: 'Wert globaler Variablen aktualisieren',
      assign: 'Zuweisen',
    },
    mcpNode: {
      label: 'MCP-Aufruf',
      text: 'Tools aus einem MCP-Dienst per SSE/Streamable HTTP ausführen',
      getToolsSuccess: 'Tools erfolgreich abgerufen',
      getTool: 'Tool abrufen',
      toolParam: 'Tool-Parameter',
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte Tool auswählen',
      configLabel: 'MCP Server Config (nur SSE/Streamable HTTP unterstützt)',
      reference: 'MCP referenzieren',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bild anhand des bereitgestellten Texts generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Prompt (positiv)',
        tooltip: 'Positiver Prompt: beschreibt gewünschte Elemente und visuelle Eigenschaften des Bildes',
      },
      negative_prompt: {
        label: 'Prompt (negativ)',
        tooltip: 'Negativer Prompt: beschreibt Inhalte, die nicht im Bild erscheinen sollen, um das Ergebnis einzugrenzen.',
        placeholder: 'Beschreibe unerwünschte Bildinhalte, z. B.: Farben, blutige Inhalte',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video anhand des bereitgestellten Texts generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (positiv)',
        tooltip: 'Positiver Prompt: beschreibt gewünschte Elemente und visuelle Eigenschaften des Videos',
      },
      negative_prompt: {
        label: 'Prompt (negativ)',
        tooltip: 'Negativer Prompt: beschreibt Inhalte, die nicht im Video erscheinen sollen, um das Ergebnis einzugrenzen.',
        placeholder: 'Beschreibe unerwünschte Videoinhalte, z. B.: Farben, blutige Inhalte',
      },
    },
    videoUnderstandNode: {
      label: 'Videoverständnis',
      text: 'Objekte, Szenen usw. im Video erkennen und Nutzerfragen beantworten',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Visuelles Modell',
        requiredMessage: 'Bitte visuelles Modell auswählen',
      },
      image: {
        label: 'Video auswählen',
        requiredMessage: 'Bitte Video auswählen',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Video anhand eines bereitgestellten Bildes generieren',
      answer: 'KI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (positiv)',
        tooltip: 'Positiver Prompt: beschreibt gewünschte Elemente und visuelle Eigenschaften des Videos',
      },
      negative_prompt: {
        label: 'Prompt (negativ)',
        tooltip: 'Negativer Prompt: beschreibt Inhalte, die nicht im Video erscheinen sollen, um das Ergebnis einzugrenzen.',
        placeholder: 'Beschreibe unerwünschte Videoinhalte, z. B.: Farben, blutige Inhalte',
      },
      first_frame: {
        label: 'Erstes Frame',
        requiredMessage: 'Bitte erstes Frame auswählen',
      },
      last_frame: {
        label: 'Letztes Frame',
        requiredMessage: 'Bitte letztes Frame auswählen',
      },
    },
    speechToTextNode: {
      label: 'Sprache zu Text',
      text: 'Audio mithilfe eines Spracherkennungsmodells in Text umwandeln',
      stt_model: {
        label: 'Spracherkennungsmodell',
      },
      audio: {
        label: 'Sprachdatei auswählen',
        placeholder: 'Bitte Sprachdatei auswählen',
      },
    },
    textToSpeechNode: {
      label: 'Text zu Sprache',
      text: 'Text mithilfe eines Sprachsynthese-Modells in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthese-Modell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Durch Ausführen benutzerdefinierter Skripte Daten verarbeiten',
    },
    intentNode: {
      label: 'Intent-Erkennung',
      text: 'Nutzerfrage mit vordefinierten Intent-Kategorien abgleichen',
      other: 'Sonstiges',
      error2: 'Intent doppelt',
      placeholder: 'Bitte Kategorie auswählen',
      classify: {
        label: 'Intent-Klassifikation',
        placeholder: 'Bitte eingeben',
      },
      input: {
        label: 'Eingabe',
      },
    },
    applicationNode: {
      label: 'Anwendungsknoten',
    },
    loopNode: {
      label: 'Schleifenknoten',
      text: 'Durch Festlegen von Anzahl und Logik eine Reihe von Aufgaben wiederholt ausführen',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Schleife mit fester Anzahl',
        infiniteLoop: 'Unendliche Schleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Schleifenanzahl ist erforderlich',
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
      label: 'Schleifenrumpf',
      text: 'Schleifenrumpf',
    },
    loopContinueNode: {
      label: 'Continue',
      text: 'Beendet den aktuellen Durchlauf und fährt mit dem nächsten fort',
      isContinue: 'Continue',
    },
    loopBreakNode: {
      label: 'Break',
      text: 'Beendet die aktuelle Schleife und verlässt den Schleifenrumpf',
      isBreak: 'Break',
    },
    variableSplittingNode: {
      label: 'Variablenaufteilung',
      text: 'Eingehende JSON-Variablen mithilfe von JSONPath-Ausdrücken parsen und aufteilen',
      splitVariables: 'Variablen aufteilen',
      inputVariables: 'Eingabevariablen',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte aufzuteilende Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip: 'Bitte JSONPath-Ausdruck zur Aufteilung verwenden, z. B.: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Parameterextraktion',
      text: 'Strukturierte Parameter mit einem KI-Modell extrahieren',
      extractParameters: {
        label: 'Parameter extrahieren',
        variableListPlaceholder: 'Bitte zu extrahierende Parameter hinzufügen',
        parameterType: 'Parametertyp',
      },
    },
  },
  compare: {
    is_null: 'ist leer',
    is_not_null: 'ist nicht leer',
    contain: 'enthält',
    not_contain: 'enthält nicht',
    eq: 'gleich',
    ge: 'größer/gleich',
    gt: 'größer als',
    le: 'kleiner/gleich',
    lt: 'kleiner als',
    len_eq: 'Länge gleich',
    len_ge: 'Länge größer/gleich',
    len_gt: 'Länge größer als',
    len_le: 'Länge kleiner/gleich',
    len_lt: 'Länge kleiner als',
    is_true: 'ist wahr',
    is_not_true: 'ist nicht wahr',
  },
  SystemPromptPlaceholder: 'System-Prompt; du kannst Variablen des Systems referenzieren, z. B.',
  UserPromptPlaceholder: 'Benutzer-Prompt; du kannst Variablen des Systems referenzieren, z. B.',
}
