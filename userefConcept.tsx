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


// other cpmlex exmple

import * as React from "react";

type ApiResponse = {
  results: string[];
};

const fakeApi = (query: string): Promise<ApiResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ results: [`Result for "${query}" 1`, `Result for "${query}" 2`] });
    }, 1000);
  });
};

const DebouncedSearch: React.FC = () => {
  // Visible input value updated only after debounce
  const [displayQuery, setDisplayQuery] = React.useState("");

  // Immediate user input tracked by ref — does NOT cause re-render
  const inputRef = React.useRef<string>("");

  // Ref to hold debounce timer id
  const debounceTimerRef = React.useRef<number | null>(null);

  // Ref to hold last API response
  const lastApiResponseRef = React.useRef<ApiResponse | null>(null);

  // For showing loading state
  const [loading, setLoading] = React.useState(false);

  // Called on every keystroke — updates inputRef only
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;

    // Clear previous timer if exists
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set new debounce timer to update visible UI & trigger API call
    debounceTimerRef.current = window.setTimeout(() => {
      setDisplayQuery(inputRef.current);
    }, 500);
  };

  React.useEffect(() => {
    if (!displayQuery) {
      lastApiResponseRef.current = null;
      return;
    }

    let cancelled = false;
    setLoading(true);

    // Simulate API call
    fakeApi(displayQuery).then((response) => {
      if (!cancelled) {
        lastApiResponseRef.current = response;
        setLoading(false);
      }
    });

    return () => {
      cancelled = true; // cancel outdated calls
    };
  }, [displayQuery]);

  return (
    <div style={{ padding: 20 }}>
      <input type="text" onChange={handleChange} placeholder="Search here..." />
      <p>Debounced Query: {displayQuery}</p>
      {loading && <p>Loading...</p>}

      <div>
        <h3>Results:</h3>
        <ul>
          {lastApiResponseRef.current
            ? lastApiResponseRef.current.results.map((r, i) => <li key={i}>{r}</li>)
            : "No results yet"}
        </ul>
      </div>
    </div>
  );
};

export default DebouncedSearch;


