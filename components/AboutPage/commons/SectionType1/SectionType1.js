import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import "./SectionType1.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import useResize from "../../../../lib/hooks/useResize";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SectionType1 = ({ imgSection, captionText, descriptionText }) => {
  const [showText, setShowText] = useState(false);
  const isMovil = useResize(500);
  const handleToggle = () => {
    setShowText(!showText);
  };
  return (
    <div className="SectionType1Wrapper">
      <div className="SectionType1">
        <div
          className="imageSection"
          style={{
            backgroundImage: `url(${imgSection})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "gray",
          }}
        >
          <div className="imgContent">
            <span className="icon" onClick={handleToggle}>
              {showText ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}
            </span>
            <p className="caption">{captionText}</p>
          </div>
        </div>
        <Collapse in={showText}>
          <div className="textSection">
            <div className="text">
              {isMovil ? (
                <Swiper pagination={true} className="mySwiper2">
                  {descriptionText.map((des, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <p key={i}>{des}</p>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <>
                  {descriptionText.map((des, i) => {
                    return <p key={i}>{des}</p>;
                  })}
                </>
              )}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default SectionType1;
