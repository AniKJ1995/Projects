`use strict`;

const billInput = document.querySelector(".billAmount");
const tipInput = document.querySelector(".tipAmount");
const btnEl = document.querySelector(".btn");
const totalEl = document.getElementById("total");

function calculateTotal() {
  const billAmount = Number(billInput.value);
  const tipAmount = Number(tipInput.value);

  let total = (billAmount * tipAmount) / 100;
  total = total + billAmount;

  totalEl.textContent = `Total:${total}`;
  totalEl.classList.remove("hidden");
}

btnEl.addEventListener("click", calculateTotal);
