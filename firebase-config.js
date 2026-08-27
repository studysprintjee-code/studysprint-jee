const firebaseConfig = {
  apiKey: "AIzaSyDePrtFWOn4qL_9UAI36Zl1eR8asUUjtNY",
  authDomain: "studysprint-jee.firebaseapp.com",
  databaseURL: "https://studysprint-jee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studysprint-jee",
  storageBucket: "studysprint-jee.firebasestorage.app",
  messagingSenderId: "62087480680",
  appId: "1:62087480680:web:ef393a5a5baa4db54002dd",
  measurementId: "G-26H2WHXL56"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

window.firebaseApp = firebase.app();
window.firebaseAuth = firebase.auth();
window.firebaseDatabase = firebase.database();
