export default {
  input_type_list: {
    TextInput: 'Textfeld',
    PasswordInput: 'Passwortfeld',
    Slider: 'Schieberegler',
    SwitchInput: 'Schalter',
    SingleSelect: 'Einzelauswahl',
    MultiSelect: 'Mehrfachauswahl',
    DatePicker: 'Datumsauswahl',
    JsonInput: 'JSON-Textfeld',
    RadioCard: 'Optionskarte',
    RadioRow: 'Einzeilige Optionskarte',
    UploadInput: 'Datei-Upload',
    TextareaInput: 'Mehrzeiliges Textfeld',
    MultiRow: 'Einzeilige Mehrfachauswahlkarte',
    Model: 'Modell',
    Knowledge: 'Wissensdatenbank',
  },
  default: {
    label: 'Standardwert',
    placeholder: 'Bitte Standardwert eingeben',
    requiredMessage: 'Ist ein Pflichtfeld',
    show: 'Standardwert anzeigen',
  },
  tip: {
    requiredMessage: 'Darf nicht leer sein',
    jsonMessage: 'Ungültiges JSON-Format',
  },
  paramForm: {
    field: {
      label: 'Parameter',
      placeholder: 'Bitte Parameter eingeben',
      requiredMessage: 'Parameter ist ein Pflichtfeld',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche erlaubt',
    },
    name: {
      label: 'Anzeigename',
      placeholder: 'Bitte Anzeigename eingeben',
      requiredMessage: 'Anzeigename ist ein Pflichtfeld',
    },
    tooltip: {
      label: 'Parameter-Hinweis',
      placeholder: 'Bitte Parameter-Hinweis eingeben',
    },
    required: {
      label: 'Erforderlich',
      requiredMessage: 'Erforderlich ist ein Pflichtfeld',
    },
    input_type: {
      label: 'Komponententyp',
      placeholder: 'Bitte Komponententyp auswählen',
      requiredMessage: 'Komponententyp ist ein Pflichtfeld',
    },
    desc: {
      label: 'Beschreibung',
      placeholder: 'Bitte Beschreibung eingeben',
    },
  },
  TreeSelect: {
    label: 'Baumauswahl',
    select: 'Optionen',
    selectRequired: 'Optionen erforderlich',
    allowMultipleSelections: 'Mehrfachauswahl erlauben',
    addDialog: {
      addFirstOption: 'Hauptoption hinzufügen',
      addSubOptions: 'Unteroption hinzufügen',
      require: 'Bitte mindestens einen vollständigen Datensatz ausfüllen',
      nodeNotFound: 'Übergeordneter Knoten nicht gefunden',
      tagRequire: 'Tag und Optionswert dürfen nicht leer sein',
    },
  },
  DatePicker: {
    placeholder: 'Datum auswählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Datum',
    datetime: 'Datum & Uhrzeit',
    dataType: {
      label: 'Zeittyp',
      placeholder: 'Bitte Zeittyp auswählen',
    },
    format: {
      label: 'Format',
      placeholder: 'Bitte Format auswählen',
    },
  },
  Select: {
    label: 'Optionswert',
    placeholder: 'Bitte Optionswert eingeben',
  },
  tag: {
    label: 'Tag',
    placeholder: 'Bitte Optionstag eingeben',
  },
  Slider: {
    showInput: {
      label: 'Mit Eingabefeld anzeigen',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Mindestwert erforderlich',
      maxRequired: 'Höchstwert erforderlich',
    },
    step: {
      label: 'Schrittweite',
      requiredMessage1: 'Schrittweite erforderlich',
      requiredMessage2: 'Schrittweite darf nicht 0 sein',
    },
  },
  TextInput: {
    length: {
      label: 'Textlänge',
      minRequired: 'Mindestlänge erforderlich',
      maxRequired: 'Maximallänge erforderlich',
      requiredMessage1: 'Länge zwischen',
      requiredMessage2: 'bis',
      requiredMessage3: 'Zeichen',
      requiredMessage4: 'Textlänge ist ein Pflichtparameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Max. Anzahl an Dateien pro Upload',
      required: 'Max. Anzahl an Dateien pro Upload erforderlich',
    },
    max_file_size: {
      label: 'Max. Dateigröße (MB)',
      required: 'Max. Dateigröße (MB) erforderlich',
    },
    accept: {
      label: 'Dateityp',
      required: 'Dateityp erforderlich',
    },
    errorTip: {
      sizeError: 'Dateigröße überschritten',
      networkError: 'Netzwerkfehler',
    },
    reUpload: 'Erneut versuchen',
    uploadStatus: '{success} / {total} Dateien abgeschlossen',
    failedStatus: '{count} Dateien fehlgeschlagen',
    uploading: 'Wird hochgeladen',
    allSuccess: 'Alle erfolgreich',
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',
    ref_variables: {
      popover: 'Der Wert der Variable muss dem entsprechen:',
      json_format: 'JSON-Format',
      popover_label: 'Tag',
      popover_value: 'Wert',
      popover_default: 'Ist Standardwert',
    },
  },
  ModelConstructor: {
    optionalModel: 'Wählbares Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte Modell auswählen',
  },
  KnowledgeConstructor: {
    optionalKnowledge: 'Wählbare Wissensdatenbank',
    optionalKnowledgePlaceholder: 'Bitte wählbare Wissensdatenbank auswählen',
    defaultKnowledge: 'Standard-Wissensdatenbank',
  },
}
