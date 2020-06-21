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
    let fb = "//www.facebook.com/KieroGroup/";
    let ig = "//www.instagram.com/kierogroup";
    let tw = "//twitter.com/KIEROGROUP1";
    let lk = "//www.linkedin.com/in/kiero-group-15a6a7190/";
    let pt = "//co.pinterest.com/novedadeskiero/pins/";
    let yt = "//www.sic.gov.co";
    let ws = "//www.sic.gov.co";
    let news = "//www.novedades.kiero.co"

    return (
      <div className="News">
        <section className="content">
          <section className="title">
            <Link href={news}><a><img src={logo} className="logo" /></a>
            </Link>
          </section>
          <sections className="icons">
            <Link href={fb}><a><img src={src} /></a></Link>
            <Link href={ig}><a><img src={src1} /></a></Link>
            <Link href={lk}><a><img src={src3} /></a></Link>
            {/*<img src={src7} />*/}
            <Link href={tw}><a><img src={src2} /></a></Link>
            {/*<img src={src5} />*/}
            <Link href={pt}><a><img src={src4} /></a></Link>
          </sections>
        </section>
      </div>
    );
  }
}

export default News;
