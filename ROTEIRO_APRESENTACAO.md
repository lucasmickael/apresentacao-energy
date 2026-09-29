# Roteiro Completo de Apresentação Oral — E-Energy (TCC 2026)
**Trabalho de Conclusão de Curso — ETEC Bento Quirino (Campinas / SP)**  
**Projeto:** E-Energy — Monitor de Energia  
**Orientadores:** Profª. Simone Lacerda e Prof. Rafael Cruz  
**Duração Estimada:** 12 a 15 minutos  

---

## 👥 Divisão de Apresentadores e Blocos

| Integrante | Bloco Temático | Slides | Tempo Estimado |
| :--- | :--- | :---: | :---: |
| **Lucas Mickael Silva Lima** | Abertura, Contexto, Problemática, Justificativa e Objetivos | **1 ao 5** | ~4 min 30s |
| **João Miguel dos Santos Silva** | Solução E-Energy, Tecnologias/Componentes, Metodologia, Fluxo e Interface | **6 ao 10** | ~5 min 45s |
| **Giovani Amadio Correa** | Protótipo Físico, Testes & Resultados, Benefícios, Desafios/Futuro e Conclusão | **11 ao 15** | ~5 min 15s |
| **Todos** | Sessão de Perguntas e Respostas da Banca Examinadora | — | ~10 a 15 min |

---

# PARTE 1 — FUNDAMENTAÇÃO E OBJETIVOS
### Apresentador: Lucas Mickael Silva Lima (Slides 1 a 5)

---

### Slide 1: CAPA — E-Energy: Monitor de Energia
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Capa tecnológica com partículas energéticas, título em amarelo vibrante, dados da ETEC Bento Quirino, nomes dos 3 integrantes e orientadores.

> **Fala de Lucas Mickael:**
> "Muito boa noite a todos os membros da banca examinadora, caros professores orientadores Simone Lacerda e Rafael Cruz, colegas e presentes.
> 
> Meu nome é **Lucas Mickael**, e juntamente com meus colegas **João Miguel** e **Giovani Amadio**, temos a satisfação de apresentar o nosso Trabalho de Conclusão de Curso: o **E-Energy — Monitor de Energia**.
> 
> O E-Energy nasceu da necessidade premente de trazer transparência, inteligência e controle ativo sobre o consumo de energia elétrica em nossos lares. Unindo hardware embarcado de baixo custo, sensoriamento não invasivo e uma interface digital ágil, desenvolvemos um protótipo físico real que foi construído e testado com sucesso nas dependências da ETEC Bento Quirino.
> 
> Ao longo dos próximos minutos, demonstraremos desde os fundamentos teóricos até a validação em bancada da nossa solução. Sejam todos muito bem-vindos!"

*💡 Dica de apresentação:* Postura ereta, ombros abertos, olhar panorâmico para todos os membros da banca. Apresente os nomes com clareza e ritmo pausado.

---

### Slide 2: INTRODUÇÃO — A Energia Invisível no Cotidiano
- **Tempo estimado:** 50 segundos
- **Apoio visual:** Cards conceituais sobre Dependência Energética, Consumo Invisível e Impacto Financeiro/Ecológico.

> **Fala de Lucas Mickael:**
> "Para entendermos a relevância do E-Energy, precisamos refletir sobre como lidamos com a energia elétrica no dia a dia. Nós dependemos dela de forma ininterrupta: para trabalhar, estudar, conservar alimentos, carregar dispositivos e manter o conforto térmico.
> 
> Contudo, a eletricidade possui uma característica particular: ela é um consumo 'invisível'. Ninguém enxerga a corrente fluindo pelos fios. Não há um mostrador no aparelho que diga de forma clara: 'neste momento, estou demandando 500 Watts'.
> 
> Esse distanciamento faz com que as pessoas consumam energia sem nenhuma percepção em tempo real de quanto cada equipamento custa, gerando desperdícios contínuos que pesam tanto no bolso das famílias quanto na sustentabilidade da matriz energética brasileira."

