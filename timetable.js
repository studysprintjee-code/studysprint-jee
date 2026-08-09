<<<<<<< HEAD
const scheduleBody = document.querySelector("#scheduleBody");
const emptyMessage = document.querySelector("#emptyMessage");
const addRowButton = document.querySelector("#addRowButton");
const saveButton = document.querySelector("#saveButton");
const saveMessage = document.querySelector("#saveMessage");
const dayTabs = document.querySelectorAll(".day-tab");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const storageKey = "studysprint-timetable";
let selectedDay = "Monday";
let schedule = JSON.parse(localStorage.getItem(storageKey) || "null") || createStarterSchedule();

function createStarterSchedule() {
  return {
    Monday: [{ time: "06:30", subject: "Physics", focus: "Formula revision", minutes: 45, status: "Planned" }],
    Tuesday: [{ time: "17:00", subject: "Chemistry", focus: "Read one chapter", minutes: 60, status: "Planned" }],
    Wednesday: [{ time: "18:00", subject: "Mathematics", focus: "Practice problems", minutes: 60, status: "Planned" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "09:00", subject: "Physics", focus: "PYQ practice", minutes: 90, status: "Planned" }],
    Sunday: [{ time: "10:00", subject: "Mixed revision", focus: "Weekly review", minutes: 60, status: "Planned" }]
  };
}

function saveSchedule(message = "Plan saved") {
  localStorage.setItem(storageKey, JSON.stringify(schedule));
  saveMessage.textContent = message;
  window.setTimeout(() => { saveMessage.textContent = ""; }, 1800);
}

function renderSchedule() {
  const rows = schedule[selectedDay] || [];
  scheduleBody.innerHTML = "";
  emptyMessage.hidden = rows.length > 0;

  rows.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td><input class="time-input" type="time" value="${row.time}" data-field="time" data-index="${index}" /></td>
      <td>
        <select data-field="subject" data-index="${index}">
          ${["Physics", "Chemistry", "Mathematics", "Mixed revision"].map((subject) => `<option ${row.subject === subject ? "selected" : ""}>${subject}</option>`).join("")}
        </select>
      </td>
      <td><input type="text" value="${row.focus}" placeholder="Chapter or task" data-field="focus" data-index="${index}" /></td>
      <td><input class="minutes-input" type="number" min="5" step="5" value="${row.minutes}" data-field="minutes" data-index="${index}" /></td>
      <td>
        <select data-field="status" data-index="${index}">
          ${["Planned", "In progress", "Complete"].map((status) => `<option ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td><button class="remove-button" type="button" data-remove="${index}" aria-label="Remove study block">×</button></td>
    `;
    scheduleBody.appendChild(tableRow);
  });
}

function updateRow(event) {
  const field = event.target.dataset.field;
  const index = Number(event.target.dataset.index);
  if (!field || Number.isNaN(index)) return;
  schedule[selectedDay][index][field] = event.target.value;
  saveSchedule("Change saved");
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedDay = tab.dataset.day;
    dayTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderSchedule();
  });
});

scheduleBody.addEventListener("input", updateRow);
scheduleBody.addEventListener("change", updateRow);
scheduleBody.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  schedule[selectedDay].splice(Number(removeButton.dataset.remove), 1);
  saveSchedule("Study block removed");
  renderSchedule();
});

addRowButton.addEventListener("click", () => {
  schedule[selectedDay].push({ time: "18:00", subject: "Physics", focus: "New study block", minutes: 45, status: "Planned" });
  saveSchedule("Study block added");
  renderSchedule();
});

saveButton.addEventListener("click", () => saveSchedule());
renderSchedule();
=======
const scheduleBody = document.querySelector("#scheduleBody");
const emptyMessage = document.querySelector("#emptyMessage");
const addRowButton = document.querySelector("#addRowButton");
const saveButton = document.querySelector("#saveButton");
const saveMessage = document.querySelector("#saveMessage");
const dayTabs = document.querySelectorAll(".day-tab");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const storageKey = "studysprint-timetable";
let selectedDay = "Monday";
let schedule = JSON.parse(localStorage.getItem(storageKey) || "null") || createStarterSchedule();

function createStarterSchedule() {
  return {
    Monday: [{ time: "06:30", subject: "Physics", focus: "Formula revision", minutes: 45, status: "Planned" }],
    Tuesday: [{ time: "17:00", subject: "Chemistry", focus: "Read one chapter", minutes: 60, status: "Planned" }],
    Wednesday: [{ time: "18:00", subject: "Mathematics", focus: "Practice problems", minutes: 60, status: "Planned" }],
    Thursday: [],
    Friday: [],
    Saturday: [{ time: "09:00", subject: "Physics", focus: "PYQ practice", minutes: 90, status: "Planned" }],
    Sunday: [{ time: "10:00", subject: "Mixed revision", focus: "Weekly review", minutes: 60, status: "Planned" }]
  };
}

function saveSchedule(message = "Plan saved") {
  localStorage.setItem(storageKey, JSON.stringify(schedule));
  saveMessage.textContent = message;
  window.setTimeout(() => { saveMessage.textContent = ""; }, 1800);
}

function renderSchedule() {
  const rows = schedule[selectedDay] || [];
  scheduleBody.innerHTML = "";
  emptyMessage.hidden = rows.length > 0;

  rows.forEach((row, index) => {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td><input class="time-input" type="time" value="${row.time}" data-field="time" data-index="${index}" /></td>
      <td>
        <select data-field="subject" data-index="${index}">
          ${["Physics", "Chemistry", "Mathematics", "Mixed revision"].map((subject) => `<option ${row.subject === subject ? "selected" : ""}>${subject}</option>`).join("")}
        </select>
      </td>
      <td><input type="text" value="${row.focus}" placeholder="Chapter or task" data-field="focus" data-index="${index}" /></td>
      <td><input class="minutes-input" type="number" min="5" step="5" value="${row.minutes}" data-field="minutes" data-index="${index}" /></td>
      <td>
        <select data-field="status" data-index="${index}">
          ${["Planned", "In progress", "Complete"].map((status) => `<option ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td><button class="remove-button" type="button" data-remove="${index}" aria-label="Remove study block">×</button></td>
    `;
    scheduleBody.appendChild(tableRow);
  });
}

function updateRow(event) {
  const field = event.target.dataset.field;
  const index = Number(event.target.dataset.index);
  if (!field || Number.isNaN(index)) return;
  schedule[selectedDay][index][field] = event.target.value;
  saveSchedule("Change saved");
}

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedDay = tab.dataset.day;
    dayTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderSchedule();
  });
});

scheduleBody.addEventListener("input", updateRow);
scheduleBody.addEventListener("change", updateRow);
scheduleBody.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  schedule[selectedDay].splice(Number(removeButton.dataset.remove), 1);
  saveSchedule("Study block removed");
  renderSchedule();
});

addRowButton.addEventListener("click", () => {
  schedule[selectedDay].push({ time: "18:00", subject: "Physics", focus: "New study block", minutes: 45, status: "Planned" });
  saveSchedule("Study block added");
  renderSchedule();
});

saveButton.addEventListener("click", () => saveSchedule());
renderSchedule();
>>>>>>> 1e88c0d0eee2de08cc3ed4e82c9c198e5849b700
