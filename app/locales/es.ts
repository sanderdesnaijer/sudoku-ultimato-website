import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const es: Translations = {
  common: {
    selectLanguage: "Seleccionar idioma",
  },
  hero: {
    title: "Sudoku Ultimato - Puzzles Gratis de Sudoku Clásico y Killer",
    subtitle:
      "Sudoku sin límites. Juega Sudoku Clásico, Killer Sudoku y cuadrículas gigantes con una interfaz limpia y puzzles infinitos. Diseñado tanto para jugadores casuales como expertos.",
    ctaApple: "Descargar en iOS",
    ctaGoogle: "Descargar en Android",
    availableSoon: "Disponible pronto",
    imageAlt: "Muestra de la App Sudoku Ultimato",
    imageTitle: "Muestra de la App Sudoku Ultimato",
    classicImageAlt: "Modo Sudoku Clásico",
    classicImageTitle: "Modo Sudoku Clásico",
    killerImageAlt: "Modo Killer Sudoku",
    killerImageTitle: "Modo Killer Sudoku",
    largeImageAlt: "Modo Sudoku 16x16",
    largeImageTitle: "Modo Sudoku 16x16",
  },
  intro: {
    title: "Qué es Sudoku Ultimato",
    description:
      "Sudoku Ultimato es una aplicación moderna de Sudoku que genera cada puzzle instantáneamente. En lugar de una biblioteca fija de tableros prediseñados, la app crea puzzles a partir de semillas, lo que significa que el suministro nunca se agota y la dificultad se mantiene consistente.\n\nLos jugadores pueden elegir entre diferentes modos y tamaños de tablero, incluyendo Sudoku Clásico y jaulas de Killer Sudoku. Para sesiones rápidas hay tableros pequeños de 4x4. Para sesiones largas de resolución profunda hay cuadrículas gigantes de 16x16. Los puzzles diarios están disponibles para rachas y progreso personal.",
  },
  features: {
    title: "Características Principales",
    items: [
      "Sudoku Clásico y Killer Sudoku",
      "Puzzles infinitos generados instantáneamente desde semillas",
      "Modo de desafío diario",
      "Tamaños de tablero 4×4, 9×9 y 16×16",
      "Temas claro y oscuro",
      "Opciones de accesibilidad como zoom, tamaño de texto y hápticos",
      "Soporte horizontal en teléfonos y tablets",
      "Entrada rápida con distracciones mínimas",
      "Publicidad limitada y no intrusiva",
      "Disponible en inglés, holandés, tailandés y más",
      "Disponible en App Store y Google Play",
    ],
  },
  modes: {
    title: "Múltiples Modos de Sudoku",
    items: {
      classic: {
        title: "Sudoku Clásico",
        description: "El Sudoku estándar 9x9 que la mayoría de jugadores conocen.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Una variante donde las jaulas y los totales de suma crean restricciones adicionales. Este modo recompensa la lógica más profunda y el reconocimiento de patrones.",
      },
      sizes: {
        title: "Cuadrículas Pequeñas y Grandes",
        description:
          "Juega puzzles pequeños de 4x4 para pausas rápidas o puzzles gigantes de 16x16 para sesiones más largas y estrategias avanzadas.",
      },
    },
  },
  endless: {
    title: "Puzzles Infinitos",
    description:
      "Cada puzzle de Sudoku se genera a partir de una semilla determinista. Los niveles nunca se repiten y la dificultad permanece consistente. No hay espera por nuevos paquetes o desbloqueos de nivel. Puedes jugar tanto como quieras.",
  },
  themes: {
    title: "Temas y Personalización Visual",
    description:
      "Sudoku Ultimato incluye un sistema de temas para sesiones de juego largas y cómodas. Los jugadores pueden elegir Modo Claro, Modo Oscuro o seguir el Modo del Sistema. Los colores de alto contraste y las fuentes limpias facilitan detectar patrones.",
  },
  progress: {
    title: "Rastrea Tu Progreso y Estadísticas",
    description:
      "Monitorea tu viaje en Sudoku con seguimiento de progreso completo y estadísticas detalladas. Ve tasas de finalización, mejores tiempos y rachas en todos los niveles de dificultad y modos de juego. La pantalla de progreso muestra tu puzzle actual, puzzles completados con métricas de rendimiento y tasas de victoria. Las estadísticas proporcionan información sobre tu tiempo de juego, dificultad favorita, rachas más largas y mejora general con el tiempo.",
  },
  accessibility: {
    title: "Accesibilidad y Comodidad del Jugador",
    description:
      "La accesibilidad se trata como una característica central. La app soporta:",
    items: [
      "Controles de zoom y gestos de pellizco",
      "Modo horizontal",
      "Visuales de números claros",
      "Entrada rápida",
      "Retroalimentación háptica",
      "Conteo de números restantes",
      "Limpieza automática de notas",
    ],
    note: "Estas características ayudan tanto a jugadores nuevos como experimentados a resolver más rápido sin esfuerzo.",
  },
  daily: {
    title: "Puzzles Diarios",
    description:
      "Un puzzle diario está disponible para rachas y mejora personal. Los puzzles diarios se almacenan para que los jugadores puedan comparar tiempos y rastrear el progreso durante semanas y meses.",
  },
  noAds: {
    title: "Sin Anuncios Intrusivos",
    description:
      "Sudoku Ultimato no interrumpe el juego con anuncios de pantalla completa. Esto mantiene el ritmo de resolución calmado y enfocado.",
  },
  whyKiller: {
    title: "Por Qué Importan Killer Sudoku y 16x16",
    description:
      "Killer Sudoku añade capas de lógica adicionales a través de jaulas de suma y reglas de duplicados. Las cuadrículas grandes de Sudoku 16x16 demandan más planificación y recompensan técnicas avanzadas como escaneo, eliminación de candidatos y juego de patrones.\n\nEstos modos raramente están disponibles juntos en una sola app, especialmente con generación infinita y características de accesibilidad.",
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        q: "¿Tiene Sudoku Ultimato niveles de Sudoku infinitos?",
        a: "Sí. Cada nivel se genera a partir de una semilla y los puzzles nunca se agotan.",
      },
      {
        q: "¿La app incluye Killer Sudoku?",
        a: "Sí. Las jaulas Killer y las sumas de jaula están incluidas con visuales limpios y contornos punteados.",
      },
      { q: "¿Qué tamaños de cuadrícula se soportan?", a: "4x4, 9x9 y 16x16." },
      {
        q: "¿Es Sudoku Ultimato amigable para principiantes?",
        a: "Sí. Las cuadrículas pequeñas y las características de asistencia ayudan a los nuevos jugadores a aprender patrones de Sudoku.",
      },
      {
        q: "¿Es la app buena para expertos?",
        a: "Sí. Killer Sudoku y las cuadrículas 16x16 proporcionan desafíos lógicos profundos.",
      },
      {
        q: "¿Hay anuncios intrusivos o pop-ups?",
        a: "No. La app evita interrupciones de pantalla completa.",
      },
      {
        q: "¿Hay soporte para Modo Oscuro?",
        a: "Sí. Modo Claro, Modo Oscuro y Modo del Sistema están disponibles.",
      },
      {
        q: "¿Qué idiomas se soportan?",
        a: "Sudoku Ultimato se puede jugar en inglés y también en los siguientes idiomas:\n🇺🇸 English\n🇳🇱 Nederlands\n🇹🇭 ไทย\n🇩🇪 Deutsch\n🇪🇸 Español\n🇫🇷 Français\n🇧🇷 Português\n🇮🇹 Italiano",
      },
    ],
  },
  footer: {
    support: "Soporte",
    privacy: "Política de Privacidad",
    contact: "Contacto",
    contactEmailSubject: "Pregunta sobre Sudoku Ultimato",
    developer: "Hecho por Sander de Snaijer",
    rights: "© 2026 Sudoku Ultimato. Todos los derechos reservados.",
  },
  supportPage: {
    title: "Soporte",
    body: `¿Necesitas ayuda? Contáctanos en ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Política de Privacidad",
    lastUpdated: `Última actualización: ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Información que Recopilamos",
        content:
          "Nuestro objetivo es recopilar la menor cantidad de información personal posible. La App puede recopilar los siguientes tipos de datos:",
      },
      {
        title: "1.1 Datos de Uso y Juego",
        content: [
          "Tiempos de finalización de puzzles",
          "Errores y pistas utilizadas",
          "Participación en puzzles diarios",
          "Selecciones de dificultad",
        ],
      },
      {
        title: "",
        content:
          "Estos datos pueden almacenarse localmente en tu dispositivo o en Firebase Firestore si la sincronización en la nube o las tablas de clasificación están habilitadas.",
      },
      {
        title: "1.2 Datos del Dispositivo y Técnicos",
        content:
          "Podemos recopilar automáticamente datos técnicos no identificativos, como modelo del dispositivo, versión del SO, versión de la app, registros de fallos y métricas de rendimiento. Esto ayuda a mejorar la estabilidad y la depuración.",
      },
      {
        title: "1.3 Información de Cuenta Opcional",
        content:
          "La App puede ofrecer autenticación opcional (ej., Firebase Auth). Esto se usa para sincronizar estadísticas entre dispositivos y participar en funciones de la nube. Si inicias sesión, podemos almacenar identificadores de usuario, nombres para mostrar y direcciones de correo electrónico (si se proporcionan). No requerimos una cuenta para jugar.",
      },
      {
        title: "1.4 Datos de Publicidad",
        content:
          "La App usa Google AdMob para mostrar anuncios no intrusivos. AdMob puede recopilar identificadores de publicidad (ej., AAID/IDFA), ubicación aproximada (basada en IP) y señales de anuncios basados en intereses (si lo permiten la configuración de tu dispositivo). Puedes optar por no recibir anuncios basados en intereses a través de la configuración del dispositivo.",
      },
      {
        title: "2. Almacenamiento Local",
        content:
          "La App almacena ciertos datos en tu dispositivo para funcionar sin conexión, como progreso del juego, configuración, preferencias, estado del puzzle diario y estadísticas (almacenadas usando bases de datos locales como Hive/Isar).",
      },
      {
        title: "3. Privacidad de los Niños",
        content:
          "Esta App no está diseñada para niños menores de 13 años. No recopilamos conscientemente información personal de niños. Si crees que esto ha ocurrido, por favor contáctanos y eliminaremos dichos datos.",
      },
      {
        title: "4. Cómo Usamos los Datos",
        content: [
          "Generar puzzles",
          "Guardar progreso",
          "Mejorar la dificultad de los puzzles",
          "Proporcionar estadísticas y tablas de clasificación",
          "Corregir bugs y fallos",
          "Mostrar anuncios no intrusivos (AdMob)",
          "Sincronizar datos entre dispositivos (si has iniciado sesión)",
        ],
      },
      {
        title: "",
        content: "No vendemos datos a terceros.",
      },
      {
        title: "5. Servicios de Terceros",
        content:
          "La App usa Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (publicidad) y framework Flutter (UI). Sus políticas aplican cuando interactúas con esos servicios.",
      },
      {
        title: "6. Retención de Datos",
        content:
          "Retenemos datos de juego y estadísticos mientras la App permanezca operativa o hasta que solicites su eliminación (si está vinculado a una cuenta). Los datos sin conexión se almacenan solo en tu dispositivo y se eliminan cuando desinstalas la App.",
      },
      {
        title: "7. Eliminación de Datos / Opt-Out",
        content: `Los usuarios pueden solicitar eliminación de cuenta, eliminación de datos en la nube y opt-out del seguimiento de anuncios (a través de la configuración del dispositivo). Para solicitar la eliminación, contacta al soporte en: ${SUPPORT_EMAIL}. Los datos en la nube serán eliminados en un tiempo razonable.`,
      },
      {
        title: "8. Seguridad",
        content:
          "Tomamos medidas razonables para proteger los datos, incluyendo reglas de seguridad de Firebase, control de acceso para Firestore, recopilación mínima de datos y sin identificadores personales innecesarios. Sin embargo, ningún servicio digital puede garantizar seguridad absoluta.",
      },
      {
        title: "9. Transferencias Internacionales de Datos",
        content:
          "Firebase y servicios relacionados pueden procesar datos en múltiples regiones, incluyendo fuera de la UE, bajo marcos conformes con el RGPD.",
      },
      {
        title: "10. Cambios a Esta Política",
        content:
          "Podemos actualizar esta Política de Privacidad según sea necesario. Las actualizaciones se publicarán dentro de la App o en nuestro sitio web.",
      },
      {
        title: "11. Contacto",
        content: `Para preguntas o inquietudes sobre privacidad: Soporte de Sudoku Ultimato. Email: ${SUPPORT_EMAIL}. Sitio web: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Sudoku Clásico y Killer Infinito para iOS",
    description:
      "Juega puzzles de Sudoku infinitos. Clásico, Killer y cuadrículas 16x16. Desafíos diarios, interfaz limpia, modo oscuro. App iOS gratuita.",
  },
  video: {
    youtubeId: "r9uxd65gljM",
    title: "Mira Sudoku Ultimato en acción",
  },
  cta: {
    title: "¿Listo para Empezar a Resolver?",
    subtitle:
      "Descarga Sudoku Ultimato ahora y disfruta de puzzles ilimitados en modos Clásico, Killer y cuadrícula gigante. Disponible gratis en iOS y Android.",
  },
};

export default es;
