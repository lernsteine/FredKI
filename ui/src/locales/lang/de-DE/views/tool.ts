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
  settingTool: 'Tool konfigurieren',
  mcpConfig: 'MCP-Dienst-Konfiguration',
  updatedVersion: 'Aktualisierte Version',
  dataSource: {
    title: 'Datenquelle',
    createDataSource: 'Datenquelle erstellen',
    editDataSource: 'Datenquelle bearbeiten',
    copyDataSource: 'Datenquelle kopieren',
    selectDataSource: 'Datenquelle auswählen',
    requiredMessage: 'Bitte Datenquelle auswählen',
  },
  toolStore: {
    title: 'Tool-Store',
    createFromToolStore: 'Aus Tool-Store erstellen',
    internal: 'Im System integriert',
    recommend: 'Empfohlen',
    webSearch: 'Websuche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: '{count} Suchergebnisse für',
    confirmTip: 'Sind Sie sicher, dass Sie das Tool aktualisieren möchten: ',
    updateStoreToolMessage: 'Das Aktualisieren von Tools kann sich auf genutzte Ressourcen auswirken, gehen Sie vorsichtig vor.',
  },
  tip: {
    saveMessage: 'Nicht gespeicherte Änderungen gehen verloren. Sind Sie sicher, dass Sie beenden möchten?',
  },
  delete: {
    confirmTitle: 'Löschung des Tools bestätigen:',
    confirmMessage:
      'Das Löschen dieses Tools führt zu Fehlern bei Agenten, die darauf verweisen, wenn sie abgefragt werden. Bitte vorsichtig vorgehen.',
    resourceCountMessage: 'Dieses Tool ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte vorsichtig vorgehen.',
  },
  disabled: {
    confirmTitle: 'Deaktivierung des Tools bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Tools führt zu Fehlern bei Agenten, die darauf verweisen, wenn sie abgefragt werden. Bitte vorsichtig vorgehen.',
  },
  form: {
    toolName: {
      name: 'Tool-Name',
      placeholder: 'Bitte Tool-Namen eingeben',
      requiredMessage: 'Bitte Tool-Namen eingeben',
    },
    mcpName: {
      name: 'MCP-Name',
      placeholder: 'Bitte MCP-Namen eingeben',
      requiredMessage: 'Bitte MCP-Namen eingeben',
    },
    toolDescription: {
      placeholder: 'Bitte eine Beschreibung des Tools eingeben',
    },
    mcpDescription: {
      placeholder: 'Bitte eine Beschreibung des MCP eingeben',
    },
    paramName: {
      label: 'Parametername',
      placeholder: 'Bitte Parametername eingeben',
      requiredMessage: 'Bitte Parametername eingeben',
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
      paramInfo1: 'Wird bei der Tool-Nutzung angezeigt',
      paramInfo2: 'Wird bei der Tool-Nutzung nicht angezeigt',
      code: 'Inhalt (Python)',
      selectPlaceholder: 'Bitte Parameter auswählen',
      inputPlaceholder: 'Bitte Parameterwerte eingeben',
    },
    mcp: {
      title: 'MCP-Dienst',
      label: 'MCP-Server-Konfiguration',
      placeholder: 'Bitte MCP-Server-Konfiguration eingeben',
      tip: 'Unterstützt nur SSE- und Streamable-HTTP-Aufrufmethoden',
      requiredMessage: 'Bitte MCP-Server-Konfiguration eingeben',
    },
    debug: {
      run: 'Ausführen',
      output: 'Ausgabe',
      runResult: 'Ausführungsergebnis',
      runSuccess: 'Erfolgreich',
      runFailed: 'Fehlgeschlagen',
    },
  },
}
