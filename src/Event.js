import React from "react";

const Event = props => {
  return (
    <div className="container-inner">
      <h2>{`${props.eventDate}  • ${props.eventName}`}</h2>
      <p>{props.eventDescription}</p>
      <div className="spacer10" />
      <button>Sign Up!</button>
      <div className="spacer10" />
    </div>
  );
};

export default Event;
