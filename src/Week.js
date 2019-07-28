import React, { Component } from "react";
import Event from "./Event";

const Week = () => {
  return (
    <div className="container-outer">
      <h2>Events for the Week of Jul 22</h2>
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default Week;
