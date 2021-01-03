import React, { Component } from "react";
import "./profilePage.scoped.css";
import Button from "../button/button";

class ProfilePage extends Component {
  render() {
    const { currentAccount, isEditing, handleEditing } = this.props;

    return (
      <div className="container">
        <h1>Account</h1>
        <form>
          <div className="input">
            <p>First Name</p>
            <input disabled={!isEditing} value={currentAccount.firstName} />
          </div>
          <div className="input">
            <p>Last Name</p>
            <input disabled={!isEditing} />
          </div>
          <div className="input">
            <p>Email</p>
            <input disabled={!isEditing} />
          </div>
          <div className="input">
            <p>Phone</p>
            <input disabled={!isEditing} />
          </div>
          <div className="text-area">
            <p>Address</p>
            <textarea disabled={!isEditing} />
          </div>
          {/* todo: Handle saving the edited profile. */}
          <div className="button" onClick={handleEditing}>
            <Button title={!isEditing ? "Edit" : "Save"} />
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePage;
