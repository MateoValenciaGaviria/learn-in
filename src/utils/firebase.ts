import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { FirebaseApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA0tbTjZRO4Tcxq2QSDSJ7HGu-QDWTP1cQ",
    authDomain: "learn-in-3a072.firebaseapp.com",
    projectId: "learn-in-3a072",
    storageBucket: "learn-in-3a072.appspot.com",
    messagingSenderId: "726457973531",
    appId: "1:726457973531:web:1ada91602bca3ef76c71be"
  };


const app: FirebaseApp = initializeApp(firebaseConfig);
const DATABASE: Firestore = getFirestore(app);

export { DATABASE };