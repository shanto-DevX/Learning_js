for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Win");
    break;
  } else {
    console.log("You Have got " + rand);
  }
}
