import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const de: Translations = {
  common: {
    selectLanguage: "Sprache auswählen",
  },
  hero: {
    title: "Sudoku Ultimato - Kostenlose Klassische & Killer Sudoku Rätsel",
    subtitle:
      "Sudoku ohne Grenzen. Spiele Klassisches Sudoku, Killer Sudoku und Riesenraster mit einer übersichtlichen Oberfläche und endlosen Rätseln. Für Gelegenheitsspieler und Experten gleichermaßen.",
    ctaApple: "Laden im App Store",
    ctaGoogle: "Jetzt bei Google Play",
    availableSoon: "Bald verfügbar",
    imageAlt: "Sudoku Ultimato App Vorschau",
    imageTitle: "Sudoku Ultimato App Vorschau",
    classicImageAlt: "Klassischer Sudoku-Modus",
    classicImageTitle: "Klassischer Sudoku-Modus",
    killerImageAlt: "Killer Sudoku-Modus",
    killerImageTitle: "Killer Sudoku-Modus",
    largeImageAlt: "16x16 Sudoku-Modus",
    largeImageTitle: "16x16 Sudoku-Modus",
  },
  intro: {
    title: "Was ist Sudoku Ultimato",
    description:
      "Sudoku Ultimato ist eine moderne Sudoku-App, die jedes Rätsel sofort generiert. Anstelle einer festen Bibliothek vorgefertigter Spielfelder erstellt die App Rätsel aus Seeds, was bedeutet, dass der Vorrat nie ausgeht und der Schwierigkeitsgrad konstant bleibt.\n\nSpieler können zwischen verschiedenen Modi und Spielfeldgrößen wählen, einschließlich Klassischem Sudoku und Killer Sudoku mit Käfigen. Für schnelle Runden gibt es kleine 4x4-Spielfelder. Für lange, intensive Lösungssitzungen gibt es riesige 16x16-Raster. Tägliche Rätsel sind für Serien und persönlichen Fortschritt verfügbar.",
  },
  features: {
    title: "Hauptfunktionen",
    items: [
      "Klassisches Sudoku und Killer Sudoku",
      "Endlose Rätsel sofort aus Seeds generiert",
      "Täglicher Herausforderungsmodus",
      "Spielfeldgrößen 4×4, 9×9 und 16×16",
      "Helles und dunkles Design",
      "Barrierefreiheitsoptionen wie Zoom, Textgröße und Haptik",
      "Querformatunterstützung auf Handys und Tablets",
      "Schnelle Eingabe mit minimalen Ablenkungen",
      "Begrenzte und nicht aufdringliche Werbung",
      "Verfügbar in Englisch, Niederländisch, Thai und mehr",
      "Verfügbar im App Store und bei Google Play",
    ],
  },
  modes: {
    title: "Mehrere Sudoku-Modi",
    items: {
      classic: {
        title: "Klassisches Sudoku",
        description: "Das Standard 9x9 Sudoku, das die meisten Spieler kennen.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Eine Variante, bei der Käfige und Summenvorgaben zusätzliche Einschränkungen schaffen. Dieser Modus belohnt tiefere Logik und Mustererkennung.",
      },
      sizes: {
        title: "Kleine und große Raster",
        description:
          "Spiele kleine 4x4-Rätsel für kurze Pausen oder riesige 16x16-Rätsel für längere Sitzungen und fortgeschrittene Strategien.",
      },
    },
  },
  endless: {
    title: "Endlose Rätsel",
    description:
      "Jedes Sudoku-Rätsel wird aus einem deterministischen Seed generiert. Level wiederholen sich nie und der Schwierigkeitsgrad bleibt konstant. Es gibt kein Warten auf neue Pakete oder Level-Freischaltungen. Du kannst so viel spielen, wie du möchtest.",
  },
  themes: {
    title: "Designs und visuelle Anpassung",
    description:
      "Sudoku Ultimato enthält ein Design-System für komfortables langes Spielen. Spieler können zwischen Hellem Modus, Dunklem Modus oder System-Modus wählen. Kontrastreiche Farben und klare Schriften machen Muster leicht erkennbar.",
  },
  progress: {
    title: "Verfolge deinen Fortschritt und Statistiken",
    description:
      "Verfolge deine Sudoku-Reise mit umfassender Fortschrittsverfolgung und detaillierten Statistiken. Sieh dir Abschlussquoten, beste Zeiten und Serien über alle Schwierigkeitsstufen und Spielmodi hinweg an. Der Fortschrittsbildschirm zeigt dein aktuelles Rätsel, abgeschlossene Rätsel mit Leistungsmetriken und Gewinnraten. Statistiken bieten Einblicke in deine Spielzeit, bevorzugte Schwierigkeit, längste Serien und Gesamtverbesserung im Laufe der Zeit.",
  },
  accessibility: {
    title: "Barrierefreiheit und Spielerkomfort",
    description:
      "Barrierefreiheit wird als Kernfunktion behandelt. Die App unterstützt:",
    items: [
      "Zoom-Steuerung und Pinch-Gesten",
      "Querformat-Modus",
      "Klare Zahlenvisualisierung",
      "Schnelle Eingabe",
      "Haptisches Feedback",
      "Verbleibende Zahlenzählung",
      "Automatisches Löschen von Notizen",
    ],
    note: "Diese Funktionen helfen sowohl neuen als auch erfahrenen Spielern, schneller und ohne Anstrengung zu lösen.",
  },
  daily: {
    title: "Tägliche Rätsel",
    description:
      "Ein tägliches Rätsel ist für Serien und persönliche Verbesserung verfügbar. Tägliche Rätsel werden gespeichert, damit Spieler Zeiten vergleichen und den Fortschritt über Wochen und Monate verfolgen können.",
  },
  noAds: {
    title: "Keine aufdringliche Werbung",
    description:
      "Sudoku Ultimato unterbricht das Spiel nicht mit Vollbildwerbung. Dies hält den Lösungsrhythmus ruhig und konzentriert.",
  },
  whyKiller: {
    title: "Warum Killer Sudoku und 16x16 wichtig sind",
    description:
      "Killer Sudoku fügt durch Summen-Käfige und Duplikatregeln zusätzliche Logikebenen hinzu. Große 16x16 Sudoku-Raster erfordern mehr Planung und belohnen fortgeschrittene Techniken wie Scannen, Kandidatenelimination und Musterspiel.\n\nDiese Modi sind selten zusammen in einer einzigen App verfügbar, besonders mit endloser Generierung und Barrierefreiheitsfunktionen.",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    items: [
      {
        q: "Hat Sudoku Ultimato endlose Sudoku-Level?",
        a: "Ja. Jedes Level wird aus einem Seed generiert und die Rätsel gehen nie aus.",
      },
      {
        q: "Enthält die App Killer Sudoku?",
        a: "Ja. Killer-Käfige und Käfigsummen sind mit klaren Visualisierungen und gestrichelten Umrissen enthalten.",
      },
      { q: "Welche Rastergrößen werden unterstützt?", a: "4x4, 9x9 und 16x16." },
      {
        q: "Ist Sudoku Ultimato anfängerfreundlich?",
        a: "Ja. Kleine Raster und Hilfsfunktionen helfen neuen Spielern, Sudoku-Muster zu lernen.",
      },
      {
        q: "Ist die App gut für Experten?",
        a: "Ja. Killer Sudoku und 16x16-Raster bieten tiefgehende logische Herausforderungen.",
      },
      {
        q: "Gibt es aufdringliche Werbung oder Pop-ups?",
        a: "Nein. Die App vermeidet Vollbildunterbrechungen.",
      },
      {
        q: "Gibt es Dunkelmodus-Unterstützung?",
        a: "Ja. Heller Modus, Dunkler Modus und System-Modus sind verfügbar.",
      },
      {
        q: "Welche Sprachen werden unterstützt?",
        a: "Sudoku Ultimato ist spielbar in Englisch und auch in den folgenden Sprachen:\n🇺🇸 English\n🇳🇱 Nederlands\n🇹🇭 ไทย\n🇩🇪 Deutsch\n🇪🇸 Español\n🇫🇷 Français\n🇧🇷 Português\n🇮🇹 Italiano",
      },
    ],
  },
  footer: {
    support: "Support",
    privacy: "Datenschutzrichtlinie",
    contact: "Kontakt",
    contactEmailSubject: "Frage zu Sudoku Ultimato",
    developer: "Erstellt von Sander de Snaijer",
    rights: "© 2026 Sudoku Ultimato. Alle Rechte vorbehalten.",
  },
  supportPage: {
    title: "Support",
    body: `Benötigst du Hilfe? Kontaktiere uns unter ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Datenschutzrichtlinie",
    lastUpdated: `Zuletzt aktualisiert: ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Informationen, die wir sammeln",
        content:
          "Wir bemühen uns, so wenig persönliche Informationen wie möglich zu sammeln. Die App kann folgende Arten von Daten sammeln:",
      },
      {
        title: "1.1 Nutzungs- & Spieldaten",
        content: [
          "Rätsel-Abschlusszeiten",
          "Fehler und verwendete Hinweise",
          "Teilnahme an täglichen Rätseln",
          "Schwierigkeitsauswahl",
        ],
      },
      {
        title: "",
        content:
          "Diese Daten können lokal auf deinem Gerät oder auf Firebase Firestore gespeichert werden, wenn Cloud-Synchronisation oder Bestenlisten aktiviert sind.",
      },
      {
        title: "1.2 Geräte- & technische Daten",
        content:
          "Wir können automatisch nicht-identifizierende technische Daten sammeln, wie Gerätemodell, Betriebssystemversion, App-Version, Absturzprotokolle und Leistungsmetriken. Dies hilft bei der Verbesserung der Stabilität und beim Debugging.",
      },
      {
        title: "1.3 Optionale Kontoinformationen",
        content:
          "Die App kann optionale Authentifizierung anbieten (z.B. Firebase Auth). Diese wird verwendet, um Statistiken über Geräte hinweg zu synchronisieren und an Cloud-Funktionen teilzunehmen. Wenn du dich anmeldest, können wir Benutzerkennungen, Anzeigenamen und E-Mail-Adressen (falls angegeben) speichern. Wir benötigen kein Konto zum Spielen.",
      },
      {
        title: "1.4 Werbedaten",
        content:
          "Die App verwendet Google AdMob, um nicht aufdringliche Werbung zu schalten. AdMob kann Werbe-IDs (z.B. AAID/IDFA), ungefähren Standort (basierend auf IP) und interessenbezogene Werbesignale (falls durch deine Geräteeinstellungen erlaubt) sammeln. Du kannst interessenbezogene Werbung über die Geräteeinstellungen deaktivieren.",
      },
      {
        title: "2. Lokale Speicherung",
        content:
          "Die App speichert bestimmte Daten auf deinem Gerät, um offline zu funktionieren, wie Spielfortschritt, Einstellungen, Präferenzen, Status des täglichen Rätsels und Statistiken (gespeichert mit lokalen Datenbanken wie Hive/Isar).",
      },
      {
        title: "3. Datenschutz für Kinder",
        content:
          "Diese App ist nicht für Kinder unter 13 Jahren bestimmt. Wir sammeln wissentlich keine persönlichen Informationen von Kindern. Wenn du glaubst, dass dies geschehen ist, kontaktiere uns bitte und wir werden solche Daten löschen.",
      },
      {
        title: "4. Wie wir Daten verwenden",
        content: [
          "Rätsel generieren",
          "Fortschritt speichern",
          "Rätselschwierigkeit verbessern",
          "Statistiken und Bestenlisten bereitstellen",
          "Bugs und Abstürze beheben",
          "Nicht aufdringliche Werbung anzeigen (AdMob)",
          "Daten über Geräte synchronisieren (wenn angemeldet)",
        ],
      },
      {
        title: "",
        content: "Wir verkaufen keine Daten an Dritte.",
      },
      {
        title: "5. Drittanbieter-Dienste",
        content:
          "Die App verwendet Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (Werbung) und Flutter-Framework (UI). Deren Richtlinien gelten bei der Interaktion mit diesen Diensten.",
      },
      {
        title: "6. Datenspeicherung",
        content:
          "Wir speichern Spiel- und Statistikdaten, solange die App betrieben wird oder bis du die Löschung beantragst (wenn mit einem Konto verknüpft). Offline-Daten werden nur auf deinem Gerät gespeichert und werden gelöscht, wenn du die App deinstallierst.",
      },
      {
        title: "7. Datenlöschung / Opt-Out",
        content: `Benutzer können Kontolöschung, Cloud-Datenlöschung und Werbe-Tracking-Opt-out (über Geräteeinstellungen) beantragen. Um eine Löschung zu beantragen, kontaktiere den Support unter: ${SUPPORT_EMAIL}. Cloud-Daten werden innerhalb einer angemessenen Zeit gelöscht.`,
      },
      {
        title: "8. Sicherheit",
        content:
          "Wir ergreifen angemessene Maßnahmen zum Schutz von Daten, einschließlich Firebase-Sicherheitsregeln, Zugangskontrolle für Firestore, minimale Datenerfassung und keine unnötigen persönlichen Identifikatoren. Jedoch kann kein digitaler Dienst absolute Sicherheit garantieren.",
      },
      {
        title: "9. Internationale Datenübertragungen",
        content:
          "Firebase und verwandte Dienste können Daten in mehreren Regionen verarbeiten, einschließlich außerhalb der EU, unter DSGVO-konformen Rahmenwerken.",
      },
      {
        title: "10. Änderungen dieser Richtlinie",
        content:
          "Wir können diese Datenschutzrichtlinie bei Bedarf aktualisieren. Aktualisierungen werden innerhalb der App oder auf unserer Website veröffentlicht.",
      },
      {
        title: "11. Kontakt",
        content: `Bei Fragen oder Datenschutzbedenken: Sudoku Ultimato Support. E-Mail: ${SUPPORT_EMAIL}. Website: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Endlose Klassische & Killer Sudoku für iOS",
    brand: "Sudoku Ultimato",
    description:
      "Spiele endlose Sudoku-Rätsel. Klassisch, Killer & 16x16-Raster. Tägliche Herausforderungen, übersichtliche Oberfläche, Dunkelmodus. Kostenlose iOS-App.",
  },
  video: {
    youtubeId: "r9uxd65gljM",
    title: "Sieh Sudoku Ultimato in Aktion",
  },
  cta: {
    title: "Bereit zum Lösen?",
    subtitle:
      "Lade Sudoku Ultimato jetzt herunter und genieße unbegrenzte Rätsel in Klassischem, Killer- und Riesenraster-Modus. Kostenlos verfügbar auf iOS und Android.",
  },
};

export default de;
