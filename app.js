// ── Sport Definitions ──────────────────────────────────────────────────────
const SPORTS = {
  basketball: {
    label: "Basketball",
    periods: ["Q1","Q2","Q3","Q4"],
    periodTime: 600,
    players: [
      {id:1,  name:"PG",  num:"1",  team:"A", x:50, y:30},
      {id:2,  name:"SG",  num:"2",  team:"A", x:25, y:45},
      {id:3,  name:"SF",  num:"3",  team:"A", x:75, y:45},
      {id:4,  name:"PF",  num:"4",  team:"A", x:35, y:65},
      {id:5,  name:"C",   num:"5",  team:"A", x:65, y:65},
      {id:6,  name:"PG",  num:"6",  team:"B", x:50, y:72},
      {id:7,  name:"SG",  num:"7",  team:"B", x:25, y:57},
      {id:8,  name:"SF",  num:"8",  team:"B", x:75, y:57},
      {id:9,  name:"PF",  num:"9",  team:"B", x:35, y:80},
      {id:10, name:"C",   num:"10", team:"B", x:65, y:80}
    ],
    stats: ["PTS","REB","AST","STL","BLK","TO","FG%"],
    statMax: {PTS:30,REB:15,AST:15,STL:5,BLK:5,TO:8,"FG%":100},
    statColors: {PTS:"#378ADD",REB:"#1D9E75",AST:"#D85A30",STL:"#639922",BLK:"#B7003D",TO:"#BA7517","FG%":"#533AB7"},
    events: ["Goal","3-Pointer","Free Throw","Foul","Timeout","Sub","Rebound","Assist","Block","Steal"],
    eventEffects: {
      "Goal":       { scoreDelta: 2, stats: { PTS: 2 } },
      "3-Pointer":  { scoreDelta: 3, stats: { PTS: 3 } },
      "Free Throw": { scoreDelta: 1, stats: { PTS: 1 } },
      "Rebound":    { stats: { REB: 1 } },
      "Assist":     { stats: { AST: 1 } },
      "Block":      { stats: { BLK: 1 } },
      "Steal":      { stats: { STL: 1 } },
      "Foul":       { stats: { TO: 1 } }
    }
  },
  tennis: {
    label: "Tennis",
    periods: ["Set 1","Set 2","Set 3","Set 4","Set 5"],
    periodTime: 0,
    players: [
      {id:1, name:"P1 Net",  num:"1", team:"A", x:50, y:25},
      {id:2, name:"P1 Base", num:"2", team:"A", x:50, y:38},
      {id:3, name:"P2 Net",  num:"3", team:"B", x:50, y:62},
      {id:4, name:"P2 Base", num:"4", team:"B", x:50, y:75}
    ],
    stats: ["Aces","Dbl Faults","1st Srv%","Winners","Unforced Err","Break Pts","Net Points"],
    statMax: {Aces:20,"Dbl Faults":10,"1st Srv%":100,Winners:40,"Unforced Err":30,"Break Pts":10,"Net Points":20},
    statColors: {Aces:"#378ADD","Dbl Faults":"#D85A30","1st Srv%":"#1D9E75",Winners:"#639922","Unforced Err":"#BA7517","Break Pts":"#533AB7","Net Points":"#1D9E75"},
    events: ["Ace","Double Fault","Winner","Unforced Error","Break Point","Game","Set","Let"],
    eventEffects: {
      "Ace":            { stats: { Aces: 1 } },
      "Double Fault":   { stats: { "Dbl Faults": 1 } },
      "Winner":         { stats: { Winners: 1 } },
      "Unforced Error": { stats: { "Unforced Err": 1 } },
      "Break Point":    { stats: { "Break Pts": 1 } },
      "Game":           { scoreDelta: 1 },
      "Set":            { scoreDelta: 1 }
    }
  },
  pingpong: {
    label: "Ping Pong",
    periods: ["G1","G2","G3","G4","G5","G6","G7"],
    periodTime: 0,
    players: [
      {id:1, name:"Player 1", num:"1", team:"A", x:50, y:28},
      {id:2, name:"Player 2", num:"2", team:"B", x:50, y:72}
    ],
    stats: ["Pts Won","Smashes","Spin Pts","Rallies","Serve Err","Edges","Net Clips"],
    statMax:{"Pts Won":21,Smashes:15,"Spin Pts":10,Rallies:20,"Serve Err":8,Edges:5,"Net Clips":5},
    statColors:{"Pts Won":"#378ADD",Smashes:"#D85A30","Spin Pts":"#533AB7",Rallies:"#1D9E75","Serve Err":"#BA7517",Edges:"#639922","Net Clips":"#B7003D"},
    events: ["Point","Smash","Serve Error","Let","Edge Ball","Net Ball","Game Point"],
    eventEffects: {
      "Point":      { scoreDelta: 1, stats: { "Pts Won": 1 } },
      "Smash":      { scoreDelta: 1, stats: { Smashes: 1, "Pts Won": 1 } },
      "Serve Error":{ stats: { "Serve Err": 1 } },
      "Edge Ball":  { scoreDelta: 1, stats: { Edges: 1, "Pts Won": 1 } },
      "Net Ball":   { stats: { "Net Clips": 1 } },
      "Game Point": { scoreDelta: 1, stats: { "Pts Won": 1 } }
    }
  },
  hockey: {
    label: "Ice Hockey",
    periods: ["P1","P2","P3","OT"],
    periodTime: 1200,
    players: [
      {id:1,  name:"GK",  num:"1",  team:"A", x:50, y:12},
      {id:2,  name:"LD",  num:"2",  team:"A", x:30, y:28},
      {id:3,  name:"RD",  num:"3",  team:"A", x:70, y:28},
      {id:4,  name:"LW",  num:"4",  team:"A", x:20, y:44},
      {id:5,  name:"C",   num:"5",  team:"A", x:50, y:42},
      {id:6,  name:"RW",  num:"6",  team:"A", x:80, y:44},
      {id:7,  name:"GK",  num:"7",  team:"B", x:50, y:88},
      {id:8,  name:"LD",  num:"8",  team:"B", x:30, y:72},
      {id:9,  name:"RD",  num:"9",  team:"B", x:70, y:72},
      {id:10, name:"LW",  num:"10", team:"B", x:20, y:56},
      {id:11, name:"C",   num:"11", team:"B", x:50, y:58},
      {id:12, name:"RW",  num:"12", team:"B", x:80, y:56}
    ],
    stats: ["Goals","Assists","Shots","Saves","PIM","Hits","FO%"],
    statMax:{Goals:5,Assists:5,Shots:35,Saves:35,PIM:10,Hits:20,"FO%":100},
    statColors:{Goals:"#378ADD",Assists:"#1D9E75",Shots:"#D85A30",Saves:"#639922",PIM:"#D85A30",Hits:"#533AB7","FO%":"#BA7517"},
    events: ["Goal","Penalty","Save","Shot on Goal","Icing","Offside","Power Play","Power Play Goal","Penalty Shot","Fight"],
    eventEffects: {
      "Goal":            { scoreDelta: 1, stats: { Goals: 1 } },
      "Power Play Goal": { scoreDelta: 1, stats: { Goals: 1 } },
      "Penalty":         { stats: { PIM: 2 } },
      "Save":            { stats: { Saves: 1 } },
      "Shot on Goal":    { stats: { Shots: 1 } },
      "Penalty Shot":    { stats: { Shots: 1 } },
      "Fight":           { stats: { PIM: 5 } }
    }
  }
};

