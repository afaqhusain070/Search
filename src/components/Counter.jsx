import React, { useState } from "react";

const Counter = () => {
  const [counter, setCount] = useState(5);

  const inc = () => {
    if (counter <= 5) {
      setCount(counter + 1);
    }
  };
  const dec = () => {
    if (counter >= 0) {
      setCount(counter - 1);
    }
  };

  return (
    <>
      <div>Counter{counter}</div>
      <button onClick={inc}>{counter}</button>
      <button onClick={dec}>{counter}</button>
    </>
  );
};

export default Counter;
