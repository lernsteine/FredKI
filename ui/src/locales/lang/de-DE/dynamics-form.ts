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
    MultiRow: 'Mehrzeilige Tabelle',
  },
  default: {
    label: 'Standardwert',
    placeholder: 'Bitte geben Sie einen Standardwert ein',
    requiredMessage: ' ist eine erforderliche Eigenschaft',
    show: 'Standardwert anzeigen',
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
  },
  DatePicker: {
    placeholder: 'Datum auswählen',
    year: 'Jahr',
    month: 'Monat',
    date: 'Tag',
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
    label: 'Tag',
    placeholder: 'Bitte geben Sie ein Optionslabel ein',
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
      minRequired: 'Minimallänge ist erforderlich',
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
  },
  AssignmentMethod: {
    label: 'Zuweisungsmethode',
    custom: {
      label: 'Benutzerdefiniert',
    },
    ref_variables: {
      label: 'Referenzvariablen',
      popover: 'Variablenwerte müssen dem',
      json_format: 'JSON-Format entsprechen',
      popover_label: 'Label',
      popover_value: 'Wert',
      popover_default: 'Ist Standard',
    },
  },
}
