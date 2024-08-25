var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// console.table(shoppingCart);

// -> |} Set Object Property
// shoppingCart.mouse = 15
// shoppingCart['mouse'] = 225
// console.log(shoppingCart)

// -> |> Dot Notation
// var penCount = shoppingCart.pen;
// console.log("pen Have : ", penCount);

// -> |> Array Notation
// console.log(shoppingCart["pen"]);

// -> |> Show object Value Using Variable
/* var propertiesName = 'mouse'
var propertiesValue = shoppingCart[propertiesName]
console.log(propertiesValue) */

// *---------------------------------------------

// -> |> SHOW properties KEY form OBJECT
/* propertiesKEY = Object.keys(shoppingCart);
console.log(propertiesKEY); */

// -> |> SHOW properties Value form OBJECT
/* propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue); */

// *---------------------------------------------

// -> OBJECT LOOPING

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};
// -> Object To ARray
const x = Object.entries(shoppingCart);
console.log(x);

/* const shoppingItems = Object.keys(shoppingCart);
console.log(shoppingItems);

const shoppingValue = Object.values(shoppingCart);
console.log(shoppingValue);

for (var i = 0; i < shoppingItems.length; i++) {
  //   console.log(shoppingItems[i]);
  //   for (var j = 0; j < shoppingValue.length; j++)
  //     console.log(shoppingItems[i][j]);

  var propertiesName = shoppingItems[i];
  var propertiesValue = shoppingCart[propertiesName];
  //   console.log(propertiesName, propertiesValue);
}

// fot in loop

for (var propertiesName in shoppingCart) {
  const value = shoppingCart[propertiesName];
  console.log(propertiesName, value);
} */
