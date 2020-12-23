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
                        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter-square"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                    <p>2020 All Rights Reserved</p>
                </div>

                <div className="logofooter">
                    <h1 className="logofoot">Food</h1>
                </div>

                <div className="rec1"></div>
                <div className="rec2"></div>
            </div>

        )
    }

}

export default Footer;