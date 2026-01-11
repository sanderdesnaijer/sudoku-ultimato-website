import { Translations } from './types';
import { SUPPORT_EMAIL } from '../constants';


const nl: Translations = {
  common: {
    selectLanguage: 'Taal selecteren'
  },
  hero: {
    title: 'Sudoku Ultimato - Eindeloze Sudoku Puzzels',
    subtitle: 'Sudoku zonder grenzen. Speel Klassieke Sudoku, Killer Sudoku en gigantische roosters met een heldere interface en eindeloze puzzels.',
    ctaApple: 'Download op iOS',
    ctaGoogle: 'Download op Android',
    availableSoon: 'Binnenkort beschikbaar',
    image1Alt: 'Sudoku Ultimato Gameplay',
    image1Title: 'Sudoku Ultimato Gameplay Screenshot',
    image2Alt: 'Sudoku Ultimato Functies',
    image2Title: 'Sudoku Ultimato Functies Screenshot'
  },
  intro: {
    title: 'Wat is Sudoku Ultimato',
    description: 'Sudoku Ultimato is een moderne Sudoku app die elke puzzel direct genereert. In plaats van een vaste bibliotheek met vooraf gemaakte borden, creëert de app puzzels vanuit seeds, wat betekent dat de voorraad nooit opraakt en de moeilijkheidsgraad consistent blijft.\n\nSpelers kunnen kiezen uit verschillende modi en bordgroottes, waaronder Klassieke Sudoku en Killer Sudoku kooien. Voor snelle sessies zijn er kleine 4x4 borden. Voor lange, diepgaande oplossessies zijn er gigantische 16x16 roosters. Dagelijkse puzzels zijn beschikbaar voor streaks en persoonlijke voortgang.'
  },
  modes: {
    title: 'Meerdere Sudoku Modi',
    items: {
      classic: {
        title: 'Klassieke Sudoku',
        description: 'De standaard 9x9 Sudoku die de meeste spelers kennen.'
      },
      killer: {
        title: 'Killer Sudoku',
        description: 'Een variant waarbij kooien en somtotalen extra beperkingen creëren. Deze modus beloont diepere logica en patroonherkenning.'
      },
      sizes: {
        title: 'Kleine en Grote Roosters',
        description: 'Speel kleine 4x4 puzzels voor snelle pauzes of gigantische 16x16 puzzels voor langere sessies en geavanceerde strategieën.'
      }
    }
  },
  endless: {
    title: 'Eindeloze Puzzels',
    description: 'Elke Sudoku puzzel wordt gegenereerd vanuit een deterministische seed. Levels worden nooit herhaald en de moeilijkheidsgraad blijft consistent. Er is geen wachttijd voor nieuwe packs of level unlocks. Je kunt zoveel spelen als je wilt.'
  },
  themes: {
    title: 'Thema\'s en Visuele Aanpassing',
    description: 'Sudoku Ultimato bevat een themasysteem voor comfortabele lange speelsessies. Spelers kunnen kiezen uit Lichte Modus, Donkere Modus of Systeem Modus. Hoog contrast kleuren en duidelijke lettertypes maken patronen makkelijk te herkennen.'
  },
  accessibility: {
    title: 'Toegankelijkheid en Comfort',
    description: 'Toegankelijkheid wordt behandeld als een kernfunctie. De app ondersteunt:',
    items: [
      'Zoom en knijpbewegingen',
      'Landschapsmodus',
      'Duidelijke nummervisuals',
      'Nummer-eerst of cel-eerst invoermodi',
      'Haptische feedback',
      'Nummertellingen',
      'Notities automatisch opschonen'
    ],
    note: 'Deze functies helpen zowel nieuwe als ervaren spelers sneller op te lossen zonder belasting.'
  },
  daily: {
    title: 'Dagelijkse Puzzels',
    description: 'Een dagelijkse puzzel is beschikbaar voor streaks en persoonlijke verbetering. Dagelijkse puzzels worden opgeslagen zodat spelers tijden kunnen vergelijken en voortgang over weken en maanden kunnen bijhouden.'
  },
  noAds: {
    title: 'Geen Intrusieve Advertenties',
    description: 'Sudoku Ultimato onderbreekt het spel niet met schermvullende advertenties. Dit houdt het oplosritme kalm en gefocust.'
  },
  whyKiller: {
    title: 'Waarom Killer Sudoku en 16x16 Belangrijk zijn',
    description: 'Killer Sudoku voegt extra logische lagen toe door somkooien en regels voor dubbele getallen. Grote 16x16 Sudoku roosters vereisen meer planning en belonen geavanceerde technieken zoals scannen, kandidaat-eliminatie en patroonspel.\n\nDeze modi zijn zelden samen beschikbaar in één app, vooral met eindeloze generatie en toegankelijkheidsfuncties.'
  },
  faq: {
    title: 'Veelgestelde Vragen',
    items: [
      { q: 'Heeft Sudoku Ultimato eindeloze levels?', a: 'Ja. Elk level is seed-gegenereerd en puzzels raken nooit op.' },
      { q: 'Bevat de app Killer Sudoku?', a: 'Ja. Killer kooien en kooisommen zijn inbegrepen met heldere visuals en stippellijnen.' },
      { q: 'Welke roostergroottes worden ondersteund?', a: '4x4, 9x9 en 16x16.' },
      { q: 'Is Sudoku Ultimato beginnersvriendelijk?', a: 'Ja. Kleine roosters en hulpfuncties helpen nieuwe spelers Sudoku patronen te leren.' },
      { q: 'Is de app goed voor experts?', a: 'Ja. Killer Sudoku en 16x16 roosters bieden diepe logische uitdagingen.' },
      { q: 'Zijn er intrusieve advertenties of pop-ups?', a: 'Nee. De app vermijdt schermvullende onderbrekingen.' },
      { q: 'Is er ondersteuning voor Donkere Modus?', a: 'Ja. Lichte Modus, Donkere Modus en Systeem Modus zijn beschikbaar.' }
    ]
  },
  footer: {
    support: 'Ondersteuning',
    privacy: 'Privacybeleid',
    contact: 'Contact',
    rights: '© 2026 Sudoku Ultimato. Alle rechten voorbehouden.'
  },
  supportPage: {
    title: 'Ondersteuning',
    body: `Hulp nodig? Neem contact op via ${SUPPORT_EMAIL}`
  },
  metadata: {
    title: 'Sudoku Ultimato',
    description: 'Eindeloze Sudoku Puzzels'
  }
};

export default nl;
