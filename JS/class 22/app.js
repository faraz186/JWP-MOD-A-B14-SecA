// firebase Configuration and Firestore setup

let firebaseConfig = {
  apiKey: "AIzaSyArYdnLGjvWvqStxPm9rrBoAgSs874wVHE",
  authDomain: "stopwatch786-19657.firebaseapp.com",
  projectId: "stopwatch786-19657",
  storageBucket: "stopwatch786-19657.firebasestorage.app",
  messagingSenderId: "259932942806",
  appId: "1:259932942806:web:621ecf657260705dfe7477",
  measurementId: "G-NH00SQEJBX",
};

firebase.initializeApp(firebaseConfig);

// db intialize

let db = firebase.firestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

let saveData = async () => {
  try {
    let id = Math.round(Math.random() * 161651651651).toString(15);

    let obj = {
      email: email.value,
      password: password.value,
      uid: id,
    };

    // save data to firestore with a custom unique id

    const holdData = await db.collection("users").doc(id).set(obj);

    // save data to firestore with auto generate unique id

    // const saveData = await db.collection("users").add(obj);

    console.log(holdData);
  } catch (error) {
    console.error(error);
  }
};

// get data to firestore

let getData = async () => {
  try {
    let arr = [];
    const getData = await db.collection("users").get();
    getData.forEach((res) => {
      arr.push(res.data());
    });
    console.log(arr);
  } catch (error) {
    console.log(error);
  }
};

getData();

// single update data unique id to firestore

let updateData = async () => {
  try {
    await db.collection("users").doc("tBxTffKhxhgP5NOMGAWE").update({
      email: "hamza@gmail.com (Updated)",
      password: "123456 (Updated)",
    });
  } catch (error) {
    console.log(error);
  }
};

// single delete data unique id to firestore

let deleteData = async () => {
  try {
    await db.collection("users").doc("tBxTffKhxhgP5NOMGAWE").delete();
  } catch (error) {
    console.log(error);
  }
};

deleteData();
