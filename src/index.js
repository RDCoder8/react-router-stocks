import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
// {BrowserRoute}
//importing like this means import BrowserRouter and call it the same name
import { BrowserRouter as Router } from "react-router-dom";
//this syntax is renaming BrowserRouter to Router

//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);