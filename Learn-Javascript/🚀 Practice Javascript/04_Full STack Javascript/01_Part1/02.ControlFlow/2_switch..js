// switch Statements

/* 
    switch(expression){
        case x:
            print
            break;
        case y:
            print
            break;
        deafult:
            print
    }
*/

let x = 1;
let text;

switch (x) {
  case 0:
    text = "off";
    console.log(text);
    break;
  case 1:
    text = "On";
    console.log(text);
    break;
  default:
    text = "No Value";
    console.log(text);
}
