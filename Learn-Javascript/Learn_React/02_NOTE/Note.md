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

- File Path এর মধ্যে কোন & থাকলে ফাইল রান করবে না।

* 1️⃣ Terminal -> npx create-react-app "FileName" ❌!Recomended
* 2️⃣ Install With Vite

  - 2️⃣ Vite is asset Bundling & give
  - 2️⃣ Modules with depenencies -> Static Assets

  - npm create vite@latest
  - y
  - FOlder Name
  - React
  - JavaScript
  - Done Install React
  - cd "folderName"
  - এখানে node_module আসেনা তাই ইন্সটল করতে হবে - 👉 > npm i - npm install -g vite [SomeTimeNeed]

    - ### Run Project using Vite
    - 👉 > npm run dev
    - OR
    - 👉 > vite-project@0.0.0 dev
    - 👉 > vite
    - 👉 > vite dev

    - ### Add build[dist] folder
    - 👉 > npm run build
    - 👉 > npx vite build

      ### 🫧 Clean File

          - Recomend Edit Readme FIle
          - Most Of Time Using src
          - Delete assets file
          - only Have -> app.jsx & main.jsx

      ### 📁 GEt STRAT TO CREATE PROJECT

          - remove index.css & import index.css from main.jsx
          - remove app.css
          - assets -> remove svg icon

          📁src
            - pages
            - Components
            - assets
              - images
              - css - FOlder
            - app.jsx
            - main.jsx

          📁Public
            -

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

---

- Public -> Index.html
  - spa => Single Page Application

## 📂 Project Structure

✨ Distribution -> Dist
✨ Node Modules
✨ public
✨ Source
✨ Package.json
✨ vite Config

> ### ✨ vite Config
>
> - auto genated Files
> - Update Config If need

<br>

> ### ✨ Package.json
>
> - এই ফাইলটা হচ্ছে কি কি পেকেজ ইন্সটল আছে, প্রোজেক্ট এর ডিটেইলস এইগুলো এই ফাইলে থাকে
> - dependencies এর মধ্যে যা আছে এইগুলো প্রডাক্টশন এ যাবে
> - devdependencies এর মধ্যে যা আছে এইগুলো final প্রডাক্টশন এ যাবে না এইগুলো ডেভ্লপমেন্ট এ কাজ করে সুধু।
> - npm i packageName দিয়ে যেই মডিউল গুলো ডাউনলোড করা হয় সেইটা এইখানে থাকে।

<br>

> ### ✨ index.html
>
> - spa => Single Page Application
> - html file একটাই থাকবে
> - <div id="root"></div> এইটার মধ্যে সব ফাইল গুলো থাকে

<br>

> ### ✨ .gitignore
>
> - কোন কোন ফাইল github এ pull push হবে না সেইগুলো এইখানে থাকে

<br>

> ### ✨✨ source -> src\*\*\*
>
> - এর মধ্যে কাজ করবো
> - main.jsx
>   - এইফাইলে সব ফাইল import করে রাখা থাকবে।
> - main.jsx -> app.jsx
>   - এইফাইলে মধ্যে main action গুলো নিবে।

<br>

> ### ✨ node Module
>
> - এর মধ্যে সব Module থাকবে
> - npm i দিলে Package.json এ থাকে মডিউল/ ডিপেন্ডেঞ্ছি গুলো এইখানে চলে আসবে।

<br>

> ### ✨ dist = Build
>
> - npm run build
> - npx vite build
> - dist -> assets এর মধ্যে

---

---

## Functional COmponents

## ![alt text](image-2.png)

- view output Return করে।

```jsx
const App = () => {
  return <div></div>;
};

export default App;
```

- vs code -> rsc to create this
- App এর করান আমরা app.jsx ফাইলে কাজ করছি
- return এর মধ্যে যা আছে এইগুলোকে বলে রেন্ডারিং
- Server Side Rendaring - server computer / server | CSI
- Client Side Rendaring - Browser Rendaring

#### Component app.jsx এর মধ্যে এড করা নিয়ম।

- Craete a jsx file in Component folder
- import This jsx file in app.jsx

```jsx
// Demo.jsx
const Demo = () => {
  return (
    <div>
      <h1>Im DEMO Functional Component</h1>
    </div>
  );
};

export default Demo;
```

```jsx
// app.jsx
import Demo from "./demo";

const App = () => {
  return (
    <div>
      <Demo />
    </div>
  );
};
```

```jsx
// app.jsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import From from "./components/From";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <From />
      <Footer />
    </div>
  );
};
```

## jsx

![JSX](image-3.png)

- jsx & Html looks same but have some diffrests in syntext
- jsx => jsx javascript XML
- HTML কোড এলাউ করে javascript কোডে
- JSX ফাইলের মধ্যে HTML কোড এর মধ্যে javascript কোড লেখা যায় `<h1>{2+2}</h1>`

#### JSX Conventions

![alt text](image-4.png)

##### ✨ Return Signle Parent element in jsx

- প্রথমে অপেনিং এন্ড ক্লোজিং টেগ থাকবে যেমনঃ

  - `<div></div>`
  - `<>  </>`
  - `import {Fragment } from "react"`
  - `<Fragment></Fragment>`

```jsx
import { Fragment } from "react";

function App() {
  return (

    <div>
      <h1>Hello</h1>
      <h1>{2 + 2}</h1>
    </div>

    <>
      <h1>Hello World</h1>
    </>

    <Fragment>
      <h1>Hello World</h1>
    </Fragment>
  );
}

export default App;
```

##### ✨ Implement Javascript Directly in jsx

