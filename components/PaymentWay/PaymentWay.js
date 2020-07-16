import React, { Component } from "react";
import CardImg from "../../assets/img/default.webp";
import PayOnline from "../../assets/img/pay-online.png";
import Button from "../Common/Button/Button";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer";
import Select from "../Common/Select";
import "./PaymentWay.css";
import "./PaymentWayMovil.css";
import { getData, makePayment } from "../../services/userApi"
import Modal from "../Common/Modal";
import AddAddress from "../UserAccount/AddAddress"

export default class PaymentWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productQuantity: 1,
            closeCredit: true,
            closeCash: true,
            closeTransfer: true,
            banks: [],
            addresses: [],
            modal: false,
            modalAddr: false,
            selectedAddr: -1,
            auxAddr: 0,
            addrLoaded: false,
            error: null

        }
        this.addrRef = React.createRef();

    }

    componentDidMount() {
        this.loadBanks();
        this.loadAddresses();
    }


    loadBanks() {
        getData("/getPseBanks")
            .then((response) => {
                this.setState({ banks: (response.data.banks ? response.data.banks : []) });
            });
    }


    loadAddresses() {
        console.log("load addresses");
        console.log(this.props);
        getData("/getAddresses", this.props.user.jwt)
            .then((response) => {
                this.setState({ addresses: response.data, addrLoaded: true });
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

    openAddrsModal = () => {
        this.setState({
            modalAddr: true
        });
    }


    setAddr = () => {
        const x = this.state.auxAddr;
        this.setState({ modalAddr: false });
        this.setState({ selectedAddr: x });
    }


    tmpChangeAddr = (e) => {
        this.setState({ auxAddr: e.target.value });
    }



    payPSE = async e => {
        e.preventDefault();

        if (this.state.selectedAddr == -1) {
            this.setState({ modalAddr: true });
            return false;
        }


        const result = await makePayment({

            product_id: this.props.data.product_id,
            address_id: this.state.selectedAddr,

            names: e.target.elements.names.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.phone.value,
            person_type: e.target.elements.person_type.value,
            document_type: e.target.elements.document_type.value,
            document_number: e.target.elements.document_number.value,
            bank_id: e.target.elements.bank_id.value,


        }, this.props.user.jwt);

        console.log(result);
        if (result.data) {
            window.location = result.data.URL;
        } else {
            this.setState({
                error: result.error
            });
        }

    };



    render() {

        const addAddressContent = <AddAddress save={this.loadAddresses} cancel={() => this.setState({ modal: false })} noheader="1" />;

        const addressListContent = <>
            <Select onChange={this.tmpChangeAddr} >
                <option value="-1">Seleccione una dirección</option>
                {this.state.addresses.map((addr, i) => {
                    return <option key={i} value={i}>{addr.address}</option>
                })}
            </Select>
            <Button onClick={this.setAddr} text={"Cambiar"} />
        </>;


        return (
            <div className="payment-way">

                {this.state.modal ? (
                    <Modal toggle={() => this.setState({ modal: false })} content={addAddressContent} button />
                ) : null}

                {this.state.modalAddr ? (
                    <Modal toggle={() => this.setState({ modalAddr: false })} content={addressListContent} button />
                ) : null}

                <Header />



                <div className="container-payment-way">
                    <div className="product-description payment-way-box only-movil">
                        <img src={this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                        <div className="content-product-description">
                            <p>{this.props.data.title}</p>
                            <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                            <h3>Total: {this.props.data.price.split(",")[0]}</h3>
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
                                        <img alt="tarjeta credito" src={CardImg} />
                                        <Button text={"Continuar"} />
                                    </div>
                                </div>

                            </div>

                            <div className="cash payment-way-box" onClick={() => this.accordionCash()}>
                                <p>Efectivo</p>
                            </div>
                            <div className={this.state.closeCash ? "accordion-payment-way" : "accordion-payment-way active"}>
                                <img alt="pago en linea" src={PayOnline} />
                            </div>

                            <div className="transfer payment-way-box" onClick={() => this.accordionTransfer()}>
                                <p>Transferencia desde PSE</p>
                            </div>

                            <form onSubmit={this.payPSE}>

                                <div className={this.state.closeTransfer ? "accordion-payment-way" : "accordion-payment-way active"}>
                                    <div className="content-accordion">

                                        <div className="content-accordion-form">

                                            <label>
                                                <p>Datos de titular</p>
                                                <input name={"names"} placeholder="Nombre completo *" />
                                                <input name={"email"} placeholder="Email *" />
                                                <input name={"phone"} placeholder="Teléfono *" />
                                            </label>
                                            <label>
                                                <p>Banco</p>
                                                <Select name={"bank_id"}>

                                                    {this.state.banks.map((bank, i) => {
                                                        return <option value={bank.pseCode}> {bank.description} </option>
                                                    })}

                                                </Select>
                                            </label>
                                            <label>
                                                <p>Tipo de persona</p>

                                                <Select name={"person_type"}>

                                                    <option value={"N"}>Natural</option>
                                                    <option value={"J"}>Juridica</option>

                                                </Select>
                                            </label>

                                        </div>
                                        <div className="content-accordion-form">

                                            <label>
                                                <p>Documento de identificación</p>

                                                <Select name={"document_type"}>
                                                    <option value={"CC"}>Cédula de ciudadanía </option>
                                                    <option value={"CE"}>Cédula de extranjería </option>
                                                    <option value={"NIT"}> NIT </option>
                                                    <option value={"TI"}>Tarjeta de Identidad </option>
                                                    <option value={"PP"}>Pasaporte </option>
                                                    <option value={"DE"}>Documento de identificación extranjero </option>
                                                </Select>

                                                <input name={"document_number"} placeholder="Número documento" />
                                            </label>

                                            <button type="submit" className="button-continue main-button">
                                                <p>Continuar con la compra</p>
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="payment-data">
                            <div className="product-description payment-way-box only-desktop">
                                <img src={this.props.data.images.length > 0 ? this.props.data.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                                <div className="content-product-description">
                                    <p>{this.props.data.title}</p>
                                    <p className="quantity">Cantidad: {this.state.productQuantity}</p>
                                    <h3>Total: {this.props.data.price.split(",")[0]}</h3>
                                </div>
                            </div>

                            <div className="shipping-address payment-way-box">

                                {
                                    (this.state.addrLoaded && this.state.addresses.length == 0) &&
                                    <>
                                        <h3>No tienes direcciones registradas.</h3>
                                        <   Button onClick={() => this.setState({ modal: 1 })} text={"Agregar dirección"} />
                                    </>
                                }

                                {this.state.selectedAddr > -1 ?

                                        <>
                                            <p>{this.state.addresses[this.state.selectedAddr].description}</p>
                                            <h3>Dirección de envío</h3>
                                            <p>Dirección: {this.state.addresses[this.state.selectedAddr].address}</p>
                                            <p>Barrio:{this.state.addresses[this.state.selectedAddr].neighborhood}</p>
                                            <p>Departamento:{this.state.addresses[this.state.selectedAddr].department}</p>
                                            <p>Ciudad:{this.state.addresses[this.state.selectedAddr].city}</p>


                                            <Button onClick={this.openAddrsModal} text={"Cambiar dirección"} />
                                        </>
                                        :
                                        <><Button onClick={this.openAddrsModal} text={"Seleccione una dirección"} /></>
                                }

                            </div>



                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
