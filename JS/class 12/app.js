// Events (Links)

// function greet() {
//   alert("hello developers..");
// }

// function change(e) {
//   e.style.backgroundColor = "green";
//   e.style.color = "white";
//   e.style.border = "2px solid black";
//   e.style.boxShadow = "0 0 20px black";
// }

// function changeLink(b) {
//   b.style.textDecoration = "none";
// }

// function getInput() {
//     console.log("button click");

//   var getInputField = document.getElementById("meraData");

//   if (getInputField.value.trim()) {
//     console.log(getInputField.value);
//   } else {
//     alert("fill the input field");
//   }

//   if (getInputField.value === "") {

//     alert("fill the input field");
//   } else {
//     console.log(getInputField.value);

//   }

//   if (!getInputField.value) {

//         alert("fill the input field");
//       } else {
//         console.log(getInputField.value);

//       }
// }

// function setInputVal() {
//   var getInputField = document.getElementById("meraData");

//   getInputField.value = "faraz";
// }

function readPara() {
  var paragraphElement = document.getElementById("para");

  console.log(paragraphElement.innerText);

  console.log(paragraphElement.innerHTML);
}

readPara();
