import React, { Component } from "react";

class Ratings extends Component {
  render() {
    const { top, left, size, rating } = this.props;

    const container = {
      position: "absolute",
      top: top,
      left: left,
      fontSize: size,
    };

    const star = {
      color: "#f6cd5b",
      marginLeft: "0.1rem",
    };

    var stars = [];

    for (var i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star" style={star} />);
      } else {
        stars.push(<i key={i} className="far fa-star" style={star} />);
      }
    }
    return <div style={container}>{stars}</div>;
  }
}

export default Ratings;