*💡 Dica de apresentação:* Enfatize o contraste entre a indispensabilidade da energia e a sua 'invisibilidade'.

---

### Slide 3: PROBLEMÁTICA — A "Caixa Preta" da Conta de Luz
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Comparativo entre a fatura convencional (somatório fechado) e o consumo individual dos aparelhos (incógnita).

> **Fala de Lucas Mickael:**
> "Essa falta de percepção nos leva ao problema central do nosso trabalho: a fatura mensal de energia elétrica funciona como uma verdadeira 'caixa preta'.
> 
> No fim do mês, recebemos um documento com o valor global em reais e o total de quilowatts-hora gastos pela casa toda. Mas ela não responde às perguntas determinantes: qual aparelho foi o vilão do mês? Quanto gastou o aquecedor? Aquele computador ligado horas a fio em modo de espera gerou quanto desperdício?
> 
> Soma-se a isso o esquecimento humano. Aparelhos esquecidos ligados continuam consumindo sem que ninguém perceba. E quando o usuário se dá conta, a única forma de interromper a corrente é caminhar até o aparelho e puxar o plugue da tomada. Falta uma ferramenta que ofereça ao mesmo tempo visibilidade pontual e poder de intervenção imediata."

*💡 Dica de apresentação:* Conecte a dor do problema com a vivência dos próprios professores da banca: todo mundo já se assustou com uma conta de luz sem saber a causa exata.

---

### Slide 4: JUSTIFICATIVA — Por que Desenvolver o E-Energy?
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Três pilares do projeto: Sensoriamento Seguro Não Invasivo, Controle Bidirecional Ativo e Hardware Acessível.

> **Fala de Lucas Mickael:**
> "Diante dessa carência, o desenvolvimento do E-Energy se justifica por três razões fundamentais:
> 
> Primeiro: Segurança e Não Invasividade. A maioria dos medidores convencionais exige cortar fios energizados para colocá-los em série com a rede. Nós escolhemos o sensor de corrente SCT-013, que opera por indução eletromagnética: ele simplesmente abraça o condutor de fase isolado, sem corte e sem nenhum risco elétrico ao usuário.
> 
> Segundo: Ação Ativa. O E-Energy não é um simples voltímetro passivo. Ele une a medição ao controle: ao detectar que um aparelho está ligado indevidamente, o usuário pode cortar sua alimentação à distância.
> 
> E terceiro: Acessibilidade Econômica. Em vez de recorrer a soluções industriais importadas caríssimas e sistemas fechados, utilizamos componentes de prototipagem modernos e acessíveis como o ESP32, viabilizando uma tecnologia aberta e democrática."

*💡 Dica de apresentação:* Destaque bem o fato de a solução ser 'não invasiva', um diferencial de engenharia e segurança muito elogiado por bancas.

---

### Slide 5: OBJETIVOS — Metas Gerais e Específicas
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Destaque do Objetivo Geral e lista dos 5 Objetivos Específicos com marcadores de conformidade.

> **Fala de Lucas Mickael:**
> "Para guiar nosso trabalho, traçamos metas claras e exatas:
> 
> Como **Objetivo Geral**, propusemos: Projetar, construir e validar um protótipo físico funcional de monitoramento e controle de consumo elétrico para aparelhos domésticos, integrando o microcontrolador ESP32, o sensor de corrente SCT-013, um módulo relé e uma interface digital acessível.
> 
> E para concretizá-lo, cumprimos cinco **Objetivos Específicos**:
> 1. Condicionar o sinal alternado do sensor para a faixa segura de leitura do conversor do ESP32;
> 2. Implementar chaveamento de carga seguro via módulo relé com isolamento óptico;
> 3. Desenvolver o firmware para amostragem contínua e cálculo de corrente eficaz (RMS);
> 4. Desenvolver uma interface digital para telemetria em tempo real e comandos remotos;
> 5. E por fim, montar o protótipo físico e validá-lo em ensaios práticos de bancada.
> 
> Passo agora a palavra ao meu colega **João Miguel**, que apresentará a arquitetura técnica e o desenvolvimento do sistema."

