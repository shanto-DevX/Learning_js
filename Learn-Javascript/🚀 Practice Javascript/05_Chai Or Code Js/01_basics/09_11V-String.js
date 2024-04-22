// String

// const nameIs = "Shanto";
// const repoCount = 50;

// console.log(nameIs + repoCount + "value");

/*
 * backtick  ``
 *Template literals (Template strings)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

// console.log(`Hello My Name Is : ${nameIs} and my Repo Count is ${repoCount}`);

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); * Find Which item have in 2 index
// console.log(gameName.indexOf("a")); * find index Value
// console.log(gameName.lastIndexOf("_"));
// console.log(gameName.lastIndexOf("_"));

// const gameName = new String("Shanto_Studio");
// const newStr = gameName.substring(0, 4); |> not use Negative
// console.log(newStr);

// const anotherStr = gameName.slice(0, -4);
// Shanto_Studio |> 0,4 -> Shan ||
// const anotherStr = gameName.slice(-8, -4);
// console.log(anotherStr);

/* const newStr = "   Shanto   ";
console.log(newStr);
//* trim() -> Remove White Space {first & Last}
console.log(newStr.trim());
console.log(newStr.trimStart());
console.log(newStr.trimEnd()); */

// const url = "https://shanto.studio/a%20hello";

// console.log(url);
// console.log(url.replace("%20", "-"));

// console.log(url.includes("shanto"));

// console.log(url.split("."));

// ===========================================
/* 
    -> String Methods
    * ✅ var.length              => Show String Lenght

    * ✅ var.toUpperCase         => Show String in UpperCase
    
    * ✅ var.toLowerCase         => Show String in LowerCase
    
    * ✅ var.indexOf("Value")    => find String Value index
    
    * ✅ var.lastIndexOf("Value")    => find Last String Value index |> সবার শেষে যেই ভেলু থাকবে সেইটার ইনডেক্স দেখাবে। 
    
    * ✅ var.charAt(Value)       => find String index using Value

    * ✅ var.charCodeAt(Value)       => এইখানে ইনডেক্স দিলে ক্যারেক্টার এর ডেসিমাল ভেলু দেখাবে 

    * ✅ var = new StringfromCharCode(Value)       => এইখানে ডেসিমাল ভেলু দিলে ক্যারেক্টার দেখাবে [https://asecuritysite.com/coding/asc2]
    
    * ✅ var.includes("Value")   => If String Have in variable Its show True / or False
    
    * ✅ var.split(".")          => String কে array তে রূপান্তর করে, ("") / (. or _ / Anything)
    
    * ✅ var.replace("%20", "-") => String এর মধ্যে কোন কিছু রিপ্লেস করতে এই মেথড ব্যবহার হয়
    
    * ✅ var.trim()              => Remove String White Space
    
    * ✅ var.trimStart()         => Remove String White Space in Start
    
    * ✅ var.trimEnd()           => Remove String White Space in End
    
    * ✅ var.startsWith("Value") => যদি ভালুটা String এর প্রথম এ থাকে তাহলে, Return দিবে বুলিয়ান ভেলু ।
    
    * ✅ var.endsWith("Value")   => যদি ভালুটা String এর শেষে এ থাকে তাহলে, Return দিবে বুলিয়ান ভেলু ।

    * ✅ var.substring(0,10)   => একটি রেঞ্জ পর্যন্ত String ভেলু দেখায়, নেগেটিভ পয়েন্ট নেয়না।

    * ❌ var.slice(0,10)   => একটি রেঞ্জ পর্যন্ত String ভেলু দেখায়, নেগেটিভ পয়েন্ট নেয় 

    * ✅ var.concat("value")   => একটা String এর সাথে আরেকটা String এড করে।
    
    *  👉 search()
    *  👉 localeCompare() 
    *  👉 match() 
    *  👉 matchAll() 
    *  ✅ replace() 
    *  ✅ replaceAll() 
    
    *  ✅ padStart()  => একটা স্ট্রিং এর মধ্যে সামনে  কিছু এড করতে চাইলে padStart দিয়ে এড করা যায়,এর জন্য প্রথমে লেন্থ যত তার থেকে বেশি (যত টুকু দেখাতে চাই) তত নিতে হবে, যেমনঃ String Length 20 নিতে হবে ২০ এর বেশি।
    *  ✅ padEnd()  => একটা স্ট্রিং এর মধ্যে পিছনে কিছু এড করতে চাইলে padEnd দিয়ে এড করা যায়,এর জন্য প্রথমে লেন্থ যত তার থেকে বেশি (যত টুকু দেখাতে চাই) তত নিতে হবে, যেমনঃ String Length 20 নিতে হবে ২০ এর বেশি।
    

    * 

*/

// var str = new String("Programming language");
var str = "Programming language";
// console.log(str.lastIndexOf("m"));
// console.log(str.startsWith("P"));
// console.log(str.endsWith("g"));

// console.log(str.charAt(3));
// console.log(str.charCodeAt(3));

// let hellos = String.fromCharCode(83, 72, 65, 78, 84, 79);
// console.log(hellos.toLowerCase());
// console.log(str.substring(0, 11));

// console.log(str.slice(0, 11));
// console.log(str.slice(-8, -1));

// let x = str.concat(" Javascript");
// console.log(x);

// console.log(str.replace("P", "K"));
// console.log(str.replaceAll("P", "K"));

console.log(str.length);
console.log(str.padStart(25, "*"));
console.log(str.padEnd(25, "*"));
