import React, { useEffect, useState } from "react";
import { getProductsBasic } from "../../../../services/productsApi";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import "./RecommendedProducts.module.css";
import RecommendedProductsCard from "./RecommendedProductsCard";
import DivindingLine from "../DivindingLine/DivindingLine";
import PropTypes from "prop-types";

const RecommendedProducts = ({
  category,
  spaceBetween = 30,
  lenProduct = 10,
  movil = true,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await getProductsBasic(category.name, lenProduct).then((r) => {
        setProducts(r.data.results);
      });
    };
    getProducts();
  }, []);

  let sliderConfig = {};

  if (movil) {
    sliderConfig = {
      slidesPerView: 1.4,
      spaceBetween: spaceBetween,
      freeMode: true,
      centeredSlides: true,

      pagination: {
        clickable: true,
      },
    };
  } else {
    sliderConfig = {
      slidesPerView: 6,
      spaceBetween: spaceBetween,
      loop: true,
      pagination: {
        clickable: true,
      },
    };
  }
  return (
    <div id="RecommendedProducts">
      <div className="cabecera">
        <DivindingLine
          color="#CF0A2C"
          height="3px"
          width="122px"
          margin="auto auto 10px auto"
        />
        <h3>OTROS TAMBIÉN</h3>
        <h3> COMPRARON</h3>
      </div>
      <div className="slider">
        <Swiper {...sliderConfig} className="recomendedSwiper">
          {products.map((product, i) => {
            return (
              <SwiperSlide key={i}>
                <RecommendedProductsCard product={product} index={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

RecommendedProducts.prototype = {
  category: PropTypes.string.isRequired,
  spaceBetween: PropTypes.number,
  lenProduct: PropTypes.number,
  movil: PropTypes.bool.isRequired,
};

export default RecommendedProducts;
