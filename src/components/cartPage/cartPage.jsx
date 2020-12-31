import React, { Component } from "react";
import "./cartPage.scoped.css";
import Button from "../button/button";

import CartItem from "../cartItem/cartItem";

class CartPage extends Component {
  render() {
    const { cart, total, subtotal, vat, handleCloseCartItem } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <h1>My Cart ({cart.length} items)</h1>
          <div className="container-sub">
            <div className="items">
              <div className="header">
                <p>Item</p>
                <p>Quantity</p>
                <p>Price</p>
              </div>
              <div className="card-container">
                {cart.map((order) => (
                  <CartItem
                    key={order._id}
                    order={order}
                    handleCloseCartItem={handleCloseCartItem}
                  />
                ))}
              </div>
            </div>
            <div className="summary">
              <h2>Order Summary</h2>
              <div className="summary-sub">
                <span>
                  <p>Sub-Total</p>
                  <p>{subtotal}</p>
                </span>
                <span>
                  <p>VAT</p>
                  <p>{vat}</p>
                </span>
              </div>
              <div className="summary-total">
                <span>
                  <p>Total</p>
                  <h1>{`P${total}`}</h1>
                </span>
              </div>
              <div className="button">
                <Button title="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartPage;
