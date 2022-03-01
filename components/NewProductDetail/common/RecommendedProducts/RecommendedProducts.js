import React, { useEffect, useState } from "react";
import { getProductsBasic } from "../../../../services/productsApi";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Keyboard]);

import "./RecommendedProducts.module.css";
import RecommendedProductsCard from "./RecommendedProductsCard";
import DivindingLine from "../DivindingLine/DivindingLine";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

const RecommendedProducts = ({
  category,
  spaceBetween = 0,
  lenProduct = 15,
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
      loop: true,
      centeredSlides: true,
      pagination: {
        clickable: true,
      },
    };
  } else {
    sliderConfig = {
      slidesPerView: 3,
      spaceBetween: spaceBetween,
      loop: true,
      pagination: {
        clickable: true,
        // dynamicBullets: true,
      },
      // mousewheel: {
      //   forceToAxis: true,
      // } /* ,
      // keyBoard: {
      //   enabled: true,
      // }, */,
      // // freeMode: true,
      navigation: true,
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
        <SectionTitle color="#CF0A2C" center variant="h4">
          OTROS TAMBIÉN COMPRARON
        </SectionTitle>
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

RecommendedProducts.propTypes = {
  category: PropTypes.object.isRequired,
  spaceBetween: PropTypes.number,
  lenProduct: PropTypes.number,
  movil: PropTypes.bool,
};

export default RecommendedProducts;
