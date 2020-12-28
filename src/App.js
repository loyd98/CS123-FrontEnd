import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/mainPage/mainPage";
import CartPage from "./components/cartPage/cartPage";

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

  handleItemClick = (e) => {
    console.log(e.currentTarget);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
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
                  onItemClick={this.handleItemClick}
                />
              )}
            />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