- jsx এর মধ্যে javascript লেখা যায়
- `<h1>{2+2}</h1>`
- {ব্রেকেট} দিয়ে ব্লক এর মধ্যে লিখেতে হবে

```js
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      <h2>{new Date().getHours()}</h2>
      <h2>{new Date().getMinutes()}</h2>
    </Fragment>
  );
}

export default App;
```

##### ✨ need to close all tag - self Close in jsx

- `<img />`
- `<p />`
- `<h1 />`

##### ✨ Jsx className

- jsx এ ক্লাস নিতে গেলে লিখতে হবে className="heading"

```jsx
function App() {
  return (
    <div>
      <h1 className="heading">Hello In Css Class</h1>
    </div>
  );
}

export default App;
```

##### ✨ all HTML attributes in camelCase in Jsx

- Jsx এর attributes গুলো কেমেল্কেস হবে।

```jsx
function App() {
  return (
    <div>
      <button onClick={() => alert("Hello")}>Submit</button>
      <button onSubmit="">Submit</button>
    </div>
  );
}

export default App;
```

##### ✨ inline css Styles in objects

- style={{style in object}}
- style={{ color: "red",fontSize: "36px",}}

```jsx
function App() {
  return (
    <div>
      <button style={{ color: "red", fontSize: "36px" }}>SUbmit</button>
    </div>
  );
}

export default App;
```

---

## Jsx Ternary Operator

##### ✨ Inline if else

```jsx
function App() {
  let marks = 80;
  return (
    <div>
      {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Avarage Result</h1>}
    </div>
  );
}

export default App;
```

##### ✨ jsx immediately-invoked

- immediately-invoked function Create করার সাথে সাথে কল করা যায়।

```jsx
  <div>
  {(
    ()=>{
      return `text`;
    }
  ),()}
  </div>

  -----------------
import Condition from "./moreLearn/Condition";
import IIFF from "./moreLearn/IIFF";

function App() {
  return (
    <div>
      <Condition />
      <IIFF />
    </div>
  );
}

export default App;


  const IIFF = () => {
  let marks = 90;
  return (
    <div>
      {(() => {
        if (marks > 80 && marks < 100) {
          return <h1>You get A+</h1>;
        }
      })()}
    </div>
  );
};
```

---

### Jsx Loop

- Map Use হয়ে থাকে।

```jsx
const Loop = () => {
  const city = ["Dhaka", "New York", "Dilhi"];
  return (
    <div>
      <h1>Loop In Js</h1>
      <ul>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Loop;
```

![Why Use Map](image-5.png)

- Return করার ক্ষমতা রাখে।
- [MORE LOOPS](https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx)

---

### Jsx Conditional Rendering

- Case: ইউজার যখন Login Button এ ক্লিক করবে তখন তাকে logout বাটন সো করাতে হবে এইটা হচ্ছে Conditional Rendering
- if... else
- Switch
- Ternary Operator
- Logical &&
- IIFF

##### ✨ If ... Else Condition

```jsx
const logInStatus = (status) => {
  if (status) {
    return <button>Logout Button</button>;
  } else {
    return <button>Login Button</button>;
  }
};

const Conditional_randaring = () => {
  return (
    <div>
      <h1>Login Status</h1>
      {logInStatus(false)}
    </div>
  );
};

export default Conditional_randaring;
```

##### ✨ Switch Case Statement

```jsx
const Conditional_randaring = () => {
  const status = false;

  switch (status) {
    case true:
      return (
        <>
          <h1>Login Status</h1>
          <button>Logout</button>
        </>
      );
    case false:
      return (
        <>
          <h1>Login Status</h1>
          <button>Login</button>
        </>
      );
    default:
      return null;
  }
};

export default Conditional_randaring;
```

##### ✨ Ternary Operation

```jsx
const Conditional_randaring = () => {
  let status = false;

  return (
    <div>
      <h1>Login Status</h1>
      {status ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};

export default Conditional_randaring;
```

##### ✨ && || Operation

```jsx
const Conditional_randaring = () => {
  let status = false;

  return (
    <div>
      <h1>Login Status</h1>
      {(status && <button>Logout</button>) || <button>Login</button>}
    </div>
  );
};

export default Conditional_randaring;
```

## Props -> Properties

![Props](image-6.png)

- এইখানে পেরেন্ট এর চাইল্ড এর ফ্লো ধরে কাজ করেতে হবে।
- যেমনঃ app.jsx হচ্ছে পেরেন Hero.jsx হচ্ছে app.jsx চাইল্ড এবং HeroImg.jsx যদি Hero.jsx এ ইম্পোর্ট করা হয় তাহলে সেইটা হচ্ছে Hero.jsx এর চাইল্ড এভাবে Uni-direction flow তে চলে।
- Props data is Read Only / Emutable -> এর মানে, পেরেন্ট Component এর ডাটা চাইল্ড ডাটা দিয়ে পরিবর্তন হবে না।- পেরেন্ট এর ডাটা চাইল্ড চেঞ্জ করতে পারবেনা,পেরেন্ট Component যেভাবে ডাটা পাঠাবে সেইভাবে চাইল্ড কে ডাটা রিসিভ করতে হবে।

```jsx

✨ app.jsx -- Parent ⬇️

import Hero from "./Components/Hero";

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;

✨  -- app.jsx -- Parent ➡️ Hero.jsx Child ⬇️

import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <div>
      <h1>Hello Hero Section</h1>
      <HeroImages />
    </div>
  );
};

export default Hero;


✨ Hero.jsx Parent ➡️ HeroImages.jsx Child

const HeroImages = () => {
  return (
    <div>
      <img style={{ width: "50%" }} src="src/assets/img/image.png" alt="img" />
    </div>
  );
};

export default HeroImages;


```
