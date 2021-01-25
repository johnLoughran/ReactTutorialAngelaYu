import React from "react";
import ReactDOM from "react-dom";
// does the same as:
//var React = require("react");
//var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>Hello World, Dia dhiut!</h1>
    <p>Welcome to React</p>
  </div>,
  document.getElementById("root")
);

// This does the same thing as
var headline = document.createElement("h4");
headline.innerHTML =
  "React and Babel simplify rendering dynamic content compared with JS";
document.getElementById("root").appendChild(headline);
