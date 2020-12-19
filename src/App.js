import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Rating from "./components/ratings";
import Card from "./components/card";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Rating />
        <Card
          itemName="Burger"
          price="75.00"
          rating="5"
          imgLink="https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png"
        />
      </React.Fragment>
    );
  }
}

export default App;
