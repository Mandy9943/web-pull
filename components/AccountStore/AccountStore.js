import React, { Component } from "react";
import "./AccountStore.css";
import Nav from "../Common/Header";
import Footer from "../Common/Footer";
import Data from "./AccountStoreProduct";

class AccountStore extends Component {
  render() {
    return (
      <div className="account-page">
        <Nav />
        <div className="wrap-account-content">
          <div className="wrap-account-module">
            <Data data={this.props.data} jwt={this.props.jwt} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AccountStore;
