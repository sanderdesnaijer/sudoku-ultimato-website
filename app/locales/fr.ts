import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const fr: Translations = {
  common: {
    selectLanguage: "Sélectionner la langue",
  },
  hero: {
    title: "Sudoku Ultimato - Puzzles Sudoku Classique et Killer Gratuits",
    subtitle:
      "Sudoku sans limites. Jouez au Sudoku Classique, Killer Sudoku et aux grilles géantes avec une interface épurée et des puzzles infinis. Conçu pour les joueurs occasionnels et les experts.",
    ctaApple: "Télécharger sur iOS",
    ctaGoogle: "Télécharger sur Android",
    availableSoon: "Bientôt disponible",
    imageAlt: "Aperçu de l'App Sudoku Ultimato",
    imageTitle: "Aperçu de l'App Sudoku Ultimato",
    classicImageAlt: "Mode Sudoku Classique",
    classicImageTitle: "Mode Sudoku Classique",
    killerImageAlt: "Mode Killer Sudoku",
    killerImageTitle: "Mode Killer Sudoku",
    largeImageAlt: "Mode Sudoku 16x16",
    largeImageTitle: "Mode Sudoku 16x16",
  },
  intro: {
    title: "Qu'est-ce que Sudoku Ultimato",
    description:
      "Sudoku Ultimato est une application Sudoku moderne qui génère chaque puzzle instantanément. Au lieu d'une bibliothèque fixe de grilles préfabriquées, l'application crée des puzzles à partir de graines, ce qui signifie que l'approvisionnement ne s'épuise jamais et que la difficulté reste constante.\n\nLes joueurs peuvent choisir entre différents modes et tailles de grille, y compris le Sudoku Classique et les cages de Killer Sudoku. Pour des sessions rapides, il y a des petites grilles 4x4. Pour de longues sessions de résolution approfondie, il y a des grilles géantes 16x16. Des puzzles quotidiens sont disponibles pour les séries et la progression personnelle.",
  },
  features: {
    title: "Fonctionnalités Principales",
    items: [
      "Sudoku Classique et Killer Sudoku",
      "Puzzles infinis générés instantanément à partir de graines",
      "Mode défi quotidien",
      "Tailles de grille 4×4, 9×9 et 16×16",
      "Thèmes clair et sombre",
      "Options d'accessibilité comme le zoom, la taille du texte et les haptiques",
      "Support du mode paysage sur téléphones et tablettes",
      "Saisie rapide avec un minimum de distractions",
      "Publicité limitée et non intrusive",
      "Disponible en anglais, néerlandais, thaï et plus",
      "Disponible sur l'App Store et Google Play",
    ],
  },
  modes: {
    title: "Plusieurs Modes de Sudoku",
    items: {
      classic: {
        title: "Sudoku Classique",
        description: "Le Sudoku standard 9x9 que la plupart des joueurs connaissent.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Une variante où les cages et les totaux de somme créent des contraintes supplémentaires. Ce mode récompense une logique plus profonde et la reconnaissance de motifs.",
      },
      sizes: {
        title: "Petites et Grandes Grilles",
        description:
          "Jouez à des petits puzzles 4x4 pour des pauses rapides ou à des puzzles géants 16x16 pour des sessions plus longues et des stratégies avancées.",
      },
    },
  },
  endless: {
    title: "Puzzles Infinis",
    description:
      "Chaque puzzle Sudoku est généré à partir d'une graine déterministe. Les niveaux ne se répètent jamais et la difficulté reste constante. Il n'y a pas d'attente pour de nouveaux packs ou déblocages de niveau. Vous pouvez jouer autant que vous voulez.",
  },
  themes: {
    title: "Thèmes et Personnalisation Visuelle",
    description:
      "Sudoku Ultimato inclut un système de thèmes pour des sessions de jeu longues et confortables. Les joueurs peuvent choisir le Mode Clair, le Mode Sombre ou suivre le Mode Système. Les couleurs à haut contraste et les polices claires facilitent le repérage des motifs.",
  },
  progress: {
    title: "Suivez Votre Progression et Statistiques",
    description:
      "Surveillez votre parcours Sudoku avec un suivi de progression complet et des statistiques détaillées. Consultez les taux d'achèvement, les meilleurs temps et les séries à travers tous les niveaux de difficulté et modes de jeu. L'écran de progression montre votre puzzle actuel, les puzzles complétés avec des métriques de performance et les taux de victoire. Les statistiques fournissent des informations sur votre temps de jeu, difficulté préférée, séries les plus longues et amélioration globale au fil du temps.",
  },
  accessibility: {
    title: "Accessibilité et Confort du Joueur",
    description:
      "L'accessibilité est traitée comme une fonctionnalité essentielle. L'application prend en charge :",
    items: [
      "Contrôles de zoom et gestes de pincement",
      "Mode paysage",
      "Visuels de chiffres clairs",
      "Saisie rapide",
      "Retour haptique",
      "Comptage des chiffres restants",
      "Effacement automatique des notes",
    ],
    note: "Ces fonctionnalités aident aussi bien les nouveaux joueurs que les joueurs expérimentés à résoudre plus rapidement sans effort.",
  },
  daily: {
    title: "Puzzles Quotidiens",
    description:
      "Un puzzle quotidien est disponible pour les séries et l'amélioration personnelle. Les puzzles quotidiens sont sauvegardés pour que les joueurs puissent comparer les temps et suivre la progression sur des semaines et des mois.",
  },
  noAds: {
    title: "Pas de Publicités Intrusives",
    description:
      "Sudoku Ultimato n'interrompt pas le jeu avec des publicités en plein écran. Cela maintient le rythme de résolution calme et concentré.",
  },
  whyKiller: {
    title: "Pourquoi le Killer Sudoku et le 16x16 Comptent",
    description:
      "Le Killer Sudoku ajoute des couches de logique supplémentaires à travers les cages de somme et les règles de doublons. Les grandes grilles Sudoku 16x16 demandent plus de planification et récompensent des techniques avancées comme le balayage, l'élimination de candidats et le jeu de motifs.\n\nCes modes sont rarement disponibles ensemble dans une seule application, surtout avec une génération infinie et des fonctionnalités d'accessibilité.",
  },
  faq: {
    title: "Questions Fréquemment Posées",
    items: [
      {
        q: "Sudoku Ultimato a-t-il des niveaux de Sudoku infinis ?",
        a: "Oui. Chaque niveau est généré à partir d'une graine et les puzzles ne s'épuisent jamais.",
      },
      {
        q: "L'application inclut-elle le Killer Sudoku ?",
        a: "Oui. Les cages Killer et les sommes de cages sont incluses avec des visuels clairs et des contours en pointillés.",
      },
      { q: "Quelles tailles de grille sont supportées ?", a: "4x4, 9x9 et 16x16." },
      {
        q: "Sudoku Ultimato est-il adapté aux débutants ?",
        a: "Oui. Les petites grilles et les fonctionnalités d'assistance aident les nouveaux joueurs à apprendre les motifs du Sudoku.",
      },
      {
        q: "L'application est-elle bonne pour les experts ?",
        a: "Oui. Le Killer Sudoku et les grilles 16x16 offrent des défis logiques profonds.",
      },
      {
        q: "Y a-t-il des publicités intrusives ou des pop-ups ?",
        a: "Non. L'application évite les interruptions en plein écran.",
      },
      {
        q: "Y a-t-il un support du Mode Sombre ?",
        a: "Oui. Le Mode Clair, le Mode Sombre et le Mode Système sont disponibles.",
      },
      {
        q: "Quelles langues sont supportées ?",
        a: "Sudoku Ultimato est jouable en anglais et aussi dans les langues suivantes :\n🇺🇸 English\n🇳🇱 Nederlands\n🇹🇭 ไทย\n🇩🇪 Deutsch\n🇪🇸 Español\n🇫🇷 Français\n🇧🇷 Português\n🇮🇹 Italiano",
      },
    ],
  },
  footer: {
    support: "Support",
    privacy: "Politique de Confidentialité",
    contact: "Contact",
    contactEmailSubject: "Question sur Sudoku Ultimato",
    developer: "Créé par Sander de Snaijer",
    rights: "© 2026 Sudoku Ultimato. Tous droits réservés.",
  },
  supportPage: {
    title: "Support",
    body: `Besoin d'aide ? Contactez-nous à ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Politique de Confidentialité",
    lastUpdated: `Dernière mise à jour : ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Informations que Nous Collectons",
        content:
          "Nous visons à collecter le moins d'informations personnelles possible. L'Application peut collecter les types de données suivants :",
      },
      {
        title: "1.1 Données d'Utilisation et de Jeu",
        content: [
          "Temps d'achèvement des puzzles",
          "Erreurs et indices utilisés",
          "Participation aux puzzles quotidiens",
          "Sélections de difficulté",
        ],
      },
      {
        title: "",
        content:
          "Ces données peuvent être stockées localement sur votre appareil ou sur Firebase Firestore si la synchronisation cloud ou les classements sont activés.",
      },
      {
        title: "1.2 Données de l'Appareil et Techniques",
        content:
          "Nous pouvons collecter automatiquement des données techniques non identifiantes, telles que le modèle de l'appareil, la version du système d'exploitation, la version de l'application, les journaux de plantage et les métriques de performance. Cela aide à améliorer la stabilité et le débogage.",
      },
      {
        title: "1.3 Informations de Compte Optionnelles",
        content:
          "L'Application peut offrir une authentification optionnelle (ex., Firebase Auth). Celle-ci est utilisée pour synchroniser les statistiques entre les appareils et participer aux fonctionnalités cloud. Si vous vous connectez, nous pouvons stocker des identifiants d'utilisateur, des noms d'affichage et des adresses e-mail (si fournies). Nous n'exigeons pas de compte pour jouer.",
      },
      {
        title: "1.4 Données Publicitaires",
        content:
          "L'Application utilise Google AdMob pour afficher des publicités non intrusives. AdMob peut collecter des identifiants publicitaires (ex., AAID/IDFA), une localisation approximative (basée sur l'IP) et des signaux publicitaires basés sur les intérêts (si autorisés par les paramètres de votre appareil). Vous pouvez vous désinscrire des publicités basées sur les intérêts via les paramètres de l'appareil.",
      },
      {
        title: "2. Stockage Local",
        content:
          "L'Application stocke certaines données sur votre appareil pour fonctionner hors ligne, telles que la progression du jeu, les paramètres, les préférences, le statut du puzzle quotidien et les statistiques (stockées à l'aide de bases de données locales comme Hive/Isar).",
      },
      {
        title: "3. Confidentialité des Enfants",
        content:
          "Cette Application n'est pas conçue pour les enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous pensez que cela s'est produit, veuillez nous contacter et nous supprimerons ces données.",
      },
      {
        title: "4. Comment Nous Utilisons les Données",
        content: [
          "Générer des puzzles",
          "Sauvegarder la progression",
          "Améliorer la difficulté des puzzles",
          "Fournir des statistiques et des classements",
          "Corriger les bugs et les plantages",
          "Afficher des publicités non intrusives (AdMob)",
          "Synchroniser les données entre les appareils (si connecté)",
        ],
      },
      {
        title: "",
        content: "Nous ne vendons pas de données à des tiers.",
      },
      {
        title: "5. Services Tiers",
        content:
          "L'Application utilise Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (publicité) et le framework Flutter (UI). Leurs politiques s'appliquent lors de l'interaction avec ces services.",
      },
      {
        title: "6. Conservation des Données",
        content:
          "Nous conservons les données de jeu et statistiques tant que l'Application reste opérationnelle ou jusqu'à ce que vous demandiez leur suppression (si liées à un compte). Les données hors ligne sont stockées uniquement sur votre appareil et sont supprimées lorsque vous désinstallez l'Application.",
      },
      {
        title: "7. Suppression des Données / Désinscription",
        content: `Les utilisateurs peuvent demander la suppression du compte, la suppression des données cloud et la désinscription du suivi publicitaire (via les paramètres de l'appareil). Pour demander une suppression, contactez le support à : ${SUPPORT_EMAIL}. Les données cloud seront supprimées dans un délai raisonnable.`,
      },
      {
        title: "8. Sécurité",
        content:
          "Nous prenons des mesures raisonnables pour protéger les données, y compris les règles de sécurité Firebase, le contrôle d'accès pour Firestore, la collecte minimale de données et aucun identifiant personnel inutile. Cependant, aucun service numérique ne peut garantir une sécurité absolue.",
      },
      {
        title: "9. Transferts Internationaux de Données",
        content:
          "Firebase et les services connexes peuvent traiter des données dans plusieurs régions, y compris en dehors de l'UE, dans le cadre de frameworks conformes au RGPD.",
      },
      {
        title: "10. Modifications de Cette Politique",
        content:
          "Nous pouvons mettre à jour cette Politique de Confidentialité si nécessaire. Les mises à jour seront publiées dans l'Application ou sur notre site web.",
      },
      {
        title: "11. Contact",
        content: `Pour des questions ou des préoccupations concernant la confidentialité : Support Sudoku Ultimato. Email : ${SUPPORT_EMAIL}. Site web : ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Sudoku Classique et Killer Infini pour iOS",
    brand: "Sudoku Ultimato",
    description:
      "Jouez à des puzzles Sudoku infinis. Classique, Killer et grilles 16x16. Défis quotidiens, interface épurée, mode sombre. Application iOS gratuite.",
  },
  video: {
    youtubeId: "r9uxd65gljM",
    title: "Regardez Sudoku Ultimato en action",
  },
  cta: {
    title: "Prêt à Commencer à Résoudre ?",
    subtitle:
      "Téléchargez Sudoku Ultimato maintenant et profitez de puzzles illimités en modes Classique, Killer et grille géante. Disponible gratuitement sur iOS et Android.",
  },
};

export default fr;