*💡 Dica de transição:* Olhe para o João Miguel, faça um gesto com a mão passando a palavra de forma elegante e sincronizada.

---

# PARTE 2 — ARQUITETURA, DESENVOLVIMENTO E INTERFACE
### Apresentador: João Miguel dos Santos Silva (Slides 6 a 10)

---

### Slide 6: A SOLUÇÃO E-ENERGY — Visão Sistêmica
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Diagrama de 3 camadas: Camada Física (Potência & Sensor), Camada Lógica (ESP32) e Camada de Aplicação (Interface).

> **Fala de João Miguel:**
> "Muito obrigado, Lucas. Boa noite aos membros da banca examinadora e a todos os presentes. Sou o **João Miguel** e vou detalhar a engenharia e o desenvolvimento do E-Energy.
> 
> A essência da nossa solução é o elo harmônico entre hardware embarcado e software. Estruturamos o E-Energy em três camadas interdependentes:
> 
> Na **Camada Física**, temos o ponto de acoplamento com a rede elétrica: o sensor SCT-013 posicionado no cabo de fase para captar a corrente e o módulo relé atuando como chave seccionadora de potência.
> 
> Na **Camada Lógica**, o microcontrolador ESP32 funciona como cérebro do sistema: ele amostra a forma de onda, realiza os cálculos matemáticos para obter a corrente eficaz (RMS), processa as regras de segurança e gerencia a comunicação em rede.
> 
> E na **Camada de Aplicação**, temos uma interface digital intuitiva, permitindo que qualquer pessoa, sem conhecimento técnico prévio, visualize o consumo em tempo real e acione ou desligue o aparelho com um único clique."

*💡 Dica de apresentação:* Mostre segurança técnica. Fale com clareza sobre o fluxo contínuo entre os 3 blocos.

---

### Slide 7: COMPONENTES E TECNOLOGIAS — Especificações Técnicas
- **Tempo estimado:** 1 minuto e 15 segundos
- **Apoio visual:** 4 cards com especificações e justificativas: ESP32 DevKit, SCT-013, Módulo Relé 5V/10A e Circuito Condicionador.

> **Fala de João Miguel:**
> "Para transformar a teoria em realidade, selecionamos componentes consolidados da engenharia eletrônica:
> 
> O **ESP32** foi a escolha ideal por possuir processador Dual-Core de 240 MHz, conectividade Wi-Fi nativa e conversores analógico-digitais de 12 bits. Essa capacidade de processamento nos permitiu calcular valores eficazes de onda senoidal de 60 Hertz sem sobrecarregar a rotina de comunicação.
> 
> O **Sensor SCT-013-000** é um transformador de corrente tipo alicate bipartido. Ele opera com base na Lei de Faraday: a corrente que passa pelo condutor induz uma corrente proporcional no seu enrolamento secundário. Isso garante isolamento galvânico total entre a rede de 127 Volts e o nosso microcontrolador.
> 
> O **Módulo Relé de 1 canal** suporta cargas de até 10 Amperes em 250 Volts AC. Um detalhe indispensável de segurança que adotamos foi o uso de acionamento por **optoacoplador**: o sinal do ESP32 acende um LED interno no módulo que comuta a base do transistor por luz, blindando o microcontrolador contra surtos de tensão e ruídos da bobina.
> 
> E por fim, o **Circuito Condicionador de Sinal**: como o ESP32 só realiza leituras de 0 a 3.3V DC e o sensor gera corrente alternada com semiciclos positivos e negativos, projetamos um divisor resistivo que aplica um offset contínuo de 1.65V, além de um resistor de burden que converte a corrente induzida em sinal de tensão."

*💡 Dica de apresentação:* Esta é a base técnica de eletrônica que a banca mais examina. Explique a função do resistor de burden e do offset de 1.65V com naturalidade.

