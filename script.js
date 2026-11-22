
/* ==========================================================
   SNIGDHARANI DAS — PORTFOLIO SETTINGS
   Add your real profile URLs below.
   ========================================================== */

const PROFILE_LINKS = {
  github: "https://github.com/snigdha-rani345/",
  linkedin: "https://www.linkedin.com/in/snigdharani-das-445146354/",
  tryhackme: "https://tryhackme.com/p/SNIGDHARANIDAS",
  email: "dsnigdharani130@gmail.com"
};

const PROJECTS = {
  phishing: {
    number: "001",
    category: "EMAIL SECURITY / THREAT INVESTIGATION",
    title: "Phishing Email Investigation & IOC Analysis",
    summary: "A simulated L1 SOC investigation into a suspicious email reported by a user — validating sender authenticity, extracting indicators and documenting a verdict.",
    why: "To understand how an L1 SOC Analyst investigates a suspicious email report and determines whether it represents a genuine threat.",
    objective: "Analyse a simulated phishing email, extract Indicators of Compromise (IOCs), and document the final verdict.",
    tools: ["Email Header Analyzer (MXToolbox)", "VirusTotal", "AbuseIPDB", "CyberChef", "URLScan.io"],
    actions: [
      "Checked email headers and SPF, DKIM and DMARC results to look for sender spoofing.",
      "Safely extracted suspicious links, domains and IP addresses.",
      "Analysed URLs and file hashes using VirusTotal and URLScan.io.",
      "Checked sender IP reputation using AbuseIPDB.",
      "Documented findings and prepared an incident report."
    ],
    skills: ["Email header analysis", "IOC extraction and enrichment", "Threat intelligence research", "Phishing investigation", "Incident reporting"],
    outcome: "Created a phishing analysis report containing evidence, extracted IOCs and a malicious verdict for escalation.",
    relevance: "Email remains a common initial access route. The workflow mirrors a practical SOC triage process: validate the message, enrich indicators, assess risk and communicate a defensible verdict.",
    evidence: [
  {
    title: "Investigation report",
    url:"https://github.com/snigdha-rani345/SOC-Investigation-Projects/blob/main/projects/01-phishing-account-compromise/splunk/investigation-queries.md"
  },
  {
    title: "Email analysis screenshots",
    url: "PASTE_YOUR_SCREENSHOT_LINK_HERE"
  },
  {
    title: "Extracted IOC list",
    url: "PASTE_YOUR_IOC_LINK_HERE"
  }
]
  },

  powershell: {
    number: "002",
    category: "ENDPOINT / WINDOWS LOG INVESTIGATION",
    title: "Suspicious PowerShell Execution & Log Analysis",
    summary: "An endpoint investigation into encoded PowerShell activity, using Windows telemetry and decoding to understand the command and identify a suspicious payload URL.",
    why: "To practise how a SOC Analyst detects and investigates hidden or encoded PowerShell commands that attackers may use on Windows endpoints.",
    objective: "Investigate Windows event logs, identify suspicious PowerShell activity, decode the script and determine what it was attempting to do.",
    tools: ["Splunk", "Windows Event Viewer", "Sysmon", "PowerShell Logs", "CyberChef", "VirusTotal"],
    actions: [
      "Filtered PowerShell execution events, including Event ID 4104 and Sysmon Event ID 1.",
      "Identified an encoded Base64 PowerShell command running from a suspicious folder.",
      "Used CyberChef to decode the command into readable text.",
      "Found an external URL in the script that attempted to download a payload.",
      "Checked the URL and IP reputation using VirusTotal and documented findings."
    ],
    skills: ["Windows event log analysis", "PowerShell investigation", "Base64 decoding", "Process and command-line analysis", "IOC identification"],
    outcome: "Identified the suspicious command, extracted the C2 URL as an IOC and wrote an incident summary for containment.",
    relevance: "Encoded PowerShell can obscure attacker activity. Recognising suspicious execution patterns and correlating endpoint telemetry is useful for detecting malicious scripts and living-off-the-land behaviour.",
    evidence: ["SIEM search query screenshots", "Decoded CyberChef script output", "Extracted IOC list (IP, URL and file path)"]
  },

  bruteforce: {
    number: "003",
    category: "IDENTITY & ACCESS / ALERT TRIAGE",
    title: "Brute-Force Attack Detection & Log Investigation",
    summary: "An authentication-log investigation to identify repeated failed logins, trace the source IP and determine whether a subsequent successful login indicated possible account compromise.",
    why: "To learn how an L1 SOC Analyst distinguishes repeated malicious login attempts from normal user error and checks whether an attacker gained access.",
    objective: "Investigate authentication logs, detect a brute-force pattern, identify the source IP and determine whether a login succeeded.",
    tools: ["Wazuh (SIEM)", "Windows Security Logs", "VPN Logs", "AbuseIPDB", "MITRE ATT&CK T1110 — Brute Force"],
    actions: [
      "Searched authentication logs for repeated failed login attempts (Windows Event ID 4625).",
      "Grouped failed events by source IP and username to identify patterns.",
      "Checked for a successful login (Event ID 4624) after the failed attempts.",
      "Checked source IP reputation using AbuseIPDB.",
      "Documented the event timeline and recommended blocking the IP and resetting the targeted password."
    ],
    skills: ["Authentication log analysis", "Event correlation", "Brute-force detection", "IP reputation checks", "MITRE ATT&CK mapping", "Alert triage"],
    outcome: "Identified the brute-force source IP, assessed whether access was gained and created an alert triage report with containment steps.",
    relevance: "Repeated authentication failures can signal credential attacks. Correlating failures with successful logins helps security teams prioritise possible account compromise and respond appropriately.",
    evidence: ["SIEM search query and alert screenshots", "Timeline of failed versus successful logins", "Attacker IP reputation report"]
  },

  qradar: {
    number: "004",
    category: "NETWORK SECURITY / OFFENSE INVESTIGATION",
    title: "DoS Offense Investigation in IBM QRadar",
    summary: "A QRadar offense investigation examining high-volume network traffic, identifying source and destination systems, and assessing whether the activity represented a denial-of-service attack or a false positive.",
    why: "To practise how an L1 SOC Analyst investigates high-volume traffic alerts in IBM QRadar and determines whether a real DoS attack is occurring.",
    objective: "Analyse a DoS offense, identify attacking source IPs and the targeted server, and document mitigation recommendations.",
    tools: ["IBM QRadar (Offenses & Log Activity)", "Ariel Query Language (AQL)", "Firewall Logs", "Network Flow Logs", "AbuseIPDB"],
    actions: [
      "Reviewed the offense summary, magnitude score and contributing rules.",
      "Used AQL to filter firewall and flow logs for traffic spikes and possible SYN floods.",
      "Identified source IPs sending high volumes of requests to a destination port.",
      "Assessed whether traffic came from an external malicious IP or an internal misconfigured scanner.",
      "Checked source IP reputation and documented firewall-blocking recommendations."
    ],
    skills: ["QRadar offense investigation", "AQL querying", "Network traffic analysis", "False-positive assessment", "IP reputation research", "Incident documentation"],
    outcome: "Assessed the DoS traffic source, distinguished potential threats from false positives and prepared an incident report with IP-blocking recommendations.",
    relevance: "High-volume traffic can affect service availability, but not every spike is malicious. Contextual analysis helps SOC teams avoid unnecessary escalation while identifying genuine availability threats.",
    evidence: ["QRadar Offense Summary screenshot", "AQL search query and traffic-spike logs", "Attacker IP list and incident report"]
  },

  logistics: {
    number: "005",
    category: "SOC ENVIRONMENT / DETECTION & RESPONSE LAB",
    title: "Logistics Company SOC Monitoring & Incident Response Lab",
    summary: "A simulated business SOC environment for centralised endpoint monitoring, alert investigation and response documentation across logistics systems.",
    why: "To simulate a real-world SOC environment for a logistics company and practise detecting and responding to endpoint and network threats using security monitoring tools.",
    objective: "Set up centralised log monitoring for simulated logistics servers, detect simulated cyberattacks and document step-by-step response actions.",
    tools: ["Splunk", "Wazuh Agents", "Linux & Windows Endpoints", "MITRE ATT&CK", "Sysmon"],
    actions: [
      "Installed and configured Wazuh agents on simulated logistics endpoints to collect system and security logs.",
      "Monitored dashboards for high-severity alerts such as unauthorised file changes, suspicious logins and malware execution.",
      "Investigated alerts by reviewing process trees, user accounts and source IP addresses.",
      "Mapped detected attacker behaviours to MITRE ATT&CK techniques.",
      "Documented containment steps, including endpoint isolation and blocking malicious IPs, in an incident response report."
    ],
    skills: ["Endpoint monitoring", "Wazuh agent deployment", "SIEM alert triage", "Process and account investigation", "MITRE ATT&CK mapping", "Incident response documentation"],
    outcome: "Built a working SOC detection lab for a logistics environment, detected simulated endpoint attacks and created an incident response playbook.",
    relevance: "Organisations such as logistics providers rely on connected endpoints and operational systems. Centralised monitoring and repeatable response procedures help security teams investigate suspicious activity before it disrupts operations.",
    evidence: ["Splunk security alert dashboard screenshots", "MITRE ATT&CK mapping summary", "Incident response playbook and triage notes"]
  }
};

