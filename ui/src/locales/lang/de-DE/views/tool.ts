export default {
  title: 'Werkzeuge',
  all: 'Alle',
  createTool: 'Werkzeug erstellen',
  editTool: 'Werkzeug bearbeiten',
  createMcpTool: 'MCP erstellen',
  editMcpTool: 'MCP bearbeiten',
  copyTool: 'Werkzeug kopieren',
  importTool: 'Werkzeug importieren',
  settingTool: 'Werkzeug konfigurieren',
  mcpConfig: 'MCP-Dienstkonfiguration',
  toolStore: {
    title: 'Werkzeugshop',
    createFromToolStore: 'Aus dem Werkzeugshop erstellen',
    internal: 'Systemintern',
    recommend: 'Empfohlen',
    webSearch: 'Websuche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: 'Suchergebnisse {count}',
    confirmTip: 'Werkzeug aktualisieren：',
    updateStoreToolMessage: 'Das Aktualisieren des Werkzeugs kann genutzte Ressourcen beeinflussen. Bitte vorsichtig vorgehen.',
  },
  delete: {
    confirmTitle: 'Werkzeug wirklich löschen',
    confirmMessage: 'Nach dem Löschen schlagen Anfragen in Anwendungen, die dieses Werkzeug referenzieren, fehl. Bitte vorsichtig vorgehen.',
  },
  disabled: {
    confirmTitle: 'Werkzeug deaktivieren：',
    confirmMessage: 'Nach dem Deaktivieren schlagen Anfragen in Anwendungen, die dieses Werkzeug referenzieren, fehl. Bitte vorsichtig vorgehen.',
  },
  tip: {
    saveMessage: 'Aktuelle Änderungen wurden nicht gespeichert. Wirklich beenden?',
  },
  form: {
    toolName: {
      label: 'Name',
      name: 'Werkzeugname',
      placeholder: 'Bitte Werkzeugnamen eingeben',
      requiredMessage: 'Bitte Werkzeugnamen eingeben',
    },
    mcpName: {
      label: 'Name',
      name: 'MCP-Name',
      placeholder: 'Bitte MCP-Namen eingeben',
      requiredMessage: 'Bitte MCP-Namen eingeben',
    },
    toolDescription: {
      placeholder: 'Bitte Beschreibung des Werkzeugs eingeben',
    },
    mcpDescription: {
      placeholder: 'Bitte Beschreibung des MCP eingeben',
    },
    paramName: {
      label: 'Parametername',
      placeholder: 'Bitte Parameternamen eingeben',
      requiredMessage: 'Bitte Parameternamen eingeben',
    },
    dataType: {
      label: 'Datentyp',
    },
    source: {
      label: 'Quelle',
      reference: 'Parameter referenzieren',
    },
    required: {
      label: 'Pflichtfeld',
    },
    param: {
      paramInfo1: 'Beim Verwenden des Werkzeugs anzeigen',
      paramInfo2: 'Beim Verwenden des Werkzeugs nicht anzeigen',
      code: 'Werkzeuginhalt (Python)',
      selectPlaceholder: 'Bitte Parameter auswählen',
      inputPlaceholder: 'Bitte Parameterwert eingeben',
    },
    mcp: {
      title: 'MCP-Dienst',
      label: 'MCP-Serverkonfiguration',
      placeholder: 'Bitte MCP-Serverkonfiguration eingeben',
      tip: 'Unterstützt nur SSE und Streamable HTTP',
      requiredMessage: 'Bitte MCP-Serverkonfiguration eingeben',
    },
    debug: {
      run: 'Ausführen',
      output: 'Ausgabe',
      runResult: 'Ausführungsergebnis',
      runSuccess: 'Ausführung erfolgreich',
      runFailed: 'Ausführung fehlgeschlagen',
    },
  },
}
