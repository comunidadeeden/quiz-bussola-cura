const PESQUISA_CONFIG = {
  leadWebhookUrl: "https://script.google.com/macros/s/AKfycbws3Kj9A42d_UxuSLQgcI33ypFK4rSxsxZ0chSyEgE0vNo1Pet2tVTFgMEZJy7dLk2wEQ/exec",
  source: "pesquisa_raio_x",
  sheetTabName: "Pesquisa Raio X",
  spreadsheetId: "1y8flaW1dDzGUpV9wXnoug0ADVxUUWjtMk5v-z6ygjlg",
  storageKey: "pesquisa_raio_x_state_v1"
};

const SEGMENTS = {
  terapeuta: "Terapeuta",
  futuro: "Quer ser terapeuta",
  pessoas: "Profissional que trabalha com pessoas"
};

const QUESTIONS = [
  { id: "nome", number: "1", type: "short", title: "Qual é o seu nome?", placeholder: "Digite seu nome completo" },
  {
    id: "idade",
    number: "2",
    type: "single",
    title: "Qual é a sua idade?",
    options: ["Até 24 anos", "De 25 a 34 anos", "De 35 a 44 anos", "De 45 a 54 anos", "De 55 a 64 anos", "65 anos ou mais"]
  },
  { id: "cidade_estado", number: "3", type: "short", title: "Em qual cidade e estado você mora?", placeholder: "Exemplo: São Paulo, SP" },
  {
    id: "estado_civil",
    number: "4",
    type: "single",
    title: "Qual é o seu estado civil?",
    options: ["Solteiro(a)", "Casado(a)", "União estável", "Separado(a) ou divorciado(a)", "Viúvo(a)", "Prefiro não responder"]
  },
  {
    id: "filhos",
    number: "5",
    type: "single",
    title: "Você tem filhos?",
    options: ["Não", "Sim, 1 filho", "Sim, 2 filhos", "Sim, 3 filhos ou mais", "Prefiro não responder"]
  },
  {
    id: "escolaridade",
    number: "6",
    type: "single",
    title: "Qual é o seu nível de escolaridade?",
    options: ["Ensino médio", "Ensino técnico", "Ensino superior incompleto", "Ensino superior completo", "Pós-graduação ou especialização", "Mestrado ou doutorado", "Outro"]
  },
  {
    id: "renda_pessoal_mensal",
    number: "7",
    type: "single",
    title: "Qual é aproximadamente a sua renda pessoal mensal?",
    options: ["Até R$ 2.000", "De R$ 2.001 a R$ 4.000", "De R$ 4.001 a R$ 7.000", "De R$ 7.001 a R$ 10.000", "De R$ 10.001 a R$ 15.000", "De R$ 15.001 a R$ 25.000", "Acima de R$ 25.000", "Prefiro não responder"]
  },
  { id: "profissao_atividade_atual", number: "8", type: "short", title: "Qual é a sua profissão ou principal atividade atualmente?", placeholder: "Digite sua profissão ou atividade" },
  {
    id: "motivo_entrada_mentoria",
    number: "9",
    type: "single",
    title: "Qual alternativa melhor representa o principal motivo pelo qual você entrou na Mentoria Raio-X?",
    helper: "Mesmo que você se identifique com mais de uma alternativa, escolha aquela que melhor representa seu momento e seu principal objetivo ao entrar na mentoria.",
    options: [
      { label: "Já sou terapeuta e realizo atendimentos", segment: "terapeuta" },
      { label: "Quero me tornar terapeuta ou começar a atender", segment: "futuro" },
      { label: "Trabalho em outra área que envolve lidar diretamente com pessoas", segment: "pessoas" }
    ]
  },
  { id: "t_area_abordagem", number: "T1", segment: "terapeuta", type: "long", title: "Em qual área, método ou abordagem terapêutica você atua?", placeholder: "Conte brevemente sua área, método ou abordagem" },
  {
    id: "t_tempo_atendimentos",
    number: "T2",
    segment: "terapeuta",
    type: "single",
    title: "Há quanto tempo você realiza atendimentos?",
    options: ["Menos de 1 ano", "De 1 a 3 anos", "De 4 a 6 anos", "De 7 a 10 anos", "Mais de 10 anos"]
  },
  {
    id: "t_pessoas_por_semana",
    number: "T3",
    segment: "terapeuta",
    type: "single",
    title: "Quantas pessoas você atende, em média, por semana?",
    options: ["De 1 a 5 pessoas", "De 6 a 10 pessoas", "De 11 a 20 pessoas", "De 21 a 30 pessoas", "Mais de 30 pessoas"]
  },
  {
    id: "t_valor_medio_atendimento",
    number: "T4",
    segment: "terapeuta",
    type: "single",
    title: "Qual é o valor médio cobrado por atendimento?",
    options: ["Até R$ 100", "De R$ 101 a R$ 200", "De R$ 201 a R$ 350", "De R$ 351 a R$ 500", "Acima de R$ 500", "Prefiro não responder"]
  },
  {
    id: "t_renda_mensal_atendimentos",
    number: "T5",
    segment: "terapeuta",
    type: "single",
    title: "Quanto você ganha mensalmente com seus atendimentos?",
    options: ["Até R$ 2.000", "De R$ 2.001 a R$ 5.000", "De R$ 5.001 a R$ 10.000", "De R$ 10.001 a R$ 20.000", "Acima de R$ 20.000", "Prefiro não responder"]
  },
  {
    id: "t_dificuldades_atendimentos",
    number: "T6",
    segment: "terapeuta",
    type: "multi",
    title: "Quais são suas maiores dificuldades dentro dos atendimentos?",
    options: ["Entender o que realmente está por trás do problema", "Identificar a origem emocional do caso", "Saber quais perguntas fazer", "Conduzir casos complexos", "Escolher a melhor ferramenta ou protocolo", "Sentir segurança nas minhas análises", "Conseguir resultados melhores com os pacientes", "Lidar com pacientes resistentes", "Outro"]
  },
  {
    id: "t_dificuldades_crescer",
    number: "T7",
    segment: "terapeuta",
    type: "multi",
    title: "Quais são suas maiores dificuldades para crescer profissionalmente?",
    options: ["Atrair pacientes", "Criar conteúdo", "Ter um Instagram profissional", "Vender meus atendimentos", "Cobrar um valor maior", "Construir autoridade", "Definir meu posicionamento", "Fazer tráfego pago", "Organizar minha rotina", "Outro"]
  },
  { id: "t_situacao_compreender_paciente", number: "T8", segment: "terapeuta", type: "long", title: "Conte uma situação em que você percebeu que precisava compreender melhor o paciente ou enxergar algo que não estava sendo dito.", placeholder: "Descreva a situação com suas palavras" },
  { id: "f_profissao_atual", number: "F1", segment: "futuro", type: "short", title: "Qual é a sua profissão ou atividade atual?", placeholder: "Digite sua profissão ou atividade" },
  { id: "f_por_que_terapeuta", number: "F2", segment: "futuro", type: "long", title: "Por que você deseja se tornar terapeuta?", placeholder: "Conte com sinceridade" },
  {
    id: "f_interesse_profissao",
    number: "F3",
    segment: "futuro",
    type: "multi",
    title: "O que despertou em você o interesse por essa profissão?",
    options: ["Uma experiência pessoal de transformação", "O desejo de ajudar outras pessoas", "Insatisfação com minha profissão atual", "Interesse por comportamento humano", "Busca por propósito", "Possibilidade de ter uma nova fonte de renda", "Desejo de ter mais liberdade profissional", "Influência do Bruno ou de outro profissional", "Outro"]
  },
  {
    id: "f_formacao",
    number: "F4",
    segment: "futuro",
    type: "single",
    title: "Você já possui alguma formação relacionada à terapia ou ao comportamento humano?",
    options: ["Ainda não", "Estou fazendo minha primeira formação", "Já concluí uma formação", "Já concluí mais de uma formação", "Estudei apenas por livros e conteúdos gratuitos"]
  },
  {
    id: "f_quando_comecar",
    number: "F5",
    segment: "futuro",
    type: "single",
    title: "Quando você pretende começar a atender?",
    options: ["O mais rápido possível", "Nos próximos 3 meses", "Entre 3 e 6 meses", "Entre 6 meses e 1 ano", "Ainda não tenho uma previsão", "Ainda não sei se realmente quero atender"]
  },
  {
    id: "f_impedimentos",
    number: "F6",
    segment: "futuro",
    type: "multi",
    title: "O que mais impede você de começar hoje?",
    options: ["Não me sinto preparado(a)", "Tenho medo de não saber conduzir os casos", "Não sei como conseguir os primeiros pacientes", "Não sei qual abordagem utilizar", "Tenho medo de não conseguir resultados", "Não sei como cobrar", "Tenho medo de abandonar minha profissão atual", "Falta de tempo", "Falta de recursos financeiros", "Outro"]
  },
  {
    id: "f_renda_desejada",
    number: "F7",
    segment: "futuro",
    type: "single",
    title: "Quanto você gostaria de ganhar mensalmente atuando como terapeuta?",
    options: ["Até R$ 3.000", "De R$ 3.001 a R$ 5.000", "De R$ 5.001 a R$ 10.000", "De R$ 10.001 a R$ 20.000", "Acima de R$ 20.000", "Meu principal objetivo não é financeiro"]
  },
  { id: "f_pronto_primeiro_atendimento", number: "F8", segment: "futuro", type: "long", title: "O que você precisaria aprender ou desenvolver para sentir que está pronto(a) para realizar seu primeiro atendimento?", placeholder: "Escreva sua resposta" },
  { id: "p_profissao_area", number: "P1", segment: "pessoas", type: "short", title: "Qual é sua profissão, cargo ou área de atuação?", placeholder: "Digite sua profissão, cargo ou área" },
  {
    id: "p_contexto_pessoas",
    number: "P2",
    segment: "pessoas",
    type: "multi",
    title: "Em qual contexto você mais lida com pessoas?",
    options: ["Liderança e gestão de equipes", "Vendas", "Atendimento ao cliente", "Recursos humanos", "Educação", "Saúde", "Direito", "Empreendedorismo", "Consultoria", "Comunicação", "Relacionamentos pessoais", "Outro"]
  },
  {
    id: "p_frequencia_compreender_pessoas",
    number: "P3",
    segment: "pessoas",
    type: "single",
    title: "Com que frequência seu trabalho exige compreender o comportamento, as emoções ou as intenções de outras pessoas?",
    options: ["O tempo todo", "Frequentemente", "Algumas vezes", "Raramente"]
  },
  {
    id: "p_dificuldades_lidar_pessoas",
    number: "P4",
    segment: "pessoas",
    type: "multi",
    title: "Quais são suas maiores dificuldades ao lidar com pessoas?",
    options: ["Entender o que a pessoa realmente quer", "Perceber quando alguém está escondendo algo", "Identificar perfis diferentes", "Comunicar-me de forma adequada com cada pessoa", "Lidar com conflitos", "Liderar e influenciar", "Vender ou negociar", "Estabelecer limites", "Reconhecer manipulações", "Tomar decisões sobre pessoas", "Outro"]
  },
  { id: "p_consequencia_dificuldades", number: "P5", segment: "pessoas", type: "long", title: "Qual consequência essas dificuldades geram atualmente?", placeholder: "Conte como isso aparece na prática" },
  {
    id: "p_resultados_analise_humana",
    number: "P6",
    segment: "pessoas",
    type: "multi",
    title: "Em quais resultados você acredita que a análise humana mais poderia ajudar?",
    options: ["Liderar melhor", "Vender mais", "Negociar melhor", "Contratar pessoas mais adequadas", "Melhorar o atendimento ao cliente", "Evitar conflitos", "Reconhecer manipulações", "Melhorar meus relacionamentos", "Tomar decisões melhores", "Entender melhor a mim mesmo(a)", "Outro"]
  },
  {
    id: "p_uso_conhecimento",
    number: "P7",
    segment: "pessoas",
    type: "multi",
    title: "Como você pretende utilizar o conhecimento da mentoria?",
    options: ["Dentro da minha profissão atual", "Na minha empresa ou equipe", "Em vendas e negociações", "Nos meus relacionamentos", "Para desenvolvimento pessoal", "Para futuramente atuar como terapeuta", "Ainda estou descobrindo", "Outro"]
  },
  { id: "p_situacao_decisao_errada", number: "P8", segment: "pessoas", type: "long", title: "Conte uma situação em que não compreender corretamente uma pessoa fez você perder uma oportunidade, entrar em conflito ou tomar uma decisão errada.", placeholder: "Descreva a situação com suas palavras" },
  {
    id: "q10_conheceu_bruno",
    number: "10",
    common: true,
    type: "single",
    title: "Como você conheceu o Bruno Simplício?",
    options: ["Instagram", "Anúncio", "Indicação", "Comunidade Éden", "Workshop anterior", "YouTube", "WhatsApp", "Já acompanhava o Bruno há algum tempo", "Outro"]
  },
  { id: "q11_atencao_workshop", number: "11", common: true, type: "long", title: "O que mais chamou sua atenção quando viu o Workshop Raio-X Humano?", placeholder: "Escreva sua resposta" },
  { id: "q12_momento_workshop", number: "12", common: true, type: "long", title: "Qual conteúdo ou momento do workshop mais mexeu com você?", placeholder: "Escreva sua resposta" },
  { id: "q13_exatamente_disso", number: "13", common: true, type: "long", title: "Houve algum momento em que você pensou: “É exatamente disso que eu preciso”? Qual?", placeholder: "Conte qual foi esse momento" },
  { id: "q14_motivo_compra", number: "14", common: true, type: "long", title: "Qual foi o principal motivo que fez você entrar na Mentoria Raio-X?", placeholder: "Escreva sua resposta" },
  {
    id: "q15_entrega_influenciou",
    number: "15",
    common: true,
    type: "single",
    title: "Qual entrega da mentoria mais influenciou sua decisão?",
    options: ["Traços de caráter", "Padrões emocionais", "Análise de traumas no rosto", "Análise de traumas no corpo", "Sessões reais gravadas", "Mentoria semanal com o Bruno", "IA de apoio para atendimentos e supervisão", "Mapas de traços e traumas", "Protocolos e materiais complementares", "Marketing", "Tráfego pago", "Instagram e templates", "Treinamento de vendas", "Grupo no WhatsApp", "O conjunto completo"]
  },
  {
    id: "q16_maior_duvida",
    number: "16",
    common: true,
    type: "single",
    title: "Qual era sua maior dúvida antes de comprar?",
    options: ["Valor do investimento", "Falta de tempo", "Medo de não conseguir aprender", "Medo de não conseguir aplicar", "Dúvida se seria útil para minha profissão", "Dúvida se era o momento certo", "Já havia comprado outros cursos", "Precisava conversar com alguém", "Não tive nenhuma grande dúvida", "Outro"]
  },
  { id: "q17_quase_nao_entrou", number: "17", common: true, type: "long", title: "O que quase fez você não entrar?", placeholder: "Escreva sua resposta" },
  { id: "q18_superou_duvida", number: "18", common: true, type: "long", title: "O que fez você superar essa dúvida e decidir comprar?", placeholder: "Escreva sua resposta" },
  { id: "q19_resultado_esperado", number: "19", common: true, type: "long", title: "Qual é o principal resultado que você espera alcançar com a mentoria?", placeholder: "Escreva sua resposta" },
  { id: "q20_doze_meses", number: "20", common: true, type: "long", title: "Daqui a 12 meses, o que precisa ter mudado para você sentir que valeu a pena ter entrado?", placeholder: "Escreva sua resposta" },
  {
    id: "q21_transformacao_importante",
    number: "21",
    common: true,
    type: "single",
    title: "Qual transformação é mais importante para você?",
    options: ["Compreender melhor as pessoas", "Sentir mais segurança profissional", "Atender melhor", "Conseguir melhores resultados nos atendimentos", "Começar a atuar como terapeuta", "Atrair mais pacientes ou clientes", "Ganhar mais dinheiro", "Construir autoridade", "Liderar melhor", "Vender ou negociar melhor", "Melhorar meus relacionamentos", "Reconhecer manipulações e me proteger", "Outro"]
  },
  { id: "q22_analisar_pessoas", number: "22", common: true, type: "long", title: "Complete a frase: “Se eu aprender a analisar melhor as pessoas, vou conseguir...”", placeholder: "Complete com suas palavras" },
  { id: "q23_mudanca_profissional", number: "23", common: true, type: "long", title: "Como esse resultado mudaria sua vida profissional?", placeholder: "Escreva sua resposta" },
  { id: "q24_mudanca_pessoal", number: "24", common: true, type: "long", title: "Como esse resultado mudaria sua vida pessoal?", placeholder: "Escreva sua resposta" },
  { id: "q25_explicaria_amigo", number: "25", common: true, type: "long", title: "Como você explicaria para um amigo por que decidiu entrar nessa mentoria?", placeholder: "Escreva sua resposta" }
];

