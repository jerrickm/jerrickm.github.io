const geometryCard = document.getElementById("geometryCard");
const triangle = document.getElementById("triangle");

const toggleTriangle = () => {
  triangle.classList.toggle("show");
};

geometryCard.addEventListener("click", toggleTriangle);
geometryCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleTriangle();
  }
});

// Date picker
const datePicker = document.getElementById("datePicker");
const dateOutput = document.getElementById("dateOutput");

const formatDate = (iso) => {
  const [year, month, day] = iso.split("-");
  return `${month}/${day}/${year}`;
};

datePicker.addEventListener("input", () => {
  if (!datePicker.value) {
    dateOutput.textContent = "No date selected";
    return;
  }

  dateOutput.textContent =
    `Selected date: ${formatDate(datePicker.value)}`;
});

// Image swap
const weatherImage = document.getElementById("weatherImage");
const originalImage = "jerrickm/jerrickm.github.io/Assignments/javabuttons/javabuttonsimg/js9.png";
const sunnyImage = "jerrickm/jerrickm.github.io/Assignments/javabuttons/javabuttonsimg/js10.png";

let isSunny = false;

const swapImage = () => {
  isSunny = !isSunny;
  weatherImage.src = isSunny ? sunnyImage : originalImage;
};

weatherImage.addEventListener("click", swapImage);
weatherImage.tabIndex = 0;
weatherImage.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    swapImage();
  }
});
