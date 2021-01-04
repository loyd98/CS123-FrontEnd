import React, { Component } from "react";
import "./alert.scoped.css";
import Button from "../button/button";

class Alert extends Component {
  render() {
    const { message, trigger, onClick } = this.props;

    const renderContainer = (value) => {
      if (value) return { display: "" };
      return { display: "none" };
    };

    return (
      <div
        className="container"
        style={renderContainer(trigger)}
        onClick={() => onClick(false)}
      >
        <i className="fas fa-exclamation-circle" />
        <p className="message">{message}</p>
        <div className="button">
          <Button title="Dismiss" />
        </div>
      </div>
    );
  }
}

export default Alert;
