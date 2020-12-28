import React, { Component } from "react";
import "./footer.scoped.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="hotlines">
          <h1>Delivery Hotlines</h1>
          <h2>8888-8888</h2>
          <h2>7777-7777</h2>
        </div>
        <div className="socmed">
          <h1>Follow us on</h1>
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
          <p>2020 All Rights Reserved</p>
        </div>
        <div className="logofooter">
          <h1 className="logotext">Food</h1>
        </div>

        <div className="rec-container">
          <div className="rec1" />
          <div className="rec2" />
        </div>
      </div>
    );
  }
}

export default Footer;
