const symbols = {
  circle: "M50,50 m-40,0 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0",
  triangle: "M20,80 L50,20 L80,80 Z",
  square: "M20,20 L80,20 L80,80 L20,80 Z",
  verticalLine: "M50,20 L50,80",
  corner: "M20,20 L20,80 L80,80",
  crossingOrthogonal: "M20,50 L80,50 M50,20 L50,80",
  horizontalLine: "M20,50 L80,50",
  crossingDiagonal: "M20,20 L80,80 M20,80 L80,20",
  leftDiagonal: "M20,20 L80,80",
  lozenge: "M50,20 L80,50 L50,80 L20,50 Z",
  tShape: "M20,20 L80,20 M50,20 L50,80",
};

let selectedSymbols = Object.keys(symbols);
let currentRotation = 0;

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  setupEventListeners();
  displayRandomSymbol();
});

// Load saved settings from localStorage
function loadSettings() {
  const saved = localStorage.getItem("selectedSymbols");
  if (saved) {
    selectedSymbols = JSON.parse(saved);
  }
  setupChecklistItems();
}

// Set up all event listeners
function setupEventListeners() {
  document
    .getElementById("new-symbol-btn")
    .addEventListener("click", displayRandomSymbol);
  document.getElementById("settings-btn").addEventListener("click", openModal);
  document
    .getElementById("set-symbols-btn")
    .addEventListener("click", saveSettings);
  document
    .getElementById("select-all-btn")
    .addEventListener("click", selectAll);
  document
    .getElementById("select-none-btn")
    .addEventListener("click", selectNone);
}

// Create checklist items in the modal
function setupChecklistItems() {
  const container = document.querySelector(".symbol-checklist");
  container.innerHTML = "";

  Object.keys(symbols).forEach((key) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = key;
    checkbox.checked = selectedSymbols.includes(key);
    checkbox.className = "me-2";

    const symbolName = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(symbolName));
    container.appendChild(label);
  });
}

// Display a random symbol with animation
function displayRandomSymbol() {
  if (selectedSymbols.length === 0) return;

  const symbolDisplay = document.getElementById("symbol-display");
  symbolDisplay.style.opacity = "0";

  setTimeout(() => {
    const randomSymbol =
      selectedSymbols[Math.floor(Math.random() * selectedSymbols.length)];
    const newRotation = Math.floor(Math.random() * 4) * 90;

    symbolDisplay.setAttribute("transform", `rotate(${newRotation}, 50, 50)`);
    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("d", symbols[randomSymbol]);
    pathElement.setAttribute("fill", "none");

    symbolDisplay.innerHTML = "";
    symbolDisplay.appendChild(pathElement);
    symbolDisplay.style.opacity = "1";

    currentRotation = newRotation;
  }, 200);
}

// Modal functions
function openModal() {
  document.getElementById("settings-modal").classList.add("show");
}

function closeModal() {
  document.getElementById("settings-modal").classList.remove("show");
}

function saveSettings() {
  const checkboxes = document.querySelectorAll(
    '.symbol-checklist input[type="checkbox"]'
  );
  selectedSymbols = Array.from(checkboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  localStorage.setItem("selectedSymbols", JSON.stringify(selectedSymbols));
  closeModal();
  displayRandomSymbol();
}

function selectAll() {
  const checkboxes = document.querySelectorAll(
    '.symbol-checklist input[type="checkbox"]'
  );
  checkboxes.forEach((cb) => (cb.checked = true));
}

function selectNone() {
  const checkboxes = document.querySelectorAll(
    '.symbol-checklist input[type="checkbox"]'
  );
  checkboxes.forEach((cb) => (cb.checked = false));
}

// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful");
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}
