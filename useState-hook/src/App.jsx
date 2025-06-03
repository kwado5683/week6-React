import Button from "./Components/Button";
import Lessbutton from "./Components/Lessbutton";
import Resetbutton from "./Components/Resetbutton";
import {useState} from "react";


export default function CookieCounter() {
  let [count,setcount] = useState(0);

  return (
    <>
      <h1> My Cookie Counter</h1>

      <h3> Cookies {count}</h3>

      <Button count={count} setcount={setcount} />
      <Lessbutton count={count} setcount={setcount} />
      <Resetbutton count={count} setcount={setcount}/>
    </>
  )
}












































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