const FIELD_IDS = QUESTIONS.map((question) => question.id);
const root = document.querySelector("#survey-root");
const progressLabel = document.querySelector("#progress-label");
let state = loadState();

function createState() {
  return {
    screen: "intro",
    currentQuestionId: "nome",
    answers: {},
    segment: "",
    utms: getTrackingParams(),
    submitted: false
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PESQUISA_CONFIG.storageKey) || "null");
    if (saved && saved.screen && saved.answers) return { ...createState(), ...saved, utms: getTrackingParams() };
  } catch (error) {
    console.warn("State restore failed", error);
  }
  return createState();
}

function saveState() {
  localStorage.setItem(PESQUISA_CONFIG.storageKey, JSON.stringify(state));
}

function getTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid", "src", "sck"];
  return keys.reduce((acc, key) => {
    if (params.has(key)) acc[key] = params.get(key);
    return acc;
  }, {});
}

function render() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateProgress();
  if (state.screen === "intro") return renderIntro();
  if (state.screen === "question") return renderQuestion();
  if (state.screen === "loading") return renderLoading();
  if (state.screen === "final") return renderFinal();
}

function updateProgress() {
  if (state.screen !== "question") {
    progressLabel.textContent = "";
    return;
  }
  const visible = getVisibleQuestions();
  const index = visible.findIndex((question) => question.id === state.currentQuestionId);
  progressLabel.textContent = index >= 0 ? `Etapa ${index + 1} de ${visible.length}` : "";
}

