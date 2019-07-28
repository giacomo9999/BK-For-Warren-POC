import React, { Component } from "react";
import logo from "./Haaser_v1.png";
import "./App.css";

import Banner from "./Banner";
import Week from "./Week";

class App extends Component {
  state = {
    eventDB: [
      {
        weekName: "July 15",
        events: [
          "Octopus-Petting Benefit At NY Aquarium",
          "Tabling at Prospect Park Event",
          "Happy Hour at 4th Ave Pub",
          "Debate Party At Bob's House"
        ]
      },
      {
        weekName: "July 22",
        events: [
          "Happy Hour at 4th Ave Pub",
          "Manatee-Petting Benefit At NY Aquarium",
          "Tabling at Celebrate Brooklyn",
          "BBQ In Some Other Park"
        ]
      },
      {
        weekName: "July 29",
        events: [
          "Tabling At Coney Island Fireworks",
          "Tabling at Prospect Park Event",
          "Happy Hour at 4th Ave Pub",
          "Debate Party At Bob's House"
        ]
      }
    ]
  };
  render() {
    const weekArray = this.state.eventDB.map((week, index) => (
      <Week key={index} weekName={week.weekName} weekEvents={week.events} />
    ));
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
          <div>{weekArray}</div>
        </div>
      </div>
    );
  }
}

export default App;
