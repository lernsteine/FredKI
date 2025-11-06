export default {
  title: 'Wissensdatenbank',
  document_count: 'Anzahl der Dokumente',
  relatedApp_count: 'Verknüpfte Anwendungen',
  setting: {
    vectorization: 'Vektorisierung',
    sync: 'Synchronisieren',
  },
  tip: {
    professionalMessage: 'Die Community Edition unterstützt maximal 50 Wissensdatenbanken. Für mehr bitte auf die Professional Edition upgraden.',
    syncSuccess: 'Synchronisierungsauftrag erfolgreich gesendet',
    updateModeMessage: 'Nach Änderung des Vektormodells muss die Wissensdatenbank neu vektorisiert werden. Möchten Sie trotzdem speichern?',
  },
  delete: {
    confirmTitle: 'Wissensdatenbank löschen:',
    confirmMessage1: 'Diese Wissensdatenbank ist mit',
    confirmMessage2: 'Anwendungen verknüpft. Nach dem Löschen kann sie nicht wiederhergestellt werden. Bitte vorsichtig vorgehen.',
  },
  knowledgeType: {
    label: 'Typ der Wissensdatenbank',
    generalKnowledge: 'Allgemeine Wissensdatenbank',
    webKnowledge: 'Web-Wissensdatenbank',
    larkKnowledge: 'Feishu-Wissensdatenbank',
    yuqueKnowledge: 'Yuque-Wissensdatenbank',
    generalInfo: 'Erstellung durch Datei-Upload oder manuelle Eingabe',
    webInfo: 'Erstellung durch Weblink-Import',
    larkInfo: 'Erstellung aus Feishu-Dokumenten',
    yuqueInfo: 'Erstellung aus Yuque-Dokumenten',
    createGeneralKnowledge: 'Allgemeine Wissensdatenbank erstellen',
    createWebKnowledge: 'Web-Wissensdatenbank erstellen',
    createLarkKnowledge: 'Feishu-Wissensdatenbank erstellen',
    createYuqueKnowledge: 'Yuque-Wissensdatenbank erstellen',
  },
  form: {
    knowledgeName: {
      label: 'Name der Wissensdatenbank',
      placeholder: 'Bitte Namen der Wissensdatenbank eingeben',
      requiredMessage: 'Bitte Namen der Wissensdatenbank eingeben',
    },
    knowledgeDescription: {
      label: 'Beschreibung der Wissensdatenbank',
      placeholder:
        'Beschreiben Sie den Inhalt der Wissensdatenbank. Eine detaillierte Beschreibung hilft der KI, den Inhalt besser zu verstehen, relevantere Ergebnisse zu liefern und die Trefferquote zu erhöhen.',
      requiredMessage: 'Bitte Beschreibung der Wissensdatenbank eingeben',
    },
    EmbeddingModel: {
      label: 'Vektormodell',
      placeholder: 'Bitte Vektormodell auswählen',
      requiredMessage: 'Bitte Vektormodell auswählen',
    },
    source_url: {
      label: 'Web-Stammadresse',
      placeholder: 'Bitte Web-Stammadresse eingeben',
      requiredMessage: 'Bitte Web-Stammadresse eingeben',
    },
    user_id: {
      requiredMessage: 'Bitte User ID eingeben',
    },
    token: {
      requiredMessage: 'Bitte Token eingeben',
    },
    selector: {
      label: 'Selektor',
      placeholder: 'Standard ist body; alternativ .classname / #idname / tagname eingeben',
    },
    file_count_limit: {
      label: 'Maximale Anzahl an Dateien pro Upload',
    },
    file_size_limit: {
      label: 'Maximale Dateigröße (MB)',
      placeholder: 'Passen Sie den Wert an die Serverkonfiguration an, um Ausfälle zu vermeiden',
    },
  },

  ResultSuccess: {
    title: 'Wissensdatenbank erfolgreich erstellt',
    paragraph: 'Abschnitte',
    paragraph_count: 'Abschnitte',
    documentList: 'Dokumentenliste',
    loading: 'Wird importiert',
    buttons: {
      toKnowledge: 'Zurück zur Wissensdatenbankliste',
      toDocument: 'Zu den Dokumenten',
    },
  },
  syncWeb: {
    title: 'Wissensdatenbank synchronisieren',
    syncMethod: 'Synchronisationsmethode',
    replace: 'Ersetzen',
    replaceText: 'Abrufen und Überschreiben der vorhandenen lokalen Dokumente mit neuen Web-Daten',
    complete: 'Vollständige Synchronisierung',
    completeText: 'Löscht zuerst alle lokalen Dokumente und ruft dann neue Web-Daten ab',
    tip: 'Achtung: Jede Synchronisierung löscht bestehende Daten und ersetzt sie durch neue. Bitte vorsichtig vorgehen.',
  },
}
