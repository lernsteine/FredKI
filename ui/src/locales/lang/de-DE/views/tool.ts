export default {
  title: 'Tool',
  all: 'Alle',
  createTool: 'Tool erstellen',
  editTool: 'Tool bearbeiten',
  createMcpTool: 'MCP erstellen',
  editMcpTool: 'MCP bearbeiten',
  copyTool: 'Tool kopieren',
  copyMcpTool: 'MCP kopieren',
  importTool: 'Tool importieren',
  settingTool: 'Tool einstellen',
  mcpConfig: 'MCP-Dienstkonfiguration',
  updatedVersion: 'Aktualisierte Version',
  dataSource: {
    title: 'Datenquelle',
    createDataSource: 'Datenquelle erstellen',
    editDataSource: 'Datenquelle bearbeiten',
    copyDataSource: 'Datenquelle kopieren',
    selectDataSource: 'Datenquelle auswählen',
    requiredMessage: 'Bitte wählen Sie die Datenquelle aus',
  },
  toolStore: {
    title: 'Tool-Store',
    createFromToolStore: 'Aus Tool-Store erstellen',
    internal: 'Systemintern',
    recommend: 'Empfohlen',
    webSearch: 'Web-Suche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: '{count} Suchergebnisse für',
    confirmTip: 'Sind Sie sicher, das Tool zu aktualisieren: ',
    updateStoreToolMessage: 'Das Aktualisieren von Tools kann Ressourcen in Verwendung beeinflussen, daher vorsichtig vorgehen.',
  },
  tip: {
    saveMessage: 'Nicht gespeicherte Änderungen gehen verloren. Sind Sie sicher, dass Sie aussteigen möchten?',
  },
  delete: {
    confirmTitle: 'Bestätigen Sie die Löschung des Tools:',
    confirmMessage:
      'Das Löschen dieses Tools verursacht Fehler in Anwendungen, die es referenzieren, wenn sie abgefragt werden. Bitte vorsichtig vorgehen.',
  },
  disabled: {
    confirmTitle: 'Bestätigen Sie die Deaktivierung des Tools:',
    confirmMessage:
      'Das Deaktivieren dieses Tools verursacht Fehler in Anwendungen, die es referenzieren, wenn sie abgefragt werden. Bitte vorsichtig vorgehen.',
  },

  form: {
    toolName: {
      name: 'Tool-Name',
      placeholder: 'Bitte geben Sie den Tool-Namen ein',
      requiredMessage: 'Bitte geben Sie den Tool-Namen ein',
    },
    mcpName: {
      name: 'MCP-Name',
      placeholder: 'Bitte geben Sie den MCP-Namen ein',
      requiredMessage: 'Bitte geben Sie den MCP-Namen ein',
    },
    toolDescription: {
      placeholder: 'Bitte geben Sie eine Beschreibung des Tools ein',
    },
    mcpDescription: {
      placeholder: 'Bitte geben Sie eine Beschreibung des MCP ein',
    },
    paramName: {
      label: 'Parametername',
      placeholder: 'Bitte geben Sie den Parametername ein',
      requiredMessage: 'Bitte geben Sie den Parametername ein',
    },
    dataType: {
      label: 'Datentyp',
    },
    source: {
      label: 'Quelle',
      reference: 'Referenzparameter',
    },
    required: {
      label: 'Erforderlich',
    },
    param: {
      paramInfo1: 'Wird bei der Verwendung des Tools angezeigt',
      paramInfo2: 'Wird bei der Verwendung des Tools nicht angezeigt',
      code: 'Inhalt (Python)',
      selectPlaceholder: 'Bitte wählen Sie den Parameter aus',
      inputPlaceholder: 'Bitte geben Sie Parameterwerte ein',
    },
    mcp: {
      title: 'MCP-Dienst',
      label: 'MCP-Server-Konfiguration',
      placeholder: 'Bitte geben Sie die MCP-Server-Konfiguration ein',
      tip: 'Unterstützt nur SSE- und streambare HTTP-Aufrufmethoden',
      requiredMessage: 'Bitte geben Sie die MCP-Server-Konfiguration ein',
    },
    debug: {
      run: 'Ausführen',
      output: 'Ausgabe',
      runResult: 'Ausführungsergebnis',
      runSuccess: 'Erfolgreich',
      runFailed: 'Ausführung fehlgeschlagen',
    },
  },
}
