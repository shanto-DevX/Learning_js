---

## Javascript Execution content

- Execution |> Js ফাইল রান কিভাবে করবে।
- রান করার জন্য দুই পেইজ এ রান করবে

- {কোড} => Global Execution context তেরি হয়। এবং This এর মধ্যে রেখে দেওয়া হবে।

-> (i) ব্রাইজার এর Execution context This, Window object নিয়ে কাজ করে

- Js singel thread

---

➡️ Execution context

- Global Execution context
  👉 :- This -> এই Execution হবেই, সব প্রোগ্রাম এ।
- function/functional Execution context
- eval Execution context

## ➡️ 2 Phase

| {code} | 👇 Code exicute

---

1. Memory ceration Phase
   -> যা যা ডিক্লিয়ার করা হয় সেইগুলো এক্সিকিউট করে না, শধু মেমরিতে জায়গা এলোকেট/জমা করে রাখে
2. execuation phase
   -> এখানে এসে কোড এক্সিকিউট করে

---

let val1 = 10
let val2 = 5

function addNum(num1,num2){
let total = num1+num2
return total;
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

👉 এই কোডের মধ্যে প্রথেমে
১. |> Global Exicuation / Global Enviroment -> this এর মধ্যে লোকেট করা থাকে।
২. |> Memory ceration phase
_ সব ভেরিএবল গুলো একত্রে রাখে এবং এখানে প্রথমে ভেলু গুলো Undefined থাকে।
_ -> val1 => Undefined
_ -> val2 => Undefined
_ -> addNum => Undefined
_ -> result1 => Undefined
_ -> result2 => Undefined
৩. |> Execution phase
_ এখানে ভেলু গুলো এক্সিকিউট হয়।
_ -> val1 => 10
_ -> val2 => 5
_ -> addNum(func) -> Line 33
=> এখানে এসে নতুন বল্ক [New Execution context] তেরি হয়। যত বার ফাংশন এক্সিকিউট হবে তত বার এই ব্লক তেরি হবে।

                        -> new variabile envariment
                        ->          +
                        -> Execution  Thread


                    👇👇👇 লাইন ৩৮ যখন ৩৩ এর ফাংশন এ যাবে 👇👇👇
                    => addNum() এর কাছে গেলে আবার নতুন করে
                        * Memory phase & execuation phase তেরি হবে।
                        👉 Memory phase এ ভেলু থাকবে Undefined
                            -> val1  -> Undefined
                            -> val2  -> Undefined
                            -> total -> Undefined

                        👉 Execuation context এর মধ্যে ভেলু এড হবে। [10,5]
                            -> num1 => 10
                            -> num2 => 5
                            -> toal => 15
                            -> return => কোন ভেলু রিটার্ন করলে, সেইটা Global Exicuation context ডাটা জমা হয়।

                * -> result1 => 15 |> এখানে ভেলু এসে জমা হবে addNum(func) এর কাজ শেষে।

                * এইটা প্রতিবার যখন function এর কাছে যায়, তখন এই বল্ক তেরি হয়। Global এক্সিকিউট শেষে এই বল্ক ডিলেট হয়ে যায়

                --------------------------------------------------------
                result2 এর মধ্যে ফাংশন এক্সিকিউট হচ্ছে।

                -> addNum [New Execution  context]
                    -----------------------------
                    | new variabile envariment  |
                    |          +                |
                    | Execution  Thread         |
                    -----------------------------
                                👇
                    * Memory phase
                        -< num1 -> Undefined
                        -< num2 -> Undefined

                    * execuation phase
                        -< num1     -> 10
                        -< num2     -> 2
                        -< total    -> 12

                    return total in Global Execuation. & store Data at result2

========================================================================

👉 CallStack

        ----------------------------------
    ❌  |     After complete(function)   |
        ----------------------------------
        ----------------------------------
       1|     addNum(function)           |
        ----------------------------------
        ----------------------------------
       0|     Global execuation          |
        ----------------------------------

|> এইটা lifo -> last in first out এর মধ্যে কাজ করে

|> এইখানে একটা ফাংশন যেভাবে মেমরিতে থাকে। <br> 1. প্রথমে Global execuation এক্সিকিউশন হয় <br>
২. এর পরে ফাংশন এর মধ্যে <br>
=> Memory phase <br>
=> execuation phase <br> 3. এইবার এইটা মেমরি থেকে বের হয়ে যায়। <br>

|> এইখানে একের অদিক ফাংশন যেভাবে মেমরিতে থাকে।

        -------------------------------------
    🔝  |     three()                       |
        -------------------------------------
        -------------------------------------
    🔝  |     two()                         |
        -------------------------------------
        -------------------------------------
    🔝  |     one()                         |
        -------------------------------------
        -------------------------------------
    🔝  |     Global execuation             |
        -------------------------------------

========================================================================
