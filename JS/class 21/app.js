const firebaseConfig = {
  apiKey: "AIzaSyCyji4RJzjj0mO3A6E5XOgXAkt6GmzqsJE",
  authDomain: "fir-class-ceecd.firebaseapp.com",
  databaseURL: "https://fir-class-ceecd-default-rtdb.firebaseio.com",
  projectId: "fir-class-ceecd",
  storageBucket: "fir-class-ceecd.firebasestorage.app",
  messagingSenderId: "814140843856",
  appId: "1:814140843856:web:b6551eebec51cecbd46e55",
};

// Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();

function signup() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);

      window.location.href = "./login.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      window.location.href = "./home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // IdP data available in result.additionalUserInfo.profile.
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorMessage);
    });
}

function saveData() {
  var nameInput = document.getElementById("name");
  var rollnoInput = document.getElementById("rollno");

  var obj = {
    name: nameInput.value,
    rollno: rollnoInput.value,
  };

  console.log(obj);

  // save data on realtime db

  // firebase.database().ref("section A /Web & mobile /user").set(obj);

  firebase.database().ref("user").push(obj);
}

function getdataFromFirebaseDatabase() {
  firebase
    .database()
    .ref("user")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getdataFromFirebaseDatabase();


function deleteDataFromFirebaseDatabase() {
  firebase.database().ref("user/-OOx61fIhtJS2MwIzbQE").remove();
}

deleteDataFromFirebaseDatabase();



function editDataFromFirebaseDatabase() {
  firebase.database().ref("user/-OOx5xaZAEYgoDvJOsw-").set({
    name: "Muhammad Faraz",
    rollno: "12345",
  });
}

editDataFromFirebaseDatabase();
