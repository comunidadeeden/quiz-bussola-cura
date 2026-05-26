const OFFER_CONFIG = {
  workshopName: "Workshop Bússola da Cura",
  quizName: "Teste da Bússola",
  dateText: "30 de maio",
  timeText: "09h30",
  formatText: "100% online",
  durationText: "3 horas",
  // ATENÇÃO: confirmar preço final. A página fala R$37, mas o checkout pode estar em R$47.
  priceText: "R$37",
  checkoutUrl: "https://pay.hotmart.com/V105745814K?off=npn32ytr",
  salesPageUrl: "https://brunosimplicio.com.br/workshop-bussola-da-cura-04/",
  leadWebhookUrl: "",
  privacyUrl: "#"
};

const ENV_CONFIG = {
  checkoutUrl: window.NEXT_PUBLIC_CHECKOUT_URL || OFFER_CONFIG.checkoutUrl,
  leadWebhookUrl: window.NEXT_PUBLIC_LEAD_WEBHOOK_URL || OFFER_CONFIG.leadWebhookUrl
};

const CATEGORIES = {
  proteger: {
    label: "Proteger",
    name: "Corpo-Guardião",
    message: "Eu preciso me proteger.",
    microTitle: "Sua Bússola está apontando para uma resposta de proteção.",
    microText: [
      "Até aqui, parece que seu corpo reage criando barreiras quando algo ou alguém passa de um limite que você não conseguiu sustentar emocionalmente.",
      "Talvez o sintoma não seja apenas um incômodo. Talvez ele esteja tentando criar no corpo uma fronteira que você ainda não conseguiu criar na vida."
    ],
    title: "Seu resultado: Corpo-Guardião",
    subtitle: "Sua Bússola apontou primeiro para a função Proteger.",
    impact: "Quando algo passa do limite emocional, seu corpo pode tentar criar uma barreira.",
    description: [
      "Esse padrão costuma aparecer em pessoas que toleram invasões por tempo demais. Invasão de espaço. Invasão de opinião. Invasão de corpo. Invasão de intimidade. Invasão de responsabilidade.",
      "Por fora, você pode parecer forte, fechada, controlada ou até difícil. Mas, por dentro, existe uma parte sua tentando dizer: ‘Eu preciso me proteger.’"
    ],
    explanation: "O seu corpo pode estar tentando fazer biologicamente aquilo que você ainda não conseguiu fazer emocionalmente: estabelecer um limite. Quando você não diz ‘não’, o corpo pode tentar dizer. Quando você não fecha a porta, o corpo pode criar uma barreira.",
    patterns: ["Pele", "Alergias", "Candidíase", "Infecção urinária", "Herpes", "Psoríase", "Dermatite", "Irritações recorrentes"],
    microdiagnosis: "Você talvez não precise ‘ser menos sensível’. Talvez precise aprender a reconhecer onde sua sensibilidade virou alarme de invasão.",
    investigation: "Quem ou o que, na sua vida, tem passado de um limite que você não consegue sustentar?",
    ctaSpecific: "Agora você precisa descobrir a raiz dessa proteção.",
    button: "Quero descobrir a raiz no workshop",
    vsl: null
  },
  evitar: {
    label: "Evitar",
    name: "Corpo-Retirada",
    message: "Eu preciso sair daqui.",
    microTitle: "Sua Bússola está apontando para uma resposta de retirada.",
    microText: [
      "Até aqui, parece que seu corpo tenta te tirar de situações que você não consegue abandonar conscientemente.",
      "Às vezes, a dor não aparece para te destruir. Ela aparece para te forçar a parar onde você insistiu em continuar."
    ],
    title: "Seu resultado: Corpo-Retirada",
    subtitle: "Sua Bússola apontou primeiro para a função Evitar.",
    impact: "Quando você permanece tempo demais em algo que internamente rejeita, seu corpo pode tentar te tirar dali.",
    description: [
      "Esse padrão costuma aparecer em pessoas que ignoram sinais internos como: ‘Eu não quero ir’, ‘Eu não quero ficar’, ‘Eu não aguento mais isso’, ‘Eu preciso sair daqui’.",
      "Mas, em vez de sair, a pessoa se adapta. Em vez de falar, ela engole. Em vez de escolher, ela suporta até o corpo interromper."
    ],
    explanation: "O corpo pode estar tentando fazer uma retirada que você não se autorizou a fazer conscientemente. Às vezes, a crise não aparece apenas como problema. Ela aparece como interrupção: de um compromisso, de uma exposição, de uma relação, de uma rotina ou de um lugar onde você já não queria mais estar.",
    patterns: ["Enxaqueca", "Crises de pânico", "Lombalgia", "Desmaios", "Tendinites", "Crises que fazem parar"],
    microdiagnosis: "Talvez você não esteja fugindo da vida. Talvez esteja tentando fugir de uma situação específica que sua consciência ainda tenta justificar.",
    investigation: "Onde você continua presente, mas por dentro já foi embora?",
    ctaSpecific: "Agora você precisa descobrir de onde seu corpo está tentando te tirar.",
    button: "Quero aprender a rastrear esse padrão",
    vsl: {
      id: "panda-86cb49d4-8450-4f26-beb9-bf11bff1a6f3",
      src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=86cb49d4-8450-4f26-beb9-bf11bff1a6f3"
    }
  },
  compensar: {
    label: "Compensar",
    name: "Corpo-Compensação",
    message: "Eu preciso preencher esse vazio.",
    microTitle: "Sua Bússola está apontando para uma resposta de compensação.",
    microText: [
      "Até aqui, parece que seu corpo e seus impulsos tentam preencher algo que ficou faltando.",
      "Nem todo excesso é falta de controle. Às vezes, o excesso é uma tentativa desesperada de tampar um vazio antigo."
    ],
    title: "Seu resultado: Corpo-Compensação",
    subtitle: "Sua Bússola apontou primeiro para a função Compensar.",
    impact: "Quando uma falta emocional fica aberta, seu corpo ou comportamento pode buscar alívio, preenchimento ou anestesia.",
    description: [
      "Esse padrão costuma aparecer em pessoas que vivem ciclos como: falta, vazio, ansiedade, impulso, alívio rápido, culpa e repetição.",
      "Você pode até chamar isso de falta de controle, mas a pergunta mais profunda é: ‘Que falta esse excesso está tentando compensar?’"
    ],
    explanation: "A compensação aparece quando algo dentro da pessoa fica sem resposta. Pode ser falta de afeto, segurança, reconhecimento, presença, pertencimento ou uma reparação que nunca veio. Então o corpo busca substitutos: comida, compra, sexo, controle, rituais, vícios ou excessos.",
    patterns: ["Compulsão alimentar", "Compras compulsivas", "Vícios", "TOC", "Compulsão sexual", "Exageros difíceis de controlar"],
    microdiagnosis: "Talvez o problema não seja apenas o excesso. Talvez o excesso esteja apontando para uma falta que ainda não pôde ser sentida por inteiro.",
    investigation: "O que você tenta preencher quando não suporta sentir o vazio?",
    ctaSpecific: "Agora você precisa descobrir qual falta está pedindo compensação.",
    button: "Quero entender meu padrão no workshop",
    vsl: {
      id: "panda-b84401f4-27d1-49d5-b59b-23168d0e4bbc",
      src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=b84401f4-27d1-49d5-b59b-23168d0e4bbc"
    }
  },
  suportar: {
    label: "Suportar",
    name: "Corpo-Sustentador",
    message: "Estou carregando peso demais.",
    microTitle: "Sua Bússola está apontando para uma resposta de sustentação.",
    microText: [
      "Até aqui, parece que seu corpo tenta carregar o peso que você aprendeu a suportar em silêncio.",
      "Talvez você não esteja fraca. Talvez você esteja forte há tempo demais."
    ],
    title: "Seu resultado: Corpo-Sustentador",
    subtitle: "Sua Bússola apontou primeiro para a função Suportar.",
    impact: "Quando você carrega peso demais por tempo demais, seu corpo pode começar a sustentar essa carga por você.",
    description: [
      "Esse padrão costuma aparecer em pessoas que dizem: ‘Eu resolvo’, ‘Deixa comigo’, ‘Eu dou conta’, ‘Não posso parar agora’, ‘Se eu não fizer, ninguém faz’.",
      "O problema é que o corpo escuta. Ele escuta quando você carrega tudo, quando não divide, quando engole cansaço e quando transforma exaustão em identidade."
    ],
    explanation: "O corpo pode estar tentando sustentar biologicamente uma sobrecarga emocional, familiar, profissional ou relacional. Esse padrão costuma aparecer em pessoas que foram reconhecidas por serem fortes, responsáveis, maduras ou indispensáveis. Mas existe um preço: o corpo começa a travar, tensionar, inflamar, apertar, pesar e pedir pausa.",
    patterns: ["Gastrite", "Bruxismo", "Pressão alta", "Fibromialgia", "Dores articulares", "Tensão crônica", "Sensação de peso no corpo"],
    microdiagnosis: "Talvez seu corpo não esteja falhando. Talvez ele esteja finalmente recusando uma carga que você normalizou.",
    investigation: "Que peso você continua carregando só porque todos se acostumaram com a sua força?",
    ctaSpecific: "Agora você precisa descobrir que carga seu corpo está sustentando.",
    button: "Quero rastrear a raiz no workshop",
    vsl: {
      id: "panda-156468b1-2b49-4dad-b0d0-c0c7aa217b27",
      src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=156468b1-2b49-4dad-b0d0-c0c7aa217b27"
    }
  }
};

