`use strict`;

const birthDayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

function calculateAge() {
  const birthDate = birthDayEl.value;
  if (birthDate == "") {
    alert("Please Enter your date of birth");
  } else {
    const age = getAge(birthDate);
    resultEl.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
    resultEl.classList.remove("hidden");
  }
}

btnEl.addEventListener("click", calculateAge);
