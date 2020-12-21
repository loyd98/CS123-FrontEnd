import React, { Component } from "react";
import "./ratings.css";

class Ratings extends Component {
    render() {
        var stars = [];
        for (var i = 0; i < 5; i++) {
            if (i < this.props.rating) {
                stars.push(<i class="fas fa-star"></i>);
            }
            else {
                stars.push(<i class="far fa-star"></i>);
            }
        }
        return stars;
    }
}

export default Ratings;
