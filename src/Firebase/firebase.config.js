// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEnTCMK4NIrYaXYB4lv1SjKyFLfBdRthI",
  authDomain: "fir-context-privetroute.firebaseapp.com",
  projectId: "fir-context-privetroute",
  storageBucket: "fir-context-privetroute.appspot.com",
  messagingSenderId: "639537204273",
  appId: "1:639537204273:web:d70f38abc66bf4296c5910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;