const weeklyPercent = document.querySelector("#weeklyPercent");
const weeklyProgressFill = document.querySelector("#weeklyProgressFill");
const topicsCovered = document.querySelector("#topicsCovered");
const topicDelta = document.querySelector("#topicDelta");
const studyTime = document.querySelector("#studyTime");
const studyTimeNote = document.querySelector("#studyTimeNote");
const weekDays = document.querySelectorAll("#weekDays span");

function readCompletedTopics() {
  return ["physics", "chemistry", "mathematics"].reduce((total, subject) => {
    const entries = JSON.parse(localStorage.getItem(`completed-${subject}`) || "[]");
    return total + entries.length;
  }, 0);
}

function readSchedule() {
  return JSON.parse(localStorage.getItem("studysprint-timetable") || "null") || {};
}

function renderDashboard() {
  const completedTopics = readCompletedTopics();
  const totalTopics = 36;
  const completion = Math.min(100, Math.round((completedTopics / totalTopics) * 100));
  const schedule = readSchedule();
  const dailyMinutes = {};
  let totalMinutes = 0;

  weekDays.forEach((day) => {
    const minutes = (schedule[day.dataset.day] || []).reduce(
      (total, row) => total + (Number(row.minutes) || 0),
      0
    );
    dailyMinutes[day.dataset.day] = minutes;
    totalMinutes += minutes;
  });

  const maxMinutes = Math.max(60, ...Object.values(dailyMinutes));
  weeklyPercent.textContent = `${completion}%`;
  weeklyProgressFill.style.width = `${completion}%`;
  topicsCovered.textContent = `${completedTopics} topics`;
  topicDelta.textContent = completedTopics ? `${completedTopics} completed so far` : "Start planning today";
  studyTime.textContent = `${(totalMinutes / 60).toFixed(1)} hrs`;
  studyTimeNote.textContent = totalMinutes ? "From your timetable" : "Add blocks in Study Plan";

  weekDays.forEach((day) => {
    const height = Math.round((dailyMinutes[day.dataset.day] / maxMinutes) * 45);
    day.style.setProperty("--day-height", `${height}px`);
  });
}

renderDashboard();
window.addEventListener("storage", renderDashboard);
