import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp title={"Hola Mundo"} subtitle={"Esto es un subtitulo"} />
  </React.StrictMode>
);
