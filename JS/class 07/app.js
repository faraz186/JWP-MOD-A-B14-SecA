var userInput = prompt("Enter your city");
      
var citiesArr = ["karachi", "lahore", "multan"];

for (var i = 0; i < citiesArr.length; i++) {
  if (userInput.toLowerCase() === citiesArr[i]) {
    console.log("hire");
  } else {
    console.log("not hire");
  }
}

// flags

// var userInput = prompt("Enter your city");

// var citiesArr = ["karachi", "lahore", "multan"];

// var flag = false;

// for (var i = 0; i < citiesArr.length; i++) {
//   if (userInput === citiesArr[i]) {
//     flag = true;
//     console.log("hire");
//   }
// }

// if (flag === false) {
//   console.log("not hire");
// }

// var arr = [];

// console.log("before arr ", arr);

// for (var i = 0; i <= 10; i++) {
//   arr.push(i);
// }

// console.log("after arr ", arr);

// var firstNames = [true];

// var lastNames = ["faraz", "farooq", "ali", "ahmed"];

// var fullName = [];

// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullName.push(firstNames[i] + lastNames[j]);
//   }
// }

// console.log(fullName);

var userInput = prompt("Enter your city");

var firstChar = userInput.slice(0, 1).toUpperCase();

var remainChar = userInput.slice(1).toLowerCase();

var updateInput = firstChar + remainChar;

var citiesArr = ["Karachi", "Lahore", "Multan"];

var flag = false;

for (var i = 0; i < citiesArr.length; i++) {
  if (updateInput === citiesArr[i]) {
    flag = true;
    console.log("hire");
  }
}

if (flag === false) {
  console.log("not hire");
}

// var input = prompt("Enter name please....");

// // console.log(input);

// console.log(input.slice(0, 1).toUpperCase());
