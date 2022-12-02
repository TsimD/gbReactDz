import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA1N6-kYVAAzjftXvivVVpBsyLedg8vpa8",
  authDomain: "gbreact-67adf.firebaseapp.com",
  projectId: "gbreact-67adf",
  databaseURL: "https://gbreact-67adf-default-rtdb.firebaseio.com",
  storageBucket: "gbreact-67adf.appspot.com",
  messagingSenderId: "78252923254",
  appId: "1:78252923254:web:56f8534be077c19a524257"
};

const firebaseDB =firebase.initializeApp(firebaseConfig)
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();