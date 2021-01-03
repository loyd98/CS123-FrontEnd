import React, { Component } from "react";
import "./cartItem.scoped.css";

class CardList extends Component {
  render() {
    const { order, handleCloseCartItem } = this.props;

    return (
      <div className="container">
        <div className="container-sub">
          <span>
            <div>
              <h1>{order.name}</h1>
              <img src={order.imgLink} alt="item" />
            </div>

            <h2>{order.quantity}</h2>
            <h2>{`P${order.price}`}</h2>
          </span>
          <i
            onClick={(e) => handleCloseCartItem(e)}
            data-remove={order._id}
            className="fas fa-times-circle exit"
          />
        </div>
      </div>
    );
  }
}

export default CardList;
