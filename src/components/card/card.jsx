import React, { Component } from "react";
import "./card.scoped.css";

class Card extends Component {
  render() {
    const { itemName, price, imgLink, rating } = this.props;

    return (
      <div className="container">
        <h1>{itemName}</h1>
        <img src={imgLink} className="image" alt="Food Item" />
        <h1 className="price">{`P${price}`}</h1>
      </div>
    );
  }
}

export default Card;
