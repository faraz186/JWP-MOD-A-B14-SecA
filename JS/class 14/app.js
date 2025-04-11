// var divELement = document.getElementById("container");

// divELement.innerHTML = "<h1>Hello World</h1>";

// console.log(divELement);

// DOM (Document Object Model)

// it is like a tree structure create when your html
// file connect with js.

// text is a junk artifact or garbage value.

// console.log(document.childNodes[0].childNodes[1].childNodes);

var divELement = document.getElementById("main");

var insideElements = divELement.getElementsByTagName("p");

for (var i = 0; i < insideElements.length; i++) {
  console.log(insideElements[i]);
}

// var allParas = document.getElementsByTagName("p");
