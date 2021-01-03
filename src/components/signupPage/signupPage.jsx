import React, { Component } from "react";
import "./signupPage.scoped.css";
import Button from "../button/button";

class SignUp extends Component {
  render() {
    return (
      <div className="window">
        <div className="container">
          <h1>Sign up</h1>
          <form>
            <input />
            <input />
            <input />
            <input />
            <textarea />
            <input />
            <input />
            <Button title="Submit" />
          </form>
        </div>
        <div className="square" />
      </div>
    );
  }
}

export default SignUp;
