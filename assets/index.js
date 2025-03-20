const userDate = document.getElementById("days-left");
const resultText = document.getElementById("text-days-left");

const declinationDays = (days) => {
  const lastNum = days % 10;
  const lastTwoNum = days % 100;

  if (lastNum === 1 && lastTwoNum !== 11) {
    return "день";
  } else if (
    lastNum >= 2 &&
    lastNum <= 4 &&
    !(lastTwoNum >= 12 && lastTwoNum <= 14)
  ) {
    return "дня";
  } else {
    return "дней";
  }
};

const calculateDays = () => {
  const userDateStr = userDate.value;

  if (userDateStr != "") {
    const userDateTimestamp = Date.parse(userDateStr);
    const currentTimestamp = Date.now();
    const timeDiff = userDateTimestamp - currentTimestamp;
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    resultText.textContent = `До вашего дня рождения осталось ${daysLeft} ${declinationDays(
      daysLeft
    )}`;
    resultText.classList.remove("redtext");
  } else {
    resultText.textContent = `Пожалуйста, введите дату рождения`;
    resultText.classList.add("redtext");
  }
};

const buttonCalc = document.querySelector("button");
buttonCalc.addEventListener("click", calculateDays);