const QUESTIONS = [
  {
    id: "q1",
    text: "Quando seu corpo piora, qual cenário emocional costuma estar por trás?",
    options: [
      ["A", "proteger", "Alguém invade meu espaço, passa dos meus limites ou me faz sentir exposta."],
      ["B", "evitar", "Eu estou em uma situação da qual queria sair, mas continuo ali."],
      ["C", "compensar", "Eu me sinto vazia, rejeitada, sozinha ou carente de algo que não consigo nomear."],
      ["D", "suportar", "Eu estou carregando responsabilidades demais e dizendo para mim mesma: ‘eu aguento’."]
    ]
  },
  {
    id: "q2",
    text: "Mesmo quando você trata ou tenta resolver, o que parece voltar junto com o sintoma?",
    options: [
      ["A", "proteger", "A sensação de estar invadida, exposta ou sem limite."],
      ["B", "evitar", "A vontade de sair, cancelar tudo ou sumir daquela situação."],
      ["C", "compensar", "A busca por algum alívio rápido para preencher o desconforto."],
      ["D", "suportar", "O peso de continuar carregando tudo como se eu desse conta."]
    ]
  },
  {
    id: "q3",
    text: "Onde seu corpo tem sentido mais o peso ultimamente?",
    options: [
      ["A", "proteger", "Em irritações, inflamações, pele, infecções ou reações recorrentes."],
      ["B", "evitar", "Em crises, dores ou travamentos que me obrigam a parar."],
      ["C", "compensar", "Em excessos, compulsões, ansiedade ou tentativas de anestesiar."],
      ["D", "suportar", "Em cansaço, tensão, peso, gastrite, bruxismo ou dores persistentes."]
    ]
  },
  {
    id: "q4",
    text: "Se seu corpo pudesse falar durante uma crise, ele provavelmente diria:",
    options: [
      ["A", "proteger", "Eu preciso impedir que isso entre."],
      ["B", "evitar", "Eu preciso sair daqui."],
      ["C", "compensar", "Eu preciso preencher esse vazio."],
      ["D", "suportar", "Eu preciso suportar só mais um pouco."]
    ]
  },
  {
    id: "q5",
    text: "Que tipo de pessoa ou situação mais drena você?",
    options: [
      ["A", "proteger", "Pessoas invasivas, críticas, controladoras ou que não respeitam meu espaço."],
      ["B", "evitar", "Situações em que me sinto presa, exposta, cobrada ou sem saída."],
      ["C", "compensar", "Relações em que me sinto invisível, trocada, rejeitada ou não escolhida."],
      ["D", "suportar", "Pessoas que dependem de mim, me sobrecarregam ou esperam que eu resolva tudo."]
    ]
  },
  {
    id: "q6",
    text: "Qual dessas verdades é mais difícil admitir?",
    options: [
      ["A", "proteger", "Eu me protejo tanto porque tenho medo de ser ferida de novo."],
      ["B", "evitar", "Eu fujo não porque sou fraca, mas porque uma parte minha sente perigo."],
      ["C", "compensar", "Eu busco alívio porque tem um vazio que eu ainda não sei encarar."],
      ["D", "suportar", "Eu tenho orgulho de aguentar, mas isso está me custando caro."]
    ]
  },
  {
    id: "q7",
    text: "Na sua infância ou adolescência, qual adaptação fez mais sentido para sobreviver emocionalmente?",
    options: [
      ["A", "proteger", "Me fechar, desconfiar e não deixar qualquer pessoa se aproximar."],
      ["B", "evitar", "Ficar quieta, desaparecer, evitar conflito ou não dar trabalho."],
      ["C", "compensar", "Buscar aprovação, agradar, compensar faltas ou tentar ser suficiente."],
      ["D", "suportar", "Ser responsável cedo, cuidar dos outros ou parecer forte mesmo sem estar bem."]
    ]
  },
  {
    id: "q8",
    text: "Quando o sintoma melhora por um tempo e depois volta, o que geralmente continuou igual na sua vida?",
    options: [
      ["A", "proteger", "Os limites com certas pessoas ou ambientes continuam frágeis."],
      ["B", "evitar", "Eu continuo em lugares, relações ou compromissos dos quais queria sair."],
      ["C", "compensar", "Eu continuo tentando preencher a mesma falta com alívios temporários."],
      ["D", "suportar", "Eu continuo carregando responsabilidades que não deveriam ser só minhas."]
    ]
  },
  {
    id: "q9",
    text: "Qual ciclo repetitivo você mais reconhece em si?",
    options: [
      ["A", "proteger", "Eu tolero invasões até meu corpo começar a reagir."],
      ["B", "evitar", "Eu fico onde não quero estar até meu corpo me obrigar a parar."],
      ["C", "compensar", "Eu tento anestesiar a falta até o excesso virar problema."],
      ["D", "suportar", "Eu sustento tudo em silêncio até meu corpo cobrar a conta."]
    ]
  },
  {
    id: "q10",
    weight: 2,
    text: "Qual grupo de sintomas ou padrões mais chama sua atenção hoje?",
    options: [
      ["A", "proteger", "Pele, alergias, candidíase, infecção urinária, herpes, psoríase, dermatite ou irritações recorrentes."],
      ["B", "evitar", "Enxaqueca, crises de pânico, lombalgia, desmaios, tendinites ou crises que me fazem parar."],
      ["C", "compensar", "Compulsão alimentar, compras compulsivas, vícios, TOC, compulsão sexual ou exageros difíceis de controlar."],
      ["D", "suportar", "Gastrite, bruxismo, pressão alta, fibromialgia, dores articulares, tensão crônica ou sensação de peso no corpo."]
    ]
  },
  {
    id: "q11",
    text: "O que você mais quer recuperar hoje?",
    options: [
      ["A", "proteger", "A sensação de segurança no meu corpo e nos meus limites."],
      ["B", "evitar", "A liberdade de não me sentir presa ao que me faz mal."],
      ["C", "compensar", "A leveza de não precisar buscar alívio em excesso."],
      ["D", "suportar", "A energia e a força que eu sinto que fui perdendo."]
    ]
  },
  {
    id: "q12",
    text: "O que você mais precisa aprender agora?",
    options: [
      ["A", "proteger", "Colocar limites antes que meu corpo precise virar uma barreira."],
      ["B", "evitar", "Reconhecer de onde preciso sair antes que meu corpo me force a parar."],
      ["C", "compensar", "Olhar para o vazio sem precisar anestesiá-lo com excessos."],
      ["D", "suportar", "Devolver cargas que nunca deveriam ter sido minhas."]
    ]
  }
];

