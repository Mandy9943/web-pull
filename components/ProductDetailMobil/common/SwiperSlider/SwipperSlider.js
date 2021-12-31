import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import "./SwiperSlider.module.css";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import DiscountPrice from "../DiscountPrice/DiscountPrice";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperSlider = ({
  images,
  altImg,
  type,
  price,
  stock,
  discount_percentage,
}) => {
  return type === "HomeProduct" ? (
    <div className="swiperSliderDatailMobile">
      <Swiper
        loop={true}
        speed={200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 15,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
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
                height={300}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                height={300}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                height={300}
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
                  height={290}
                  width={290}
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
      <Swiper pagination={true} className="mySwiper2">
        <SwiperSlide>
          <DiscountPrice
            priceProduct={price}
            discountPercentage={10}
            stock={stock}
            quantityProduct={2}
            altImg={altImg}
            images={images}
            discountPercentageBd={discount_percentage}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DiscountPrice
            priceProduct={price}
            discountPercentage={15}
            stock={stock}
            quantityProduct={3}
            altImg={altImg}
            images={images}
            discountPercentageBd={discount_percentage}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

/* import React from "react";


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
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 15,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
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
                width={300}
                height={324}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                width={300}
                height={324}
                className="skeletonProductDetail"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton
                variant="rectangular"
                width={300}
                height={324}
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
                  width={300}
                  height={324}
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
 */
