import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZjQr8WHp6MDP7bQObKagrqvsJN3VYo74",
    authDomain: "blog-yrm.firebaseapp.com",
    projectId: "blog-yrm",
    storageBucket: "blog-yrm.appspot.com",
    messagingSenderId: "860740790885",
    appId: "1:860740790885:web:29c7439448e2c4b79db48c",
    measurementId: "G-SJT2S4PBR2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth =firebase.auth();
