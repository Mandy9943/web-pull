import dynamic from "next/dynamic";
import React, { useState } from "react";

import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
// import backGround from "../../assets/img/productDetail/fondo-rojo-landing-view@2x.svg";

import CheckoutProduct from "./common/CheckoutProduct/CheckoutProduct";
import Header from "./common/Header/Header";

const SwiperSlider = dynamic(
  () => import("./common/SwiperSlider/SwipperSlider"),
  {
    loading: () => <p>...</p>,
  }
);

import "./ProductDetailMobil.module.css";
import Info from "./common/Info/Info";
import PayMethod from "./common/PayMethod/PayMethod";
import Detail from "./common/Detail/Detail";
import Description from "./common/Description/Description";

import Benefits from "./common/Benefits/Benefits";
import HelpCenter from "./common/HelpCenter/HelpCenter";
import Subscription from "./common/Subscription/Subscription";
import RecommendedProducts from "./common/RecommendedProducts/RecommendedProducts";

import Image from "next/image";
import useScrollY from "../../lib/hooks/useScrollY";

import WhatsappBanner from "./common/WhatsappBanner/WhatsappBanner";
// import CheckoutButton from "./common/CheckoutButton/CheckoutButton";
const OurClient = dynamic(() => import("./common/OurClient/OurClient"), {
  loading: () => <p>...</p>,
});
const Nav = dynamic(() => import("../Common/Nav/Nav"));
const Footer = dynamic(() => import("../Common/Footer"));
const FormProductDetail = dynamic(() =>
  import("./common/formProductDetail/formProductDetail")
);
const StickyPayButton = dynamic(() =>
  import("./common/StickyPayButton/StickyPayButton")
);

const SellerInfo = dynamic(() => import("./common/SellerInfo/SellerInfo"), {
  loading: () => <p>...</p>,
});

const ProductDetailMobil = ({ user_data, data }) => {
  let urlSic = "https://www.sic.gov.co";
  const [isForm, setIsForm] = useState(false);
  const [isWhatsappBanner, setIsWhatsappBanner] = useState(true);
  const scrolledPayButton = useScrollY(700, false);

  const handleCloseWhatsappBanner = () => {
    setIsWhatsappBanner(false);
  };
  const handleCloseForm = () => {
    setIsForm(false);
  };
  const handleOpenForm = () => {
    setIsForm(true);
  };

  let navClass = ["Nav"];
  if (isWhatsappBanner) {
    navClass.push("Nav-mt");
  }
  return (
    <div id="productDetailMobil">
      {isWhatsappBanner && (
        <WhatsappBanner
          close={handleCloseWhatsappBanner}
          productId={data.product_global_id}
        />
      )}
      <div className={navClass.join(" ")}>
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
      </div>
      {scrolledPayButton && !isForm && (
        <StickyPayButton onClickBuy={handleOpenForm} />
      )}
      <FormProductDetail open={isForm} handleClose={handleCloseForm} />
      <div className="content-curve-shape">
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
        onClickBuy={handleOpenForm}
        price={data.price}
        stock={data.status === 0 ? 0 : data.stock}
        discount_percentage={data.discount_percentage}
      />

      <Info />
      <PayMethod />
      <Detail product={data} />
      <Description product={data} />
      <OurClient category={data?.breadcum[0]?.name.substring(0, 7)} />
      <SwiperSlider
        type={"specialOffer"}
        price={data.price}
        images={data.images}
        altImg={data.title}
        stock={data.status === 0 ? 0 : data.stock}
        discount_percentage={data.discount_percentage}
      />
      <SellerInfo />
      <RecommendedProducts category={data.category} />
      <Benefits />
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
