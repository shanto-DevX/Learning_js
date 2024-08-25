// Lexical environment of that function

function abcd() {
  var a = 12;
  function def() {
    var b = 12;
  }
}

abcd();
