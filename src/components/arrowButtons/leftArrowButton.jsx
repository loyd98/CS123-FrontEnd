import React, { Component } from "react";

class LeftArrowButton extends Component {
  render() {
    const { onClick, onPress } = this.props;

    const onClickWrapper = () => {
      onPress(true);
      onClick();
    };

    const baseStyle = {
      color: "#d72d1f",
      fontSize: "2rem",
      position: "absolute",
      top: "35%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    const container = {
      height: "768px",
      position: "relative",
      justifySelf: "end",
    };

    return (
      <div style={container}>
        <i
          className="fas fa-caret-square-left"
          style={baseStyle}
          onClick={onClickWrapper}
        />
      </div>
    );
  }
}

export default LeftArrowButton;
