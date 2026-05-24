/* ---------- PORTFOLIO SAVE / LOAD ---------- */

function savePortfolio() {
  const editableElements = document.querySelectorAll("[contenteditable='true']");
  let data = [];

  editableElements.forEach((el, index) => {
    data.push({
      index: index,
      html: el.innerHTML
    });
  });

  localStorage.setItem("portfolioData", JSON.stringify(data));
  alert("Saved Successfully ✅");
}

function loadPortfolio() {
  const saved = localStorage.getItem("portfolioData");
  if (!saved) return;

  const data = JSON.parse(saved);
  const editableElements = document.querySelectorAll("[contenteditable='true']");

  data.forEach(item => {
    if (editableElements[item.index]) {
      editableElements[item.index].innerHTML = item.html;
    }
  });
}

function resetPortfolio() {
  localStorage.removeItem("portfolioData");
  alert("Reset Done ✅ Refresh now");
}

/* ---------- DYNAMIC ADD FUNCTIONS ---------- */

function addChip(listId) {
  const list = document.getElementById(listId);
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.contentEditable = "true";
  chip.innerText = "New Skill";
  list.appendChild(chip);
}

function addListItem(listId) {
  const list = document.getElementById(listId);
  const li = document.createElement("li");
  li.contentEditable = "true";
  li.innerText = "New Certification";
  list.appendChild(li);
}

function addProject() {
  const grid = document.getElementById("projectGrid");

  const project = document.createElement("div");
  project.className = "project";

  project.innerHTML = `
    <h3 contenteditable="true">New Project Title</h3>
    <p contenteditable="true">Write your project description here...</p>
    <div class="project-links">
      <a href="#" contenteditable="true">GitHub</a>
      <a href="#" contenteditable="true">Live Demo</a>
    </div>
  `;

  grid.appendChild(project);
}

/* ---------- DARK MODE TOGGLE ---------- */

const toggle = document.getElementById("themeToggle");

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  if (toggle) toggle.checked = true;
}

// Toggle theme + save preference
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
// Default theme = white
window.onload = function () {
  document.body.classList.add("white-theme");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "grey") {
    document.body.classList.remove("white-theme");
    document.body.classList.add("grey-theme");
    document.getElementById("themeToggle").checked = true;
  }
};

function toggleTheme() {
  const toggle = document.getElementById("themeToggle");

  if (toggle.checked) {
    document.body.classList.remove("white-theme");
    document.body.classList.add("grey-theme");
    localStorage.setItem("theme", "grey");
  } else {
    document.body.classList.remove("grey-theme");
    document.body.classList.add("white-theme");
    localStorage.setItem("theme", "white");
  }
}
window.onload = () => {
  document.body.classList.add("white-theme");
  document.body.classList.remove("grey-theme");
  document.getElementById("themeToggle").checked = false;
};

function toggleTheme() {
  document.body.classList.toggle("grey-theme");
  document.body.classList.toggle("white-theme");
}


/* ---------- INITIAL LOAD ---------- */

loadPortfolio();