---

### Slide 8: DESENVOLVIMENTO — Metodologia em 5 Fases
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Linha do tempo metodológica: Dimensionamento, Condicionamento, Firmware C++, Interface Digital e Integração/Bancada.

> **Fala de João Miguel:**
> "O desenvolvimento do projeto seguiu rigorosamente as boas práticas da metodologia de engenharia em cinco etapas:
> 
> Na **Fase 1**, realizamos o dimensionamento teórico do resistor de burden para ajustar a escala de corrente esperada e delimitamos os limites de corrente de segurança.
> Na **Fase 2**, montamos o circuito de condicionamento em protoboard, validando o divisor resistivo e a estabilidade da tensão de referência de 1.65V com multímetro e osciloscópio.
> Na **Fase 3**, escrevemos o firmware em C++ na IDE Arduino. Desenvolvemos o algoritmo de amostragem em alta velocidade, capturando múltiplos ciclos da rede para calcular a raiz média quadrática da corrente.
> Na **Fase 4**, construímos a interface digital com foco na usabilidade, conectando o envio de telemetria aos comandos do relé.
> E na **Fase 5**, integramos todos os módulos no protótipo físico final para início dos ensaios com aparelhos elétricos reais."

*💡 Dica de apresentação:* Mostre que o projeto teve método, organização e testes progressivos antes de energizar cargas reais.

---

### Slide 9: FUNCIONAMENTO DO SISTEMA — Fluxograma Operacional
- **Tempo estimado:** 1 minuto e 15 segundos
- **Apoio visual:** Esquema visual mostrando a trajetória da energia (127V -> SCT-013 -> Relé -> Carga) e a trajetória dos dados (SCT-013 -> Condicionador -> ESP32 -> Wi-Fi -> Interface -> Comando Relé).

> **Fala de João Miguel:**
> "Neste fluxograma, podemos acompanhar de forma cristalina as duas trajetórias do sistema: o fluxo de potência e o fluxo de dados.
> 
> A energia elétrica vem da rede de 127 Volts. O cabo de Fase atravessa a abertura do sensor SCT-013, passa pelos contatos de força do relé e alimenta a tomada onde o aparelho está plugado.
> 
> Conforme o aparelho consome corrente, o SCT-013 gera um sinal proporcional. Esse sinal é condicionado com o offset de 1.65V e entra no pino analógico do ESP32. O firmware calcula a corrente eficaz e transmite esses pacotes via Wi-Fi para a interface digital.
> 
> E quando o usuário decide intervir e clica no botão de desligar na interface, o comando viaja instantaneamente até o ESP32, que comuta o pino GPIO de saída. O relé desarmar os contatos de força e interrompe a corrente do aparelho, fazendo a leitura na tela despencar para zero Amperes imediatamente. É um ciclo completo e em tempo real."

*💡 Dica de apresentação:* Aponte na tela o caminho de ida (dados da medição) e o caminho de volta (comando de acionamento do relé).

---

### Slide 10: INTERFACE DIGITAL — Demonstração Conceitual Interativa
- **Tempo estimado:** 1 minuto e 30 segundos
- **Apoio visual:** Simulador interativo da interface do E-Energy embutido no slide com medidor de corrente, potência, botão Liga/Desliga e seletor de aparelhos (Lâmpada, Ventilador, Ferro de Passar, Standby).

> **Fala de João Miguel:**
> "Apresentamos agora a interface digital do E-Energy, demonstrada aqui de forma interativa.
> 
> Priorizamos um design limpo, no estilo 'visão em tempo real':
> No topo, temos o monitor de corrente em Amperes e a potência calculada em Watts, acompanhados pelo status de conexão do ESP32.
> 
> No centro, temos o comando principal: o botão de acionamento do relé. *(Apresentador clica no botão do slide ou aponta)* Observem que, ao comutar o botão, a interface simula o corte imediato da carga e a corrente zera.
> 
> E abaixo, permitimos a alternância entre perfis de teste típicos: desde uma lâmpada LED de baixo consumo até um ferro de passar de alta demanda, além do consumo contínuo em standby. Essa clareza visual permite ao usuário identificar instantaneamente o impacto de cada equipamento ligado em sua casa.
> 
> Passo a palavra ao meu colega **Giovani Amadio**, que demonstrará a construção física do protótipo e os resultados dos ensaios de bancada."

