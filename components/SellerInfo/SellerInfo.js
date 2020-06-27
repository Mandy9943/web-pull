import React, { Component } from "react";
import Link from "next/link";
import "./SellerInfo.css";
import "./SellerMovil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo-kiero.png";
import ubication from "../../assets/img/iconos/UBICACIÓN-01.svg";


class SellerInfo extends Component {
  render() {

    let cls = " active"

    let reputacion = 79;

    let numberSell= 20;

    return (
      <>
        <div className="title-seller-bar">
          <p>Vendedor</p>
          <Link href={"/reputacion_de_vendedor/"+this.props.seller.user_id}>
            <a>
              <p>Ver productos</p>
            </a>
          </Link>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
          <div className="profile-seller">
            <div className="wrap-img-profile-seller">
              <img src={!this.props.seller.photo ? "https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg" : this.props.seller.photo  } />
            </div>
            <div className="info-profile-seller">
              <p>{this.props.seller.name} {this.props.seller.last_name}</p>
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
      </>
    );
  }
}

export default SellerInfo;
