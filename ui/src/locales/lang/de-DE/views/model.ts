export default {
  title: 'Modell',
  provider: 'Anbieter',
  providerPlaceholder: 'Anbieter auswählen',
  addModel: 'Modell hinzufügen',
  delete: {
    confirmTitle: 'Modell löschen:',
    confirmMessage:
      'Das Löschen des Modells wirkt sich auf die aktuell verwendenden Ressourcen aus. Bitte vorsichtig vorgehen.',
    resourceCountMessage: 'Dieses Modell ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte vorsichtig vorgehen.',
  },
  tip: {
    createSuccessMessage: 'Modell erfolgreich erstellt',
    createErrorMessage: 'Es gibt Fehler in den Basisinformationen',
    errorMessage: 'Variable existiert bereits: ',
    emptyMessage1: 'Bitte zuerst Modelltyp und Basismodell in den Basisinformationen auswählen',
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
    EMBEDDING: 'Embedding-Modell',
    RERANKER: 'Re-Rank',
    STT: 'Sprache-zu-Text',
    TTS: 'TTS',
    IMAGE: 'Vision-Modell',
    TTI: 'Bildgenerierung',
    TTV: 'Text-zu-Video',
    ITV: 'Bild-zu-Video',
  },
  modelForm: {
    title: {
      baseInfo: 'Basisinformationen',
      advancedInfo: 'Erweiterte Einstellungen',
      modelParams: 'Modellparameter',
      paramSetting: 'Modellparameter-Einstellungen',
      apiParamPassing: 'Schnittstellenparameter',
    },
    modeName: {
      label: 'Modellname',
      placeholder: 'Legen Sie einen Namen für das Basismodell fest',
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
      placeholder: 'Modelltyp auswählen',
      tooltip1: 'LLM: Ein Inferenzmodell für KI-Chats im Agenten.',
      tooltip2: 'Embedding-Modell: Ein Modell zur Vektorisierung von Dokumentinhalten in der Wissensbasis.',
      tooltip3: 'Sprache-zu-Text: Ein Modell für Spracherkennung im Agenten.',
      tooltip4: 'TTS: Ein Modell für Text-to-Speech im Agenten.',
      tooltip5:
        'Re-Rank: Ein Modell zum Neuordnen von Kandidatensegmenten bei Mehrwege-Abruf im fortgeschrittenen Orchestrierungs-Agenten.',
      tooltip6:
        'Vision-Modell: Ein visuelles Modell für Bildverstehen im fortgeschrittenen Orchestrierungs-Agenten.',
      tooltip7:
        'Bildgenerierung: Ein visuelles Modell für Bildgenerierung im fortgeschrittenen Orchestrierungs-Agenten.',
      tooltip8:
        'Text-zu-Video: Ein visuelles Modell für Text-zu-Video im Agenten.',
      tooltip9:
        'Bild-zu-Video: Ein visuelles Modell für Bild-zu-Video im Agenten.',
      requiredMessage: 'Modelltyp darf nicht leer sein',
    },
    base_model: {
      label: 'Basismodell',
      tooltip: 'Für nicht aufgeführte Modelle Modellnamen eingeben und Enter drücken',
      placeholder: 'Basismodellnamen eingeben und Enter drücken, um hinzuzufügen',
      requiredMessage: 'Basismodell darf nicht leer sein',
    },
  },
  download: {
    downloading: 'Lade herunter...',
    cancelDownload: 'Download abbrechen',
  },
}
