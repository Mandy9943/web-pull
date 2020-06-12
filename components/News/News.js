import React, { Component } from "react";
import "./News.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome
} from "@fortawesome/free-solid-svg-icons";
import src from "../../assets/img/redes/fb.png";
import src1 from "../../assets/img/redes/ig.png";
import src2 from "../../assets/img/redes/tw.png";
import src3 from "../../assets/img/redes/lk.png";
import src4 from "../../assets/img/redes/pt.png";
import src5 from "../../assets/img/redes/yt.png";
import src7 from "../../assets/img/redes/ws.png";
import logo from "../../assets/img/redes/logo.png";


class News extends Component {
  render() {
    return (
      <div className="News">
        <section className="title"><img src={logo}  className="logo"/></section>
        <sections className="icons">
          <Link href="#"><a><img src={src}/></a></Link>
          <Link href="#"><a><img src={src1}/></a></Link>
          <Link href="#"><a><img src={src3}/></a></Link>
          <Link href="#"><a><img src={src7}/></a></Link>
          <Link href="#"><a><img src={src2}/></a></Link>
          <Link href="#"><a><img src={src5}/></a></Link>
          <Link href="#"><a><img src={src4}/></a></Link>
        </sections>
      </div>
    );
  }
}

export default News;
