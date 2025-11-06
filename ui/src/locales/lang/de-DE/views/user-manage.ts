export default {
  title: 'Benutzerverwaltung',
  createUser: 'Benutzer erstellen',
  editUser: 'Benutzer bearbeiten',
  roleSetting: 'Rolleneinstellungen',
  addRole: 'Rolle hinzufügen',
  setting: {
    updatePwd: 'Benutzerpasswort ändern',
  },
  tip: {
    professionalMessage: 'Die Community Edition unterstützt maximal 2 Benutzer. Für mehr Benutzer bitte auf die Professional Edition upgraden.',
    updatePwdSuccess: 'Benutzerpasswort erfolgreich geändert',
  },
  delete: {
    confirmTitle: 'Benutzer löschen:',
    confirmMessage: 'Beim Löschen eines Benutzers werden die von ihm erstellten Ressourcen (Anwendungen, Wissensbasen, Modelle) nicht gelöscht. Bitte vorsichtig vorgehen.',
  },
  disabled: {
    confirmTitle: 'Werkzeug deaktivieren:',
    confirmMessage: 'Nach dem Deaktivieren schlagen Anfragen in Anwendungen, die dieses Werkzeug referenzieren, fehl. Bitte vorsichtig vorgehen.',
  },
  userForm: {
    nick_name: {
      label: 'Name',
      placeholder: 'Bitte Namen eingeben',
      lengthMessage: 'Länge zwischen 1 und 20 Zeichen',
    },

    phone: {
      label: 'Telefonnummer',
      placeholder: 'Bitte Telefonnummer eingeben',
      invalidMessage: 'Ungültiges Telefonnummernformat',
    },
  },
  source: {
    label: 'Benutzerquelle',
    local: 'Systembenutzer',
    localCreate: 'Lokal erstellt',
    wecom: 'Enterprise WeChat',
    lark: 'Feishu',
    dingtalk: 'DingTalk',
  },
}
