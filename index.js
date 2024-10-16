let degrees = document.querySelector("#degrees");
let unitFrom = document.querySelector("#unitFrom");
let unitTo = document.querySelector("#unitTo");
let buttonConvert = document.querySelector("#buttonConvert");
let resultCardDiv = document.querySelector(".resultCard");

// Función que habilita o deshabilita el botón
function toggleButtonState() {
  if (degrees.value && unitFrom.value && unitTo.value) {
    buttonConvert.disabled = false;
    buttonConvert.classList.add("active");
  } else {
    buttonConvert.disabled = true;
    buttonConvert.classList.remove("active");
  }
}

// Escuchar cambios en los inputs y selects
degrees.addEventListener("input", toggleButtonState);
unitFrom.addEventListener("change", toggleButtonState);
unitTo.addEventListener("change", toggleButtonState);

function degreesConvert(degreesValue) {
  let result;
  if (unitFrom.value == "fahrenheit" && unitTo.value == "celsius") {
    result = (degreesValue - 32) * 5 / 9;
  } else if (unitFrom.value == "celsius" && unitTo.value == "fahrenheit") {
    result = (degreesValue * 9) / 5 + 32;
  } else if (unitFrom.value == "celsius" && unitTo.value == "kelvin") {
    result = degreesValue + 273.15;
  } else if (unitFrom.value == "fahrenheit" && unitTo.value == "kelvin") {
    result = (degreesValue + 459.67) * 5 / 9;
  } else if(unitFrom.value == "kelvin" && unitTo.value == "fahrenheit"){
    result = (degreesValue - 273.15) * 9/5 + 32;
  } else if(unitFrom.value == "kelvin" && unitTo.value == "celsius"){
    result = degreesValue - 273.15;
  } else if(unitFrom.value.length == unitTo.value.length){
    result = degreesValue
  }
  return result;
}

function resultCard(result, degreesValue) {
  resultCardDiv.innerHTML = `
    <span>
      <p><strong>${unitFrom.value}: </strong>${degreesValue}°</p>
      <p> = </p>
      <p><strong>${unitTo.value}: </strong>${result}°</p>
    </span>
  `;
  resultCardDiv.classList.add("active");
}

buttonConvert.addEventListener("click", function (event) {
  event.preventDefault();
  let degreesValue = parseFloat(degrees.value);
  let result = degreesConvert(degreesValue);
  resultCard(result, degreesValue);
});
