export default {
  title: 'Tool',
  all: 'Alle',
  createTool: 'Tool erstellen',
  editTool: 'Tool bearbeiten',
  copyTool: 'Tool kopieren',
  importTool: 'Tool importieren',
  settingTool: 'Tool einstellen',
  updatedVersion: 'Aktualisierte Version',
  generateCodeDialog: {
    generatePrompt: 'Python-Code generieren',
    placeholder: 'Bitte geben Sie das Thema ein',
    title: 'Python-Code wird hier angezeigt',
  },
  toolWorkflow: {
    title: 'Workflow',
    copyToolWorkflow: 'Workflow kopieren',
    creatToolWorkflow: 'Workflow erstellen',
    toActiveTip: 'Aktivierung nicht möglich. Bitte veröffentlichen Sie zuerst den Workflow.',
    debugResult: 'Debug-Ergebnisse',
  },
  dataSource: {
    title: 'Datenquelle',
    createDataSource: 'Datenquelle erstellen',
    editDataSource: 'Datenquelle bearbeiten',
    copyDataSource: 'Datenquelle kopieren',
    selectDataSource: 'Datenquelle auswählen',
    requiredMessage: 'Bitte wählen Sie eine Datenquelle aus',
  },
  toolStore: {
    title: 'Tool-Store',
    createFromToolStore: 'Aus Tool-Store erstellen',
    internal: 'Systemintern',
    recommend: 'Empfohlen',
    webSearch: 'Websuche',
    databaseQuery: 'Datenbankabfrage',
    image: 'Bild',
    developer: 'Entwickler',
    communication: 'Kommunikation',
    searchResult: '{count} Suchergebnisse für',
    confirmTip: 'Sind Sie sicher, dass Sie dieses Tool aktualisieren möchten: ',
    updateStoreToolMessage: 'Das Aktualisieren von Tools kann sich auf verwendete Ressourcen auswirken. Bitte gehen Sie mit Vorsicht vor.',
  },
  mcp: {
    title: 'MCP-Dienst',
    label: 'MCP-Server-Konfiguration',
    placeholder: 'Bitte MCP-Server-Konfiguration eingeben',
    tip: 'Unterstützt nur SSE- und Streamable HTTP-Aufrufmethoden',
    requiredMessage: 'Bitte geben Sie die MCP-Server-Konfiguration ein',
    createMcpTool: 'MCP erstellen',
    editMcpTool: 'MCP bearbeiten',
    copyMcpTool: 'MCP kopieren',
    mcpConfig: 'MCP-Dienstkonfiguration',
  },
  skill: {
    title: 'Fähigkeiten',
    copySkillTool: 'Fähigkeiten kopieren',
    createSkillTool: 'Fähigkeiten erstellen',
    editSkillTool: 'Fähigkeiten bearbeiten',
    initParamPlaceholder: 'Parameter, die bei Aktivierung der Fähigkeit konfiguriert werden müssen',
    skillFile: 'Fähigkeits-Datei',
    reUpload: 'Erneut hochladen',
  },
  tip: {
    saveMessage: 'Ungespeicherte Änderungen gehen verloren. Möchten Sie wirklich beenden?',
  },
  delete: {
    confirmTitle: 'Löschen des Tools bestätigen:',
    confirmTitle2: 'Tools?',
    confirmMessage:
      'Das Löschen dieses Tools führt zu Fehlern bei Agents, die bei Anfragen darauf verweisen. Bitte gehen Sie mit Vorsicht vor.',
    resourceCountMessage:
      'Dieses Tool ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte gehen Sie mit Vorsicht vor.',
  },
  disabled: {
    confirmTitle: 'Deaktivierung des Tools bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Tools führt zu Fehlern in Ressourcen, die bei der Ausführung darauf verweisen. Bitte gehen Sie mit Vorsicht vor.',
  },

  form: {
    toolName: {
      label: 'Tool-Name',
      placeholder: 'Bitte geben Sie den Tool-Namen ein',
      requiredMessage: 'Bitte geben Sie den Tool-Namen ein',
    },
    mcpName: {
      placeholder: 'Bitte geben Sie den MCP-Namen ein',
      requiredMessage: 'Bitte geben Sie den MCP-Namen ein',
    },
    workflowName: {
      label: 'Workflow-Name',
      placeholder: 'Bitte geben Sie den Workflow-Namen ein',
      requiredMessage: 'Bitte geben Sie den Workflow-Namen ein',
    },
    paramName: {
      label: 'Parameter-Name',
      placeholder: 'Bitte geben Sie den Parameter-Namen ein',
      requiredMessage: 'Bitte geben Sie den Parameter-Namen ein',
    },
    dataType: {
      label: 'Datentyp',
    },
    source: {
      label: 'Quelle',
      reference: 'Referenz-Parameter',
    },
    param: {
      paramInfo1: 'Wird bei Verwendung des Tools angezeigt',
      paramInfo2: 'Wird bei Verwendung des Tools nicht angezeigt',
      code: 'Inhalt (Python)',
      selectPlaceholder: 'Bitte Parameter auswählen',
      inputPlaceholder: 'Bitte Parameterwerte eingeben',
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