const TIEBREAKER = {
  id: "tie",
  text: "Quando você escuta a frase ‘meu corpo está tentando me avisar’, qual complemento parece mais verdadeiro?",
  options: [
    ["A", "proteger", "…que eu preciso me proteger melhor."],
    ["B", "evitar", "…que eu preciso sair de onde estou."],
    ["C", "compensar", "…que eu estou tentando preencher uma falta."],
    ["D", "suportar", "…que eu estou carregando peso demais."]
  ]
};

const ENTRY_QUESTIONS = [
  {
    id: "entry1",
    text: "Antes dos seus sintomas, dores ou desconfortos aparecerem, o que mais parece acontecer com você?",
    options: [
      ["A", "silencio", "Eu costumo engolir muita coisa, evitar falar e fingir que está tudo bem."],
      ["B", "sobrecarga", "Eu costumo carregar muita coisa, resolver tudo e continuar mesmo cansada."]
    ]
  },
  {
    id: "entry2",
    text: "Qual frase parece mais verdadeira hoje?",
    options: [
      ["A", "silencio", "Tem coisas que eu nunca falei, mas meu corpo parece não ter esquecido."],
      ["B", "sobrecarga", "Tem pesos que eu nunca devolvi, mas meu corpo parece estar cobrando."]
    ]
  }
];

