import React, { Component } from "react";
import "./PaySection.css";
import PayCredit from "../../assets/img/pay-credit.png";
import iconCredit from "../../assets/img/card.svg";
import PayOnline from "../../assets/img/pay-online.png";
import PayTransfer from "../../assets/img/pay-transfer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Seller from "./../SellerInfo";
import Link from "next/link";
import ListProductMovil from "./../listProductMovil/listProductMovil"
import Rating from '../RatingProduct/RatingProduct';
import ProductVariants from '../ProductVariants';

class PaySection extends Component {

  go = (id) => {
    window.location = "/pagar/" + id + "/" + this.state.cantidad;
  }
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 1,
    }
  }
  
  handleChangeCantidad = (event) => {
    this.setState({cantidad: event.target.value});
  }

  render() {
    let u_data = this.props.user_data
    let qty_options = [];
    for (let i = 1; i <= this.props.stock; i++) {
      qty_options[i - 1] = (<option key={"d" + i} value={i}>Cantidad: {i} (stock disponible {this.props.stock})</option>);
    }


    return (
      <div className="pay">
        <div className="pay-item">
          <h1 className="title-pay-product-detail">{this.props.title.substr(0,60)}</h1>
        </div>
        <div className="pay-item">
          <Rating productId={this.props.pid}/>
        </div>
        <div className="pay-item">
          <h3 className="price-pay-product-detail">$ {this.props.price ? this.props.price.toString().split(".")[0].replace(/(.)(?=(\d{3})+$)/g,'$1,') : " ... "}</h3>
        </div>
        <div className="pay-item pay-img no-movil">
          <img src={iconCredit} className="icon-credit" />
          <img src={PayCredit} className="pay-section-img" />
          <Link href="/ayuda">
            <a>
              <p>Más informacion</p>
            </a>
          </Link>
        </div>
        <div className="pay-item info-pay-product-detail">
          <h3><span className="no-movil">Kiero</span> envíos <span className='no-web'>gratis</span> <FontAwesomeIcon icon={faTruck} /> <FontAwesomeIcon className="no-web icon-right" icon={faAngleRight} /></h3>
          <p>Nuestros productos son importados</p>
          <Link href="/ayuda">
            <a>
              <p>Conoce más</p>
            </a>
          </Link>
        </div>
        {
          this.props.dimensions &&  <ProductVariants id={this.props.pgid} dimensions={this.props.dimensions}/>
        }
       
        {this.props.stock > 0 ? <div className="pay-item">
          <section className="select-icon">

          <select defaultValue={1} value={this.state.cantidad} onChange={this.handleChangeCantidad}>
              {qty_options}
            </select>
          </section>
          <button onClick={() => this.go(this.props.pid)}>Comprar</button>
        </div>
          :
          <div className="pay-item info-pay-product-detail" ><h3>Sin unidades disponibles.</h3></div>
        }
        <ListProductMovil />
        <div className="section-pay-type no-movil">
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
        <div className="section-pay-send no-movil">
          <div className="section-pay-send-title">
            <h4>Formas de envío</h4>
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
              rápida y segura
            </p>
          </div>
        </div>
        <div className="section-pay-wrap-seller no-movil">
          <Seller productId={this.props.pid} />
        </div>
      </div>
    );
  }
}

export default PaySection;
