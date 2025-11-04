export default {
  title: 'Wissen',
  relatedApplications: 'Verknüpfte App',
  document_count: 'Dokumente',
  relatedApp_count: 'verknüpfte Apps',
  searchBar: {
    placeholder: 'Nach Name suchen',
  },
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt bis zu 50 Wissenseinträge. Für mehr Wissen bitte auf die Professional Edition upgraden.',
    syncSuccess: 'Synchronisierungsauftrag erfolgreich gesendet',
    updateModeMessage:
      'Nach Änderung des Wissens-Vektormodells muss das Wissen neu vektorisiert werden. Möchtest du trotzdem speichern?',
  },
  delete: {
    confirmTitle: 'Löschen des Wissenseintrags bestätigen:',
    confirmMessage1: 'Dieses Wissen ist verknüpft mit',
    confirmMessage2: 'APP. Das Löschen ist irreversibel – bitte mit Vorsicht fortfahren.',
  },
  knowledgeType: {
    label: 'Typ',
    generalKnowledge: 'Allgemeines Wissen',
    webKnowledge: 'Web-Wissen',
    larkKnowledge: 'Lark-Wissen',
    yuqueKnowledge: 'Yuque-Wissen',
    generalInfo: 'Lokale Dokumente hochladen',
    webInfo: 'Textdaten von einer Website synchronisieren',
    larkInfo: 'Wissen aus Lark-Dokumenten aufbauen',
    yuqueInfo: 'Wissen aus Yuque-Dokumenten aufbauen',
    createGeneralKnowledge: 'Allgemeines Wissen erstellen',
    createWebKnowledge: 'Web-Wissen erstellen',
    createLarkKnowledge: 'Lark-Wissen erstellen',
    createYuqueKnowledge: 'Yuque-Wissen erstellen',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte Wissensnamen eingeben',
      requiredMessage: 'Bitte Wissensnamen eingeben',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreibe den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen und die Treffgenauigkeit zu verbessern.',
      requiredMessage: 'Bitte Wissensbeschreibung eingeben',
    },
    EmbeddingModel: {
      label: 'Embedding-Modell',
      placeholder: 'Bitte ein Embedding-Modell auswählen',
      requiredMessage: 'Bitte ein Embedding-Modell auswählen',
    },

    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte die Web-Root-URL eingeben',
      requiredMessage: 'Bitte die Web-Root-URL eingeben',
    },
    selector: {
      label: 'Selector',
      placeholder: 'Standard ist body; alternativ .classname/#idname/tagname',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochgeladener Dateien',
    },
    file_size_limit: {
      label: 'Maximale Größe pro Dokument (MB)',
      placeholder: 'Abhängig von der Serverkonfiguration, sonst kann es zu Ausfällen kommen',
    },
  },

  ResultSuccess: {
    title: 'Wissen erfolgreich erstellt',
    paragraph: 'Segmente',
    paragraph_count: 'Segmente',
    documentList: 'Dokumentenliste',
    loading: 'Import läuft',
    buttons: {
      toKnowledge: 'Zur Wissensliste zurückkehren',
      toDocument: 'Zum Dokument wechseln',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisierungsmethode',
    replace: 'Ersetzen & synchronisieren',
    replaceText: 'Website-Dokumente erneut abrufen und lokale Dokumente ersetzen',
    complete: 'Vollständige Synchronisierung',
    completeText:
      'Alle lokalen Dokumente löschen und Website-Dokumente erneut abrufen',
    tip: 'Hinweis: Jede Synchronisierung löscht bestehende Daten und ruft neue ab. Bitte mit Vorsicht fortfahren.',
  },
}
