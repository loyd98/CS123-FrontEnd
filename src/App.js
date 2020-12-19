import React, { Component } from "react";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import CardList from "./components/cardList/cardList";

class App extends Component {
  state = {
    items: getProducts(),
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <CardList items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default App;
