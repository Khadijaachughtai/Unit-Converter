let inputEl = document.getElementById("input");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
const meterToFeet = 3.281;
const litreToGallon = 0.264;
const kgToLbs = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = parseFloat(inputEl.value);

  lengthEl.textContent = `${baseValue.toFixed(3)} meter(s) = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue.toFixed(3)} feet = ${(
    baseValue / meterToFeet
  ).toFixed(3)} meter(s)`;

  volumeEl.textContent = `${baseValue.toFixed(3)} litre(s) = ${(
    baseValue * litreToGallon
  ).toFixed(3)} gallon(s) | ${baseValue.toFixed(3)} gallon(s) = ${(
    baseValue / litreToGallon
  ).toFixed(3)} litre(s)`;

  massEl.textContent = `${baseValue.toFixed(3)} kilogram(s) = ${(
    baseValue * kgToLbs
  ).toFixed(3)} pound(s) | ${baseValue.toFixed(3)} pound(s) = ${(
    baseValue / kgToLbs
  ).toFixed(3)} kilogram(s)`;
});
