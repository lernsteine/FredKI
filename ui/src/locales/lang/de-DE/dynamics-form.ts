export default {
  input_type_list: {
    TextInput: 'Textfeld',
    PasswordInput: 'Passwortfeld',
    Slider: 'Schieberegler',
    SwitchInput: 'Schalter',
    SingleSelect: 'Einzelauswahlfeld',
    MultiSelect: 'Mehrfachauswahlfeld',
    DatePicker: 'Datumsauswahl',
    JsonInput: 'JSON-Textfeld',
    RadioCard: 'Optionskarte',
    RadioRow: 'Einzeilige Optionskarte',
    UploadInput: 'Datei-Upload',
    TextareaInput: 'Mehrzeiliges Textfeld',
    MultiRow: 'Mehrfachauswahl in einer Zeile',
  },
  default: {
    label: 'Standardwert',
    placeholder: 'Bitte Standardwert eingeben',
    requiredMessage: 'ist ein Pflichtfeld',
    show: 'Standardwert anzeigen',
  },
  tip: {
    requiredMessage: 'Darf nicht leer sein',
    jsonMessage: 'JSON-Format ist ungültig',
  },
  searchBar: {
    placeholder: 'Bitte Stichwort zur Suche eingeben',
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
      label: 'Parameterbeschreibung',
      placeholder: 'Bitte Parameterbeschreibung eingeben',
    },
    required: {
      label: 'Pflichtfeld',
      requiredMessage: 'Pflichtfeld ist erforderlich',
    },
    input_type: {
      label: 'Komponententyp',
      placeholder: 'Bitte Komponententyp auswählen',
      requiredMessage: 'Komponententyp ist ein Pflichtfeld',
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
    placeholder: 'Bitte Options-Tag eingeben',
  },
  Slider: {
    showInput: {
      label: 'Mit Eingabefeld',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Minimalwert erforderlich',
      maxRequired: 'Maximalwert erforderlich',
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
      minRequired: 'Minimale Länge erforderlich',
      maxRequired: 'Maximale Länge erforderlich',
      requiredMessage1: 'Länge zwischen',
      requiredMessage2: 'und',
      requiredMessage3: 'Zeichen',
      requiredMessage4: 'Textlänge ist ein Pflichtparameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl Dateien pro Upload',
      required: 'Maximale Anzahl Dateien pro Upload ist erforderlich',
    },
    max_file_size: {
      label: 'Maximale Dateigröße (MB)',
      required: 'Maximale Dateigröße (MB) ist erforderlich',
    },
    accept: {
      label: 'Dateityp',
      required: 'Dateityp ist erforderlich',
    },
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',

    custom: {
      label: 'Benutzerdefiniert',
    },
    ref_variables: {
      popover: 'Der Wert der Variablen muss dem entsprechen',
      json_format: 'JSON-Format',
      popover_label: 'Bezeichnung',
      popover_value: 'Wert',
      popover_default: 'Standardwert?',
    },
  },
}
