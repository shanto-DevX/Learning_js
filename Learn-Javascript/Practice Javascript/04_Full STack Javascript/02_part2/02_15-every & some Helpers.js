// https://youtu.be/H3XIJYEPdus?si=HQ6Y-ytwHYZdeIT6&t=24841
/* 
    * every() & some() two builing array method in js

    * -> every() 
        * |> this method tested werther all elements in the array pass the condition specified by the provided callback Function.
        * |> it returens true if the callback function returen true for every element and false if any element fails the condiiton
        * * |> সব কন্ডিশন সত্য হলে, এইটা ট্র রিটার্ন করবে
    
    * Some()
        * |>this method tested ehether at least ONE elemny in the array passes the confiiton specifed by the provided callback function
        * |> iits returns true if the callback Fucntion retuns true for at least one element, and false if no element passes the condition
        * |> একটা কন্ডিশন সত্য হলে, এইটা ট্র রিটার্ন করবে 
 */

// //////////////////////////////////////////////////////////////////////

/* const peoples = ["abcd", "efgh", "ijkl", "mnop"];
console.log(peoples.every((people) => people.length === 4));
console.log(peoples.some((people) => people.length >= 4)); */

let products = [
  { name: "chekers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "computer", category: "Electornics" },
  { name: "Lean js", category: "Books" },
];

let everyRes = products.every((product) => product.category === "Books");
console.log(everyRes);

let someRes = products.some((product) => product.category === "Books");
console.log(someRes);
