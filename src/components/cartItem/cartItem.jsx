import React, { Component } from "react";
import "./cartItem.scoped.css";

class CardList extends Component {
  render() {
    const { order } = this.props;

    return (
      <div className="container">
        <div className="container-sub">
          <span>
            <div>
              <h1>{order.name}</h1>
              <img src={order.imgLink} />
            </div>

            <h2>{order.quantity}</h2>
            <h2>{`P${order.price}`}</h2>
          </span>
          <i className="fas fa-times-circle exit" />
        </div>
      </div>
    );
  }
}

export default CardList;
