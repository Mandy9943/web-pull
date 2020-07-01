import React, { Component } from "react";
import Footer from "../Common/Footer";
import Link from "next/link"
import "./CategoryList.css";
import Nav from "../Common/Nav/Nav";
import Finding from "./../Finding";
import Tickets from "./../Tickets";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import CategoryImg3 from "../../assets/img/category-img/category-edit.jpg";
import Pagination from "../Common/Pagination/Pagination";


export default class CategoryList extends Component {
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    let url = "//www.sic.gov.co";

    let urlBanner = "//kiero.co/images/resources/deportes%20y%20fitness/1.jpg";

    return (
      <div className="container category-list">
        <Nav user={u_data.user} home={true} authenticated={u_data.authenticated} />
        <section className="content">
          <img className="banner-principal" src={urlBanner}/>
          <Finding />
          <Tickets />
          <Finding />
          <Tickets />
          <Finding />
        </section>
        
        <Footer />
        <div className="footer-social">
          <Link href={url}><a><img src={Logo1} /></a></Link>
          <Link href={url}><a><img src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}
