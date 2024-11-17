import React, { useCallback, useEffect, useRef, useState } from "react";

const PracticePasswordGenerator = () => {
  // =================================================
  let [length, setLength] = useState(8);
  let [numberIsAllowed, setNumberIsAllowed] = useState(false);
  let [charIsAllowed, setCharIsAllowrd] = useState(false);
  let [password, setPassword] = useState("");
  // =================================================

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strIs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // --------------------------
    if (numberIsAllowed) strIs += "0123456789";
    if (charIsAllowed) strIs += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    // --------------------------

    // --------------------------
    for (let i = 1; i <= length; i++) {
      let charIs = Math.floor(Math.random() * strIs.length + 1);
      pass += strIs.charAt(charIs);
    }
    // --------------------------

    setPassword(pass);
  }, [length, numberIsAllowed, charIsAllowed, setPassword]);

  // =================================================

  useEffect(() => {
    passwordGenerator();
  }, [length, numberIsAllowed, charIsAllowed, passwordGenerator]);
  // =================================================
  const passRef = useRef(null);
  // =================================================

  const copyPassClipboatd = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <h1 className="text-center text-white">Practice Password Generator</h1>
      <div className="w-full max-w-lg mx-auto shadow-xl px-4 py-5 text-orange-500 font-semibold bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-3 px-3"
            value={password}
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0"
            onClick={copyPassClipboatd}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 text-lg text-white justify-between">
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
              Length : {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={numberIsAllowed}
              onChange={() => {
                setNumberIsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="StrInput"
              defaultChecked={charIsAllowed}
              onChange={() => {
                setCharIsAllowrd((prev) => !prev);
              }}
            />
            <label htmlFor="StrInput">Charaters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePasswordGenerator;
