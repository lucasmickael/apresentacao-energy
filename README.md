# E-Energy — Apresentação Interativa de TCC (2026)
> **Trabalho de Conclusão de Curso (TCC) — ETEC Bento Quirino (Campinas / SP)**  
> **Tema:** E-Energy — Monitor de Energia Elétrica  
> **Integrantes:** Lucas Mickael Silva Lima, João Miguel dos Santos Silva e Giovani Amadio Correa  
> **Orientadores:** Profª. Simone Lacerda e Prof. Rafael Cruz  
> **Ano:** 2026  

---

## ⚡ Visão Geral do Projeto
O **E-Energy** é um sistema embarcado de monitoramento e controle inteligente do consumo de energia elétrica de aparelhos domésticos. Utilizando o microcontrolador **ESP32**, o sensor de corrente não invasivo **SCT-013** e um **módulo relé** com isolamento óptico, o sistema permite acompanhar o consumo elétrico em tempo real e comutar remotamente a alimentação de cargas residenciais através de uma interface digital acessível.

Esta aplicação web é a apresentação oficial de slides interativa desenvolvida com React, Vite e design system de alta tecnologia (modo escuro com realces em amarelo elétrico), construída especificamente para a banca examinadora do TCC.

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **NPM** instalado

### 2. Instalação e Inicialização
No terminal, dentro da pasta do projeto, execute:

```bash
# Instalar dependências (caso não tenha instalado ainda)
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Abra o seu navegador de preferência e acesse o endereço exibido no terminal:
👉 **`http://localhost:5173/`**

---

## 🎮 Controles e Atalhos de Teclado

| Tecla / Atalho | Ação |
| :---: | :--- |
| **`→`** ou **`Espaço`** ou **`PageDown`** | Avançar para o próximo slide |
| **`←`** ou **`PageUp`** | Voltar para o slide anterior |
| **`P`** | **Abrir/Fechar o Modo Apresentador** (Roteiro oral, cronômetro da banca e dicas) |
| **`O`** ou **`G`** | **Abrir Visão Geral em Grade** (Miniaturas dos 15 slides para salto rápido) |
| **`F`** | Alternar modo **Tela Cheia** (Fullscreen para projetor) |
| **`H`** | Abrir janela de ajuda com todos os atalhos |
| **`Home`** / **`End`** | Ir direto para o primeiro / último slide |
| **`Esc`** | Fechar qualquer janela modal aberta |

---

## 🎤 Modo Apresentador Integrado (Tecla `P`)
Pressionando a tecla **`P`** ou clicando no botão **"Modo Apresentador [P]"** no cabeçalho, abre-se uma tela auxiliar com recursos essenciais para os estudantes durante a apresentação:
- **Cronômetro ao vivo** com início automático, pausa e zeramento (tempo alvo: 12 a 15 minutos).
- **Identificação do integrante responsável pelo slide** (Lucas, João ou Giovani) com crachá de cor dedicada.
- **Roteiro de Fala Oral Completo em Português Brasileiro**, parágrafo por parágrafo, sem leitura mecânica de tópicos.
- **Dica de postura e entonação** para cativar os avaliadores.
- **Orientação de Defesa da Banca**: antecipa perguntas clássicas dos professores avaliadores e instrui como responder com rigor técnico.
- **Miniatura e resumo do próximo slide** para uma transição oratória impecável.

---

## 📱 Recursos Interativos de Destaque

1. **Slide 10 — Demonstração Conceitual da Interface Digital:**
   - Botão interativo para **LIGAR / DESLIGAR APARELHO (Relé)** em tempo real.
   - **Efeito sonoro mecânico realista de clique de relé** sintetizado via Web Audio API (funciona 100% offline sem arquivos externos).
   - Seletor de cargas domésticas típicas:
     - *Lâmpada LED* (0.12 A • 15.2 W)
     - *Ventilador de Mesa* (0.51 A • 64.8 W)
     - *Ferro de Passar Roupas* (9.45 A • 1200.0 W)
     - *Standby TV / Box* (0.06 A • 7.6 W)
   - Resposta instantânea dos medidores de Corrente (IRMS), Tensão (127V) e Potência (W).

2. **Slide 11 — Protótipo Físico com Slot de Fotografias:**
   - Moldura técnica do protótipo com destaques de isolamento galvânico e padrão NBR 14136.
   - **Botão "Inserir Foto Real da Bancada"**: permite arrastar ou selecionar fotos reais tiradas na bancada da ETEC Bento Quirino para exibição em alta definição na hora da apresentação.

3. **Slide 9 — Fluxograma Operacional Dinâmico:**
   - 7 nós interativos demonstrando a separação física entre o fluxo de potência alternada (127V) e o circuito lógico de telemetria (ESP32 / Wi-Fi).

4. **Slide 15 — Conclusão & Agradecimentos:**
   - Animação comemorativa de encerramento e agradecimentos institucionais à banca, aos orientadores Simone Lacerda e Rafael Cruz e à ETEC Bento Quirino.

---

## 📂 Estrutura de Arquivos

```
apresentacao-energy/
├── ROTEIRO_APRESENTACAO.md      # Roteiro impresso completo para estudo oral e ensaios
├── index.html                   # Estrutura HTML com fontes Outfit, Inter e metadados
├── package.json                 # Dependências (React 19, Lucide, Canvas-confetti, Vite)
├── public/
│   └── favicon.svg              # Ícone personalizado de energia
└── src/
    ├── App.jsx                  # Orquestrador mestre dos slides e eventos de teclado
    ├── index.css                # Design system, paleta obsidian/amarelo, glassmorphism e animações
    ├── main.jsx                 # Ponto de entrada React
    ├── data/
    │   └── slidesData.js        # Conteúdo estruturado dos 15 slides, falas e dicas de banca
    ├── utils/
    │   └── audioSynth.js        # Sintetizador de áudio Web Audio API (clique de relé e transições)
    └── components/
        ├── Header.jsx           # Barra superior com status, integrante e atalhos
        ├── Footer.jsx           # Barra inferior com barra de progresso de 15 pontos e contador
        ├── PresenterModal.jsx   # Modo Apresentador com cronômetro e roteiro de fala
        ├── SlideOverviewModal.jsx # Grade de 15 miniaturas para salto ágil
        ├── ShortcutsModal.jsx   # Janela de ajuda de atalhos
        └── slides/              # Os 15 slides customizados
            ├── SlideCover.jsx
            ├── SlideContext.jsx
            ├── SlideProblem.jsx
            ├── SlideJustification.jsx
            ├── SlideObjectives.jsx
            ├── SlideSolution.jsx
            ├── SlideComponents.jsx
            ├── SlideDevelopment.jsx
            ├── SlideWorkflow.jsx
            ├── SlideInterfaceDemo.jsx
            ├── SlidePrototype.jsx
            ├── SlideResults.jsx
            ├── SlideBenefits.jsx
            ├── SlideChallengesFuture.jsx
            └── SlideConclusion.jsx
```

---

## 🏆 Créditos
- **Autores:** Lucas Mickael Silva Lima, João Miguel dos Santos Silva e Giovani Amadio Correa
- **Orientadores:** Profª. Simone Lacerda e Prof. Rafael Cruz
- **Instituição:** ETEC Bento Quirino — Campinas / SP
- **Ano Letivo:** 2026
