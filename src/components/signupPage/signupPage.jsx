import React, { Component } from "react";
import "./signupPage.scoped.css";
import axios from 'axios';
class SignUp extends Component {

    state = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    }

    handleChange = (field, event) => {
        this.setState({ [field]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            password: this.state.password,
        };
        axios

        .post('http://localhost:1337/auth/local/register', data)
        .then(response => {
            // Handle success.
            alert('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
        })
        .then(response => {
            localStorage.setItem("token", response.data.jwt)
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
        });
    };


  render() {
    return (
      <div className="window">
        <div className="container">
          <h1>Sign up</h1>
          <form
            onSubmit={this.handleSubmit}
            method="POST"
          >
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => this.handleChange("username", e)}
                />
            </div>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={(e) => this.handleChange("firstName", e)}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={(e) => this.handleChange("lastName", e)}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => this.handleChange("email", e)}
                />
            </div>

            <div>
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    onChange={(e) => this.handleChange("phone", e)}
                />
            </div>

            <div>
                <label>Address</label>
                <textarea
                    name="address"
                    onChange={(e) => this.handleChange("address", e)}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => this.handleChange("password", e)}
                />
            </div>


            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="square" />
      </div>
    );
  }
}

export default SignUp;
