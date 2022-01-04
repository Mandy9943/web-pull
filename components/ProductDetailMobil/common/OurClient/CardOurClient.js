import React from "react";
import Image from "next/image";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import iconopen from "../../../../assets/img/productDetail/Maximize Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

const CardOurClient = ({ client, handleOnClickComment }) => {
  const stars = [];
  for (let i = 0; i < client.star; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  return (
    <div className="card">
      <picture>
        <div className="anullProperties">
          <Image src={client.img.url} alt="Review" layout="fill" />
        </div>
      </picture>
      <div className="texto">
        <div className="autor">
          <p> {client?.name} </p>
          <div className="anullProperties">
            <Image src={cert} layout="fill" alt="Certified" />
          </div>
        </div>
        <div className="localization">
          <p> {client?.location} </p>
          <div className="anullProperties">
            <Image src={location} alt="localization" layout="fill" />
          </div>
        </div>
        <div className="clasification">{stars}</div>
        <div className="comment">
          <h5>{client?.H}</h5>
          <p>{client?.P.substring(0, 80)} ...</p>
        </div>
      </div>
      <footer>
        <div className="anullProperties">
          <Image
            src={iconopen}
            layout="fill"
            alt="mini"
            onClick={() => handleOnClickComment(client)}
          />
        </div>
      </footer>
    </div>
  );
};

export default CardOurClient;
