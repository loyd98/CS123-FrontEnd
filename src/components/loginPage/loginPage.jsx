import React, { Component } from "react";
import "./loginPage.scoped.css";
import Button from "../button/button";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const {
      currentAccount,
      onEmailChange,
      onPasswordChange,
      onEmailClick,
      onPasswordClick,
    } = this.props;

    return (
      <div className="container">
        <div className="window">
          <div className="logo">
            <h1 className="logo-text">Food</h1>
          </div>
          <h1 className="title">Hello!</h1>
          <form>
            <input
              type="text"
              value={currentAccount.email}
              onChange={onEmailChange}
              onClick={onEmailClick}
              disabled={currentAccount._id === null ? false : true}
            />
            <input
              type={
                currentAccount.password === "Password" ? "text" : "password"
              }
              value={currentAccount.password}
              onChange={onPasswordChange}
              onClick={onPasswordClick}
              disabled={currentAccount._id === null ? false : true}
            />
          </form>
          <div className="button">
            <Button
              title="Log in"
              onClick={() =>
                console.log(currentAccount.email, currentAccount.password)
              }
            />
          </div>
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
