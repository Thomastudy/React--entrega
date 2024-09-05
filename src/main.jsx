import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importaciones firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdJEz7Yr7IsEPs1cA1E3z7LgJnPvfjnqg",
  authDomain: "hali-accesorios.firebaseapp.com",
  projectId: "hali-accesorios",
  storageBucket: "hali-accesorios.appspot.com",
  messagingSenderId: "456077671296",
  appId: "1:456077671296:web:0ba4446f65b7c945165f65",
  measurementId: "G-73RCWLPYCW",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
