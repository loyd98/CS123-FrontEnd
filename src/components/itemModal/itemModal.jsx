import React, { Component } from "react";
import "./itemModal.scoped.css";
import Ratings from "../ratings/ratings";

class ItemModal extends Component {
  render() {
    const { currentItem, isModalVisible, handleModalVisibility } = this.props;

    const toggleVisibility = (value) => {
      if (!value) {
        return "container not-visible";
      } else {
        return "container";
      }
    };

    return (
      <div className={toggleVisibility(isModalVisible)}>
        <h1>{currentItem.name}</h1>
        <Ratings
          top={null}
          left="1.6rem"
          size="2.5rem"
          rating={currentItem.rating}
        />
        <i
          onClick={(e) => handleModalVisibility(e, false, {})}
          className="far fa-times-circle exit"
        />
        <div className="foodPriceContainer">
          <img src={currentItem.imgLink} className="image" alt="Food Item" />
          <div className="price">
            <h1>{`P${currentItem.price}`}</h1>
          </div>
        </div>
        <div className="description">
          <p>{currentItem.description}</p>
        </div>
      </div>
    );
  }
}

export default ItemModal;
