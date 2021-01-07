import React, { Component } from "react";
import "./loginPage.scoped.css";
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {

    state = {
        identifier: "",
        password: "",
    }

    handleChange = (field, event) => {
        this.setState({ [field]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            identifier: this.state.identifier,          
            password: this.state.password,
        };
        axios
        .post('http://localhost:1337/auth/local', data)
        .then(res => {
            // Handle success.
            alert('Logged in');
            console.log('User: ', res.data.user);
            localStorage.setItem("token", res.data.jwt)

            localStorage.setItem("firstName", res.data.user.firstName)
            localStorage.setItem("lastName", res.data.user.lastName)
            localStorage.setItem("email", res.data.user.email)
            localStorage.setItem("phone", res.data.user.phone)
            localStorage.setItem("address", res.data.user.address)
        })
        .then(() => {
            console.log(localStorage.getItem('firstName'))
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });
    }

  render() {

    
    return (
      <div className="container">
        <div className="window">
          <div className="logo">
            <h1 className="logo-text">Food</h1>
          </div>
          <h1 className="title">Hello!</h1>
          <form
            onSubmit={this.handleSubmit}
            method="POST"
          >
            <input
              type="email"
              name="identifier"
              placeholder="Email"
              onChange={(e) => this.handleChange("identifier", e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => this.handleChange("password", e)}
            />

            <div className="button">
                <button type="submit">Log in</button>
            </div> 
          </form>
          
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
