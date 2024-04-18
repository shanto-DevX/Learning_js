// first class functionction

function abcd(a) {
  a();
}

abcd(function () {
  console.log("Hello First Class Function");
});
