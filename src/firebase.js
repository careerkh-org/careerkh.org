// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMxE7ZLP7lHKlNK0giIAXklRB58ccyaVs",
  authDomain: "careerkh-web.firebaseapp.com",
  databaseURL: "https://careerkh-web-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "careerkh-web",
  storageBucket: "careerkh-web.appspot.com",
  messagingSenderId: "614847905563",
  appId: "1:614847905563:web:ed4858037994e6601d5dbe",
  measurementId: "G-V80SQJ4SWF"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app 