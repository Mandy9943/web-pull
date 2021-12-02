import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";

import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";
import "./SwiperSlider.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperSlider = ({ images }) => {
    return (
        <div className="swiperSliderDatailMobile">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                className="mySwiper"
            >
                {images.map((image) => {
                    return (
                        <SwiperSlide key={image.file_id}>
                            <img loading="lazy" src={image.url} alt="Producto de kiero" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;
