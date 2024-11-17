## LEarn About Projects

---

### Setp 1

- Posibale variable গুলো ডিক্লিয়ার করা হইছে useState এর মাধ্যমে

```jsx
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");
```

### Setp 2

```jsx
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // step 3 -> add value in string
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // step 3
  for (let i = 1; i <= Array.length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass = str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

#### useCallBack

- কোন ফাংশন তেরি করেল সেইটা মেমরি বা কেস এ সেভ করে রাখে এবং পরে এই ফাংশন এর প্রয়োজন হলে সেইটা মেমরি বা কেস থেকে নিয়ে নেয়।
- Dependency - [array] :- এইখানে useState এর ভেরিএবল পাছ করে দিবো।
- `useCallback(fn,[])`

#### useEffect

-
