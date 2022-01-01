import { SwipeableDrawer } from "@material-ui/core";
import React, { useEffect } from "react";

import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import iconcerrar from "../../../../assets/img/productDetail/Minimize Icon.svg";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/pagination/pagination.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import {
  handleActivateBack,
  handleDeactivateBack,
} from "../../../../lib/functions";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperCardOurClient = ({ client, comment, setComment }) => {
  const stars = [];
  if (client?.star) {
    for (let i = 0; i < client.star; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
  }

  useEffect(() => {
    if (comment === true) {
      setComment(true);
      handleDeactivateBack(() => {
        setComment(false);
        handleActivateBack();
      });
    }
  }, [comment]);
  return (
    <div id="SwiperCardOurClient">
      <SwipeableDrawer
        anchor="bottom"
        open={comment}
        onOpen={() => {}}
        onClose={() => {
          setComment(false);
          handleActivateBack();
        }}
        className="swipe"
        transitionDuration={700}
        disableBackdropTransition={true}
      >
        <article>
          <div className="card">
            <picture>
              <div className="anullProperties">
                <Image
                  src={iconcerrar}
                  alt="Cerrar"
                  layout="fill"
                  className="close"
                  onClick={() => {
                    setComment(false);
                    handleActivateBack();
                  }}
                />
              </div>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                className="swiperOurClients"
              >
                {client.product.img.map((img, index) => {
                  return img.image === true ? (
                    <SwiperSlide key={index}>
                      <div className="anullProperties">
                        <Image
                          src={img.url}
                          alt={client.product.name}
                          layout="fill"
                          className="headerOurClients"
                        />
                      </div>
                    </SwiperSlide>
                  ) : null;
                })}
              </Swiper>
            </picture>
            <div className="texto">
              <div className="topHeader">
                <div className="autor">
                  <p> {client.name} </p>
                </div>
                <div className="localization">
                  <p> {client.location} </p>
                  <div className="locationImage">
                    <div className="anullProperties">
                      <Image src={location} alt="localization" layout="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottomHeader">
                <div className="clasification">{stars}</div>
                <div className="certification">
                  <p> Compra Verificada </p>
                  <div className="anullProperties">
                    <Image src={cert} layout="fill" alt="Certified" />
                  </div>
                </div>
              </div>
              <div className="comment">
                <h5>{client.H}</h5>
                <p>{client.P}</p>
              </div>
            </div>
          </div>
        </article>
      </SwipeableDrawer>
    </div>
  );
};

export default SwiperCardOurClient;
