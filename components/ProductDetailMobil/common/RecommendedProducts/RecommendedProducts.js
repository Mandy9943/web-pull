import React, { useEffect, useState } from "react";
import { getProductsBasic } from "../../../../services/productsApi";
import background from "../../../../assets/img/productDetail/trazado-12@2x.svg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import "./RecommendedProducts.module.css";
const RecommendedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await getProductsBasic(category.name, 10).then((r) => {
        setProducts(r.data.results);
      });
    };
    getProducts();
  }, []);
  return (
    <div id="RecommendedProducts">
      <img src={background} alt="Red background" />
      <div className="cabecera">
        <h3>Otros Productos Relacionados</h3>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedProducts;
