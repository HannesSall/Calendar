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
    let daysTodos = groupTodoByDate(new Date(year, month, i));
    let todosNumber = daysTodos.length;
    
    // console.log("todos number", todosNumber);
    const todoCounter = document.createElement("div");
    todoCounter.classList.add("todo-count");
    
    const calendarDay = document.createElement("div");
    calendarDay.classList.add("card-date");
    
    todoCounter.textContent = todosNumber;
    calendarDay.textContent = i;
    if(todosNumber > 0){
      day.append(todoCounter, calendarDay); 
    } 
    else {
      day.append(calendarDay); 
    }
    // day.innerHTML =
    //   "<div class='todo-count'>" +
    //   todosNumber +
    //   "<div class='card-date'>" +
    //   i +
    //   "</div>" + 
    //   "</div>";
    // }
    // else{
    //   console.log("todos number", todosNumber);
    //   day.innerHTML =
        
    //     "<div>" +
    //     i +
    //     "</div>";
      
    // }
    grid.appendChild(day);
  }
}
function prevMonth(event) {
  if (event.target.matches(".left-btn-month")) {
    month--;

    if (month < 0) {
      month = 11;
      year--;
    }
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