const ENTRY_AUDIOS = {
  silencio: {
    id: "entrada-silencio",
    title: "A Bússola encontrou um primeiro sinal.",
    subtitle: "Antes de continuar o diagnóstico, escute esse áudio curto do Bruno. Ele vai te ajudar a entender por que o sintoma talvez não seja o começo da história — mas a última forma que o corpo encontrou para chamar sua atenção.",
    label: "Ouvindo Bruno...",
    src: "http://brunosimplicio.com.br/wp-content/uploads/2026/05/Audio-1-Silencio.mp3",
    cta: "Continuar meu diagnóstico",
    transcript: "Antes de continuar, presta atenção nisso.\n\nMuitas vezes, o sintoma não começa no corpo. Ele começa no silêncio.\n\nComeça naquela frase que você não disse, naquele limite que você não colocou, naquela dor que você engoliu para manter a paz, para não decepcionar alguém ou para não parecer difícil.\n\nSó que aquilo que você cala não desaparece. O que você engole continua procurando um lugar para existir.\n\nE quando a consciência não consegue falar, muitas vezes o corpo começa a falar por ela.\n\nNas próximas perguntas, não responda pensando só no nome do sintoma. Responda pensando: o que eu calei antes disso aparecer?\n\nContinua. Porque talvez o seu corpo não esteja tentando te destruir. Talvez ele esteja tentando te devolver uma voz."
  },
  sobrecarga: {
    id: "entrada-sobrecarga",
    title: "A Bússola encontrou um primeiro sinal.",
    subtitle: "Antes de continuar o diagnóstico, escute esse áudio curto do Bruno. Ele vai te ajudar a entender por que o sintoma talvez não seja o começo da história — mas a última forma que o corpo encontrou para chamar sua atenção.",
    label: "Ouvindo Bruno...",
    src: "http://brunosimplicio.com.br/wp-content/uploads/2026/05/Audio-2-Suportar.mp3",
    cta: "Continuar meu diagnóstico",
    transcript: "Antes de seguir, eu quero te dizer uma coisa com cuidado.\n\nÀs vezes, a pessoa não percebe que está no limite porque se acostumou a viver acima do limite.\n\nEla acorda cansada e continua. Sente o corpo pesado e continua. Cuida, resolve, segura, organiza tudo… e ainda acha que não está fazendo o suficiente.\n\nSó que o corpo escuta. Ele escuta quando você diz ‘eu aguento’. Ele escuta quando você chama sobrecarga de responsabilidade. Ele escuta quando todos se acostumam com a sua força.\n\nE uma hora, o corpo começa a cobrar a conta.\n\nNas próximas perguntas, não responda como a pessoa forte que todo mundo conhece. Responda como a parte sua que está cansada de sustentar tudo calada.\n\nO diagnóstico começa quando você para de chamar excesso de normal."
  }
};

const UTM_KEY = "quiz_bussola_utms_v1";
const categories = Object.keys(CATEGORIES);
const root = document.querySelector("#quiz-root");
const stepLabel = document.querySelector("#step-label");

localStorage.removeItem("quiz_bussola_state_v1");
sessionStorage.removeItem("quiz_bussola_current_session");

let state = createInitialState();

