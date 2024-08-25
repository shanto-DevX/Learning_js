/* 
    * The Rest Parameter syntax allows a function to accept on indefinite number of arguments
    * as an array, providing a way to represnt variadic function in js 
    * The Rest Operator is used to collect the remaining elements into an array. This is particularly handy in function arguments.
    
    
    |>* someThingLook As python args
    * এইটা অনেকটা Spread Operator এর মত, কিন্তু এইটা ব্যবহার হয় ফাংশন এর পেরামিটার হিসেবে।
    * ফাংশন এর পেরামিটার (...) দিলে একের অধিক আর্গুমেন্ট নেওয়া যায়।
    * যদি, একের অধিক পেরামিটার নিতে হত তাহলে (a,...b) এভাবে নিতে হবে মানে Rest Operator সবার পিছনে হবে। 
*/
/* 
The Spread Operator is used to 'spread' an iterable into its elements, while the Rest Operator 'collects' multiple elements into an array. Understanding these operators can greatly enhance code readability and efficiency, making them essential tools for contemporary JavaScript development.
*/


/* function user(...userData) {
  console.log(userData);
}
user("Shanto", 24, "Programmer"); */

/* function RestOperator(x, ...az) {
  console.log(x);
  console.log(az);
}

RestOperator("Javascript", "Shanto", 24, "Programmer"); */

/* function personInfo(firstName, lastName, ...OtherDetails) {
  console.log(
    `First Name : ${firstName}, Last Name: ${lastName}, Other Information : ${OtherDetails}`
  );
}

personInfo("Saiful Islam", "Shanto", 24, "Programmer"); */

function unlimitedCount(...num) {
  console.log(num);
}

unlimitedCount(1, 2, 3, 4, 5, 6, 9);
