var age = +prompt("Enter your age");
                      
var weight = +prompt("Enter your weight");
 
var city = prompt("Enter your city");


// Nested If Statement


if (city == "karachi") {
  if (age >= 18 || weight >= 90) 
  {
    console.log("join now..");
  }   
  else {
    console.log("next time..");
  }
} else {
  console.log("city not match");
}


// logical operator program


if ((age >= 18 || weight >= 90) && city == "karachi") {
  console.log("join now..");
} 
else {
  console.log("next time..");
}


// hiring program


var programming_lang = prompt("Enter your programming_lang");

if (programming_lang === "js") 
{
  var experience = +prompt("Enter your experience");
  if (experience >= 2) 
    {
        var city = prompt("Enter your city");
        if (city === "karachi") 
        {
      console.log("hire!!");
    } 
        else {
          console.log("karachi ajao!!");
        }
      } 
  else {
        console.log("experience lay kr ao...");
          }
        } 
else {
    console.log("JS SEEKHO!!");
}


// Array Chap 15


// var city1 = "karachi";
// var city2 = "lahore";
// var city3 = "multan";
// var city4 = "peshawar";
// var city5 = "quetta";
// var city6 = "Islamabad";


// single variable with multiple data store

// index number:   0     1     2       3         4

var cities = ["karachi", 100, true, "faraz", undefined];

cities[3] = "ahmed";
cities[4] = null;

console.log(cities);



var num = ["faraz", "karachi", 24, "male", "instructor"];

num[1000] = true;

console.log(num);

var arr = ["karachi", "lahore", "peshawar"];


// array methods

// pop()
// push()
// shift()
// unshift()
// splice()
// slice()

arr.pop()
arr.pop();

console.log(arr);

var names = ["faraz", "farooq", "hamza", "ahmed", "ali", 12];

names.pop();
names.pop();
names.pop();

console.log(names);

// arr.push()

var cities = ["karachi"];

cities.push("lahore", 12);
console.log(cities);


// arr.shift()

var names = ["faraz", "farooq", "hamza", "ahmed", "ali"];
names.shift();
names.shift();

console.log(names);

var countries = ["Pakistan", "India", "Afghanistan"];
countries.pop();
countries.shift();
// countries.push("");
console.log(countries);


// arr.unshift()


var names = ["faraz", "farooq", "hamza", "ahmed", "ali"];

names.unshift("iqrash");

console.log(names);

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.unshift(-1, 0);

console.log(arr);

// arr.splice()

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// splice(index number, no of items to delete, then add values if you want)

arr.splice(2, 4, "faraz", "hamza", "ahsan");

arr.splice(8, 0, false);

console.log(arr);

// arr.slice();

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var copy = arr.slice(1);
console.log(copy);
