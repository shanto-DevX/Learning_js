/* 

*/

/* try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log("This Always Executes");
} */

try {
  let dividend = Number(1);
  let divide = Number(jfhgj);
  if (divide == 0) {
    throw new Error("You can't divide by Zero!");
  }
  if (isNaN(dividend) || isNaN(divide)) {
    throw new Error("Please Enter A Number!");
  }
  let res = dividend / divide;
  console.log(res);
} catch (error) {
  console.log(error);
} finally {
  console.log("Programme DONE");
}
