export default {
  title: 'Modell',
  provider: 'Anbieter',
  providerPlaceholder: 'Anbieter auswählen',
  addModel: 'Modell hinzufügen',

  delete: {
    confirmTitle: 'Modell löschen:',
    confirmMessage:
      'Das Löschen des Modells wirkt sich auf aktuell verwendete Ressourcen aus. Bitte mit Vorsicht fortfahren.',
  },
  tip: {
    createSuccessMessage: 'Modell erfolgreich erstellt',
    createErrorMessage: 'Fehler in den Basisinformationen',
    errorMessage: 'Variable existiert bereits: ',
    emptyMessage1: 'Bitte zuerst in den Basisinformationen Modelltyp und Basismodell auswählen',
    emptyMessage2: 'Das ausgewählte Modell unterstützt keine Parameter-Einstellungen',
    updateSuccessMessage: 'Modell erfolgreich aktualisiert',
    saveSuccessMessage: 'Modellparameter erfolgreich gespeichert',
    downloadError: 'Download fehlgeschlagen',
    noModel: 'Modell in Ollama nicht vorhanden',
  },
  modelType: {
    allModel: 'Alle Modelle',
    publicModel: 'Öffentliche Modelle',
    privateModel: 'Private Modelle',
    LLM: 'LLM',
    EMBEDDING: 'Embedding-Modell',
    RERANKER: 'Rerank',
    STT: 'Speech2Text',
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
      paramSetting: 'Modellparametereinstellungen',
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
      privateDesc: 'Nur für aktuellen Benutzer verfügbar',
      publicDesc: 'Für alle Benutzer verfügbar',
      requiredMessage: 'Berechtigung darf nicht leer sein',
    },
    model_type: {
      label: 'Modelltyp',
      placeholder: 'Modelltyp auswählen',
      tooltip1: 'LLM: Inferenzmodell für AI-Chats in der APP.',
      tooltip2: 'Embedding-Modell: Für die Vektorisierung von Dokumentinhalten im Wissen.',
      tooltip3: 'Speech2Text: Für Spracherkennung in der APP.',
      tooltip4: 'TTS: Für Text-zu-Sprache in der APP.',
      tooltip5:
        'Rerank: Zum Neuordnen von Kandidatenabschnitten bei Mehrwege-Recall in Advanced-Orchestration-APPs.',
      tooltip6:
        'Vision-Modell: Visuelles Modell für Bildverständnis in Advanced-Orchestration-APPs.',
      tooltip7:
        'Bildgenerierung: Visuelles Modell zur Bilderzeugung in Advanced-Orchestration-APPs.',
      tooltip8:
        'Text-zu-Video: Visuelles Modell für Text-zu-Video in der APP.',
      tooltip9:
        'Bild-zu-Video: Visuelles Modell für Bild-zu-Video in der APP.',
      requiredMessage: 'Modelltyp darf nicht leer sein',
    },
    base_model: {
      label: 'Basismodell',
      tooltip: 'Für nicht gelistete Modelle den Modellnamen eingeben und Enter drücken',
      placeholder: 'Basismodell eingeben und mit Enter hinzufügen',
      requiredMessage: 'Basismodell darf nicht leer sein',
    },
  },
  download: {
    downloading: 'Wird heruntergeladen …',
    cancelDownload: 'Download abbrechen',
  },
}
