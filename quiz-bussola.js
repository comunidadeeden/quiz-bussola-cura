const OFFER_CONFIG = {
  workshopName: "Workshop Bússola da Cura",
  quizName: "Teste da Bússola",
  dateText: "30 de maio",
  timeText: "09h30",
  formatText: "100% online",
  durationText: "3 horas",
  priceText: "R$37",
  checkoutUrl: "https://pay.hotmart.com/V105745814K?bid=1779765794512",
  salesPageUrl: "https://brunosimplicio.com.br/workshop-bussola-da-cura-04/",
  leadWebhookUrl: "",
  privacyUrl: "#"
};

const ENV_CONFIG = {
  checkoutUrl: window.NEXT_PUBLIC_CHECKOUT_URL || OFFER_CONFIG.checkoutUrl,
  leadWebhookUrl: window.NEXT_PUBLIC_LEAD_WEBHOOK_URL || OFFER_CONFIG.leadWebhookUrl
};

const RESULT_VSLS = {
  proteger: {
    id: "panda-78d32195-c7e4-481e-93fe-a1431fe24e2a",
    src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=78d32195-c7e4-481e-93fe-a1431fe24e2a"
  },
  evitar: {
    id: "panda-86cb49d4-8450-4f26-beb9-bf11bff1a6f3",
    src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=86cb49d4-8450-4f26-beb9-bf11bff1a6f3"
  },
  compensar: {
    id: "panda-b84401f4-27d1-49d5-b59b-23168d0e4bbc",
    src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=b84401f4-27d1-49d5-b59b-23168d0e4bbc"
  },
  suportar: {
    id: "panda-156468b1-2b49-4dad-b0d0-c0c7aa217b27",
    src: "https://player-vz-3ca939d8-dc9.tv.pandavideo.com.br/embed/?v=156468b1-2b49-4dad-b0d0-c0c7aa217b27"
  }
};

const ENTRY_AUDIOS = {
  silencio: {
    id: "entrada-silencio",
    title: "A Bússola encontrou um primeiro sinal.",
    subtitle: "Esse caminho aparece quando suas respostas indicam que você pode ter engolido, calado, evitado falar ou guardado coisas por tempo demais.",
    label: "Ouvindo Bruno...",
    src: "https://brunosimplicio.com.br/wp-content/uploads/2026/05/Audio-1-Silencio.mp3",
    cta: "Continuar minha análise",
    transcript: "Certo, minha amiga. Já começamos bem.\n\nPelo que você respondeu, tem uma coisa que apareceu logo de cara: talvez você tenha passado tempo demais engolindo coisas que precisava falar.\n\nE eu não estou falando só de grandes traumas, não.\n\nÀs vezes é aquela frase que você segurou para não criar conflito. Aquele “não” que você queria dizer, mas engoliu. Aquela dor que você disfarçou para não parecer difícil, ingrata ou exagerada.\n\nSó que o corpo escuta tudo isso.\n\nO que você cala não desaparece. O que você engole continua procurando um lugar para existir.\n\nE muitas vezes, quando a pessoa não consegue falar por consciência, o corpo começa a falar por sintoma.\n\nEntão, nas próximas perguntas, não responde pensando só no nome da dor, da doença ou do desconforto.\n\nResponde pensando assim:\n\n“O que eu calei antes disso aparecer?”\n\nMas vamos lá! Continua comigo, porque agora a gente vai começar a rastrear o que seu corpo tá tentando dizer."
  },
  sobrecarga: {
    id: "entrada-sobrecarga",
    title: "A Bússola encontrou um primeiro sinal.",
    subtitle: "Esse caminho aparece quando suas respostas indicam que você pode estar carregando tudo, resolvendo tudo e continuando mesmo cansada.",
    label: "Ouvindo Bruno...",
    src: "https://brunosimplicio.com.br/wp-content/uploads/2026/05/Audio-2-Suportar.mp3",
    cta: "Continuar minha análise",
    transcript: "Certo, minha amiga. Pelo que você respondeu, já apareceu um sinal importante.\n\nTalvez você seja o tipo de pessoa que aguenta muito mais do que mostra.\n\nVocê resolve, segura, cuida, organiza, dá conta… e ainda sente que poderia estar fazendo mais.\n\nSó que deixa eu te dizer uma coisa: o corpo percebe quando você passa do limite, mesmo quando você finge que está tudo bem.\n\nEle percebe quando você acorda cansada e continua. Quando você sente o peso, mas não devolve a carga. Quando todo mundo se acostuma com a sua força, mas ninguém percebe o quanto isso te custa.\n\nE chega uma hora em que o corpo começa a cobrar essa conta.\n\nNão porque ele quer te destruir. Mas porque talvez ele esteja tentando te mostrar que você normalizou peso demais.\n\nEntão, nas próximas perguntas, não responde como a pessoa forte que todo mundo conhece.\n\nResponde como a parte sua que está cansada de sustentar tudo calada.\n\nContinua comigo. Agora a gente vai começar a rastrear o que seu corpo tá tentando te dizer."
  }
};

