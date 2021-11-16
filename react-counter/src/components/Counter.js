import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(100);
  return (
    <div className="main">
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          Decrease Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
