import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/mainPage/mainPage";
import CartPage from "./components/cartPage/cartPage";
import Footer from "./components/footer/footer";
import ItemModal from "./components/itemModal/itemModal";

class App extends Component {
  constructor() {
    super();
    this.numberOfPages = Math.ceil(
      this.state.items.length / this.state.itemsPerPage
    );
  }

  state = {
    items: getProducts(),
    currentPage: 1,
    itemsPerPage: 8,
    isSlidingLeft: false,
    isSlidingRight: false,
    isModalVisible: false,
    currentItem: {},
    cart: [],
  };

  handleSlideLeft = (value) => {
    if (this.state.currentPage > 1 || !value) {
      this.setState({ isSlidingLeft: value });
    }
  };

  handleSlideRight = (value) => {
    if (this.state.currentPage < this.numberOfPages || !value) {
      this.setState({ isSlidingRight: value });
    }
  };

  handleIncrement = () => {
    if (this.state.currentPage < this.numberOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  handleModalVisibility = (e, value, data) => {
    this.setState({ isModalVisible: value, currentItem: data });
  };

  handleAddToCart = (order, quantity) => {
    const { cart } = this.state;
    const clone = { ...order };
    if (cart.length === 0) {
      clone._id = 0;
    } else {
      clone._id = cart.slice(-1)[0]._id + 1;
    }

    clone.quantity = quantity;
    this.setState({ cart: [...cart, clone] });
  };

  handleCloseCartItem = (e) => {
    const id = Number(e.target.dataset.remove);

    const newCart = this.state.cart.filter((item) => {
      return item._id !== id;
    });
    console.log(newCart);

    this.setState({ cart: newCart });
  };

  getSubTotal = () => {
    let subtotal = 0;

    if (this.state.cart.length > 0) {
      this.state.cart.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
    }

    return [subtotal.toFixed(2), subtotal];
  };

  getVAT = () => {
    const vat = this.getSubTotal()[1] * 0.2;
    return [vat.toFixed(2), vat];
  };

  getTotal = () => {
    const total = this.getSubTotal()[1] + this.getVAT()[1];
    return total.toFixed(2);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <ItemModal
            item={null}
            currentItem={this.state.currentItem}
            isModalVisible={this.state.isModalVisible}
            handleModalVisibility={this.handleModalVisibility}
            handleAddToCart={this.handleAddToCart}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <MainPage
                  {...props}
                  items={this.state.items}
                  currentPage={this.state.currentPage}
                  itemsPerPage={this.state.itemsPerPage}
                  isSlidingLeft={this.state.isSlidingLeft}
                  isSlidingRight={this.state.isSlidingRight}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onLeftPress={this.handleSlideLeft}
                  onRightPress={this.handleSlideRight}
                  handleModalVisibility={this.handleModalVisibility}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <CartPage
                  cart={this.state.cart}
                  subtotal={this.getSubTotal()[0]}
                  vat={this.getVAT()[0]}
                  total={this.getTotal()}
                  handleCloseCartItem={this.handleCloseCartItem}
                />
              )}
            />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
