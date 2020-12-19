import React, { Component } from "react";
import "./cardList.scoped.css";
import Card from "../card/card";

class CardList extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="container">
        <h2>Menu</h2>
        <div className="list">
          {items.map((item) => {
            return (
              <Card
                key={item._id}
                itemName={item.name}
                rating={item.rating}
                imgLink={item.imgLink}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
