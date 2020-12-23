import React, { Component } from "react";
import "./cardList.scoped.css";
import Card from "../card/card";
import RightArrowButton from "../arrowButtons/rightArrowButton";
import LeftArrowButton from "../arrowButtons/leftArrowButton";

class CardList extends Component {
  render() {
    const {
      items,
      currentPage,
      itemsPerPage,
      onIncrement,
      onDecrement,
      onLeftPress,
      isSlidingLeft,
      onRightPress,
      isSlidingRight,
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
          onLeftPress={onLeftPress}
          isSlidingLeft={isSlidingLeft}
          onRightPress={onRightPress}
          isSlidingRight={isSlidingRight}
        />
      );
    });

    return (
      <div className="container">
        <h1>Menu</h1>
        <div className="grid">
          <LeftArrowButton onClick={onDecrement} onPress={onLeftPress} />
          <div className="list">{renderItems}</div>
          <RightArrowButton onClick={onIncrement} onPress={onRightPress} />
        </div>
      </div>
    );
  }
}

export default CardList;
