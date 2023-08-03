import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQjFTN6ykQSyoigqcryaRsQgKDqXftNoA",
  authDomain: "delivery-90270.firebaseapp.com",
  projectId: "delivery-90270",
  storageBucket: "delivery-90270.appspot.com",
  messagingSenderId: "727161909274",
  appId: "1:727161909274:web:30929df641f8c28b7f61a3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
