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
    const fb = "//www.facebook.com/KieroGroup/";
    const ig = "//www.instagram.com/kierogroup";
    const tw = "//twitter.com/KIEROGROUP1";
    const lk = "//www.linkedin.com/in/kiero-group-15a6a7190/";
    const pt = "//co.pinterest.com/novedadeskiero/pins";
    const yt = "//www.youtube.com/user/KieroGroup";
    const ws = "//api.whatsapp.com/send?phone=5715800817&data=Abtjl_JlVp4Y7IoFRWKf-hlWAs-VGJ3oAFmXn4IGwwa3ocqSHrFkuqFrQCSStHVIt7TzEC6yGVjy6TA3FT5FYdPlrLxnmJ5kcvdfZ3tIaO0LElI4BnU3BkZT5O1suCVDqlk&source=FB_Ads&fbclid=IwAR1yaqUnrxYjWvfQ7Ggvz6jWEhP2R0ApqB2GIJcMq7Y52REAaoJCSkBjx00";
    const news = "//www.novedades.kiero.co"

    return (
      <div className="News">
        <section className="content">
          <section className="title">
            <Link href={news}><a  target="_blank"><img alt="Kiero.co" src={logo} className="logo" /></a>
            </Link>
          </section>
          <sections className="icons">
            <Link href={fb}><a  target="_blank"><img alt={fb} src={src} /></a></Link>
            <Link href={ig}><a target="_blank"><img alt={ig} src={src1} /></a></Link>
            <Link href={lk}><a target="_blank"><img alt={lk} src={src3} /></a></Link>
            <Link href={ws}><a target="_blank"><img alt={ws} src={src7} /></a></Link>
            <Link href={tw}><a target="_blank"><img alt={tw} src={src2} /></a></Link>
            <Link href={yt}><a target="_blank"><img alt={yt} src={src5} /></a></Link>
            <Link href={pt}><a target="_blank"><img alt={pt} src={src4} /></a></Link>
          </sections>
        </section>
      </div>
    );
  }
}

export default News;
