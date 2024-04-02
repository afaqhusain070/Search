import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Counter from "./components/Counter.jsx";
import UseRef from "./components/UseRef.jsx";
import Hoc from "./components/Hoc.jsx";
import Hoc1 from "./components/Hoc1.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Hoc1 />
  </React.StrictMode>
);
