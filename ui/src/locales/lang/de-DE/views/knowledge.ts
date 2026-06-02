export default {
  title: 'Wissensdatenbank',
  relatedApplications: 'Verknüpfter Agent',
  document_count: 'Dokumente',
  relatedApp_count: 'verknüpfte Agenten',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisierung',
    tokenize: 'Tokenisierung',
  },
  tip: {
    professionalMessage:
      'Die Community-Edition unterstützt bis zu 50 Wissensdatenbanken. Für mehr Umfang aktualisiere bitte auf die Professional-Edition.',
    syncSuccess: 'Synchronisierungsaufgabe erfolgreich gesendet',
    updateModeMessage:
      'Nach dem Ändern des Wissens-Vektormodells müssen die Daten neu vektorisiert werden. Möchtest du mit dem Speichern fortfahren?',
  },
  delete: {
    confirmTitle: 'Löschen der Wissensdatenbank bestätigen:',
    confirmTitle2: 'wiederrufen?',
    confirmMessage1: 'Diese Wissensdatenbank ist verknüpft mit',
    confirmMessage2: 'Agenten. Das Löschen kann nicht rückgängig gemacht werden, bitte gehe mit Vorsicht vor.',
    resourceCountMessage:
      'Diese Wissensdatenbank ist mit {count} Ressourcen verknüpft und steht nach dem Löschen nicht mehr zur Verfügung. Bitte gehe mit Vorsicht vor.',
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
    workflowInfo: 'Aufbau einer Wissensdatenbank durch benutzerdefinierte Workflow-Methoden',
  },
  form: {
    knowledgeName: {
      label: 'Name',
      placeholder: 'Bitte gib den Namen der Wissensdatenbank ein',
      requiredMessage: 'Bitte gib den Namen der Wissensdatenbank ein',
    },
    knowledgeDescription: {
      label: 'Beschreibung',
      placeholder:
        'Beschreibe den Inhalt des Wissens. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen, was die Genauigkeit beim Abrufen und die Trefferquote erhöht.',
      requiredMessage: 'Bitte gib die Beschreibung der Wissensdatenbank ein',
    },
    EmbeddingModel: {
      label: 'Embedding-Modell',
      placeholder: 'Bitte wähle ein Embedding-Modell aus',
      requiredMessage: 'Bitte wähle das Embedding-Modell aus',
    },

    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte gib die Web-Root-URL ein',
      requiredMessage: 'Bitte gib die Web-Root-URL ein',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist „body“, Eingabe von .klassenname/#id-name/tag-name möglich',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochgeladener Dateien',
    },
    file_size_limit: {
      label: 'Maximale Größe pro Dokument (MB)',
      placeholder: 'Empfehlung basierend auf der Serverkonfiguration, andernfalls kann es zum Systemabsturz führen',
    },
    appTemplate: {
      blank: {
        title: 'Leere Erstellung',
      },
      basic: {
        title: 'Basis-Vorlage',
        description:
          'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Website-Datenquellen',
      },
    },
  },

  ResultSuccess: {
    title: 'Wissensdatenbank erfolgreich erstellt',
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
    replace: 'Ersetzende Synchronisierung',
    replaceText: 'Website-Dokumente neu abrufen und die Dokumente im lokalen Wissen ersetzen',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Alle Dokumente im lokalen Wissen löschen und Website-Dokumente neu abrufen',
    tip: 'Hinweis: Alle Synchronisierungen löschen bestehende Daten und rufen neue Daten ab. Bitte gehe mit Vorsicht vor.',
  },
  transform: {
    button: 'Konvertieren',
    title: 'In Workflow-Wissensdatenbank konvertieren',
    message1:
      'Du kannst deine bestehende Wissensdatenbank jetzt in eine Workflow-Wissensdatenbank konvertieren. Dieser offenere und flexiblere Typ ermöglicht es dir, den gesamten Prozess von verschiedenen Datenquellen bis hin zum Schreiben in die Wissensdatenbank über Drag-and-Drop-Knotenoperationen selbstständig zu steuern, um das maßgeschneiderte Wissensmanagement deines Unternehmens zu erfüllen. Du kannst die in unserer Suite verfügbaren Datenquellen und Tools nutzen.',
    message2: 'Die neue Verarbeitungsmethode wird auf alle danach importierten Dokumente angewendet.',
    tip: 'Hinweis: Die Konvertierung kann nicht rückgängig gemacht werden.',
    confirm:
      'Bist du sicher, dass du in eine Workflow-Wissensdatenbank konvertieren möchtest? Diese Aktion kann nicht rückgängig gemacht werden. Bitte gehe mit Vorsicht vor.',
  },
  customSegmentation: {
    title: 'Benutzerdefinierter Begriff',
    tip: 'Verhindert, dass Fachbegriffe getrennt werden, und verbessert die Genauigkeit sowie die Trefferquote (Recall) der Volltextsuche',
    create: 'Begriff erstellen',
    quickCreate: 'Begriff schnell erstellen',
    word: 'Begriff',
    wordplaceholder:
      'Bitte gib die zu erhaltenden Fachbegriffe/eindeutigen Vokabeln ein, einen pro Zeile',
    wordRequiredMessage: 'Bitte gib einen Begriff ein',
    wordIndexing: 'Begriffsindexierung',
  },
}
