import React, { Component } from "react";
import "./DetailProductInfo.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class DetailProductInfo extends Component {
  render() {
    return (
      <>
      {/*
        <section className="characteristics no-web">
            <div className="info-shops edit">
              <Link href="#">
                <a>
                  <p>Caracterìsticas</p>
                </a>
              </Link>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="info">
              <div className="item">
                <span className="title">Marca:</span> 
                <span className="sub-title"> fdgd</span> 
              </div>
              <div className="item">
                <span className="title">Modelo:</span> 
                <span className="sub-title"> fdgd</span> 
              </div>
              <div className="item">
                <span className="title">Voltaje:</span> 
                <span className="sub-title"> fdgd</span> 
              </div>
            </div>
        </section>
      */}
      <div className="wrap-detail-info">
        <h4>DETALLE DEL PRODUCTO</h4>
        <div className="item-detail-info">
          <p>
              {this.props.desciption}
          </p>
        </div>
      </div>
        <section className="guarantee no-web">
          <h5>Garantia</h5>
          <span className="title">Compra protegida</span>
          <span className="sub-title">En caso de que surja algún problema o no recibas el producto tal como lo compraste, te devolveremos el dinero que pagaste.</span>
          <span className="title">Garantìa del vendedor</span>
          <span className="sub-title">Garantia por defecto de fabrica de (1) un mes.</span>
        </section>
      </>
    );
  }
}

export default DetailProductInfo;
