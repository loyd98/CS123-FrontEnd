import React, { Component } from "react";
import "./card.scoped.css";
import Rating from "../ratings/ratings.jsx";

class Card extends Component {
  render() {
    const { itemName, price, imgLink, rating } = this.props;

    return (
      <div className="container">
        <h1>{itemName}</h1>
        <img src={imgLink} className="image" alt="Food Item" />
        <Rating className="rating" rating={rating} />
        <h1 className="price">{`P${price}`}</h1>
      </div>
    );
  }
}

export default Card;
