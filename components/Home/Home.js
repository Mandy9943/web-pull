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
        <Nav user={u_data.user} jwt={u_data.jwt} home={true} authenticated={u_data.authenticated} />
        <PrincipalSlider />
        <div className="home-content">
          <Payment />
          <ProductsSlider category={"Computación"} />
          <ProductsSlider category={"Belleza y Cuidado Personal"} />
          <SecundarySlider />
          <LoginMovil user={u_data.user} authenticated={u_data.authenticated}/>
          <Finding category={{ father: "Accesorios para Vehiculos", urlFather: "/categoria/Accesorios%20para%20Vehiculos", 
            sub1: "Repuestos para Carro", url1: "categoria/Repuestos%20para%20Carro", sub2: "Audio para carro", url2: "categoria/audio%20para%20carro" }} 
           />
          <ProductsSlider category={"Juegos y Juguetes"} />
          <Explorer />
          <Finding category={{ father: "Hogar y Muebles", urlFather: "categoria/Hogar%20y%20Muebles",
            sub1: "Muebles", url1: "categoria/muebles", sub2: "Cocina y comedor", url2:"cocina%20y%20comedor" }}
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
          <Link href={url}><a target="_blank"><img alt="sic.gov.co" src={Logo1} /></a></Link>
          <Link href={url}><a target="_blank"><img alt="sic.gov.co" src={Logo2} /></a></Link>
        </div>
      </div>
    );
  }
}
