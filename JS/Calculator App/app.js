var inputElement = document.getElementById("inputField");

function getValue(data) {
  inputElement.value += data;
}

function clrAll() {
  inputElement.value = "";
}

function square() {
  inputElement.value = inputElement.value * inputElement.value;
}

function deleteChar() {
  inputElement.value = inputElement.value.slice(0, -3);
}

function equal() {
  inputElement.value = eval(inputElement.value);
}
