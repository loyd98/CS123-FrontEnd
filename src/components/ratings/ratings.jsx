import React, { Component } from "react";
import "./ratings.scoped.css";

class Ratings extends Component {
  render() {
    return (
      <div className="rating">
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
}

export default Ratings;