*💡 Dica de transição:* Demonstre a ação clicando no botão do simulador para a banca ver a resposta visual imediata antes de passar a palavra ao Giovani.

---

# PARTE 3 — PROTÓTIPO, RESULTADOS E ENCERRAMENTO
### Apresentador: Giovani Amadio Correa (Slides 11 a 15)

---

### Slide 11: PROTÓTIPO FÍSICO — Construção e Bancada
- **Tempo estimado:** 1 minuto e 15 segundos
- **Apoio visual:** Moldura técnica com fotos reais do protótipo de bancada construído na ETEC Bento Quirino e destaques construtivos de segurança.

> **Fala de Giovani Amadio:**
> "Muito obrigado, João. Boa noite, professores da banca examinadora e todos os presentes. Sou o **Giovani Amadio** e tenho a satisfação de apresentar a materialização física do E-Energy e as conclusões do nosso trabalho.
> 
> Um dos grandes pilares do nosso TCC na ETEC Bento Quirino é que o projeto não se resumiu a simulações de software. Nós construímos um protótipo físico real, integrado e plenamente operacional.
> 
> Para a montagem, adotamos rigorosos critérios de engenharia e segurança elétrica:
> Primeiro, isolamos e separamos fisicamente a linha de alta tensão alternada (127V) da seção de controle em corrente contínua de baixa tensão do ESP32.
> Segundo, o sensor SCT-013 foi acoplado com firmeza mecânica exclusivamente ao condutor de fase, evitando interferências e vibrações que pudessem gerar ruído de leitura.
> E terceiro, utilizamos tomadas fêmeas no padrão brasileiro NBR 14136, o que nos permitiu plugar qualquer equipamento doméstico de teste de forma simples, padronizada e segura.
> 
> Aqui no slide, destacamos o registro fotográfico da montagem em nossa bancada de laboratório."

*💡 Dica de apresentação:* Mostre orgulho pela construção manual do hardware. Aponte os cuidados tomados para proteger a integridade dos operadores contra choques elétricos.

---

### Slide 12: TESTES E RESULTADOS — Validação em Bancada
- **Tempo estimado:** 1 minuto e 15 segundos
- **Apoio visual:** Matriz de 3 ensaios técnicos: Sensoriamento (SCT-013), Acionamento (Relé) e Comunicação/Interface.

> **Fala de Giovani Amadio:**
> "Com o protótipo montado, realizamos ensaios de bancada para validar o cumprimento dos requisitos técnicos do projeto. É importante frisar: não inventamos dados ou percentuais mirabolantes de economia; nosso foco foi atestar a eficácia e a confiabilidade de engenharia da solução.
> 
> Realizamos três baterias de ensaios:
> 
> **1. Ensaio de Sensoriamento com o SCT-013:** Conectamos cargas resistivas e indutivas conhecidas. O sensor detectou de imediato a circulação de corrente, e o circuito de condicionamento manteve o sinal perfeitamente contido na janela de 0 a 3.3V do conversor analógico-digital, permitindo leituras proporcionais e coerentes.
> 
> **2. Ensaio de Chaveamento do Módulo Relé:** Efetuamos múltiplos ciclos de ligar e desligar sob carga. A resposta foi instantânea, e a isolação óptica com o optoacoplador protegeu o ESP32, sem nenhum registro de travamento, reinicialização espúria ou dano elétrico.
> 
> **3. Ensaio de Comunicação e Resposta:** A transmissão de telemetria e o envio de comandos entre a interface e o microcontrolador mantiveram-se estáveis, com sincronismo em tempo real.
> 
> Concluímos, portanto, que todos os objetivos técnicos propostos no plano de trabalho foram atingidos com êxito."

