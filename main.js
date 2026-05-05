let month = new Date().toLocaleDateString("sv-SE", { month: "numeric" }) - 1;
let year = new Date().toLocaleDateString("sv-SE", { year: "numeric" });

document.addEventListener("DOMContentLoaded", main);

function main() {
  SetMonth(year, month);
  SetupListeners();
  renderCalendar();
  renderWelcomeSegment();
  renderTodos();
}

function SetupListeners() {
  document.addEventListener("click", prevMonth);
  document.addEventListener("click", nextMonth);
  document.addEventListener("click", monthSelector);
  document.addEventListener("click", yearSelector);
}
