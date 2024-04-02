import React, { useState } from "react";

const Hoc = () => {
  return (
    <>
      <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
    </>
  );
};

export default Hoc;

function HocRed(props) {
  return (
    <center>
      <h4 style={{ background: "red", width: 100, height: 100 }}>
        Green
        <br style={{ justifyContent: "center" }} />
        <props.cmp />
      </h4>
    </center>
  );
}

function HocGreen(props) {
  return (
    <center>
      <h4 style={{ background: "green", width: 100, height: 100 }}>
        Green
        <br style={{ justifyContent: "center" }} />
        <props.cmp />{" "}
      </h4>
    </center>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>counter</button>
    </>
  );
}
