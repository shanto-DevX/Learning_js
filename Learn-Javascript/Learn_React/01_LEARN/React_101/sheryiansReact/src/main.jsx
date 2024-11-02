import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./assets/Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  /*   <BrowserRouter>
    <App />
  </BrowserRouter> */

  <UserContext>
    <App />
  </UserContext>
);