const CATEGORIES = {
  proteger: {
    label: "Proteger",
    name: "Corpo-Guardião",
    message: "Eu preciso me proteger.",
    title: "Seu resultado: Corpo-Guardião",
    subtitle: "Pelas suas respostas, a Bússola encontrou um padrão dominante de proteção.",
    impact: "Quando algo passa do limite emocional, seu corpo pode tentar criar uma barreira.",
    microdiagnosis: "Talvez você não precise ser menos sensível. Talvez precise reconhecer onde sua sensibilidade virou alarme de invasão.",
    investigation: "Quem ou o que tem passado de um limite que você não consegue sustentar?",
    ctaSpecific: "Agora você precisa descobrir a raiz dessa proteção.",
    button: "Quero descobrir a raiz no workshop"
  },
  evitar: {
    label: "Evitar",
    name: "Corpo-Retirada",
    message: "Eu preciso sair daqui.",
    title: "Seu resultado: Corpo-Retirada",
    subtitle: "Pelas suas respostas, a Bússola encontrou um padrão dominante de retirada.",
    impact: "Quando você permanece tempo demais em algo que internamente rejeita, seu corpo pode tentar te tirar dali.",
    microdiagnosis: "Talvez você não esteja fugindo da vida. Talvez esteja tentando sair de uma situação específica que sua consciência ainda tenta justificar.",
    investigation: "Onde você continua presente, mas por dentro já foi embora?",
    ctaSpecific: "Agora você precisa descobrir de onde seu corpo está tentando te tirar.",
    button: "Quero aprender a rastrear esse padrão"
  },
  compensar: {
    label: "Compensar",
    name: "Corpo-Compensação",
    message: "Eu preciso preencher esse vazio.",
    title: "Seu resultado: Corpo-Compensação",
    subtitle: "Pelas suas respostas, a Bússola encontrou um padrão dominante de compensação.",
    impact: "Quando uma falta emocional fica aberta, seu corpo ou comportamento pode buscar alívio, preenchimento ou anestesia.",
    microdiagnosis: "Talvez o problema não seja apenas o excesso. Talvez o excesso esteja apontando para uma falta que ainda não pôde ser sentida por inteiro.",
    investigation: "O que você tenta preencher quando não suporta sentir o vazio?",
    ctaSpecific: "Agora você precisa descobrir qual falta está pedindo compensação.",
    button: "Quero entender meu padrão no workshop"
  },
  suportar: {
    label: "Suportar",
    name: "Corpo-Sustentador",
    message: "Estou carregando peso demais.",
    title: "Seu resultado: Corpo-Sustentador",
    subtitle: "Pelas suas respostas, a Bússola encontrou um padrão dominante de sustentação.",
    impact: "Quando você carrega peso demais por tempo demais, seu corpo pode começar a sustentar essa carga por você.",
    microdiagnosis: "Talvez seu corpo não esteja falhando. Talvez ele esteja finalmente recusando uma carga que você normalizou.",
    investigation: "Que peso você continua carregando só porque todos se acostumaram com a sua força?",
    ctaSpecific: "Agora você precisa descobrir que carga seu corpo está sustentando.",
    button: "Quero rastrear a raiz no workshop"
  }
};

