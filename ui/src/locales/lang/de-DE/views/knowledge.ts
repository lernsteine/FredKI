export default {
  title: 'Wissen',
  relatedApplications: 'Verknüpfte Anwendung',
  document_count: 'Dokumente',
  relatedApp_count: 'verknüpfte Anwendungen',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
  },
  tip: {
    professionalMessage:
      'Die Community-Edition unterstützt bis zu 50 Wissensbasen. Für mehr Wissensbasen upgraden Sie bitte zur Professional Edition.',
    syncSuccess: 'Synchronisierungsaufgabe erfolgreich gesendet',
    updateModeMessage:
      'Nach Änderung des Vektormodells für das Wissen muss das Wissen neu vektorisiert werden. Möchten Sie das Speichern fortsetzen?',
  },
  delete: {
    confirmTitle: 'Löschung des Wissens bestätigen:',
    confirmMessage1: 'Dieses Wissen ist mit',
    confirmMessage2: 'Anwendung verknüpft. Das Löschen ist irreversibel, bitte vorsichtig vorgehen.',
  },
  knowledgeType: {
    label: 'Typ',
    generalKnowledge: 'Allgemeines Wissen',
    webKnowledge: 'Web-Wissen',
    larkKnowledge: 'Lark-Wissen',
    workflowKnowledge: 'Workflow-Wissen',
    yuqueKnowledge: 'Yuque-Wissen',
    generalInfo: 'Lokale Dokumente hochladen',
    webInfo: 'Textdaten von einer Website synchronisieren',
    larkInfo: 'Wissen aus Lark-Dokumenten aufbauen',
    yuqueInfo: 'Wissen aus Yuque-Dokumenten aufbauen',
    createGeneralKnowledge: 'Allgemeines Wissen erstellen',
    createWebKnowledge: 'Web-Wissen erstellen',
    createLarkKnowledge: 'Lark-Wissen erstellen',
    createYuqueKnowledge: 'Yuque-Wissen erstellen',
    createWorkflowKnowledge: 'Workflow-Wissen erstellen',
    workflowInfo: 'Wissensbasis durch benutzerdefinierte Workflow-Methoden aufbauen',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte geben Sie den Namen des Wissens ein',
      requiredMessage: 'Bitte geben Sie den Namen des Wissens ein',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreiben Sie den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen und verbessert die Genauigkeit sowie Trefferquote beim Abruf.',
      requiredMessage: 'Bitte geben Sie die Beschreibung des Wissens ein',
    },
    EmbeddingModel: {
      label: 'Einbettungsmodell',
      placeholder: 'Bitte wählen Sie ein Einbettungsmodell aus',
      requiredMessage: 'Bitte wählen Sie ein Einbettungsmodell aus',
    },

    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte geben Sie die Web-Root-URL ein',
      requiredMessage: 'Bitte geben Sie die Web-Root-URL ein',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body, Sie können .classname/#idname/tagname eingeben',
    },
    file_count_limit: {
      label: 'Maximale Anzahl hochgeladener Dateien pro Vorgang',
    },
    file_size_limit: {
      label: 'Maximale Größe pro Dokument (MB)',
      placeholder: 'Basierend auf Serverkonfiguration empfohlen, sonst kann der Dienst abstürzen',
    },
    appTemplate: {
      blank: {
        title: 'Leer erstellen',
      },
      basic: {
        title: 'Grundvorlage',
        description: 'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Website-Datenquellen',
      },
    },
  },

  ResultSuccess: {
    title: 'Wissen erfolgreich erstellt',
    paragraph: 'Segmente',
    paragraph_count: 'Segmente',
    documentList: 'Dokumentenliste',
    loading: 'Importieren',
    buttons: {
      toKnowledge: 'Zurück zur Wissensliste',
      toDocument: 'Zum Dokument gehen',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisationsmethode',
    replace: 'Ersetzende Synchronisation',
    replaceText: 'Website-Dokumente neu abrufen und lokale Dokumente im Wissen ersetzen',
    complete: 'Vollständige Synchronisation',
    completeText: 'Alle lokalen Dokumente im Wissen löschen und Website-Dokumente neu abrufen',
    tip: 'Hinweis: Bei jeder Synchronisation werden bestehende Daten gelöscht und neue abgerufen. Bitte vorsichtig vorgehen.',
  },
}
