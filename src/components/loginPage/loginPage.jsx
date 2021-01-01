import React, { Component } from "react";
import "./loginPage.scoped.css";
import Button from "../button/button";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    const {
      email,
      password,
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
              value={email}
              onChange={onEmailChange}
              onClick={onEmailClick}
            />
            <input
              type="text"
              value={password}
              onChange={onPasswordChange}
              onClick={onPasswordClick}
            />
          </form>
          <div className="button">
            <Button
              title="Log in"
              onClick={() => console.log(email, password)}
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
