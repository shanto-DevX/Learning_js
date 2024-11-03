# Note Some Concepts

---

## BG Color Change

```jsx
import React, { useState } from "react";

const BgChange = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      <div className="buttonList h-lvh flex items-end justify-center pb-8">
        <button
          onClick={() => {
            setColor("black");
          }}
          className="bg-black border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("teal");
          }}
          className="bg-teal-600 border-2 border-rose-700 text-white py-5 px-10 rounded-full"
        >
          teal
        </button>
      </div>
    </div>
  );
};

export default BgChange;
```

#### Brackthrough

- `onClick={setColor("black")}` এইভাবে দেওয়া গেলোনা কেন?
  - কারন হচ্ছে,onClick এক্সপেক্ট করে তাকে একটা ফাংশন রিটার্ন করা হোক, কিন্তু এখানে ফাংশন এর রেফারেন্স দেওয়া হচ্ছে।
  - এভাবে দিলে পেরামিটার পাস করা যাবে না।
  - এভাবে দিলে ফান্সগ্ন যে রিটার্ন ভেলু দিবে সেইটা onClick এ যাবে, কিন্তু onClick এর দরকার ফাংশন।
  - onClick মেথডের সমস্যা এবং সিন্টেক্সট এর সম্যসা!
- `onClick={() => {setColor("black");}}`
  - এজন্য এভাবে কলবেক ফাংশন দেয়া হয়।
