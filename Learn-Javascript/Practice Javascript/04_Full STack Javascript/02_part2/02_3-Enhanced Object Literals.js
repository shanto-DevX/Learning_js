// Enhanced Object Literals

/*
 * Object এর মধ্যে ফাংশন তেরি করে, Object কে আরো ভালো ভাবে অপ্টিমাইজ করার জন্য ব্যবহার হয় Enhanced Object Literals।
 */

/* function user(Name, age, work) {
  return {
    name: Name,
    age: age,
    work: work,
  };
} */

/* function user(Name, age, work) {
  return {
    Name,
    age,
    work,
  };
} */

/* function user(Name, age, work) {
  return {
    Name,
    age,
    work,

    // -> Method
    intro: function () {
      console.log(`My Name is ${Name} & I'm ${age} & I'm a ${work}`);
    },
  };
} */

/* function user(Name, age, work) {
  return {
    Name,
    age,
    work,
    // ->  Object litaral
    intro: () => {
      console.log(`My Name is ${Name} & I'm ${age} & I'm a ${work}`);
    },
  };
}

const shanto = user("shanto", 24, "Programmer");
console.log(shanto);
console.log(shanto.intro()); */

// ===========================================================================

/* function objIs(a, b, c) {
  return {
    a,
    b,
    c,
    showAll: () => {
      console.log(`a = ${a}, b = ${b}, c = ${c}`);
    },
  };
}

let fullInfo = objIs(1, 2, 3);
console.log(fullInfo.showAll()); */

/* let lib = {
  sum: (a, b) => a + b,
  mul: (a, b) => a * b,
};

console.log(lib.sum(10, 20));
console.log(lib.mul(10, 20)); */

/* function getParsonEs6(name, age, height) {
  return {
    name: name,
    age: age,
    height: height,
    fullInfo: function () {
      console.log(`Name Is : ${name} & age is ${age} & Height Is ${height}`);
    },
  };
} */

/* function getParsonEs6(name, age, height) {
  return {
    name,
    age,
    height,
    fullInfo: () => {
      console.log(`Name Is : ${name} & age is ${age} & Height Is ${height}`);
    },
  };
}

let x = getParsonEs6("Shanto", 24, 200);
console.log(x.fullInfo()); */

/* function info(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
    showInfo: function () {
      console.log(`Name Is ${name}, Age is ${age}, Hobby Is ${hobby}`);
    },
  };
} 

let infoIs = info("Shanto", 24, "Programming");
console.log(infoIs.showInfo());

*/

/* function getPersoninfo(name, age, hobby) {
  return {
    name,
    age,
    hobby,
    showInfo: () => {
      console.log(`Name Is ${name}, Age is ${age}, Hobby Is ${hobby}`);
    },
  };
}

let infoIs = getPersoninfo("Shanto", 24, "Programming");
console.error(infoIs.showInfo()); */

/* const a = 1;
const b = 2;
const c = 3;

const obj = function () {
  return {
    a: a,
    b: b,
    c: c,
  };
};

console.log(obj()); */

/* function obj(a, b, c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}

let x = obj(1, 2, 3);
console.log(x); */

/* var lib = {
  sum: function (a, b) {
    return a + b;
  },

  mult: function (a, b) {
    return a * b;
  },
}; */

/* const lib = {
  sum: (a, b) => a + b,

  mult: (a, b) => a * b,
};

console.log(lib.sum(10, 5));
console.log(lib.mult(10, 5)); */

const objPerson = {
  nameiS: "shanto",
  ageIs: 24,
  hobbyIs: "Programming",
  showInfo: function () {
    console.log(
      `Name is ${this.nameiS} & Age is: ${this.ageIs} & Hobby ${this.hobbyIs}`
    );
  },
};

console.log(objPerson);
console.log(objPerson.showInfo());
