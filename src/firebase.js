import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXlhf2LYavma8ovH44KLgB6ZTuiqVUVIE",
  authDomain: "instagram-clone-react-b635b.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-b635b-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-b635b",
  storageBucket: "instagram-clone-react-b635b.appspot.com",
  messagingSenderId: "985054179701",
  appId: "1:985054179701:web:d49b14d0090ec2ce6b233c",
  measurementId: "G-64LZHEYVN2",
};

// initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default getFirestore;
