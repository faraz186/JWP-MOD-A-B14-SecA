// chapter no 9 (prompt)
   
var firstName = prompt("Enter your first name");

var lastName = prompt("Enter your last name");

console.log(firstName, lastName);

var firstNum = +prompt("Enter your first number");

var SecondNum = +prompt("Enter your second number");

console.log(firstNum + SecondNum);




// assignment (multiplication table)

var number = +prompt("Enter a number to generate multiplication table");

document.write(
  number,
  " x 1 = ",
  number * 1,
  "<br>",
  number,
  "x 2 = ",
  number * 2,
  "<br>",
  number,
  "x 3 = ",
  number * 3,
  "<br>",
  number,
  "x 4 = ",
  number * 4,
  "<br>",
  number,
  "x 5 = ",
  number * 5,
  "<br>",
  number,
  "x 6 = ",
  number * 6,
  "<br>",
  number,
  "x 7 = ",
  number * 7,
  "<br>",
  number,
  "x 8 = ",
  number * 8,
  "<br>",
  number,
  "x 9 = ",
  number * 9
);

// if

// else

var number = 100;

if (number === 100) {
  console.log("correct..");
}

// true
// false

// boolean value

if (false) {
  console.log("if block run");
}

// ==  "10" == 10    true

// ===  "10" === 10  false


var number = "100";

if (number === 100) {
  console.log("correct");
}

var age = +prompt("Enter your age");

if (age >= 18) {
  console.log("you are eligible for CNIC");
} else {
  console.log("you are not eligible for CNIC");
}


var city = prompt("Enter where do you live?");

if (city.toLowerCase() == "karachi")
    {

  console.log("Welcome..");

}
else {
  console.log("get out..");
}


var num1 = 10;

console.log(num);



var gender = prompt("Enter your gender");
var message;

if (gender === "male") {
  message = "Welcome Sir...";
} else if (gender === "female") {
  message = "Welcome Maam...";
} else {
  message = "incorrect value...";
}

console.log(message);


// ! toggle


if (!!true) {
  console.log("if block run..");
} else {
  console.log("else block run..");
}


var yourTicketNumber = 14515;

if (yourTicketNumber !== 487208) {
  console.log("enter please");
} else {
  console.log("better luck next time");
}



var number = "";

var number = 2;

console.log(number + number - number + number);




// chapter 13 (testing set of conditions)


// logical operator


// &&   And operator

// ||   Or operator

// age >= 18 || weight >= 90




var age = +prompt("Enter your age");

var weight = +prompt("Enter your weight");

var city = prompt("Enter your city");

if ((age >= 18 || weight >= 90) && city == "karachi") {
  console.log("join now..");
} else {
  console.log("next time..");
}



// assignment Question



var subject1 = prompt("enter subject 1 name");
var subject2 = prompt("enter subject 2 name");
var subject3 = prompt("enter subject 3 name");

var subject1_Marks = +prompt("Enter 1 subject marks");
var subject2_Marks = +prompt("Enter 2 subject marks");
var subject3_Marks = +prompt("Enter 3 subject marks");

var totalMarks = 100;

var obtainedMarks = subject1_Marks + subject2_Marks + subject3_Marks;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write(
  "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr></table>"
);
