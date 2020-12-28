import React, { Component } from "react";
import MainPicture from "../mainPicture/mainPicture";
import CardList from "../cardList/cardList";
import Footer from "../footer/footer";

class MainPage extends Component {
  render() {
    const {
      items,
      currentPage,
      itemsPerPage,
      isSlidingLeft,
      isSlidingRight,
      onIncrement,
      onDecrement,
      onLeftPress,
      onRightPress,
      onItemClick,
    } = this.props;

    return (
      <React.Fragment>
        <MainPicture />
        <CardList
          items={items}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          isSlidingLeft={isSlidingLeft}
          isSlidingRight={isSlidingRight}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onLeftPress={onLeftPress}
          onRightPress={onRightPress}
          onItemClick={onItemClick}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainPage;