/* ---------- ELEMENT REFERENCES ---------- */

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalCase = document.getElementById("modalCase");
const toast = document.getElementById("toast");

let lastFocusedElement = null;
let toastTimer;

/* ---------- NOTIFICATION ---------- */

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ---------- PROFILE LINKS ---------- */

function applyProfileLinks() {
  document.querySelectorAll("[data-profile-link]").forEach(link => {
    const key = link.dataset.profileLink;
    const value = PROFILE_LINKS[key];

    if (value && value.trim()) {
      link.href = key === "email"
        ? `mailto:${value.trim()}`
        : value.trim();

      link.classList.remove("is-placeholder");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#";
      link.classList.add("is-placeholder");

      link.setAttribute(
        "aria-label",
        `${key} link not configured yet`
      );

      if (key === "email") {
        link.dataset.placeholderMessage =
          "Add your email address in script.js to activate this link.";
      }
    }
  });
}

/* ---------- PROJECT MODALS ---------- */

function renderProject(projectKey) {
  const project = PROJECTS[projectKey];

  if (!project || !modalContent || !modalCase) return;

  modalCase.textContent = `CASE FILE / ${project.number}`;

  const list = items => `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

  const evidence = project.evidence.map(item => `
  <div class="evidence-slot">
    <b>${item.title}</b>
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
      View evidence ↗
    </a>
  </div>
`).join("");

  modalContent.innerHTML = `
    <div class="modal-kicker">${project.category}</div>

    <h2 id="modalTitle">${project.title}</h2>

    <p class="modal-lead">${project.summary}</p>

    <div class="modal-tools">
      ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
    </div>

    <div class="detail-grid">

      <section class="detail-block">
        <h3>01 / WHY I BUILT IT</h3>
        <p>${project.why}</p>
      </section>

      <section class="detail-block">
        <h3>02 / OBJECTIVE</h3>
        <p>${project.objective}</p>
      </section>

      <section class="detail-block detail-wide">
        <h3>03 / WHAT I DID</h3>
        ${list(project.actions)}
      </section>

      <section class="detail-block">
        <h3>04 / SKILLS DEVELOPED</h3>
        ${list(project.skills)}
      </section>

      <section class="detail-block outcome-block">
        <h3>05 / OUTCOME</h3>
        <p>${project.outcome}</p>
      </section>

      <section class="detail-block detail-wide">
        <h3>06 / REAL-WORLD RELEVANCE</h3>
        <p>${project.relevance}</p>
      </section>

    </div>

    <div class="evidence-area">
      <h3>07 / EVIDENCE &amp; PROJECT RESOURCES</h3>

      <div class="evidence-grid">
        ${evidence}

        <div class="evidence-slot">
          <b>GitHub repository</b>
          <span>ADD REPOSITORY URL</span>
        </div>

        <div class="evidence-slot">
          <b>Technical write-up</b>
          <span>ADD WRITE-UP URL</span>
        </div>

        <div class="evidence-slot">
          <b>Demo / documentation</b>
          <span>ADD DEMO OR DOCS</span>
        </div>
      </div>

      <p class="evidence-note">
        Evidence slots are intentional placeholders. Add your own repository
        URLs, screenshots, reports or documentation before publishing.
        No external project links have been invented.
      </p>
    </div>
  `;
}

function openProject(projectKey, trigger) {
  if (!modal) return;

  lastFocusedElement = trigger || document.activeElement;

  renderProject(projectKey);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  const closeButton = document.getElementById("modalClose");

  if (closeButton) closeButton.focus();
}

function closeProject() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

/* ---------- PROJECT BUTTONS ---------- */

document.querySelectorAll("[data-open-project]").forEach(button => {
  button.addEventListener("click", () => {
    openProject(button.dataset.openProject, button);
  });
});

const modalClose = document.getElementById("modalClose");

if (modalClose) {
  modalClose.addEventListener("click", closeProject);
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) closeProject();
  });
}

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    modal &&
    modal.classList.contains("open")
  ) {
    closeProject();
  }
});

/* ---------- PROJECT FILTERS ---------- */

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden =
        filter !== "all" &&
        card.dataset.category !== filter;
    });
  });
});

/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- PLACEHOLDER LINK MESSAGES ---------- */

document.querySelectorAll("[data-profile-link]").forEach(link => {
  link.addEventListener("click", event => {
    const key = link.dataset.profileLink;

    if (!PROFILE_LINKS[key] || !PROFILE_LINKS[key].trim()) {
      event.preventDefault();

      showToast(
        key === "email"
          ? "Add your email address in script.js to activate this link."
          : `Add your ${key} URL in script.js to activate this link.`
      );
    }
  });
});

/* ---------- FOOTER YEAR ---------- */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ---------- INITIALISE PROFILE LINKS ---------- */

applyProfileLinks();

/* ---------- SCROLL REVEAL ---------- */

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll(
    ".section-heading, .about-story, .focus-panel, .project-card, .competition-card, .learning-card, .cert-card, .intel-intro, .intel-list, .application-strip, .contact-inner"
  ).forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}



  