*💡 Dica de apresentação:* Enfatize a seriedade metodológica. Dizer que 'não inventamos dados fictícios de economia financeira' demonstra maturidade científica e ganha pontos valiosos com os avaliadores.

---

### Slide 13: BENEFÍCIOS E APLICAÇÕES — Impacto Real
- **Tempo estimado:** 1 minuto
- **Apoio visual:** 4 quadrantes de benefícios: Conscientização, Eliminação do Standby, Segurança/Prevenção e Viabilidade Econômica.

> **Fala de Giovani Amadio:**
> "Os resultados comprovam que o E-Energy oferece aplicações práticas muito ricas e transformadoras:
> 
> No âmbito da **Conscientização**: O usuário que acompanha o consumo em tempo real compreende na hora o peso de cada aparelho, mudando hábitos familiares de forma espontânea e duradoura.
> 
> No combate ao **Consumo Fantasma**: O sistema permite desligar de verdade equipamentos que ficam 'dormindo' em standby, consumindo energia 24 horas por dia sem necessidade.
> 
> Na **Segurança Residencial**: Caso o morador saia de casa com dúvida se esqueceu um aparelho de aquecimento ou uma bancada ligada, ele pode conferir e desenergizar a tomada pelo celular com total segurança.
> 
> E na **Educação Técnica**: Por ter sido construído com arquitetura aberta, o protótipo pode ser replicado em outros laboratórios da ETEC Bento Quirino para aulas práticas de física, eletrotécnica e Internet das Coisas."

*💡 Dica de apresentação:* Mostre que o projeto tem valor tanto para o consumidor comum quanto para o ambiente escolar e técnico.

---

### Slide 14: DESAFIOS E MELHORIAS FUTURAS — Engenharia Crítica
- **Tempo estimado:** 1 minuto e 15 segundos
- **Apoio visual:** Desafios superados (ADC do ESP32 e Ruídos indutivos) x Propostas de Evolução Futura (Sensor de tensão/FP, Nuvem e Gabinete 3D).

> **Fala de Giovani Amadio:**
> "Como em todo projeto de engenharia autêntico, nos deparamos com desafios técnicos reais durante o percurso, os quais superamos com pesquisa e dedicação:
> 
> O primeiro foi a não linearidade nas faixas inferiores do conversor analógico-digital do ESP32, um comportamento conhecido do chip. Superamos isso ajustando a polarização do circuito de condicionamento e implementando calibração matemática por software.
> O segundo foram os transitórios gerados pela bobina do relé, neutralizados com o circuito optoacoplado e desacoplamento capacitivo.
> 
> E para a evolução contínua do projeto, delimitamos claramente propostas futuras:
> Como próxima etapa, sugerimos a incorporação de um sensor de tensão, como o ZMPT101B, permitindo medir simultaneamente a senoide de tensão, calcular o Fator de Potência exato e mensurar potências ativas e reativas.
> Sugerimos também a integração com banco de dados em nuvem para histórico de longo prazo e a modelagem de um gabinete compacto tipo plugueira em impressão 3D com plástico antichama."

*💡 Dica de apresentação:* Separar o que JÁ FOI FEITO do que É PROPOSTA FUTURA é uma das maiores virtudes de uma apresentação de TCC. A banca admira essa clareza.

---

### Slide 15: CONCLUSÃO E AGRADECIMENTOS — Encerramento
- **Tempo estimado:** 1 minuto
- **Apoio visual:** Resumo dos marcos alcançados, agradecimentos institucionais e a frase de encerramento marcante.

