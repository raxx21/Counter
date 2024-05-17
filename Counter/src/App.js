import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={increment}>
        Increment
      </button>
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
