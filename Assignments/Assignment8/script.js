// Toggle Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuArrow = document.getElementById("menuArrow");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    menuArrow.textContent = "▼";
  } else {
    mobileMenu.style.display = "block";
    menuArrow.textContent = "▲";
  }
});

// Exercise Switch
const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");
const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");

ex1Btn.addEventListener("click", () => {
  ex1.classList.remove("hidden");
  ex2.classList.add("hidden");
  ex1Btn.classList.add("active");
  ex2Btn.classList.remove("active");
});

ex2Btn.addEventListener("click", () => {
  ex2.classList.remove("hidden");
  ex1.classList.add("hidden");
  ex2Btn.classList.add("active");
  ex1Btn.classList.remove("active");
});

// Exercise 1 Slider
const range = document.getElementById("minutesRange");
const rangeValue = document.getElementById("rangeValue");
const rangeText = document.getElementById("rangeText");
const rangeEmoji = document.getElementById("rangeEmoji");

function updateMessage(value) {
  rangeValue.textContent = value;

  if (value > 45) {
    rangeEmoji.textContent = "🥓";
    rangeText.textContent = "More than 45 minutes — let's have bacon and eggs!";
  } else if (value >= 30) {
    rangeEmoji.textContent = "☕";
    rangeText.textContent = "30–45 minutes — coffee time!";
  } else if (value >= 15) {
    rangeEmoji.textContent = "📚";
    rangeText.textContent = "15–30 minutes — study time!";
  } else {
    rangeEmoji.textContent = "🏃";
    rangeText.textContent = "Less than 15 minutes — hurry!";
  }
}

range.addEventListener("input", (e) => {
  updateMessage(Number(e.target.value));
});

updateMessage(range.value);

// Exercise 2 Countdown
const countMinutes = document.getElementById("countMinutes");
const countMessage = document.getElementById("countMessage");
const updateBtn = document.getElementById("updateCount");

function updateCountdown() {
  const now = new Date();
  const classTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    8,
    30
  );

  const diff = Math.round((classTime - now) / 60000);

  if (diff > 15) {
    countMessage.textContent = "Plenty of time!";
  } else if (diff > 10) {
    countMessage.textContent = "Getting close!";
  } else if (diff > 5) {
    countMessage.textContent = "Almost time!";
  } else if (diff >= 0) {
    countMessage.textContent = "Class is starting!";
  } else if (diff >= -5) {
    countMessage.textContent = "Class started recently!";
  } else if (diff >= -15) {
    countMessage.textContent = "You're a bit late!";
  } else {
    countMessage.textContent = "Class started a while ago!";
  }

  countMinutes.textContent = Math.abs(diff) + " minutes";
}

updateBtn.addEventListener("click", updateCountdown);
updateCountdown();