> **Fala de Giovani Amadio:**
> "Chegamos ao final da nossa apresentação convictos de que o E-Energy cumpriu sua missão: demonstrar que é possível, com tecnologia acessível e engenharia bem pensada, transformar um consumo invisível em informação clara e poder de controle.
> 
> Em nome do grupo, gostaríamos de expressar nossos profundos agradecimentos:
> À respeitável banca examinadora, pelo tempo, atenção e pelas considerações que farão para o nosso crescimento;
> Aos nossos orientadores, Professora Simone Lacerda e Professor Rafael Cruz, pela dedicação, paciência e apoio técnico fundamental ao longo de todo o ano letivo;
> E à ETEC Bento Quirino, por ser o solo fértil onde aprendemos a pensar como futuros profissionais da tecnologia.
> 
> Concluímos com esta máxima essencial:
> *'Você só pode gerenciar aquilo que consegue medir. O E-Energy transforma consumo invisível em consciência e controle.'*
> 
> Muito obrigado a todos. Estamos prontos para as considerações e perguntas da banca!"

*💡 Dica de encerramento:* Respire, olhe para a banca com sorriso de dever cumprido e espere os aplausos antes de responder às perguntas.

---

# GUIA RÁPIDO DE DEFESA DA BANCA (PERGUNTAS FREQUENTES)

### P1: "Por que vocês escolheram o SCT-013 em vez de um sensor em série como o ACS712?"
> **Resposta sugerida (João Miguel / Lucas):**  
> *"O ACS712 exige que o condutor de fase seja seccionado e parafusado em seus bornes, colocando a placa de circuito em contato direto com a corrente da rede de 127V. Já o SCT-013 é um transformador de corrente tipo alicate bipartido: ele envolve o fio de fase por indução magnética, oferecendo isolamento galvânico total e muito mais segurança ao operador durante os testes de bancada."*

### P2: "Por que o sensor não pode abraçar o cabo bipolar que contém Fase e Neutro juntos?"
> **Resposta sugerida (João Miguel):**  
> *"Pela Lei de Ampère e pelas regras do eletromagnetismo, a corrente alternada que entra pelo condutor de Fase retorna pelo condutor de Neutro com sentido oposto. Se o sensor abraçar os dois fios juntos, os campos magnéticos gerados por cada fio possuem sentidos contrários e se anulam mutuamente, resultando em uma leitura de corrente igual a zero."*

### P3: "Por que vocês calcularam a potência multiplicando a corrente por 127V em vez de medir a tensão instantânea?"
> **Resposta sugerida (Giovani / João):**  
> *"Como delimitado em nossos objetivos de protótipo, focamos no sensoriamento seguro de corrente com o SCT-013. Para cargas prioritariamente resistivas (como lâmpadas ou ferros elétricos), o fator de potência é próximo de 1 e a tensão da rede de Campinas é nominalmente 127V RMS, o que nos dá uma estimativa de excelente precisão prática. Como apontamos em nossas propostas futuras, o próximo passo natural é integrar um sensor de tensão como o ZMPT101B para aferir variações da rede e o fator de potência de cargas indutivas complexas."*

### P4: "Como o sistema garante que o ESP32 não trave ao ligar um motor ou carga pesada?"
> **Resposta sugerida (Giovani / João):**  
> *"Adotamos dois cuidados fundamentais: primeiro, o módulo relé possui isolamento por optoacoplador, o que significa que o sinal elétrico do ESP32 apenas acende um LED infravermelho interno, sem contato elétrico com a bobina do relé. Segundo, empregamos capacitores de desacoplamento e diodo de roda livre integrado no módulo, suprimindo os picos transitórios de tensão gerados na desenergização da bobina."*

### P5: "Qual foi o maior aprendizado que o grupo teve durante o desenvolvimento do TCC?"
> **Resposta sugerida (Lucas / Todos):**  
> *"O maior aprendizado foi ver a convergência entre teoria e prática: entender que na bancada real nós enfrentamos ruídos eletromagnéticos, limitações de conversores A/D e desafios de montagem que não aparecem nos simuladores de computador. Construir o protótipo físico e vê-lo responder na prática aos comandos da interface foi a maior conquista da nossa formação técnica."*
