const firebaseConfig = {
    apiKey: "AIzaSyDLxX3GRuHSBX0nsdfJKCIoimvzlmD8aZQ",
    authDomain: "studylinkvlad.firebaseapp.com",
    projectId: "studylinkvlad",
    storageBucket: "studylinkvlad.appspot.com",
    messagingSenderId: "758503050538",
    appId: "1:758503050538:web:aab60135cda02a6c8d2253"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();