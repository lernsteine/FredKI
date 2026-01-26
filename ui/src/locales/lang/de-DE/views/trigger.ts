export default {
  title: 'Auslöser',
  tip: 'Bei Auslösung ruft das System automatisch die Aufgabenausführung basierend auf den eingestellten Eingabeparametern auf',
  task: 'Aufgabe',
  type: {
    scheduled: 'Zeitgesteuerter Auslöser',
    scheduledDesc: 'Aufgaben monatlich, wöchentlich, täglich oder in Intervallen ausführen',
    event: 'Ereignis-Auslöser',
    eventDesc: 'Aufgaben ausführen, wenn ein bestimmtes Ereignis eintritt',
  },
  createTrigger: 'Auslöser erstellen',
  editTrigger: 'Auslöser bearbeiten',
  from: {
    triggerName: {
      label: 'Name des Auslösers',
      placeholder: 'Bitte geben Sie den Namen des Auslösers ein',
      requiredMessage: 'Bitte geben Sie den Namen des Auslösers ein',
    },
  },
}
