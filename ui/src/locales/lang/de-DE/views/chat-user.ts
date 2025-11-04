export default {
  title: 'Chat-Benutzer',
  syncUsers: 'Benutzer importieren',
  syncUsersTip: 'Nur neu hinzugefügte Benutzer importieren',
  setUserGroups: 'Benutzergruppen konfigurieren',
  knowledgeTitleTip:
    'Diese Konfiguration wird erst wirksam, nachdem in der zugehörigen Anwendung die Chat-Benutzer-Authentifizierung aktiviert wurde.',
  applicationTitleTip:
    'Diese Konfiguration erfordert, dass die Login-Authentifizierung in der Anwendung aktiviert ist.',
  autoAuthorization: 'Automatische Autorisierung',
  authorization: 'Autorisierung',
  batchDeleteUser: 'Ausgewählte {count} Benutzer löschen?',
  settingMethod: 'Konfigurationsmethode',
  append: 'Anhängen',
  group: {
    title: 'Benutzergruppen',
    name: 'Name der Benutzergruppe',
    requiredMessage: 'Bitte Benutzergruppe auswählen',
    usernameOrName: 'Benutzername/Name',
    delete: {
      confirmTitle: 'Löschen der Benutzergruppe bestätigen:',
      confirmMessage:
        'Alle Mitglieder dieser Gruppe werden nach dem Löschen entfernt. Bitte mit Vorsicht fortfahren!',
    },
    batchDeleteMember: 'Ausgewählte {count} Mitglieder entfernen?',
  },
  syncMessage: {
    title: '{count} Benutzer erfolgreich synchronisiert',
    usernameExist: 'Folgende Benutzernamen existieren bereits:',
    nicknameExist: 'Folgende Spitznamen existieren bereits:',
  },
}
