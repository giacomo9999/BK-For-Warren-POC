import React from "react";

const Event = props => {
  return (
    <div className="container-inner">
      <h3>{props.eventTitle}</h3>
      <div className="spacer5"/>
      <button>Sign Up!</button>
    </div>
  );
};

export default Event;