const QUESTIONS = [
  {
    id: "idade",
    text: "Qual é a sua faixa de idade?",
    kind: "single",
    options: [
      ["A", "Até 24 anos"],
      ["B", "De 25 a 34 anos"],
      ["C", "De 35 a 44 anos"],
      ["D", "De 45 a 54 anos"],
      ["E", "55 anos ou mais"]
    ]
  },
  {
    id: "relacionamento",
    text: "Qual é a sua situação atual de relacionamento?",
    kind: "single",
    options: [
      ["A", "Solteira"],
      ["B", "Em um relacionamento"],
      ["C", "Casada ou em união estável"],
      ["D", "Separada ou divorciada"],
      ["E", "Viúva"],
      ["F", "Prefiro não responder"]
    ]
  },
  {
    id: "sintomas",
    text: "Quais desses sintomas fazem parte da sua realidade hoje?",
    subtitle: "Selecione até 2 grupos. Se nenhum encaixar bem, escolha Outros.",
    kind: "multi",
    max: 2,
    options: [
      ["A", "Dores recorrentes que melhoram por um tempo e depois voltam.", null, "recorrencia"],
      ["B", "Dores, travamentos ou tensão: costas, lombar, ombros, articulações ou fibromialgia.", ["evitar", "suportar"]],
      ["C", "Cabeça e crises: enxaqueca, pressão na cabeça, ansiedade, pânico ou sensação de perder o controle.", "evitar"],
      ["D", "Cansaço e peso: exaustão constante, gastrite, azia, bruxismo, mandíbula travada ou corpo pesado.", "suportar"],
      ["E", "Pele e íntimos: alergias, dermatite, psoríase, coceiras, candidíase, infecção urinária ou herpes.", "proteger"],
      ["F", "Excessos e impulsos: compulsão alimentar, compras por impulso, vícios, exageros ou busca de alívio rápido.", "compensar"],
      ["G", "Outros sintomas recorrentes que não aparecem nessa lista.", null, "recorrencia"]
    ]
  },
  {
    id: "tempo",
    text: "Há quanto tempo você convive com esses sintomas, dores ou doenças?",
    kind: "single",
    options: [
      ["A", "Menos de 6 meses"],
      ["B", "Entre 6 meses e 2 anos"],
      ["C", "Entre 2 e 5 anos"],
      ["D", "Mais de 5 anos"],
      ["E", "Desde a infância ou adolescência"],
      ["F", "Vai e volta em fases específicas da vida"]
    ]
  },
  {
    id: "frequencia",
    text: "Com que frequência isso aparece ou volta na sua vida?",
    kind: "single",
    options: [
      ["A", "Quase todos os dias"],
      ["B", "Algumas vezes por semana"],
      ["C", "Em fases de estresse ou pressão"],
      ["D", "De tempos em tempos, mas quando vem atrapalha bastante"],
      ["E", "Melhorou por um tempo, mas voltou recentemente"],
      ["F", "Não sei dizer com clareza"]
    ]
  },
  {
    id: "periodo",
    text: () => dynamicPeriodQuestion(),
    kind: "single",
    options: [
      ["A", "Pessoas cobrando demais, invadindo meu espaço, criticando ou passando dos meus limites.", "proteger"],
      ["B", "Uma situação, relação, ambiente ou obrigação que eu queria evitar, mas continuei enfrentando.", "evitar"],
      ["C", "Momentos de rejeição, solidão, carência, ansiedade ou busca de algum alívio.", "compensar"],
      ["D", "Acúmulo de responsabilidades, pressão, trabalho, família, cuidado com outros ou sensação de ter que dar conta.", "suportar"],
      ["E", "Não tinha pensado nisso ainda.", null, "recorrencia"]
    ]
  },
  {
    id: "quando_aparece",
    text: "Quando esses sintomas aparecem, o que você costuma fazer primeiro?",
    kind: "single",
    options: [
      ["A", "Tento controlar o sintoma e seguir a vida.", null, "recorrencia"],
      ["B", "Procuro descansar, me afastar ou cancelar algumas coisas.", "evitar"],
      ["C", "Busco algum alívio rápido para conseguir me sentir melhor.", "compensar"],
      ["D", "Continuo fazendo o que precisa ser feito, mesmo sem estar bem.", "suportar"],
      ["E", "Procuro ajuda, mas sinto que nem sempre encontro a causa.", null, "cta"]
    ]
  },
  {
    id: "nao_esta_bem",
    text: "O que você costuma fazer quando percebe que não está bem?",
    kind: "single",
    options: [
      ["A", "Fico mais fechada, irritada, sensível ou na defensiva.", "proteger"],
      ["B", "Tento sumir, dormir, cancelar compromissos ou me afastar.", "evitar"],
      ["C", "Procuro algo para aliviar na hora: comida, celular, compra, prazer ou controle.", "compensar"],
      ["D", "Continuo resolvendo tudo, mesmo cansada, porque sinto que não posso parar.", "suportar"]
    ]
  },
  {
    id: "cansaco",
    text: "Sinto um cansaço que não passa, mesmo quando descanso, como se minha bateria não carregasse mais.",
    intro: "Complete de acordo com o que mais se aproxima da sua realidade:",
    kind: "scale",
    intensity: "cansaco",
    options: scaleOptions([null, null, { suportar: 1 }, { suportar: 2 }, { suportar: 3 }])
  },
  {
    id: "recorrencia",
    text: "Eu melhoro por um tempo, mas depois os sintomas voltam em fases parecidas.",
    intro: "Complete de acordo com o que mais se aproxima da sua realidade:",
    kind: "scale",
    intensity: "recorrencia",
    options: scaleOptions(null, [0, 0, 1, 2, 3])
  },
  {
    id: "limite_corpo",
    text: "Eu só percebo que passei do limite quando meu corpo começa a travar, doer ou dar sinais.",
    intro: "Complete de acordo com o que mais se aproxima da sua realidade:",
    kind: "scale",
    intensity: "limite",
    options: scaleOptions([
      null,
      null,
      { evitar: 1, suportar: 1 },
      { evitar: 1, suportar: 1 },
      { evitar: 2, suportar: 2 }
    ])
  },
  {
    id: "papel_relacoes",
    text: "Nas suas relações com família, amigos, trabalho ou relacionamento amoroso, qual papel você mais costuma ocupar?",
    kind: "single",
    options: [
      ["A", "A pessoa que vai aceitando muita coisa, mas depois se fecha ou se irrita.", "proteger"],
      ["B", "A pessoa que tenta evitar conflitos, conversas difíceis ou situações desconfortáveis.", "evitar"],
      ["C", "A pessoa que sente muito quando não é vista, escolhida, valorizada ou lembrada.", "compensar"],
      ["D", "A pessoa que segura a barra, resolve tudo e tenta não dar trabalho para ninguém.", "suportar"]
    ]
  },
  {
    id: "pergunta_bruno",
    text: "Se você pudesse fazer uma pergunta para o Bruno responder no Workshop Bússola da Cura, qual seria?",
    kind: "open",
    placeholder: "Exemplo: por que minha gastrite sempre volta quando estou sobrecarregada?\nExemplo: como descobrir a raiz emocional da minha enxaqueca?\nExemplo: por que eu melhoro por um tempo e depois tudo volta?"
  }
];

