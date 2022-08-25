import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

export const app = initializeApp({
  apiKey: "AIzaSyBjg518EOfK8YeVnkSMVcLLDMXtI1Q3FwQ",
  authDomain: "e-learning-d7a36.firebaseapp.com",
  projectId: "e-learning-d7a36",
  storageBucket: "e-learning-d7a36.appspot.com",
  messagingSenderId: "449245572054",
  appId: "1:449245572054:web:9d1e748393968678345277",
});

// export const db = Firestore(app);
export const auth = getAuth(app);
