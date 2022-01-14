import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { sendProductViewed } from "../../../lib/functions";
import FooterSocial from "../common/FooterSocial/FooterSocial";

import "./ProductDetailDesktop.module.css";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("../../Common/Nav/Nav"));

const ProductDetailDesktop = ({ user_data, data, userIp }) => {
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
        </div>
        <FooterSocial />
      </Suspense>
    </div>
  );
};

ProductDetailDesktop.propTypes = {
  user_data: PropTypes.object,
  data: PropTypes.object.isRequired,
  userIp: PropTypes.string.isRequired,
};

export default ProductDetailDesktop;
