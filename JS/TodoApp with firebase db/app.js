var firebaseConfig = {
  apiKey: "AIzaSyAWkR-DoNy-zydZkR8qwC0e0DPcPKt2ua0",
  authDomain: "todoapp-5c2a4.firebaseapp.com",
  databaseURL: "https://todoapp-5c2a4-default-rtdb.firebaseio.com",
  projectId: "todoapp-5c2a4",
  storageBucket: "todoapp-5c2a4.firebasestorage.app",
  messagingSenderId: "99782828360",
  appId: "1:99782828360:web:d80874b2f76aab13c3d37d",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    console.log(data.val());

    var liELement = document.createElement("li");

    var ulElement = document.getElementById("items_data");

    //   create delete button element with DOM

    var DelbtnElement = document.createElement("button");

    var DelbtnText = document.createTextNode("DELETE");

    DelbtnElement.setAttribute("onclick", "deleteSingleTodo(this)");

    DelbtnElement.setAttribute("id", data.val().id);

    DelbtnElement.setAttribute("class", "deletebtn");

    DelbtnElement.appendChild(DelbtnText);

    //   create Edit button element with DOM

    var EditbtnElement = document.createElement("button");

    var EditbtnText = document.createTextNode("EDIT");

    EditbtnElement.appendChild(EditbtnText);

    EditbtnElement.setAttribute("onclick", "EditSingleTodo(this)");

    EditbtnElement.setAttribute("id", data.val().id);

    EditbtnElement.setAttribute("class", "Editbtn");

    var liText = document.createTextNode(data.val().todo_value);

    liELement.appendChild(liText);

    ulElement.appendChild(liELement);
    liELement.appendChild(DelbtnElement);

    liELement.appendChild(EditbtnElement);

    console.log(liELement);
  });

function addTodo() {
  try {
    var todoInput = document.getElementById("todoInput");

    var id = firebase.database().ref("todos").push().key;

    var obj = {
      todo_value: todoInput.value,
      id: id,
    };

    firebase.database().ref(`todos/${id}`).set(obj);

    // todoInput.value = "";

    // alert("required input field");
  } catch (error) {
    console.log(error);
  }
}

function deleteAllTodos() {
  var ulElement = document.getElementById("items_data");
  ulElement.innerHTML = "";

  firebase.database().ref("todos").remove();
}

function deleteSingleTodo(e) {
  e.parentNode.remove();

  firebase.database().ref(`todos/${e.id}`).remove();
}

function EditSingleTodo(e) {
  var userInput = prompt("Enter Updated value");

  e.parentNode.firstChild.nodeValue = userInput;

  var obj = {
    todo_value: userInput,
    id: e.id,
  };

  firebase.database().ref(`todos/${e.id}`).set(obj);
}
