import React, { Component } from "react";
import "./Account.css";
import Nav from "./../Common/Header";
import Footer from "./../Common/Footer";
import Menu from "./../Common/AccountMenu";
import Data from "./AccountData";

class Account extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="wrap-account-content">
          <Menu />
          <div className="wrap-account-module">
            <Data />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Account;
