document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Smooth scroll + active nav link ===== */
const navLinks = document.querySelectorAll(".nav-link");
const sections = Array.from(navLinks).map((l) => l.dataset.section);

document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const href = el.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const navbar = document.getElementById("navbar");

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);

  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) {
      current = id;
    }
  }
  navLinks.forEach((l) => l.classList.toggle("active", l.dataset.section === current));
}
window.addEventListener("scroll", onScroll);
onScroll();

/* ===== Reveal on scroll ===== */
const revealEls = document.querySelectorAll(".reveal");
revealEls.forEach((el) => {
  const rect = el.getBoundingClientRect();
  if (rect.top > window.innerHeight * 0.85) {
    el.classList.add("reveal-pending");
  }
});
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "-20px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ===== Skills data + render ===== */
const skills = [
  { title: "Artificial Intelligence", icon: "🧠", color: "#A855F7", colorA: "#A855F780", glow: "rgba(168,85,247,0.35)", level: 82, description: "Building AI-powered tools, prompt engineering, LLM integrations, and intelligent automation systems.", tags: ["LLMs", "Automation", "Prompt Eng.", "ML Basics"] },
  { title: "Coding", icon: "</>", color: "#06B6D4", colorA: "#06B6D480", glow: "rgba(6,182,212,0.35)", level: 88, description: "Full-stack development in JavaScript, Python, and C++. Clean architecture, problem-solving, algorithms.", tags: ["JavaScript", "Python", "C++", "React"] },
  { title: "Time Management", icon: "⏱", color: "#F59E0B", colorA: "#F59E0B80", glow: "rgba(245,158,11,0.35)", level: 85, description: "Balancing JEE prep, development projects, learning, and personal growth with disciplined scheduling.", tags: ["Deep Work", "Planning", "Focus", "Consistency"] },
  { title: "Marketing", icon: "📣", color: "#EC4899", colorA: "#EC489980", glow: "rgba(236,72,153,0.35)", level: 75, description: "Digital marketing strategy, brand positioning, content creation, and growth hacking for tech products.", tags: ["SEO", "Content", "Growth", "Branding"] },
  { title: "UI / UX Design", icon: "▤", color: "#10B981", colorA: "#10B98180", glow: "rgba(16,185,129,0.35)", level: 84, description: "Designing cinematic, immersive user interfaces with premium aesthetics, micro-interactions, and glassmorphism.", tags: ["Figma", "Prototyping", "Design Systems", "Motion"] },
  { title: "Risk Management", icon: "⚠", color: "#EF4444", colorA: "#EF444480", glow: "rgba(239,68,68,0.35)", level: 78, description: "Evaluating risk in projects, investments, and decisions. Strategic thinking under uncertainty to maximise outcomes.", tags: ["Analysis", "Finance", "Strategy", "Decision-making"] },
];

const skillsGrid = document.getElementById("skills-grid");
skills.forEach((skill) => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.style.setProperty("--color", skill.color);
  card.style.setProperty("--color-a", skill.colorA);
  card.style.setProperty("--glow", skill.glow);
  card.setAttribute("data-testid", `card-skill-${skill.title.toLowerCase().replace(/\s|\//g, "-")}`);
  card.innerHTML = `
    <div class="skill-card-glow"></div>
    <div class="skill-card-body">
      <div class="skill-icon">${skill.icon}</div>
      <div>
        <h3 class="skill-title">${skill.title}</h3>
        <p class="skill-desc">${skill.description}</p>
      </div>
      <div>
        <div class="skill-progress-row">
          <span class="skill-progress-label">Proficiency</span>
          <span class="skill-progress-value">${skill.level}%</span>
        </div>
        <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${skill.level}"></div></div>
      </div>
      <div class="skill-tags">
        ${skill.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    </div>
  `;
  skillsGrid.appendChild(card);
});

