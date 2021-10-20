// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ecommerce-app-malet.firebaseapp.com",
  projectId: "ecommerce-app-malet",
  storageBucket: "ecommerce-app-malet.appspot.com",
  messagingSenderId: "391332003535",
  appId: "1:391332003535:web:8d8ea02a7487caa549c1ba",
  measurementId: "G-SRC2RH6W1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage, analytics };
