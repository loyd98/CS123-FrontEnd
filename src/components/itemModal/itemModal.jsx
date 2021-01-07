import React, { Component } from "react";
import "./itemModal.scoped.css";
import Ratings from "../ratings/ratings";
import Button from "../button/button";

class ItemModal extends Component {
  state = {
    count: 1,
  };

  increment = () => {
    if (this.state.count < 100) this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  // componentDidMount = () => {
  //   console.log("currentItem", this.props.currentItem);
  // };

  render() {
    const {
      currentItem,
      isModalVisible,
      handleModalVisibility,
      handleAddToCart,
      handleAlert,
      currentAccount,
    } = this.props;

    const toggleVisibility = (value) => {
      if (!value) {
        return "container not-visible";
      } else {
        return "container";
      }
    };

    const resetCount = () => {
      this.setState({ count: 1 });
    };

    return (
      <div className={toggleVisibility(isModalVisible)}>
        <h1>{currentItem.Name}</h1>
        <Ratings
          top={null}
          left="1.6rem"
          size="2.5rem"
          rating={currentItem.Rating}
        />
        <i
          onClick={(e) => {
            handleModalVisibility(e, false, {});
            resetCount();
          }}
          className="far fa-times-circle exit"
        />
        <div className="foodPriceContainer">
          <img
            src={"http://localhost:1337" + currentItem.Image.url}
            className="image"
            alt="Food Item"
          />
          <div className="price">
            <h1>{`P${currentItem.Price}`}</h1>
          </div>
        </div>
        <div className="description">
          <p>{currentItem.Description}</p>
          <div className="description_buttons">
            <div className="quantity">
              <i className="fas fa-minus" onClick={this.decrement} />
              <div className="counter">
                <h1>{this.state.count}</h1>
              </div>
              <i className="fas fa-plus" onClick={this.increment} />
            </div>
            <Button
              title="Add to Cart"
              onClick={(e) => {
                if (localStorage.getItem('email') === null) {
                  handleAlert(true);
                } else {
                    console.log(currentItem)
                  handleAddToCart(currentItem, this.state.count);
                  handleModalVisibility(e, false, {});
                  resetCount();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemModal;
