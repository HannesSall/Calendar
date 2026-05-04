let month = new Date().toLocaleDateString("sv-SE", { month: "numeric" }) - 1;
let year = new Date().toLocaleDateString("sv-SE", { year: "numeric" });

document.addEventListener("DOMContentLoaded", main);

function main() {
  SetMonth(year, month);
  SetupListeners();
  renderCalendar();
  //GetDate(year, month);
  renderWelcomeSegment();
}

function renderCalendar() {
  const grid = document.querySelector(".calendar-grid");

  // Clear previous content
  grid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();

  // Convert Sunday (0) → 6, Monday (1) → 0
  const offset = (firstDay + 6) % 7;

  // Empty cells
  for (let i = 0; i < offset; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    grid.appendChild(empty);
  }

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.classList.add("day");
    day.textContent = i;
    grid.appendChild(day);
  }
}
function renderWelcomeSegment() {
  const currentDate = new Date();
  document.querySelector("#date").textContent = formatDate(currentDate);
  document.querySelector("#time").textContent = getHour(currentDate);
}
function formatDate(date) {
  return date.toLocaleDateString("sv", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}
function getHour(date) {
  return date.toLocaleTimeString("sv", {
    hour: "numeric",
    minute: "numeric",
  });
}

function GetDate(year, month) {
  let day = new Date(year, month);
  document.querySelector("#date").textContent = formatDate(day);
  document.querySelector("#time").textContent = "";
}

function SetMonth(year, month) {
  let monthStr = new Date(year, month).toLocaleDateString("sv-SE", {
    month: "long",
  });

  document.querySelector(".month-button").textContent = monthStr + " " + year;
}

function SetupListeners() {
  document.addEventListener("click", prevMonth);
  document.addEventListener("click", nextMonth);
}

function prevMonth(event) {
  if (event.target.matches(".left-btn-month")) {
    month--;

    if (month < 0) {
      month = 11;
      year--;
    }

    //const date = new Date();
    //date.setMonth(date.getMonth() + 1);

    renderCalendar();
    SetMonth(year, month);
  }
}

function nextMonth(event) {
  if (event.target.matches(".right-btn-month")) {
    month++;

    if (month > 11) {
      month = 0;
      year++;
    }

    renderCalendar();
    SetMonth(year, month);
  }
}
