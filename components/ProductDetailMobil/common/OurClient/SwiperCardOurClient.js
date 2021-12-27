import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

import review from "../../../../assets/img/review/Great Mower For The Price_0.jpg";
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

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperCardOurClient = ({ client, comment, setComment }) => {
  console.log("card on client");
  const stars = [];
  for (let i = 0; i < client.star; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  return (
    <div id="SwiperCardOurClient">
      <SwipeableDrawer
        anchor="bottom"
        open={comment}
        onClose={() => setComment(false)}
        onOpen={() => {}}
        className="swipe"
        transitionDuration={700}
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
                  }}
                />
              </div>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                className="swiperOurClients"
              >
                <SwiperSlide>
                  <div className="anullProperties">
                    <Image
                      src={review}
                      alt="Review"
                      layout="fill"
                      className="headerOurClients"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="anullProperties">
                    <Image
                      src={review}
                      alt="Review"
                      layout="fill"
                      className="headerOurClients"
                    />
                  </div>
                </SwiperSlide>
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
