import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppStart from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <AppStart />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
