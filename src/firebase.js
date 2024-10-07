import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhfb4kMS6TjK--R-LcybzQ5SJZMwG5H4Y",
    authDomain: "clone-daeb3.firebaseapp.com",
    projectId: "clone-daeb3",
    storageBucket: "clone-daeb3.appspot.com",
    messagingSenderId: "307116700316",
    appId: "1:307116700316:web:a61133893133ffea2cb359",
    measurementId: "G-ZVP2F88JZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth }