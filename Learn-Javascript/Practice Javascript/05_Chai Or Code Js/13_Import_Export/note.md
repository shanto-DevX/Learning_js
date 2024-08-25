# Import Details

---

> - import
> - export

---

### 2 Type of export in ecmaScript or mOdern Js

#### Defult Export 👉 যেকোন নামে এক্সপোর্ট করা যায়

```javascript
📝 in myModule.js
let obj;
export default obj = {
  x: 5,
  y: 7,
};

const obj = {
  x: 5,
  y: 7,
};

export default obj;


📝 Import Defult Export
import obj from "./myModule.js";
console.log(obj); */

import newNames from "./myModule.js";
console.log(newNames);

```

- ⭐ defult একটাই দিতে হবে।

---

#### Named Export 👉 যে নাম নেওয়া হইছে সেই নাম দিতে হবে

```javascript

📝 in myModule.js
export const a = 1; //=> Named Export
export const b = 2;
export const c = 3;
export const d = 4;
export const e = 5;


📝 Import Named Export ~
import { a } from "./myModule.js";
console.log(a);

```

- ⭐ Package.json এর মধ্যে "type": "module", দিতে হবে।
- ⭐ import _ from "./external.js"; :- _ দিলে সব গুলো একসাথে ইম্পোর্ট হবে
- ⭐ import { pi as pis, a as as } from "./external.js"; :- দিলে export যে ফাইল থেকে করা হবয়ে সেইখানের ভেরিএবল এর নাম পরিবর্তন করে ইম্পোর্ট করা যাবে

![alt text](image.png)

---

#### Old Js export

```javascript
module.exports = {
  a: 1,
  b: 2,
};

let x = 10;
module.exports = x;

// -> CommonJs
const a = require("./myModuleRequred.js");
console.log(a);

⭐ Package.json এর মধ্যে "type": "module", দিতে হবে না
```

<!-- https://youtu.be/bU69doALJGU?si=tOlVzQzMvCHe4f-N&t=804 -->

#### FOr More

- https://medium.com/globant/exploring-node-js-modules-commonjs-vs-es6-modules-2766e838bea9
- https://blog.logrocket.com/commonjs-vs-es-modules-node-js/