// ── State ─────────────────────────────────────────────────────────────────
const state = {
  sport: "basketball",
  score: [0, 0],
  teamNames: ["Home", "Away"],
  period: 0,
  timerRunning: false,
  timerVal: 600,
  timerInterval: null,
  players: [],
  statsA: {},
  statsB: {},
  events: [],
  selectedPlayer: null,
  statTab: "A",
  nextPlayerId: 100
};

// ── Color helpers ─────────────────────────────────────────────────────────
const TEAM_A_COLOR = "#378ADD";
const TEAM_B_COLOR = "#D85A30";
function teamColor(team) { return team === "A" ? TEAM_A_COLOR : TEAM_B_COLOR; }

// ── Init ──────────────────────────────────────────────────────────────────
function initSport(sport) {
  const s = SPORTS[sport];
  state.sport = sport;
  state.score = [0, 0];
  state.period = 0;
  state.timerVal = s.periodTime;
  state.timerRunning = false;
  clearInterval(state.timerInterval);
  state.players = s.players.map(p => ({ ...p }));
  state.statsA = {};
  state.statsB = {};
  s.stats.forEach(st => { state.statsA[st] = 0; state.statsB[st] = 0; });
  state.events = [];
  state.selectedPlayer = null;
  state.statTab = "A";
  state.nextPlayerId = 100;
  renderAll();
}

