export default {
  title: 'Benutzer',
  createUser: 'Benutzer erstellen',
  editUser: 'Benutzer bearbeiten',
  roleSetting: 'Rollen einstellen',
  addRole: 'Rolle hinzufügen',
  setting: {
    updatePwd: 'Passwort ändern',
  },
  tip: {
    professionalMessage:
      'Die Community Edition unterstützt bis zu 2 Benutzer. Für mehr Benutzer bitte auf die Professional Edition upgraden.',
    updatePwdSuccess: 'Benutzerpasswort erfolgreich aktualisiert',
  },
  delete: {
    confirmTitle: 'Löschen des Benutzers bestätigen:',
    confirmMessage:
      'Beim Löschen dieses Benutzers werden die von ihm erstellten Ressourcen (APP, Wissen, Modelle) nicht automatisch gelöscht. Bitte mit Vorsicht fortfahren.',
  },
  disabled: {
    confirmTitle: 'Deaktivieren des Benutzers bestätigen:',
    confirmMessage:
      'Das Deaktivieren dieses Benutzers kann zu Fehlern führen, wenn referenzierte APPs abgefragt werden. Bitte mit Vorsicht fortfahren.',
  },
  userForm: {
    nick_name: {
      label: 'Name',
      placeholder: 'Bitte Namen eingeben',
      lengthMessage: 'Länge muss zwischen 2 und 20 Zeichen liegen',
    },
    phone: {
      label: 'Telefon',
      placeholder: 'Bitte Telefonnummer eingeben',
      invalidMessage: 'Ungültiges Telefonformat',
    },
  },
  source: {
    label: 'Benutzerquelle',
    local: 'Systembenutzer',
    localCreate: 'Lokal erstellt',
    wecom: 'WeCom',
    lark: 'Lark',
    dingtalk: 'DingTalk',
  },
}
