import React, { Component } from "react";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPicture from "./components/mainPicture/mainPicture";
import CardList from "./components/cardList/cardList";

class App extends Component {
  state = {
    items: getProducts(),
    currentPage: 1,
    itemsPerPage: 8,
  };

  handleIncrement = () => {
    const numberOfPages = Math.ceil(
      this.state.items.length / this.state.itemsPerPage
    );

    if (this.state.currentPage < numberOfPages) {
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
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