captureUtms();
trackEvent("quiz_view", { path: location.pathname });
render();

function createInitialState() {
  return {
    screen: "intro",
    currentQuestion: 0,
    currentEntryQuestion: 0,
    entryAnswers: {},
    entryPath: null,
    answers: {},
    lead: null,
    audioPlayed: {},
    tieNeeded: false,
    result: null,
    completed: false
  };
}

function saveState() {
  sessionStorage.setItem("quiz_bussola_current_session", JSON.stringify(state));
}

function captureUtms() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "src", "sck"];
  const current = {};
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) current[key] = value;
  });

  if (Object.keys(current).length) {
    localStorage.setItem(UTM_KEY, JSON.stringify({ ...getUtms(), ...current }));
  }
}

function getUtms() {
  try {
    return JSON.parse(localStorage.getItem(UTM_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function trackEvent(eventName, payload = {}) {
  const eventPayload = {
    ...payload,
    quiz: OFFER_CONFIG.quizName,
    source: "quiz-bussola",
    timestamp: new Date().toISOString()
  };

  if (location.hostname === "localhost" || location.protocol === "file:") {
    console.log("[quiz-event]", eventName, eventPayload);
  }

  if (window.dataLayer && typeof window.dataLayer.push === "function") {
    window.dataLayer.push({ event: eventName, ...eventPayload });
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, eventPayload);
  }
}

function updateProgress() {
  const answered = Object.keys(state.answers).filter((id) => id.startsWith("q")).length;
  const step = Math.min(answered, 12);
  const degrees = Math.round((step / 12) * 360);
  const needle = -35 + step * 13;
  stepLabel.textContent = `Etapa ${step} de 12`;
  document.documentElement.style.setProperty("--progress", `${degrees}deg`);
  document.documentElement.style.setProperty("--needle", `${needle}deg`);
}

function render() {
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (state.screen === "intro") return renderIntro();
  if (state.screen === "entryQuestion") return renderEntryQuestion();
  if (state.screen === "entryAudio") return renderAudioGate(ENTRY_AUDIOS[state.entryPath || "sobrecarga"], () => goToQuestion(0));
  if (state.screen === "question") return renderQuestion();
  if (state.screen === "lead") return renderLeadCapture();
  if (state.screen === "tie") return renderTieBreaker();
  if (state.screen === "result") return renderResult();
}

function html(strings, ...values) {
  return strings.map((part, index) => part + (values[index] ?? "")).join("");
}

function renderIntro() {
  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        <span class="eyebrow">${OFFER_CONFIG.quizName}</span>
        <h1>O que você viveu pode ter ficado guardado no seu corpo.</h1>
        <p class="lead">E ele pode estar mostrando isso através de sintomas, dores ou padrões que insistem em voltar.</p>
        <div class="intro-proof">
          <p><strong>Descubra qual função emocional pode estar por trás do que seu corpo está tentando comunicar.</strong></p>
          <p>Ao final, você recebe um resultado palpável: sua função dominante da Bússola e o primeiro caminho para investigar a raiz.</p>
          <span>Teste rápido: menos de 2 minutos</span>
        </div>
        <button class="button gold full" id="start-quiz">Iniciar diagnóstico gratuito</button>
      </div>
    </section>
  `;

  document.querySelector("#start-quiz").addEventListener("click", () => {
    state.screen = "lead";
    saveState();
    trackEvent("quiz_start");
    render();
  });
}

function progressBlock() {
  const current = state.currentQuestion + 1;
  return html`
    <div class="progress-shell">
      <div class="compass-progress" aria-hidden="true"></div>
      <div class="progress-text">
        <strong>Etapa ${Math.min(current, 12)} de 12</strong>
        <span>Rastreio emocional inicial</span>
      </div>
    </div>
  `;
}

function renderEntryQuestion() {
  const question = ENTRY_QUESTIONS[state.currentEntryQuestion];

  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        <span class="eyebrow">Pergunta-base ${state.currentEntryQuestion + 1} de 2</span>
        <h2 class="question-title">${question.text}</h2>
        <div class="options" role="radiogroup" aria-label="${question.text}">
          ${question.options.map(([code, path, label]) => entryOptionButton(code, path, label, state.entryAnswers[question.id])).join("")}
        </div>
        <div class="back-row">
          <button class="button ghost" id="entry-back-button" ${state.currentEntryQuestion === 0 ? "disabled" : ""}>Voltar</button>
          <span class="question-hint">Essa etapa prepara o áudio inicial, sem interferir no resultado final.</span>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.entryAnswers[question.id] = button.dataset.path;
      saveState();
      trackEvent("quiz_answer", { questionId: question.id, entryPath: button.dataset.path });

      setTimeout(() => {
        if (state.currentEntryQuestion === 0) {
          state.currentEntryQuestion = 1;
          state.screen = "entryQuestion";
        } else {
          state.entryPath = determineEntryPath();
          state.screen = "entryAudio";
        }
        saveState();
        render();
      }, 320);
    });
  });

  document.querySelector("#entry-back-button").addEventListener("click", () => {
    if (state.currentEntryQuestion > 0) {
      state.currentEntryQuestion -= 1;
      saveState();
      render();
    }
  });
}

function entryOptionButton(code, path, label, selected) {
  return html`
    <button class="option-button ${selected === path ? "selected" : ""}" data-path="${path}" data-code="${code}">
      <span class="answer-top">
        <span class="option-code">${code}</span>
        <span class="option-label">${label}</span>
      </span>
    </button>
  `;
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        ${progressBlock()}
        <span class="eyebrow">Pergunta ${state.currentQuestion + 1}</span>
        <h2 class="question-title">${question.text}</h2>
        <div class="options" role="radiogroup" aria-label="${question.text}">
          ${question.options.map(([code, category, label]) => optionButton(code, category, label, state.answers[question.id]?.category)).join("")}
        </div>
        <div class="back-row">
          <button class="button ghost" id="back-button" ${state.currentQuestion === 0 ? "disabled" : ""}>Voltar</button>
          <span class="question-hint">Selecione a frase que mais parece verdadeira hoje.</span>
        </div>
      </div>
    </section>
  `;

  bindOptionButtons(question);
  document.querySelector("#back-button").addEventListener("click", goBack);
}

function optionButton(code, category, label, selected) {
  return html`
    <button class="option-button ${selected === category ? "selected" : ""}" data-category="${category}" data-code="${code}">
      <span class="answer-top">
        <span class="option-code">${code}</span>
        <span class="option-label">${label}</span>
      </span>
    </button>
  `;
}

function bindOptionButtons(question) {
  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      const category = button.dataset.category;
      const code = button.dataset.code;

      state.answers[question.id] = { category, code, weight: question.weight || 1 };
      saveState();
      trackEvent("quiz_answer", { questionId: question.id, category, code });

      setTimeout(() => {
        afterQuestionAnswered();
      }, 320);
    });
  });
}

