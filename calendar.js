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
