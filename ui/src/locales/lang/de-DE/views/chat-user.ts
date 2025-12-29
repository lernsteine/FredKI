export default {
  title: 'Chat-Benutzer',
  syncUsers: 'Benutzer importieren',
  syncUsersTip: 'Nur neu hinzugefügte Benutzer importieren',
  setUserGroups: 'Benutzergruppen konfigurieren',
  knowledgeTitleTip:
    'Diese Konfiguration wird erst wirksam, nachdem die Chat-Benutzer-Login-Authentifizierung im zugehörigen Agenten aktiviert wurde',
  applicationTitleTip:
    'Diese Konfiguration erfordert, dass die Login-Authentifizierung im Agenten aktiviert ist',
  autoAuthorization: 'Automatische Autorisierung',
  authorization: 'Autorisierung',
  batchDeleteUser: 'Ausgewählte {count} Benutzer löschen?',
  settingMethod: 'Konfigurationsmethode',
  append: 'Anhängen',
  group: {
    title: 'Benutzergruppen',
    name: 'Benutzergruppenname',
    requiredMessage: 'Bitte Benutzergruppe auswählen',
    usernameOrName: 'Benutzername/Name',
    delete: {
      confirmTitle: 'Löschung der Benutzergruppe bestätigen:',
      confirmMessage:
        'Alle Mitglieder in dieser Gruppe werden nach dem Löschen entfernt. Bitte vorsichtig vorgehen!',
    },
    batchDeleteMember: 'Ausgewählte {count} Mitglieder entfernen?',
  },
  syncMessage: {
    title: 'Erfolgreich {count} Benutzer synchronisiert',
    usernameExist: 'Die folgenden Benutzernamen existieren bereits:',
    nicknameExist: 'Die folgenden Spitznamen existieren bereits:',
  },
}
