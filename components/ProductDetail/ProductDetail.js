import React, { Component } from "react";
import Nav from "../Common/Nav";
import Footer from "../Common/Footer";
import DetailImg from "../DetailImg";
import Pay from "./../PaySection";
import Detail from "./../DetailProductInfo";
import Question from "./../Question";
import Explorer from "./../Common/Explorer";
import ProductCardFinding from "./../Common/ProductCardFinding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";
import Link from "next/link";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="detail-content">
          <div className="breadcrumb">
            <Link href="#">
              <a>
                Belleza y cuidado personal
              </a>
            </Link>
            <FontAwesomeIcon icon={faAngleRight} />
            <Link href="#">
              <a>
                Electrodomésticos de Belleza
              </a>
            </Link>
          </div>
          <div className="wrap-section-1">
            <div className="wrap-product">
              <DetailImg />
              <div className="wrap-slider-product-detail">SLIDER</div>
              <div className="pay-section-responsive">
                <Pay />
              </div>
              <Detail />
              <Question />
            </div>
            <div className="pay-section-pc">
              <Pay />
            </div>
          </div>
          <Explorer />
          <ProductCardFinding />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductDetail;
