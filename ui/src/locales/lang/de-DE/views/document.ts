export default {
  uploadDocument: 'Dokument hochladen',
  importDocument: 'Dokument importieren',
  syncDocument: 'Dokument synchronisieren',
  items: 'Elemente',
  migrateDocument: 'Migration nach',
  setting: {
    migration: 'Verschieben',
    cancelGenerateQuestion: 'Fragen generieren abbrechen',
    cancelVectorization: 'Vektorisierung abbrechen',
    cancelGenerate: 'Generierung abbrechen',
    export: 'Exportieren nach',
    download: 'Herunterladen',
    replace: 'Ersetzen',
  },

  tip: {
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Beim Verlassen bestätigen?',
    cancelSuccess: 'Erfolgreich',
    sendMessage: 'Erfolgreich',
    vectorizationSuccess: 'Erfolgreich',
    nameMessage: 'Dokumentname darf nicht leer sein!',
    importMessage: 'Erfolgreich',
    migrationSuccess: 'Erfolgreich',
    replaceSuccess: 'Erfolgreich',
    fileLimitCountTip1: 'Maximale Anzahl pro Upload',
    fileLimitCountTip2: 'Dateien',
    fileLimitSizeTip1: 'Jede Datei darf nicht größer sein als',
    toImportDocConfirm:
      'Der Workflow der aktuellen Wissensbasis ist nicht veröffentlicht, Dokumente können nicht importiert werden. Bitte veröffentlichen Sie zuerst den Workflow.',
  },
  upload: {
    selectFile: 'Datei auswählen',
    selectFiles: 'Ordner auswählen',
    uploadMessage: 'Dateien hierher ziehen und ablegen oder',
    formats: 'Unterstützte Formate:',
    requiredMessage: 'Bitte laden Sie eine Datei hoch',
    errorMessage1: 'Die Dateigröße überschreitet 100 MB',
    errorMessage2: 'Nicht unterstütztes Dateiformat',
    errorMessage3: 'Datei darf nicht leer sein',
    errorMessage4: 'Es können maximal 50 Dateien gleichzeitig hochgeladen werden',
    template: 'Vorlage',
    download: 'Herunterladen',
  },

  fileType: {
    txt: {
      label: 'Textdatei',
      tip1: '1. Es wird empfohlen, vor dem Hochladen die Segmentierungsmarker in der Datei zu standardisieren.',
      tip2: '2. Es können maximal 50 Dateien gleichzeitig hochgeladen werden, jede Datei nicht größer als 100 MB.',
    },
    table: {
      label: 'Tabelle',
      tip1: '1. Klicken Sie, um die entsprechende Vorlage herunterzuladen und die Informationen auszufüllen:',
      tip2: '2. Die erste Zeile muss Spaltenüberschriften sein, und die Spaltenüberschriften müssen sinnvolle Begriffe sein. Jeder Datensatz in der Tabelle wird als ein Segment behandelt.',
      tip3: '3. Jedes Blatt in der hochgeladenen Tabellendatei wird als ein Dokument behandelt, mit dem Blattnamen als Dokumentnamen.',
      tip4: '4. Es können maximal 50 Dateien gleichzeitig hochgeladen werden, jede Datei nicht größer als 100 MB.',
    },
    QA: {
      label: 'Frage-Antwort-Paare',
      tip1: '1. Klicken Sie, um die entsprechende Vorlage herunterzuladen und die Informationen auszufüllen:',
      tip2: '2. Jedes Blatt in der hochgeladenen Tabellendatei wird als ein Dokument behandelt, mit dem Blattnamen als Dokumentnamen.',
      tip3: '3. Es können maximal 50 Dateien gleichzeitig hochgeladen werden, jede Datei nicht größer als 100 MB.',
    },
  },
  setRules: {
    title: {
      setting: 'Segmentierungsregeln festlegen',
      preview: 'Vorschau',
    },
    intelligent: {
      label: 'Automatische Segmentierung (empfohlen)',
      text: 'Falls Sie unsicher sind, wie Segmentierungsregeln gesetzt werden sollen, wird die automatische Segmentierung empfohlen.',
    },
    advanced: {
      label: 'Erweiterte Segmentierung',
      text: 'Benutzer können Trennzeichen, Segmentlänge und Bereinigungsregeln nach Dokumentenstandards anpassen.',
    },
    patterns: {
      label: 'Segment-Trennzeichen',
      tooltip:
        'Rekursiv in der ausgewählten Reihenfolge nach den Symbolen teilen. Wenn das Teilergebnis die Segmentlänge überschreitet, wird es auf die Segmentlänge gekürzt.',
      placeholder: 'Bitte auswählen',
    },
    limit: {
      label: 'Segmentlänge',
    },
    with_filter: {
      label: 'Automatische Bereinigung',
      text: 'Doppelte zusätzliche Symbole, Leerzeichen, leere Zeilen und Tab-Wörter entfernen.',
    },
    checkedConnect: {
      label: 'Beim Importieren von Frage-Antwort-Paaren einen Abschnitt „Zugehörige Fragen“ hinzufügen.',
    },
  },
  buttons: {
    import: 'Import starten',
    preview: 'Anwenden',
    continueImporting: 'Dokumente weiter importieren',
  },
  tag: {
    label: 'Tag-Verwaltung',
    key: 'Tag',
    value: 'Wert',
    addTag: 'Tag hinzufügen',
    setting: 'Tag-Einstellungen',
    create: 'Tag erstellen',
    createValue: 'Tag-Wert erstellen',
    edit: 'Tag bearbeiten',
    editValue: 'Tag-Wert bearbeiten',
    deleteConfirm: 'Tag löschen bestätigen: ',
    deleteTip:
      'Nach dem Löschen wird das Tag von Ressourcen entfernt, die dieses Tag verwenden. Bitte vorsichtig vorgehen!',
    requiredMessage1: 'Bitte geben Sie ein Tag ein',
    requiredMessage2: 'Bitte geben Sie einen Wert ein',
    requiredMessage3: 'Bitte geben Sie ein Tag oder einen Wert ein',
  },
  table: {
    name: 'Dokumentname',
    char_length: 'Zeichen',
    paragraph: 'Segment',
    all: 'Alle',
    updateTime: 'Aktualisierungszeit',
  },
  fileStatus: {
    label: 'Dateistatus',
    SUCCESS: 'Erfolgreich',
    FAILURE: 'Fehlgeschlagen',
    EMBEDDING: 'Indexierung',
    PENDING: 'In Warteschlange',
    GENERATE: 'Generierung',
    SYNC: 'Synchronisierung',
    finish: 'Abgeschlossen',
  },
  enableStatus: {
    label: 'Status',
    enable: 'Aktiviert',
    close: 'Deaktiviert',
  },
  sync: {
    label: 'Synchronisieren',
    confirmTitle: 'Dokument synchronisieren bestätigen?',
    confirmMessage1:
      'Bei der Synchronisierung werden vorhandene Daten gelöscht und neue Daten abgerufen. Bitte vorsichtig vorgehen.',
    confirmMessage2: 'Synchronisierung nicht möglich, bitte zuerst die Dokument-URL festlegen.',
    successMessage: 'Erfolgreich',
  },
  delete: {
    confirmTitle1: 'Stapel-Löschung von',
    confirmTitle2: 'Dokumenten bestätigen?',
    confirmMessage:
      'Segmente in den ausgewählten Dokumenten werden ebenfalls gelöscht. Bitte vorsichtig vorgehen.',
    successMessage: 'Erfolgreich',
    confirmTitle3: 'Dokument löschen bestätigen:',
    confirmMessage1: 'Unter diesem Dokument',
    confirmMessage2: 'werden alle Segmente gelöscht, bitte vorsichtig vorgehen.',
  },
  form: {
    source_url: {
      label: 'Dokument-URL',
      placeholder: 'Dokument-URL eingeben, eine pro Zeile. Falsche URL führt zu Importfehler.',
      requiredMessage: 'Bitte geben Sie eine Dokument-URL ein',
    },
    selector: {
      label: 'Selector',
      placeholder: 'Standard ist body, Sie können .classname/#idname/tagname eingeben',
    },
    hit_handling_method: {
      label: 'Treffer-Behandlung',
      tooltip: 'Bei Benutzerfragen die getroffenen Segmente gemäß der festgelegten Methode behandeln.',
    },
    similarity: {
      label: 'Ähnlichkeit höher als',
      placeholder: 'Segmentinhalt direkt zurückgeben',
      requiredMessage: 'Bitte geben Sie den Ähnlichkeitswert ein',
    },
    allow_download: {
      label: 'Herunterladen in der Wissensquellen erlauben',
    },
  },
  hitHandlingMethod: {
    optimization: 'Modell-Optimierung',
    directly_return: 'Direkt antworten',
  },
  movePosition: {
    title: 'Position verschieben',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
  },
  generateQuestion: {
    title: 'Fragen generieren',
    successMessage: 'Erfolgreich',
    tip1: 'Das {data} im Prompt ist ein Platzhalter für den segmentierten Inhalt, der beim Ausführen durch den segmentierten Inhalt ersetzt und an das KI-Modell gesendet wird;',
    tip2: 'Das KI-Modell generiert relevante Fragen basierend auf dem segmentierten Inhalt. Bitte platzieren Sie die generierten Fragen innerhalb der',
    tip3: 'Tags, und das System verknüpft automatisch die Fragen innerhalb dieser Tags;',
    tip4: 'Der Generierungseffekt hängt vom ausgewählten Modell und Prompt ab. Benutzer können anpassen, um den besten Effekt zu erzielen.',
    prompt1:
      'Inhalt: {data}\n \n Bitte fassen Sie den obigen Text zusammen und generieren Sie 5 Fragen basierend auf der Zusammenfassung. \nAntwortanforderungen: \n - Bitte geben Sie nur Fragen aus; \n - Bitte platzieren Sie jede Frage in',
    prompt2: 'Tag.',
  },
  feishu: {
    selectDocument: 'Dokument auswählen',
    tip1: 'Nur Dokumente und Tabellen werden unterstützt. Dokumente werden basierend auf Überschriften segmentiert, Tabellen werden in Markdown-Format umgewandelt und dann segmentiert.',
    tip2: 'Vor dem Importieren des Dokuments wird empfohlen, die Dokument-Segmentierungsmarker zu standardisieren.',
  },
}
