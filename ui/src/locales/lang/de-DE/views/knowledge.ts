export default {
  title: 'Wissensbasis',
  relatedApplications: 'Verknüpfter Agent',
  document_count: 'Dokumente',
  relatedApp_count: 'verknüpfte Agenten',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt bis zu 50 Wissensbasen. Für mehr Wissensbasen upgraden Sie bitte auf die Professional Edition.',
    syncSuccess: 'Synchronisationsaufgabe erfolgreich gesendet',
    updateModeMessage:
      'Nach dem Ändern des Vektormodells der Wissensbasis muss die Wissensbasis vektorisiert werden. Möchten Sie mit dem Speichern fortfahren?',
  },
  delete: {
    confirmTitle: 'Löschung der Wissensbasis bestätigen:',
    confirmMessage1: 'Diese Wissensbasis ist verknüpft mit',
    confirmMessage2: 'Agenten. Das Löschen ist unwiderruflich, bitte vorsichtig vorgehen.',
    resourceCountMessage: 'Diese Wissensbasis ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte vorsichtig vorgehen.',
  },
  knowledgeType: {
    label: 'Typ',
    generalKnowledge: 'Allgemeine Wissensbasis',
    webKnowledge: 'Web-Wissensbasis',
    larkKnowledge: 'Lark-Wissensbasis',
    workflowKnowledge: 'Workflow-Wissensbasis',
    yuqueKnowledge: 'Yuque-Wissensbasis',
    generalInfo: 'Lokale Dokumente hochladen',
    webInfo: 'Textdaten von einer Website synchronisieren',
    larkInfo: 'Wissensbasis durch Lark-Dokumente erstellen',
    yuqueInfo: 'Wissensbasis durch Yuque-Dokumente erstellen',
    createGeneralKnowledge: 'Allgemeine Wissensbasis erstellen',
    createWebKnowledge: 'Web-Wissensbasis erstellen',
    createLarkKnowledge: 'Lark-Wissensbasis erstellen',
    createYuqueKnowledge: 'Yuque-Wissensbasis erstellen',
    createWorkflowKnowledge: 'Workflow-Wissensbasis erstellen',
    workflowInfo: 'Wissensbasis durch benutzerdefinierte Workflow-Methoden erstellen',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte Wissensbasisnamen eingeben',
      requiredMessage: 'Bitte Wissensbasisnamen eingeben',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreiben Sie den Inhalt der Wissensbasis. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen und verbessert die Genauigkeit des Inhaltsabrufs und der Trefferquote.',
      requiredMessage: 'Bitte Wissensbasisbeschreibung eingeben',
    },
    EmbeddingModel: {
      label: 'Embedding-Modell',
      placeholder: 'Bitte Embedding-Modell auswählen',
      requiredMessage: 'Bitte Embedding-Modell auswählen',
    },
    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte Web-Root-URL eingeben',
      requiredMessage: 'Bitte Web-Root-URL eingeben',
    },
    selector: {
      label: 'Selector',
      placeholder: 'Standard ist body, kann .classname/#idname/tagname eingegeben werden',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochgeladener Dateien',
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
        title: 'Basisvorlage',
        description: 'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Website-Datenquellen',
      },
    },
  },
  ResultSuccess: {
    title: 'Wissensbasis erfolgreich erstellt',
    paragraph: 'Segmente',
    paragraph_count: 'Segmente',
    documentList: 'Dokumentenliste',
    loading: 'Importiere',
    buttons: {
      toKnowledge: 'Zurück zur Wissensbasenliste',
      toDocument: 'Zu Dokumenten gehen',
    },
  },
  syncWeb: {
    title: 'Wissensbasis synchronisieren',
    syncMethod: 'Synchronisationsmethode',
    replace: 'Ersetzende Synchronisation',
    replaceText: 'Website-Dokumente erneut abrufen und die Dokumente in der lokalen Wissensbasis ersetzen',
    complete: 'Vollständige Synchronisation',
    completeText: 'Alle Dokumente in der lokalen Wissensbasis löschen und Website-Dokumente erneut abrufen',
    tip: 'Hinweis: Alle Synchronisationen löschen bestehende Daten und holen neue Daten. Bitte vorsichtig vorgehen.',
  },
}
