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
