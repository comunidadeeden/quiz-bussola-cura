const CONFIG = {
  MEDIA_URL: "",
  MEDIA_TYPE: "video",
  MEDIA_POSTER: "",
  LIVE_YOUTUBE_URL: "https://youtube.com/live/ETuBJygCWp8?feature=share",
  AULAO_DATA: "Quinta-feira, 25/06",
  AULAO_HORA: "20h30",
  REVEAL_BTN_DELAY_SECONDS: 10
};

const QUESTIONS = [
  {
    text: "Você já tratou isso (médico, remédio, terapia) e mesmo assim ele volta?",
    options: [
      ["Sempre volta", 3],
      ["Volta às vezes", 2],
      ["Melhora mas nunca cura de verdade", 2],
      ["Nunca tratei de verdade", 1]
    ]
  },
  {
    text: "Quando esse sintoma aparece ou piora, costuma ter a ver com algum momento difícil da sua vida?",
    options: [
      ["Sim, sempre em fases de estresse ou conflito", 3],
      ["Já reparei nisso algumas vezes", 2],
      ["Nunca tinha pensado nisso", 1],
      ["Aparece \"do nada\"", 1]
    ]
  },
  {
    text: "Você já fez exames que deram \"tudo normal\", mas sabe que tem algo errado?",
    options: [
      ["É exatamente isso", 3],
      ["Já aconteceu comigo", 2],
      ["Os exames sempre acham algo", 1],
      ["Nunca investiguei a fundo", 1]
    ]
  },
  {
    text: "Você costuma engolir o que sente pra não incomodar ninguém?",
    options: [
      ["O tempo todo", 3],
      ["Bastante", 2],
      ["Às vezes", 1],
      ["Quase nunca", 0]
    ]
  },
  {
    text: "Tem alguma fase da sua vida (uma perda, um abandono, uma decepção, um trauma) que você sente que ficou mal resolvida?",
    options: [
      ["Sim, e ainda dói", 3],
      ["Sim, mas acho que já superei", 2],
      ["Talvez", 1],
      ["Não que eu lembre", 0]
    ]
  },
  {
    text: "No fundo, você sente que esse sintoma está tentando te dizer alguma coisa?",
    options: [
      ["Sim, sempre senti isso", 3],
      ["Às vezes penso nisso", 2],
      ["Nunca pensei assim", 1],
      ["Acho que não", 0]
    ]
  }
];

const RESULTS = {
  high: {
    title: "Seu corpo está gritando",
    text: "Tudo que você respondeu aponta para uma direção importante: vale olhar com cuidado para a sua história emocional. Não é coincidência, azar ou frescura. Pode haver algo que ficou guardado e hoje pede espaço para ser compreendido."
  },
  medium: {
    title: "Tem mais aí do que você imagina",
    text: "Você já desconfia. Pelas suas respostas, dá para perceber que uma parte sua sente que isso vai além do físico. O próximo passo é entender o que pode estar por trás dessa repetição."
  },
  low: {
    title: "E se você estiver olhando para o lugar errado?",
    text: "Talvez você ainda não veja a conexão. Mas suas respostas mostram que existe um padrão que merece atenção. Vale investigar com mais calma o que estava acontecendo na sua vida quando isso começou ou voltou."
  }
};

