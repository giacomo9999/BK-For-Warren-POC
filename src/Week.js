import React from "react";
import Event from "./Event";

const Week = props => {
  const eventMap = props.weekEvents.map((event, index) => (
    <Event key={index} eventTitle={props.weekEvents[index]} />
  ));
  console.log(props);
  return (
    <div className="container-outer">
      <h2>Events for the Week of {props.weekName}</h2>
      <div>{eventMap}</div>
    </div>
  );
};

export default Week;
