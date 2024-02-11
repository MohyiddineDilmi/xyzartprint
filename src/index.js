import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9qTETiwoDTVQfgowwbkx7qK5kioi_pws",
  authDomain: "xyz-art-print.firebaseapp.com",
  projectId: "xyz-art-print",
  storageBucket: "xyz-art-print.appspot.com",
  messagingSenderId: "558816940225",
  appId: "1:558816940225:web:b2b63d2ed1ce8f827a4440",
  measurementId: "G-6WMVK4ZQ7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
