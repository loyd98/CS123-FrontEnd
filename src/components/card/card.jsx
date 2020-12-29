import React, { Component } from "react";
import "./card.scoped.css";
import Rating from "../ratings/ratings.jsx";

class Card extends Component {
  render() {
    const {
      item,
      onLeftPress,
      isSlidingLeft,
      onRightPress,
      isSlidingRight,
      handleModalVisibility,
    } = this.props;

    const animationEndWrapper = () => {
      onLeftPress(false);
      onRightPress(false);
    };

    return (
      <div
        className="container"
        onAnimationEnd={animationEndWrapper}
        onClick={(e) => handleModalVisibility(e, true, item)}
        left={isSlidingLeft.toString()}
        right={isSlidingRight.toString()}
      >
        <h1>{item.name}</h1>
        <img src={item.imgLink} className="image" alt="Food Item" />
        <h1 className="price">{`P${item.price}`}</h1>
        <Rating rating={item.rating} top="14.5rem" left="1.2rem" size="1rem" />
      </div>
    );
  }
}

export default Card;
