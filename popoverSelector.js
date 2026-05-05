function setYear() {
  document.querySelector(".year-selector").innerHTML = year;
}
function SetMonth(year, month) {
  let monthStr = new Date(year, month).toLocaleDateString("sv-SE", {
    month: "long",
  });

  document.querySelector(".month-button").textContent = monthStr + " " + year;
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
