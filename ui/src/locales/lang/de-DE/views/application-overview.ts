export default {
  title: 'Übersicht',
  appInfo: {
    publicAccessLink: 'Öffentliche URL',
    openText: 'Ein',
    closeText: 'Aus',
    demo: 'Vorschau',
    embedInWebsite: 'Embed-Code abrufen',
    accessControl: 'Zugangskontrolle',
    displaySetting: 'Anzeigeeinstellungen',
    apiAccessCredentials: 'API-Zugangsdaten',
    apiKey: 'API-Schlüssel',
    refreshToken: {
      msgConfirm1: 'Möchten Sie die öffentliche URL wirklich neu generieren?',
      msgConfirm2:
        'Das Neugenerieren der öffentlichen URL wirkt sich auf alle bestehenden Embed-Codes auf Drittanbieterseiten aus. Sie müssen den Embed-Code aktualisieren und erneut einbinden. Bitte gehen Sie vorsichtig vor!',
      refreshSuccess: 'Erfolgreich aktualisiert',
    },
    APIKeyDialog: {
      saveSettings: 'Einstellungen speichern',
      msgConfirm1: 'Möchten Sie den API-Schlüssel wirklich löschen?',
      msgConfirm2:
        'Diese Aktion ist irreversibel. Nach dem Löschen kann der API-Schlüssel nicht wiederhergestellt werden. Möchten Sie dennoch fortfahren?',
    },
    EmbedDialog: {
      fullscreenModeTitle: 'Vollbild-Modus',
      copyInstructions: 'Kopieren Sie den untenstehenden Code zum Einbetten',
      floatingModeTitle: 'Schwebemodus',
      mobileModeTitle: 'Mobil-Modus',
    },
    LimitDialog: {
      clientQueryLimitLabel: 'Abfrage-Limit pro Client',
      authentication: 'Authentifizierung',
      authenticationValue: 'Passwort-Zugriff',
      timesDays: 'Abfragen pro Tag',
      whitelistLabel: 'Erlaubte Domains',
      whitelistPlaceholder:
        'Geben Sie erlaubte Drittanbieter-Domains ein, eine pro Zeile. Zum Beispiel:\nhttp://127.0.0.1:5678\nhttps://dataease.io',
      loginMethod: 'Anmeldemethode',
      loginMethodRequired: 'Bitte wählen Sie eine Anmeldemethode',
      toSettingChatUser: 'Zur Chat-Benutzer-Konfiguration',
      displayCodeRequired: 'Bitte geben Sie die Anzahl der Fehlversuche ein',
      authenticationTooltip:
        'Bei aktivierter Anmeldeauthentifizierung müssen Chat-Benutzer sowohl für den Agenten als auch für die zugehörigen Wissensbasen autorisiert sein. Ohne Berechtigung können Benutzer sich nicht anmelden oder auf Wissensabruf-Funktionen zugreifen.',
    },
    SettingAPIKeyDialog: {
      allowCrossDomainLabel: 'Cross-Domain-Zugriff erlauben',
      crossDomainPlaceholder:
        'Geben Sie erlaubte Cross-Domain-Adressen ein. Wenn aktiviert und leer gelassen, gilt keine Einschränkung.\nEine pro Zeile, z. B.:\nhttp://127.0.0.1:5678\nhttps://dataease.io',
    },
  },
  SettingDisplayDialog: {
    showSourceLabel: 'Wissensquelle anzeigen',
    showExecutionDetail: 'Ausführungsdetails anzeigen',
    restoreDefault: 'Standard wiederherstellen',
    customThemeColor: 'Benutzerdefinierte Themenfarbe',
    headerTitleFontColor: 'Schriftfarbe des Header-Titels',
    default: 'Standard',
    askUserAvatar: 'Benutzer-Avatar (fragend)',
    replace: 'Ersetzen',
    imageMessage:
      'Empfohlene Größe: 32×32 Pixel. Unterstützt JPG, PNG und GIF. Maximale Größe: 10 MB',
    AIAvatar: 'KI-Avatar',
    display: 'Anzeige',
    floatIcon: 'Schwebendes Icon',
    iconDefaultPosition: 'Standard-Icon-Position',
    iconPosition: {
      left: 'Links',
      right: 'Rechts',
      bottom: 'Unten',
      top: 'Oben',
    },
    draggablePosition: 'Verschiebbare Position',
    showHistory: 'Chat-Verlauf anzeigen',
    displayGuide: 'Guide-Bild anzeigen (Schwebemodus)',
    disclaimer: 'Haftungsausschluss',
    disclaimerValue: 'Dieser Inhalt wurde von einer KI generiert und dient nur zu Informationszwecken.',
    chatBackground: 'Chat-Hintergrund',
    chatBackgroundMessage: 'Unterstützte Formate: JPG, PNG, GIF. Maximale Größe: 10 MB.',
  },
}
