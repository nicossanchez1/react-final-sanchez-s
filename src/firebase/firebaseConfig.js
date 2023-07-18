import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsIp0k2M491ZeNcVVKNA6mQVijelbjbnU",
  authDomain: "e-commerce-5c188.firebaseapp.com",
  projectId: "e-commerce-5c188",
  storageBucket: "e-commerce-5c188.appspot.com",
  messagingSenderId: "194356550238",
  appId: "1:194356550238:web:4a4ed9fd079683708df2cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);