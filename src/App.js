import React, { Component } from "react";
import logo from "./Haaser_v1.png";
import "./App.css";

import Banner from "./Banner";
import Week from "./Week";

class App extends Component {
  render() {
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
          <Banner />
          <Week />
        </div>
      </div>
    );
  }
}

export default App;
