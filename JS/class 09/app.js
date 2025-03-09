var num = 3.8;

console.log(Math.floor(num));

var num1 = Math.random() * 10;

console.log(Math.round(num1));



var num = parseInt(prompt("enter a number"));

console.log(typeof num.toString());

var num = Math.random().toFixed(3);

console.log(Number(num));



// new Date() is a js bultin constructor function

var daysArr = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];

var date = new Date();

console.log(date.getTime());

console.log(daysArr[date.getDay()]);

console.log(date.slice(0, 15));



var specificDate = new Date("Sep 18, 2017 15:12:55");

console.log(specificDate);

var date = new Date();

date.setFullYear(2020);


date.setMonth(11);

console.log(date);



// function

function greeting() {
  console.log("Welcome User!!!");
}

greeting();
greeting();
greeting();


function add() {
  console.log(num1 + num2);
}

add();
