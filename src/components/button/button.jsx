import React, { Component } from "react";
import "./button.scoped.css";

class Button extends Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <div onClick={onClick} className="container">
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Button;
