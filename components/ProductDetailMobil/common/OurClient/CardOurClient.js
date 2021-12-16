import React from "react";
import Image from "next/image";
import review from "../../../../assets/img/review/Great Mower For The Price_0.jpg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import location from "../../../../assets/img/productDetail/Location Icon.svg";
import icon from "../../../../assets/img/productDetail/Maximize Icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";

const CardOurClient = (props) => {
  return (
    <div className="card">
      <picture>
        <div className="anullProperties">
          <Image src={review} alt="Review" layout="fill" />
        </div>
      </picture>
      <div className="texto">
        <div className="autor">
          <p> Rodovaldo G. </p>
          <div className="anullProperties">
            <Image src={cert} layout="fill" alt="Certified" />
          </div>
        </div>
        <div className="localization">
          <p> Santa Marta </p>
          <div className="anullProperties">
            <Image src={location} alt="localization" layout="fill" />
          </div>
        </div>
        <div className="clasification">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="comment">
          <h5>Lorem ipsum quam dolor nuet nigma</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum
            dolor ...
          </p>
        </div>
        <footer>
          <div className="separator" />
          <div className="anullProperties">
            <Image src={icon} layout="fill" alt="mini" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CardOurClient;
