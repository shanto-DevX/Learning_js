function tackleOTPBoxes() {
  const boxed = document.getElementById("otp-box-list-id");
  boxed.addEventListener("input", function (e) {
    const target = e.target;
    const value = target.value;

    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
  });
}

function init() {
  console.log("HGEllo JS");
  tackleOTPBoxes();
}

init();

https://youtu.be/zjGwq0ep2Aw?si=c2dJpJW6vqxVPRil&t=2409