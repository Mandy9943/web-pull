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
          {!authenticated ?
            <section className="login-home-movil">
              <h5>Crea tu cuenta y descrubre los mejores productos</h5>
              <Link href="/registro"><a className="main-button"><p>Registrarse</p></a></Link>
              <Link href="/login"><a>Ya tienes cuenta? <span>Iniciar sesión</span></a></Link>
            </section>
            :
            null
          }
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
          <a href="www.sic.gov.co" target="_blank"><img src={Logo1} /></a>
          <a href="www.sic.gov.co" target="_blank"><img src={Logo2} /></a>
        </div>
      </div>
    );
  }
}
