import { use, useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(true);
  const [char, setChar] = useState(true);
  const [password, setPassword] = useState("");

  // 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIRGKLMNOPQRSTUVWXSYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += '!@#$%^&*_+{}|:"~})';

    for (let i = 1; i < length; i++) {
      let val = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(val);
    }
    setPassword(pass);
  }, [length, number, char, setPassword]);

  const copyPasswordOnClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, passwordGenerator, number, char])
  return (
    <div
      className="w-[100vw] h-[100vh]  bg-black flex justify-center items-center 
  ">
      <div className="flex ">
        <div className="w-[600px] h-[200px]  bg-emerald-300 rounded-3xl flex-col justify-center  p-6 ">
          <input
            value={password}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-[480px] h-[50px] bg-white rounded-l-3xl"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordOnClipboard} className="bg-blue-600 text-xl  text-white h-[50px] rounded-r-3xl w-[60px]">
            Copy
          </button>
          <div className="flex text-sm gap-4 p-4">
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
              <label htmlFor="">{length}</label>
            </div>
            <div className="flex items-center gap-5">
              <input type="checkbox" 
              defaultChecked = {number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev)
              }}
               />
               <label htmlFor="numberInput">Number</label>
              <input type="checkbox" 
              defaultChecked = {char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
               />
               <label htmlFor="charInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const [bg, setBg] = useState('');
// const color = {
//   red: "bg-red-500",
//   blue: "bg-blue-500",
//   orange: "bg-orange-500",
//   white: "bg-white-500",
//   pink: "bg-pink-500",
//   green: "bg-green-500",
//   black: "bg-black-500",
//   yellow: "bg-yellow-500",
// };

// return (
// <div className={`${color[bg] || ''} w-[100vw] h-[100vh] flex justify-center items-center gap-10` }>
// <div
//   className={` w-[100vw] h-[100vh] flex justify-center items-center gap-10`} style={{backgroundColor: bg}}>
//   <button className="bg-red-500" onClick={() => setBg("red")}>
//     Red
//   </button>
//   <button className="bg-green-500" onClick={() => setBg("green")}>
//     Green
//   </button>
//   <button className="bg-blue-500" onClick={() => setBg("blue")}>
//     Blue
//   </button>
//   <button className="bg-white" onClick={() => setBg("white")}>
//     White
//   </button>
//   <button className="bg-black" onClick={() => setBg("black")}>
//     Black
//   </button>
//   <button className="bg-orange-500" onClick={() => setBg("orange")}>
//     Orange
//   </button>
//   <button className="bg-yellow-400" onClick={() => setBg("yellow")}>
//     yellow
//   </button>
//   <button className="bg-pink-500" onClick={() => setBg("pink")}>
//     Pink
//   </button>
// </div>

// import React from 'react'
// import Color from './Components/Color'

// const App = () => {
//   return (
//     <div className='w-[100vw] h-[100vh] bg-black'>
//     hello

//     </div>
//   )
// }

// export default App
