import React, { Component } from "react";
import "./PaySection.css";
import PayCredit from "../../assets/img/pay-credit.png";
import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Seller from "./../SellerInfo";
import Link from "next/link";

class PaySection extends Component {
  render() {
    return (
      <div className="pay">
        <div className="pay-item">
          <span>Producto Nuevo</span>
        </div>
        <div className="pay-item">
          <h3 className="title-pay-product-detail">Relojes de pulsera, reloj deportivo de acero inoxidable</h3>
        </div>
        <div className="pay-item">
          <h3 className="price-pay-product-detail">$900.000</h3>
        </div>
        <div className="pay-item">
          <img src={PayCredit} className="pay-section-img" />
          <Link href="#">
            <a>
              <p>Más informacion</p>
            </a>
          </Link>
        </div>
        <div className="pay-item info-pay-product-detail">
          <h3>Kiero envíos <FontAwesomeIcon icon={faTruck} /></h3>
          <p>Nuestros productos son importados</p>
          <Link href="#">
            <a>
              <p>Conoce más</p>
            </a>
          </Link>
        </div>
        <div className="pay-item">
          <select>
            <option value="">seleccione una cantidad</option>
            <option value="1">1 unidad</option>
          </select>
          <button>Comprar</button>
        </div>
        <div className="pay-item">
          <span>Disponible: 1</span>
        </div>
        <div className="section-pay-type">
          <div className="section-pay-type-title">
            <h4>Medios de pago</h4>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="section-pay-type-items">
            <p>Tarjetas de crédito</p>
            <div>
              <img src={PayCredit} />
            </div>
            <p>Efectivo en puntos de pago</p>
            <div>
              <img src={PayOnline} />
            </div>
            <p>Transferencia desde tu banco</p>
            <div>
              <img src={PayTransfer} />
            </div>
          </div>
        </div>
        <div className="section-pay-send">
          <div className="section-pay-send-title">
            <h4>Formas de envio</h4>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="section-pay-send-subtitle">
            <span>
              <FontAwesomeIcon icon={faTruck} />
            </span>
            <p>
              Envíos gratis a todo el país
            </p>
          </div>
          <div className="section-pay-send-description">
            <p>
              Es el servicio de kiero que permite recibir tus productos de forma
              rapida y segura
            </p>
          </div>
        </div>
        <div className="section-pay-wrap-seller">
          <Seller />
        </div>
      </div>
    );
  }
}

export default PaySection;
