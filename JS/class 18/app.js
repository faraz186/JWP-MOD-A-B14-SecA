// function popup() {
//   try {
//     alert("welcome user!!");
//   } catch (error) {
//     console.log(error);
//   }
// }

// popup();

// function password() {
//   var input = document.getElementById("password").value;
//   if (input.length < 8) {
//     console.warn("Please enter at least 8 characters.");
//   }
// }

// local storage

// var studObj = {
//   name: "jaffar",
//   email: "jaffar@gmail.com",
//   city: "karachi",
//   age: 29,
// };

// set data in local storage

// localStorage.setItem("biodata", JSON.stringify(studObj));

// localStorage.setItem("name", "faraz");
// localStorage.setItem("city", "karachi");
// localStorage.setItem("gender", "male");

// get data from local storage

// var getData = localStorage.getItem("biodata");

// console.log(JSON.parse(getData));

// delete single data from local storage

// localStorage.removeItem("city");

// localStorage.removeItem("gender");

// delete all data from local storage

// localStorage.clear();

// var arrObj = [
//   {
//     name: "faraz",
//     age: 25,
//     city: "karachi",
//   },
//   {
//     name: "ahsan",
//     age: 20,
//     city: "lahore",
//   },
//   {
//     name: "kashan",
//     age: 32,
//     city: "karachi",
//   },
// ];

// console.log(arrObj);

// localStorage.setItem("data", JSON.stringify(arrObj));

// console.log(JSON.stringify(studObj));

// localStorage.setItem("email", "faraz@gmail.com");

// localStorage.setItem("age", 25);

// localStorage.setItem("status", true);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// localStorage.setItem("data", JSON.stringify(arr));