const LETTER_LINES = [
  "Hoje eu tomo uma decisão.",
  "Eu decido parar de sobreviver e começar a viver.",
  "Durante muito tempo eu me adaptei à dor.",
  "Eu me adaptei ao medo.",
  "Eu me adaptei à rejeição.",
  "Eu me adaptei ao abandono.",
  "Eu me adaptei às decepções.",
  "Eu me adaptei às perdas.",
  "Eu me adaptei às situações que me obrigaram a ser forte quando tudo o que eu queria era ser acolhido.",
  "Mas hoje eu percebo que muitas dessas adaptações se transformaram em prisões.",
  "E eu decido me libertar.",
  "Eu me liberto da necessidade de me proteger o tempo todo.",
  "Eu me liberto da necessidade de estar sempre em alerta.",
  "Eu me liberto da necessidade de controlar tudo para me sentir seguro.",
  "Eu me liberto da necessidade de agradar para ser amado.",
  "Eu me liberto da necessidade de me calar para evitar conflitos.",
  "Eu me liberto da necessidade de suportar aquilo que está me destruindo.",
  "Eu me liberto da necessidade de engolir sentimentos que precisavam ser expressos.",
  "Eu me liberto da necessidade de esconder minhas dores atrás de sorrisos.",
  "Eu me liberto da necessidade de carregar pesos que nunca foram meus.",
  "Eu reconheço que por trás dos meus sintomas existiam histórias.",
  "Por trás dos meus medos existiam feridas.",
  "Por trás dos meus bloqueios existiam tentativas de defesa.",
  "Por trás dos meus padrões existiam mecanismos de sobrevivência.",
  "E hoje eu agradeço tudo aquilo que me ajudou a chegar até aqui.",
  "Mas também reconheço que não preciso mais continuar vivendo da mesma forma.",
  "Hoje eu escolho algo novo.",
  "Eu escolho olhar para mim.",
  "Eu escolho investigar minha história.",
  "Eu escolho compreender aquilo que durante anos ficou escondido.",
  "Eu escolho enxergar aquilo que eu evitava enxergar.",
  "Eu escolho enfrentar aquilo que eu evitava enfrentar.",
  "Eu escolho curar aquilo que eu apenas tentava suportar.",
  "Eu escolho abandonar aquilo que apenas me mantinha sobrevivendo.",
  "Eu escolho construir uma vida onde não seja necessário adoecer para pedir ajuda.",
  "Onde não seja necessário sofrer para receber atenção.",
  "Onde não seja necessário carregar tudo sozinho.",
  "Neste momento eu assumo um compromisso comigo.",
  "Eu decido participar deste processo de transformação.",
  "Eu decido participar deste aulão.",
  "Eu decido descobrir as raízes que sustentam os ciclos que se repetem na minha vida.",
  "Eu decido descobrir aquilo que está por trás dos sintomas, dos bloqueios, dos medos e das dores que me acompanham.",
  "Eu decido parar de lutar apenas contra os efeitos e começar a compreender as causas.",
  "Eu decido mudar.",
  "Eu decido crescer.",
  "Eu decido me libertar.",
  "Eu decido viver.",
  "E enquanto leio estas palavras, autorizo que algo novo comece a se mover dentro de mim.",
  "Porque a minha transformação não começa quando eu encontrar todas as respostas.",
  "Ela começa agora.",
  "No instante em que eu decido não permanecer a mesma pessoa.",
  "E hoje eu tomo essa decisão."
];

const root = document.querySelector("#quiz-root");
const progressLabel = document.querySelector("#progress-label");
let mediaTimer;
let state = createState();

function createState() {
  return { screen: "intro", questionIndex: 0, score: 0, mediaReady: false, mediaDelayStarted: false, committed: false };
}

function render() {
  clearTimeout(mediaTimer);
  window.scrollTo({ top: 0, behavior: "smooth" });
  updateProgress();

  if (state.screen === "intro") return renderIntro();
  if (state.screen === "question") return renderQuestion();
  if (state.screen === "calculating") return renderCalculating();
  if (state.screen === "result") return renderResult();
  if (state.screen === "media") return renderMedia();
  if (state.screen === "letter") return renderLetter();
  if (state.screen === "commitment") return renderCommitment();
  if (state.screen === "final") return renderFinal();
}

function updateProgress() {
  const active = state.screen === "question";
  progressLabel.textContent = active ? `Pergunta ${state.questionIndex + 1} de ${QUESTIONS.length}` : "";
}

function panel(content, className = "") {
  return `<section class="screen panel ${className}"><div class="panel-inner">${content}</div></section>`;
}

