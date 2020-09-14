import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAk5ETcVvKNQmOhawiTXEEAZ0gUz5YLb5U",
  authDomain: "clone-61582.firebaseapp.com",
  databaseURL: "https://clone-61582.firebaseio.com",
  projectId: "clone-61582",
  storageBucket: "clone-61582.appspot.com",
  messagingSenderId: "993302484671",
  appId: "1:993302484671:web:7bc834ed270a11e20b580a",
  measurementId: "G-CXVKS5YDXK",
});

const db = firebaseConfig.firestore();
let auth = firebase.auth();
let storage = firebase.storage();

export { db, auth, storage };
