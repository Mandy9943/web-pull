import React, { Component } from "react";
import "./DetailProductInfo.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class DetailProductInfo extends Component {

  constructor(props) {
    super(props);
  }
  render() {

    console.log("description section");
    console.log(this.props);

    let u_data = this.props.user_data
    return (
      <>
        <section className="characteristics no-web">
          <div className="info-shops edit">
            <a>
              <p>Caracterìsticas</p>
            </a>
          </div>
          <div className="info">
            <div className="item">
              <span className="title">Alto</span>
              <span className="sub-title">{this.props.length}"</span>
            </div>
            <div className="item">
              <span className="title">Ancho</span>
              <span className="sub-title">{this.props.width}"</span>
            </div>
            <div className="item">
              <span className="title">Peso </span>
              <span className="sub-title">{this.props.weight} Lb</span>
            </div>
          </div>
        </section>
        <div className="wrap-detail-info">
          <h4 className="accent">DETALLE DEL PRODUCTO</h4>
          <div className="item-detail-info">
            <p>
              {this.props.product_name}
            </p>
            <p>
              {this.props.desciption}
            </p>
          </div>
          <section className="characteristics-web no-movil">
            <div className="info-shops edit">
              <a>
                <p>Caracterìsticas</p>
              </a>
            </div>
            <div className="info">
              <div className="item">
                <span className="title">Alto: {this.props.length}"</span>
                
              </div>
              <div className="item">
                <span className="title">Ancho: {this.props.width}"</span>
                
              </div>
              <div className="item">
                <span className="title">Peso: {this.props.weight} Lb</span>
              </div>
            </div>
            <br />
            <p className="accent">SPICESTOCK</p>            <br />
                *Este producto viene desde Estados Unidos<br />
                *(Entrega de 3 a 7 hábiles) *Envío gratis
            <br />
            <br />
            <p className="accent">ME RETRACTÉ DE MI COMPRA!</p>
            <br />
              En caso de ya que no quieras el producto que recibiste puedes realizar la devolución de esté, en un periodo no mayor a 5 días calendario desde su fecha de entrega, por ende el cliente deberá
              asumir el valor del retorno a una de las direcciones que se le indicará, el valor del envío varía según el peso y el tamaño del producto.
          </section>
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
