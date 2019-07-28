import React from "react";
import logo from "./Haaser_v1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <img src={logo} className="logo" alt="logo" />
        <a href="#">Home</a>
        <a href="#">Downloads</a>
        <a href="#">FB</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>

      <div className="main">
        <h1>Main page</h1>
      </div>
    </div>
  );
}

export default App;
