import React, { Component } from "react";
import "./Category.css";
import Filter from "./../Filter";
import ListCategory from "./../ListCategory";
import Footer from "../Common/Footer";
import Nav from "../Common/Nav/Nav";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "grid" };
    this.toggleFormat = this.toggleFormat.bind(this);
  }
  toggleFormat(format) {
    this.setState(format);
  }
  render() {
    return (
      <div className="">
        <Nav />
        <div className="search-content">
          <Filter toggle={this.toggleFormat} format={this.state.format} />
          <ListCategory format={this.state.format} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Category;