/* ===== Languages / Tech data + render ===== */
const technologies = [
  { name: "HTML5", icon: "🌐", color: "#E34F26", colorA: "#E34F2680", glow: "rgba(227,79,38,0.4)", category: "Core", level: 95 },
  { name: "CSS3", icon: "🎨", color: "#1572B6", colorA: "#1572B680", glow: "rgba(21,114,182,0.4)", category: "Core", level: 90 },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E", colorA: "#F7DF1E80", glow: "rgba(247,223,30,0.4)", category: "Core", level: 88 },
  { name: "Java", icon: "☕", color: "#ED8B00", colorA: "#ED8B0080", glow: "rgba(237,139,0,0.4)", category: "Core", level: 72 },
  { name: "Python", icon: "🐍", color: "#3776AB", colorA: "#3776AB80", glow: "rgba(55,118,171,0.4)", category: "Core", level: 85 },
  { name: "C++", icon: "C++", color: "#00599C", colorA: "#00599C80", glow: "rgba(0,89,156,0.4)", category: "Core", level: 75 },
  { name: "React", icon: "⚛", color: "#61DAFB", colorA: "#61DAFB80", glow: "rgba(97,218,251,0.4)", category: "Frameworks", level: 88 },
  { name: "Next.js", icon: "▲", color: "#ffffff", colorA: "#ffffff80", glow: "rgba(255,255,255,0.2)", category: "Frameworks", level: 80 },
  { name: "Node.js", icon: "⬢", color: "#339933", colorA: "#33993380", glow: "rgba(51,153,51,0.4)", category: "Frameworks", level: 82 },
  { name: "Three.js", icon: "◭", color: "#049EF4", colorA: "#049EF480", glow: "rgba(4,158,244,0.4)", category: "Frameworks", level: 70 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", colorA: "#47A24880", glow: "rgba(71,162,72,0.4)", category: "Database", level: 78 },
  { name: "API", icon: "⇄", color: "#6BA539", colorA: "#6BA53980", glow: "rgba(107,165,57,0.4)", category: "Tools", level: 80 },
  { name: "Git", icon: "⑂", color: "#F05032", colorA: "#F0503280", glow: "rgba(240,80,50,0.4)", category: "Tools", level: 90 },
];

const categories = ["All", "Core", "Frameworks", "Database", "Tools"];
const techFilters = document.getElementById("tech-filters");
const techGrid = document.getElementById("tech-grid");
let activeCategory = "All";

function renderTechFilters() {
  techFilters.innerHTML = categories
    .map(
      (cat) =>
        `<button class="filter-btn${cat === activeCategory ? " active" : ""}" data-cat="${cat}" data-testid="filter-${cat.toLowerCase()}">${cat}</button>`
    )
    .join("");
  techFilters.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderTechFilters();
      renderTechGrid();
    });
  });
}

function animateBar(el, level, delay) {
  requestAnimationFrame(() => {
    setTimeout(() => {
      el.style.width = level + "%";
    }, delay);
  });
}

function renderTechGrid() {
  const filtered = activeCategory === "All" ? technologies : technologies.filter((t) => t.category === activeCategory);
  techGrid.innerHTML = "";
  filtered.forEach((tech, i) => {
    const card = document.createElement("div");
    card.className = "tech-card";
    card.style.setProperty("--color", tech.color);
    card.style.setProperty("--color-a", tech.colorA);
    card.style.setProperty("--glow", tech.glow);
    card.setAttribute("data-testid", `card-tech-${tech.name.toLowerCase().replace(/\s|\+|\./g, "-")}`);
    card.innerHTML = `
      <div class="tech-card-glow"></div>
      <div class="tech-card-body">
        <div class="tech-icon">${tech.icon}</div>
        <span class="tech-name">${tech.name}</span>
        <div class="tech-bar-row">
          <div class="tech-bar-header">
            <span class="tech-bar-label">Proficiency</span>
            <span class="tech-bar-value">${tech.level}%</span>
          </div>
          <div class="tech-bar-track"><div class="tech-bar-fill" data-level="${tech.level}"></div></div>
        </div>
        <span class="tech-category">${tech.category}</span>
      </div>
    `;
    techGrid.appendChild(card);
    const fill = card.querySelector(".tech-bar-fill");
    animateBar(fill, tech.level, i * 40);
  });
}

renderTechFilters();
renderTechGrid();

/* Animate skill bars once visible */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-bar-fill").forEach((el) => {
          el.style.width = el.dataset.level + "%";
        });
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
if (skillsGrid) barObserver.observe(skillsGrid);

/* ===== Toast ===== */
const toastEl = document.getElementById("toast");
let toastTimer;
function showToast(title, description, variant) {
  clearTimeout(toastTimer);
  toastEl.className = "toast" + (variant === "destructive" ? " destructive" : "");
  toastEl.innerHTML = `<div class="toast-title">${title}</div><div class="toast-desc">${description}</div>`;
  requestAnimationFrame(() => toastEl.classList.add("show"));
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4000);
}

/* ===== Contact form ===== */
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span class="spinner"></span> SENDING...`;

  try {
    const res = await fetch("../../api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

    showToast("Message Sent", "Your message has been received. Vedant will get back to you shortly.");
    contactForm.reset();
  } catch {
    showToast("Something went wrong", "Your message couldn't be sent. Please try again in a moment.", "destructive");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "SEND MESSAGE";
  }
});

/* ===== Auth (login/logout) ===== */
const authBtn = document.getElementById("auth-btn");

async function loadAuth() {
  try {
    const res = await fetch("../../api/auth/user", { credentials: "include" });
    const data = await res.json();
    authBtn.style.display = "inline-flex";
    if (data && data.user) {
      authBtn.textContent = "Log out";
      authBtn.dataset.testid = "button-logout";
      authBtn.onclick = () => {
        window.location.href = "../../api/logout";
      };
    } else {
      authBtn.textContent = "Log in";
      authBtn.dataset.testid = "button-login";
      authBtn.onclick = () => {
        window.location.href = "../../api/login";
      };
    }
  } catch {
    authBtn.style.display = "none";
  }
}
loadAuth();