function panel(content, className = "") {
  return `<section class="screen panel ${className}"><div class="panel-inner">${content}</div></section>`;
}

function renderIntro() {
  root.innerHTML = panel(`
    <span class="eyebrow">Pesquisa de Perfil e Expectativas</span>
    <h1>Pesquisa de Perfil e Expectativas</h1>
    <p class="lead">Alunos da Mentoria Raio-X</p>
    <div class="intro-copy">
      <p>Queremos conhecer melhor cada pessoa que entrou na Mentoria Raio-X.</p>
      <p>Suas respostas vão nos ajudar a compreender as necessidades reais da turma, melhorar os conteúdos, encontros e ferramentas e tornar a experiência da mentoria cada vez mais alinhada aos seus objetivos.</p>
      <p>Não existe resposta certa ou errada. Responda com sinceridade. As informações serão analisadas de forma confidencial.</p>
    </div>
    <button class="button button-primary" id="start-button" type="button">Começar pesquisa</button>
  `);

  document.querySelector("#start-button").addEventListener("click", () => {
    state.screen = "question";
    saveState();
    trackEvent("raioxpesquisa_start");
    render();
  });
}

function getVisibleQuestions() {
  return QUESTIONS.filter((question) => {
    if (question.segment) return state.segment === question.segment;
    if (question.common) return Boolean(state.segment);
    return true;
  });
}

