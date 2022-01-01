import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
// import backGround from "../../assets/img/productDetail/fondo-rojo-landing-view@2x.svg";

import CheckoutProduct from "./common/CheckoutProduct/CheckoutProduct";
import Header from "./common/Header/Header";
import {
  handleActivateBack,
  handleDeactivateBack,
  sendCheckoutStepViewed,
} from "../../lib/functions.js";

import "./ProductDetailMobil.module.css";

import Image from "next/image";
import useScrollY from "../../lib/hooks/useScrollY";

const SwiperSlider = dynamic(
  () => import("./common/SwiperSlider/SwipperSlider"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

const Info = dynamic(() => import("./common/Info/Info"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const PayMethod = dynamic(() => import("./common/PayMethod/PayMethod"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const Detail = dynamic(() => import("./common/Detail/Detail"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const Description = dynamic(() => import("./common/Description/Description"), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Benefits = dynamic(() => import("./common/Benefits/Benefits"), {
  ssr: false,
  loading: () => <p>...</p>,
});
const HelpCenter = dynamic(() => import("./common/HelpCenter/HelpCenter"), {
  ssr: false,
  loading: () => <p>...</p>,
});
// const Subscription = dynamic(
//   () => import("./common/Subscription/Subscription"),
//   {
//     ssr: false,
//     loading: () => <p>...</p>,
//   }
// );
const RecommendedProducts = dynamic(
  () => import("./common/RecommendedProducts/RecommendedProducts"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

import { sendProductViewed } from "../../lib/functions";
import { openForm, selectIsFormOpen } from "../../redux/feature/pay/paySlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux";

const WhatsappBanner = dynamic(
  () => import("./common/WhatsappBanner/WhatsappBanner"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
// import CheckoutButton from "./common/CheckoutButton/CheckoutButton";
const OurClient = dynamic(() => import("./common/OurClient/OurClient"), {
  ssr: false,
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
  ssr: false,
  loading: () => <p>...</p>,
});

const ProductDetailMobil = ({ user_data, data }) => {
  let urlSic = "https://www.sic.gov.co";
  // console.log("data", data);

  useEffect(() => {
    sendProductViewed(data);
  }, [data]);

  // const [isForm, setIsForm] = useState(false);
  const [isWhatsappBanner, setIsWhatsappBanner] = useState(true);
  const scrolledPayButton = useScrollY(700, false);

  const isForm = useAppSelector(selectIsFormOpen);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isForm === true) {
      dispatch(openForm(true));
      handleDeactivateBack(() => {
        dispatch(openForm(false));
        handleActivateBack();
      });
    }
  }, [isForm]);

  const handleCloseForm = () => {
    sendCheckoutStepViewed(2);
    dispatch(openForm(false));

    handleActivateBack();
  };
  const handleOpenForm = () => {
    sendCheckoutStepViewed(1);
    dispatch(openForm(true));
  };
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
      {/* <Subscription /> */}
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
