import React, { Component } from "react";
import "./navbar.scoped.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <h1>Food</h1>
        </div>
        <div className="menu">
          <ul className="menu-group">
            <li>
              <a href="">Order</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