function getCurrentQuestion() {
  return QUESTIONS.find((question) => question.id === state.currentQuestionId) || getVisibleQuestions()[0];
}

function renderQuestion() {
  const question = getCurrentQuestion();
  const visible = getVisibleQuestions();
  const index = Math.max(visible.findIndex((item) => item.id === question.id), 0);
  const progress = ((index + 1) / visible.length) * 100;

  const fixedActionClass = question.type === "short" || question.type === "long" || question.type === "multi" ? "has-fixed-action" : "";

  root.innerHTML = panel(`
    <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${progress}%"></div></div>
    <div class="question-number">Etapa ${index + 1} de ${visible.length} · pergunta ${question.number}</div>
    <h2>${question.title}</h2>
    ${question.helper ? `<p class="helper">${question.helper}</p>` : ""}
    ${renderQuestionInput(question)}
  `, fixedActionClass);

  bindQuestion(question);
}

function renderQuestionInput(question) {
  if (question.type === "short" || question.type === "long") {
    const value = answerValue(question.id);
    const tag = question.type === "long" ? "textarea" : "input";
    const input = question.type === "long"
      ? `<textarea id="answer" name="answer" placeholder="${escapeHtml(question.placeholder || "")}" required>${escapeHtml(value)}</textarea>`
      : `<input id="answer" name="answer" value="${escapeHtml(value)}" placeholder="${escapeHtml(question.placeholder || "")}" required>`;

    return `
      <form class="form" id="text-form" novalidate>
        <div class="field">
          <label for="answer">Sua resposta</label>
          ${input}
        </div>
        <div class="error" id="form-error" role="alert"></div>
        <button class="button button-primary fixed-submit" type="submit">Continuar</button>
      </form>
    `;
  }

  if (question.type === "multi") {
    const selected = Array.isArray(state.answers[question.id]) ? state.answers[question.id] : [];
    return `
      <div class="options" role="group" aria-label="${escapeHtml(question.title)}">
        ${question.options.map((option, optionIndex) => `
          <button class="option ${selected.includes(option) ? "selected" : ""}" type="button" data-index="${optionIndex}" aria-pressed="${selected.includes(option) ? "true" : "false"}">
            ${escapeHtml(option)}
          </button>
        `).join("")}
      </div>
      <div class="multi-actions fixed-action-bar">
        <div class="selection-count" id="selection-count">${selected.length ? `${selected.length} selecionada(s)` : "Selecione uma ou mais opções"}</div>
        <button class="button button-primary" id="multi-continue" type="button" ${selected.length ? "" : "disabled"}>Continuar</button>
      </div>
    `;
  }

  return `
    <div class="options" role="radiogroup" aria-label="${escapeHtml(question.title)}">
      ${question.options.map((option, optionIndex) => {
        const label = typeof option === "string" ? option : option.label;
        return `
          <button class="option" type="button" data-index="${optionIndex}">
            ${escapeHtml(label)}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function bindQuestion(question) {
  if (question.type === "short" || question.type === "long") {
    document.querySelector("#text-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const value = String(new FormData(event.currentTarget).get("answer") || "").trim();
      if (!value) {
        document.querySelector("#form-error").textContent = "Preencha sua resposta para continuar.";
        return;
      }
      answerQuestion(question, value);
    });
    return;
  }

  if (question.type === "multi") {
    document.querySelectorAll(".option").forEach((button) => {
      button.addEventListener("click", () => toggleMultiOption(question, Number(button.dataset.index), button));
    });
    document.querySelector("#multi-continue").addEventListener("click", () => {
      const selected = Array.isArray(state.answers[question.id]) ? state.answers[question.id] : [];
      if (selected.length) answerQuestion(question, selected);
    });
    return;
  }

  document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
      const option = question.options[Number(button.dataset.index)];
      const value = typeof option === "string" ? option : option.label;
      document.querySelectorAll(".option").forEach((item) => item.disabled = true);
      button.classList.add("selected");
      if (option.segment) state.segment = option.segment;
      window.setTimeout(() => answerQuestion(question, value), 220);
    });
  });
}