function renderIntro() {
  root.innerHTML = panel(`
    <div class="intro">
      <span class="eyebrow">Quiz pré-aulão</span>
      <h1>O que seu corpo está tentando te dizer?</h1>
      <div class="intro-copy">
        <p>Pensa numa dor, sintoma ou doença que te incomoda e não vai embora de verdade. Pode ser física ou emocional. Guarda ela na cabeça.</p>
        <p>São só 6 perguntas. Menos de 2 minutos. No final, eu tenho algo pra te entregar.</p>
      </div>
      <button class="button button-primary" id="start-quiz">Começar</button>
    </div>
  `);
  document.querySelector("#start-quiz").addEventListener("click", () => { state.screen = "question"; render(); });
}

function renderQuestion() {
  const question = QUESTIONS[state.questionIndex];
  const progress = ((state.questionIndex + 1) / QUESTIONS.length) * 100;
  root.innerHTML = panel(`
    <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${progress}%"></div></div>
    <div class="question-number">Pergunta ${state.questionIndex + 1} de ${QUESTIONS.length}</div>
    <h2 class="question-title">${question.text}</h2>
    <div class="options" role="radiogroup" aria-label="Alternativas da pergunta ${state.questionIndex + 1}">
      ${question.options.map(([text, points], index) => `<button class="option" type="button" data-points="${points}" aria-label="Alternativa ${index + 1}: ${text}">${text}</button>`).join("")}
    </div>
  `);

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach((item) => item.disabled = true);
      option.classList.add("selected");
      state.score += Number(option.dataset.points);
      window.setTimeout(() => {
        state.questionIndex += 1;
        state.screen = state.questionIndex === QUESTIONS.length ? "calculating" : "question";
        render();
      }, 260);
    });
  });
}

function renderCalculating() {
  root.innerHTML = panel(`
    <div class="loading">
      <div class="loading-ring" aria-hidden="true"></div>
      <h2>Analisando suas respostas...</h2>
      <p>Organizando os sinais que apareceram no seu caminho.</p>
    </div>
  `);
  window.setTimeout(() => { state.screen = "result"; render(); }, 950);
}

function getResult() {
  if (state.score >= 13) return RESULTS.high;
  if (state.score >= 7) return RESULTS.medium;
  return RESULTS.low;
}

function renderResult() {
  const result = getResult();
  root.innerHTML = panel(`
    <div class="result-panel">
      <span class="result-verdict">Seu resultado</span>
      <h1>${result.title}</h1>
      <p class="result-copy">${result.text}</p>
      <p class="transition-note">Existe um caminho para investigar com mais clareza o que o seu corpo pode estar tentando comunicar. Antes de continuar, o Bruno gravou um recado para você. Assiste até o final.</p>
      <button class="button button-primary" id="open-media">Ver recado do Bruno</button>
    </div>
  `);
  document.querySelector("#open-media").addEventListener("click", () => { state.screen = "media"; render(); });
}

function isEmbed(url) {
  return /youtube\.com|youtu\.be|vimeo\.com/.test(url);
}

