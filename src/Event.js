import React, { Component } from "react";

class Event extends Component {
  state = { userGoing: false };
  toggleUserGoing = () => {
    console.log("User going? " + this.state.userGoing);
    this.setState({ userGoing: !this.state.userGoing });
  };
  render() {
    console.log("RM User going? " + this.state.userGoing);
    return (
      <div className="container-inner">
        <h2>{`${this.props.eventDate}  • ${this.props.eventName}`}</h2>
        <p>{this.props.eventDescription}</p>
        <div className="spacer10" />
        <div>
          {this.state.userGoing ? (
            <div>
              <button>You're Going!</button>
              <button onClick={this.toggleUserGoing}>Cancel</button>
              <button>Add To Google Calendar</button>
            </div>
          ) : (
            <button onClick={this.toggleUserGoing}>Sign Up</button>
          )}
        </div>
        <div className="spacer10" />
      </div>
    );
  }
}

export default Event;
