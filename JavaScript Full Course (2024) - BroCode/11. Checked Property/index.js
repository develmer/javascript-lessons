/*
.checked = property that determines the checked state of an HTML checkbox or radio button element
*/

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed`;
  } else {
    subResult.textContent = `You are not subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with VISA`;
  } else if (mastercardBtn) {
    paymentResult.textContent = `You are paying with MASTERCARD`;
  } else {
    paymentResult.textContent = `You are paying with PAYPAL`;
  }
};
