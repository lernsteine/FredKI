export default {
  node: 'Knoten',
  nodeName: 'Knotenname',
  baseComponent: 'Basis',
  nodeSetting: 'Knoten-Einstellungen',
  workflow: 'Workflow',
  searchBar: {
    placeholder: 'Nach Name suchen',
  },
  info: {
    previewVersion: 'Vorschauversion:',
    saveTime: 'Zuletzt gespeichert:',
  },
  setting: {
    restoreVersion: 'Vorherige Version wiederherstellen"',
    restoreCurrentVersion: 'Auf diese Version wiederherstellen',
    addComponent: 'Hinzufügen',
    releaseHistory: 'Veröffentlichungshistorie',
    autoSave: 'Automatisches Speichern',
    latestRelease: 'Neueste Veröffentlichung',
    copyParam: 'Parameter kopieren',
    debug: 'Ausführen',
    exit: 'Beenden',
    exitSave: 'Speichern & beenden',
  },
  tip: {
    noData: 'Keine passenden Ergebnisse gefunden',
    nameMessage: 'Name darf nicht leer sein!',
    onlyRight: 'Verbindungen können nur vom rechten Anker ausgehen',
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
    confirmTitle: 'Diesen Knoten wirklich löschen?',
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
    front: 'Voraussetzung',
    AND: 'Alle',
    OR: 'Beliebige',
    text: 'Nach Ausführung des verbundenen Knotens den aktuellen Knoten ausführen',
  },
  validate: {
    startNodeRequired: 'Startknoten ist erforderlich',
    startNodeOnly: 'Es ist nur ein Startknoten erlaubt',
    baseNodeRequired: 'Basisknoten ist erforderlich',
    baseNodeOnly: 'Es ist nur ein Basisknoten erlaubt',
    notInWorkFlowNode: 'Knoten nicht im Workflow',
    noNextNode: 'Nächster Knoten existiert nicht',
    nodeUnavailable: 'Knoten nicht verfügbar',
    needConnect1: 'Der Zweig des Knotens muss verbunden werden',
    cannotEndNode: 'Dieser Knoten kann nicht als Endknoten verwendet werden',
    loopNodeBreakNodeRequired: 'Drahtlose Schleife muss einen Break-Knoten besitzen',
  },
  nodes: {
    classify: {
      aiCapability: 'AI-Fähigkeit',
      businessLogic: 'Business-Logik',
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
        tooltip: 'Wenn aktiviert, erscheint auf der Q&A-Seite eine Schaltfläche zum Datei-Upload.',
      },
      FileUploadSetting: {
        title: 'Datei-Upload-Einstellungen',
        maxFiles: 'Maximale Anzahl an Dateien pro Upload',
        fileLimit: 'Maximale Größe pro Datei (MB)',
        fileUploadType: {
          label: 'Für den Upload zulässige Dateitypen',
          documentText: 'Benötigt einen „Dokumentinhalt extrahieren“-Knoten zum Parsen von Dokumentinhalten',
          imageText: 'Benötigt einen „Bildverständnis“-Knoten zum Analysieren von Bildinhalten',
          videoText: 'Benötigt einen „Videounterstanding“-Knoten zum Analysieren von Videoinhalten',
          audioText: 'Benötigt einen „Speech-to-Text“-Knoten zum Analysieren von Audioinhalten',
        },
      },
    },
    aiChatNode: {
      label: 'AI-Chat',
      text: 'Mit einem AI-Modell chatten',
      answer: 'AI-Inhalt',
      returnContent: {
        label: 'Ausgabeinhalt',
        tooltip: `Wenn ausgeschaltet, wird der Inhalt dieses Knotens nicht an den Benutzer ausgegeben.
                  Soll der Benutzer die Ausgabe dieses Knotens sehen, bitte den Schalter einschalten.`,
      },
      defaultPrompt: 'Bekannte Informationen',
      think: 'Denkprozess',
      historyMessage: 'Historische Chat-Aufzeichnungen',
    },
    searchKnowledgeNode: {
      label: 'Wissensrecherche',
      text: 'Ermöglicht das Abfragen von Textinhalten aus dem Wissen passend zur Benutzerfrage',
      paragraph_list: 'Liste der gefundenen Abschnitte',
      is_hit_handling_method_list: 'Liste der Abschnitte mit Direktantwort-Kriterium',
      result: 'Suchergebnis',
      directly_return: 'Inhalt der Abschnitte mit Direktantwort-Kriterium',
      searchParam: 'Suchparameter',
      searchQuestion: {
        label: 'Frage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    searchDocumentNode: {
      label: 'Dokument-Tag-Suche',
      text: 'Suche nach Dokumenten anhand ihrer Labels im angegebenen Suchbereich',
      selectKnowledge: 'Suchbereich',
      searchSetting: 'Sucheinstellungen',
      custom: 'Manuell',
      customTooltip: 'Tag-Filterbedingungen manuell festlegen',
      auto: 'Automatisch',
      autoTooltip: 'Tag-Filterbedingungen automatisch anhand der Suchfrage setzen',
      document_list: 'Dokumentenliste',
      knowledge_list: 'Wissensbasis-Liste',
      result: 'Suchergebnisse',
      searchParam: 'Suchparameter',
      select_variable: 'Variable auswählen',
      valueMessage: `Wert oder Name `,
      showKnowledge: {
        label: 'Ergebnisse in der Wissensquelle anzeigen',
        requiredMessage: 'Bitte Parameter festlegen',
      },
      searchQuestion: {
        label: 'Suchfrage',
        placeholder: 'Bitte Suchfrage auswählen',
        requiredMessage: 'Bitte Suchfrage auswählen',
      },
    },
    questionNode: {
      label: 'Fragenoptimierung',
      text: 'Optimiert die aktuelle Frage anhand des Chatverlaufs, um besser zu Wissensabschnitten zu passen',
      result: 'Ergebnis der optimierten Frage',
      systemDefault: `#Rolle
Du bist ein Meister der Problemoptimierung und leitest aus dem Kontext präzise die Nutzerintention ab, um die vom Nutzer gestellten Fragen zu optimieren.

##Fähigkeiten
###Fähigkeit 1: Probleme optimieren
2. Nutze die vom Nutzer eingegebene Frage.
3. Analysiere die Bedeutung der Frage sorgfältig anhand des Kontexts.
4. Gib optimierte Fragen aus.

##Einschränkungen:
- Gib nur die optimierte Frage zurück – ohne zusätzliche Erklärungen oder Hinweise.
- Stelle sicher, dass die optimierte Frage die ursprüngliche Absicht korrekt widerspiegelt und diese nicht verändert.`,
    },
    conditionNode: {
      label: 'Bedingter Zweig',
      text: 'Unterschiedliche Knoten je nach Bedingungen auslösen',
      branch_name: 'Zweigname',
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
      label: 'Vorgegebene Antwort',
      text: 'Antwortinhalt festlegen; referenzierte Variablen werden als Zeichenketten ausgegeben',
      replyContent: 'Antwortinhalt',
    },
    rerankerNode: {
      label: 'Mehrpfad-Recall',
      text: 'Re-Ranking-Modell zur Verfeinerung der Ergebnisse aus mehreren Wissensquellen verwenden',
      result_list: 'Liste der neu gerankten Ergebnisse',
      result: 'Re-Ranking-Ergebnis',
      rerankerContent: {
        label: 'Re-Ranking-Inhalt',
        requiredMessage: 'Bitte Re-Ranking-Inhalt auswählen',
      },
      higher: 'Höher',
      ScoreTooltip: 'Je höher der Score, desto stärker die Relevanz.',
      max_paragraph_char_number: 'Maximale Zeichen',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Bitte Rerank auswählen',
      },
    },
    formNode: {
      label: 'Formulareingabe',
      text: 'Nutzereingaben während des Q&A erfassen und im weiteren Ablauf verwenden',
      form_content_format1: 'Hallo, bitte fülle das folgende Formular aus:',
      form_content_format2: 'Klicke nach dem Ausfüllen auf [Absenden].',
      form_data: 'Gesamter Formularinhalt',
      formContent: {
        label: 'Ausgabeinhalt des Formulars',
        requiredMessage:
          'Bitte den Ausgabeinhalt dieses Knotens festlegen; { form } ist ein Platzhalter für das Formular.',
        tooltip: 'Definiere den Ausgabeinhalt dieses Knotens. { form } ist ein Platzhalter für das Formular.',
      },
      formAllContent: 'Gesamter Formularinhalt',
      formSetting: 'Formularkonfiguration',
    },
    documentExtractNode: {
      label: 'Dokumentinhalt extrahieren',
      text: 'Inhalte aus Dokumenten extrahieren',
      content: 'Dokumentinhalt',
    },
    imageUnderstandNode: {
      label: 'Bildverständnis',
      text: 'Bilder analysieren, Objekte/Szenen erkennen und Antworten liefern',
      answer: 'AI-Inhalt',
      model: {
        label: 'Vision-Modell',
        requiredMessage: 'Bitte Vision-Modell auswählen',
      },
      image: {
        label: 'Bild auswählen',
        requiredMessage: 'Bitte ein Bild auswählen',
      },
    },
    variableAssignNode: {
      label: 'Variable zuweisen',
      text: 'Wert der globalen Variable aktualisieren',
      assign: 'Wert setzen',
    },
    variableAggregationNode: {
      label: 'Variablenaggregation',
      text: 'Variablen jeder Gruppe gemäß Aggregationsstrategie zusammenführen',
      Strategy: 'Aggregationsstrategie',
      placeholder: 'Ersten Nicht-Null-Wert jeder Gruppe zurückgeben',
      placeholder1: 'Menge der Variablen jeder Gruppe zurückgeben',
      group: {
        noneError: 'Name darf nicht leer sein',
        dupError: 'Name darf nicht doppelt sein',
      },
      addGroup: 'Gruppe hinzufügen',
      editGroup: 'Gruppe bearbeiten',
    },
    mcpNode: {
      label: 'MCP-Knoten',
      text: 'Externe MCP-Dienste zum Verarbeiten von Daten aufrufen',
      getToolsSuccess: 'Tools erfolgreich abgerufen',
      getTool: 'Tools abrufen',
      toolParam: 'Tool-Parameter',
      mcpServerTip: 'Bitte MCP-Serverkonfiguration im JSON-Format eingeben',
      mcpToolTip: 'Bitte Tool auswählen',
      configLabel: 'MCP-Serverkonfig (nur SSE/streambare HTTP-Aufrufe werden unterstützt)',
      reference: 'MCP-Referenz',
    },
    imageGenerateNode: {
      label: 'Bildgenerierung',
      text: 'Bilder basierend auf Textinhalt generieren',
      answer: 'AI-Inhalt',
      model: {
        label: 'Bildgenerierungsmodell',
        requiredMessage: 'Bitte Bildgenerierungsmodell auswählen',
      },
      prompt: {
        label: 'Positiver Prompt',
        tooltip: 'Beschreibe Elemente und visuelle Eigenschaften, die das Bild enthalten soll',
      },
      negative_prompt: {
        label: 'Negativer Prompt',
        tooltip: 'Beschreibe Elemente, die ausgeschlossen werden sollen',
        placeholder:
          'Bitte beschreibe Inhalte, die nicht generiert werden sollen, z. B. Farbe, blutige Inhalte',
      },
    },
    textToVideoGenerate: {
      label: 'Text-zu-Video',
      text: 'Video basierend auf Textinhalt generieren',
      answer: 'AI-Antwortinhalt',
      model: {
        label: 'Text-zu-Video-Modell',
        requiredMessage: 'Bitte Text-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt – beschreibt erwartete Elemente und visuelle Eigenschaften des Videos',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt – beschreibt Inhalte, die im Video nicht erscheinen sollen und die Generierung einschränken',
        placeholder:
          'Bitte unerwünschte Videoinhalte beschreiben, z. B.: Farben, blutige Inhalte',
      },
    },
    imageToVideoGenerate: {
      label: 'Bild-zu-Video',
      text: 'Video basierend auf Bildern generieren',
      answer: 'AI-Antwortinhalt',
      model: {
        label: 'Bild-zu-Video-Modell',
        requiredMessage: 'Bitte Bild-zu-Video-Modell auswählen',
      },
      prompt: {
        label: 'Prompt (Positiv)',
        tooltip:
          'Positiver Prompt – beschreibt erwartete Elemente und visuelle Eigenschaften des Videos',
      },
      negative_prompt: {
        label: 'Prompt (Negativ)',
        tooltip:
          'Negativer Prompt – beschreibt Inhalte, die im Video nicht erscheinen sollen und die Generierung einschränken',
        placeholder:
          'Bitte unerwünschte Videoinhalte beschreiben, z. B.: Farben, blutige Inhalte',
      },
      first_frame: {
        label: 'Erstes Frame-Bild',
        requiredMessage: 'Bitte das erste Frame-Bild auswählen',
      },
      last_frame: {
        label: 'Letztes Frame-Bild',
        requiredMessage: 'Bitte das letzte Frame-Bild auswählen',
      },
    },
    speechToTextNode: {
      label: 'Speech2Text',
      text: 'Audio per Spracherkennungsmodell in Text umwandeln',
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
      text: 'Text per Sprachsynthesemodell in Audio umwandeln',
      tts_model: {
        label: 'Sprachsynthesemodell',
      },
      content: {
        label: 'Textinhalt auswählen',
      },
    },
    toolNode: {
      label: 'Benutzerdefiniertes Tool',
      text: 'Eigene Skripte ausführen, um Daten zu verarbeiten',
    },
    intentNode: {
      label: 'Intent-Knoten',
      text: 'Benutzerfragen mit benutzerdefinierten Intent-Klassen abgleichen',
      other: 'Andere',
      error2: 'Intent doppelt vorhanden',
      placeholder: 'Bitte eine Klassifikationsoption wählen',
      classify: {
        label: 'Intent-Klassifizierung',
        placeholder: 'Bitte eingeben',
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
      text: 'Eine Aufgabenfolge mit Anzahl und Logik wiederholen',
      loopType: {
        label: 'Schleifentyp',
        requiredMessage: 'Bitte Schleifentyp auswählen',
        arrayLoop: 'Array-Schleife',
        numberLoop: 'Anzahlgesteuerte Schleife',
        infiniteLoop: 'Endlosschleife',
      },
      loopNumber: {
        label: 'Schleifenanzahl',
        requiredMessage: 'Bitte Anzahl der Schleifen eingeben',
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
      label: 'Schleifenrumpf',
      text: 'Schleifenrumpf',
    },
    loopContinueNode: {
      label: 'Fortsetzen',
      text: 'Beendet die aktuelle Iteration und fährt mit der nächsten fort.',
      isContinue: 'Fortsetzen',
    },
    loopBreakNode: {
      label: 'Abbrechen',
      text: 'Beendet die aktuelle Schleife und verlässt den Schleifenrumpf',
      isBreak: 'Abbrechen',
    },
    variableSplittingNode: {
      label: 'Variablensplitting',
      text: 'Eingangsvariable im JSON-Format per JSON-Path-Ausdrücken parsen und aufteilen',
      result: 'Ergebnis',
      splitVariables: 'Variablen aufteilen',
      inputVariables: 'Eingangsvariable',
      addVariables: 'Variablen hinzufügen',
      editVariables: 'Variablen bearbeiten',
      variableListPlaceholder: 'Bitte aufzuteilende Variablen hinzufügen',
      expression: {
        label: 'Ausdruck',
        placeholder: 'Bitte Ausdruck eingeben',
        tooltip: 'Nutze JSON-Path-Ausdrücke zum Aufteilen, z. B.: $.store.book',
      },
    },
    parameterExtractionNode: {
      label: 'Parameterextraktion',
      text: 'Strukturierte Parameter mit AI-Modellen extrahieren',
      extractParameters: {
        label: 'Parameter extrahieren',
        variableListPlaceholder: 'Bitte Extraktionsparameter hinzufügen',
        parameterType: 'Parametertyp',
      },
    },
  },
  compare: {
    is_null: 'Ist leer',
    is_not_null: 'Ist nicht leer',
    contain: 'Enthält',
    not_contain: 'Enthält nicht',
    eq: 'Gleich',
    ge: 'Größer/gleich',
    gt: 'Größer als',
    le: 'Kleiner/gleich',
    lt: 'Kleiner als',
    len_eq: 'Länge gleich',
    len_ge: 'Länge größer/gleich',
    len_gt: 'Länge größer als',
    len_le: 'Länge kleiner/gleich',
    len_lt: 'Länge kleiner als',
  },
  SystemPromptPlaceholder: 'System Prompt – Systemvariablen können referenziert werden, z. B.',
  UserPromptPlaceholder: 'User Prompt – Systemvariablen können referenziert werden, z. B.',
}
