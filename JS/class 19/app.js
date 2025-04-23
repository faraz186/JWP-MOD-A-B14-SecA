// function saveData() {
//   var name = document.getElementById("name");
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");

//   var getDataFromLocalStorage = localStorage.getItem("stdInfo");

//   var arr = JSON.parse(getDataFromLocalStorage);

//   if (!arr) {
//     var arr = [];
//   }

//   console.log(arr);

//   var userObj = {
//     userName: name.value,
//     userEmail: email.value,
//     userPassword: password.value,
//   };

//   arr.push(userObj);

//   localStorage.setItem("stdInfo", JSON.stringify(arr));
// }

// template literals

// var firstName = "Muhammad";

// var lastName = "faraz";

// var age = 25;

// console.log(
//   `Hello my name is ${firstName} ${lastName} and I am ${age} years old`
// );

// console.log("hello my name is " + firstName + " " + lastName + "and I am " + age + " years old");
