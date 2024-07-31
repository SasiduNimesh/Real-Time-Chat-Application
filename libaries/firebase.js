import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCMGhjBVeuD_424ZQy2Rlny2PWxxYYFjCk",
  authDomain: "react-4f96f.firebaseapp.com",
  projectId: "react-4f96f",
  storageBucket: "react-4f96f.appspot.com",
  messagingSenderId: "842277898748",
  appId: "1:842277898748:web:7e08a087ce9e467eb00a79"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()