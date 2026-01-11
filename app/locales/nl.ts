import { Translations } from "./types";
import { SUPPORT_EMAIL, WEBSITE_URL } from "../constants";

const nl: Translations = {
  common: {
    selectLanguage: "Taal selecteren",
  },
  hero: {
    title: "Sudoku Ultimato - Eindeloze Sudoku Puzzels",
    subtitle:
      "Sudoku zonder grenzen. Speel Klassieke Sudoku, Killer Sudoku en gigantische roosters met een heldere interface en eindeloze puzzels.",
    ctaApple: "Download op iOS",
    ctaGoogle: "Download op Android",
    availableSoon: "Binnenkort beschikbaar",
    imageAlt: "Sudoku Ultimato App Overzicht",
    imageTitle: "Sudoku Ultimato App Overzicht",
  },
  intro: {
    title: "Wat is Sudoku Ultimato",
    description:
      "Sudoku Ultimato is een moderne Sudoku app die elke puzzel direct genereert. In plaats van een vaste bibliotheek met vooraf gemaakte borden, creëert de app puzzels vanuit seeds, wat betekent dat de voorraad nooit opraakt en de moeilijkheidsgraad consistent blijft.\n\nSpelers kunnen kiezen uit verschillende modi en bordgroottes, waaronder Klassieke Sudoku en Killer Sudoku kooien. Voor snelle sessies zijn er kleine 4x4 borden. Voor lange, diepgaande oplossessies zijn er gigantische 16x16 roosters. Dagelijkse puzzels zijn beschikbaar voor streaks en persoonlijke voortgang.",
  },
  modes: {
    title: "Meerdere Sudoku Modi",
    items: {
      classic: {
        title: "Klassieke Sudoku",
        description: "De standaard 9x9 Sudoku die de meeste spelers kennen.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Een variant waarbij kooien en somtotalen extra beperkingen creëren. Deze modus beloont diepere logica en patroonherkenning.",
      },
      sizes: {
        title: "Kleine en Grote Roosters",
        description:
          "Speel kleine 4x4 puzzels voor snelle pauzes of gigantische 16x16 puzzels voor langere sessies en geavanceerde strategieën.",
      },
    },
  },
  endless: {
    title: "Eindeloze Puzzels",
    description:
      "Elke Sudoku puzzel wordt gegenereerd vanuit een deterministische seed. Levels worden nooit herhaald en de moeilijkheidsgraad blijft consistent. Er is geen wachttijd voor nieuwe packs of level unlocks. Je kunt zoveel spelen als je wilt.",
  },
  themes: {
    title: "Thema's en Visuele Aanpassing",
    description:
      "Sudoku Ultimato bevat een themasysteem voor comfortabele lange speelsessies. Spelers kunnen kiezen uit Lichte Modus, Donkere Modus of Systeem Modus. Hoog contrast kleuren en duidelijke lettertypes maken patronen makkelijk te herkennen.",
  },
  accessibility: {
    title: "Toegankelijkheid en Comfort",
    description:
      "Toegankelijkheid wordt behandeld als een kernfunctie. De app ondersteunt:",
    items: [
      "Zoom en knijpbewegingen",
      "Landschapsmodus",
      "Duidelijke nummervisuals",
      "Nummer-eerst of cel-eerst invoermodi",
      "Haptische feedback",
      "Nummertellingen",
      "Notities automatisch opschonen",
    ],
    note: "Deze functies helpen zowel nieuwe als ervaren spelers sneller op te lossen zonder belasting.",
  },
  daily: {
    title: "Dagelijkse Puzzels",
    description:
      "Een dagelijkse puzzel is beschikbaar voor streaks en persoonlijke verbetering. Dagelijkse puzzels worden opgeslagen zodat spelers tijden kunnen vergelijken en voortgang over weken en maanden kunnen bijhouden.",
  },
  noAds: {
    title: "Geen Intrusieve Advertenties",
    description:
      "Sudoku Ultimato onderbreekt het spel niet met schermvullende advertenties. Dit houdt het oplosritme kalm en gefocust.",
  },
  whyKiller: {
    title: "Waarom Killer Sudoku en 16x16 Belangrijk zijn",
    description:
      "Killer Sudoku voegt extra logische lagen toe door somkooien en regels voor dubbele getallen. Grote 16x16 Sudoku roosters vereisen meer planning en belonen geavanceerde technieken zoals scannen, kandidaat-eliminatie en patroonspel.\n\nDeze modi zijn zelden samen beschikbaar in één app, vooral met eindeloze generatie en toegankelijkheidsfuncties.",
  },
  faq: {
    title: "Veelgestelde Vragen",
    items: [
      {
        q: "Heeft Sudoku Ultimato eindeloze levels?",
        a: "Ja. Elk level is seed-gegenereerd en puzzels raken nooit op.",
      },
      {
        q: "Bevat de app Killer Sudoku?",
        a: "Ja. Killer kooien en kooisommen zijn inbegrepen met heldere visuals en stippellijnen.",
      },
      {
        q: "Welke roostergroottes worden ondersteund?",
        a: "4x4, 9x9 en 16x16.",
      },
      {
        q: "Is Sudoku Ultimato beginnersvriendelijk?",
        a: "Ja. Kleine roosters en hulpfuncties helpen nieuwe spelers Sudoku patronen te leren.",
      },
      {
        q: "Is de app goed voor experts?",
        a: "Ja. Killer Sudoku en 16x16 roosters bieden diepe logische uitdagingen.",
      },
      {
        q: "Zijn er intrusieve advertenties of pop-ups?",
        a: "Nee. De app vermijdt schermvullende onderbrekingen.",
      },
      {
        q: "Is er ondersteuning voor Donkere Modus?",
        a: "Ja. Lichte Modus, Donkere Modus en Systeem Modus zijn beschikbaar.",
      },
    ],
  },
  footer: {
    support: "Ondersteuning",
    privacy: "Privacybeleid",
    contact: "Contact",
    rights: "© 2026 Sudoku Ultimato. Alle rechten voorbehouden.",
  },
  supportPage: {
    title: "Ondersteuning",
    body: `Hulp nodig? Neem contact op via ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Privacybeleid",
    lastUpdated: "Laatst bijgewerkt: Januari 2026",
    sections: [
      {
        title: "1. Informatie die we verzamelen",
        content:
          "We streven ernaar om zo min mogelijk persoonlijke informatie te verzamelen. De app kan de volgende soorten gegevens verzamelen:",
      },
      {
        title: "1.1 Gebruiks- & gameplaygegevens",
        content: [
          "Puzzelvoltooiingstijden",
          "Gemaakte fouten en gebruikte hints",
          "Deelname aan dagelijkse puzzels",
          "Moeilijkheidsgraadselecties",
        ],
      },
      {
        title: "",
        content:
          "Deze gegevens kunnen lokaal op uw apparaat worden opgeslagen of op Firebase Firestore als cloud-synchronisatie of ranglijsten zijn ingeschakeld.",
      },
      {
        title: "1.2 Apparaat- & technische gegevens",
        content:
          "We kunnen automatisch niet-identificeerbare technische gegevens verzamelen, zoals apparaatmodel, OS-versie, app-versie, crashlogboeken en prestatiegegevens. Dit helpt de stabiliteit en het oplossen van fouten te verbeteren.",
      },
      {
        title: "1.3 Optionele accountinformatie",
        content:
          "De app kan optionele authenticatie aanbieden (bijv. Firebase Auth). Dit wordt gebruikt voor het synchroniseren van statistieken tussen apparaten en deelname aan cloudfuncties. Als u inlogt, kunnen we gebruikers-ID's, weergavenamen en e-mailadressen (indien verstrekt) opslaan. Een account is niet vereist om te spelen.",
      },
      {
        title: "1.4 Advertentiegegevens",
        content:
          "De app gebruikt Google AdMob om niet-opdringerige advertenties te tonen. AdMob kan advertentie-ID's (bijv. AAID/IDFA), geschatte locatie (gebaseerd op IP) en op interesses gebaseerde advertentiesignalen verzamelen (indien toegestaan door uw apparaatinstellingen). U kunt zich afmelden voor op interesses gebaseerde advertenties via de apparaatinstellingen.",
      },
      {
        title: "2. Lokale opslag",
        content:
          "De app slaat bepaalde gegevens op uw apparaat op om offline te kunnen functioneren, zoals spelvoortgang, instellingen, voorkeuren, status van dagelijkse puzzels en statistieken (opgeslagen met lokale databases zoals Hive/Isar).",
      },
      {
        title: "3. Privacy van kinderen",
        content:
          "Deze app is niet ontworpen voor kinderen onder de 13 jaar. We verzamelen niet bewust persoonlijke informatie van kinderen. Als u denkt dat dit wel is gebeurd, neem dan contact met ons op en we zullen deze gegevens verwijderen.",
      },
      {
        title: "4. Hoe we gegevens gebruiken",
        content: [
          "Puzzels genereren",
          "Voortgang opslaan",
          "Moeilijkheidsgraad van puzzels verbeteren",
          "Statistieken en ranglijsten aanbieden",
          "Bugs en crashes oplossen",
          "Niet-opdringerige advertenties tonen (AdMob)",
          "Gegevens synchroniseren tussen apparaten (indien ingelogd)",
        ],
      },
      {
        title: "",
        content: "We verkopen geen gegevens aan derden.",
      },
      {
        title: "5. Diensten van derden",
        content:
          "De app maakt gebruik van de volgende diensten: Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (advertenties), en Flutter-framework (UI). Hun beleid is van toepassing wanneer u interactie heeft met deze diensten.",
      },
      {
        title: "6. Gegevensbewaring",
        content:
          "We bewaren gameplay- en statistische gegevens zolang de app operationeel blijft of totdat u verzoekt om verwijdering (indien gekoppeld aan een account). Offline gegevens worden alleen op uw apparaat opgeslagen en worden verwijderd wanneer u de app verwijdert.",
      },
      {
        title: "7. Verwijdering van gegevens / Opt-out",
        content: `Gebruikers kunnen verzoeken om accountverwijdering, verwijdering van cloudgegevens en afmelding voor advertentietracking (via apparaatinstellingen). Neem voor verwijdering contact op met de ondersteuning via: ${SUPPORT_EMAIL}. Cloudgegevens worden binnen een redelijke termijn verwijderd.`,
      },
      {
        title: "8. Beveiliging",
        content:
          "We nemen redelijke maatregelen om gegevens te beschermen, inclusief Firebase-beveiligingsregels, toegangscontrole voor Firestore, minimale gegevensverzameling en geen onnodige persoonlijke identificatiemiddelen. Geen enkele digitale dienst kan echter absolute beveiliging garanderen.",
      },
      {
        title: "9. Internationale gegevensoverdrachten",
        content:
          "Firebase en gerelateerde diensten kunnen gegevens verwerken in meerdere regio's, inclusief buiten de EU, onder GDPR-conforme kaders.",
      },
      {
        title: "10. Wijzigingen in dit beleid",
        content:
          "We kunnen dit privacybeleid indien nodig bijwerken. Updates worden geplaatst in de app of op onze website.",
      },
      {
        title: "11. Contact",
        content: `Voor vragen of zorgen over privacy: Sudoku Ultimato Support. E-mail: ${SUPPORT_EMAIL}. Website: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato",
    description: "Eindeloze Sudoku Puzzels",
  },
};

export default nl;