function mediaMarkup() {
  if (!CONFIG.MEDIA_URL) {
    return `<div class="media-placeholder"><strong>Recado do Bruno</strong><span>O vídeo será inserido aqui antes do envio desta página.</span></div>`;
  }
  if (CONFIG.MEDIA_TYPE === "audio") {
    return `<div class="audio-wrap">${CONFIG.MEDIA_POSTER ? `<img class="media-poster" src="${CONFIG.MEDIA_POSTER}" alt="Bruno Simplício">` : ""}<audio id="bruno-media" controls preload="metadata" src="${CONFIG.MEDIA_URL}"></audio></div>`;
  }
  if (isEmbed(CONFIG.MEDIA_URL)) {
    return `<iframe src="${CONFIG.MEDIA_URL}" title="Recado do Bruno" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  }
  return `<video id="bruno-media" controls playsinline preload="metadata" ${CONFIG.MEDIA_POSTER ? `poster="${CONFIG.MEDIA_POSTER}"` : ""} src="${CONFIG.MEDIA_URL}"></video>`;
}

function startMediaDelay() {
  if (state.mediaReady || state.mediaDelayStarted) return;
  state.mediaDelayStarted = true;
  mediaTimer = window.setTimeout(() => { state.mediaReady = true; renderMedia(); }, CONFIG.REVEAL_BTN_DELAY_SECONDS * 1000);
}

function renderMedia() {
  root.innerHTML = panel(`
    <div class="media-panel">
      <span class="eyebrow">Antes da carta</span>
      <h2>Um recado antes da sua carta</h2>
      <div class="media-frame">${mediaMarkup()}</div>
      <p class="media-help">Assiste com atenção. O Bruno vai te explicar como usar o que vem a seguir.</p>
      <button class="button button-primary media-next ${state.mediaReady ? "visible" : ""}" id="open-letter">Recebi minha carta</button>
    </div>
  `);

  const player = document.querySelector("#bruno-media");
  if (player) player.addEventListener("play", startMediaDelay, { once: true });
  if (!CONFIG.MEDIA_URL || isEmbed(CONFIG.MEDIA_URL)) startMediaDelay();
  document.querySelector("#open-letter").addEventListener("click", () => { state.screen = "letter"; render(); });
}

function renderLetter() {
  root.innerHTML = panel(`
    <div class="letter-panel">
      <span class="eyebrow">Leia para si</span>
      <h2>Sua Carta de Liberação</h2>
      <p class="letter-instruction">Leia em voz alta. Sozinha. Sem pressa. Deixe a sua própria voz dizer cada linha.</p>
      <article class="letter">
        ${LETTER_LINES.map((line) => `<p class="${line === "Eu decido participar deste aulão." ? "commitment-line" : ""}">${line}</p>`).join("")}
      </article>
      <button class="button button-primary" id="open-commitment">Eu li minha carta</button>
    </div>
  `);
  document.querySelector("#open-commitment").addEventListener("click", () => { state.screen = "commitment"; render(); });
}

function renderCommitment() {
  root.innerHTML = panel(`
    <div class="commitment-panel">
      <span class="eyebrow">Seu compromisso</span>
      <h2>Você acabou de tomar uma decisão.</h2>
      <p>Na sua carta você leu: “eu decido participar deste aulão”. Agora é hora de honrar essa decisão.</p>
      <p>O aulão <strong>A Origem da Doença</strong> acontece:</p>
      <div class="date-card">
        <strong>${CONFIG.AULAO_DATA}</strong>
        <span>${CONFIG.AULAO_HORA}</span>
        <span>Ao vivo, online</span>
      </div>
      <button class="button button-primary decision-button" id="confirm-presence">Continuar para ativar meu lembrete</button>
    </div>
  `);
  document.querySelector("#confirm-presence").addEventListener("click", () => { state.committed = true; state.screen = "final"; render(); });
}

function renderFinal() {
  root.innerHTML = panel(`
    <div class="final-panel">
      <span class="eyebrow">Último passo</span>
      <h1>Ative seu lembrete.</h1>
      <p>Você deu o primeiro passo. Agora abre a transmissão no YouTube e toca em <strong>“Definir lembrete”</strong>. Assim você recebe um aviso antes do aulão.</p>
      <div class="date-card">
        <strong>${CONFIG.AULAO_DATA}</strong>
        <span>${CONFIG.AULAO_HORA}</span>
        <span>Ao vivo, no YouTube</span>
      </div>
      <a class="button button-primary" href="${CONFIG.LIVE_YOUTUBE_URL}" target="_blank" rel="noopener noreferrer">Abrir live e ativar lembrete</a>
      <p class="reminder-note">Ao abrir a live, toque em “Definir lembrete”. É essa pequena ação que confirma seu compromisso.</p>
    </div>
  `);
}

render();
