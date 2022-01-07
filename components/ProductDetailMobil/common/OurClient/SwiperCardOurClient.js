import React, { useEffect, useState } from "react";

import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import iconcerrar from "../../../../assets/img/productDetail/Minimize Icon.svg";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Scrollbar } from "swiper";
import { Slide, Dialog } from "@mui/material";

// install Swiper modules
SwiperCore.use([Scrollbar, EffectCoverflow]);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} timeout={1000} {...props} />;
});
const SwiperCardOurClient = ({ client, comment, setComment }) => {
  const stars = [];
  const [open, setOpen] = useState(false);
  if (client?.star) {
    for (let i = 0; i < client.star; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
  }
  const onBackButtonEvent = (e) => {
    e.preventDefault();
    window.history.pushState(null, null, window.location.pathname);
    setOpen(false);
    setComment(false);
  };
  useEffect(() => {
    setOpen(comment);
  }, [comment, setComment]);

  useEffect(() => {
    if (open === true) {
      window.history.pushState(null, null, window.location.pathname);
      window.addEventListener("popstate", onBackButtonEvent);
      return () => {
        window.removeEventListener("popstate", onBackButtonEvent);
      };
    }
    if (open === false) {
      setComment(false);
    }
  }, [open]);
  return (
    <div id="SwiperCardOurClient">
      <Dialog
        fullScreen
        open={open}
        onClose={() => {}}
        TransitionComponent={Transition}
        className="swipe"
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
                    setOpen(false);
                  }}
                />
              </div>
              <Swiper className="swiperOurClients" scrollbar={{}}>
                {client.product.img.map((img, index) => {
                  return img.image === true ? (
                    <SwiperSlide key={index} zoom={true}>
                      <div className="anullProperties">
                        <Image
                          src={img.url}
                          alt={client.product.name}
                          className="headerOurClients"
                          layout="fill"
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
      </Dialog>
    </div>
  );
};

export default SwiperCardOurClient;
