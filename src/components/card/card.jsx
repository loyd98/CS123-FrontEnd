import React, { Component } from "react";
import "./card.scoped.css";
import Rating from "../ratings/ratings.jsx";

class Card extends Component {
  render() {
    const {
      itemName,
      price,
      imgLink,
      rating,
      onLeftPress,
      isSlidingLeft,
      onRightPress,
      isSlidingRight,
    } = this.props;

    const animationEndWrapper = () => {
      onLeftPress(false);
      onRightPress(false);
    };

    return (
      <div
        className="container"
        onAnimationEnd={animationEndWrapper}
        left={isSlidingLeft.toString()}
        right={isSlidingRight.toString()}
      >
        <h1>{itemName}</h1>
        <img src={imgLink} className="image" alt="Food Item" />
        <h1 className="price">{`P${price}`}</h1>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default Card;
