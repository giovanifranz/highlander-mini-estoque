import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC91_54tzCXdqOlKsYdXCz5vJSNLWp2IhE",
  authDomain: "highlander-mini-estoque.firebaseapp.com",
  databaseURL: "https://highlander-mini-estoque-default-rtdb.firebaseio.com",
  projectId: "highlander-mini-estoque",
  storageBucket: "highlander-mini-estoque.appspot.com",
  messagingSenderId: "821370763060",
  appId: "1:821370763060:web:d95045c6520dc314ad1761",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);
const database = getDatabase(firebase);

export { auth, database, firebase };
