import React, { Component } from "react";
import "./PaySection.css";
import PayCredit from "../../assets/img/pay-credit.png";
import iconCredit from "../../assets/img/card.svg";

import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Seller from "./../SellerInfo";
import Link from "next/link";

class PaySection extends Component {

  go = (id) => {
    window.location="/pagar/"+id;
  }


  render() {
    let qty_options = [];
    for (let i = 1; i <= this.props.stock; i++) {
      qty_options[i - 1] = (<option key={"d" + i} value={i}>{i}</option>);
    }

    console.log("PAYMENT SECTION");
    console.log(this.props);
    return (
      <div className="pay">
        <div className="pay-item">
          <span>Producto Nuevo</span>
        </div>
        <div className="pay-item">
          <h3 className="title-pay-product-detail">{this.props.title}</h3>
        </div>
        <div className="pay-item">
          <h3 className="price-pay-product-detail">{this.props.price}</h3>
        </div>
        <div className="pay-item pay-img">
        <img src={iconCredit} className="icon-credit" />
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
        {this.props.stock > 0 ? <div className="pay-item">

          <select defaultValue={1}>
            {qty_options}
          </select>

          <button onClick={() => this.go(this.props.pid)}>Comprar</button>

        </div>
          :
          <div className="pay-item info-pay-product-detail" ><h3>Sin unidades disponibles.</h3></div>
        }
        <div className="pay-item">
          <span>Disponible: {this.props.stock}</span>
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
          <Seller seller={this.props.seller} />
        </div>
      </div>
    );
  }
}

export default PaySection;
