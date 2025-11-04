export default {
  uploadDocument: 'Dokument hochladen',
  importDocument: 'Dokument importieren',
  syncDocument: 'Dokument synchronisieren',
  items: 'Einträge',
  migrateDocument: 'Verschieben nach',
  searchBar: {
    placeholder: 'Nach Dokumentname suchen',
  },
  setting: {
    migration: 'Verschieben',
    cancelGenerateQuestion: 'Fragengenerierung abbrechen',
    cancelVectorization: 'Vektorisierung abbrechen',
    cancelGenerate: 'Generierung abbrechen',
    export: 'Exportieren nach',
    download: 'Herunterladen',
    replace: 'Ersetzen',
  },

  tip: {
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Wirklich beenden?',
    cancelSuccess: 'Erfolgreich',
    sendMessage: 'Erfolgreich',
    vectorizationSuccess: 'Erfolgreich',
    nameMessage: 'Dokumentname darf nicht leer sein!',
    importMessage: 'Erfolgreich',
    migrationSuccess: 'Erfolgreich',
    fileLimitCountTip1: 'Maximal pro Upload',
    fileLimitCountTip2: 'Dateien',
    fileLimitSizeTip1: 'jede Datei darf nicht größer sein als',
  },
  upload: {
    selectFile: 'Datei auswählen',
    selectFiles: 'Ordner auswählen',
    uploadMessage: 'Dateien hierher ziehen, um sie hochzuladen, oder',
    formats: 'Unterstützte Formate:',
    requiredMessage: 'Bitte eine Datei hochladen',
    errorMessage1: 'Die Dateigröße überschreitet 100 MB',
    errorMessage2: 'Nicht unterstütztes Dateiformat',
    errorMessage3: 'Datei darf nicht leer sein',
    errorMessage4: 'Es können maximal 50 Dateien auf einmal hochgeladen werden',
    template: 'Vorlage',
    download: 'Herunterladen',
  },

  fileType: {
    txt: {
      label: 'Textdatei',
      tip1: '1. Es wird empfohlen, die Segmentmarkierungen im Dokument vor dem Upload zu standardisieren.',
      tip2: '2. Es können bis zu 50 Dateien auf einmal hochgeladen werden; jede Datei max. 100 MB.',
    },
    table: {
      label: 'Tabelle',
      tip1: '1. Klicke zum Herunterladen der entsprechenden Vorlage und fülle die Informationen aus:',
      tip2: '2. Die erste Zeile muss Spaltenüberschriften enthalten, die sinnvoll benannt sind. Jeder Tabellendatensatz gilt als Segment.',
      tip3: '3. Jedes Blatt der hochgeladenen Tabelle wird als Dokument behandelt; der Blattname wird als Dokumentname verwendet.',
      tip4: '4. Es können bis zu 50 Dateien auf einmal hochgeladen werden; jede Datei max. 100 MB.',
    },
    QA: {
      label: 'QA-Paare',
      tip1: '1. Klicke zum Herunterladen der entsprechenden Vorlage und fülle die Informationen aus:',
      tip2: '2. Jedes Blatt der hochgeladenen Tabelle wird als Dokument behandelt; der Blattname wird als Dokumentname verwendet.',
      tip3: '3. Es können bis zu 50 Dateien auf einmal hochgeladen werden; jede Datei max. 100 MB.',
    },
  },
  setRules: {
    title: {
      setting: 'Segmentierungsregeln festlegen',
      preview: 'Vorschau',
    },
    intelligent: {
      label: 'Automatische Segmentierung (empfohlen)',
      text: 'Wenn du unsicher bist, wie die Regeln gesetzt werden sollen, nutze die automatische Segmentierung.',
    },
    advanced: {
      label: 'Erweiterte Segmentierung',
      text: 'Benutzer können Trennzeichen, Segmentlänge und Bereinigungsregeln entsprechend den Dokumentstandards anpassen.',
    },
    patterns: {
      label: 'Segment-Trennzeichen',
      tooltip:
        'Rekursives Splitten in der ausgewählten Reihenfolge. Überschreitet das Ergebnis die Segmentlänge, wird es auf die Segmentlänge gekürzt.',
      placeholder: 'Bitte auswählen',
    },
    limit: {
      label: 'Segmentlänge',
    },
    with_filter: {
      label: 'Automatisch bereinigen',
      text: 'Doppelte Sonderzeichen, Leerzeichen, Leerzeilen und Tab-Wörter entfernen.',
    },
    checkedConnect: {
      label: 'Beim Import einen Abschnitt „Verwandte Fragen“ für fragebasierte QA-Paare hinzufügen.',
    },
  },
  buttons: {
    prev: 'Zurück',
    next: 'Weiter',
    import: 'Import starten',
    preview: 'Übernehmen',
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
    deleteConfirm: 'Löschen bestätigen: Tag ',
    deleteTip:
      'Nach dem Löschen wird das Tag bei allen zugehörigen Ressourcen entfernt. Bitte mit Vorsicht fortfahren!',
    requiredMessage1: 'Bitte ein Tag eingeben',
    requiredMessage2: 'Bitte einen Wert eingeben',
    requiredMessage3: 'Bitte ein Tag oder einen Wert eingeben',
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
    PENDING: 'Warteschlange',
    GENERATE: 'Generierung',
    SYNC: 'Synchronisierung',
    REVOKE: 'Wird abgebrochen',
    finish: 'Fertig',
  },
  enableStatus: {
    label: 'Status',
    enable: 'Aktiv',
    close: 'Inaktiv',
  },
  sync: {
    label: 'Synchronisieren',
    confirmTitle: 'Synchronisierung des Dokuments bestätigen?',
    confirmMessage1:
      'Bei der Synchronisierung werden vorhandene Daten gelöscht und neu abgerufen. Bitte mit Vorsicht fortfahren.',
    confirmMessage2: 'Kann nicht synchronisiert werden. Bitte zuerst die Dokument-URL setzen.',
    successMessage: 'Erfolgreich',
  },
  delete: {
    confirmTitle1: 'Stapel-Löschen bestätigen von',
    confirmTitle2: 'Dokumenten?',
    confirmMessage:
      'Segmente innerhalb der ausgewählten Dokumente werden ebenfalls gelöscht. Bitte mit Vorsicht fortfahren.',
    successMessage: 'Erfolgreich',
    confirmTitle3: 'Löschen bestätigen: Dokument ',
    confirmMessage1: 'Unter diesem Dokument',
    confirmMessage2: 'werden alle Segmente gelöscht. Bitte vorsichtig vorgehen.',
  },
  form: {
    source_url: {
      label: 'Dokument-URL',
      placeholder: 'Dokument-URLs eingeben, eine pro Zeile. Falsche URLs führen zu Importfehlern.',
      requiredMessage: 'Bitte eine Dokument-URL eingeben',
    },
    selector: {
      label: 'Selector',
      placeholder: 'Standard ist body; möglich sind .classname/#idname/tagname',
    },
    hit_handling_method: {
      label: 'Retrieve-Respond',
      tooltip: 'Bei Benutzerfragen werden Treffersegmente gemäß der eingestellten Methode verarbeitet.',
    },
    similarity: {
      label: 'Ähnlichkeit größer als',
      placeholder: 'Segmentinhalt direkt zurückgeben',
      requiredMessage: 'Bitte einen Ähnlichkeitswert eingeben',
    },
    allow_download: {
      label: 'Download in Wissensquelle erlauben',
    },
  },
  hitHandlingMethod: {
    optimization: 'Modelloptimierung',
    directly_return: 'Direkt beantworten',
  },
  movePosition: {
    title: 'Position verschieben',
    moveUp: 'Nach oben',
    moveDown: 'Nach unten',
  },
  generateQuestion: {
    title: 'Fragen generieren',
    successMessage: 'Erfolgreich',
    tip1: 'Das {data} im Prompt ist ein Platzhalter für den segmentierten Inhalt; bei der Ausführung wird er durch den Segmentinhalt ersetzt und an das AI-Modell gesendet.',
    tip2: 'Das AI-Modell generiert auf Basis des Segmentinhalts relevante Fragen. Bitte platziere die generierten Fragen innerhalb der',
    tip3: 'Tags; das System stellt automatisch eine Beziehung zu den Fragen innerhalb dieser Tags her.',
    tip4: 'Die Qualität hängt vom gewählten Modell und Prompt ab. Du kannst beides anpassen, um das beste Ergebnis zu erzielen.',
    prompt1:
      'Inhalt: {data}\n \n Bitte fasse den obigen Inhalt zusammen und generiere 5 Fragen basierend auf der Zusammenfassung.\nAntwortanforderungen:\n - Bitte nur Fragen ausgeben;\n - Bitte jede Frage in',
    prompt2: 'Tag setzen.',
  },
  feishu: {
    selectDocument: 'Dokument auswählen',
    tip1: 'Es werden nur Dokumente und Tabellen unterstützt. Dokumente werden anhand von Überschriften segmentiert, Tabellen vor der Segmentierung in Markdown umgewandelt.',
    tip2: 'Vor dem Import wird empfohlen, die Segmentmarkierungen im Dokument zu standardisieren.',
    allCheck: 'Alle auswählen',
  },
}
