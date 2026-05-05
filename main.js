let month = new Date().toLocaleDateString("sv-SE", { month: "numeric" }) - 1;
let year = new Date().toLocaleDateString("sv-SE", { year: "numeric" });

document.addEventListener("DOMContentLoaded", main);

function main() {
  SetMonth(year, month);
  SetupListeners();
  renderCalendar();
  //GetDate(year, month);
  renderWelcomeSegment();

  renderTodos();
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
    let daysTodos = groupTodoByDate(todos, new Date(year, month, i));
    let todosNumber = daysTodos.length;
    console.log("todos number", todosNumber);
    day.innerHTML =
      "<div class='todo-count'>" +
      todosNumber +
      "</div>" +
      "<div>" +
      i +
      "</div>";
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
  document.addEventListener("click", monthSelector);
  document.addEventListener("click", yearSelector);
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

function monthSelector(event) {
  if (event.target.matches(".popover-month-jan")) {
    console.log(document.querySelector(".popover-month-jan").innerHTML);
    month = 0;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-feb")) {
    console.log(document.querySelector(".popover-month-feb").innerHTML);
    month = 1;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-mars")) {
    console.log(document.querySelector(".popover-month-mars").innerHTML);
    month = 2;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-april")) {
    console.log(document.querySelector(".popover-month-april").innerHTML);
    month = 3;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-may")) {
    console.log(document.querySelector(".popover-month-may").innerHTML);
    month = 4;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-june")) {
    console.log(document.querySelector(".popover-month-june").innerHTML);
    month = 5;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-juli")) {
    console.log(document.querySelector(".popover-month-juli").innerHTML);
    month = 6;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-aug")) {
    console.log(document.querySelector(".popover-month-aug").innerHTML);
    month = 7;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-sep")) {
    console.log(document.querySelector(".popover-month-sep").innerHTML);
    month = 8;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-oct")) {
    console.log(document.querySelector(".popover-month-oct").innerHTML);
    month = 9;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-nov")) {
    console.log(document.querySelector(".popover-month-nov").innerHTML);
    month = 10;
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".popover-month-dec")) {
    console.log(document.querySelector(".popover-month-dec").innerHTML);
    month = 11;
    renderCalendar();
    SetMonth(year, month);
  }
}

function yearSelector(event) {
  if (event.target.matches(".year-selector-left-btn")) {
    year--;
    setYear();
    renderCalendar();
    SetMonth(year, month);
  } else if (event.target.matches(".year-selector-right-btn")) {
    year++;
    setYear();
    renderCalendar();
    SetMonth(year, month);
  }
}

function setYear() {
  document.querySelector(".year-selector").innerHTML = year;
}
