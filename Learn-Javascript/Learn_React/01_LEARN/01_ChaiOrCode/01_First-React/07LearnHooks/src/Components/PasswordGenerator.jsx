import React, { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
  // Setp 1
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //   Setp 2 -> GEN Pass
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // step 3 -> add value in string
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    // step 3
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  console.log("Memoized callback:", passwordGenerator);
  //   setp - 4 :- change হলে যেনো সমস্যা না করে তার জন্য useEffect ব্যবহার হয়।

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  // UseRef
  const passRef = useRef(null);

  //
  const copyPassClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
    // alert("Copy Password DONE!");
  }, [password]);

  return (
    <div>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-4 mt-5 text-orange-600 font-semibold bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />

          <button
            className="outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 text-lg text-white justify-between">
          {/* Length */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-capitalize font-semibold">
              length : {length}
            </label>
          </div>
          {/* Number */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* Charheter */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Charaters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
