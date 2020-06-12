import React, { Component } from "react";
import Link from "next/link";
import "./SellerInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class SellerInfo extends Component {
  render() {
    return (
      <div>
        <div className="title-seller-bar">
          <p>Vendedor</p>
          <Link href="#">
            <a>
              <p>Ver productos</p>
            </a>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="profile-seller">
          <div className="wrap-img-profile-seller">
            <img src="https://picsum.photos/100" />
          </div>
          <div className="info-profile-seller">
            <p>Wild Commerce</p>
            <p>123 456 7890</p>
          </div>
        </div>
        <div className="rank-seller">
          <h4>Reputación</h4>
          <p>
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
          </p>
          <p>Vendedor Lider</p>
        </div>
        <div className="info-shops">
          <Link href="#">
            <a>
              <p>Información sobre la reputación de las tiendas</p>
            </a>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    );
  }
}

export default SellerInfo;
