# Error Handaling

---

- প্রোগ্রাম এ কোন Error থাকলে সেইটা নিচের কোড কে রান হতে সমস্যা করে তার জন্য Error Handaling ব্যবহার করা হয়ে থাকে।
  ### |=> Diffrent Type of error
  - Network Errors
  - Promise Rejections
  - Security Errors

### Type of Error Handaling

#### try {}

- enclose code that mighty pottentially cause and error
- কোড ভেলিড হলে এইটা এক্সিকিউট হবে।

```js
try {
  console.log("Hellow");
} catch (error) {
  console.error(error);
}
```

#### catch {}

- catch and handle any thrown errors form try{}
- console.error() <-> দিলে লাল দেখাবে ইরোর টা
- যখন error আসে তখন এক্সিকিউট হবে।

```js
try {
  console.log(x);
} catch (error) {
  console.error(error);
}
```

#### finally {}

- (Optional) Always executes. used mostly for clen up
- ex. close files, close connetions, release resources
- সব সময় এক্সিকিউট হবেই।

```js
try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log("This Always Executes");
}
```

#### throw

- ইউজার ইরোর ডিফাইন করে দিতে পারে।
- throw new Error("মেসেজ");
- কন্ডিশন এর মধ্যে ব্যবহার হয়ে থাকে।

```js
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
```
