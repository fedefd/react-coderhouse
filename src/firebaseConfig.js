import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEYjB1j3zz8Sun3RmQUzHenZISlHLq30E",
  authDomain: "proyecto-react-comision54030.firebaseapp.com",
  projectId: "proyecto-react-comision54030",
  storageBucket: "proyecto-react-comision54030.appspot.com",
  messagingSenderId: "213487695371",
  appId: "1:213487695371:web:7c048671905c67f304b90e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
