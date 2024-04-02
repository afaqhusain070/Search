import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState("");
  //   const [icount, isetCount] = useState(7);
  const input = useRef(0);
  const handle = () => {
    input.current.style.backgroundColor = "red";
    input.current.style.border = "2px solid yellow";
  };
  return (
    <div>
      <input
        type="text"
        ref={input}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handle}>submit</button>
    </div>
  );
};

export default UseRef;
