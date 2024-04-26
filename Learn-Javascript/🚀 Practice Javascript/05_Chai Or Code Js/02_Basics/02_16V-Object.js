/*
 * NON singleton  -> const jsUser = {};
 * singleton  -> const jsUser = new Object();
 * Constructor  ->
 */

/* 
    |> object Literals
        * const jsUser = {key:value}
*/

/* 
    |> notation
    -> Dot Notation
        * jsUser.name

    -> Square Notation
        * jsUser["name"] -> এভাবে নিলে সুবিধা হচ্ছে, যদি অব্জেক্ট এর কি স্ট্রিং এ নেওয়া হয় তাহলে খুব সহজে সেইটায় এক্সেস করা যাবে। 
*/

// const symbols = Symbol("Key1")

/* const jsUser = {
  name: "Shanto",
  "full Name": "Saiful Islam Shanto",
  hobby: "Programming & Design",
  LearningNow: "Design & Web Devlopemnt",
  age: 24,
  location: "Narayanganj,Dhaka",
  lastLoginDays: ["Friday", "Saturday"],
};

// -> Change Value
jsUser.name = "DevXShanto";

// -> Can't Change Value Object
// Object.freeze(jsUser);
// jsUser.name = "DevYShanto";

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["name"]);

jsUser.gretting = function () {
//   console.log("Hello World! Js user");
  return "Hello World! Js user";
};

jsUser.grettingTwo = function () {
  // -> this keyword ব্যবহার করে, অব্জেক্ট এর মধ্যে সহজে এক্সেস পাওয়া যায়।
  //   console.log(`Hello World! Js user ${this.name}`);
  return `Hello World! Js user ${this.name}`;
};

console.log(jsUser.gretting);
console.log(jsUser.gretting());
console.log(jsUser.grettingTwo());

 */

// |> interviews Q
/*
 * symbol Declear in Object two way
 * ->  symbols: "Key IS 1",
 * ->  [symbols]: "Key IS 1",
 * console.log(jsUser[symbols]);
 */

/* const symbols = Symbol("Key1");

const jsUser = {
  name: "Shanto",
  "full Name": "Saiful Islam Shanto",
  hobby: "Programming & Design",
  LearningNow: "Design & Web Devlopemnt",
  age: 24,
  location: "Narayanganj,Dhaka",
  lastLoginDays: ["Friday", "Saturday"],
  //   way 1 but wrong
  symbols: "Key IS 1",
  [symbols]: "Key IS 1", 
}; */

// console.log(jsUser.symbols);
// console.log(typeof jsUser.symbols);
// console.log(jsUser[symbols]);
// console.log(typeof jsUser[symbols]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 * object singelton & Diclear with Constrcator

    * const jsUser = new Object();
 */

const jsUser = new Object();

jsUser.Id = "123Abc";
jsUser.name = "Shanto";
jsUser.isLoggedIn = false;

// console.log(jsUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Saiful",
      middleName: "Islam",
      lastName: "Shanto",
    },
  },
};

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.middleName);
// console.log(regularUser.fullName.userFullName.lastName);

// console.log(regularUser.fullName?.userFullName.lastName);

/* 
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  
 |> Object.assign(target, Source)
 |> Object.assign({}, a,b,c) -> এখানে খালি অব্জেক {} দেওয়ার ফলে মেমরিতে এইটা Object আকারে শিওর ভাবে জমা থাকবে। 

 */
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const objContact = { obj1, obj2 };
// const objContact = Object.assign(obj1, obj2);
// const objContact = Object.assign({}, obj1, obj2);
// const objContact = { ...obj1, ...  obj2 };
// console.log(objContact);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

// console.log(obj1.hasOwnProperty(1));

const userInfo = [
  {
    id: 1,
    email: "Hello@gmail.com",
  },
  {
    id: 2,
    email: "Hello2@gmail.com",
  },
  {
    id: 3,
    email: "Hello3@gmail.com",
  },
];

// console.log(userInfo[0].id);
// console.log(userInfo[1].id);
// console.log(userInfo[2].id);

/* +++++++++++++++++++++++++++++++++++++++++++ */

const course = {
  courseName: "Learn FullStack JS",
  coursePrice: "999",
  courseInstructor: "SHanto",
};

// -> Object Destructuring
// const { courseInstructor } = course;
// console.log(courseInstructor);

// -< Rename Object Keys
// const { courseInstructor: instractor } = course;
// console.log(instractor);

/* 
  * destructrueing IN Reacts
  const navbar = ({compnay}) => {}
  navbar(company - 'Shanto')
*/

// ==============================================

// * => API's | JSON

// |> Json  -> Objects In JSON
/* {
  "name":"Sahnto",
  "CouseName":"FullStack JS",
  "price": "Free"
} */

// |> Json  -> Objects In Array ON JSON
/* [
  {},
  {},
  {}
] */

// ============================================

/* 
{"results":[{"gender":"female","name":{"title":"Mrs","first":"Lisa","last":"Simmmons"},"location":{"street":{"number":4744,"name":"Mill Lane"},"city":"Clane","state":"Mayo","country":"Ireland","postcode":15496,"coordinates":{"latitude":"-1.2966","longitude":"35.5736"},"timezone":{"offset":"+3:00","description":"Baghdad, Riyadh, Moscow, St. Petersburg"}},"email":"lisa.simmmons@example.com","login":{"uuid":"ad687649-0ff0-4833-87ea-c6555edd9085","username":"redpeacock450","password":"tabitha","salt":"89cInoVC","md5":"05967756098876af8fa3b3214d02d49c","sha1":"83014ca46491052cf54a5f19c7d478aa43762898","sha256":"5cc086a3f51d1f5e460f32568d50c4b27185ad6491ed7811e38662c990c34e36"},"dob":{"date":"1963-06-25T00:25:01.723Z","age":60},"registered":{"date":"2009-03-13T10:55:11.057Z","age":15},"phone":"071-885-0536","cell":"081-359-3055","id":{"name":"PPS","value":"9630826T"},"picture":{"large":"https://randomuser.me/api/portraits/women/30.jpg","medium":"https://randomuser.me/api/portraits/med/women/30.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/30.jpg"},"nat":"IE"}],"info":{"seed":"7bab34a0e8d2d532","results":1,"page":1,"version":"1.4"}}

*/