function renderAll() {
  renderScoreboard();
  renderCourt();
  renderStats();
  renderEvents();
  renderPlayerList();
}

// ── Scoreboard ────────────────────────────────────────────────────────────
function renderScoreboard() {
  const s = SPORTS[state.sport];
  const el = document.getElementById("panel-scoreboard");
  if (!el) return;

  const t = state.timerVal;
  const mm = String(Math.floor(t / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  const hasTimer = s.periodTime > 0;

  el.innerHTML = `
    <div class="panel-title">Scoreboard</div>
    <div class="scoreboard">
      <div class="team-score">
        <div class="team-name">
          <input id="tn0" value="${state.teamNames[0]}" onchange="state.teamNames[0]=this.value;syncTeamNames()" />
        </div>
        <div class="score-val" id="sc0">${state.score[0]}</div>
        <div class="score-controls">
          <button class="score-btn" onclick="chScore(0,1)" title="Add point">+</button>
          <button class="score-btn" onclick="chScore(0,-1)" title="Remove point">−</button>
        </div>
      </div>

      <div>
        <div class="score-divider">:</div>
        <div class="period-info">
          Period <span id="periodLabel">${s.periods[state.period]}</span>
        </div>
        <div class="period-nav">
          <button class="btn-sm" onclick="chPeriod(-1)">◀</button>
          <button class="btn-sm" onclick="chPeriod(1)">▶</button>
        </div>
        ${hasTimer ? `
          <div class="timer-display" id="timerDisplay">${mm}:${ss}</div>
          <div class="timer-controls">
            <button class="btn-sm primary" id="timerBtn" onclick="toggleTimer()">${state.timerRunning ? "Pause" : "Start"}</button>
            <button class="btn-sm" onclick="resetTimer()">Reset</button>
          </div>
        ` : ""}
      </div>

      <div class="team-score">
        <div class="team-name">
          <input id="tn1" value="${state.teamNames[1]}" onchange="state.teamNames[1]=this.value;syncTeamNames()" />
        </div>
        <div class="score-val" id="sc1">${state.score[1]}</div>
        <div class="score-controls">
          <button class="score-btn" onclick="chScore(1,1)" title="Add point">+</button>
          <button class="score-btn" onclick="chScore(1,-1)" title="Remove point">−</button>
        </div>
      </div>
    </div>
  `;
}

function chScore(team, delta) {
  state.score[team] = Math.max(0, state.score[team] + delta);
  const el = document.getElementById("sc" + team);
  if (el) el.textContent = state.score[team];
  if (delta > 0) logEventInternal("Goal / Point", team === 0 ? TEAM_A_COLOR : TEAM_B_COLOR, state.teamNames[team]);
}

function chPeriod(d) {
  const s = SPORTS[state.sport];
  state.period = Math.max(0, Math.min(s.periods.length - 1, state.period + d));
  state.timerVal = s.periodTime;
  clearInterval(state.timerInterval);
  state.timerRunning = false;
  renderScoreboard();
}

function toggleTimer() {
  if (state.timerRunning) {
    clearInterval(state.timerInterval);
    state.timerRunning = false;
    const btn = document.getElementById("timerBtn");
    if (btn) btn.textContent = "Start";
  } else {
    state.timerRunning = true;
    const btn = document.getElementById("timerBtn");
    if (btn) btn.textContent = "Pause";
    state.timerInterval = setInterval(() => {
      if (state.timerVal > 0) {
        state.timerVal--;
        const t = state.timerVal;
        const mm = String(Math.floor(t / 60)).padStart(2, "0");
        const ss = String(t % 60).padStart(2, "0");
        const td = document.getElementById("timerDisplay");
        if (td) td.textContent = `${mm}:${ss}`;
      } else {
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        renderScoreboard();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(state.timerInterval);
  state.timerRunning = false;
  state.timerVal = SPORTS[state.sport].periodTime;
  renderScoreboard();
}

function syncTeamNames() {
  renderEvents();
  renderPlayerList();
}

// ── Court ─────────────────────────────────────────────────────────────────
function renderCourt() {
  const el = document.getElementById("panel-court");
  if (!el) return;
  const sp = state.sport;
  let svg = "";
  if (sp === "basketball") svg = drawBasketball();
  else if (sp === "tennis") svg = drawTennis();
  else if (sp === "pingpong") svg = drawPingPong();
  else if (sp === "hockey") svg = drawHockey();
  el.innerHTML = `<div class="panel-title">Court / Field — drag players to reposition</div>
    <div class="court-wrap" id="courtWrap">${svg}</div>`;
  setupDrag();
}

function playerDots() {
  return state.players.map(p => {
    const cx = p.x * 2;
    const cy = p.y * 2.2;
    const col = teamColor(p.team);
    return `<g class="player-dot" data-id="${p.id}" transform="translate(${cx},${cy})">
      <circle r="10" fill="${col}" opacity="0.92"/>
      <text text-anchor="middle" dy="4" font-size="9" font-weight="600" fill="white" font-family="system-ui,sans-serif">${p.num}</text>
    </g>`;
  }).join("");
}

function drawBasketball() {
  return `<svg class="court-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="220" fill="#C8860A" rx="6"/>
    <rect x="10" y="10" width="180" height="200" fill="none" stroke="white" stroke-width="1.5" opacity="0.75"/>
    <line x1="10" y1="110" x2="190" y2="110" stroke="white" stroke-width="1" opacity="0.7"/>
    <circle cx="100" cy="110" r="20" fill="none" stroke="white" stroke-width="1" opacity="0.7"/>
    <rect x="55" y="10" width="90" height="52" fill="none" stroke="white" stroke-width="1" opacity="0.6"/>
    <rect x="55" y="158" width="90" height="52" fill="none" stroke="white" stroke-width="1" opacity="0.6"/>
    <path d="M72 10 A28 28 0 0 1 128 10" fill="none" stroke="white" stroke-width="1" opacity="0.55"/>
    <path d="M72 210 A28 28 0 0 0 128 210" fill="none" stroke="white" stroke-width="1" opacity="0.55"/>
    <circle cx="100" cy="24" r="4" fill="none" stroke="white" stroke-width="1" opacity="0.8"/>
    <circle cx="100" cy="196" r="4" fill="none" stroke="white" stroke-width="1" opacity="0.8"/>
    <circle cx="100" cy="110" r="2" fill="white" opacity="0.6"/>
    ${playerDots()}
  </svg>`;
}

function drawTennis() {
  return `<svg class="court-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="220" fill="#2C7A4B" rx="6"/>
    <rect x="22" y="10" width="156" height="200" fill="none" stroke="white" stroke-width="1.5" opacity="0.85"/>
    <line x1="22" y1="110" x2="178" y2="110" stroke="white" stroke-width="1.5" opacity="0.9"/>
    <line x1="22" y1="46" x2="178" y2="46" stroke="white" stroke-width="1" opacity="0.7"/>
    <line x1="22" y1="174" x2="178" y2="174" stroke="white" stroke-width="1" opacity="0.7"/>
    <line x1="100" y1="46" x2="100" y2="174" stroke="white" stroke-width="1" opacity="0.7"/>
    <line x1="100" y1="10" x2="100" y2="46" stroke="white" stroke-width="0.5" opacity="0.4"/>
    <line x1="100" y1="174" x2="100" y2="210" stroke="white" stroke-width="0.5" opacity="0.4"/>
    ${playerDots()}
  </svg>`;
}

function drawPingPong() {
  return `<svg class="court-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="220" fill="#2a2a28" rx="6"/>
    <rect x="24" y="30" width="152" height="160" fill="#185FA5" rx="4"/>
    <rect x="24" y="30" width="152" height="160" fill="none" stroke="white" stroke-width="1.5" rx="4" opacity="0.9"/>
    <line x1="24" y1="110" x2="176" y2="110" stroke="white" stroke-width="0.7" opacity="0.6"/>
    <line x1="100" y1="30" x2="100" y2="190" stroke="white" stroke-width="0.7" opacity="0.45"/>
    <rect x="22" y="108" width="156" height="4" fill="white" opacity="0.95" rx="2"/>
    ${playerDots()}
  </svg>`;
}

function drawHockey() {
  return `<svg class="court-svg" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="220" fill="#7ec8e3" rx="6"/>
    <rect x="10" y="10" width="180" height="200" fill="white" rx="22" opacity="0.82"/>
    <rect x="10" y="10" width="180" height="200" fill="none" stroke="#185FA5" stroke-width="2" rx="22"/>
    <line x1="10" y1="110" x2="190" y2="110" stroke="#D85A30" stroke-width="1.5"/>
    <line x1="10" y1="76" x2="190" y2="76" stroke="#185FA5" stroke-width="0.8" opacity="0.55"/>
    <line x1="10" y1="144" x2="190" y2="144" stroke="#185FA5" stroke-width="0.8" opacity="0.55"/>
    <circle cx="100" cy="110" r="14" fill="none" stroke="#D85A30" stroke-width="1.2"/>
    <circle cx="100" cy="110" r="2.5" fill="#D85A30"/>
    <circle cx="56" cy="76" r="2.5" fill="#D85A30"/>
    <circle cx="144" cy="76" r="2.5" fill="#D85A30"/>
    <circle cx="56" cy="144" r="2.5" fill="#D85A30"/>
    <circle cx="144" cy="144" r="2.5" fill="#D85A30"/>
    <rect x="76" y="10" width="48" height="19" fill="none" stroke="#185FA5" stroke-width="1.5"/>
    <rect x="76" y="191" width="48" height="19" fill="none" stroke="#185FA5" stroke-width="1.5"/>
    <rect x="88" y="10" width="24" height="10" fill="none" stroke="#185FA5" stroke-width="1"/>
    <rect x="88" y="200" width="24" height="10" fill="none" stroke="#185FA5" stroke-width="1"/>
    ${playerDots()}
  </svg>`;
}

function setupDrag() {
  const wrap = document.getElementById("courtWrap");
  if (!wrap) return;
  const svg = wrap.querySelector("svg");
  if (!svg) return;
  const VBW = 200, VBH = 220;
  let dragId = null;

  function getPos(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    return {
      sx: (clientX - rect.left) / rect.width * VBW,
      sy: (clientY - rect.top) / rect.height * VBH
    };
  }

  function movePlayer(clientX, clientY) {
    if (!dragId) return;
    const { sx, sy } = getPos(clientX, clientY);
    const p = state.players.find(p => p.id === dragId);
    if (p) {
      p.x = Math.max(5, Math.min(95, sx / 2));
      p.y = Math.max(5, Math.min(95, sy / 2.2));
      const g = svg.querySelector(`[data-id="${dragId}"]`);
      if (g) g.setAttribute("transform", `translate(${sx},${sy})`);
    }
  }

  svg.addEventListener("mousedown", e => {
    const g = e.target.closest(".player-dot");
    if (!g) return;
    dragId = parseInt(g.dataset.id);
    e.preventDefault();
  });
  window.addEventListener("mousemove", e => movePlayer(e.clientX, e.clientY));
  window.addEventListener("mouseup", () => { dragId = null; });

  svg.addEventListener("touchstart", e => {
    const g = e.target.closest(".player-dot");
    if (!g) return;
    dragId = parseInt(g.dataset.id);
    e.preventDefault();
  }, { passive: false });
  svg.addEventListener("touchmove", e => {
    movePlayer(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
  }, { passive: false });
  svg.addEventListener("touchend", () => { dragId = null; });
}

// ── Stats ─────────────────────────────────────────────────────────────────
function renderStats() {
  const el = document.getElementById("panel-stats");
  if (!el) return;
  const s = SPORTS[state.sport];
  const isA = state.statTab === "A";
  const stats = isA ? state.statsA : state.statsB;

  const rows = s.stats.map(st => {
    const val = stats[st] || 0;
    const max = s.statMax[st] || 100;
    const pct = Math.min(100, Math.round(val / max * 100));
    const color = s.statColors[st] || "#378ADD";
    return `<div class="stat-row">
      <span class="stat-label">${st}</span>
      <input class="stat-input" type="number" min="0" max="${max}" value="${val}"
        onchange="setStat('${st}',this.value,this)" />
      <div class="stat-bar-wrap">
        <div class="stat-bar" id="bar_${st.replace(/[^a-z0-9]/gi,'_')}" style="width:${pct}%;background:${color}"></div>
      </div>
    </div>`;
  }).join("");

  el.innerHTML = `
    <div class="panel-title">Team Stats</div>
    <div class="tabs-inner">
      <button class="tab-inner ${isA ? "active" : ""}" onclick="switchStatTab('A')">${state.teamNames[0] || "Home"}</button>
      <button class="tab-inner ${!isA ? "active" : ""}" onclick="switchStatTab('B')">${state.teamNames[1] || "Away"}</button>
    </div>
    <div class="stat-rows">${rows}</div>
  `;
}

function switchStatTab(tab) {
  state.statTab = tab;
  renderStats();
}

function setStat(key, val, inputEl) {
  const v = Math.max(0, parseInt(val) || 0);
  if (inputEl) inputEl.value = v;
  if (state.statTab === "A") state.statsA[key] = v;
  else state.statsB[key] = v;

  const s = SPORTS[state.sport];
  const max = s.statMax[key] || 100;
  const pct = Math.min(100, Math.round(v / max * 100));
  const safeKey = key.replace(/[^a-z0-9]/gi, "_");
  const bar = document.getElementById("bar_" + safeKey);
  if (bar) bar.style.width = pct + "%";
}

// ── Events ────────────────────────────────────────────────────────────────
function applyEventEffects(effects) {
  effects.forEach(e => {
    if (e.kind === "score") {
      state.score[e.teamIdx] = Math.max(0, state.score[e.teamIdx] + e.delta);
    } else if (e.kind === "stat") {
      const statsObj = e.statTeam === "A" ? state.statsA : state.statsB;
      statsObj[e.key] = Math.max(0, (statsObj[e.key] || 0) + e.delta);
    }
  });
}

function renderEvents() {
  const el = document.getElementById("panel-events");
  if (!el) return;
  const s = SPORTS[state.sport];
  const evOpts = s.events.map(e => `<option>${e}</option>`).join("");

  const evList = state.events.length
    ? [...state.events].reverse().map((ev, displayIdx) => {
        const realIdx = state.events.length - 1 - displayIdx;
        return `<div class="event-item">
          <span class="event-time">${ev.time}</span>
          <span class="event-dot" style="background:${ev.color}"></span>
          <span>${ev.type}</span>
          <span class="event-team">${ev.team}</span>
          <button class="event-remove-btn" onclick="removeEvent(${realIdx})" title="Remove event">✕</button>
        </div>`;
      }).join("")
    : `<div style="font-size:12px;color:var(--text-secondary);padding:6px 0">No events logged yet.</div>`;

  el.innerHTML = `
    <div class="panel-title">Event Log</div>
    <div class="event-log">${evList}</div>
    <div class="add-event">
      <select id="evType">${evOpts}</select>
      <select id="evTeam">
        <option>${state.teamNames[0] || "Home"}</option>
        <option>${state.teamNames[1] || "Away"}</option>
      </select>
      <button class="btn-sm primary" onclick="addEvent()">+ Log</button>
    </div>
  `;
}

function addEvent() {
  const type = document.getElementById("evType")?.value;
  const team = document.getElementById("evTeam")?.value;
  if (!type) return;
  const isTeamA = team === (state.teamNames[0] || "Home");
  const color = isTeamA ? TEAM_A_COLOR : TEAM_B_COLOR;
  const statTeam = isTeamA ? "A" : "B";
  const teamIdx = isTeamA ? 0 : 1;

  // Build and apply effects from sport's eventEffects mapping
  const s = SPORTS[state.sport];
  const effectDef = s.eventEffects?.[type];
  const appliedEffects = [];
  if (effectDef) {
    if (effectDef.scoreDelta) {
      appliedEffects.push({ kind: "score", teamIdx, delta: effectDef.scoreDelta });
    }
    if (effectDef.stats) {
      Object.entries(effectDef.stats).forEach(([key, delta]) => {
        appliedEffects.push({ kind: "stat", statTeam, key, delta });
      });
    }
  }
  applyEventEffects(appliedEffects);

  logEventInternal(type, color, team, appliedEffects);

  const hasScore = appliedEffects.some(e => e.kind === "score");
  const hasStat = appliedEffects.some(e => e.kind === "stat");
  renderEvents();
  if (hasScore) renderScoreboard();
  if (hasStat) renderStats();
}

function removeEvent(idx) {
  const ev = state.events[idx];
  if (!ev) return;
  // Reverse the effects that were applied when this event was logged
  if (ev.effects && ev.effects.length) {
    applyEventEffects(ev.effects.map(e => ({ ...e, delta: -e.delta })));
  }
  state.events.splice(idx, 1);
  renderEvents();
  renderScoreboard();
  renderStats();
}

function logEventInternal(type, color, team, effects = []) {
  const s = SPORTS[state.sport];
  let timeStr;
  if (s.periodTime > 0) {
    const t = state.timerVal;
    timeStr = `${String(Math.floor(t / 60)).padStart(2,"0")}:${String(t % 60).padStart(2,"0")}`;
  } else {
    timeStr = s.periods[state.period];
  }
  state.events.push({ type, color, team: team || "", time: timeStr, effects });
  if (state.events.length > 100) state.events.shift();
}

// ── Players ───────────────────────────────────────────────────────────────
function renderPlayerList() {
  const el = document.getElementById("panel-players");
  if (!el) return;

  const teamAPlayers = state.players.filter(p => p.team === "A");
  const teamBPlayers = state.players.filter(p => p.team === "B");

  function renderTeam(players, teamLabel) {
    return players.map(p => {
      const sel = state.selectedPlayer === p.id;
      const col = teamColor(p.team);
      return `<div class="player-item ${sel ? "selected" : ""}" onclick="selectPlayer(${p.id})"
        style="border-left-color:${col}">
        <div class="player-num" style="background:${col}20;color:${col}">${p.num}</div>
        <span class="player-name">${p.name}</span>
      </div>`;
    }).join("");
  }

  el.innerHTML = `
    <div class="panel-title">Players</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div>
        <div style="font-size:11px;font-weight:500;color:${TEAM_A_COLOR};margin-bottom:6px">${state.teamNames[0] || "Home"}</div>
        <div class="player-grid">${renderTeam(teamAPlayers, "A")}</div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:500;color:${TEAM_B_COLOR};margin-bottom:6px">${state.teamNames[1] || "Away"}</div>
        <div class="player-grid">${renderTeam(teamBPlayers, "B")}</div>
      </div>
    </div>
    <div class="add-player-row">
      <input id="newPName" placeholder="Name / Position" maxlength="16" style="flex:1"/>
      <input id="newPNum" placeholder="#" style="width:44px" maxlength="3"/>
      <select id="newPTeam" style="border:0.5px solid var(--border-light);border-radius:6px;padding:5px 8px;font-size:12px;font-family:inherit;background:var(--bg-secondary);color:var(--text-primary)">
        <option value="A">${state.teamNames[0] || "Home"}</option>
        <option value="B">${state.teamNames[1] || "Away"}</option>
      </select>
      <button class="btn-sm primary" onclick="addPlayer()">+ Add</button>
    </div>
  `;
}

function selectPlayer(id) {
  state.selectedPlayer = state.selectedPlayer === id ? null : id;
  renderPlayerList();
}

function addPlayer() {
  const name = document.getElementById("newPName")?.value.trim();
  const num = document.getElementById("newPNum")?.value.trim();
  const team = document.getElementById("newPTeam")?.value || "A";
  if (!name) return;

  const id = state.nextPlayerId++;
  state.players.push({
    id,
    name,
    num: num || String(id),
    team,
    x: 45 + Math.random() * 10,
    y: team === "A" ? 35 + Math.random() * 15 : 55 + Math.random() * 15
  });

  document.getElementById("newPName").value = "";
  document.getElementById("newPNum").value = "";
  renderCourt();
  renderPlayerList();
}

// ── Sport Tab UI ──────────────────────────────────────────────────────────
function buildSportTabs() {
  const tabs = document.getElementById("sportTabs");
  tabs.innerHTML = Object.entries(SPORTS).map(([key, val]) =>
    `<button class="sport-tab ${state.sport === key ? "active" : ""}" onclick="switchSport('${key}')">${val.label}</button>`
  ).join("");
}

function switchSport(sp) {
  clearInterval(state.timerInterval);
  state.sport = sp;
  initSport(sp);
  buildSportTabs();
}

// ── Layout ────────────────────────────────────────────────────────────────
function buildLayout() {
  document.getElementById("mainGrid").innerHTML = `
    <div class="panel" id="panel-scoreboard"></div>
    <div class="panel" id="panel-court"></div>
    <div class="panel" id="panel-stats"></div>
    <div class="panel" id="panel-events"></div>
    <div class="panel full-width" id="panel-players"></div>
  `;
}

// ── Boot ──────────────────────────────────────────────────────────────────
buildSportTabs();
buildLayout();
initSport("basketball");
