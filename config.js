// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2uoyASdXIynyNYFPblCZiYGqyXTOH-4",
  authDomain: "myprojectname-343005.firebaseapp.com",
  projectId: "myprojectname-343005",
  storageBucket: "myprojectname-343005.appspot.com",
  messagingSenderId: "528752110196",
  appId: "1:528752110196:web:9d346bb320dfa61079bf21",
  measurementId: "G-Z9SYLWNP1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);