import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const it: Translations = {
  common: {
    selectLanguage: "Seleziona lingua",
  },
  hero: {
    title: "Sudoku Ultimato - Puzzle Gratuiti di Sudoku Classico e Killer",
    subtitle:
      "Sudoku senza limiti. Gioca a Sudoku Classico, Killer Sudoku e griglie giganti con un'interfaccia pulita e puzzle infiniti. Progettato sia per giocatori occasionali che esperti.",
    ctaApple: "Scarica su iOS",
    ctaGoogle: "Scarica su Android",
    availableSoon: "Disponibile presto",
    imageAlt: "Anteprima dell'App Sudoku Ultimato",
    imageTitle: "Anteprima dell'App Sudoku Ultimato",
    classicImageAlt: "Modalità Sudoku Classico",
    classicImageTitle: "Modalità Sudoku Classico",
    killerImageAlt: "Modalità Killer Sudoku",
    killerImageTitle: "Modalità Killer Sudoku",
    largeImageAlt: "Modalità Sudoku 16x16",
    largeImageTitle: "Modalità Sudoku 16x16",
  },
  intro: {
    title: "Cos'è Sudoku Ultimato",
    description:
      "Sudoku Ultimato è un'app moderna di Sudoku che genera ogni puzzle istantaneamente. Invece di una libreria fissa di schemi prefabbricati, l'app crea puzzle da semi, il che significa che la fornitura non si esaurisce mai e la difficoltà rimane costante.\n\nI giocatori possono scegliere tra diverse modalità e dimensioni della griglia, incluso Sudoku Classico e gabbie di Killer Sudoku. Per sessioni veloci ci sono piccole griglie 4x4. Per lunghe sessioni di risoluzione approfondita ci sono griglie giganti 16x16. Puzzle giornalieri sono disponibili per serie e progresso personale.",
  },
  features: {
    title: "Caratteristiche Principali",
    items: [
      "Sudoku Classico e Killer Sudoku",
      "Puzzle infiniti generati istantaneamente da semi",
      "Modalità sfida giornaliera",
      "Dimensioni griglia 4×4, 9×9 e 16×16",
      "Temi chiaro e scuro",
      "Opzioni di accessibilità come zoom, dimensione testo e haptic",
      "Supporto orizzontale su telefoni e tablet",
      "Inserimento rapido con distrazioni minime",
      "Pubblicità limitata e non invasiva",
      "Disponibile in inglese, olandese, tailandese e altro",
      "Disponibile su App Store e Google Play",
    ],
  },
  modes: {
    title: "Molteplici Modalità di Sudoku",
    items: {
      classic: {
        title: "Sudoku Classico",
        description: "Il Sudoku standard 9x9 che la maggior parte dei giocatori conosce.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Una variante dove le gabbie e i totali delle somme creano vincoli aggiuntivi. Questa modalità premia una logica più profonda e il riconoscimento di pattern.",
      },
      sizes: {
        title: "Griglie Piccole e Grandi",
        description:
          "Gioca puzzle piccoli 4x4 per pause veloci o puzzle giganti 16x16 per sessioni più lunghe e strategie avanzate.",
      },
    },
  },
  endless: {
    title: "Puzzle Infiniti",
    description:
      "Ogni puzzle Sudoku è generato da un seme deterministico. I livelli non si ripetono mai e la difficoltà rimane costante. Non c'è attesa per nuovi pacchetti o sblocchi di livello. Puoi giocare quanto vuoi.",
  },
  themes: {
    title: "Temi e Personalizzazione Visiva",
    description:
      "Sudoku Ultimato include un sistema di temi per sessioni di gioco lunghe e confortevoli. I giocatori possono scegliere Modalità Chiara, Modalità Scura o seguire la Modalità Sistema. I colori ad alto contrasto e i font chiari rendono facile individuare i pattern.",
  },
  progress: {
    title: "Traccia i Tuoi Progressi e Statistiche",
    description:
      "Monitora il tuo percorso nel Sudoku con tracciamento completo dei progressi e statistiche dettagliate. Visualizza tassi di completamento, migliori tempi e serie su tutti i livelli di difficoltà e modalità di gioco. La schermata dei progressi mostra il tuo puzzle attuale, puzzle completati con metriche di prestazione e tassi di vittoria. Le statistiche forniscono informazioni sul tuo tempo di gioco, difficoltà preferita, serie più lunghe e miglioramento generale nel tempo.",
  },
  accessibility: {
    title: "Accessibilità e Comfort del Giocatore",
    description:
      "L'accessibilità è trattata come una caratteristica fondamentale. L'app supporta:",
    items: [
      "Controlli di zoom e gesti di pizzico",
      "Modalità orizzontale",
      "Visualizzazione numeri chiara",
      "Inserimento rapido",
      "Feedback aptico",
      "Conteggio numeri rimanenti",
      "Cancellazione automatica note",
    ],
    note: "Queste caratteristiche aiutano sia i nuovi giocatori che quelli esperti a risolvere più velocemente senza sforzo.",
  },
  daily: {
    title: "Puzzle Giornalieri",
    description:
      "Un puzzle giornaliero è disponibile per serie e miglioramento personale. I puzzle giornalieri vengono salvati così i giocatori possono confrontare i tempi e tracciare i progressi nel corso di settimane e mesi.",
  },
  noAds: {
    title: "Nessuna Pubblicità Invasiva",
    description:
      "Sudoku Ultimato non interrompe il gioco con pubblicità a schermo intero. Questo mantiene il ritmo di risoluzione calmo e concentrato.",
  },
  whyKiller: {
    title: "Perché il Killer Sudoku e il 16x16 Sono Importanti",
    description:
      "Il Killer Sudoku aggiunge livelli di logica aggiuntivi attraverso gabbie di somma e regole sui duplicati. Le grandi griglie Sudoku 16x16 richiedono più pianificazione e premiano tecniche avanzate come scansione, eliminazione di candidati e gioco di pattern.\n\nQueste modalità sono raramente disponibili insieme in un'unica app, specialmente con generazione infinita e caratteristiche di accessibilità.",
  },
  faq: {
    title: "Domande Frequenti",
    items: [
      {
        q: "Sudoku Ultimato ha livelli di Sudoku infiniti?",
        a: "Sì. Ogni livello è generato da un seme e i puzzle non finiscono mai.",
      },
      {
        q: "L'app include il Killer Sudoku?",
        a: "Sì. Le gabbie Killer e le somme delle gabbie sono incluse con visualizzazioni chiare e contorni tratteggiati.",
      },
      { q: "Quali dimensioni di griglia sono supportate?", a: "4x4, 9x9 e 16x16." },
      {
        q: "Sudoku Ultimato è adatto ai principianti?",
        a: "Sì. Griglie piccole e funzionalità di assistenza aiutano i nuovi giocatori a imparare i pattern del Sudoku.",
      },
      {
        q: "L'app è buona per gli esperti?",
        a: "Sì. Killer Sudoku e griglie 16x16 forniscono sfide logiche profonde.",
      },
      {
        q: "Ci sono pubblicità invasive o pop-up?",
        a: "No. L'app evita interruzioni a schermo intero.",
      },
      {
        q: "C'è supporto per la Modalità Scura?",
        a: "Sì. Modalità Chiara, Modalità Scura e Modalità Sistema sono disponibili.",
      },
      {
        q: "Quali lingue sono supportate?",
        a: "Sudoku Ultimato è giocabile in inglese e anche nelle seguenti lingue:\n🇺🇸 English\n🇳🇱 Nederlands\n🇹🇭 ไทย\n🇩🇪 Deutsch\n🇪🇸 Español\n🇫🇷 Français\n🇧🇷 Português\n🇮🇹 Italiano",
      },
    ],
  },
  footer: {
    support: "Supporto",
    privacy: "Informativa sulla Privacy",
    contact: "Contatto",
    contactEmailSubject: "Domanda su Sudoku Ultimato",
    developer: "Creato da Sander de Snaijer",
    rights: "© 2026 Sudoku Ultimato. Tutti i diritti riservati.",
  },
  supportPage: {
    title: "Supporto",
    body: `Hai bisogno di aiuto? Contattaci a ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Informativa sulla Privacy",
    lastUpdated: `Ultimo aggiornamento: ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Informazioni che Raccogliamo",
        content:
          "Il nostro obiettivo è raccogliere il minor numero possibile di informazioni personali. L'App può raccogliere i seguenti tipi di dati:",
      },
      {
        title: "1.1 Dati di Utilizzo e Gioco",
        content: [
          "Tempi di completamento dei puzzle",
          "Errori e suggerimenti utilizzati",
          "Partecipazione ai puzzle giornalieri",
          "Selezioni di difficoltà",
        ],
      },
      {
        title: "",
        content:
          "Questi dati possono essere memorizzati localmente sul tuo dispositivo o su Firebase Firestore se la sincronizzazione cloud o le classifiche sono abilitate.",
      },
      {
        title: "1.2 Dati del Dispositivo e Tecnici",
        content:
          "Potremmo raccogliere automaticamente dati tecnici non identificativi, come modello del dispositivo, versione del sistema operativo, versione dell'app, log di crash e metriche di prestazione. Questo aiuta a migliorare la stabilità e il debugging.",
      },
      {
        title: "1.3 Informazioni dell'Account Opzionali",
        content:
          "L'App può offrire autenticazione opzionale (es., Firebase Auth). Questa viene utilizzata per sincronizzare le statistiche tra dispositivi e partecipare alle funzionalità cloud. Se accedi, potremmo memorizzare identificatori utente, nomi visualizzati e indirizzi email (se forniti). Non richiediamo un account per giocare.",
      },
      {
        title: "1.4 Dati Pubblicitari",
        content:
          "L'App utilizza Google AdMob per mostrare pubblicità non invasive. AdMob può raccogliere identificatori pubblicitari (es., AAID/IDFA), posizione approssimativa (basata su IP) e segnali pubblicitari basati sugli interessi (se consentito dalle impostazioni del tuo dispositivo). Puoi disattivare gli annunci basati sugli interessi tramite le impostazioni del dispositivo.",
      },
      {
        title: "2. Archiviazione Locale",
        content:
          "L'App memorizza alcuni dati sul tuo dispositivo per funzionare offline, come progressi di gioco, impostazioni, preferenze, stato del puzzle giornaliero e statistiche (memorizzate usando database locali come Hive/Isar).",
      },
      {
        title: "3. Privacy dei Minori",
        content:
          "Questa App non è progettata per bambini sotto i 13 anni. Non raccogliamo consapevolmente informazioni personali da bambini. Se ritieni che ciò sia accaduto, contattaci e cancelleremo tali dati.",
      },
      {
        title: "4. Come Utilizziamo i Dati",
        content: [
          "Generare puzzle",
          "Salvare i progressi",
          "Migliorare la difficoltà dei puzzle",
          "Fornire statistiche e classifiche",
          "Correggere bug e crash",
          "Mostrare pubblicità non invasive (AdMob)",
          "Sincronizzare i dati tra dispositivi (se connesso)",
        ],
      },
      {
        title: "",
        content: "Non vendiamo dati a terze parti.",
      },
      {
        title: "5. Servizi di Terze Parti",
        content:
          "L'App utilizza Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (pubblicità) e framework Flutter (UI). Le loro politiche si applicano quando interagisci con questi servizi.",
      },
      {
        title: "6. Conservazione dei Dati",
        content:
          "Conserviamo i dati di gioco e statistici finché l'App rimane operativa o finché non richiedi la cancellazione (se collegato a un account). I dati offline sono memorizzati solo sul tuo dispositivo e vengono eliminati quando disinstalli l'App.",
      },
      {
        title: "7. Cancellazione Dati / Opt-Out",
        content: `Gli utenti possono richiedere cancellazione dell'account, cancellazione dei dati cloud e opt-out del tracciamento pubblicitario (tramite impostazioni del dispositivo). Per richiedere la cancellazione, contatta il supporto a: ${SUPPORT_EMAIL}. I dati cloud saranno cancellati entro un tempo ragionevole.`,
      },
      {
        title: "8. Sicurezza",
        content:
          "Adottiamo misure ragionevoli per proteggere i dati, incluse regole di sicurezza Firebase, controllo degli accessi per Firestore, raccolta minima di dati e nessun identificatore personale non necessario. Tuttavia, nessun servizio digitale può garantire una sicurezza assoluta.",
      },
      {
        title: "9. Trasferimenti Internazionali di Dati",
        content:
          "Firebase e servizi correlati possono elaborare dati in più regioni, incluso al di fuori dell'UE, nell'ambito di framework conformi al GDPR.",
      },
      {
        title: "10. Modifiche a Questa Policy",
        content:
          "Potremmo aggiornare questa Informativa sulla Privacy secondo necessità. Gli aggiornamenti saranno pubblicati all'interno dell'App o sul nostro sito web.",
      },
      {
        title: "11. Contatto",
        content: `Per domande o preoccupazioni sulla privacy: Supporto Sudoku Ultimato. Email: ${SUPPORT_EMAIL}. Sito web: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Sudoku Classico e Killer Infinito per iOS",
    brand: "Sudoku Ultimato",
    description:
      "Gioca a puzzle Sudoku infiniti. Classico, Killer e griglie 16x16. Sfide giornaliere, interfaccia pulita, modalità scura. App iOS gratuita.",
  },
  video: {
    youtubeId: "r9uxd65gljM",
    title: "Guarda Sudoku Ultimato in azione",
  },
  cta: {
    title: "Pronto a Iniziare a Risolvere?",
    subtitle:
      "Scarica Sudoku Ultimato ora e goditi puzzle illimitati in modalità Classica, Killer e griglia gigante. Disponibile gratuitamente su iOS e Android.",
  },
};

export default it;