function toggleMultiOption(question, optionIndex, button) {
  const value = question.options[optionIndex];
  const selected = Array.isArray(state.answers[question.id]) ? [...state.answers[question.id]] : [];
  const existingIndex = selected.indexOf(value);
  if (existingIndex >= 0) selected.splice(existingIndex, 1);
  else selected.push(value);

  state.answers[question.id] = selected;
  button.classList.toggle("selected", selected.includes(value));
  button.setAttribute("aria-pressed", selected.includes(value) ? "true" : "false");
  document.querySelector("#selection-count").textContent = selected.length ? `${selected.length} selecionada(s)` : "Selecione uma ou mais opções";
  document.querySelector("#multi-continue").disabled = selected.length === 0;
  saveState();
}

function answerQuestion(question, value) {
  state.answers[question.id] = value;
  if (question.id === "motivo_entrada_mentoria") {
    const chosen = question.options.find((option) => option.label === value);
    if (chosen?.segment) state.segment = chosen.segment;
  }

  trackEvent("raioxpesquisa_answer", { question: question.id, segment: getSegmentLabel() });

  const nextId = getNextQuestionId(question.id);
  if (!nextId) {
    state.screen = "loading";
    saveState();
    render();
    return;
  }

  state.currentQuestionId = nextId;
  state.screen = "question";
  saveState();
  render();
}

