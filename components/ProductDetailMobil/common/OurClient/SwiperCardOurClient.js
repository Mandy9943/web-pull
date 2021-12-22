import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

import review from "../../../../assets/img/review/Great Mower For The Price_0.jpg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import iconopen from "../../../../assets/img/productDetail/Maximize Icon.svg";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

const SwiperCardOurClient = ({ client, comment, setComment }) => {
  console.log("card on client");
  const stars = [];
  for (let i = 0; i < client.star; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  return (
    <div>
      {client?.name ? (
        <SwipeableDrawer
          anchor="bottom"
          open={comment}
          onClose={() => setComment(false)}
          onOpen={() => {}}
          className="swipe"
        >
          <div className="card">
            <picture>
              <div className="anullProperties">
                <Image src={review} alt="Review" layout="fill" />
              </div>
            </picture>
            <div className="texto">
              <div className="autor">
                <p> {client.name} </p>
                <div className="anullProperties">
                  <Image src={cert} layout="fill" alt="Certified" />
                </div>
              </div>
              <div className="localization">
                <p> {client.location} </p>
                <div className="anullProperties">
                  <Image src={location} alt="localization" layout="fill" />
                </div>
              </div>
              <div className="clasification">{stars}</div>
              <div className="comment">
                <h5>{client.H}</h5>
                <p>{client.P}</p>
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      ) : null}
    </div>
  );
};

export default SwiperCardOurClient;