const UTM_KEY = "quiz_bussola_utms_v1";
const categories = Object.keys(CATEGORIES);
const root = document.querySelector("#quiz-root");
const stepLabel = document.querySelector("#step-label");
const preloadedAudios = new Map();

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
    answers: {},
    lead: null,
    entryPath: null,
    audioPlayed: {},
    result: null,
    completed: false
  };
}

function saveState() {
  sessionStorage.setItem("quiz_bussola_current_session", JSON.stringify(state));
}

function html(strings, ...values) {
  return strings.map((part, index) => part + (values[index] ?? "")).join("");
}

function scaleOptions(categoryWeights, recurrenceWeights = null) {
  const labels = ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"];
  return labels.map((label, index) => {
    const weights = Array.isArray(categoryWeights) ? categoryWeights[index] : categoryWeights;
    const categoryMap = weights && !Array.isArray(weights) ? weights : {};
    const category = weights && typeof weights === "string" ? weights : null;
    return [String.fromCharCode(65 + index), label, category, null, categoryMap, recurrenceWeights?.[index] || 0];
  });
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
  const step = state.screen === "question" || state.screen === "micro" || state.screen === "entryAudio" || state.screen === "result"
    ? Math.min(state.currentQuestion + 1, QUESTIONS.length)
    : 0;
  const degrees = Math.round((step / QUESTIONS.length) * 360);
  const needle = -35 + step * 9;
  stepLabel.textContent = `Etapa ${step} de ${QUESTIONS.length}`;
  document.documentElement.style.setProperty("--progress", `${degrees}deg`);
  document.documentElement.style.setProperty("--needle", `${needle}deg`);
}

function render() {
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (state.screen === "intro") return renderIntro();
  if (state.screen === "lead") return renderLeadCapture();
  if (state.screen === "question") return renderQuestion();
  if (state.screen === "micro") return renderMicroText();
  if (state.screen === "entryAudio") return renderAudioGate(ENTRY_AUDIOS[state.entryPath || "sobrecarga"], () => goToQuestion(5));
  if (state.screen === "result") return renderResult();
}

