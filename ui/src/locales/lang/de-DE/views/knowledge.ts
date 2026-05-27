export default {
  title: 'Wissen',
  relatedApplications: 'Verknüpfter Agent',
  document_count: 'Dokumente',
  relatedApp_count: 'Verknüpfte Agenten',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
    tokenize: 'Tokenisieren',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt maximal 50 Wissensbasen. Für mehr Wissensbasen upgraden Sie bitte auf die Professional Edition.',
    syncSuccess: 'Synchronisierungsauftrag erfolgreich gesendet',
    updateModeMessage:
      'Nach Änderung des Vektormodells für das Wissen müssen Sie das Wissen vektorisieren. Möchten Sie trotzdem speichern?',
  },
  delete: {
    confirmTitle: 'Löschen des Wissens bestätigen:',
    confirmTitle2: 'Wissensbasen?',
    confirmMessage1: 'Dieses Wissen ist verknüpft mit',
    confirmMessage2: 'Agent. Das Löschen ist irreversibel, bitte gehen Sie vorsichtig vor.',
    resourceCountMessage:
      'Dieses Wissen ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte gehen Sie vorsichtig vor.',
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
    workflowInfo: 'Aufbau einer Wissensbasis durch benutzerdefinierte Workflow-Methoden',
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
        'Beschreiben Sie den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen und verbessert die Genauigkeit der Inhaltsabrufung sowie die Trefferquote.',
      requiredMessage: 'Bitte geben Sie eine Beschreibung des Wissens ein',
    },
    EmbeddingModel: {
      label: 'Embedding-Modell',
      placeholder: 'Bitte wählen Sie ein Embedding-Modell aus',
      requiredMessage: 'Bitte wählen Sie ein Embedding-Modell aus',
    },
    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte geben Sie die Web-Root-URL ein',
      requiredMessage: 'Bitte geben Sie die Web-Root-URL ein',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body, kann .classname/#idname/tagname sein',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochladbarer Dateien',
    },
    file_size_limit: {
      label: 'Maximale Größe pro Dokument (MB)',
      placeholder: 'Empfohlen entsprechend der Serverkonfiguration, sonst kann es zum Absturz des Dienstes kommen',
    },
    appTemplate: {
      blank: {
        title: 'Leere Erstellung',
      },
      basic: {
        title: 'Basisvorlage',
        description:
          'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Webseiten-Datenquellen',
      },
    },
  },
  ResultSuccess: {
    title: 'Wissen erfolgreich erstellt',
    paragraph: 'Abschnitte',
    paragraph_count: 'Abschnitte',
    documentList: 'Dokumentenliste',
    loading: 'Importiere',
    buttons: {
      toKnowledge: 'Zur Wissensliste',
      toDocument: 'Zum Dokument',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisierungsmethode',
    replace: 'Ersetzen-Sync',
    replaceText: 'Webseiten-Dokumente erneut abrufen und die lokalen Dokumente ersetzen',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Alle lokalen Dokumente löschen und Webseiten-Dokumente neu abrufen',
    tip: 'Hinweis: Bei jeder Synchronisierung werden vorhandene Daten gelöscht und neue Daten abgerufen. Bitte gehen Sie vorsichtig vor.',
  },
  transform: {
    button: 'Umwandeln',
    title: 'In Workflow-Wissensbasis umwandeln',
    message1:
      "Sie können Ihre bestehende Wissensbasis jetzt in eine Workflow-Wissensbasis umwandeln – einen offeneren und flexibleren Typ, der es Ihnen ermöglicht, den gesamten Prozess von verschiedenen Datenquellen bis zum Schreiben in die Wissensbasis per Drag-and-Drop selbst zu orchestrieren und die personalisierten Anforderungen Ihres Unternehmens zu erfüllen. Sie können die verfügbaren Datenquellen und Tools unseres Systems nutzen.",
    message2: 'Die neue Verarbeitungsmethode wird auf alle zukünftig importierten Dokumente angewendet.',
    tip: 'Hinweis: Die Umwandlung kann nicht rückgängig gemacht werden.',
    confirm:
      'Sind Sie sicher, dass Sie in eine Workflow-Wissensbasis umwandeln möchten? Diese Aktion kann nicht rückgängig gemacht werden. Bitte gehen Sie vorsichtig vor.',
  },
  customSegmentation: {
    title: 'Benutzerdefinierte Segmentierung',
    tip: 'Vermeiden Sie das Aufteilen von Fachbegriffen und verbessern Sie die Genauigkeit und Trefferquote der Volltextsuche',
    create: 'Begriff erstellen',
    quickCreate: 'Schnell Begriff erstellen',
    word: 'Begriff',
    wordplaceholder:
      'Bitte geben Sie die Fachbegriffe/einzigartigen Vokabeln ein, die beibehalten werden sollen (einer pro Zeile)',
    wordRequiredMessage: 'Bitte geben Sie einen Begriff ein',
    wordIndexing: 'Begriffsindexierung',
  },
}
