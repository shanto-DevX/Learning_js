/* 
    |> Overloading
    * একটি ক্লাসের মধ্যে একি নামের একাধিক মেথড কল করা হচ্ছে মেথড ওভারলোডিং
    * JavaScript does not support overloading

*/

// => How Achive Overloading in js

class parentClass {
  addNumber(n1, n2, n3, n4) {
    if (arguments.length === 1) {
      console.log("Print 1 Argument : " + n1);
    } else if (arguments.length === 2) {
      console.log("Print 2 Argument : " + n1, n2 + " : " + (n1 + n2));
    } else if (arguments.length === 3) {
      console.log("Print 3 Argument : " + n1, n2, n3 + " : " + (n1 + n2 + n3));
    } else if (arguments.length === 4) {
      console.log(
        "Print 3 Argument : " + n1,
        n2,
        n3,
        n4 + " : " + (n1 + n2 + n3 + n4)
      );
    }
  }
}

let numIs = new parentClass();
numIs.addNumber(10);
numIs.addNumber(10, 20);
numIs.addNumber(10, 20, 30);
numIs.addNumber(10, 20, 30, 40);
