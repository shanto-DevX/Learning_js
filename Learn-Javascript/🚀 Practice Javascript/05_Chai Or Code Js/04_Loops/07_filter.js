/*

  * জাভাস্ক্রিপ্টে ফিল্টার পদ্ধতিটি বিশেষভাবে একটি নতুন অ্যারে তৈরি করার জন্য ডিজাইন করা হয়েছে যাতে শুধুমাত্র মূল অ্যারের উপাদান রয়েছে যা একটি প্রদত্ত ফাংশন দ্বারা প্রয়োগ করা পরীক্ষায় উত্তীর্ণ হয়। এটি সরাসরি অ্যারের উপাদানগুলিতে যোগফল বা অন্যান্য গাণিতিক ক্রিয়াকলাপ সম্পাদন করে না।

 * filter ((callBack -> সব ভেল্যু তে এক্সেস করবে) => এবার কন্ডিশন সত্য হলে রিটার্ন হবে )

  * myNums.filter((callBack) =>{socpe => এখানে কিছু লিখলে, Return করতে হবে});

  * myNums.filter((callBack) => এখানে কিছু লিখলে, Return করতে হবে না);
      |> myNums.filter((num) => num > 5);

 */

// |> Filter

/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNums.filter(() =>{});
// const info = myNums.filter((num) => num > 5);

const info = myNums.filter((num) => {
  // -> scope এর মধ্যে Retunr করতে হবে
  //   num > 5;
  return num > 5;
});
console.log(info);
 */

/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums); */

// ------------------------------------------------

/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfArray = myNums.filter((sum) => sum <= 10);
// console.log(sumOfArray);

const sumOfArray = myNums.filter((sum, x) => {
  console.log(`Array Value is: ${sum} -> Index ${x}`);
}); */

// ------------------------------------------------

const books = [
  { title: "Book One", genre: "Programming", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Fiction", publish: 1992, edition: 2008 },
  { title: "Book three", genre: "non-Fiction", publish: 1998, edition: 2007 },
  { title: "Book four", genre: "Science", publish: 1972, edition: 2010 },
  { title: "Book Five", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Six", genre: "Programming", publish: 2002, edition: 2013 },
];

let userBooks = books.filter((book) => book.genre === "Programming");

userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "Programming";
});
console.log(userBooks);
