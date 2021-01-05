import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { getProducts } from "./services/products";
import Navbar from "./components/navbar/navbar";
import MainPage from "./components/mainPage/mainPage";
import CartPage from "./components/cartPage/cartPage";
import ProfilePage from "./components/profilePage/profilePage";
import LoginPage from "./components/loginPage/loginPage";
import Footer from "./components/footer/footer";
import ItemModal from "./components/itemModal/itemModal";
import SignUp from "./components/signupPage/signupPage";
import Alert from "./components/alert/alert";

class App extends Component {
  constructor() {
    super();
    this.numberOfPages = Math.ceil(
      this.state.items.length / this.state.itemsPerPage
    );
  }

  state = {
    items: getProducts(),
    currentPage: 1,
    itemsPerPage: 8,
    isSlidingLeft: false,
    isSlidingRight: false,
    isModalVisible: false,
    currentItem: {},
    cart: [],
    isEditing: false,
    showAlert: false,
    currentAccount: {
      _id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      password: "Password",
    },
    accounts: [
      {
        _id: 0,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        phone: "09176661234",
        address:
          "17/F Citibank Centre Building, Paseo De Roxas Avenue, Salcedo Village, Makati City, Metro Manila, Philippines",
        password: "Password",
      },
    ],
  };

  handleSlideLeft = (value) => {
    if (this.state.currentPage > 1 || !value) {
      this.setState({ isSlidingLeft: value });
    }
  };

  handleSlideRight = (value) => {
    if (this.state.currentPage < this.numberOfPages || !value) {
      this.setState({ isSlidingRight: value });
    }
  };

  handleIncrement = () => {
    if (this.state.currentPage < this.numberOfPages) {
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

  handleModalVisibility = (e, value, data) => {
    this.setState({ isModalVisible: value, currentItem: data });
  };

  handleAddToCart = (order, quantity) => {
    const { cart } = this.state;
    const clone = { ...order };
    if (cart.length === 0) {
      clone._id = 0;
    } else {
      clone._id = cart.slice(-1)[0]._id + 1;
    }

    clone.quantity = quantity;
    this.setState({ cart: [...cart, clone] });
  };

  handleCloseCartItem = (e) => {
    const id = Number(e.target.dataset.remove);

    const newCart = this.state.cart.filter((item) => {
      return item._id !== id;
    });
    console.log(newCart);

    this.setState({ cart: newCart });
  };

  getSubTotal = () => {
    let subtotal = 0;

    if (this.state.cart.length > 0) {
      this.state.cart.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
    }

    return [subtotal.toFixed(2), subtotal];
  };

  getVAT = () => {
    const vat = this.getSubTotal()[1] * 0.2;
    return [vat.toFixed(2), vat];
  };

  getTotal = () => {
    const total = this.getSubTotal()[1] + this.getVAT()[1];
    return total.toFixed(2);
  };

  handleEmailChange = (e) => {
    const login = { ...this.state.currentAccount };
    login.email = e.target.value;

    this.setState({ currentAccount: login });
  };

  handlePasswordChange = (e) => {
    const login = { ...this.state.currentAccount };
    login.password = e.target.value;

    this.setState({ currentAccount: login });
  };

  handleEmailClick = () => {
    const login = { ...this.state.currentAccount };
    login.email = "";

    this.setState({ currentAccount: login });
  };

  handlePasswordClick = () => {
    const login = { ...this.state.currentAccount };
    login.password = "";

    this.setState({ currentAccount: login });
  };

  handleEditing = () => {
    this.setState({ isEditing: true });
  };

  handleAlert = (value) => {
    this.setState({ showAlert: value });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Alert
            message="Please log in to continue."
            trigger={this.state.showAlert}
            onClick={this.handleAlert}
          />
          <ItemModal
            item={null}
            currentItem={this.state.currentItem}
            isModalVisible={this.state.isModalVisible}
            handleModalVisibility={this.handleModalVisibility}
            handleAddToCart={this.handleAddToCart}
            handleAlert={this.handleAlert}
            currentAccount={this.state.currentAccount}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <MainPage
                  items={this.state.items}
                  currentPage={this.state.currentPage}
                  itemsPerPage={this.state.itemsPerPage}
                  isSlidingLeft={this.state.isSlidingLeft}
                  isSlidingRight={this.state.isSlidingRight}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onLeftPress={this.handleSlideLeft}
                  onRightPress={this.handleSlideRight}
                  handleModalVisibility={this.handleModalVisibility}
                />
              )}
            />
            <Route
              path="/cart"
              render={() => (
                <CartPage
                  cart={this.state.cart}
                  subtotal={this.getSubTotal()[0]}
                  vat={this.getVAT()[0]}
                  total={this.getTotal()}
                  handleCloseCartItem={this.handleCloseCartItem}
                  handleAlert={this.handleAlert}
                  currentAccount={this.state.currentAccount}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <ProfilePage
                  currentAccount={this.state.currentAccount}
                  isEditing={this.state.isEditing}
                  handleEditing={this.handleEditing}
                  handleAlert={this.handleAlert}
                />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <LoginPage
                  currentAccount={this.state.currentAccount}
                />
              )}
            />
            <Route path="/signup" render={() => <SignUp />} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
