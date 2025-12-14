export default {
  title: 'Modell',
  provider: 'Anbieter',
  providerPlaceholder: 'Anbieter auswählen',
  addModel: 'Modell hinzufügen',

  delete: {
    confirmTitle: 'Modell löschen:',
    confirmMessage:
      'Das Löschen des Modells beeinflusst die Ressourcen, die es derzeit verwenden. Bitte vorsichtig vorgehen.',
  },
  tip: {
    createSuccessMessage: 'Modell erfolgreich erstellt',
    createErrorMessage: 'Es gibt Fehler in den grundlegenden Informationen',
    errorMessage: 'Variable existiert bereits: ',
    emptyMessage1: 'Bitte wählen Sie zuerst den Modelltyp und das Basismodell in den grundlegenden Informationen aus',
    emptyMessage2: 'Das ausgewählte Modell unterstützt keine Parameter-Einstellungen',
    updateSuccessMessage: 'Modell erfolgreich aktualisiert',
    saveSuccessMessage: 'Modellparameter erfolgreich gespeichert',
    downloadError: 'Download fehlgeschlagen',
    noModel: 'Modell existiert nicht in Ollama',
  },
  modelType: {
    allModel: 'Alle Modelle',
    publicModel: 'Öffentliche Modelle',
    privateModel: 'Private Modelle',
    LLM: 'LLM',
    EMBEDDING: 'Einbettungsmodell',
    RERANKER: 'Rerank',
    STT: 'Sprache-zu-Text',
    TTS: 'TTS',
    IMAGE: 'Vision-Modell',
    TTI: 'Bildgenerierung',
    TTV: 'Text-zu-Video',
    ITV: 'Bild-zu-Video',
  },
  modelForm: {
    title: {
      baseInfo: 'Grundlegende Informationen',
      advancedInfo: 'Erweiterte Einstellungen',
      modelParams: 'Modellparameter',
      paramSetting: 'Modellparameter-Einstellungen',
      apiParamPassing: 'Schnittstellenparameter',
    },
    modeName: {
      label: 'Modellname',
      placeholder: 'Einen Namen für das Basismodell festlegen',
      tooltip: 'Benutzerdefinierter Modellname in MaxKB',
      requiredMessage: 'Modellname darf nicht leer sein',
    },
    permissionType: {
      label: 'Berechtigung',
      privateDesc: 'Nur für den aktuellen Benutzer verfügbar',
      publicDesc: 'Für alle Benutzer verfügbar',
      requiredMessage: 'Berechtigung darf nicht leer sein',
    },
    model_type: {
      label: 'Modelltyp',
      placeholder: 'Einen Modelltyp auswählen',
      tooltip1: 'LLM: Ein Inferenzmodell für AI-Chats in der Anwendung.',
      tooltip2: 'Einbettungsmodell: Ein Modell zur Vektorisierung von Dokumenteninhalten im Wissen.',
      tooltip3: 'Sprache-zu-Text: Ein Modell für Spracherkennung in der Anwendung.',
      tooltip4: 'TTS: Ein Modell für Sprachsynthese in der Anwendung.',
      tooltip5:
        'Rerank: Ein Modell zur Neuordnung von Kandidatensegmenten bei Verwendung mehrerer Abrufwege in der erweiterten Orchestrierungsanwendung.',
      tooltip6:
        'Vision-Modell: Ein visuelles Modell für das Verständnis von Bildern in der erweiterten Orchestrierungsanwendung.',
      tooltip7:
        'Bildgenerierung: Ein visuelles Modell für die Bildgenerierung in der erweiterten Orchestrierungsanwendung.',
      tooltip8:
        'Text-zu-Video: Ein visuelles Modell für Text-zu-Video in der Anwendung.',
      tooltip9:
        'Bild-zu-Video: Ein visuelles Modell für Bild-zu-Video in der Anwendung.',
      requiredMessage: 'Modelltyp darf nicht leer sein',
    },
    base_model: {
      label: 'Basismodell',
      tooltip: 'Für nicht aufgeführte Modelle den Modellnamen eingeben und Enter drücken',
      placeholder: 'Basismodellnamen eingeben und Enter drücken, um hinzuzufügen',
      requiredMessage: 'Basismodell darf nicht leer sein',
    },
  },
  download: {
    downloading: 'Wird heruntergeladen...',
    cancelDownload: 'Download abbrechen',
  },
}
