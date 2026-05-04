let month = new Date().toLocaleDateString("sv-SE", { month: "numeric" }) - 1;
let year = new Date().toLocaleDateString("sv-SE", { year : "numeric"});

document.addEventListener("DOMContentLoaded", main)

function main() {
    SetMonth(year, month);
    SetupListeners();
    renderCalendar()
    GetDate(year, month);
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

function GetDate(year, month) {
    let day = new Date().toLocaleDateString("sv-SE", { day: "2-digit" });
    document.querySelector(".date-and-time-section").textContent = year + "-" + month + "-" + day;
}

function SetMonth(year, month) {
    let monthStr = new Date(year, month).toLocaleDateString("sv-SE", { 
        month: "long" 
    });

    document.querySelector(".month").textContent = monthStr + " " + year;
}

function SetupListeners() {
    document.addEventListener("click", (event) => {
        if (event.target.matches(".left-btn-month")) {
            month--;

            if (month < 0) {
                month = 11;
                year--;
            }

            renderCalendar();
            SetMonth(year, month);
            GetDate(year, month);
        }

    });
    document.addEventListener("click", (event) => {
        if (event.target.matches(".right-btn-month")) {
            month++;
            
            if (month > 11) {
                month = 0;
                year++;
            }

            renderCalendar();
            SetMonth(year, month);
            GetDate(year, month);
        }

    });
}