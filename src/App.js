import React, { Component } from "react";
import logo from "./Haaser_v1.png";
import "./App.css";

import Banner from "./Banner";
import Week from "./Week";

class App extends Component {
  state = {
    eventDB: [
      {
        weekId: 190715,
        events: [
          {
            eventId: 100,
            eventDate: 190716,
            eventName: "Octopus-Petting Benefit At NY Aquarium",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 101,
            eventDate: 190718,
            eventName: "Tabling at Prospect Park Event",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 102,
            eventDate: 190719,
            eventName: "Happy Hour at 4th Ave Pub",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 103,
            eventDate: 190719,
            eventName: "Debate Party At Bob's House",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          }
        ]
      },
      {
        weekId: 190722,
        events: [
          {
            eventId: 100,
            eventDate: 190716,
            eventName: "Happy Hour at 4th Ave Pub",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 101,
            eventDate: 190718,
            eventName: "Manatee-Petting Benefit At NY Aquarium",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 102,
            eventDate: 190719,
            eventName: "Tabling at Celebrate Brooklyn",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 103,
            eventDate: 190719,
            eventName: "BBQ In Some Other Park",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          }
        ]
      },
      {
        weekId: 190729,
        events: [
          {
            eventId: 100,
            eventDate: 190716,
            eventName: "Tabling At Coney Island Fireworks",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 101,
            eventDate: 190718,
            eventName: "Tabling at Prospect Park Event",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 102,
            eventDate: 190719,
            eventName: "Happy Hour at 4th Ave Pub",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          },
          {
            eventId: 103,
            eventDate: 190719,
            eventName: "Debate Party At Bob's House",
            eventDescription:
              "Greeking is a style of displaying or rendering text or symbols, not always from the Greek alphabet. Greeking obscures portions of a work for the purpose of either emphasizing form over details or displaying placeholders for unavailable content.",
            attendees: []
          }
        ]
      }
    ]
  };
  render() {
    const weekArray = this.state.eventDB.map((week, index) => (
      <Week key={index} weekId={week.weekId} weekEvents={week.events} />
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
