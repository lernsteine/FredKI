export default {
  input_type_list: {
    TextInput: 'Eingabe',
    PasswordInput: 'Passwort',
    Slider: 'Schieberegler',
    SwitchInput: 'Schalter',
    SingleSelect: 'Einfachauswahl',
    MultiSelect: 'Mehrfachauswahl',
    DatePicker: 'Datums-Auswahl',
    JsonInput: 'JSON',
    RadioCard: 'Radio-Karte',
    RadioRow: 'Radio-Reihe',
    UploadInput: 'Datei-Upload',
    TextareaInput: 'Mehrzeilige Eingabe',
    MultiRow: 'Mehrere Zeilen',
    Model: 'Modell',
    Knowledge: 'Wissen',
  },
  default: {
    label: 'Standardwert',
    placeholder: 'Bitte Standardwert eingeben',
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
      placeholder: 'Bitte Parameter eingeben',
      requiredMessage: 'Parameter ist ein Pflichtfeld',
      requiredMessage2: 'Nur Buchstaben, Zahlen und Unterstriche erlaubt',
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
  },
  DatePicker: {
    placeholder: 'Datum auswählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Datum',
    datetime: 'Datum und Uhrzeit',
    dataType: {
      label: 'Datentyp',
      placeholder: 'Bitte Datentyp auswählen',
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
    label: 'Bezeichnung',
    placeholder: 'Bitte Bezeichnung eingeben',
  },
  Slider: {
    showInput: {
      label: 'Eingabefeld anzeigen',
    },
    valueRange: {
      label: 'Wertebereich',
      minRequired: 'Minimalwert ist erforderlich',
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
      minRequired: 'Minimale Länge ist erforderlich',
      maxRequired: 'Maximale Länge ist erforderlich',
      requiredMessage1: 'Länge muss zwischen',
      requiredMessage2: 'und',
      requiredMessage3: 'Zeichen liegen',
      requiredMessage4: 'Textlänge ist ein Pflichtparameter',
    },
  },
  UploadInput: {
    limit: {
      label: 'Maximale Anzahl Dateien pro Upload',
      required: 'Maximale Dateianzahl ist erforderlich',
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
      popover: 'Variablenwerte müssen dem Format entsprechen',
      json_format: 'JSON-Format',
      popover_label: 'Bezeichnung',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
}
