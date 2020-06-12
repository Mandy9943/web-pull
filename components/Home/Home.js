import React, { Component } from "react";
import Footer from "../Common/Footer";
import "./Home.css";
import Nav from "../Common/Nav/Nav";
import PrincipalSlider from "./../PrincipalSlider";
import Payment from "./../PaymentBar";
import ProductsSlider from "./../ProductsSlider";
import Finding from "./../Finding";
import Explorer from "./../Common/Explorer";
import CategoriesImgMenu from "./../CategoriesImgMenu";
import Tickets from "./../Tickets";
import Info from "./../Info";
import Social from "./../SocialBar";
import ProductCardFinding from "../Common/ProductCardFinding/ProductCardFinding";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <PrincipalSlider />
        <div className="home-content">
          <Payment />
          <ProductsSlider />
          <ProductCardFinding />
          <Finding />
          <ProductCardFinding />
          <Explorer />
          <Finding />
          <CategoriesImgMenu />
          <Tickets />
        </div>
        <Info />
        <Social />
        <Footer />
      </div>
    );
  }
}
