import React, { Component } from "react";
import "./navbar.scoped.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="menu">
            <div className="logo">
              <h1>Food</h1>
            </div>
            <ul className="menu-group">
              <li>
                <Link to="/">Order</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
