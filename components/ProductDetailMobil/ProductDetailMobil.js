import dynamic from "next/dynamic";
import React from "react";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";

const Nav = dynamic(() => import("../Common/Nav/Nav"));
const Footer = dynamic(() => import("../Common/Footer"));

const ProductDetailMobil = ({ user_data }) => {
  let urlSic = "https://www.sic.gov.co";
  return (
    <div>
      <Nav
        user={user_data.user}
        jwt={user_data.jwt}
        home={true}
        authenticated={user_data.authenticated}
      />
      <Footer />
      <div className="footer-social">
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
