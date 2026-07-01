export default {
  input_type_list: {
    TextInput: 'Eingabe',
    PasswordInput: 'Passwort',
    Slider: 'Schieberegler',
    SwitchInput: 'Schalter',
    SingleSelect: 'Einfachauswahl',
    MultiSelect: 'Mehrfachauswahl',
    DatePicker: 'Datumsauswahl',
    JsonInput: 'JSON',
    RadioCard: 'Radio-Karte',
    RadioRow: 'Radio-Zeile',
    UploadInput: 'Datei-Upload',
    TextareaInput: 'Mehrzeilige Eingabe',
    MultiRow: 'Mehrzeilig',
    Model: 'Modell',
    Knowledge: 'Wissen',
  },
  default: {
    label: 'Standard',
    placeholder: 'Bitte geben Sie einen Standardwert ein',
    requiredMessage: ' ist eine erforderliche Eigenschaft',
    show: 'Standard anzeigen',
  },
  tip: {
    requiredMessage: 'darf nicht leer sein',
    jsonMessage: 'Falsches JSON-Format',
  },
  paramForm: {
    field: {
      label: 'Parameter',
      placeholder: 'Bitte geben Sie einen Parameter ein',
      requiredMessage: 'Parameter ist eine erforderliche Eigenschaft',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche sind erlaubt',
    },
    name: {
      label: 'Name',
      placeholder: 'Bitte geben Sie einen Namen ein',
      requiredMessage: 'Name ist eine erforderliche Eigenschaft',
    },
    tooltip: {
      label: 'Tooltip',
      placeholder: 'Bitte geben Sie einen Tooltip ein',
    },
    required: {
      label: 'Erforderlich',
      requiredMessage: 'Erforderlich ist eine erforderliche Eigenschaft',
    },
    input_type: {
      label: 'Typ',
      placeholder: 'Bitte wählen Sie einen Typ aus',
      requiredMessage: 'Typ ist eine erforderliche Eigenschaft',
    },
    desc: {
      label: 'Beschreibung',
      placeholder: 'Bitte geben Sie eine Beschreibung ein',
    },
  },
  TreeSelect: {
    label: 'Baumauswahl',
    select: 'Option',
    selectRequired: 'Optionen sind erforderlich',
    allowMultipleSelections: 'Mehrfachauswahl erlauben',
    addDialog: {
      addFirstOption: 'Stammoption hinzufügen',
      addSubOptions: 'Unteroption hinzufügen',
      require: 'Bitte geben Sie mindestens einen vollständigen Eintrag ein',
      nodeNotFound: 'Übergeordneter Knoten nicht gefunden',
      tagRequire: 'Bezeichnung und Wert dürfen nicht leer sein',
    },
  },
  DatePicker: {
    placeholder: 'Datum auswählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Datum',
    datetime: 'Datum und Uhrzeit',
    dataType: {
      label: 'Datumstyp',
      placeholder: 'Bitte wählen Sie einen Datumstyp aus',
    },
    format: {
      label: 'Format',
      placeholder: 'Bitte wählen Sie ein Format aus',
    },
  },
  Select: {
    label: 'Optionswert',
    placeholder: 'Bitte geben Sie einen Optionswert ein',
  },
  tag: {
    label: 'Bezeichnung',
    placeholder: 'Bitte geben Sie eine Optionsbezeichnung ein',
  },
  Slider: {
    showInput: {
      label: 'Eingabefeld anzeigen',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Mindestwert ist erforderlich',
      maxRequired: 'Höchstwert ist erforderlich',
    },
    step: {
      label: 'Schrittweite',
      requiredMessage1: 'Schrittweite ist erforderlich',
      requiredMessage2: 'Schrittweite darf nicht 0 sein',
    },
  },
  TextInput: {
    length: {
      label: 'Textlänge',
      minRequired: 'Mindestlänge ist erforderlich',
      maxRequired: 'Maximallänge ist erforderlich',
      requiredMessage1: 'Länge muss zwischen',
      requiredMessage2: 'und',
      requiredMessage3: 'Zeichen liegen',
      requiredMessage4: 'Textlänge ist ein erforderlicher Parameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl von Dateien pro Upload',
      required: 'Maximale Anzahl von Dateien ist erforderlich',
    },
    max_file_size: {
      label: 'Maximale Dateigröße (MB)',
      required: 'Maximale Dateigröße ist erforderlich',
    },
    accept: {
      label: 'Dateityp',
      required: 'Dateityp ist erforderlich',
    },
    errorTip: {
      sizeError: 'Dateigröße überschreitet das Limit',
      networkError: 'Netzwerkfehler',
    },
    reUpload: 'Erneut versuchen',
    uploadStatus: '{success} von {total} Dateien abgeschlossen',
    failedStatus: '{count} Dateien fehlgeschlagen',
    uploading: 'Wird hochgeladen',
    allSuccess: 'Alle erfolgreich',
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',
    ref_variables: {
      label: 'Referenzvariablen',
      popover: 'Variablenwerte müssen dem',
      json_format: 'JSON-Format',
      popover_label: 'Bezeichnung',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
  ModelConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte geben Sie ein Modell ein',
  },
  KnowledgeConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte geben Sie ein Modell ein',
  },
}
