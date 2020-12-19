import React, { Component } from "react";
import "./ratings.css";

class Ratings extends Component {
    render() {
        return (
            <div className="rating">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        );
    }
}

export default Ratings;
