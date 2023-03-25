import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD0dKyy3fw78jyuUX9CYcbWkJ8PeTdDtVQ",
  authDomain: "private-routing-80320.firebaseapp.com",
  projectId: "private-routing-80320",
  storageBucket: "private-routing-80320.appspot.com",
  messagingSenderId: "230552601300",
  appId: "1:230552601300:web:63416ccd42001c70547141",
  measurementId: "G-P4TSK57YCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db}