function afterQuestionAnswered() {
  const currentIndex = state.currentQuestion;

  if (currentIndex === 11) {
    const tied = getTopCategories(calculateScores()).length > 1;
    state.tieNeeded = tied;
    if (tied) {
      state.screen = "tie";
    } else {
      showFinalResult();
      return;
    }
  } else {
    state.currentQuestion += 1;
    state.screen = "question";
  }

  saveState();
  render();
}

function goToQuestion(index) {
  state.currentQuestion = index;
  state.screen = "question";
  saveState();
  render();
}

function goBack() {
  if (state.screen === "question" && state.currentQuestion > 0) {
    state.currentQuestion -= 1;
    state.screen = "question";
  } else if (state.screen === "tie") {
    state.currentQuestion = 11;
    state.screen = "question";
  }
  saveState();
  render();
}

function renderAudioGate(audioConfig, onContinue) {
  const canContinue = Boolean(state.audioPlayed[audioConfig.id]);

  root.innerHTML = html`
    <section class="screen panel">
      <div class="audio-card">
        <span class="eyebrow">Áudio da Bússola</span>
        <h2>${audioConfig.title}</h2>
        <p>${audioConfig.subtitle}</p>
        <div class="audio-player">
          <div class="audio-meta">
            <button class="play-button" id="play-audio" aria-label="Reproduzir áudio"><span aria-hidden="true"></span></button>
            <div class="waveform" aria-hidden="true">${Array.from({ length: 18 }, () => "<i></i>").join("")}</div>
            <button class="speed-button" id="speed-audio" type="button" aria-label="Alterar velocidade do áudio">1.0x</button>
          </div>
          <div class="audio-status" id="audio-status">${canContinue ? audioConfig.label : "Clique para ouvir ou abra a transcrição."}</div>
          <audio id="audio-element" preload="none" src="${audioConfig.src}"></audio>
        </div>
        <details class="transcript" id="transcript-toggle">
          <summary>Ver transcrição</summary>
          <p>${audioConfig.transcript}</p>
        </details>
        <button class="button gold full" id="continue-audio" ${canContinue ? "" : "disabled"}>${audioConfig.cta}</button>
      </div>
    </section>
  `;

  const audio = document.querySelector("#audio-element");
  const playButton = document.querySelector("#play-audio");
  const speedButton = document.querySelector("#speed-audio");
  const continueButton = document.querySelector("#continue-audio");
  const status = document.querySelector("#audio-status");
  const transcript = document.querySelector("#transcript-toggle");
  const speeds = [1, 1.5, 2];
  let speedIndex = 0;

  function unlock(reason) {
    state.audioPlayed[audioConfig.id] = true;
    continueButton.disabled = false;
    status.textContent = reason === "transcript" ? "Transcrição aberta. Você já pode continuar." : audioConfig.label;
    saveState();
  }

  audio.addEventListener("error", () => {
    unlock("transcript");
    transcript.open = true;
    status.textContent = "Áudio indisponível neste momento. Use a transcrição para continuar.";
  });

  playButton.addEventListener("click", async () => {
    unlock("play");
    trackEvent("quiz_audio_play", { audioId: audioConfig.id });
    try {
      await audio.play();
    } catch (error) {
      transcript.open = true;
      status.textContent = "Áudio indisponível neste momento. Use a transcrição para continuar.";
    }
  });

  speedButton.addEventListener("click", () => {
    speedIndex = (speedIndex + 1) % speeds.length;
    audio.playbackRate = speeds[speedIndex];
    speedButton.textContent = `${speeds[speedIndex].toFixed(1)}x`.replace("2.0x", "2x");
  });

  transcript.addEventListener("toggle", () => {
    if (transcript.open) unlock("transcript");
  });

  continueButton.addEventListener("click", () => {
    trackEvent("quiz_audio_continue", { audioId: audioConfig.id });
    onContinue();
  });
}

