export default {
  title: 'Wissensdatenbank',
  document_count: 'Anzahl der Dokumente',
  relatedApp_count: 'Verknüpfte Agenten',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisierung',
    tokenize: 'Tokenisierung',
  },

  tip: {
    professionalMessage: 'Die Community-Edition unterstützt bis zu 50 Wissensdatenbanken. Für mehr Umfang bitte auf die Professional-Edition aktualisieren.',
    syncSuccess: 'Synchronisierungsaufgabe erfolgreich gesendet',
    updateModeMessage: 'Nach dem Ändern des Vektormodells muss die Wissensdatenbank neu vektorisiert werden. Möchtest du mit dem Speichern fortfahren?',
  },
  delete: {
    confirmTitle: 'Löschen der Wissensdatenbank bestätigen:',
    confirmTitle2: 'Wissensdatenbanken?',
    confirmMessage1: 'Diese Wissensdatenbank ist verknüpft mit',
    confirmMessage2: 'Agenten. Das Löschen kann nicht rückgängig gemacht werden, bitte gehe mit Vorsicht vor.',
    resourceCountMessage: 'Diese Wissensdatenbank ist mit {count} Ressourcen verknüpft und steht nach dem Löschen nicht mehr zur Verfügung. Bitte gehe mit Vorsicht vor.',
  },
  knowledgeType: {
    label: 'Typ der Wissensdatenbank',
    generalKnowledge: 'Allgemeine Wissensdatenbank',
    webKnowledge: 'Web-Wissensdatenbank',
    larkKnowledge: 'Lark-Wissensdatenbank',
    workflowKnowledge: 'Workflow-Wissensdatenbank',
    yuqueKnowledge: 'Yuque-Wissensdatenbank',
    generalInfo: 'Wissensdatenbank durch Hochladen von Dateien oder manuelle Eingabe erstellen',
    webInfo: 'Wissensdatenbank über Website-Links erstellen',
    larkInfo: 'Wissensdatenbank aus Lark-Dokumenten erstellen',
    yuqueInfo: 'Wissensdatenbank aus Yuque-Dokumenten erstellen',
    createGeneralKnowledge: 'Allgemeine Wissensdatenbank erstellen',
    createWebKnowledge: 'Web-Wissensdatenbank erstellen',
    createLarkKnowledge: 'Lark-Wissensdatenbank erstellen',
    createYuqueKnowledge: 'Yuque-Wissensdatenbank erstellen',
    createWorkflowKnowledge: 'Workflow-Wissensdatenbank erstellen',
    workflowInfo: 'Aufbau einer Wissensdatenbank durch benutzerdefinierte Workflow-Methoden',
  },
  form: {
    knowledgeName: {
      label: 'Name der Wissensdatenbank',
      placeholder: 'Bitte gib den Namen der Wissensdatenbank ein',
      requiredMessage: 'Bitte gib den Namen der Wissensdatenbank ein',
    },
    knowledgeDescription: {
      label: 'Beschreibung der Wissensdatenbank',
      placeholder:
        'Beschreibe den Inhalt der Wissensdatenbank. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen, was die Genauigkeit beim Abrufen und die Trefferquote erhöht.',
      requiredMessage: 'Bitte gib die Beschreibung der Wissensdatenbank ein',
    },
    EmbeddingModel: {
      label: 'Vektormodell',
      placeholder: 'Bitte wähle ein Vektormodell aus',
      requiredMessage: 'Bitte wähle das Vektormodell aus',
    },

    source_url: {
      label: 'Web-Root-URL',
      placeholder: 'Bitte gib die Web-Root-URL ein',
      requiredMessage: 'Bitte gib die Web-Root-URL ein',
    },
    user_id: {
      requiredMessage: 'Bitte gib die Benutzer-ID ein',
    },
    token: {
      requiredMessage: 'Bitte gib das Token ein',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist „body“, Eingabe von .klassenname/#id-name/tag-name möglich',
    },
    file_count_limit: {
      label: 'Maximale Anzahl gleichzeitig hochgeladener Dateien',
    },
    file_size_limit: {
      label: 'Maximale Größe pro hochgeladenem Dokument (MB)',
      placeholder: 'Empfehlung basierend auf der Serverkonfiguration, andernfalls kann es zum Systemabsturz führen',
    },
    appTemplate: {
      blank: {
        title: 'Leere Erstellung',
      },
      basic: {
        title: 'Basis-Vorlage',
        description: 'Unterstützt grundlegende Workflow-Vorlagen für lokale Dateien, Lark-Dokumente und Website-Datenquellen',
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
      toKnowledge: 'Zurück zur Liste der Wissensdatenbanken',
      toDocument: 'Zum Dokument',
    },
  },
  syncWeb: {
    title: 'Wissensdatenbank synchronisieren',
    syncMethod: 'Synchronisierungsmethode',
    replace: 'Ersetzende Synchronisierung',
    replaceText: 'Website-Dokumente neu abrufen und die Dokumente in der lokalen Wissensdatenbank überschreiben',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Zuerst alle Dokumente in der lokalen Wissensdatenbank löschen und Website-Dokumente neu abrufen',
    tip: 'Hinweis: Alle Synchronisierungen löschen bestehende Daten und rufen neue Daten ab. Bitte gehe mit Vorsicht vor.',
  },

  transform: {
    button: 'Konvertieren',
    title: 'In Workflow-Wissensdatenbank konvertieren',
    message1:
      'Du kannst deine bestehende Wissensdatenbank jetzt in eine Workflow-Wissensdatenbank konvertieren – eine offenere und flexiblere Form der Wissensdatenbank, die es dir ermöglicht, den gesamten Prozess von verschiedenen Datenquellen bis hin zum Schreiben in die Wissensdatenbank über Drag-and-Drop-Knoten selbstständig zu steuern, um die individuellen Anforderungen deines Unternehmens an das Wissensmanagement zu erfüllen. Du kannst die Datenquellen und Werkzeuge in unserer Suite nutzen.',
    message2: 'Die neue Verarbeitungsmethode wird auf alle danach importierten Dokumente angewendet.',
    tip: 'Hinweis: Die Konvertierung kann nicht rückgängig gemacht werden.',
    comfirm: 'Bist du sicher, dass du in eine Workflow-Wissensdatenbank konvertieren möchtest? Diese Aktion kann nicht rückgängig gemacht werden. Bitte gehe mit Vorsicht vor.',
  },
  customSegmentation: {
    title: 'Benutzerdefinierte Tokenisierung',
    tip: 'Verhindert, dass Fachbegriffe getrennt werden, und verbessert die Genauigkeit sowie die Trefferquote (Recall) der Volltextsuche',
    create: 'Begriff erstellen',
    quickCreate: 'Begriff schnell erstellen',
    word: 'Begriff',
    wordplaceholder: 'Bitte gib die zu erhaltenden Fachbegriffe/eindeutigen Vokabeln ein, einen pro Zeile',
    wordRequiredMessage: 'Bitte gib einen Begriff ein',
    wordIndexing: 'Tokenisierungsindex',
  },
}
