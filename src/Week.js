import React from "react";
import Event from "./Event";

const Week = props => {
  const eventMap = props.weekEvents.map((event, index) => {
    console.log("Event: ", event.eventName);
    return (
      <Event
        key={index}
        eventName={event.eventName}
        eventId={event.eventId}
        eventDate={event.eventDate}
        eventDescription={event.eventDescription}
        attendees={event.attendees}
      />
    );
  });

  console.log(props);
  return (
    <div className="container-outer">
      <h2 className="dark">Events for the Week of {props.weekId}</h2>
      <div>{eventMap}</div>
    </div>
  );
};

export default Week;
