// var paragraph = document.getElementById("para");

// var paragraph = document.childNodes[1].childNodes[2].childNodes[1];

// console.log(paragraph.nodeName);

// var div = document.getElementById("main");

// var para = document.getElementById("para");

// console.log(para.parentNode);

// settimeout()

// function timer() {
//   alert("welcome user!!");
// }

// setTimeout(timer, 4000);

// setinterval()

// var interval;

// function timer() {
//   console.log("interval increment");
// }

// interval = setInterval(timer, 1000);

// clearinterval()

// function stop() {
//   clearInterval(interval);
// }

// var input = document.getElementById("input");

// console.log(input.hasAttribute("id"));

// console.log(input.getAttribute("id"));

// var link = document.getElementById("link");

// link.setAttribute("href", "https://www.facebook.com");

// link.setAttribute("target", "_blank");

// link.innerHTML = "facebook";

// link.href = "https:www.facebook.com";

// link.target = "_blank";

// var anchor = document.getElementById("link");

// console.log(anchor.attributes[2].nodeValue);

// var h1Element = document.createElement("h1");

// var pElement = document.createElement("p");

// var pText = document.createTextNode("lorem ipsum dolor");

// var h1Text = document.createTextNode("hello world");

var divELement = document.getElementById("main");

// h1Element.appendChild(h1Text);

// pElement.appendChild(pText);

// h1Element.setAttribute("class", "heading");

// divELement.appendChild(h1Element);

// console.log(h1Element);

// console.log(pElement);

// pElement.style.color = "red";

var divELement = document.getElementById("main");

var btnElement = document.createElement("button");

var btnText = document.createTextNode("Submit");

btnElement.appendChild(btnText);

btnElement.setAttribute("onclick", "submit()");

divELement.appendChild(btnElement);

console.log(btnElement);

function submit() {
  alert("form submitted");
}
