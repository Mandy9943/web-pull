import dynamic from "next/dynamic";
import React from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";

import "./ProductDetailMobil.css";
const Nav = dynamic(() => import("../Common/Nav/Nav"), {
  suspense: true,
});
const Footer = dynamic(() => import("../Common/Footer"), {
  suspense: true,
});

const SkeletonProductDatail = () => {
  return (
    <Fragment>
      <div className="content-curve-shape mb"></div>
      <div className="content">
        <div className="wrapper">
          <div className="product-img">
            <Skeleton className="product-datail-skeleton" />
          </div>
        </div>
      </div>
      <div className="skeleton-envios mb">
        <Skeleton className="product-datail-skeleton" />
      </div>
      <div className="skeleton-pagos mb">
        <Skeleton className="product-datail-skeleton" />
      </div>
      <div className="skeleton-detalles mb">
        <Skeleton className="product-datail-skeleton" />
      </div>
      <div className="skeleton-detalles mb">
        <Skeleton className="product-datail-skeleton" />
      </div>
      <div className="skeleton-others mb">
        <Skeleton className="product-datail-skeleton" />
      </div>
    </Fragment>
  );
};

const ProductDetailMobil = ({ user_data, data }) => {
  let urlSic = "https://www.sic.gov.co";
  // const [isSkeleton, setIsSkeleton] = useState(true);
  console.log("user_data", user_data);
  console.log("data", data);
  return (
    <div id="productDetailMobil">
      <Nav
        user={user_data.user}
        jwt={user_data.jwt}
        home={true}
        authenticated={user_data.authenticated}
      />
      {SkeletonProductDatail()}
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
