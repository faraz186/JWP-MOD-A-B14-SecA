var input = prompt("Enter your city");

var firstChar = input.slice(0, 1).toUpperCase();

var remainChar = input.slice(1).toLowerCase();

var updateInput = firstChar + remainChar;

var citiesArr = ["Karachi", "Lahore", "Multan"];

for (var i = 0; i < citiesArr.length; i++) {
  if (updateInput === citiesArr[i]) {
    console.log("hire");
  }
}



var month = prompt("Enter a month");

var charsInMonth = month.length;

var monthAbbrev;

if (charsInMonth > 3) {
  monthAbbrev = month.slice(0, 3);
}

console.log(monthAbbrev);



var str = prompt("Enter a sentence");

for (var i = 0; i < str.length; i++) {
  if (str.slice(i, i + 2) === "  ") {
    console.log("Double space found..");
  }
}



var text =
  "The New Yorker World War II magazine doesn't allow the phrase World War II. They say it should be World War II";

var replaceText = text.replaceAll("World War II", "The Second World War");

console.log(replaceText);



var indexNum = text.indexOf("World War II");

var firstText = text.slice(0, indexNum);

var replaceText = "The Second World War";

var remainText = text.slice(indexNum + 12);

console.log(firstText + replaceText + remainText);

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "The Second World war" + text.slice(i + 12);
  }
}

console.log(text);
