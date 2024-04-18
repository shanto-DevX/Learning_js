//* celsius to Fahrenheit

/* function celsiusToFahrenheit(celsius) {
  let Fahrenheit = celsius * 1.8 + 32.0;
  return Fahrenheit;
}

let celsiusIs = celsiusToFahrenheit(11);
console.log(celsiusIs, "° Fahrenheit"); */

// //* Fahrenheit to celsius

/* function FahrenheitToCelsius(Fahrenheit) {
  const celsius = (Fahrenheit - 32) * 5 / 9;
  return celsius;
}
let FahrenheitIs = FahrenheitToCelsius(285);
// console.log(FahrenheitIs, "° Celsius");
console.log(FahrenheitIs.toFixed(3), "° Celsius");
// console.log(parseFloat(FahrenheitIs).toFixed(3),"° Celsius") */

/* function checkResult(ExamNumber){
    if(ExamNumber >=80){
        console.log("You Got A+")
    }else if(ExamNumber <= 79 && ExamNumber >= 70){
        console.log("You Got A")
    }else if(ExamNumber <= 69 && ExamNumber >= 60){
        console.log("You Got A-")
    }else if(ExamNumber <= 59 && ExamNumber >= 50){
        console.log("You Got B")
    }else if(ExamNumber <= 49 && ExamNumber >= 40){
        console.log("You Got C")
    }else if(ExamNumber <= 39 && ExamNumber >= 33){
        console.log("You Got D")
    }else{
        console.log("You Failed! F")
    }
}

checkResult(45) */

/* function findOdd(){
    // oddNumber = 50;
    for(let i = 50; i<=80; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

findOdd() */

// -> Simple Interest

function showInterest(p, r, t) {
    // P is the principal amount 
    // T is the time and 
    // R is the rate
  let Interest = (p * r * t) / 100;
  return Interest;
}

let x = showInterest(10000, 5, 5);
console.log(x);
