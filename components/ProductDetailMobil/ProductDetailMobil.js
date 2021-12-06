import dynamic from "next/dynamic";
import React from "react";

import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import backGround from "../../assets/img/productDetail/fondo-rojo-landing-view@2x.svg";

import CheckoutProduct from "./common/CheckoutProduct/CheckoutProduct";
import Header from "./common/Header/Header";
import SwiperSlider from "./common/SwiperSlider/SwipperSlider";

import "./ProductDetailMobil.css";
import Info from "./common/Info/Info";
import PayMethod from "./common/PayMethod/PayMethod";

const Nav = dynamic(() => import("../Common/Nav/Nav"));
const Footer = dynamic(() => import("../Common/Footer"));

const ProductDetailMobil = ({ user_data, data }) => {
  let urlSic = "https://www.sic.gov.co";
  console.log("data", data);
  return (
    <div id="productDetailMobil">
      <div className="Nav">
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
      </div>
      <div className="content-curve-shape">
        <div className="curve-shape">
          <img src={backGround} alt="Red background" />
        </div>
        <div className="header-detail">
          <Header title={data.title} bredCumbs={data.breadcum} />
        </div>
        <div className="content-images">
          <div className="slider">
            <SwiperSlider images={data.images} altImg={data.title}/>
          </div>
        </div>
      </div>

      <CheckoutProduct price={data.price} stock={6} />
      <Info />
      <PayMethod />
      <Footer />
      <div className="footer-social ">
        <a href={urlSic} rel="noopener noreferrer" target="_blank">
          <img
            loading="lazy"
            alt="Superintendencia de Industria y Comercio"
            src={Logo1}
          />
        </a>
        <a href={urlSic} rel="noopener noreferrer" target="_blank">
          <img
            loading="lazy"
            alt="Superintendencia de Industria y Comercio"
            src={Logo2}
          />
        </a>
      </div>
    </div>
  );
};

export default ProductDetailMobil;
