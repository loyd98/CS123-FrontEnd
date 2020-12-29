import React, { Component } from "react";
import MainPicture from "../mainPicture/mainPicture";
import CardList from "../cardList/cardList";

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
      handleModalVisibility,
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
          handleModalVisibility={handleModalVisibility}
        />
      </React.Fragment>
    );
  }
}

export default MainPage;
