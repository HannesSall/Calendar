document.addEventListener("DOMContentLoaded", main)


function main() {
    let month = new Date().toLocaleDateString("sv-SE", { month: "numeric" });
    SetMonth();
    renderCalendar(2026, month-1)
    GetDate();
}

function renderCalendar(year, month) {
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

function GetDate()
{
    let year = new Date().toLocaleDateString("sv-SE", {year: "numeric"});
    let month = new Date().toLocaleDateString("sv-SE", {month: "2-digit"});
    let day = new Date().toLocaleDateString("sv-SE", {day: "2-digit"});
    document.querySelector(".date-and-time-section").textContent = year + "-" + month + "-" + day;
}

function SetMonth() {
    let month = new Date().toLocaleDateString("sv-SE", { month: "long"});
    let day = new Date().toLocaleDateString("sv-SE", {day: "2-digit"});
    document.querySelector(".month").textContent = month + " " + day;
}