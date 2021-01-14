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
    let u_data = this.props.user_data;
    let authenticated = this.props.authenticated;

    return (
      <div className="container">
        <Nav user={u_data.user} role={u_data.role} jwt={u_data.jwt} home={true} authenticated={u_data.authenticated} />
        <PrincipalSlider />
        <div className="home-content">
          <Payment />
         <ProductsSlider category={"Computación"} />
           <ProductsSlider category={"Belleza"} />
          <SecundarySlider />
          <LoginMovil user={u_data.user} authenticated={u_data.authenticated}/>
          <Finding category={{
            father0: "Electrodomésticos", father1: "Computacion",
            img0: "banner-electrodomesticos.jpg", img1: "banner-computacion.jpg",
            sub1: "Aspiradoras", url1: "categoria/Aspiradoras", sub2: "Monitores", url2: "categoria/Monitores" }} 
           />
           <ProductsSlider category={"Juguetes"} />
          <Explorer />
          <Finding category={{
            father0: "Deportes", father1: "Electronica",
            img0: "banner-deportes.jpg", img1: "banner-drones.jpg",
            sub1: "Bicicletas de carretera", url1: "categoria/Bicicle-tas%20de%20carretera", sub2: "Drones", url2:"categoria/Drones" }}
          />
          <ProductsSlider category={"Animales y Mascotas"} />
         <ListProductMovil jwt={u_data.jwt} />
          <CategoriesImgMenu />
          <Tickets /> 
        </div>
        <Info />
        <News />
        {/*<Social />*/}
        <Footer />
        <div className="footer-social">
          <Link href={"//sic.gov.co"}><a target="_blank"><img alt="sic.gov.co" src={Logo1} /></a></Link>
          <Link href={"//sic.gov.co"}><a target="_blank"><img alt="sic.gov.co" src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}
