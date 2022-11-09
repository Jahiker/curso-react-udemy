import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={1} />
  </React.StrictMode>
);
