# Custom Hooks

---

- file format Js নিতে হবে
- এইটার মধ্যে রিয়েক্ট এর বাকি হুক গুলো ব্যবহার করা যাবে।

```js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
```
