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
    Knowledge: 'Wissensdatenbank',
  },
  default: {
    label: 'Standard',
    placeholder: 'Bitte Standardwert eingeben',
    requiredMessage: ' ist ein Pflichtfeld',
    show: 'Standard anzeigen',
  },
  tip: {
    requiredMessage: 'darf nicht leer sein',
    jsonMessage: 'Falsches JSON-Format',
  },
  paramForm: {
    field: {
      label: 'Parameter',
      placeholder: 'Bitte Parameter eingeben',
      requiredMessage: 'Parameter ist ein Pflichtfeld',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche sind erlaubt',
    },
    name: {
      label: 'Name',
      placeholder: 'Bitte Namen eingeben',
      requiredMessage: 'Name ist ein Pflichtfeld',
    },
    tooltip: {
      label: 'Tooltip',
      placeholder: 'Bitte Tooltip eingeben',
    },
    required: {
      label: 'Pflichtfeld',
      requiredMessage: 'Pflichtfeld ist ein Pflichtfeld',
    },
    input_type: {
      label: 'Typ',
      placeholder: 'Bitte Typ auswählen',
      requiredMessage: 'Typ ist ein Pflichtfeld',
    },
    desc: {
      label: 'Beschreibung',
      placeholder: 'Bitte Beschreibung eingeben',
    },
  },
  TreeSelect: {
    label: 'Baumauswahl',
    select: 'Option',
    allowMultipleSelections: 'Mehrfachauswahl erlauben',
    addDialog: {
      addFirstOption: 'Stammoption hinzufügen',
      addSubOptions: 'Unteroption hinzufügen',
      require: 'Bitte mindestens einen vollständigen Eintrag eingeben',
      nodeNotFound: 'Übergeordneter Knoten nicht gefunden',
      tagRequire: 'Beschriftung und Wert dürfen nicht leer sein',
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
      placeholder: 'Bitte Datumstyp auswählen',
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
    label: 'Beschriftung',
    placeholder: 'Bitte Optionsbeschriftung eingeben',
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
      requiredMessage4: 'Textlänge ist ein Pflichtparameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl Dateien pro Upload',
      required: 'Maximale Anzahl Dateien ist erforderlich',
    },
    max_file_size: {
      label: 'Maximale Dateigröße (MB)',
      required: 'Maximale Dateigröße ist erforderlich',
    },
    accept: {
      label: 'Dateityp',
      required: 'Dateityp ist erforderlich',
    },
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',
    ref_variables: {
      label: 'Referenzvariablen',
      popover: 'Variablenwerte müssen dem',
      json_format: 'JSON-Format',
      popover_label: 'Beschriftung',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
  ModelConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte Modell eingeben',
  },
  KnowledgeConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte Modell eingeben',
  },
}
