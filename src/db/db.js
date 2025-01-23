
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB15x5kDy8rLEednESJvPAvnH2AbtVBhOQ",
  authDomain: "mudkipstore-2513e.firebaseapp.com",
  projectId: "mudkipstore-2513e",
  storageBucket: "mudkipstore-2513e.firebasestorage.app",
  messagingSenderId: "38452290666",
  appId: "1:38452290666:web:4321e012f1494e96fc1613",
  measurementId: "G-T89X2DBCXD"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore();

export default db;