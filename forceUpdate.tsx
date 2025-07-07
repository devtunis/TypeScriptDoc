import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const data = useRef({ counter: 0 });
  const [, setTick] = useState(0); // dummy state to force re-render

  const increment = () => {
    data.current.counter++;
    setTick(tick => tick + 1); // force update
  };

  return (
    <div className="App">
      {data.current.counter}
      <button onClick={increment}>increment</button>
    </div>
  );
}
