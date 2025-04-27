var firebaseConfig = {
  apiKey: "AIzaSyB4O89y-10CK_Z1EEbI5Dx7o-UmAYWyUlA",
  authDomain: "fir-auth-practice-f9a79.firebaseapp.com",
  projectId: "fir-auth-practice-f9a79",
  storageBucket: "fir-auth-practice-f9a79.firebasestorage.app",
  messagingSenderId: "125365953554",
  appId: "1:125365953554:web:014bd64716a4c088c064cb",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function signUp() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  console.log(name.value, email.value, password.value);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}

function login() {
  var email = document.getElementById("loginemail");
  var password = document.getElementById("loginpassword");

  console.log(email.value, password.value);

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
