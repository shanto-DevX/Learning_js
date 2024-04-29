/* function sum(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log("Result", sum(numbers)); */

/*
 * এখানে ৩ নাম্বার লাইনের মধ্যে [i <= nums.length] এভাবে দিলে NaN আসবে, কারন Array এর Index শুরু হয় ০ থেকে এবং শেষে ইনডেক্স lenght-1 হয়। <= এর মানে Array length এর থেকে ১ বেশি কাউনট হবে। কিন্তু Array তে লাস্ট এ ১ বেশি দিয়ে সেখানে কোন নাম্বার পায়নাই তাই সেইটা Undefind হয়েছে।  Undefind এর সাথে নাম্বার যোগ করলে সেইটা NaN আসে।
 */

// --------------------------------------------

const score = [100, 200, 4, 54];
// score.sort(); //=>[ 100, 200, 4, 54 ]
score.sort((a, b) => a - b);
console.log(score);
