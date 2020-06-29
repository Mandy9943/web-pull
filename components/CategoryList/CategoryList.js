import React, { Component } from "react";
import Footer from "../Common/Footer";
import Link from "next/link"
import "./CategoryList.css";
import Nav from "../Common/Nav/Nav";
import PrincipalSlider from "./../PrincipalSlider";
import Payment from "./../PaymentBar";
import ProductsSlider from "./../ProductsSlider";
import Finding from "./../Finding";
import Explorer from "./../Common/Explorer";
import CategoriesImgMenu from "./../CategoriesImgMenu";
import Tickets from "./../Tickets";
import News from "./../News";
import Info from "./../Info";
import Social from "./../SocialBar";
import ProductCardFinding from "../Common/ProductCardFinding/ProductCardFinding";
import ListProductMovil from "./../listProductMovil/listProductMovil"
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import SecundarySlider from "./../SecundarySlider";



export default class CategoryList extends Component {
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    let url = "//www.sic.gov.co";


    return (
      <div className="container category-list">
        <Nav user={u_data.user} home={true} authenticated={u_data.authenticated} />
        <section className="content">
          <PrincipalSlider />
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
