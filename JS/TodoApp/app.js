function addTodo() {
  try {
    var todoInput = document.getElementById("todoInput");

    if (todoInput.value) {
      var liELement = document.createElement("li");

      var ulElement = document.getElementById("items_data");

      //   create delete button element with DOM

      var DelbtnElement = document.createElement("button");

      var DelbtnText = document.createTextNode("DELETE");

      DelbtnElement.setAttribute("onclick", "deleteSingleTodo(this)");

      DelbtnElement.setAttribute("class", "deletebtn");

      DelbtnElement.appendChild(DelbtnText);

      //   create Edit button element with DOM

      var EditbtnElement = document.createElement("button");

      var EditbtnText = document.createTextNode("EDIT");

      EditbtnElement.appendChild(EditbtnText);

      EditbtnElement.setAttribute("onclick", "EditSingleTodo(this)");

      EditbtnElement.setAttribute("class", "Editbtn");

      var liText = document.createTextNode(todoInput.value);

      liELement.appendChild(liText);

      ulElement.appendChild(liELement);
      liELement.appendChild(DelbtnElement);

      liELement.appendChild(EditbtnElement);

      console.log(liELement);

      todoInput.value = "";
    } else {
      alert("required input field");
    }
  } catch (error) {
    console.log(error);
  }
}

function deleteAllTodos() {
  var ulElement = document.getElementById("items_data");
  ulElement.innerHTML = "";
}

function deleteSingleTodo(e) {
  e.parentNode.remove();
}

function EditSingleTodo(e) {
  var userInput = prompt("Enter Updated value");

  e.parentNode.firstChild.nodeValue = userInput;
}
