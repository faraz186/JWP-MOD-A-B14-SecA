// function off() {
//   var imgElement = document.getElementById("img");

//   imgElement.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqETSpEsDSZ7g1Bc_RrtdGVC5j069NoFHO8ZIt5B43VsHlIHH7fyRst8fNcNYD-YPnsPo&usqp=CAU";
// }

// function on() {
//   var imgElement = document.getElementById("img");

//   imgElement.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2n3UoGIkHaJb9rXIOhfILryhzd1rpJmC_qcpWCRzdOhKd_EKHCq-YWRHlkYP6GUpuRI&usqp=CAU";
// }

// function combine() {
//   var btnElement = document.getElementById("btn");

//   var imgElement = document.getElementById("img");

//   if (btnElement.innerHTML === "Off") {
//     imgElement.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqETSpEsDSZ7g1Bc_RrtdGVC5j069NoFHO8ZIt5B43VsHlIHH7fyRst8fNcNYD-YPnsPo&usqp=CAU";

//     btnElement.innerHTML = "On";
//   } else {
//     imgElement.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2n3UoGIkHaJb9rXIOhfILryhzd1rpJmC_qcpWCRzdOhKd_EKHCq-YWRHlkYP6GUpuRI&usqp=CAU";

//     btnElement.innerHTML = "Off";
//   }
// }

// function expandPara() {
//   var para = document.getElementById("para");

//   var anchorElement = document.getElementById("link");

//   if (anchorElement.innerHTML === "read more") {
//     para.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima ab cum tempora consequuntur architecto quam, sapiente obcaecati doloremque, minus voluptatibus neque eaque incidunt. Nisi qui sed ullam perspiciatis doloremque modi eaque sequi rerum id ipsam. Obcaecati, quasi sit assumenda quisquam ad veritatis reiciendis dolorum voluptate nobis saepe earum maiores!";

//     anchorElement.innerHTML = "read less";
//   } else {
//     para.innerHTML =
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, minima ab ";

//     anchorElement.innerHTML = "read more";
//   }
// }

// function makeInvisible() {
//   var imgElement = document.getElementById("img");

//   imgElement.className += " hidden";

//   console.log(imgElement);
// }

// var a = 10;

// a += 1;

// a = a + 1

// console.log(a);

// function anchor() {
//   var a = document.getElementById("anchor");

//   a.innerText = "Google";

//   a.href = "https://www.google.com";

//   a.target = "_blank";

//   a.style.color = "red";
//   a.style.border = "2px solid green";
//   a.style.backgroundColor = "black";
//   a.style.boxShadow = "0 0 20px green";
// }

// anchor();

// console.log(document);

// var allParas = document.getElementsByTagName("p");

// for (var i = 0; i < allParas.length; i++) {
//   console.log(allParas[i]);
// }

function func() {
  var dropdown = document.getElementById("dropdown");

  console.log(dropdown.value);
}

function func() {
  var radio = document.getElementsByTagName("input");

  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i].value);
    }
  }
}
