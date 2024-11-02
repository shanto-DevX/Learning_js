/* import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const userNameVariable = " ! Shanto";
const reactElement = React.createElement(
  "a",
  { href: "GOOGLE.com", target: "_blank" },
  "HELLO WORLD From React Element",
  userNameVariable
);

createRoot(document.getElementById("root")).render(reactElement);
