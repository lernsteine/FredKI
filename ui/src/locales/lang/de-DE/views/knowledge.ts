export default {
  title: 'Wissen',
  relatedApplications: 'Verknüpfter Agent',
  document_count: 'Dokumente',
  relatedApp_count: 'verknüpfte Agenten',
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
    confirmMessage1: 'Dieses Wissen ist verknüpft mit',
    confirmMessage2: 'Agent. Das Löschen ist irreversibel, bitte vorsichtig vorgehen.',
    resourceCountMessage:
      'Dieses Wissen ist mit {count} Ressourcen verknüpft und wird nach dem Löschen nicht mehr verfügbar sein. Bitte vorsichtig vorgehen.',
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
    larkInfo: 'Wissen durch Lark-Dokumente aufbauen',
    yuqueInfo: 'Wissen durch Yuque-Dokumente aufbauen',
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
      requiredMessage: 'Bitte wählen Sie das Einbettungsmodell aus',
    },
    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte geben Sie die Web-Root-URL ein',
      requiredMessage: 'Bitte geben Sie die Web-Root-URL ein',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body, kann .classname/#idname/tagname eingegeben werden',
    },
    file_count_limit: {
      label: 'Maximale Anzahl hochgeladener Dateien auf einmal',
    },
    file_size_limit: {
      label: 'Maximale Größe jedes Dokuments (MB)',
      placeholder: 'Empfehlung basierend auf Serverkonfiguration, sonst kann der Dienst ausfallen',
    },
    appTemplate: {
      blank: {
        title: 'Leer erstellen',
      },
      basic: {
        title: 'Grundvorlage',
        description:
          'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Website-Datenquellen',
      },
    },
  },
  ResultSuccess: {
    title: 'Wissen erfolgreich erstellt',
    paragraph: 'Segmente',
    paragraph_count: 'Segmente',
    documentList: 'Dokumentenliste',
    loading: 'Wird importiert',
    buttons: {
      toKnowledge: 'Zur Wissensliste zurückkehren',
      toDocument: 'Zum Dokument gehen',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisationsmethode',
    replace: 'Ersetzende Synchronisation',
    replaceText: 'Website-Dokumente neu abrufen und die Dokumente im lokalen Wissen ersetzen',
    complete: 'Vollständige Synchronisation',
    completeText: 'Alle Dokumente im lokalen Wissen löschen und Website-Dokumente neu abrufen',
    tip: 'Hinweis: Bei jeder Synchronisation werden bestehende Daten gelöscht und neue abgerufen. Bitte vorsichtig vorgehen.',
  },
  transform: {
    button: 'Umwandeln',
    title: 'In Workflow-Wissensbasis umwandeln',
    message1:
      'Sie können Ihre bestehende Wissensbasis jetzt in eine Workflow-Wissensbasis umwandeln – eine offenere und flexiblere Art, die es Ihnen erlaubt, den gesamten Prozess von verschiedenen Datenquellen bis zum Schreiben in die Wissensbasis autonom per Drag-and-Drop-Node-Operationen zu orchestrieren und so den personalisierten Wissensmanagement-Bedarf Ihres Unternehmens zu erfüllen. Sie können die in unserem Paket verfügbaren Datenquellen und Tools nutzen.',
    message2: 'Die neue Verarbeitungsmethode wird auf alle danach importierten Dokumente angewendet.',
    tip: 'Hinweis: Die Umwandlung kann nicht rückgängig gemacht werden.',
    confirm:
      'Sind Sie sicher, dass Sie in die Workflow-Wissensbasis umwandeln möchten? Diese Aktion kann nicht rückgängig gemacht werden. Bitte vorsichtig vorgehen.',
  },
}