function renderLeadCapture() {
  const lead = state.lead || {};
  root.innerHTML = html`
    <section class="screen panel">
      <div class="lead-card">
        <span class="eyebrow">Passo 2 de 3</span>
        <h2>Para liberar seu Teste da Bússola, preencha seus dados.</h2>
        <p>Você vai receber seu resultado e os próximos passos do ${OFFER_CONFIG.workshopName}.</p>
        <form id="lead-form" class="form-grid" novalidate>
          <div class="field">
            <label for="lead-name">Nome</label>
            <input id="lead-name" name="name" autocomplete="name" value="${lead.name || ""}" required>
          </div>
          <div class="field">
            <label for="lead-email">Melhor e-mail</label>
            <input id="lead-email" name="email" type="email" autocomplete="email" value="${lead.email || ""}" required>
          </div>
          <div class="field">
            <label for="lead-whatsapp">WhatsApp com DDD</label>
            <input id="lead-whatsapp" name="whatsapp" inputmode="tel" autocomplete="tel" value="${lead.whatsapp || ""}" required>
          </div>
          <p class="error-message" id="lead-error"></p>
          <button class="button gold full" type="submit">Começar meu teste</button>
        </form>
      </div>
    </section>
  `;

  document.querySelector("#lead-form").addEventListener("submit", handleLeadSubmit);
}

async function handleLeadSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const error = document.querySelector("#lead-error");
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    whatsapp: form.whatsapp.value.trim()
  };

  const digits = data.whatsapp.replace(/\D/g, "");
  if (!data.name) return (error.textContent = "Informe seu nome.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return (error.textContent = "Informe um e-mail válido.");
  if (digits.length < 10 || digits.length > 11) return (error.textContent = "Informe um WhatsApp brasileiro com DDD.");

  state.lead = data;
  saveState();
  trackEvent("quiz_lead_submit", { email: data.email, hasWhatsapp: true });
  await postLead({ event: "lead_submitted", lead: data, answers: state.answers });
  state.screen = "entryQuestion";
  state.currentEntryQuestion = 0;
  saveState();
  render();
}

function renderTieBreaker() {
  const tied = getTopCategories(calculateScores());
  const question = {
    ...TIEBREAKER,
    options: TIEBREAKER.options.filter(([, category]) => tied.includes(category))
  };

  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        <span class="eyebrow">Pergunta de desempate</span>
        <h2>${question.text}</h2>
        <p>Sua Bússola encontrou mais de uma função com a mesma força. Escolha a frase que mais toca em você agora.</p>
        <div class="options" role="radiogroup" aria-label="${question.text}">
          ${question.options.map(([code, category, label]) => optionButton(code, category, label, state.answers.tie?.category)).join("")}
        </div>
        <div class="back-row">
          <button class="button ghost" id="back-button">Voltar</button>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      state.answers.tie = { category: button.dataset.category, code: button.dataset.code, weight: 0 };
      saveState();
      trackEvent("quiz_answer", { questionId: "tie", category: button.dataset.category, code: button.dataset.code });
      setTimeout(() => {
        showFinalResult();
      }, 320);
    });
  });

  document.querySelector("#back-button").addEventListener("click", goBack);
}

function showFinalResult() {
  const result = determineResult();
  state.result = result;
  state.completed = true;
  state.screen = "result";
  saveState();
  postLead({ event: "quiz_completed", result, scores: calculateScores(), entryPath: state.entryPath, entryAnswers: state.entryAnswers, answers: state.answers, lead: state.lead });
  render();
}

function renderResult() {
  const resultId = state.result || determineResult();
  const result = CATEGORIES[resultId];
  const scores = calculateScores();
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0) || 1;

  root.innerHTML = html`
    <section class="screen panel">
      <div class="result-hero">
        <span class="result-badge">Seu diagnóstico emocional inicial</span>
        <h1 class="result-name">${result.name}</h1>
        <p class="lead">${result.subtitle}</p>
        <div class="result-section">
          <div class="dominant-card">
            <strong>Função dominante: ${result.label}</strong>
            <p>${result.impact}</p>
          </div>
          <div class="score-map">
            <strong>Mapa do seu rastreio</strong>
            ${categories.map((id) => scoreRow(CATEGORIES[id].label, scores[id], totalScore)).join("")}
          </div>
          <div class="phrase-card">
            <strong>A frase que seu corpo pode estar tentando dizer</strong>
            <p>${result.message}</p>
          </div>
          <div class="investigate-card">
            <strong>O que investigar agora</strong>
            <p>${result.investigation}</p>
          </div>
        </div>
      </div>
    </section>
    ${vslBlock(result)}
    ${ctaWorkshop(result)}
  `;

  trackEvent("quiz_result_view", { result: resultId, scores });
  document.querySelectorAll("[data-checkout]").forEach((item) => item.addEventListener("click", handleCheckoutClick));
}

