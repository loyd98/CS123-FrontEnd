import React, { Component } from "react";
import Rating from "./ratings.jsx";
import "./card.css";


class Card extends Component {
  render() {
    const { itemName, price, imgLink, rating } = this.props;

    return (
      <div className="container">
        <h1>{itemName}</h1>
        <img src={imgLink} className="image" />
        <Rating className="rating" rating={rating} />
        <h1 className="price">{price}</h1>
      </div>
    );
  }
}

export default Card;
