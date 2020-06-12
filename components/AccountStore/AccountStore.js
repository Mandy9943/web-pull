import React, { Component } from "react";
import "./AccountStore.css";
import Nav from "../Common/Header";
import Footer from "../Common/Footer";
import Menu from "../Common/AccountStoreMenu";
import Data from "./AccountStoreProduct";

class AccountStore extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="wrap-account-content">
          {/* <Menu /> */}
          <div className="wrap-account-module">
            <Data />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AccountStore;
