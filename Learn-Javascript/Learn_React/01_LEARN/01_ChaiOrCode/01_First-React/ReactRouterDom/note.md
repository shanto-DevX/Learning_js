# NOTE IN THIS PROJECT

---

- Install React Router Dom
- add & Import link & Navlink -- Header.jsx
- Navlink add Condition for Active buttons :- NavLink এর মধ্যে Css দিতে চাইলে CallBack ফাংশন এর মধ্যে দিতে হয়

  - `` <NavLink className={({ isActive }) => `${ isActive ? "text-orange-700": "text-gray-700"} other CSS}`> Home </NavLink> ``
  - এইটা দিয়ে নেভ এক্টিভ থাকলে কি কালার হবে সেইটা নির্ধারন করে।

- ### 📂 Main.jsx

#### way to create Route 1️⃣

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";

// Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```

#### Another way to create Route 2️⃣

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
```

- এভাবেও পাথ এবং এলিমেন্ট দিয়ে পেজ Route করা যায়।
- কোন পেজের এর মধ্যে নেস্টিং রাউট এড করতে চাইলে এভাবে দেওয়া যায়

```jsx
<Router path="about" element={<About />}>
  <Route path="nestingAbout" element={<Contact />} />
</Router>

// -> /about/nestingAbout
```

### 📝 Notes

- ⁉️ RouterProvider এর মধ্যে router দেওয়া হয়।
- ⁉️ router={router}
  - router এর মধ্যে পাথ এর জন্য যে ফাংশন নেওয়া হইছে সেইটা ফাংশন পাস করা হয়
- ⁉️ const router = createBrowserRouter([{}]);
  - এর মধ্যে পেজের পাথ গুলো দেওয়া হয়।

---

- ### 📂 Layout.jsx

```jsx
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
```

### 📝 Notes

- ⁉️ Outlet
  - Outlet থাকলে এর উপরে নিচে [Header/Footer] সেম থাকবে
  - Outlet এর মধ্যে ডাটা চেঞ্জ হতে থাকবে
  ***
  - main.jsx এর মধ্যে `element: <Layouts />` পাস করা হয়েছে এবং এইখানকার element/children গুলো Outlet এ দেখাবে
  - Page এর নাম Root বা Layouts যেইটা ইচ্ছা দেওয়া যায়।

---

## Get Daynamic Data

- URL এ কিছু দিলে সেইটে ওয়েব পেজে দেখাবে

```jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);
```

### 📝 Notes

- user/:userid :- এইখানে ইউজার এর পরে যা দিবে সেইটা পেজে দেখাবে

```jsx
📂 User.jsx
import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userid } = useParams();
  return (
    <div className="container mx-auto">
      <div className="bg-gray-500 text-white text-3xl">User: {userid} </div>
    </div>
  );
};

export default User;
```

### 📝 Notes

- প্রথমে import { useParams } from "react-router-dom"; ইম্পোর্ট করে নিতে হবে
- এবার const { userid } = useParams(); ভেরিএবেল এ নিতে হবে
- এবার { userid } পাস করে দেইতে হবে যেখানে চাই।

---

### loader

- api fetch করে থাকে
- useEffect এর আগে api fetch করে

```jsx
  📂 github.jsx
import { useLoaderData } from "react-router-dom";

const Github = () => {

  const data = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="text-left bg-gray-700 text0-whitee p-4 text-3xl font-medium text-white">
        <div className="flex justify-center gap-5 items-center">
          <img src={data.avatar_url} alt="" className="w-72" />
          <div>
            <h1> Id : {data.id}</h1>
            <h1> Name : {data.name}</h1>
            <h1> Followers : {data.followers}</h1>
            <h1> Location : {data.location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shanto-DevX");
  return response.json();
};

```

```jsx
  📂 main.jsx

  import Github, { githubInfoLoader } from "./Components/Github/Github.jsx";
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="" element={<Home />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

```

---

# সামারি

- প্রথমে React Router Dom Install করতে হবে
- এবার কম্পোনেন্ট তেরি করতে হবে
  - Header এর মধ্যে `import { Link, NavLink } from "react-router-dom";`
  - Menu / Button নিবো
  - Menu নিবো NavLink এর মধ্যে
- এবার Header / Footer একি থাকবে শুরু ভিত্রের কন্টেন্ট চেঞ্জ হবের
  - এর জন্য একটি পেজ নিয়ে সেইটার মধ্যে Header / Footer এর Component এড করে এর মধ্যে outlet এড করে দিবো
  - এতে করে Header / Footer একি থাকবের
  - `import { Outlet } from "react-router-dom";`
- main.jsx এর মধ্যে Route দিয়ে পেজ গুলো লিংক করে দিবো

---

- API কল করতে চাইলে দুইভাবে করা যাবে
- useState / useEffect ব্যবহার করে
- Loader দিয়ে
