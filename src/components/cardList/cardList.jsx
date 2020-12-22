import React, { Component } from "react";
import "./cardList.scoped.css";
import Card from "../card/card";
import ArrowButton from "../arrowButton/arrowButton";

class CardList extends Component {
  render() {
    const {
      items,
      currentPage,
      itemsPerPage,
      onIncrement,
      onDecrement,
    } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item) => {
      return (
        <Card
          key={item._id}
          itemName={item.name}
          rating={item.rating}
          imgLink={item.imgLink}
          price={item.price}
        />
      );
    });

    return (
      <div className="container">
        <h1>Menu</h1>
        <div className="grid">
          <ArrowButton type={"left"} onClick={onDecrement} />
          <div className="list">{renderItems}</div>
          <ArrowButton type={"right"} onClick={onIncrement} />
        </div>
      </div>
    );
  }
}

export default CardList;
