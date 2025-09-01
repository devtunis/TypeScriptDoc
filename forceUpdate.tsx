import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const data = useRef({ counter: 0 });
  const [, setTick] = useState(0);  

  const increment = () => {
    data.current.counter++;
    setTick(tick => tick + 1);  
  };

  return (
    <div className="App">
      {data.current.counter}
      <button onClick={increment}>increment</button>
    </div>
  );
}
