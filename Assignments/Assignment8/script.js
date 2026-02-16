/* ===== Mobile menu toggle ===== */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuArrow = document.getElementById("menuArrow");

if (menuBtn && mobileMenu && menuArrow) {
  menuBtn.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
      menuArrow.textContent = "▼";
    } else {
      mobileMenu.style.display = "block";
      menuArrow.textContent = "▲";
    }
  });
}

/* ===== Exercise Toggle ===== */
const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");
const ex1 = document.getElementById("ex1");
const ex2 = document.getElementById("ex2");

function focusTimeInput() {
  // try native time input first
  const native = document.getElementById("classTime");
  const fallback = document.getElementById("classTimeFallback");

  if (native && !native.classList.contains("hidden")) {
    try {
      native.focus();
      if (typeof native.showPicker === "function") {
        native.showPicker(); // open native picker where supported
      }
    } catch (err) {
      native.focus();
    }
    return;
  }

  if (fallback) {
    fallback.focus();
  }
}

function showExercise(which) {
  if (!ex1 || !ex2 || !ex1Btn || !ex2Btn) return;
  if (which === 1) {
    ex1.classList.remove("hidden");
    ex2.classList.add("hidden");
    ex1Btn.classList.add("active");
    ex2Btn.classList.remove("active");
  } else {
    ex2.classList.remove("hidden");
    ex1.classList.add("hidden");
    ex2Btn.classList.add("active");
    ex1Btn.classList.remove("active");
    // ensure the time input is focused when showing exercise 2
    setTimeout(focusTimeInput, 40);
  }
}

if (ex1Btn && ex2Btn) {
  ex1Btn.addEventListener("click", () => showExercise(1));
  ex2Btn.addEventListener("click", () => showExercise(2));
}

/* ===== Exercise 1 Slider ===== */
const range = document.getElementById("minutesRange");
const rangeValue = document.getElementById("rangeValue");
const rangeText = document.getElementById("rangeText");
const rangeEmoji = document.getElementById("rangeEmoji");

function updateMessage(value) {
  if (!rangeValue) return;
  const v = Number(value);
  rangeValue.textContent = v;

  if (rangeEmoji) {
    if (v > 45) rangeEmoji.textContent = "🥓";
    else if (v >= 30) rangeEmoji.textContent = "☕";
    else if (v >= 15) rangeEmoji.textContent = "📚";
    else rangeEmoji.textContent = "🏃";
  }

  if (rangeText) {
    if (v > 45) rangeText.textContent = "More than 45 minutes — bacon and eggs time!";
    else if (v >= 30) rangeText.textContent = "30–45 minutes — coffee break!";
    else if (v >= 15) rangeText.textContent = "15–30 minutes — study time!";
    else rangeText.textContent = "Less than 15 minutes — hurry!";
  }
}

if (range) {
  updateMessage(range.value);
  range.addEventListener("input", (e) => updateMessage(e.target.value));
}

/* ===== Exercise 2 Countdown (robust) ===== */
const countMinutes = document.getElementById("countMinutes");
const countMessage = document.getElementById("countMessage");
const updateBtn = document.getElementById("updateCount");
// primary/native time input (may or may not exist)
const classTimeInput = document.getElementById("classTime");
// optional fallback text input with id "classTimeFallback" (if present)
const classTimeFallback = document.getElementById("classTimeFallback");

function parseTimeString(t) {
  if (!t || typeof t !== "string") return null;
  const m = t.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const hh = parseInt(m[1], 10);
  const mm = parseInt(m[2], 10);
  if (Number.isNaN(hh) || Number.isNaN(mm)) return null;
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  return { hours: hh, minutes: mm };
}

function supportsTimeInput() {
  const input = document.createElement("input");
  input.setAttribute("type", "time");
  return input.type === "time";
}

function getSelectedTime() {
  // Prefer native input if it exists and has a value
  if (classTimeInput && classTimeInput.value) {
    const parsed = parseTimeString(classTimeInput.value);
    if (parsed) return parsed;
  }
  // fallback to fallback input if present
  if (classTimeFallback && classTimeFallback.value) {
    const parsed = parseTimeString(classTimeFallback.value.trim());
    if (parsed) return parsed;
  }
  return null;
}

/**
 * updateCountdown: uses selected time (same day) to compute difference in minutes
 * Positive = minutes until class. Negative = minutes since class started.
 */
function updateCountdown() {
  if (!countMinutes || !countMessage) return;

  const sel = getSelectedTime();
  if (!sel) {
    countMessage.textContent = "Please enter a valid class time (HH:MM).";
    countMinutes.textContent = "—";
    return;
  }

  const now = new Date();
  const classDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    sel.hours,
    sel.minutes,
    0,
    0
  );

  const diff = Math.round((classDate - now) / 60000); // minutes

  // numeric display
  if (diff > 0) {
    countMinutes.textContent = diff + (diff === 1 ? " minute" : " minutes");
  } else if (diff === 0) {
    countMinutes.textContent = "0 minutes — now!";
  } else {
    const a = Math.abs(diff);
    countMinutes.textContent = a + (a === 1 ? " minute ago" : " minutes ago");
  }

  // message buckets
  if (diff > 15) {
    countMessage.textContent = "Plenty of time — relax! 😎";
  } else if (diff > 10) {
    countMessage.textContent = "Getting close! 📚";
  } else if (diff > 5) {
    countMessage.textContent = "Almost time! ⏳";
  } else if (diff >= 0) {
    countMessage.textContent = "Class is starting! 🏃";
  } else if (diff >= -5) {
    countMessage.textContent = "Class started recently! 👀";
  } else if (diff >= -15) {
    countMessage.textContent = "You're a little late! 😬";
  } else {
    countMessage.textContent = "Class started a while ago! 🚨";
  }
}

// attach update handler safely
if (updateBtn) {
  updateBtn.addEventListener("click", updateCountdown);
}

// also try to respond to changes in inputs
if (classTimeInput) {
  classTimeInput.addEventListener("change", updateCountdown);
}
if (classTimeFallback) {
  classTimeFallback.addEventListener("input", () => {
    // give visual feedback if format looks invalid
    const ok = parseTimeString(classTimeFallback.value.trim());
    classTimeFallback.style.borderColor = ok ? "" : "#f87171";
  });
}

// If Exercise 2 becomes visible via your existing handlers, ensure focus works.
// If your HTML uses ex2Btn click to show the panel, that already calls showExercise(2).
// But just in case, add a global mutation observer to focus input when ex2 is shown.
(function watchForEx2Show() {
  if (!ex2) return;
  const observer = new MutationObserver(() => {
    const isHidden = ex2.classList.contains("hidden");
    if (!isHidden) {
      // when ex2 becomes visible, focus the time input
      setTimeout(focusTimeInput, 40);
    }
  });
  observer.observe(ex2, { attributes: true, attributeFilter: ["class"] });
})();

// initial safe call to set slider text if present
if (range) updateMessage(range.value);
