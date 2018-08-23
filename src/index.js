import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import fire from "./config/Fire";
import registerServiceWorker from "./registerServiceWorker";
// import { Router, Route } from "react-router";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
// registerServiceWorker();

let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);

  ReactDOM.render(<App {...state} />, document.getElementById("root"));
};

/* eslint no-restricted-globals: 0 */
let userObject = fire;

let initialState = { ...userObject };

window.setState(initialState);

registerServiceWorker();
