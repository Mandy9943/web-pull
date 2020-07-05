import React, { Component } from "react";
import Footer from "../Common/Footer";
import Link from "next/link"
import "./Home.css";
import Nav from "../Common/Nav/Nav";
import PrincipalSlider from "./../PrincipalSlider";
import Payment from "./../PaymentBar";
import ProductsSlider from "./../ProductsSlider";
import Finding from "./../Finding";
import Explorer from "./../Common/Explorer";
import CategoriesImgMenu from "./../CategoriesImgMenu";
import Tickets from "./../Tickets";
import LoginMovil from "./../LoginMovil";
import News from "./../News";
import Info from "./../Info";
import Social from "./../SocialBar";
import ProductCardFinding from "../Common/ProductCardFinding/ProductCardFinding";
import ListProductMovil from "./../listProductMovil/listProductMovil"
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import SecundarySlider from "./../SecundarySlider";


export default class Home extends Component {
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    let url = "//www.sic.gov.co";


    return (
      <div className="container">
        <Nav user={u_data.user} home={true} authenticated={u_data.authenticated} />
        <PrincipalSlider />
        <div className="home-content">
          <Payment />
          <ProductsSlider category={"Computación"} />
          <ProductsSlider category={"Belleza y Cuidado Personal"} />
          <SecundarySlider />
          <LoginMovil />
          <Finding />
          <ProductsSlider category={"Juegos y Juguetes"} />
          <Explorer />
          <Finding />
          <ProductsSlider category={"Computación"} />
          <ListProductMovil jwt={u_data.jwt} />
          <CategoriesImgMenu />
          <Tickets />
        </div>

        <Info />
        <News />
        {/*<Social />*/}
        <Footer />
        <div className="footer-social">
          <Link href={url}><a target="_blank"><img src={Logo1} /></a></Link>
          <Link href={url}><a target="_blank"><img src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}
