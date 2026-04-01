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
      'Nach Änderung des Vektormodells für das Wissen müssen Sie das Wissen vektorisieren. Möchten Sie trotzdem speichern?',
  },
  delete: {
    confirmTitle: 'Löschung des Wissens bestätigen:',
    confirmTitle2: 'Wissensbasen?',
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
    larkInfo: 'Wissen über Lark-Dokumente aufbauen',
    yuqueInfo: 'Wissen über Yuque-Dokumente aufbauen',
    createGeneralKnowledge: 'Allgemeines Wissen erstellen',
    createWebKnowledge: 'Web-Wissen erstellen',
    createLarkKnowledge: 'Lark-Wissen erstellen',
    createYuqueKnowledge: 'Yuque-Wissen erstellen',
    createWorkflowKnowledge: 'Workflow-Wissen erstellen',
    workflowInfo: 'Aufbau einer Wissensbasis über benutzerdefinierte Workflow-Methoden',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte Namen des Wissens eingeben',
      requiredMessage: 'Bitte Namen des Wissens eingeben',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreiben Sie den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen und die Genauigkeit der Inhaltsabrufung sowie die Trefferquote zu verbessern.',
      requiredMessage: 'Bitte Beschreibung des Wissens eingeben',
    },
    EmbeddingModel: {
      label: 'Einbettungsmodell',
      placeholder: 'Bitte Einbettungsmodell auswählen',
      requiredMessage: 'Bitte Einbettungsmodell auswählen',
    },
    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte Web-Root-URL eingeben',
      requiredMessage: 'Bitte Web-Root-URL eingeben',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body, kann .classname/#idname/tagname eingegeben werden',
    },
    file_count_limit: {
      label: 'Maximale Anzahl Dateien pro Upload',
    },
    file_size_limit: {
      label: 'Maximale Größe pro Dokument (MB)',
      placeholder: 'Empfehlung basierend auf Server-Konfiguration, andernfalls kann es zu Dienstunterbrechungen kommen',
    },
    appTemplate: {
      blank: {
        title: 'Leere Erstellung',
      },
      basic: {
        title: 'Basis-Vorlage',
        description:
          'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Webseiten-Datenquellen',
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
      toKnowledge: 'Zur Wissensliste',
      toDocument: 'Zum Dokument',
    },
  },
  syncWeb: {
    title: 'Wissen synchronisieren',
    syncMethod: 'Synchronisierungsmethode',
    replace: 'Ersetzen-Synchronisierung',
    replaceText: 'Webseiten-Dokumente erneut abrufen und die lokalen Dokumente ersetzen',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Alle lokalen Dokumente löschen und Webseiten-Dokumente neu abrufen',
    tip: 'Hinweis: Alle Synchronisierungen löschen vorhandene Daten und holen neue Daten. Bitte vorsichtig vorgehen.',
  },
  transform: {
    button: 'Umwandeln',
    title: 'In Workflow-Wissensbasis umwandeln',
    message1:
      'Sie können Ihre bestehende Wissensbasis jetzt in eine Workflow-Wissensbasis umwandeln – einen offeneren und flexibleren Typ, der es Ihnen ermöglicht, den gesamten Prozess von verschiedenen Datenquellen bis zum Schreiben in die Wissensbasis per Drag-and-Drop autonom zu orchestrieren und so die individuellen Wissensmanagement-Anforderungen Ihres Unternehmens zu erfüllen. Sie können die in unserem Paket verfügbaren Datenquellen und Tools nutzen.',
    message2: 'Die neue Verarbeitungsmethode wird auf alle zukünftig importierten Dokumente angewendet.',
    tip: 'Hinweis: Die Umwandlung kann nicht rückgängig gemacht werden.',
    confirm:
      'Möchten Sie wirklich in die Workflow-Wissensbasis umwandeln? Diese Aktion kann nicht rückgängig gemacht werden. Bitte vorsichtig vorgehen.',
  },
}