function renderIntro() {
  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        <span class="eyebrow">${OFFER_CONFIG.quizName}</span>
        <h1>Descubra o que seus sintomas podem estar tentando mostrar</h1>
        <p class="lead">Responda algumas perguntas rápidas sobre sua idade, fase de vida e sintomas que se repetem.</p>
        <p class="lead">Ao final, a Bússola vai cruzar suas respostas e mostrar qual caminho de investigação pode fazer mais sentido para você hoje.</p>
        <button class="button gold full" id="start-quiz">Começar minha análise</button>
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

function renderLeadCapture() {
  const lead = state.lead || {};
  root.innerHTML = html`
    <section class="screen panel">
      <div class="lead-card">
        <span class="eyebrow">Antes de começar</span>
        <h2>Para liberar sua análise, preencha seus dados</h2>
        <form id="lead-form" class="form-grid" novalidate>
          <div class="field">
            <label for="lead-name">Nome</label>
            <input id="lead-name" name="name" autocomplete="name" value="${lead.name || ""}" required>
          </div>
          <div class="field">
            <label for="lead-email">E-mail</label>
            <input id="lead-email" name="email" type="email" autocomplete="email" value="${lead.email || ""}" required>
          </div>
          <div class="field">
            <label for="lead-whatsapp">WhatsApp</label>
            <input id="lead-whatsapp" name="whatsapp" inputmode="tel" autocomplete="tel" value="${lead.whatsapp || ""}" required>
          </div>
          <p class="error-message" id="lead-error"></p>
          <button class="button gold full" type="submit">Continuar</button>
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
  error.textContent = "";
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    whatsapp: form.whatsapp.value.trim()
  };

  const phone = normalizeBrazilianWhatsapp(data.whatsapp);
  if (!data.name) return (error.textContent = "Informe seu nome.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return (error.textContent = "Informe um e-mail válido.");
  if (!phone) return (error.textContent = "Informe um WhatsApp com DDD. Pode usar com ou sem +55.");

  state.lead = { ...data, whatsapp: phone.display, whatsappDigits: phone.digits };
  state.screen = "question";
  state.currentQuestion = 0;
  saveState();
  trackEvent("quiz_lead_submit", { email: data.email, hasWhatsapp: true });
  await postLead({ event: "lead_submitted", lead: state.lead, answers: state.answers });
  render();
}

function normalizeBrazilianWhatsapp(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) digits = digits.slice(2);
  if (digits.length !== 10 && digits.length !== 11) return null;
  return { digits, display: `+55${digits}` };
}

function renderQuestion() {
  const question = QUESTIONS[state.currentQuestion];
  const title = typeof question.text === "function" ? question.text() : question.text;
  const answer = state.answers[question.id];

  root.innerHTML = html`
    <section class="screen panel">
      <div class="panel-content">
        ${progressBlock()}
        <span class="eyebrow">Etapa ${state.currentQuestion + 1} de ${QUESTIONS.length}</span>
        ${question.intro ? `<p class="question-intro">${question.intro}</p>` : ""}
        <h2 class="question-title">${title}</h2>
        ${question.subtitle ? `<p class="question-subtitle">${question.subtitle}</p>` : ""}
        ${question.kind === "open" ? openQuestion(question, answer) : optionList(question, answer)}
      </div>
    </section>
  `;

  if (question.kind === "multi") return bindMultiQuestion(question);
  if (question.kind === "open") return bindOpenQuestion(question);
  bindSingleQuestion(question);
}

function progressBlock() {
  const current = state.currentQuestion + 1;
  return html`
    <div class="progress-shell">
      <div class="compass-progress" aria-hidden="true"></div>
      <div class="progress-text">
        <strong>Etapa ${current} de ${QUESTIONS.length}</strong>
        <span>Análise emocional inicial</span>
      </div>
    </div>
  `;
}

function optionList(question, answer) {
  const selectedCodes = Array.isArray(answer?.codes) ? answer.codes : [];
  return html`
    <div class="options ${question.kind === "scale" ? "scale-options" : ""}" role="${question.kind === "multi" ? "group" : "radiogroup"}" aria-label="${typeof question.text === "function" ? question.text() : question.text}">
      ${question.options.map((option) => {
        const [code, label] = option;
        const isSelected = question.kind === "multi" ? selectedCodes.includes(code) : answer?.code === code;
        return optionButton(code, label, isSelected);
      }).join("")}
    </div>
    ${question.kind === "multi" ? `<button class="button gold full question-next" id="multi-next" ${selectedCodes.length ? "" : "disabled"}>Continuar análise</button><p class="error-message" id="multi-error"></p>` : ""}
  `;
}

function optionButton(code, label, selected) {
  return html`
    <button class="option-button ${selected ? "selected" : ""}" data-code="${code}" type="button">
      <span class="answer-top">
        <span class="option-code">${code}</span>
        <span class="option-label">${label}</span>
      </span>
    </button>
  `;
}

function openQuestion(question, answer) {
  return html`
    <form id="open-form" class="form-grid open-form">
      <div class="field">
        <label for="open-answer">Sua pergunta</label>
        <textarea id="open-answer" name="openAnswer" rows="6" placeholder="${question.placeholder}">${answer?.text || ""}</textarea>
      </div>
      <button class="button gold full" type="submit">Ver meu resultado</button>
    </form>
  `;
}

function bindSingleQuestion(question) {
  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      const option = question.options.find(([code]) => code === button.dataset.code);
      state.answers[question.id] = buildAnswer(question, option);
      saveState();
      trackEvent("quiz_answer", { questionId: question.id, code: button.dataset.code });
      setTimeout(afterQuestionAnswered, 320);
    });
  });
}

function bindMultiQuestion(question) {
  const next = document.querySelector("#multi-next");
  const error = document.querySelector("#multi-error");

  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      const current = state.answers[question.id]?.codes || [];
      const code = button.dataset.code;
      const exists = current.includes(code);
      const nextCodes = exists ? current.filter((item) => item !== code) : [...current, code];

      if (!exists && nextCodes.length > question.max) {
        error.textContent = `Selecione no máximo ${question.max} opções.`;
        return;
      }

      error.textContent = "";
      state.answers[question.id] = {
        kind: "multi",
        codes: nextCodes,
        labels: nextCodes.map((item) => question.options.find(([optionCode]) => optionCode === item)?.[1]).filter(Boolean),
        scores: mergeScores(nextCodes.map((item) => buildAnswer(question, question.options.find(([optionCode]) => optionCode === item)).scores)),
        recurrence: nextCodes.some((item) => ["A", "G"].includes(item)) ? 1 : 0
      };
      button.classList.toggle("selected", !exists);
      next.disabled = !nextCodes.length;
      saveState();
    });
  });

  next.addEventListener("click", () => {
    if (!state.answers[question.id]?.codes?.length) return;
    trackEvent("quiz_answer", { questionId: question.id, codes: state.answers[question.id].codes });
    afterQuestionAnswered();
  });
}

function bindOpenQuestion(question) {
  document.querySelector("#open-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = event.currentTarget.openAnswer.value.trim();
    state.answers[question.id] = { kind: "open", text: value };
    saveState();
    trackEvent("quiz_answer", { questionId: question.id, hasText: Boolean(value) });
    showFinalResult();
  });
}

function buildAnswer(question, option) {
  const [code, label, category, flag, categoryMap = null, recurrence = 0] = option;
  const scores = {};

  if (Array.isArray(category)) category.forEach((item) => (scores[item] = (scores[item] || 0) + 1));
  if (typeof category === "string") scores[category] = (scores[category] || 0) + 1;
  if (categoryMap) Object.entries(categoryMap).forEach(([key, value]) => (scores[key] = (scores[key] || 0) + value));

  return {
    kind: question.kind,
    code,
    label,
    category: typeof category === "string" ? category : null,
    flag: flag || null,
    scores,
    recurrence: recurrence || (flag === "recorrencia" ? 1 : 0)
  };
}

function afterQuestionAnswered() {
  if (state.currentQuestion === 4) {
    state.screen = "micro";
  } else if (state.currentQuestion >= QUESTIONS.length - 1) {
    showFinalResult();
    return;
  } else {
    state.currentQuestion += 1;
    state.screen = "question";
  }

  saveState();
  render();
}

function renderMicroText() {
  const name = firstName();
  const entryPath = determineEntryAudioPath();
  preloadAudio(ENTRY_AUDIOS[entryPath].src);

  root.innerHTML = html`
    <section class="screen panel">
      <div class="micro-card">
        <span class="eyebrow">Primeiro retrato</span>
        <h2>Certo, ${name}. Já temos um primeiro retrato.</h2>
        <p>Até aqui, você mostrou qual fase da vida está vivendo, quais sintomas mais aparecem, há quanto tempo isso faz parte da sua realidade e com que frequência isso volta.</p>
        <div class="pitch-box light">
          <strong>Agora a Bússola vai olhar para uma coisa que quase ninguém observa:</strong>
          <p>o que estava acontecendo na sua vida no período em que esses sintomas começaram, pioraram ou voltaram.</p>
        </div>
        <button class="button gold full" id="continue-micro">Continuar análise</button>
      </div>
    </section>
  `;

  document.querySelector("#continue-micro").addEventListener("click", () => {
    state.entryPath = entryPath;
    state.screen = "entryAudio";
    saveState();
    render();
  });
}

function renderAudioGate(audioConfig, onContinue) {
  const canContinue = Boolean(state.audioPlayed[audioConfig.id]);

  root.innerHTML = html`
    <section class="screen panel">
      <div class="audio-card">
        ${progressBlock()}
        <span class="eyebrow">Áudio da Bússola</span>
        <h2>${audioConfig.title}</h2>
        <p>${audioConfig.subtitle}</p>
        <div class="audio-player">
          <div class="audio-meta">
            <button class="play-button" id="play-audio" aria-label="Reproduzir áudio" type="button"><span aria-hidden="true"></span></button>
            <div class="waveform" aria-hidden="true">${Array.from({ length: 42 }, () => "<i></i>").join("")}</div>
            <button class="speed-button" id="speed-audio" type="button" aria-label="Alterar velocidade do áudio">1.0x</button>
          </div>
          <div class="audio-status" id="audio-status">${canContinue ? audioConfig.label : "Clique no play ou abra a transcrição para continuar."}</div>
          <audio id="audio-element" preload="auto" src="${audioConfig.src}"></audio>
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
  audio.load();

  function setPlaying(isPlaying) {
    playButton.classList.toggle("is-playing", isPlaying);
    playButton.setAttribute("aria-label", isPlaying ? "Pausar áudio" : "Reproduzir áudio");
  }

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
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    trackEvent("quiz_audio_play", { audioId: audioConfig.id, entryPath: state.entryPath });
    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      transcript.open = true;
      status.textContent = "Áudio indisponível neste momento. Use a transcrição para continuar.";
      setPlaying(false);
    }
  });

  audio.addEventListener("pause", () => setPlaying(false));
  audio.addEventListener("ended", () => setPlaying(false));
  audio.addEventListener("play", () => setPlaying(true));

  speedButton.addEventListener("click", () => {
    speedIndex = (speedIndex + 1) % speeds.length;
    audio.playbackRate = speeds[speedIndex];
    speedButton.textContent = `${speeds[speedIndex].toFixed(1)}x`.replace("2.0x", "2x");
  });

  transcript.addEventListener("toggle", () => {
    if (transcript.open) unlock("transcript");
  });

  continueButton.addEventListener("click", () => {
    trackEvent("quiz_audio_continue", { audioId: audioConfig.id, entryPath: state.entryPath });
    onContinue();
  });
}

