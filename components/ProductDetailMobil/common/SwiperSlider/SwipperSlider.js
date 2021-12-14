import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import "./SwiperSlider.css";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import OfferSection from "../OfferSection/OfferSection";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperSlider = ({ images, altImg, type }) => {
  return type === "HomeProduct" ? (
    <div className="swiperSliderDatailMobile">
      <Swiper
        loop={true}
        speed={400}
        autoplay={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {!images.length ? (
          <>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                height={325}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                height={325}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                height={325}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
          </>
        ) : (
          images.map((image) => {
            return (
              <SwiperSlide key={image.file_id} className="mdc-ripple-surface">
                <Skeleton
                  variant="rectangular"
                  height={325}
                  className="skeletonProductDetail"
                />
                <Image
                  layout="fill"
                  data-src={image.url}
                  src={image.url}
                  alt={"Producto de kiero " + altImg.substr(0, 80)}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  ) : (
    <div className="swiperSliderDatailMobile">
      <Swiper loop={true} pagination={true} className="mySwiper2">
        <SwiperSlide>
          <OfferSection />
        </SwiperSlide>
        <SwiperSlide>
          <OfferSection />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
