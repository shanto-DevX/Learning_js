/*
 * Default Function Perameter
 * Es6 এর একটি ফিচার, ফাংশন ডিক্লিয়ার এর সময় যদি পেরামিটার দেওয়া হয় এবং ফাংশন কল করার সময় যদি পেরামিটার এ আর্গুমেন্ট পাস করা নাহয় তখন সেখানে ডিফ্লড ভেলু থাকে এবং একে Default Function Perameter বলে
 * এটি ব্যবহার এর ফলে ফাংশন এর মধ্যে আর্গুমেন্ট মিসিং হলে, বা UNDEFINED হলে Default Function Perameter মধ্যমে সমস্যা গুলো সমাধান করা যায়।
 * function countTo5(count = true)
 * function countTo5(count = [])
 * function countTo5(count = "")
 */

// function countTo5(count = true) {
/* function countTo5(count = false) {
  if (count === true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`Count: ${i}`);
    }
  }
}

countTo5(true); */

/* function ratting(x = 0) {
  if (x === 5) {
    console.log(`High Ratting 😂`);
  } else if (x === 0) {
    console.log(`Low Ratting 🫥`);
  }
}

ratting(5);
ratting();
ratting(0); */

// ====================================

function multiply(a, b = 1) {
  return a * b;
}

let multiValue = multiply(10, 2);
console.log(multiValue);

let multiValue2 = multiply(10);
console.log(multiValue2);