function goToQuestion(index) {
  state.currentQuestion = index;
  state.screen = "question";
  saveState();
  render();
}

function preloadAudio(src) {
  if (!src || preloadedAudios.has(src)) return;
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.load();
  preloadedAudios.set(src, audio);
}

function showFinalResult() {
  const result = determineResult();
  state.result = result;
  state.completed = true;
  state.screen = "result";
  saveState();
  postLead({
    event: "quiz_completed",
    result,
    scores: calculateScores(),
    recurrence: recurrenceLevel(),
    answers: state.answers,
    lead: state.lead
  });
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
        <div class="dominant-card result-summary">
          <strong>Talvez o seu corpo esteja tentando mostrar um padrão que você normalizou.</strong>
          <p>${personalizedResultText(result)}</p>
        </div>
      </div>
    </section>
    ${vslBlock(result)}
    <section class="screen panel">
      <div class="result-hero">
        <div class="result-section compact-result">
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
    ${ctaWorkshop(result)}
  `;

  trackEvent("quiz_result_view", { result: resultId, scores });
  document.querySelectorAll("[data-checkout]").forEach((item) => item.addEventListener("click", handleCheckoutClick));
}

function personalizedResultText(result) {
  const tempo = answerLabel("tempo") || "esse período";
  const frequencia = answerLabel("frequencia") || "com alguma frequência";
  const sintomas = symptomSummary();
  const recurrence = recurrenceLevel();
  const question = state.answers.pergunta_bruno?.text;

  return html`
    Você marcou sinais ligados a <mark>${sintomas}</mark>. Também indicou que convive com isso há <mark>${tempo}</mark> e que isso aparece ou volta <mark>${frequencia.toLowerCase()}</mark>.
    ${recurrence.text ? `<br><br>${recurrence.text}` : ""}
    <br><br>${result.impact} ${result.microdiagnosis}
    ${question ? `<br><br><mark>A pergunta que você escreveu para o Bruno</mark> é exatamente o tipo de ponto que o workshop ajuda a organizar com método.` : ""}
  `;
}

function symptomSummary() {
  const labels = state.answers.sintomas?.labels || [];
  if (!labels.length) return "sintomas recorrentes";
  return labels.slice(0, 3).map((label) => label.replace(/\.$/, "").toLowerCase()).join("; ");
}

function recurrenceLevel() {
  const value = calculateRecurrence();
  if (value >= 5) return { level: "alta", text: "Suas respostas também mostram uma recorrência alta: você melhora por um tempo, mas depois o corpo volta a apresentar sinais parecidos." };
  if (value >= 3) return { level: "média", text: "Suas respostas mostram uma recorrência moderada: existe um padrão que parece voltar em fases específicas." };
  return { level: "baixa", text: "" };
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
  const vsl = RESULT_VSLS[state.result] || RESULT_VSLS.proteger;

  return html`
    <section class="screen vsl-section">
      <span class="eyebrow">Assista antes de decidir</span>
      <h2>Agora que você viu sua função dominante, entenda o que fazer com essa informação.</h2>
      ${pandaVideo(vsl)}
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
        <p>No ${OFFER_CONFIG.workshopName}, Bruno Simplício mostra como rastrear o caminho por trás do padrão: sintoma, fase de vida, padrão emocional e protocolo de ação.</p>
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

function calculateScores() {
  return Object.values(state.answers).reduce((scores, answer) => {
    Object.entries(answer.scores || {}).forEach(([category, value]) => {
      scores[category] += value;
    });
    return scores;
  }, { proteger: 0, evitar: 0, compensar: 0, suportar: 0 });
}

function calculateRecurrence() {
  return Object.values(state.answers).reduce((sum, answer) => sum + (answer.recurrence || 0), 0);
}

function determineResult() {
  const scores = calculateScores();
  const max = Math.max(...Object.values(scores));
  const tied = categories.filter((id) => scores[id] === max);
  if (tied.length === 1) return tied[0];

  const priorityQuestions = ["papel_relacoes", "nao_esta_bem", "periodo"];
  for (const id of priorityQuestions) {
    const category = state.answers[id]?.category;
    if (category && tied.includes(category)) return category;
  }

  return tied[0] || "suportar";
}

function determineEntryAudioPath() {
  const partialScores = calculateScoresFor(["sintomas", "periodo", "quando_aparece", "nao_esta_bem"]);
  const sobrecarga = partialScores.suportar || 0;
  const silencio = (partialScores.proteger || 0) + (partialScores.evitar || 0) + (partialScores.compensar || 0);
  if (!sobrecarga && !silencio) return "silencio";
  return sobrecarga >= silencio ? "sobrecarga" : "silencio";
}

function calculateScoresFor(questionIds) {
  return questionIds.reduce((scores, id) => {
    Object.entries(state.answers[id]?.scores || {}).forEach(([category, value]) => {
      scores[category] += value;
    });
    return scores;
  }, { proteger: 0, evitar: 0, compensar: 0, suportar: 0 });
}

function mergeScores(items) {
  return items.reduce((merged, scores) => {
    Object.entries(scores || {}).forEach(([category, value]) => {
      merged[category] = (merged[category] || 0) + value;
    });
    return merged;
  }, {});
}

function dynamicPeriodQuestion() {
  const code = state.answers.tempo?.code;
  const options = {
    A: "Nesses últimos 6 meses, alguma dessas situações também aconteceu na sua vida?",
    B: "Nesse período em que os sintomas começaram ou se intensificaram, alguma dessas situações também estava acontecendo?",
    C: "Olhando para os últimos anos, quando esses sintomas começaram ou se repetiram, alguma dessas situações fazia parte da sua vida?",
    D: "Olhando para os períodos em que esses sintomas mais apareceram, alguma dessas situações costuma se repetir?",
    E: "Pensando na sua história, alguma dessas situações aparece como um padrão desde cedo?",
    F: "Nas fases em que esses sintomas voltam, alguma dessas situações costuma estar presente?"
  };
  return options[code] || "Nesse período, alguma dessas situações também estava acontecendo?";
}

function answerLabel(id) {
  return state.answers[id]?.label || "";
}

function firstName() {
  return (state.lead?.name || "sua análise").trim().split(/\s+/)[0];
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
    saveLeadBackup(payload);
    console.warn("Lead webhook failed", error);
  }
}

function saveLeadBackup(payload) {
  try {
    const key = "quiz_bussola_pending_leads";
    const current = JSON.parse(localStorage.getItem(key)) || [];
    current.push({
      ...payload,
      utms: getUtms(),
      source: "quiz-bussola",
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(key, JSON.stringify(current.slice(-50)));
  } catch (error) {
    console.warn("Lead backup failed", error);
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
