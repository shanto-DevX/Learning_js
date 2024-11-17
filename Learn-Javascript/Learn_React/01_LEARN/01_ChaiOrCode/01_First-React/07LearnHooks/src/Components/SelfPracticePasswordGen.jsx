import React, { useCallback, useEffect, useRef, useState } from "react";

const SelfPracticePasswordGen = () => {
  // -------------------------------------------
  let [lengthIs, setLength] = useState(8);
  let [number, setNumberAllowed] = useState(false);
  let [character, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");
  // -------------------------------------------
  let passwordGen = useCallback(() => {
    let passIs = "";
    let strIs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // --------------------------------------------------------------------
    if (number) strIs += "0123456789";
    if (character) strIs += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    // --------------------------------------------------------------------

    for (let i = 1; i <= lengthIs; i++) {
      let charIs = Math.floor(Math.random() * strIs.length + 1);
      passIs += strIs.charAt(charIs);
    }
    // --------------------------------------------------------------------

    setPassword(passIs);
  }, [lengthIs, number, character, setPassword]);
  // --------------------------------------------------------------------
  useEffect(() => {
    passwordGen();
  }, [lengthIs, number, character, passwordGen]);
  // --------------------------------------------------------------------

  let passRef = useRef(null);

  // --------------------------------------------------------------------
  let copyPastClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div>
      <div className="w-full mt-8 max-w-lg mx-auto shadow-xl px-4 py-5 text-orange-500 font-semibold bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-3 px-3"
            placeholder="Password"
            value={password}
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0"
            onClick={copyPastClipboard}
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
              value={lengthIs}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-capitalize font-semibold">
              Length : {lengthIs}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="numberInput"
              defaultChecked={number}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id="StrInput"
              defaultChecked={character}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="StrInput">Charaters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfPracticePasswordGen;
