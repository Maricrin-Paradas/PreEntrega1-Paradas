import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu0Zf7DFY-VqFEvIbz64tcyf_0T2vUD6Y",
  authDomain: "proyecto-react-a8b71.firebaseapp.com",
  projectId: "proyecto-react-a8b71",
  storageBucket: "proyecto-react-a8b71.appspot.com",
  messagingSenderId: "31469663935",
  appId: "1:31469663935:web:940571a8c74c21cfabf80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

