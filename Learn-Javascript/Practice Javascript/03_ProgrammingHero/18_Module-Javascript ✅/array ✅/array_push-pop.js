/*  */ // -> push করে Array তে নতুন আইটেম লাস্ট এ এড করা যায়
/* var studentId = [10, 15, 16, 87];

console.log("Before PUSH Item : " + studentId);
studentId.push(35, 50);
console.log(studentId.length);
console.log("after PUSH Item : " + studentId); */

// -> pop করে Array তে লাস্ট আইটেম ডিলেট করা যায়
/* var studentId = [10, 15, 16, 87];

console.log("Before POP Item : " + studentId);
// studentId.pop(87);
x = studentId.pop(); //-> X এর মধ্যে যে আইটেম ডিলেট করে দিছে সেইতা ষ্টোর হবে
console.log(studentId.length);
console.log("after POP Item : " + studentId);
console.log(x); */

// -> Remove first Item

/* var num = [10, 20, 30, 40, 50];
var RmFirst = num.shift();
console.log(num);
console.log(RmFirst); */

// -> add first Item

var num = [10, 20, 30, 40, 50];
var AddFirst = num.unshift(0);
console.log(num);
console.log(AddFirst);
