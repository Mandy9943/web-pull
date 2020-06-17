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
      <section className="no-movil">
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
        </section>
        <div className="seller-movil no-web">
            <div className="info-shops">
              <Link href="#">
                <a>
                  <p>Información sobre el vendedor</p>
                </a>
              </Link>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="ubication">
              <img src={ubication} />
              <section className="title">
                <span className="strong">Ubicacion</span>
                Ciudad generica
              </section>
            </div>
            <div className="ubication name-seller">
              <img src={logo} />
              <section className="title">
                <span className="strong">Ubicacion</span>
                ¡Es uno de los mejores sitios!
              </section>
            </div>
            <div className="reputations">
              <div className={`item color1 ${reputacion >= 20 ? cls : ""}`}  />
              <div className={`item color2 ${reputacion > 40 ? cls : ""}`}  />
              <div className={`item color3 ${reputacion > 60 ? cls : ""}`} />
              <div className={`item color4 ${reputacion > 80 ? cls : ""}`}  />
              <div className={`item color5 ${reputacion < 100 ? cls : ""}`}  />
            </div>
            <div className="statistics">
              <section className="item">
                <span className="title">{numberSell}</span>
                <span className="sub-title">
                  Venta en los últimos 4 meses
                </span>
              </section>
              <section className="item">
                <span className="title"><FontAwesomeIcon icon={faAngleRight} /></span>
                <span className="sub-title">
                  Brinda buena atenciòn
                </span>
              </section>
              <section className="item">
                <span className="title"><FontAwesomeIcon icon={faAngleRight} /></span>
                <span className="sub-title">
                Entrega sus productos a tiempo
                </span>
              </section>
            </div>
        </div>
      </>
    );
  }
}

export default SellerInfo;
