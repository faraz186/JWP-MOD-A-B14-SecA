// [] ==> array

// {} ==> object

// key : value

var arr = [1, 2, 3, 4, 5, 6];

arr[6] = 5000;
console.log(arr[1]);

// var Stdobj = {
//   name: "faraz",
//   age: 25,
//   city: "karachi",
// };

// console.log(Stdobj["age"], Stdobj["name"]);

// var Stdobj = {
//   name: "faraz",
//   age: 25,
//   city: "karachi",
// };

// Stdobj.gender = "male";

// Stdobj.courses = ["web and mobile", "data science", "GD"];

// Stdobj.address = {
//   city: "karachi",
//   zipCode: 75950,
//   longitude: 2131,
//   latitude: 4864,
// };

// console.log(Stdobj["courses"][1]);

var Stdobj = {
  name: "faraz",
  age: 25,
    city: "karachi",
};

delete Stdobj.age;

console.log("city" in Stdobj);
