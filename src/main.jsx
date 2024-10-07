import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import "./assets/css/loader.css";

// Importaciones firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHcpcuOz2XdF9dc7J5j4OseZHp82f-BTI",
  authDomain: "hali--accesorios.firebaseapp.com",
  projectId: "hali--accesorios",
  storageBucket: "hali--accesorios.appspot.com",
  messagingSenderId: "805910808583",
  appId: "1:805910808583:web:cae4041dce2d797021c2a2",
  measurementId: "G-Q6N7395Z5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
