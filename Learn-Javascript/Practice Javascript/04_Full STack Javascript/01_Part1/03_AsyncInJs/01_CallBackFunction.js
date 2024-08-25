// => CallBackFunction

/* function greet(name, CallBack) {
  console.log(`Hi ${name}`);
  CallBack();
}

function callMe() {
  console.log("I'm CallBack Function");
}

greet("shanto", callMe); */

/* function greet(name, CbFunctionIsHere) {
  console.log("Hello" + " " + name);
  CbFunctionIsHere();
}

function CallMe() {
  console.log("i'm CallBackFunction");
}

greet("Shanto", CallMe); */

/* function add(x, y, mul) {
  console.log(x + y);
  mul();
}

function mulIs() {
  console.log(2 * 2);
}

add(10, 20, mulIs); */

// =====================================

/* function showCallFunc(fu) {
  let value = 10;

  fu(value);
}

showCallFunc(function (value) {
  console.log(value);
}); */

// showCallFunc()

// -> -----------------------

/* function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
} */

/* greet("Shanto", function cb() {
  console.log(`I am CallBack Function`);
}); */

/* function xyz() {
  console.log("CallBack function");
}

greet("SHnato", xyz); */

// greet();

// |> ------------------------------

/* function add(x, y, Cbfung) {
  console.log(x * y);
  Cbfung();
}

function callBackFunc() {
  console.log("Hello CallBack");
}

add(10, 20, callBackFunc);
 */

function greet(name, cbFunction) {
  console.log(`Hello World ${name}`);
  cbFunction();
}

/* function callME() {
  console.log("Hello i'm CallBack Fucnntion");
} */

greet("Javascript", function () {
  console.log("Hello i'm CallBack Fucnntion");
});
