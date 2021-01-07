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
              <h1>{order.Name}</h1>
              <img src={"http://localhost:1337" + order.Image.url} alt="item" />
            </div>

            <h2>{order.quantity}</h2>
            <h2>{`P${order.Price}`}</h2>
          </span>
          <i
            onClick={(e) => handleCloseCartItem(e)}
            data-remove={order.id}
            className="fas fa-times-circle exit"
          />
        </div>
      </div>
    );
  }
}

export default CardList;
