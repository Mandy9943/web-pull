import React, { Component } from "react";
import Link from "next/link";
import "./NoFinding.css";
import Image from "next/image";

class CategoryFinding extends Component {
  render() {
    // console.log(this.props.img_left);
    // console.log(this.props.link_left);
    // console.log(this.props.img_right);
    // console.log(this.props.link_right);
    return (
      <div className="finding-category">
        {/* <Link href={'/categoria/[category]'} as={'/categoria/' + this.props.link_left}> */}
        <a
          href={
            "/categoria/" +
            this.props.link_left.replace(/ /g, "-").toLowerCase()
          }
        >
          <div className="anullProperties">
            <Image
              layout="fill"
              src={this.props.img_left}
              alt={this.props.link_left.replace(/-/g, " ")}
            />
          </div>
        </a>
        {/* <Link href={'/categoria/[category]'} as={'/categoria/' + this.props.link_right}> */}
        <a
          href={
            "/categoria/" +
            this.props.link_right.replace(/ /g, "-").toLowerCase()
          }
        >
          <div className="anullProperties">
            <Image
              layout="fill"
              src={this.props.img_right}
              alt={this.props.link_right.replace(/-/g, " ")}
            />
          </div>
        </a>
      </div>
    );
  }
}

export default CategoryFinding;
