export default {
  input_type_list: {
    TextInput: 'Texteingabe',
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
    MultiRow: 'Mehrreihig',
    Model: 'Modell',
    Knowledge: 'Wissen',
  },
  default: {
    label: 'Standard',
    placeholder: 'Bitte geben Sie einen Standardwert ein',
    requiredMessage: ' ist ein Pflichtfeld',
    show: 'Standardwert anzeigen',
  },
  tip: {
    requiredMessage: 'darf nicht leer sein',
    jsonMessage: 'Ungültiges JSON-Format',
  },
  paramForm: {
    field: {
      label: 'Parameter',
      placeholder: 'Bitte geben Sie einen Parameter ein',
      requiredMessage: 'Parameter ist ein Pflichtfeld',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche sind erlaubt',
    },
    name: {
      label: 'Name',
      placeholder: 'Bitte geben Sie einen Namen ein',
      requiredMessage: 'Name ist ein Pflichtfeld',
    },
    tooltip: {
      label: 'Tooltip',
      placeholder: 'Bitte geben Sie einen Tooltip-Text ein',
    },
    required: {
      label: 'Erforderlich',
      requiredMessage: 'Pflichtfeld-Angabe ist erforderlich',
    },
    input_type: {
      label: 'Typ',
      placeholder: 'Bitte wählen Sie einen Typ aus',
      requiredMessage: 'Typ ist ein Pflichtfeld',
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
      require: 'Bitte geben Sie mindestens ein vollständiges Element ein',
      nodeNotFound: 'Übergeordneter Knoten nicht gefunden',
      tagRequire: 'Label und Wert dürfen nicht leer sein',
    },
  },
  DatePicker: {
    placeholder: 'Datum wählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Datum',
    datetime: 'Datum & Uhrzeit',
    dataType: {
      label: 'Datumstyp',
      placeholder: 'Bitte wählen Sie einen Datumstyp',
    },
    format: {
      label: 'Format',
      placeholder: 'Bitte wählen Sie ein Format',
    },
  },
  Select: {
    label: 'Optionswert',
    placeholder: 'Bitte geben Sie einen Optionswert ein',
  },
  tag: {
    label: 'Tag',
    placeholder: 'Bitte geben Sie ein Options-Label ein',
  },
  Slider: {
    showInput: {
      label: 'Eingabefeld anzeigen',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Mindestwert ist erforderlich',
      maxRequired: 'Maximalwert ist erforderlich',
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
      requiredMessage4: 'Die Textlänge ist ein erforderlicher Parameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl an Dateien pro Upload',
      required: 'Maximale Anzahl an Dateien ist erforderlich',
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
      popover: 'Variablenwerte müssen dem folgenden Format entsprechen:',
      json_format: 'JSON-Format',
      popover_label: 'Label',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
  ModelConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte wählen Sie ein Modell',
  },
  KnowledgeConstructor: {
    optionalModel: 'Optionales Modell',
    defaultModel: 'Standardmodell',
    modelPlaceholder: 'Bitte wählen Sie ein Modell',
  },
}