function getNextQuestionId(currentId) {
  const visible = getVisibleQuestions();
  const index = visible.findIndex((question) => question.id === currentId);
  return visible[index + 1]?.id || "";
}

function renderLoading() {
  root.innerHTML = panel(`
    <div class="loading">
      <div class="loading-ring" aria-hidden="true"></div>
      <h2>Enviando suas respostas...</h2>
      <p>Estamos registrando sua pesquisa na planilha da Mentoria Raio-X.</p>
    </div>
  `);

  sendSurveyEvent().finally(() => {
    state.screen = "final";
    state.submitted = true;
    saveState();
    trackEvent("raioxpesquisa_completed", { segment: getSegmentLabel() });
    window.setTimeout(render, 400);
  });
}

function renderFinal() {
  root.innerHTML = panel(`
    <div class="final-card">
      <span class="success-mark">✓</span>
      <span class="eyebrow">Respostas enviadas</span>
      <h1>Obrigado por compartilhar sua história.</h1>
      <p class="lead">Suas respostas foram enviadas com sucesso.</p>
      <p class="lead">Elas vão nos ajudar a compreender melhor a turma e construir uma experiência cada vez mais alinhada aos seus objetivos dentro da Mentoria Raio-X.</p>
    </div>
  `);
}

async function sendSurveyEvent() {
  if (!PESQUISA_CONFIG.leadWebhookUrl || state.submitted) return;
  const payload = buildSheetPayload();

  await fetch(PESQUISA_CONFIG.leadWebhookUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  }).catch((error) => console.warn("Pesquisa webhook failed", error));
}

