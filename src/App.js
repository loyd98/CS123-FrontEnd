import React, { Component } from "react";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPicture from "./components/mainPicture/mainPicture";
import CardList from "./components/cardList/cardList";
import Footer from "./components/footer/footer";

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
    console.log("left", this.state.isSlidingLeft);
  };

  handleSlideRight = (value) => {
    if (this.state.currentPage < this.numberOfPages || !value) {
      this.setState({ isSlidingRight: value });
    }
    console.log("right", this.state.isSlidingRight);
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

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainPicture />
        <CardList
          items={this.state.items}
          currentPage={this.state.currentPage}
          itemsPerPage={this.state.itemsPerPage}
          isSlidingLeft={this.state.isSlidingLeft}
          isSlidingRight={this.state.isSlidingRight}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onLeftPress={this.handleSlideLeft}
          onRightPress={this.handleSlideRight}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
