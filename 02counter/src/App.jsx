import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // useState
  const [number, setNumber] = useState(1);
  const up = () => setNumber(number + 1);
  const down = () => {
    if (number >= 1) setNumber(number - 1);
  };

  return (
    <>
      <h1>Chair react</h1>
      <h2>Counter value: {number}</h2>
      <button onClick={up}>increase</button>
      <button onClick={down}>decrease</button>
    </>
  );
}

export default App;
