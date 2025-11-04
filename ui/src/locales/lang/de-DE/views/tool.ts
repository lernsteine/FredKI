export default {
  title: 'Tool',
  all: 'Alle',
  createTool: 'Tool erstellen',
  editTool: 'Tool bearbeiten',
  createMcpTool: 'MCP erstellen',
  editMcpTool: 'MCP bearbeiten',
  copyTool: 'Tool kopieren',
  importTool: 'Tool importieren',
  settingTool: 'Tool konfigurieren',
  mcpConfig: 'MCP-Servicekonfiguration',
  toolStore: {
    title: 'Tool Store',
    createFromToolStore: 'Aus Tool Store erstellen',
    internal: 'Im System integriert',
    recommend: 'Empfohlen',
    webSearch: 'Websuche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: '{count} Suchergebnisse für',
    confirmTip: 'Sind Sie sicher, dass Sie das Tool aktualisieren möchten: ',
    updateStoreToolMessage:
      'Das Aktualisieren von Tools kann sich auf genutzte Ressourcen auswirken – bitte mit Vorsicht fortfahren.',
  },
  searchBar: {
    placeholder: 'Nach Toolnamen suchen',
  },
  tip: {
    saveMessage: 'Nicht gespeicherte Änderungen gehen verloren. Möchten Sie wirklich beenden?',
  },
  delete: {
    confirmTitle: 'Löschen des Tools bestätigen:',
    confirmMessage:
      'Das Löschen dieses Tools führt zu Fehlern in Apps, die darauf verweisen. Bitte mit Vorsicht fortfahren.',
  },
  disabled: {
    confirmTitle: 'Deaktivieren des Tools bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Tools führt zu Fehlern in Apps, die darauf verweisen. Bitte mit Vorsicht fortfahren.',
  },

  form: {
    toolName: {
      label: 'Name',
      name: 'Tool-Name',
      placeholder: 'Bitte Tool-Namen eingeben',
      requiredMessage: 'Bitte Tool-Namen eingeben',
    },
    mcpName: {
      label: 'Name',
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
      reference: 'Parameterreferenz',
    },
    required: {
      label: 'Erforderlich',
    },
    param: {
      paramInfo1: 'Wird bei der Toolnutzung angezeigt',
      paramInfo2: 'Wird bei der Toolnutzung nicht angezeigt',
      code: 'Inhalt (Python)',
      selectPlaceholder: 'Bitte Parameter auswählen',
      inputPlaceholder: 'Bitte Parameterwert eingeben',
    },
    mcp: {
      title: 'MCP-Service',
      label: 'MCP-Serverkonfiguration',
      placeholder: 'Bitte MCP-Serverkonfiguration eingeben',
      tip: 'Unterstützt nur SSE- und Streamable-HTTP-Aufrufe',
      requiredMessage: 'Bitte MCP-Serverkonfiguration eingeben',
    },
    debug: {
      run: 'Ausführen',
      output: 'Ausgabe',
      runResult: 'Ergebnis',
      runSuccess: 'Erfolgreich',
      runFailed: 'Fehlgeschlagen',
    },
  },
}
