import React, { Component } from "react";
import Link from "next/link";
import "./Finding.css";

class Finding extends Component {

    constructor(props) {
        super(props);
    }


  render() {

    let CategoryImg = "//kiero.co/images/resources/finding-banner/";
    
    return (
      <div className="wrap-finding">
        <div className="content-finding">
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg + this.props.category.img0} alt={this.props.category.img} />
            </div>
            <div className="wrap-info">
              <p className="category-text">{this.props.category.father0}</p>
              <h3 className="finding-title">{this.props.category.sub1}</h3>
              <Link href={this.props.category.url1}>Ver más</Link>
            </div>
          </div>
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg + this.props.category.img1} alt={this.props.category.img1} />
            </div>
            <div className="wrap-info">
              <p className="category-text">{this.props.category.father1}</p>
              <h3 className="finding-title">{this.props.category.sub2}</h3>
              <Link href={this.props.category.url2}>Ver más </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finding;
