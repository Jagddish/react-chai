import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./src/Card";

function App() {
  let myobj = {
    user: "hitesh",
    age: 24,
  };
  const newArr = [1, 3, 4];
  return (
    <>
      <h1 className="bg-green-500 mb-4 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
      <Card username="chai" />
      <Card username="Hitesh" btnName="Profile" />
    </>
  );
}

export default App;