function scoreRow(label, score, totalScore) {
  const percentage = Math.round((score / totalScore) * 100);
  const width = Math.max(8, percentage);
  return html`
    <div class="score-row">
      <span>${label}</span>
      <div class="score-track"><div class="score-fill" style="width:${width}%"></div></div>
      <span>${percentage}%</span>
    </div>
  `;
}

function vslBlock(result) {
  return html`
    <section class="screen vsl-section">
      <span class="eyebrow">Assista antes de decidir</span>
      <h2>Agora que você viu sua função dominante, entenda o que fazer com essa informação.</h2>
      ${result.vsl ? pandaVideo(result.vsl) : vslPlaceholder()}
      <a class="button gold full" href="${buildCheckoutUrl()}" data-checkout>${result.button}</a>
    </section>
  `;
}

function pandaVideo(vsl) {
  return html`
    <div class="vsl-frame">
      <iframe
        id="${vsl.id}"
        src="${vsl.src}"
        title="Vídeo do resultado"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowfullscreen
        fetchpriority="high"></iframe>
    </div>
  `;
}

function vslPlaceholder() {
  return html`
    <div class="vsl-frame" aria-label="Espaço reservado para VSL">
      <div class="vsl-placeholder">
        <span>VSL</span>
        <strong>Inserir vídeo aqui</strong>
        <small>Aguardando vídeo deste resultado</small>
      </div>
    </div>
  `;
}

function ctaWorkshop(result) {
  return html`
    <section class="screen cta-card">
      <span class="eyebrow">Próximo passo</span>
      <h2>Seu resultado é só a porta de entrada.</h2>
      <p class="pitch-lead">Agora você sabe qual função emocional seu corpo pode estar usando com mais frequência. <mark>Mas ainda falta descobrir a raiz.</mark></p>
      <div class="pitch-box">
        <strong>${result.ctaSpecific}</strong>
        <p>No ${OFFER_CONFIG.workshopName}, Bruno Simplício mostra como rastrear o caminho por trás do padrão: o fato que marcou, o sentimento que ficou preso e a verdade interna que passou a se repetir.</p>
      </div>
      <div class="pitch-grid">
        <div>
          <strong>Você vai entender</strong>
          <ul class="feature-list">
            <li>Qual foi o fato que ativou esse padrão.</li>
            <li>Qual sentimento ficou preso.</li>
            <li>Qual verdade inconsciente nasceu dessa experiência.</li>
          </ul>
        </div>
        <div>
          <strong>Você vai receber</strong>
          <ul class="feature-list">
            <li>Método Bússola de Rastreio Emocional.</li>
            <li>Ferramenta Diagnóstico Emocional Instantâneo.</li>
            <li>Protocolos práticos para adultos e crianças.</li>
          </ul>
        </div>
      </div>
      <p class="pitch-lead">Uma experiência prática de <mark>${OFFER_CONFIG.durationText}</mark>, ${OFFER_CONFIG.formatText}, para parar de olhar apenas para o sintoma e começar a enxergar o padrão.</p>
      <div class="price"><span>De R$197</span><strong>por ${OFFER_CONFIG.priceText}</strong></div>
      <a class="button gold full" href="${buildCheckoutUrl()}" data-checkout>Garantir minha vaga por ${OFFER_CONFIG.priceText}</a>
      <div class="checkout-meta">
        <span>Compra segura</span>
      </div>
    </section>
  `;
}

function calculateScores(onlyIds) {
  const scores = { proteger: 0, evitar: 0, compensar: 0, suportar: 0 };
  Object.entries(state.answers).forEach(([id, answer]) => {
    if (id === "tie") return;
    if (onlyIds && !onlyIds.includes(id)) return;
    scores[answer.category] += answer.weight || 1;
  });
  return scores;
}

function getTopCategories(scores) {
  const max = Math.max(...Object.values(scores));
  return categories.filter((id) => scores[id] === max);
}

function determineResult() {
  if (state.answers.tie?.category) return state.answers.tie.category;
  return getTopCategories(calculateScores())[0] || "suportar";
}

function determineEntryPath() {
  const first = state.entryAnswers.entry1;
  const second = state.entryAnswers.entry2;

  if (first && first === second) return first;
  return second || first || "sobrecarga";
}

async function postLead(payload) {
  if (!ENV_CONFIG.leadWebhookUrl) return;

  try {
    await fetch(ENV_CONFIG.leadWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        utms: getUtms(),
        source: "quiz-bussola",
        timestamp: new Date().toISOString()
      })
    });
  } catch (error) {
    console.warn("Lead webhook failed", error);
  }
}

function buildCheckoutUrl() {
  const url = new URL(ENV_CONFIG.checkoutUrl);
  const utms = getUtms();
  url.searchParams.set("src", "quiz_bussola");
  if (state.result) url.searchParams.set("result", state.result);

  Object.entries(utms).forEach(([key, value]) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });

  return url.toString();
}

function handleCheckoutClick(event) {
  event.preventDefault();
  const url = buildCheckoutUrl();
  trackEvent("quiz_checkout_click", { result: state.result, checkoutUrl: url });
  trackEvent("quiz_cta_click", { result: state.result });
  window.location.href = url;
}
