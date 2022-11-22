import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAeMfMS4Os3H_0l-Fa_LuAwjFty_6g4G0",
  authDomain: "portfolio-dc49e.firebaseapp.com",
  projectId: "portfolio-dc49e",
  storageBucket: "portfolio-dc49e.appspot.com",
  messagingSenderId: "635563159200",
  appId: "1:635563159200:web:1e974896471bc317fea3c5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
