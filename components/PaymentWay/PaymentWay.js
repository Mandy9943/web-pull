import React, { Component } from "react";
import CardImg from "../../assets/img/default.webp";
import PayOnline from "../../assets/img/pay-online.png";
import Button from "../Common/Button/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer";
import "./PaymentWay.css";
import "./PaymentWayMovil.css";
import { getData } from "../../services/userApi"

export default class PaymentWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productQuantity: 1,
            closeCredit: true,
            closeCash: true,
            closeTransfer: true,
            banks: []
        }
    }
    
    componentDidMount() {
        this.loadBanks();
      }

    
      loadBanks(){
        getData("/getPseBanks")
            .then((response) => {
                this.setState({ banks: response.data.banks });
            });
      }


    accordionCredit = () => {
        this.setState({
            closeCredit: !this.state.closeCredit,
        });
    }
    accordionCash = () => {
        this.setState({
            closeCash: !this.state.closeCash,
        });
    }
    accordionTransfer = () => {
        this.setState({
            closeTransfer: !this.state.closeTransfer,
        });
    }
    render() {

        console.log(this.props)

        return (
            <div className="payment-way">
                <Header />
                <div className="container-payment-way">
                    <div className="product-description payment-way-box only-movil">
                        <img src={ this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                            <div className="content-product-description">
                                <p>{this.props.data.title}</p>
                                <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                                <h3>Total: {this.props.data.price}</h3>
                            </div>
                    </div>
                    <h2>Elige la forma de pago</h2>
                    
                    
                    
                    
                    <div className="content-payment-way">
                        <div className="way-to-pay">
                            <div className="credit payment-way-box" onClick={() => this.accordionCredit()}>
                                <p>Crédito</p>
                            </div>
                            <div className={this.state.closeCredit ? "accordion-payment-way" : "accordion-payment-way active"}>
                                <div className="content-accordion">
                                    <form>
                                        <input placeholder="Número de tarjeta *" />
                                        <input placeholder="Nombre y apellido impreso *" />
                                        <div className="input-form">
                                            <input placeholder="YYYY/MM *" />
                                            <input placeholder="CVV *" />
                                        </div>
                                        <div className="input-form">
                                            <input placeholder="Tipo de tarjeta *" />
                                            <input placeholder="Cuotas" />
                                        </div>
                                        <input placeholder="Tipo de documento" />
                                        <input placeholder="Número documento" />
                                    </form>
                                    <div className="cardImg">
                                        <img src={CardImg} />
                                    </div>
                                </div>
                                <Button text={"Continuar"}/>
                            </div>
                            
                            
                            
                            
                            
                            
                            
                            
                            <div className="cash payment-way-box" onClick={() => this.accordionCash()}>
                                    <p>Efectivo</p>
                            </div>
                            <div className={this.state.closeCash ? "accordion-payment-way" : "accordion-payment-way active"}>
                                <img src={PayOnline} />
                            </div>
                            
                            
                            
                            
                            
                            
                            <div className="transfer payment-way-box" onClick={() => this.accordionTransfer()}>
                                    <p>Transferencia desde PSE</p>
                            </div>
                            <div className={this.state.closeTransfer ? "accordion-payment-way" : "accordion-payment-way active"}>
                                <div className="content-accordion">
                                    <div className="content-accordion-form">
                                        <form>
                                            <label>
                                                <p>Datos de titular</p>
                                                <input placeholder="Nombre completo *" />
                                                <input placeholder="Email *" />
                                                <input placeholder="Teléfono *" />
                                            </label>
                                            <label>
                                                <p>Banco</p>
                                                <select name={"bank_id"}>
                                                    
                                                {this.state.banks.map( (bank,i) => {
                                                    return <option value={bank.pseCode}> {bank.description} </option> 
                                                })} 

                                                </select>
                                            </label>
                                            <label>
                                                <p>Tipo de persona</p>
                                                
                                                <select name={"person_type"}>

                                                    <option value={"N"}>Natural</option>
                                                    <option value={"J"}>Juridica</option>

                                                </select>
                                            </label>
                                        </form>
                                    </div>
                                    <div className="content-accordion-form">
                                        <form>
                                            <label>
                                                <p>Documento de identificación</p>
                                                
                                                <select name={"document_type"}>
                                                    <option value={"CC"}>Cédula de ciudadanía </option>
                                                    <option value={"CE"}>Cédula de extranjería </option>
                                                    <option value={"NIT"}>En caso de ser una empresa </option>
                                                    <option value={"TI"}>Tarjeta de Identidad </option>
                                                    <option value={"PP"}>Pasaporte </option>
                                                    <option value={"DE"}>Documento de identificación extranjero </option>
                                                </select>

                                                <input name={"document_number"} placeholder="Número documento" />
                                            </label>
                                        
                                            <button type="submit" className="main-button">
                                                <p>Continuar con la compra</p>
                                            </button>
                                        
                                        </form>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-data">
                            <div className="product-description payment-way-box only-desktop">
                            <img src={ this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                                <div className="content-product-description">
                                    <p>{this.props.data.title}</p>
                                    <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                                    <h3>Total: {this.props.data.price}</h3>
                                </div>
                            </div>
                            <div className="shipping-address payment-way-box">
                                <h3>Dirección de envío</h3>
                                <p>Dirección:</p>
                                <p>Dirección #2:</p>
                                <p>Barrio:</p>
                                <p>Departamento:</p>
                                <p>Ciudad:</p>
                                <Button text={"Cambiar dirección"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
