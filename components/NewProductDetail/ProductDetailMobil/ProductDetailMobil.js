import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useState } from "react";

// import backGround from "../../../assets/img/productDetail/fondo-rojo-landing-view@2x.svg";
import CheckoutProduct from "../common/CheckoutProduct/CheckoutProduct";
import Header from "../common/Header/Header";
import {
  handleActivateBack,
  handleDeactivateBack,
  sendCheckoutStepViewed,
} from "../../../lib/functions.js";

import "./ProductDetailMobil.module.css";

import useScrollY from "../../../lib/hooks/useScrollY";
import { sendProductViewed } from "../../../lib/functions";
import {
  openForm,
  selectIsFormOpen,
} from "../../../redux/feature/pay/paySlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/redux";
import FooterSocial from "../common/FooterSocial/FooterSocial";

const SwiperSlider = dynamic(
  () => import("../common/SwiperSlider/SwipperSlider"),
  {
    suspense: true,
  }
);

const Info = dynamic(() => import("../common/Info/Info"), {
  suspense: true,
});
const PayMethod = dynamic(() => import("../common/PayMethod/PayMethod"), {
  suspense: true,
});
const Detail = dynamic(() => import("../common/Detail/Detail"), {
  suspense: true,
});
const Description = dynamic(() => import("../common/Description/Description"), {
  suspense: true,
});

const Benefits = dynamic(() => import("../common/Benefits/Benefits"), {
  suspense: true,
});
const HelpCenter = dynamic(() => import("../common/HelpCenter/HelpCenter"), {
  suspense: true,
});
const Subscription = dynamic(
  () => import("../common/Subscription/Subscription"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
const RecommendedProducts = dynamic(
  () => import("../common/RecommendedProducts/RecommendedProducts"),
  {
    suspense: true,
  }
);

const WhatsappBanner = dynamic(
  () => import("../common/WhatsappBanner/WhatsappBanner"),
  {
    suspense: true,
  }
);
// import CheckoutButton from "./common/CheckoutButton/CheckoutButton";
const OurClient = dynamic(() => import("../common/OurClient/OurClient"), {
  suspense: true,
});
const Nav = dynamic(() => import("../../Common/Nav/Nav"));
const Footer = dynamic(() => import("../../Common/Footer"));
const FormProductDetail = dynamic(() =>
  import("../common/formProductDetail/formProductDetail")
);
const StickyPayButton = dynamic(() =>
  import("../common/StickyPayButton/StickyPayButton")
);

const SellerInfo = dynamic(() => import("../common/SellerInfo/SellerInfo"), {
  suspense: true,
});

const ProductDetailMobil = ({ user_data, data, userIp }) => {
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
    sendCheckoutStepViewed(data, 2);
    dispatch(openForm(false));

    handleActivateBack();
  };
  const handleOpenForm = () => {
    sendCheckoutStepViewed(data, 1);
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
      <Suspense fallback={`loading`}>
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
        <FormProductDetail
          open={isForm}
          handleClose={handleCloseForm}
          userIp={userIp}
        />
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
          type={"specialOfferMovil"}
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
      </Suspense>
      <FooterSocial />
    </div>
  );
};

export default ProductDetailMobil;
