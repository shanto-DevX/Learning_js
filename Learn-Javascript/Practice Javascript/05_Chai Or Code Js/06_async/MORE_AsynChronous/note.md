# More Asynchronous

---

- একসাথে একাধিক কাজ করতে পারেনা, একসাথে একটি অপারেশন রান করতে পারে তাই একে সিঙ্গেল থ্রেডেড ল্যাংগুয়েজ বলে।
  - যেমনঃ একটা রেস্টুডেন্ট এর মধ্যে ২ জন কাস্টোমার আছে, ত প্রথমে একজন [user1] এর ওর্ডার নিবে এবং সেইটা কমপ্লিট করে অন্য জনের [user2] থেকে ওর্ডার নিবে-- এখানে ওয়েটার হচ্ছে [Thread]
  - synchronous Blocking Behavior
  - js Code -> masing Language Convert -> browser
  - Browser
    - Runtime Envarionment
    - Engine
      - CallStack

```javascript
// synchronous Blocking Behavior
const processOrder = (coustomer) => {
  console.log("Process Order for customer 1");

  let currentTime = new Date().getTime();
  while (currentTime + 3000 >= new Date().getTime());

  console.log(`Order Process For customer 1`);
};

console.log("Take Order For customer 1");
processOrder();
console.log(`Completed Order for customer 1`);
```

#### How Call Avobe Function

> #### Callstack -> Last in first OUT
>
> > - প্রথেমে main() file run হয়
> > - Then RUN 25no Line and print 'Take Order For customer 1' & Exit from callStack
> > - Then RUN 26no Line function
> >   - Then RUN 17No Line "Process Order for customer 1" and Exit from callStack
> >   - Then RUN 20no Line and run while loop for 3s & stop all/Block work on browser window after complete task and Exit from callStack
> >   - Then RUN 22no Line and print "Order Process For customer "
> > - Then RUN 27no Line and print "Completed Order for customer 1"

---

```js
const processOrder = (coustomer) => {
  console.log("Process Order for customer 1");

  setTimeout(() => {
    console.log(`Cooking Colpeleted`);
  }, 3000);

  console.log(`Order Process For customer 1`);
};

console.log("Take Order For customer 1");
processOrder();
console.log(`Completed Order for customer 1`);
```

> #### Callstack in this code
>
> > - প্রথেমে main() file run হয়
> > - Then RUN 55no Line and print 'Take Order For customer 1' & Exit from callStack
> > - Then RUN 56no Line function
> >   - Then RUN 46No Line "Process Order for customer 1" and Exit from callStack
> >   - এখান ৪৮ লাইন রান করবে, এইটা রান করতে করতে বাকি কোড গুলো এক্সিকিউট হয়ে যাবে সবার পরে setTimeout রান করবে।
> >     #### - কিভাবে setTimeout ফাংশন্টা রান করবে
> >     - setTimeout ফাংশন এ গিয়ে যে টাইম সেট করা হইছে সেইটাইম পর্যন্ত এটি থাকে [web API] এর মধ্যে।
> >     - [web API] তে থাকা ফাংশনটা Callback Queue তে গিয়ে থাকে, এবং setTimeout এর মত একের অধিক থাকলে সেইটা প্রথমে টার নিচে চলে যায়।
> >     - এখন যেহেতু সব কোড রান হয়ে গেছে, main() ফাংশন এর কাজ শেষ CallStack এখন খালি, কিন্তু বাকি আছে সুধু setTimeout ফাংশন এইটা এখন event Loop এর মাধ্যমে আবার CallStack এ রান করবে।

---

#### SOME STEP

> Asyncronous
> Callback / Callback Hell
> Promise
