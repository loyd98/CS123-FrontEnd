import React, { Component } from "react";
import "./mainPicture.scoped.css";

class MainPicture extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainPicture">
          <img
            src="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
            alt="burger"
          />
          <h1 className="caption"> Big Burger </h1>
        </div>
      </div>
    );
  }
}

export default MainPicture;
