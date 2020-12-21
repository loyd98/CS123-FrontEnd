import React, { Component } from "react";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPicture from "./components/mainPicture/mainPicture";
import CardList from "./components/cardList/cardList";

class App extends Component {
  state = {
    items: getProducts(),
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainPicture />
        <CardList items={this.state.items} />
      </React.Fragment>
    );
  }
}

export default App;
