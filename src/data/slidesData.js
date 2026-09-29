// slidesData.js - Conteúdo completo dos 15 slides do E-Energy para o TCC da ETEC Bento Quirino (2026)

export const TEAM_INFO = {
  projectTitle: "E-Energy",
  projectSubtitle: "Monitoramento e Controle Inteligente de Consumo de Energia Elétrica",
  institution: "ETEC Bento Quirino — Campinas / SP",
  year: "2026",
  advisors: [
    { name: "Profª. Simone Lacerda", role: "Orientadora" },
    { name: "Prof. Rafael Cruz", role: "Orientador" }
  ],
  members: [
    {
      id: "lucas",
      name: "Lucas Mickael Silva Lima",
      role: "Fundamentação & Problemática",
      slidesRange: "Slides 1 a 5",
      color: "#FACC15"
    },
    {
      id: "joao",
      name: "João Miguel dos Santos Silva",
      role: "Hardware & Desenvolvimento",
      slidesRange: "Slides 6 a 10",
      color: "#38BDF8"
    },
    {
      id: "giovani",
      name: "Giovani Amadio Correa",
      role: "Protótipo & Resultados",
      slidesRange: "Slides 11 a 15",
      color: "#4ADE80"
    }
  ]
};

export const SLIDES = [
  {
    id: 1,
    title: "E-ENERGY",
    subtitle: "Monitor de Energia Elétrica",
    category: "CAPA DO PROJETO",
    speaker: "Lucas Mickael Silva Lima",
    speakerId: "lucas",
    estimatedTime: "1 min",
    type: "cover",
    script: `Muito boa noite a todos os membros da banca examinadora, professores, orientadores e demais presentes. 

Meu nome é Lucas Mickael, e juntamente com meus colegas João Miguel e Giovani Amadio, sob a competente orientação dos professores Simone Lacerda e Rafael Cruz, temos a honra de apresentar o nosso Trabalho de Conclusão de Curso: o E-Energy — Monitor de Energia.

O E-Energy é um sistema integrado que une hardware e interface digital para transformar a forma como as pessoas enxergam e controlam o uso da eletricidade em seus lares. Ao longo dos próximos minutos, vamos compartilhar a jornada de desenvolvimento desta solução, desde a identificação do problema até o funcionamento do protótipo físico que construímos e testamos na prática. Sejam muito bem-vindos.`,
    presenterTips: "Mantenha postura ereta, faça contato visual com todos os membros da banca e fale com voz calma e firme. Apresente os orientadores com deferência.",
    bancaDefenseTip: "A capa é o momento de passar segurança e profissionalismo. Demonstre orgulho pelo projeto ser um protótipo físico real construído na ETEC Bento Quirino.",
    bullets: [
      "Sistema de monitoramento e controle de consumo elétrico residencial",
      "Integração física com ESP32, sensor SCT-013 e módulo relé",
      "ETEC Bento Quirino — Campinas • 2026"
    ]
  },
  {
    id: 2,
    title: "A Energia Invisível no Cotidiano",
    subtitle: "01. CONTEXTO & MOTIVAÇÃO",
    category: "INTRODUÇÃO",
    speaker: "Lucas Mickael Silva Lima",
    speakerId: "lucas",
    estimatedTime: "50s",
    type: "context",
    script: `Para compreender a origem do nosso projeto, precisamos olhar para um elemento vital da vida moderna: a energia elétrica. Nós dependemos dela para absolutamente tudo — desde o carregamento dos nossos celulares até o funcionamento de geladeiras, computadores e climatizadores.

Entretanto, existe um grande paradoxo: embora a eletricidade seja indispensável e tenha um custo financeiro e ambiental significativo, nós a consumimos de forma praticamente 'invisível'. Não vemos a corrente fluindo pelo condutor, e na maioria dos lares, as pessoas não fazem ideia de quanta energia um eletrodoméstico específico está demandando no momento exato em que está em funcionamento. É exatamente dessa falta de percepção que surge o E-Energy.`,
    presenterTips: "Use entonação reflexiva. Destaque a expressão 'energia invisível' para conectar a banca à motivação humana do projeto.",
    bancaDefenseTip: "Se a banca perguntar por que este tema é relevante hoje: mencione os aumentos constantes nas tarifas de energia (bandeiras tarifárias) e a necessidade de sustentabilidade.",
    cards: [
      {
        icon: "Zap",
        title: "Dependência Cotidiana",
        desc: "Aparelhos elétricos operam ininterruptamente em nossos lares, elevando a demanda energética média das famílias brasileiras."
      },
      {
        icon: "EyeOff",
        title: "Consumo 'Invisível'",
        desc: "A eletricidade não é tangível aos nossos olhos. Não há feedback visual imediato de quanta energia um equipamento está demandando."
      },
      {
        icon: "TrendingUp",
        title: "Impacto Financeiro e Ecológico",
        desc: "Tarifas crescentes e pressão sobre a matriz energética demandam ferramentas de conscientização ativa, e não apenas passiva."
      }
    ]
  },
  {
    id: 3,
    title: "A 'Caixa Preta' da Conta de Luz",
    subtitle: "02. PROBLEMÁTICA",
    category: "PROBLEMÁTICA",
    speaker: "Lucas Mickael Silva Lima",
    speakerId: "lucas",
    estimatedTime: "1 min",
    type: "problem",
    script: `O problema central que motivou o E-Energy pode ser resumido em uma frase: a fatura de energia é uma 'caixa preta'.

No final de cada mês, recebemos um boleto que nos informa um único valor consolidado em reais e o total de quilowatts-hora gastos. Mas ela não responde às perguntas cruciais: qual aparelho gastou mais? De onde veio aquele pico de consumo? Aquele aparelho deixado em modo de espera (standby) está gerando custo sem necessidade?

Além disso, temos o problema do desperdício por esquecimento. Quantas vezes um ventilador, um ferro elétrico ou uma bancada de equipamentos fica ligada sem ninguém no cômodo? Hoje, para desligá-los, a pessoa precisa ir fisicamente até a tomada. Falta uma ferramenta que dê ao mesmo tempo visão detalhada e poder de ação.`,
    presenterTips: "Enfatize a metáfora da 'caixa preta'. Aponte a dor que todo consumidor sente ao receber a fatura sem saber a discriminação individual dos aparelhos.",
    bancaDefenseTip: "A banca pode perguntar: 'Por que não usar medidores de quadro geral?'. Resposta: Medidores de quadro medem a casa toda, mas não diferenciam se o consumo vem do ferro de passar, da TV ou do carregador. O E-Energy foca na tomada do aparelho.",
    problems: [
      {
        badge: "Problema 01",
        title: "Falta de Discriminação Individual",
        description: "A fatura mensal mostra apenas a somatória global da residência, impossibilitando diagnosticar quais aparelhos são os maiores vilões do consumo."
      },
      {
        badge: "Problema 02",
        title: "Consumo Fantasma (Standby)",
        description: "Equipamentos em modo de espera continuam consumindo corrente 24 horas por dia, gerando desperdício contínuo e silencioso."
      },
      {
        badge: "Problema 03",
        title: "Ausência de Intervenção Imediata",
        description: "A maioria dos sistemas disponíveis no mercado é meramente passiva: mostram um número, mas não permitem desativar a carga remotamente quando necessário."
      }
    ]
  },
  {
    id: 4,
    title: "Por que Desenvolver o E-Energy?",
    subtitle: "03. JUSTIFICATIVA",
    category: "JUSTIFICATIVA",
    speaker: "Lucas Mickael Silva Lima",
    speakerId: "lucas",
    estimatedTime: "1 min",
    type: "justification",
    script: `Diante desse cenário, a criação do E-Energy se justifica por três pilares fundamentais: conscientização, segurança e autonomia.

Primeiro: soluções industriais ou comerciais de automação costumam ter custos elevados, usam protocolos fechados ou exigem modificações complexas nas instalações prediais. 

Segundo: optamos por uma abordagem não invasiva com o sensor SCT-013, o que significa que não é necessário cortar fios energizados para medir a corrente, garantindo total segurança tanto na montagem quanto no uso cotidiano.

E terceiro: unimos o ato de MEDIR ao ato de AGIR. Não adianta apenas saber que algo está consumindo; é preciso ter o controle de cortar a alimentação à distância, com um simples toque na tela. Essa união entre eletrônica embarcada de baixo custo e internet é o que torna o projeto viável e relevante.`,
    presenterTips: "Destaque a palavra 'segurança' e a tecnologia não invasiva. Isso demonstra zelo técnico e responsabilidade com normas de segurança elétrica.",
    bancaDefenseTip: "Enfatize que o baixo custo e a facilidade de instalação tornam o projeto democrático para qualquer família ou instituição de ensino.",
    pillars: [
      {
        number: "01",
        title: "Sensoriamento Seguro",
        detail: "Uso de transformador de corrente tipo alicate bipartido, permitindo medições sem seccionar fisicamente os cabos e sem risco de curto-circuito na rede."
      },
      {
        number: "02",
        title: "Controle Bidirecional Ativo",
        detail: "Combinação de telemetria em tempo real com atuação física por relé, permitindo desligar a tomada remotamente ao identificar consumo indevido."
      },
      {
        number: "03",
        title: "Hardware Acessível & Aberto",
        detail: "Desenvolvimento baseado na plataforma ESP32, garantindo excelente poder de processamento, conectividade Wi-Fi nativa e excelente relação custo-benefício."
      }
    ]
  },
  {
    id: 5,
    title: "Metas Claras e Delimitadas",
    subtitle: "04. OBJETIVOS",
    category: "OBJETIVOS",
    speaker: "Lucas Mickael Silva Lima",
    speakerId: "lucas",
    estimatedTime: "1 min",
    type: "objectives",
    script: `Com esses princípios definidos, delimitamos os objetivos do nosso trabalho de conclusão de curso.

Nosso Objetivo Geral foi: Projetar, construir e validar um protótipo físico funcional de monitoramento e controle de consumo de energia elétrica para aparelhos domésticos, utilizando o microcontrolador ESP32, o sensor de corrente SCT-013 e um módulo relé, com interface digital de visualização e comando.

E para alcançá-lo, estruturamos cinco Objetivos Específicos:
1º: Condicionar o sinal analógico alternado do sensor de corrente para a faixa segura do conversor analógico-digital do ESP32.
2º: Implementar o circuito de acionamento seguro de potência através de módulo relé isolado.
3º: Programar o microcontrolador para amostragem contínua de corrente e cálculo do valor eficaz (RMS).
4º: Desenvolver uma interface digital para apresentar os dados de forma limpa e enviar comandos de acionamento.
5º: E finalmente, montar o protótipo físico e testá-lo com cargas reais em bancada.

Passo agora a palavra ao meu colega João Miguel, que apresentará a solução técnica e o desenvolvimento do sistema.`,
    presenterTips: "Leia os objetivos de forma ritmada e clara. Faça a transição de fala natural convidando o João Miguel com um gesto convidativo.",
    bancaDefenseTip: "Ao final da apresentação, a banca avaliará se estes objetivos foram cumpridos. Mostre determinação: todos foram executados na prática!",
    generalObjective: "Projetar, construir e validar um protótipo físico funcional de monitoramento e controle de consumo elétrico para aparelhos domésticos, integrando ESP32, sensor SCT-013, módulo relé e uma interface digital de fácil manuseio.",
    specificObjectives: [
      { text: "Condicionar o sinal de corrente AC do sensor SCT-013 para a janela de 0 a 3.3V do ESP32.", status: "Concluído" },
      { text: "Implementar chaveamento eletromecânico seguro de carga via módulo relé com isolamento óptico.", status: "Concluído" },
      { text: "Desenvolver firmware com algoritmo de amostragem em tempo real e cálculo da corrente eficaz (IRMS).", status: "Concluído" },
      { text: "Criar interface digital intuitiva para telemetria de consumo e controle liga/desliga remoto.", status: "Concluído" },
      { text: "Integrar os módulos em um protótipo físico de bancada e realizar testes práticos com aparelhos reais.", status: "Concluído" }
    ]
  },
  {
    id: 6,
    title: "A Solução E-Energy",
    subtitle: "05. PROPOSTA DO SISTEMA",
    category: "A SOLUÇÃO",
    speaker: "João Miguel dos Santos Silva",
    speakerId: "joao",
    estimatedTime: "1 min",
    type: "solution",
    script: `Obrigado, Lucas. Boa noite a todos. Sou o João Miguel e vou apresentar a estrutura técnica do E-Energy.

A essência da nossa solução é o elo harmônico entre hardware embarcado e software. Diferente de um medidor convencional que apenas exibe dígitos em um pequeno display de cristal líquido distante do usuário, o E-Energy foi projetado para atuar como um nó inteligente de tomada.

Ele é composto por três blocos essenciais:
Primeiro, o bloco de sensoriamento e manobra, que abraça o fio de alimentação e comuta o circuito.
Segundo, o bloco de inteligência local, centrado no ESP32, que processa centenas de amostras por segundo para extrair o valor real da corrente elétrica e gerenciar a conexão.
E terceiro, o bloco de interação, uma interface gráfica acessível que recebe as leituras em tempo real e permite ao usuário acionar ou cortar a alimentação do aparelho imediatamente. 

Dessa forma, o usuário deixa de ser um mero pagador de faturas e passa a ter o comando sobre a energia de sua casa.`,
    presenterTips: "Adote tom explicativo e técnico. Demonstre domínio sobre a união entre a eletrônica e o software.",
    bancaDefenseTip: "Deixe claro que o E-Energy opera tanto na leitura (sensor) quanto na atuação (relé), fechando o ciclo de controle.",
    architectureBlocks: [
      {
        tag: "CAMADA FÍSICA",
        title: "Sensoriamento & Potência",
        desc: "Transformador de corrente SCT-013 acoplado ao cabo de fase e módulo relé para corte e restabelecimento seguro da linha de alimentação AC."
      },
      {
        tag: "CAMADA LÓGICA",
        title: "Processamento Embarcado",
        desc: "Microcontrolador ESP32 processando amostras analógicas via ADC, calculando corrente eficaz (RMS) e gerenciando a pilha de rede Wi-Fi."
      },
      {
        tag: "CAMADA DE APLICAÇÃO",
        title: "Interface & Controle",
        desc: "Ambiente digital com visualização de métricas de consumo e botões interativos para acionamento remoto com confirmação de estado."
      }
    ]
  },
  {
    id: 7,
    title: "Componentes e Tecnologias",
    subtitle: "06. ESPECIFICAÇÕES TÉCNICAS",
    category: "TECNOLOGIAS",
    speaker: "João Miguel dos Santos Silva",
    speakerId: "joao",
    estimatedTime: "1m 15s",
    type: "components",
    script: `Para garantir precisão, confiabilidade e baixo custo, selecionamos componentes amplamente consolidados na engenharia eletrônica e na prototipagem.

No coração do sistema está o ESP32. Escolhemos este microcontrolador por sua arquitetura dual-core de 240 MHz, conectividade Wi-Fi e Bluetooth nativas e seus conversores analógico-digitais de 12 bits de resolução. Ele nos deu folga de processamento para calcular valores eficazes de onda senoidal sem engasgos.

Para o sensoriamento de corrente, utilizamos o SCT-013-000. Ele é um transformador de corrente tipo split-core que funciona por indução magnética. A grande vantagem é que ele 'abraça' o cabo de fase sem contato elétrico direto, oferecendo isolamento galvânico intrínseco.

Para o acionamento da carga, empregamos um módulo relé de 1 canal com capacidade de comutação de até 10A em 250V AC. Um detalhe crítico que adotamos é o isolamento por optoacoplador, que impede que transientes indutivos da rede elétrica cheguem aos pinos lógicos do ESP32.

E entre o sensor e o ESP32, projetamos um circuito de condicionamento de sinal, com resistor de burden para converter a corrente induzida em tensão, e um divisor de tensão com capacitor para elevar o sinal alternado para uma referência DC de 1.65V, pois o ADC só lê tensões positivas.`,
    presenterTips: "Explique com clareza o motivo de cada componente. Aponte para os cards na tela conforme fala de cada um.",
    bancaDefenseTip: "A banca de eletrônica adora perguntar: 'Por que foi necessário o circuito de condicionamento com offset DC?'. Resposta: A corrente do sensor é alternada (AC), variando entre semiciclos positivos e negativos. O ADC do ESP32 só lê de 0 a 3.3V. Sem o offset de 1.65V, o semiciclo negativo seria ceifado ou queimaria a porta do microcontrolador.",
    components: [
      {
        name: "ESP32 DevKit V1",
        role: "Unidade Central de Processamento",
        specs: "Dual-Core Tensilica Xtensa 240 MHz • Wi-Fi 802.11 b/g/n • ADC 12-bit • Tensão lógica 3.3V",
        why: "Processamento ágil para cálculo RMS e comunicação em rede integrada no próprio chip."
      },
      {
        name: "Sensor SCT-013-000",
        role: "Transformador de Corrente (TC)",
        specs: "Corrente nominal de entrada até 100A AC • Saída em corrente (50mA) • Núcleo bipartido de ferrite",
        why: "Instalação não invasiva e total isolamento elétrico entre a rede de alta tensão e o circuito lógico."
      },
      {
        name: "Módulo Relé 5V / 10A",
        role: "Atuador Eletromecânico de Carga",
        specs: "Capacidade até 10A / 250VAC • Isolação óptica por optoacoplador • Contatos NA (Normalmente Aberto) e NF",
        why: "Comutação segura de equipamentos elétricos com proteção contra surtos para o microcontrolador."
      },
      {
        name: "Circuito de Condicionamento",
        role: "Adequação de Sinal Analógico",
        specs: "Resistor de Burden (calibração V/I) • Divisor resistivo 10kΩ/10kΩ • Capacitor de desacoplamento 10µF",
        why: "Aplica offset DC de 1.65V permitindo a leitura fiel de ambos os semiciclos da onda senoidal de 60Hz."
      }
    ]
  },
  {
    id: 8,
    title: "Etapas do Desenvolvimento",
    subtitle: "07. METODOLOGIA APLICADA",
    category: "DESENVOLVIMENTO",
    speaker: "João Miguel dos Santos Silva",
    speakerId: "joao",
    estimatedTime: "1 min",
    type: "development",
    script: `O desenvolvimento do E-Energy seguiu uma metodologia estruturada em cinco etapas complementares:

Na primeira etapa, fizemos o dimensionamento teórico dos circuitos e a seleção dos componentes, calculando o resistor de burden ideal para a faixa de corrente que pretendíamos testar.

Na segunda etapa, realizamos a montagem do circuito de condicionamento em protoboard, testando a estabilização do ponto médio de 1.65V e a resposta com osciloscópio e multímetro.

Na terceira etapa, programamos o firmware do ESP32 na IDE Arduino em linguagem C++. Implementamos rotinas de amostragem em alta velocidade, calculando a raiz média quadrática — o valor RMS da corrente — a partir de múltiplas amostras de ciclos completos da rede de 60 Hertz.

Na quarta etapa, desenvolvemos a interface digital, estruturando o envio de dados via rede local e os comandos de controle de relé.

E na quinta etapa, integramos todos os módulos no protótipo físico, partindo para os testes com aparelhos reais na bancada da ETEC.`,
    presenterTips: "Mostre fluidez cronológica. Demonstre que o grupo seguiu o método científico e de engenharia de projetos.",
    bancaDefenseTip: "Ressalte que a montagem prévia em protoboard e validação instrumental reduziram riscos de queima de componentes.",
    steps: [
      {
        num: "01",
        title: "Dimensionamento",
        desc: "Cálculos teóricos do resistor de Burden, limites de corrente e proteção galvânica."
      },
      {
        num: "02",
        title: "Condicionamento",
        desc: "Montagem do divisor resistivo e filtro capacitivo para o offset DC do sinal AC."
      },
      {
        num: "03",
        title: "Firmware em C++",
        desc: "Amostragem em alta taxa, algoritmo de cálculo RMS e controle dos pinos GPIO."
      },
      {
        num: "04",
        title: "Interface Digital",
        desc: "Desenvolvimento da camada de controle e visualização para telemetria em tempo real."
      },
      {
        num: "05",
        title: "Integração & Bancada",
        desc: "Conexão dos módulos elétricos ao protótipo físico final e testes práticos de carga."
      }
    ]
  },
  {
    id: 9,
    title: "Fluxo Operacional do Sistema",
    subtitle: "08. ARQUITETURA DE DADOS E ENERGIA",
    category: "FUNCIONAMENTO",
    speaker: "João Miguel dos Santos Silva",
    speakerId: "joao",
    estimatedTime: "1m 15s",
    type: "workflow",
    script: `Neste diagrama podemos visualizar com extrema clareza como a energia e as informações fluem pelo E-Energy.

Observem que a rede elétrica de 127 volts alimenta o nosso circuito. O condutor de Fase passa por dentro da abertura do sensor SCT-013. Pela lei da indução de Faraday, a corrente alternada gera um campo magnético variável no núcleo de ferrite, induzindo uma pequena corrente proporcional no enrolamento secundário do sensor.

Essa corrente é convertida em tensão pelo resistor de burden e recebe o offset DC de 1.65V no circuito de condicionamento. O sinal então entra no pino analógico do ESP32, onde o firmware calcula o valor RMS e empacota essas leituras.

Esses dados são transmitidos por Wi-Fi para a interface digital, onde o usuário visualiza o consumo em tempo real. E quando o usuário clica no botão de ligar ou desligar na interface, o comando faz o caminho inverso: viaja pela rede até o ESP32, que altera o estado do pino digital, acionando a bobina do relé e abrindo ou fechando os contatos de potência que alimentam o aparelho doméstico. É um ciclo completo de monitoramento e controle.`,
    presenterTips: "Aponte fisicamente para as etapas do diagrama na tela (Rede -> Sensor -> ESP32 -> Interface -> Relé -> Carga).",
    bancaDefenseTip: "Se perguntarem: 'Por que o sensor só pode abraçar um dos fios e não o cabo bipolar completo?'. Resposta: Se abraçarmos fase e neutro juntos, as correntes fluem em sentidos opostos, seus campos magnéticos se cancelam e a medição resulta em zero.",
    diagramSteps: [
      { step: "01", from: "Rede Elétrica (127V)", to: "Cabo de Fase", desc: "Fornecimento de energia para o circuito de potência" },
      { step: "02", from: "Cabo de Fase", to: "Sensor SCT-013", desc: "Indução eletromagnética proporcional à corrente da carga" },
      { step: "03", from: "SCT-013", to: "Circuito Condicionador", desc: "Resistor de Burden + Offset DC de 1.65V para o ADC" },
      { step: "04", from: "Condicionador", to: "ESP32 (ADC)", desc: "Conversão A/D de 12 bits e cálculo da corrente eficaz (IRMS)" },
      { step: "05", from: "ESP32", to: "Interface Digital", desc: "Transmissão das leituras de corrente e potência via Wi-Fi" },
      { step: "06", from: "Interface", to: "Módulo Relé", desc: "Envio de comando de corte/acionamento para a chave de carga" },
      { step: "07", from: "Relé", to: "Aparelho Doméstico", desc: "Interrupção ou restabelecimento físico da alimentação AC" }
    ]
  },
  {
    id: 10,
    title: "Interface de Monitoramento e Controle",
    subtitle: "09. DEMONSTRAÇÃO CONCEITUAL INTERATIVA",
    category: "INTERFACE DIGITAL",
    speaker: "João Miguel dos Santos Silva",
    speakerId: "joao",
    estimatedTime: "1m 30s",
    type: "interface-demo",
    script: `Apresentamos agora a interface digital do E-Energy, que aqui trouxemos como uma representação interativa para demonstrar a dinâmica do sistema aos avaliadores.

O objetivo da interface foi fugir de painéis complicados e gráficos ilegíveis. Nós desenhamos uma experiência direta:
No painel superior, o usuário tem a leitura instantânea da corrente em Amperes e da potência estimada em Watts, acompanhada pelo status da conexão Wi-Fi do ESP32.

No centro, há o comando principal: o botão de acionamento do relé. Ao tocar nesse botão, enviamos o sinal de comutação. Se desligarmos a carga, o sistema confirma o estado, e a corrente cai imediatamente a zero. 

Abaixo, incluímos seletor de cargas típicas para simulação e um histórico recente que mostra as oscilações de consumo. Isso permite ao usuário enxergar em tempo real a diferença gritante entre um aparelho em repouso e um equipamento sob uso intenso.

Passo a palavra agora ao meu colega Giovani Amadio, que apresentará o protótipo físico e os resultados práticos dos nossos testes.`,
    presenterTips: "Interaja com os controles na tela! Clique no botão de Ligar/Desligar carga e troque os aparelhos de demonstração (Lâmpada, Ventilador, Ferro de Passar). Mostre como a interface reage.",
    bancaDefenseTip: "Ressalte que a interface prioriza a simplicidade e usabilidade para que qualquer pessoa leiga consiga operar e entender seu consumo.",
    isInteractive: true
  },
  {
    id: 11,
    title: "Construção do Protótipo Físico",
    subtitle: "10. MATERIALIZAÇÃO DO HARDWARE",
    category: "PROTÓTIPO FÍSICO",
    speaker: "Giovani Amadio Correa",
    speakerId: "giovani",
    estimatedTime: "1m 15s",
    type: "prototype",
    script: `Muito obrigado, João. Boa noite a todos os presentes. Sou o Giovani Amadio e vou falar sobre a materialização física do E-Energy e os resultados que alcançamos.

Um dos pontos que mais nos orgulha neste TCC é que o E-Energy não ficou restrito ao papel ou a uma simulação em computador. Nós construímos um protótipo físico de bancada real, que foi montado e testado nas dependências da ETEC Bento Quirino.

Tomamos cuidados rigorosos na montagem:
Separamos fisicamente a seção de alta tensão — a rede alternada de 127 volts que alimenta a carga através do relé — da seção de baixa tensão contínua, onde operam o ESP32 e o circuito de condicionamento.
O sensor SCT-013 foi acoplado com firmeza exclusivamente ao condutor de Fase, garantindo leituras estáveis.
Utilizamos bornes de conexão reforçados e tomadas no padrão brasileiro NBR 14136, possibilitando plugar com facilidade qualquer equipamento doméstico para teste.

Neste slide, reservamos um espaço de destaque para fotografias do protótipo em bancada, evidenciando o arranjo dos componentes e a montagem final.`,
    presenterTips: "Transmita entusiasmo e seriedade técnica ao falar da montagem real. Aponte para as fotos e os detalhes de segurança adotados pelo grupo.",
    bancaDefenseTip: "Se a banca perguntar sobre segurança elétrica: cite a separação galvânica entre o circuito lógico de 3.3V/5V e a rede de 127V, o uso do optoacoplador do relé e o núcleo isolado do SCT-013.",
    highlights: [
      {
        title: "Separação de Potência e Controle",
        desc: "Seccionamento físico entre a linha alternada de 127V e a linha de baixa tensão (3.3V/5V DC) para eliminar risco de contato acidental."
      },
      {
        title: "Conexão Padrão NBR 14136",
        desc: "Tomada fêmea integrada para permitir o teste direto de qualquer plugue de aparelho convencional sem adaptações improvisadas."
      },
      {
        title: "Acoplamento Magnético Firme",
        desc: "Garra do sensor SCT-013 devidamente travada ao redor do condutor de fase isolado, prevenindo ruídos mecânicos de vibração."
      }
    ]
  },
  {
    id: 12,
    title: "Testes e Resultados Obtidos",
    subtitle: "11. VALIDAÇÃO PRÁTICA EM BANCADA",
    category: "TESTES E RESULTADOS",
    speaker: "Giovani Amadio Correa",
    speakerId: "giovani",
    estimatedTime: "1m 15s",
    type: "results",
    script: `Com o protótipo montado, submetemos o E-Energy a ensaios práticos em bancada para verificar se ele atendia a todos os requisitos do projeto.

Realizamos três conjuntos de testes:
Primeiro, o Teste de Sensoriamento de Corrente: Conectamos diferentes cargas elétricas conhecidas. O sensor SCT-013 respondeu com rapidez, gerando tensões analógicas coerentes no circuito condicionador e permitindo ao firmware detectar prontamente a entrada e saída de carga.

Segundo, o Teste de Chaveamento do Relé: Acionamos o relé repetidas vezes através dos comandos da interface. O chaveamento foi firme e instantâneo. O optoacoplador isolou com sucesso os picos de retorno da bobina, sem que o ESP32 sofresse qualquer reinicialização ou travamento.

E terceiro, o Teste de Comunicação e Estabilidade: A transmissão dos estados de corrente e potência entre o microcontrolador e a interface digital manteve-se estável, com resposta imediata aos comandos de ligar e desligar.

Com esses resultados práticos, comprovamos que todos os objetivos propostos para o nosso TCC foram integralmente alcançados.`,
    presenterTips: "Ressalte a objetividade dos testes. Evite adjetivos vagos; use termos de engenharia como 'estabilidade', 'comutação sem travamento' e 'resposta coerente'.",
    bancaDefenseTip: "A regra de ouro: Não inventamos números mágicos de economia! Deixe explícito que o protótipo validou a eficácia do sensoriamento, a estabilidade de rede e o controle de carga em bancada.",
    testBlocks: [
      {
        testName: "1. Ensaio de Sensoriamento (SCT-013)",
        methodology: "Aplicação de cargas resistivas e indutivas para verificar a resposta do transformador de corrente e do condicionador de sinal.",
        result: "Detecção imediata de variação de corrente, com sinal senoidal condicionado dentro dos limites de 0 a 3.3V do ADC do ESP32."
      },
      {
        testName: "2. Ensaio de Acionamento (Módulo Relé)",
        methodology: "Comutação repetitiva de ligar/desligar com carga energizada via pulsos de controle nos pinos GPIO.",
        result: "Chaveamento mecânico seguro e sem indução de ruído no microcontrolador, validando a eficácia do optoacoplador de isolamento."
      },
      {
        testName: "3. Ensaio de Comunicação & Interface",
        methodology: "Envio contínuo de pacotes de telemetria e recepção de comandos remotos de acionamento em rede local.",
        result: "Latência baixa, sincronismo em tempo real entre o estado físico da carga e a indicação visual na interface digital."
      }
    ]
  },
  {
    id: 13,
    title: "Benefícios e Aplicações Práticas",
    subtitle: "12. IMPACTO E CONTRIBUIÇÃO",
    category: "BENEFÍCIOS",
    speaker: "Giovani Amadio Correa",
    speakerId: "giovani",
    estimatedTime: "1 min",
    type: "benefits",
    script: `Os resultados obtidos comprovam que o E-Energy tem um potencial de aplicação muito amplo e benéfico:

Na esfera da Conscientização: Estudos comportamentais demonstram que ter visibilidade do consumo em tempo real incentiva as pessoas a mudarem seus hábitos de forma espontânea. Ver o consumo aumentar ao ligar um aparelho gera um aprendizado imediato sobre eficiência energética.

No combate ao Desperdício Oculto: Aparelhos em modo standby ou deixados ligados por esquecimento podem ser facilmente identificados e desenergizados com um toque, sem a necessidade de deslocamento físico até a tomada.

Na Segurança Residencial e Institucional: A possibilidade de desligar remotamente uma carga elétrica agrega uma camada a mais de tranquilidade, por exemplo, caso o usuário tenha dúvidas se deixou um aparelho de aquecimento ligado ao sair de casa.

E na Educação Técnica: O protótipo serve como uma excelente plataforma de aprendizado em laboratórios escolares como os da própria ETEC Bento Quirino, demonstrando a aplicação prática da IoT na sustentabilidade.`,
    presenterTips: "Conecte a teoria com o mundo real. Destaque como a tecnologia pode mudar a relação das pessoas com a energia elétrica.",
    bancaDefenseTip: "Se a banca perguntar onde o sistema pode ser instalado: Residências, salas de aula de informática, escritórios, consultórios e oficinas pedagógicas.",
    benefits: [
      {
        icon: "Lightbulb",
        title: "Conscientização em Tempo Real",
        desc: "Substitui a incerteza do final do mês por informação instantânea, estimulando a adoção de hábitos de consumo mais sustentáveis."
      },
      {
        icon: "PowerOff",
        title: "Eliminação do Consumo Standby",
        desc: "Permite cortar por completo a alimentação de aparelhos que continuam consumindo energia mesmo quando desligados pelo controle remoto."
      },
      {
        icon: "ShieldCheck",
        title: "Segurança e Prevenção",
        desc: "Capacidade de interrupção remota da tomada em situações de esquecimento ou suspeita de sobrecarga elétrica."
      },
      {
        icon: "DollarSign",
        title: "Viabilidade Econômica",
        desc: "Construído sobre hardware acessível de código aberto, apresentando custo muito inferior ao de tomadas inteligentes importadas proprietárias."
      }
    ]
  },
  {
    id: 14,
    title: "Desafios Superados e Próximos Passos",
    subtitle: "13. ENGENHARIA CRÍTICA & EVOLUÇÃO",
    category: "DESAFIOS E MELHORIAS",
    speaker: "Giovani Amadio Correa",
    speakerId: "giovani",
    estimatedTime: "1m 15s",
    type: "challenges-future",
    script: `Como em qualquer projeto de engenharia real, o desenvolvimento do E-Energy nos colocou diante de desafios técnicos importantes, os quais gostaríamos de destacar com honestidade acadêmica:

O primeiro grande desafio foi a não linearidade nas faixas mais baixas do conversor analógico-digital do ESP32. Precisamos ajustar o ganho do circuito de burden e aplicar calibração matemática no firmware para suavizar leituras de pequenas correntes.
O segundo desafio foram os ruídos transitórios provocados pelo acionamento da bobina do relé, superados com o uso de desacoplamento capacitivo e correta polarização do optoacoplador.

E olhando para o futuro, delimitamos com clareza o que é evolução proposta e o que já foi feito:
Como proposta futura, sugerimos a incorporação de um sensor de tensão (como o ZMPT101B) para medir também a forma de onda da tensão e calcular o Fator de Potência real e a potência ativa precisa.
Propomos também a integração com banco de dados em nuvem para armazenamento de séries temporais de consumo, e o desenvolvimento de um gabinete fechado em impressão 3D com plástico antichamas.`,
    presenterTips: "Mostre maturidade técnica ao assumir os desafios superados. Bancas acadêmicas valorizam imensamente alunos que conhecem as limitações e sabem apontar o caminho futuro do projeto.",
    bancaDefenseTip: "Distinguir claramente o que foi concluído (monitoramento de corrente + relé + interface local) do que é melhoria futura (leitura de tensão ativa/FP + nuvem) demonstra integridade científica exemplar.",
    challenges: [
      {
        title: "Comportamento do ADC do ESP32",
        solution: "Ajuste fino do offset DC e calibração por software para compensar zonas de atenuação do conversor analógico-digital."
      },
      {
        title: "Ruídos de Comutação Indutiva",
        solution: "Isolação galvânica por optoacoplador no módulo relé e capacitores de filtro para estabilizar as linhas de alimentação."
      }
    ],
    futureProposals: [
      {
        badge: "Proposta Futura 1",
        title: "Medição de Tensão Ativa & Fator de Potência",
        desc: "Integração de sensor de tensão (ex: ZMPT101B) para cálculo exato de potência ativa (W), reativa (VAr) e defasagem angular (cos φ)."
      },
      {
        badge: "Proposta Futura 2",
        title: "Armazenamento em Nuvem & Histórico Contínuo",
        desc: "Persistência de dados em servidor IoT para geração de relatórios de consumo diário, semanal e projeção de faturas."
      },
      {
        badge: "Proposta Futura 3",
        title: "Gabinete Personalizado em Impressão 3D",
        desc: "Desenvolvimento de carcaça compacta tipo plugueira com material antichama (ABS/PETG) para instalação direta na parede."
      }
    ]
  },
  {
    id: 15,
    title: "Conclusão e Agradecimentos",
    subtitle: "14. CONSIDERAÇÕES FINAIS",
    category: "CONCLUSÃO",
    speaker: "Giovani Amadio Correa",
    speakerId: "giovani",
    estimatedTime: "1 min",
    type: "conclusion",
    script: `Chegamos à conclusão da nossa apresentação reafirmando que o E-Energy cumpriu com rigor e êxito o propósito a que se propôs: transformar o consumo invisível de energia em informação clara e ação concreta na mão do usuário.

Desenvolvemos uma solução funcional, segura e acessível, demonstrando que a integração entre eletrônica embarcada e interfaces digitais é uma poderosa aliada no uso racional dos nossos recursos energéticos.

Gostaríamos de expressar nossos mais sinceros agradecimentos:
À banca examinadora, pela presença atenta e pelas futuras contribuições que certamente engrandecerão este trabalho;
Aos nossos orientadores, Professora Simone Lacerda e Professor Rafael Cruz, por cada orientação técnica, pelo incentivo constante e por nos guiarem até aqui;
E a toda a comunidade da ETEC Bento Quirino, por proporcionar a estrutura e o ambiente propício para que pudéssemos aprender, criar e realizar.

Encerramos com uma reflexão: 'Você só pode gerenciar aquilo que consegue medir. O E-Energy transforma consumo invisível em consciência e controle.'

Muito obrigado a todos, e nos colocamos à disposição para as perguntas da banca.`,
    presenterTips: "Finalize com voz firme e agradecida. Olhe nos olhos dos avaliadores. Ao terminar a frase final marcante, respire e sorria antes de abrir para a banca.",
    bancaDefenseTip: "Ao abrir para perguntas: mantenham a calma, escutem toda a pergunta antes de responder e dividam as respostas de acordo com as especialidades de cada integrante.",
    keyTakeaways: [
      "Integração bem-sucedida entre hardware embarcado (ESP32) e interface digital.",
      "Sensoriamento não invasivo e seguro com acoplamento magnético.",
      "Protótipo físico testado e aprovado com cargas reais em ambiente de bancada.",
      "Cumprimento integral dos objetivos propostos no plano de TCC da ETEC Bento Quirino."
    ],
    finalQuote: "“Você só pode gerenciar aquilo que consegue medir. O E-Energy transforma o consumo invisível em consciência, economia e controle.”"
  }
];
