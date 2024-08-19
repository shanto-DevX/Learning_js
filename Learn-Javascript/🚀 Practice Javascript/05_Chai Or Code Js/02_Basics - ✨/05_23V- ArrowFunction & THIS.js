/*
 * THIS => current context বা {বল্ক} এর মধ্যে যা আছে সেইগুলো রেফার করবে, |> this.RefName --< কিন্তু এই ভেলু current context এর বাহিরে গেলে পরিবর্তন করা যায়।
 * Browser এর মধ্যে যে Global অব্জেক্ট দেখা যায় সেইটা হচ্ছে Window.Object
 * Function এর মধ্যে THIS কাজ করবে না। অব্জেক্ট এর মধ্যে সুধু কাজ করবে
 * Arrow Function
 */

/* const user = {
  userName: "Shanto",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.userName} , Welcome to Website`);
    console.log(this);
  },
};

// user.welcomeMessage;
// user.welcomeMessage();

// -> Change Object Value
// user.userName = "Studio";
// user.welcomeMessage();

console.log(this); */

// ---------------

//* Function এর মধ্যে THIS কাজ করবে না। অব্জেক্ট এর মধ্যে সুধু কাজ করবে
/* function helloWorld() {
  let userName = "Shanto";
  console.log(this.userName);
}
helloWorld();
 */

// ----------------

/* const nameIs = function () {
  let userName = "shanto";
  console.log(this.userName);
};

nameIs(); */

/* const nameIs = () => {
  let userName = "shanto";
  // console.log(this.userName);
  console.log(this);
};

nameIs(); */

//* () => {} |> arrow Function
//* (param1, param2, …) => { statements }

/* 

// -> Basic Arrow Funciton
const numIS = (num1, num2) => {
  return num1 + num2;
}; 

*/

// -> implicit return
// const numIS = (num1, num2) => num1 + num2;
// const numIS = (num1, num2) => (num1 + num2);
// console.log(numIS(10, 20));

/*
 * explicit return : {} ব্যবহার করলে return দিতে হবে
 * implicit return : () ব্যবহার করলে return দিতে হবে না।
 */

// |> Create & Diclear Objest in arorw function
/* const NumIs = () => ({
  userName: "Shanto",
  age: 24,
});

console.log(NumIs().userName);
console.log(NumIs().age); */
