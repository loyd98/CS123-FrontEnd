import React, { Component } from "react";

class ArrowButton extends Component {
  render() {
    const { type } = this.props;

    const baseStyle = {
      color: "#d72d1f",
      fontSize: "2rem",
      position: "absolute",
      top: "35%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    const containerLeft = {
      height: "768px",
      position: "relative",
      justifySelf: "end",
    };
    const containerRight = {
      height: "768px",
      position: "relative",
      justifySelf: "start",
    };

    const renderArrow = (type) => {
      if (type === "right") {
        return (
          <div style={containerRight}>
            <i
              onClick={this.props.onClick}
              className="fas fa-caret-square-right"
              style={baseStyle}
            />
          </div>
        );
      } else if (type === "left") {
        return (
          <div style={containerLeft}>
            <i
              onClick={this.props.onClick}
              className="fas fa-caret-square-left"
              style={baseStyle}
            />
          </div>
        );
      } else {
        return null;
      }
    };

    return <React.Fragment>{renderArrow(type)}</React.Fragment>;
  }
}

export default ArrowButton;
