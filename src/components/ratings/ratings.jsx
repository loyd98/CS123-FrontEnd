import React, { Component } from "react";
import "./ratings.scoped.css";

class Ratings extends Component {
  render() {
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (i < this.props.rating) {
        stars.push(<i class="fas fa-star" />);
      } else {
        stars.push(<i class="far fa-star" />);
      }
    }
    return <div className="rating">{stars}</div>;
  }
}

export default Ratings;
