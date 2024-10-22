// document.querySelector("h1").innerHTML = "Learn Jquery";

// $("h1").text("Helolo Jqeury");

// |> 1️⃣ Html Selector Text Menupulation

// -> Selecte text [tag / id / class] => text()
// $(".mydiv h1").text("Change HEading 1");
// $("h1").text("Change HEading 2");
// $("#peraa").text("Peragraph text");

// -> Select multiple tag id class => text()
// $(".mydiv h1 , #peraa").text("Hello Text Change");

// -> Text Menuplation  => html()
// $(".mydiv h1").html("<i>Heading Text Italic</i>");

// -> Text Menuplation  => append() / prepend()
// $(".mydiv h1").append("<i>append Heading</i>");
// $(".mydiv h1").prepend("<i>prepend Italic | </i>");

// -> Text Menuplation  => after() / before()

/* let myPera = $("<p></p>").text("This is peragraph 0");
$("#peraa").before(myPera);

let myPera2 = $("<p></p>").text("This is peragraph 1");
$("#peraa").after(myPera2); */

// -> Attribute manipulation
// let showAttre = $("a").attr("href");
// console.log(showAttre);

// let RemoveAttr = $("a").removeAttr("href");
// console.log(RemoveAttr);

// document.querySelector("a").setAttribute("href", "www.shanto.studio");
// $("a").attr("href", "www.shanto.studio");

// -> Style using jQuery
// $("h1").css("color", "red");
// $("h1").css("fontSize", "56px");
// $("h1").css("font-size", "560px");
/* $("h1").css({
  color: "red",
  fontSize: "5rem",
});
 */

/* $("h1").addClass("style1");
$("h1").addClass("style1 style2"); */

// -> EventListenner
/* document.querySelector("button").addEventListener("click", () => {
  document.querySelector("h1").innerText = "Hello world";
}); */

// -> click | mouseover | mouseout
/* $("button").click(() => {
  $("h1").text("Hello world");
}); */

// -> toggleClass
/* $("button").click(() => {
  $("h1").toggleClass("style1");
}); */

// ->
/* $(".myButton").click(function () {
  let valueIS = this.innerHTML;
  $("h1").text(valueIS + " is Clicked");
}); */
/* $(".myButton").on("mouseover", function () {
  let valueIS = this.innerHTML;
  $("h1").text(valueIS + " is Clicked");
}); */
