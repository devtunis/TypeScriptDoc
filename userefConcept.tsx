import * as React from 'react';

interface CounterTracker {
  increment: number;
  decrement: number;
}

const App = () => {
  const [count, setCount] = React.useState<number>(0);

  const ref = React.useRef<CounterTracker>({
    increment: 0,
    decrement: 0,
  });

  const handleIncrement = () => {
    ref.current.increment++;
    setCount(count + 1);
  };

  const handleDecrement = () => {
    ref.current.decrement++;
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <div>Count: {count}</div>

      <div>
        Buttons {ref.current.increment + ref.current.decrement}{' '}
        times clicked
      </div>

      <div>Increment clicked: {ref.current.increment}</div>
      <div>Decrement clicked: {ref.current.decrement}</div>
    </>
  );
};

export default App;


🚀 Features
✅ Counts up and down with + and - buttons

✅ Tracks how many times each button is clicked

✅ Uses useRef to store tracking data efficiently (no re-render)

✅ Written in TypeScript

✅ Clean and simple UI

🧠 How it works
useState manages the visible count.

useRef stores an object (CounterTracker) with two properties:

increment: how many times the + button was clicked

decrement: how many times the - button was clicked

Since useRef does not cause re-renders, it's perfect for tracking hidden internal values.

📂 Code Structure
tsx
Copy
Edit
const ref = React.useRef<CounterTracker>({
  increment: 0,
  decrement: 0,
});
tsx
Copy
Edit
const handleIncrement = () => {
  ref.current.increment++; // just track, no re-render
  setCount(count + 1);     // visible count update
};
tsx
Copy
Edit
<div>
  Buttons {ref.current.increment + ref.current.decrement} times clicked
</div>
