import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCusX-UEQWnYpskzRsxmadTwBs-twdVQZg",
    authDomain: "activities-apps.firebaseapp.com",
    databaseURL: "https://activities-apps-default-rtdb.firebaseio.com",
    projectId: "activities-apps",
    storageBucket: "activities-apps.appspot.com",
    messagingSenderId: "188333224372",  
    appId: "1:188333224372:web:29feaedd302204ccf142e1"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth };