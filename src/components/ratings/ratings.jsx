import React, { Component } from "react";
import "./ratings.scoped.css";

class Ratings extends Component {
  render() {
    return (
      <div className="rating">
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
        <i class="far fa-star" />
      </div>
    );
  }
}

export default Ratings;