function buildSheetPayload() {
  const submittedAt = buildLeadDateFields();
  const utms = state.utms || {};
  const answers = FIELD_IDS.reduce((fields, id) => {
    fields[id] = answerText(id);
    return fields;
  }, {});

  return {
    event: "pesquisa_completed",
    source: PESQUISA_CONFIG.source,
    spreadsheet_id: PESQUISA_CONFIG.spreadsheetId,
    spreadsheet_url: `https://docs.google.com/spreadsheets/d/${PESQUISA_CONFIG.spreadsheetId}/edit`,
    sheet_name: PESQUISA_CONFIG.sheetTabName,
    sheet_tab: PESQUISA_CONFIG.sheetTabName,
    aba: PESQUISA_CONFIG.sheetTabName,
    ...submittedAt,
    page_url: window.location.href,
    nome: answerText("nome"),
    lead_key: answerText("nome"),
    "Segmento do público": getSegmentLabel(),
    segmento_do_publico: getSegmentLabel(),
    ...answers,
    answers_json: JSON.stringify(state.answers),
    utm_source: utms.utm_source || "",
    utm_medium: utms.utm_medium || "",
    utm_campaign: utms.utm_campaign || "",
    utm_content: utms.utm_content || "",
    utm_term: utms.utm_term || "",
    fbclid: utms.fbclid || "",
    gclid: utms.gclid || "",
    src: utms.src || "",
    sck: utms.sck || ""
  };
}

function answerValue(questionId) {
  const value = state.answers[questionId];
  return Array.isArray(value) ? value.join(", ") : value || "";
}

function answerText(questionId) {
  const value = state.answers[questionId];
  return Array.isArray(value) ? value.join(" | ") : value || "";
}

function getSegmentLabel() {
  return SEGMENTS[state.segment] || "";
}

function buildLeadDateFields(date = new Date()) {
  const timeZone = "America/Sao_Paulo";
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date).reduce((fields, part) => {
    if (part.type !== "literal") fields[part.type] = part.value;
    return fields;
  }, {});

  const dateBR = `${parts.day}/${parts.month}/${parts.year}`;
  const timeBR = `${parts.hour}:${parts.minute}:${parts.second}`;

  return {
    timestamp: date.toISOString(),
    data_preenchimento: dateBR,
    hora_preenchimento: timeBR,
    data_hora_preenchimento: `${dateBR} ${timeBR}`,
    data_iso_local: `${parts.year}-${parts.month}-${parts.day} ${timeBR}`,
    timestamp_ms: date.getTime(),
    timezone: timeZone
  };
}

function trackEvent(eventName, payload = {}) {
  const data = { event: eventName, source: PESQUISA_CONFIG.source, ...payload };
  if (window.dataLayer) window.dataLayer.push(data);
  if (typeof window.fbq === "function") window.fbq("trackCustom", eventName, data);
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") console.log(eventName, data);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

trackEvent("raioxpesquisa_view");
render();
