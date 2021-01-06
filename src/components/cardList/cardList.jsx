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
      handleModalVisibility,
    } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map((item) => {
      return (
        <Card
          key={item.id}
          item={item}
          onLeftPress={onLeftPress}
          isSlidingLeft={isSlidingLeft}
          onRightPress={onRightPress}
          isSlidingRight={isSlidingRight}
          handleModalVisibility={handleModalVisibility}
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
