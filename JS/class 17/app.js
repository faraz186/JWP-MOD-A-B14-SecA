// Objects (Chapter 69)

// var obj = {
//   name: "faraz",
//   age: 24,
//   email: "faraz@gmail.com",
//   city: {
//     cityName: "karachi",
//     district: "central",
//     zipCode: 11234,
//   },
//   courses: ["web & mobile", "data science", "GD"],
// };

// delete obj.email;

// console.log(obj);

// var obj = {
//   name: "faraz",
//   age: 24,
//   email: "faraz@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// obj.getName()

// console.log();

// document.write()

// In js there are three types of function

// function declaration

// function abc() {
//   return 100;
// }

// console.log(abc());

// anonymous function / regular function

// var greeting = function () {
//   console.log("function running...");
// };

// greeting();

// arrow function

// var stdObj1 = {
//     name:'jawwad',
//     gender:'male',
//     age:25,
//     city:"karachi"
// }

// constructor

// function Student(name, age, gender, city) {
//   this.stdName = name;
//   this.stdAge = age;
//   this.stdGender = gender;
//   this.stdCity = city;

// }

// var obj1 = new Student("faraz", 24, "male", "karachi");

// var obj3 = new Student("nabeel", 20, "male", "lahore");

// console.log(obj3);

// constructor for methods

// function Student(name, age, gender, city) {
//   this.stdName = name;
//   this.stdAge = age;
//   this.stdGender = gender;
//   this.stdCity = city;
// }

// Student.prototype.getAge = function () {
//   return this.stdAge;
// };

// var obj1 = new Student("faraz", 24, "male", "karachi");

// console.log(obj1.stdName);

// var stdObj1 = {
//   name: "jawwad",
//   gender: "male",
//   age: 25,
//   city: "karachi",
//   getBiodata: function () {
//     return "My name is " + this.name;
//   },
// };

// console.log(stdObj1);

// for-in loop

// var stdObj1 = {
//   name: "jawwad",
//   gender: "male",
//   age: 25,
//   city: "karachi",
//   courses: {
//     name: "web and mobile",
//     duration: "4 months",
//     classes: "Mon-wed-fri",
//     timings: {
//       timezone: "Pakistan",
//     },
//   },
// };

// for (var keys in stdObj1) {
//   for (var innerKeys in stdObj1[keys]) {
//     console.log(innerKeys, stdObj1[keys][innerKeys]);
//   }
// }
