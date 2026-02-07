import { Translations } from "./types";
import {
  SUPPORT_EMAIL,
  WEBSITE_URL,
  PRIVACY_POLICY_LAST_UPDATED,
} from "../constants";

const pt: Translations = {
  common: {
    selectLanguage: "Selecionar idioma",
  },
  hero: {
    title: "Sudoku Ultimato - Puzzles Grátis de Sudoku Clássico e Killer",
    subtitle:
      "Sudoku sem limites. Jogue Sudoku Clássico, Killer Sudoku e grades gigantes com uma interface limpa e puzzles infinitos. Projetado tanto para jogadores casuais quanto especialistas.",
    ctaApple: "Baixar no iOS",
    ctaGoogle: "Baixar no Android",
    availableSoon: "Disponível em breve",
    imageAlt: "Demonstração do App Sudoku Ultimato",
    imageTitle: "Demonstração do App Sudoku Ultimato",
    classicImageAlt: "Modo Sudoku Clássico",
    classicImageTitle: "Modo Sudoku Clássico",
    killerImageAlt: "Modo Killer Sudoku",
    killerImageTitle: "Modo Killer Sudoku",
    largeImageAlt: "Modo Sudoku 16x16",
    largeImageTitle: "Modo Sudoku 16x16",
  },
  intro: {
    title: "O que é Sudoku Ultimato",
    description:
      "Sudoku Ultimato é um aplicativo moderno de Sudoku que gera cada puzzle instantaneamente. Em vez de uma biblioteca fixa de tabuleiros pré-fabricados, o app cria puzzles a partir de sementes, o que significa que o suprimento nunca acaba e a dificuldade permanece consistente.\n\nOs jogadores podem escolher entre diferentes modos e tamanhos de tabuleiro, incluindo Sudoku Clássico e gaiolas de Killer Sudoku. Para sessões rápidas, há tabuleiros pequenos de 4x4. Para longas sessões de resolução profunda, há grades gigantes de 16x16. Puzzles diários estão disponíveis para sequências e progresso pessoal.",
  },
  features: {
    title: "Recursos Principais",
    items: [
      "Sudoku Clássico e Killer Sudoku",
      "Puzzles infinitos gerados instantaneamente a partir de sementes",
      "Modo desafio diário",
      "Tamanhos de tabuleiro 4×4, 9×9 e 16×16",
      "Temas claro e escuro",
      "Opções de acessibilidade como zoom, tamanho de texto e hápticos",
      "Suporte a modo paisagem em celulares e tablets",
      "Entrada rápida com distrações mínimas",
      "Publicidade limitada e não intrusiva",
      "Disponível em inglês, holandês, tailandês e mais",
      "Disponível na App Store e Google Play",
    ],
  },
  modes: {
    title: "Múltiplos Modos de Sudoku",
    items: {
      classic: {
        title: "Sudoku Clássico",
        description: "O Sudoku padrão 9x9 que a maioria dos jogadores conhece.",
      },
      killer: {
        title: "Killer Sudoku",
        description:
          "Uma variante onde gaiolas e totais de soma criam restrições adicionais. Este modo recompensa lógica mais profunda e reconhecimento de padrões.",
      },
      sizes: {
        title: "Grades Pequenas e Grandes",
        description:
          "Jogue puzzles pequenos de 4x4 para pausas rápidas ou puzzles gigantes de 16x16 para sessões mais longas e estratégias avançadas.",
      },
    },
  },
  endless: {
    title: "Puzzles Infinitos",
    description:
      "Cada puzzle de Sudoku é gerado a partir de uma semente determinística. Os níveis nunca se repetem e a dificuldade permanece consistente. Não há espera por novos pacotes ou desbloqueios de nível. Você pode jogar o quanto quiser.",
  },
  themes: {
    title: "Temas e Personalização Visual",
    description:
      "Sudoku Ultimato inclui um sistema de temas para sessões de jogo longas e confortáveis. Os jogadores podem escolher Modo Claro, Modo Escuro ou seguir o Modo do Sistema. Cores de alto contraste e fontes limpas facilitam a identificação de padrões.",
  },
  progress: {
    title: "Acompanhe Seu Progresso e Estatísticas",
    description:
      "Monitore sua jornada no Sudoku com rastreamento de progresso abrangente e estatísticas detalhadas. Veja taxas de conclusão, melhores tempos e sequências em todos os níveis de dificuldade e modos de jogo. A tela de progresso mostra seu puzzle atual, puzzles completados com métricas de desempenho e taxas de vitória. As estatísticas fornecem insights sobre seu tempo de jogo, dificuldade favorita, sequências mais longas e melhoria geral ao longo do tempo.",
  },
  accessibility: {
    title: "Acessibilidade e Conforto do Jogador",
    description:
      "A acessibilidade é tratada como um recurso central. O app suporta:",
    items: [
      "Controles de zoom e gestos de pinça",
      "Modo paisagem",
      "Visuais de números claros",
      "Entrada rápida",
      "Feedback háptico",
      "Contagem de números restantes",
      "Limpeza automática de notas",
    ],
    note: "Esses recursos ajudam tanto jogadores novos quanto experientes a resolver mais rápido sem esforço.",
  },
  daily: {
    title: "Puzzles Diários",
    description:
      "Um puzzle diário está disponível para sequências e melhoria pessoal. Os puzzles diários são armazenados para que os jogadores possam comparar tempos e acompanhar o progresso ao longo de semanas e meses.",
  },
  noAds: {
    title: "Sem Anúncios Intrusivos",
    description:
      "Sudoku Ultimato não interrompe o jogo com anúncios em tela cheia. Isso mantém o ritmo de resolução calmo e focado.",
  },
  whyKiller: {
    title: "Por Que o Killer Sudoku e 16x16 Importam",
    description:
      "O Killer Sudoku adiciona camadas de lógica adicionais através de gaiolas de soma e regras de duplicatas. As grandes grades de Sudoku 16x16 exigem mais planejamento e recompensam técnicas avançadas como varredura, eliminação de candidatos e jogo de padrões.\n\nEstes modos raramente estão disponíveis juntos em um único app, especialmente com geração infinita e recursos de acessibilidade.",
  },
  faq: {
    title: "Perguntas Frequentes",
    items: [
      {
        q: "O Sudoku Ultimato tem níveis de Sudoku infinitos?",
        a: "Sim. Cada nível é gerado a partir de uma semente e os puzzles nunca acabam.",
      },
      {
        q: "O app inclui Killer Sudoku?",
        a: "Sim. Gaiolas Killer e somas de gaiolas estão incluídas com visuais limpos e contornos tracejados.",
      },
      { q: "Quais tamanhos de grade são suportados?", a: "4x4, 9x9 e 16x16." },
      {
        q: "O Sudoku Ultimato é amigável para iniciantes?",
        a: "Sim. Grades pequenas e recursos de assistência ajudam novos jogadores a aprender padrões de Sudoku.",
      },
      {
        q: "O app é bom para especialistas?",
        a: "Sim. Killer Sudoku e grades 16x16 fornecem desafios lógicos profundos.",
      },
      {
        q: "Há anúncios intrusivos ou pop-ups?",
        a: "Não. O app evita interrupções em tela cheia.",
      },
      {
        q: "Há suporte para Modo Escuro?",
        a: "Sim. Modo Claro, Modo Escuro e Modo do Sistema estão disponíveis.",
      },
      {
        q: "Quais idiomas são suportados?",
        a: "Sudoku Ultimato pode ser jogado em inglês e também nos seguintes idiomas:\n🇺🇸 English\n🇳🇱 Nederlands\n🇹🇭 ไทย\n🇩🇪 Deutsch\n🇪🇸 Español\n🇫🇷 Français\n🇧🇷 Português\n🇮🇹 Italiano",
      },
    ],
  },
  footer: {
    support: "Suporte",
    privacy: "Política de Privacidade",
    contact: "Contato",
    contactEmailSubject: "Pergunta sobre Sudoku Ultimato",
    developer: "Feito por Sander de Snaijer",
    rights: "© 2026 Sudoku Ultimato. Todos os direitos reservados.",
  },
  supportPage: {
    title: "Suporte",
    body: `Precisa de ajuda? Entre em contato conosco em ${SUPPORT_EMAIL}`,
  },
  privacyPage: {
    title: "Política de Privacidade",
    lastUpdated: `Última atualização: ${PRIVACY_POLICY_LAST_UPDATED}`,
    sections: [
      {
        title: "1. Informações que Coletamos",
        content:
          "Nosso objetivo é coletar o mínimo de informações pessoais possível. O Aplicativo pode coletar os seguintes tipos de dados:",
      },
      {
        title: "1.1 Dados de Uso e Jogo",
        content: [
          "Tempos de conclusão de puzzles",
          "Erros e dicas usadas",
          "Participação em puzzles diários",
          "Seleções de dificuldade",
        ],
      },
      {
        title: "",
        content:
          "Esses dados podem ser armazenados localmente no seu dispositivo ou no Firebase Firestore se a sincronização na nuvem ou classificações estiverem habilitadas.",
      },
      {
        title: "1.2 Dados do Dispositivo e Técnicos",
        content:
          "Podemos coletar automaticamente dados técnicos não identificadores, como modelo do dispositivo, versão do SO, versão do app, logs de falhas e métricas de desempenho. Isso ajuda a melhorar a estabilidade e a depuração.",
      },
      {
        title: "1.3 Informações de Conta Opcionais",
        content:
          "O Aplicativo pode oferecer autenticação opcional (ex., Firebase Auth). Isso é usado para sincronizar estatísticas entre dispositivos e participar de recursos na nuvem. Se você fizer login, podemos armazenar identificadores de usuário, nomes de exibição e endereços de e-mail (se fornecidos). Não exigimos uma conta para jogar.",
      },
      {
        title: "1.4 Dados de Publicidade",
        content:
          "O Aplicativo usa Google AdMob para exibir anúncios não intrusivos. O AdMob pode coletar identificadores de publicidade (ex., AAID/IDFA), localização aproximada (baseada em IP) e sinais de anúncios baseados em interesses (se permitido pelas configurações do seu dispositivo). Você pode optar por não receber anúncios baseados em interesses através das configurações do dispositivo.",
      },
      {
        title: "2. Armazenamento Local",
        content:
          "O Aplicativo armazena certos dados no seu dispositivo para funcionar offline, como progresso do jogo, configurações, preferências, status do puzzle diário e estatísticas (armazenadas usando bancos de dados locais como Hive/Isar).",
      },
      {
        title: "3. Privacidade das Crianças",
        content:
          "Este Aplicativo não é projetado para crianças menores de 13 anos. Não coletamos conscientemente informações pessoais de crianças. Se você acredita que isso ocorreu, por favor entre em contato conosco e excluiremos esses dados.",
      },
      {
        title: "4. Como Usamos os Dados",
        content: [
          "Gerar puzzles",
          "Salvar progresso",
          "Melhorar a dificuldade dos puzzles",
          "Fornecer estatísticas e classificações",
          "Corrigir bugs e falhas",
          "Exibir anúncios não intrusivos (AdMob)",
          "Sincronizar dados entre dispositivos (se logado)",
        ],
      },
      {
        title: "",
        content: "Não vendemos dados a terceiros.",
      },
      {
        title: "5. Serviços de Terceiros",
        content:
          "O Aplicativo usa Google Firebase (Auth, Firestore, Analytics, Crashlytics), Google AdMob (publicidade) e framework Flutter (UI). Suas políticas se aplicam ao interagir com esses serviços.",
      },
      {
        title: "6. Retenção de Dados",
        content:
          "Retemos dados de jogo e estatísticos enquanto o Aplicativo permanecer operacional ou até que você solicite a exclusão (se vinculado a uma conta). Os dados offline são armazenados apenas no seu dispositivo e são excluídos quando você desinstala o Aplicativo.",
      },
      {
        title: "7. Exclusão de Dados / Opt-Out",
        content: `Os usuários podem solicitar exclusão de conta, exclusão de dados na nuvem e opt-out do rastreamento de anúncios (através das configurações do dispositivo). Para solicitar exclusão, entre em contato com o suporte em: ${SUPPORT_EMAIL}. Os dados na nuvem serão excluídos em um tempo razoável.`,
      },
      {
        title: "8. Segurança",
        content:
          "Tomamos medidas razoáveis para proteger os dados, incluindo regras de segurança do Firebase, controle de acesso para Firestore, coleta mínima de dados e sem identificadores pessoais desnecessários. No entanto, nenhum serviço digital pode garantir segurança absoluta.",
      },
      {
        title: "9. Transferências Internacionais de Dados",
        content:
          "Firebase e serviços relacionados podem processar dados em várias regiões, incluindo fora da UE, sob frameworks compatíveis com o GDPR.",
      },
      {
        title: "10. Alterações nesta Política",
        content:
          "Podemos atualizar esta Política de Privacidade conforme necessário. As atualizações serão publicadas dentro do Aplicativo ou em nosso site.",
      },
      {
        title: "11. Contato",
        content: `Para perguntas ou preocupações com privacidade: Suporte Sudoku Ultimato. Email: ${SUPPORT_EMAIL}. Site: ${WEBSITE_URL}`,
      },
    ],
  },
  metadata: {
    title: "Sudoku Ultimato - Sudoku Clássico e Killer Infinito para iOS",
    description:
      "Jogue puzzles de Sudoku infinitos. Clássico, Killer e grades 16x16. Desafios diários, interface limpa, modo escuro. App iOS gratuito.",
  },
  video: {
    youtubeId: "r9uxd65gljM",
    title: "Assista Sudoku Ultimato em ação",
  },
  cta: {
    title: "Pronto para Começar a Resolver?",
    subtitle:
      "Baixe Sudoku Ultimato agora e aproveite puzzles ilimitados nos modos Clássico, Killer e grade gigante. Disponível gratuitamente no iOS e Android.",
  },
};

export default pt;
