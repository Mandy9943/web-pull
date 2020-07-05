import React, { Component } from "react";
import Footer from "../Common/Footer";
import Link from "next/link"
import "./CategoryList.css";
import Nav from "../Common/Nav/Nav";
import Finding from "./../Finding";
import Tickets from "./../Tickets";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";

export default class CategoryList extends Component {
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    let url = "//www.sic.gov.co";

    let urlBanner = "//kiero.co/images/resources/deportes%20y%20fitness/1.jpg";

    var complete = {
      "deporte y fitness": [1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
      "animales y mascotas": [1, 3, 2, 3, 1],
      "bebes": [1, 2, 3, 2, 3, 2, 1],
      "belleza y cuidado personal": [1, 2, 3, 2, 3, 2],
      "camaras y accesorios":  [1, 2, 3, 2],
      "celulares":[1, 2, 3, 2],
      "consolas y videojuegos": [1, 2, 3, 2, 3, 2, 2],
      "electronica audio y video": [1, 2, 3, 2, 3, 2, 3, 2, 1],
      "herramientas": [1, 2, 3, 2],
      "hogar": [1, 2, 3, 2, 1],
      "industrias y oficinas": [1, 2, 3, 2],
      "instrumentos musicalies": [1, 2, 3, 2],
      "juegos y juguetes": [1, 2, 3, 2, 3, 2, 3, 2, 3, 3],
      "relojes y joyas": [1, 3, 2, 3, 2, 3, 1],
      "ropa zapatos y accesorios": [1, 2, 2],
      "vehiculos y accesorios": [1, 2, 3, 2, 3, 2]
    }

    return (
      <div className="container category-list">
        <Nav user={u_data.user} home={true} authenticated={u_data.authenticated} />
        <section className="content">
          <img className="banner-principal" src={urlBanner} />
          <Finding />
          <Tickets />
          <Finding />
          <Tickets />
          <Finding />
        </section>
        <Footer />
        <div className="footer-social">
          <Link href={url}><a target="_blank"><img src={Logo1} /></a></Link>
          <Link href={url}><a target="_blank"><img src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}
