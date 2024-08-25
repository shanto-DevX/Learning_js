// 1

/* function foo(){
    console.log("foo")
}
function bar(){
    console.log("bar")
}

foo()
bar() */

// 2

/* function make_avg(a, b, c) {
  return a + b + c / 3;
}

x = make_avg(10,20,30)
console.log(x) */

// 3
function make_avg() {
  const ary = [10, 20, 30];
  var sum = 0;
  for (var number of ary) {
    sum += number;
  }
  var avg = sum / ary.length;
  return avg;
}

console.log(make_avg());

// 4

// -> No Return Has Parameter
/* function odd_even(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

odd_even(32) */

// -> has Return Has Parameter
function odd_even(num) {
  /*   if (num % 2 == 0) {
    return console.log("even");
  } else {
    return console.log("odd");
  } */

  var x = num % 2 == 0 ? "Even" : "ODD";
  return x;
}

var p = odd_even(31);
console.log(p);
