
// here pwede nyo palitan yung image pati name 
const CSC_POSITIONS = [
  {
    id: 'csc-pres',
    title: 'CSC PRESIDENT',
    sub: 'Central Student Council',
    candidates: [
      // dito mismo \/
      { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  },
  {
    id: 'csc-vp',
    title: 'CSC VICE PRESIDENT',
    sub: 'Central Student Council',
    candidates: [
      { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  },
  {
    id: 'csc-sec',
    title: 'CSC SECRETARY',
    sub: 'Central Student Council',
    candidates: [
        { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  },
  {
    id: 'csc-tres',
    title: 'CSC TREASURER',
    sub: 'Central Student Council',
    candidates: [
      { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  },
  {
    id: 'csc-aud',
    title: 'CSC AUDITOR',
    sub: 'Central Student Council',
    candidates: [
      { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  },
  {
    id: 'csc-pro',
    title: 'CSC P.R.O',
    sub: 'Central Student Council',
    candidates: [
      { name: 'NEIL',    party: 'tinig', photo: 'images/659787245_3253535624848295_1111995603739053273_n.jpg' },
      { name: 'ROBB',  party: 'tugon', photo: 'images/292483983_989692231722160_4273033280216145076_n.jpg' }
    ]
  }
];

const ENSC_POSITIONS = [
  {
    id: 'ensc-pres',
    title: 'ENSC PRESIDENT',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
    ]
  },
  {
    id: 'ensc-vp',
    title: 'ENSC VICE PRESIDENT',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
    ]
  },
  {
    id: 'ensc-sec',
    title: 'ENSC SECRETARY',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
    ]
  },
  {
    id: 'ensc-tres',
    title: 'ENSC TREASURER',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
    ]
  },
  {
    id: 'ensc-aud',
    title: 'ENSC AUDITOR',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
    ]
  },
  {
    id: 'ensc-pro',
    title: 'ENSC P.R.O',
    sub: 'College of Engineering',
    candidates: [
        { name: 'Krystoff',    party: 'tinig', photo: 'images/470630389_1306699230785318_8000669650409403876_n.jpg' },
      { name: 'Ferdie',  party: 'tugon', photo: 'images/481950857_1651856785456375_6404836954798992764_n.jpg' }
      //hanggang dito lang
    ]
  }
];


function getVotes() {
  const raw = sessionStorage.getItem('ue_votes');
  return raw ? JSON.parse(raw) : {};
}

function saveVotes(votes) {
  sessionStorage.setItem('ue_votes', JSON.stringify(votes));
}

function getVoterInfo() {
  const raw = sessionStorage.getItem('ue_voter');
  return raw ? JSON.parse(raw) : {};
}

function saveVoterInfo(info) {
  sessionStorage.setItem('ue_voter', JSON.stringify(info));
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}


const SCHOOL_LOGO = 'images/logo.png';
const SCHOOL_NAME = 'UNIVERSITY OF THE EAST';


function renderHeader(activeStep) {
  const steps = ['VERIFY', 'BALLOT', 'REVIEW', 'DONE'];
  const stepHTML = steps.map((label, i) => {
    const num = i + 1;
    let cls = '';
    let circle = num;
    if (num < activeStep) { cls = 'done'; circle = '✓'; }
    else if (num === activeStep) { cls = 'active'; }
    return `
      <div class="step-item ${cls}">
        <div class="step-circle">${circle}</div>
        <div class="step-label">${label}</div>
      </div>`;
  }).join('');

  const logoHTML = SCHOOL_LOGO
    ? `<img src="${SCHOOL_LOGO}" width="48" height="48" style="border-radius:50%; object-fit:cover; display:block;"/>`
    : `<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#fff"/>
        <text x="24" y="18" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">UNIVERSITY</text>
        <text x="24" y="26" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">OF THE</text>
        <text x="24" y="34" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">EAST</text>
       </svg>`;

  return `
    <header class="ue-header">
      <div class="logo">${logoHTML}</div>
      <h1>${SCHOOL_NAME}</h1>
    </header>
    <div class="stepper-bar">
      <div class="stepper">${stepHTML}</div>
    </div>`;
}

function renderAdmin(activeStep) {
  const logoHTML = SCHOOL_LOGO
    ? `<img src="${SCHOOL_LOGO}" width="48" height="48" style="border-radius:50%; object-fit:cover; display:block;"/>`
    : `<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#fff"/>
        <text x="24" y="18" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">UNIVERSITY</text>
        <text x="24" y="26" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">OF THE</text>
        <text x="24" y="34" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">EAST</text>
       </svg>`;

  return `
    <header class="ue-header">
      <div class="logo">${logoHTML}</div>
      <h1>${SCHOOL_NAME}</h1>
    </header>
    <div class="d-flex justify-content-center py-4">
      <h2><strong>ADMIN CONTROL PANEL</strong></h2>
    </div>`;
}

function renderPanel(activeStep) {
  const logoHTML = SCHOOL_LOGO
    ? `<img src="${SCHOOL_LOGO}" width="48" height="48" style="border-radius:50%; object-fit:cover; display:block;"/>`
    : `<svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#fff"/>
        <text x="24" y="18" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">UNIVERSITY</text>
        <text x="24" y="26" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">OF THE</text>
        <text x="24" y="34" text-anchor="middle" font-size="6.5" font-weight="700" fill="#b01a2e" font-family="serif">EAST</text>
       </svg>`;

  return `
    <header class="ue-header">
      <div class="logo">${logoHTML}</div>
      <h1>${SCHOOL_NAME} — BALLOT ADMIN CONTROL PANEL</h1>
    </header>
    <div class="d-flex justify-content-center py-4 flex-row gap-5" style="background-color: white;">
      <a href="admin-results.html" class="adminPanelLink">Election Results</a>
      <a href="admin-settings.html" class="adminPanelLink">Election Settings</a>
      <a href="#" class="adminPanelLink" disabled onclick="logout ()">Log Out</a>
    </div>`;
}

function buildPositionCard(pos, session) {
  const votes = getVotes();
  const selected = votes[pos.id];

  const candidateButtons = pos.candidates.map((c, i) => {
    let selectedClass = '';
    if (selected && selected.name === c.name) {
      selectedClass = `selected-${c.party}`;
    }
    const avatarHTML = c.photo
      ? `<img src="${c.photo}" class="candidate-avatar" alt="${c.name}" style="object-fit:cover;"/>`
      : `<div class="candidate-avatar">${initials(c.name)}</div>`;

    return `
      <button class="candidate-opt ${selectedClass}" id="opt-${pos.id}-${i}"
        onclick="selectCandidate('${pos.id}', ${i}, '${c.party}', '${c.name}', '${session}')">
        ${avatarHTML}
        <span class="candidate-name">${c.name}</span>
        <div class="radio-circle"></div>
      </button>`;
  }).join('');

  return `
    <div class="position-card">
      <div class="position-header">
        <div>
          <div class="position-title">${pos.title}</div>
          <div class="position-sub">${pos.sub}</div>
        </div>
        <span class="choose-badge">Choose 1</span>
      </div>
      <div class="candidates-row">${candidateButtons}</div>
    </div>`;
}

function selectCandidate(posId, idx, party, name, session) {
  const positions = session === 'csc' ? CSC_POSITIONS : ENSC_POSITIONS;
  const pos = positions.find(p => p.id === posId);
  if (!pos) return;

  const votes = getVotes();
  votes[posId] = { name, party };
  saveVotes(votes);

  pos.candidates.forEach((_, i) => {
    const btn = document.getElementById(`opt-${posId}-${i}`);
    if (btn) btn.classList.remove('selected-tinig', 'selected-tugon');
  });

  const chosen = document.getElementById(`opt-${posId}-${idx}`);
  if (chosen) chosen.classList.add(`selected-${party}`);

  updateProgress(session);
}

function updateProgress(session) {
  const positions = session === 'csc' ? CSC_POSITIONS : ENSC_POSITIONS;
  const votes = getVotes();
  const voted = positions.filter(p => votes[p.id]).length;
  const total = positions.length;

  const votedLabel = document.getElementById(`${session}-voted-label`);
  const remainingLabel = document.getElementById(`${session}-remaining-label`);
  const fill = document.getElementById(`${session}-progress-fill`);
  const nextBtn = document.getElementById(`${session}-next-btn`);
  const warning = document.getElementById(`${session}-warning`);

  if (votedLabel) votedLabel.textContent = `${voted} of ${total} Positions Voted`;
  if (remainingLabel) remainingLabel.textContent = `${total - voted} remaining`;
  if (fill) fill.style.width = `${(voted / total) * 100}%`;

  if (nextBtn) {
    if (voted === total) {
      nextBtn.classList.add('ready');
      if (warning) warning.style.display = 'none';
    } else {
      nextBtn.classList.remove('ready');
    }
  }
}