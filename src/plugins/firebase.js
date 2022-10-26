// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwIoQzAZrJtQz--mC9YO1A1ItPcCh5wQM",
  authDomain: "sysolympiad.firebaseapp.com",
  databaseURL: "https://sysolympiad-default-rtdb.firebaseio.com",
  projectId: "sysolympiad",
  storageBucket: "sysolympiad.appspot.com",
  messagingSenderId: "928078481951",
  appId: "1:928078481951:web:68bdb178ff228f6469e32a",
  measurementId: "G-DHNRTNVNNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = ref(getDatabase());
const auth = getAuth();
const storage = getStorage(app);
const functions = getFunctions(app, "asia-northeast1");
export { db, auth, storage, functions };
