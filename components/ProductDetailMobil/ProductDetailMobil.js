import dynamic from "next/dynamic";
import React, { useState } from "react";

import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import backGround from "../../assets/img/productDetail/fondo-rojo-landing-view@2x.svg";

import CheckoutProduct from "./common/CheckoutProduct/CheckoutProduct";
import Header from "./common/Header/Header";
const SwiperSlider = dynamic(
  () => import("./common/SwiperSlider/SwipperSlider"),
  {
    loading: () => <p>...</p>,
  }
);

import "./ProductDetailMobil.css";
import Info from "./common/Info/Info";
import PayMethod from "./common/PayMethod/PayMethod";
import Detail from "./common/Detail/Detail";
import Description from "./common/Description/Description";
const OfferSection = dynamic(
  () => import("./Common/OfferSection/OfferSection"),
  {
    loading: () => <p>...</p>,
  }
);
import Benefits from "./common/Benefits/Benefits";
import HelpCenter from "./common/HelpCenter/HelpCenter";
import Subscription from "./common/Subscription/Subscription";
import RecommendedProducts from "./common/RecommendedProducts/RecommendedProducts";

import Image from "next/image";
import useScrollY from "../../lib/hooks/useScrollY";
import StickyPayButton from "./common/StickyPayButton/StickyPayButton";
import WhatsappBanner from "./common/WhatsappBanner/WhatsappBanner";
import FormProductDetail from "./common/formProductDetail/FormProductDetail";

const Nav = dynamic(() => import("../Common/Nav/Nav"));
const Footer = dynamic(() => import("../Common/Footer"));

const ProductDetailMobil = ({ user_data, data }) => {
  let urlSic = "https://www.sic.gov.co";
  console.log("data", data);
  const [isWhatsappBanner, setIsWhatsappBanner] = useState(true);
  const scrolledPayBuuton = useScrollY(700, false);

  const handleCloseWhatsappBanner = () => {
    setIsWhatsappBanner(false);
  };

  let navClass = ["Nav"];
  if (isWhatsappBanner) {
    navClass.push("Nav-mt");
  }
  return (
    <div id="productDetailMobil">
      {isWhatsappBanner && (
        <WhatsappBanner close={handleCloseWhatsappBanner} productId={"7741"} />
      )}
      <div className={navClass.join(" ")}>
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
      </div>
      {scrolledPayBuuton && <StickyPayButton />}
      <FormProductDetail />
      <div className="content-curve-shape">
        <div className="curve-shape">
          <div className="anullProperties">
            <Image
              loading="lazy"
              alt="Red background"
              src={backGround}
              layout="fill"
            />
          </div>
        </div>
        <div className="header-detail">
          <Header title={data.title} bredCumbs={data.breadcum} />
        </div>
        <div className="content-images">
          <div className="slider">
            <SwiperSlider
              type={"HomeProduct"}
              images={data.images}
              altImg={data.title}
            />
          </div>
        </div>
      </div>

      <CheckoutProduct
        price={data.price}
        stock={data.status === 0 ? 0 : data.stock}
        discount_percentage={data.discount_percentage}
      />
      <Info />
      <PayMethod />
      <Detail product={data} />
      <Description product={data} />
      <OfferSection />
      {/*TODO: Primero va ofectas especiales*/}
      <Benefits />
      <RecommendedProducts category={data.category} />
      <HelpCenter />
      <Subscription />
      <Footer />
      <div className="footer-social">
        <a href={urlSic} rel="noopener noreferrer" target="_blank">
          <div className="anullProperties">
            <Image
              loading="lazy"
              alt="Superintendencia de Industria y Comercio"
              src={Logo1}
              layout="fill"
            />
          </div>
        </a>
        <a href={urlSic} rel="noopener noreferrer" target="_blank">
          <div className="anullProperties">
            <Image
              loading="lazy"
              alt="Superintencia de Industria y Comercio"
              src={Logo2}
              layout="fill"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductDetailMobil;
