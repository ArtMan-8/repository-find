import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

require("./index.css");

ReactDom.render(<App />, document.querySelector("#root"));
