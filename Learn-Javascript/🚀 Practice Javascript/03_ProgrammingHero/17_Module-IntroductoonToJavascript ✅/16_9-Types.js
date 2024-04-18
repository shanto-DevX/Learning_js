var price = 100;
console.log(typeof price);
var price = "100";
console.log(typeof price);
var isHappy = true;
console.log(typeof isHappy);
var hellos;
console.log(typeof hellos);
var hello = null;
console.log(typeof hello);

/* 
    -> Premitive
        * number
        * string
        * boolean
        * undefined
        * object
*/

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2); // দশমিকের পরে কত সংখ্যা দেখাবে
sum = parseFloat(sum)
console.log(sum);
