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
    const handleBrand = (dataBrand) => {
      if(dataBrand === null){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Marca: {dataBrand}</span>
          </div>
        )
      }
    }
    const handleType = (dataType) => {
      if(dataType === null){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Tipo: {dataType}</span>
          </div>
        )
      }
    }
    const handleColor = (dataColor) => {
      if(dataColor === null || dataColor === "" || dataColor === "Ninguno" ){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Color: {dataColor}</span>
          </div>
        )
      }
    }
    const handleModel = (dataModel) => {
      if(dataModel === null|| dataModel === "NULL"){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Modelo: {dataModel}</span>
          </div>
        )
      }
    }
    const handleLength = (dataLength) => {
      if(dataLength === null || dataLength <= 0){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Largo: {parseFloat(dataLength).toFixed(2)}"</span>
          </div>
        )
      }
    }
    const handleWidth = (dataWidth) => {
      if(dataWidth === null  || dataWidth <= 0){
        return<></>
      }else{
        return(
          <div className="item">
                <span className="title">Ancho: {parseFloat(dataWidth).toFixed(2)}"</span>
          </div>
        )
      }
    }
    const handleWeight = (dataWeight) => {
      if(dataWeight === null || dataWeight <= 0){
        return<></>
      }else{
        return(
          <div className="item">
          <span className="title">Peso: {parseFloat(this.props.weight).toFixed(2)} Lb</span>
        </div>
        )
      }
    }
    const handleDesciption = (dataDesciption) => {
      if(dataDesciption === null){
        return<></>
      }else{
        return(
          <p>
          <h3 className="accent">Descipción:</h3>
          <br />
            {this.props.desciption}
          </p>
        )
      }
    }
    const handleInformation = (dataInformation) => {
      if(dataInformation === null){
        return<></>
      }else{
        return(
          <p>
          <h3 className="accent">Información:</h3>
          <br />
            {this.props.information}
          </p>
        )
      }
    }

    let u_data = this.props.user_data
    return (
      <>
        <section className="characteristics no-web">
        <div className="info-shops edit">
              <a>
                <p>Características</p>
              </a>
            </div>
            <div className="info">
              {handleBrand(this.props.brand)}
              {handleType(this.props.type)}
              {handleColor(this.props.color)}
              {handleModel(this.props.model)}
              {handleLength(this.props.length)}
              {handleWidth(this.props.width)}
              {handleWeight(this.props.weight)}
            </div>
        </section>
        <div className="wrap-detail-info">
          <h3 >Detalle del producto</h3>
          <div className="item-detail-info">
            <p>
              {this.props.product_name}
            </p>
            <br />
            <br />
            {handleDesciption(this.props.desciption)}
            <br />
            <br />
            {handleInformation(this.props.desciption)}
          </div>
          <section className="characteristics-web no-movil">
            <div className="info-shops edit">
              <a>
                <p>Características</p>
              </a>
            </div>
            <div className="info">
              {handleBrand(this.props.brand)}
              {handleType(this.props.type)}
              {handleColor(this.props.color)}
              {handleModel(this.props.model)}
              {handleLength(this.props.length)}
              {handleWidth(this.props.width)}
              {handleWeight(this.props.weight)}
            </div>
            <br />
            <p className="accent">SPICESTOCK</p>            <br />
                *Este producto viene desde Estados Unidos<br />
                *(Entrega de 3 a 7 hábiles) *Envío gratis
            <br />
            <br />
            {/* <p className="accent">ME RETRACTÉ DE MI COMPRA!</p>
            <br />
              En caso de ya que no quieras el producto que recibiste puedes realizar la devolución de esté, en un periodo no mayor a 5 días calendario desde su fecha de entrega, por ende el cliente deberá
              asumir el valor del retorno a una de las direcciones que se le indicará, el valor del envío varía según el peso y el tamaño del producto. */}
          </section>
        </div>
        <section className="guarantee no-web">
          <h5>Garantía</h5>
          <span className="title">Compra protegida</span>
          <span className="sub-title">En caso de que surja algún problema o no recibas el producto tal como lo compraste, te devolveremos el dinero que pagaste.</span>
          <span className="title">Garantía del vendedor</span>
          <span className="sub-title">Garantía por defecto de fabrica de (1) un mes.</span>
        </section>
      </>
    );
  }
}

export default DetailProductInfo;
