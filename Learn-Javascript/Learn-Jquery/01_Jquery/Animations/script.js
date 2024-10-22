/* $(".btn1").click(function () {
  $("#div1").show(1000);
});
$(".btn2").click(function () {
  $("#div1").hide(1000);
});
$(".btn3").click(function () {
  $("#div1").toggle(1500);
});

$(".btn4").click(function () {
  $("#div1").hide(1500).show(2000);
}); */

// -> fadeIn | fadeOut | fadeToggle | use both | fadeTo(milSec , )

/* $(".btn1").click(function () {
  $("#div1").fadeIn(2000);
});
$(".btn2").click(function () {
  $("#div1").fadeOut(2000);
});
$(".btn3").click(function () {
  $("#div1").fadeToggle(2000);
});
$(".btn4").click(function () {
  $("#div1").fadeOut(2000).fadeIn(2000);
});
$(".btn4").click(function () {
  $("#div1").fadeTo(2000, 0.5);
}); */

// -> slideUp | slideDown | slideToggle | use both

/* $(".btn1").click(function () {
  $("#div1").slideUp(2000);
});

$(".btn2").click(function () {
  $("#div1").slideDown(2000);
});

$(".btn3").click(function () {
  $("#div1").slideToggle(2000);
});

$(".btn4").click(function () {
  $("#div1").slideUp(2000).slideDown(2000);
}); */

// -> Animate

$(".animate").click(function () {
  $("#div1").animate(
    {
      // opacity: "0.5",
      height: "400px",
      fontSize: "24px",
      padding: "30px",
    },
    2000
  );
});
