import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { sendProductViewed } from "../../../lib/functions";
import FooterSocial from "../common/FooterSocial/FooterSocial";

import "./ProductDetailDesktop.module.css";
import dynamic from "next/dynamic";
import Info from "../common/Info/Info";
import RecommendedProducts from "../common/RecommendedProducts/RecommendedProducts";

const Nav = dynamic(() => import("../../Common/Nav/Nav"));

const SwiperSlider = dynamic(
  () => import("../common/SwiperSlider/SwipperSlider"),
  {
    suspense: true,
  }
);

const SellerInfo = dynamic(() => import("../common/SellerInfo/SellerInfo"), {
  suspense: true,
});

const Benefits = dynamic(() => import("../common/Benefits/Benefits"), {
  suspense: true,
});

const Subscription = dynamic(
  () => import("../common/Subscription/Subscription"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
const Footer = dynamic(() => import("../../Common/Footer"));
const ProductDetailDesktop = ({ user_data, data, userIp }) => {
  console.log({ data, userIp });
  useEffect(() => {
    sendProductViewed(data);
  }, [data]);
  return (
    <div id="ProductDetailDesktop">
      <Suspense fallback={`loading`}>
        <Nav
          user={user_data.user}
          jwt={user_data.jwt}
          home={true}
          authenticated={user_data.authenticated}
        />
        <div className="container">
          {/* para la primera parte del contenedor */}
          <Info />
          <div className="containerspecialOffer">
            <SwiperSlider
              type={"specialOffer"}
              price={data.price}
              images={data.images}
              altImg={data.title}
              stock={data.status === 0 ? 0 : data.stock}
              discount_percentage={data.discount_percentage}
              movil={false}
            />
          </div>
          <SellerInfo />
        </div>
        <Benefits />
        <Subscription />
      </Suspense>
      <Footer />
      <FooterSocial />
    </div>
  );
};

ProductDetailDesktop.propTypes = {
  user_data: PropTypes.object,
  data: PropTypes.object.isRequired,
  userIp: PropTypes.string.isRequired,
};

export default ProductDetailDesktop;
