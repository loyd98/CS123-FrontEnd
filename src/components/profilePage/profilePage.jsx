import React, { Component } from "react";
import "./profilePage.scoped.css";
import Button from "../button/button";

class ProfilePage extends Component {

  render() {
    const {
        isEditing,
        handleAlert,
        handleEditing,
        currentAccount
      } = this.props;

    
    return (
      <div className="container">
        <h1>Account</h1>
        <form>
          <div className="input">
            <p>First Name</p>
            <input disabled={!isEditing} value={localStorage.getItem('firstName')} />
          </div>
          <div className="input">
            <p>Last Name</p>
            <input disabled={!isEditing} value={localStorage.getItem('lastName')}/>
          </div>
          <div className="input">
            <p>Email</p>
            <input disabled={!isEditing} value={localStorage.getItem('email')} />
          </div>
          <div className="input">
            <p>Phone</p>
            <input disabled={!isEditing} value={localStorage.getItem('phone')} />
          </div>
          <div className="text-area">
            <p>Address</p>
            <textarea disabled={!isEditing} value={localStorage.getItem('address')} />
          </div>
          {/* todo: Handle saving the edited profile. */}
          <div
            className="button"
            onClick={() => {
              if (currentAccount._id === null) {
                handleAlert(true);
              } else {
                handleEditing();
              }
            }}
          >
            <Button title={!isEditing ? "Edit" : "Save"} />
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
