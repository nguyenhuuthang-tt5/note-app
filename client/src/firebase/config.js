// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPZx-wU5rqpcOx3631y82WfgxARrtUbOc",
  authDomain: "note-app-af113.firebaseapp.com",
  projectId: "note-app-af113",
  storageBucket: "note-app-af113.appspot.com",
  messagingSenderId: "635124077372",
  appId: "1:635124077372:web:7de816d1e08fbd9ed04439",
  measurementId: "G-WLJ9JG9R8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
getAnalytics(app);