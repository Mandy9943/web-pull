import React, { useState } from "react";
import Image from "next/image";
import review from "../../../../assets/img/review/Great Mower For The Price_0.jpg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import iconopen from "../../../../assets/img/productDetail/Maximize Icon.svg";
import iconcerrado from "../../../../assets/img/productDetail/Minimize Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

const CardOurClient = ({ client }) => {
  const [comment, setComment] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [icons, setIcon] = useState(iconopen);
  const stars = [];
  for (let i = 0; i < client.star; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} />);
  }
  const handleOnClickComment = (e) => {
    comment === false ? setIcon(iconopen) : setIcon(iconcerrado);
    setComment(!comment);
  };

  const handleShowCard = () => {
    alert("Click");
    return <div>Hola mundo</div>;
  };
  return (
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
          {comment === false ? (
            <p>{client.P.substring(0, 80)} ...</p>
          ) : (
            <p>{client.P}.</p>
          )}
        </div>
        <footer>
          <div className="separator" />
          <div className="anullProperties">
            <Image
              src={iconopen}
              layout="fill"
              alt="mini"
              onClick={handleOnClickComment}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CardOurClient;
