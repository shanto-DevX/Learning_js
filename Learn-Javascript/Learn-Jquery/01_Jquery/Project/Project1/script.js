$("#loginButton").click(function () {
  let pass1 = $("#pass1").val();
  let pass2 = $("#pass2").val();

  if (pass1 != "" && pass2 != "") {
    if (pass1 == pass2) {
      alert("Succesfully Login");
    } else {
      alert("Password Not Match");
    }
  } else {
    alert("Plese enter password");
  }
});
