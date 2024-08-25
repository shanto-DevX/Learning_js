# Learning React

---

> এখানে React যা যা শিখবো নোট করে রাখবো

---

### Some Links:

[React Official Doc](https://react.dev/)
[Vite](https://vitejs.dev/guide/)

---

## 📝 NOTE START

✨ Learn First From Document
👉 For Web Devlopment :- React DOM
👉 For App Devlopment :- React Native

- What is Recat js
  - js libraray & build Front end, building UI
  - React component based Architecture :- একটা ওয়েব পেজে তেরির জন্য ছোট ছোট অনেক কম্পোনেন্ট থাকে, এবং সেই কম্পোনেন্ট গুলো একত্রে এইটি ওয়েব সাইট বানানো হয়।

---

#### React Install Process

- 1️⃣ Terminal -> npx create-react-app "FileName" ❌!Recomended
- 2️⃣ Install With Vite

  - 2️⃣ Vite is asset Bundling & give 
  - 2️⃣ Modules with depenencies -> Static Assets

  - npm create vite@latest
  - y
  - FOlder Name
  - React
  - JavaScript
  - Done Install React
  - এখানে node_module আসেনা তাই ইন্সটল করতে হবে

        - 👉 > npm i
        - npm install -g vite [SomeTimeNeed]

        ### Run Project using Vite

        - 👉 > vite-project@0.0.0 dev
        - 👉 > vite
        - 👉 > vite dev

        ### Clean File
          - Recomend Edit Readme FIle
          - Most Of Time Using src
          - Delete assets file
          - only Have -> app.jsx & main.jsx

```js
//app.jsx
function App() {
  return <h1>Hello React Test</h1>;
}
export default App;
```

```js
//main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
