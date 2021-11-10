import React, {Component} from "react";
import Modal from "./../Common/Modal";
import CreditCard from "../../assets/img/pay-credit.png";
import BankTransfer from "../../assets/img/pay-transfer.jpg";
import PayEfecty from "../../assets/img/pay-cash-efecty.png";
import PayBaloto from "../../assets/img/pay-cash-baloto.png";
import PaySured from "../../assets/img/pay-cash-sured.png";
import "./PaymentBar.css";
import Slider from 'react-animated-slider';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUniversity,
    faPlusCircle,
    faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

class PaymentBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(modal) {
        const newState = {...this.state};
        newState[`modal${modal}`] = !newState[`modal${modal}`];
        this.setState(newState);
    }

    render() {
        const content1 = (
            <>
                <div className="header-modal">
                    <h3 className="texto-metodo"><b>Más metodos de pago</b></h3>
                </div>
                <div className="payment-way-content">
                    <h4><b>Tarjetas de crédito</b></h4>
                    <img loading="lazy" className="payment-way-img" src={CreditCard} alt="Tarjetas de credito"/>
                    <p className="sub-title">
                        El banco incluirá los intereses de las cuotas en el resumen de tu
                        tarjeta
                    </p>
                    <h4><b>Transferencia desde tu banco</b></h4>
                    <img loading="lazy" className="payment-way-img2" src={BankTransfer} alt="TRansferencia bancaria"/>
                    <h4><b>Pago con efectivo</b></h4>
                    <img loading="lazy" className="payment-way-img-cash" src={PayEfecty} alt="Pago online con EFECTY"/>
                    <img loading="lazy" className="payment-way-img-cash" src={PayBaloto} alt="Pago online con BALOTO"/>
                    <img loading="lazy" className="payment-way-img-cash" src={PaySured} alt="Pago online con SURED"/>
                    <br/><br/>
                    <p className="payment-way-footer-p">
                        Cuando efectúes tu compra, te brindaremos las instrucciones para que sepas cómo y dónde pagar.
                    </p>
                </div>
            </>
        );
        const content2 = (
            <>
                <div className="header-modal">
                    <h3 className="texto-metodo">Consignacion desde tu banco</h3>
                </div>
                <div className="bank-transfer-content">
                    <h4>Consignación Bancaria</h4>
                    <p>
                        Acércate a cualquier oficina Bancolombia a nivel nacional para
                        realizar tu consignación
                    </p>
                    <p>Banco: Bancolombia</p>
                    <p>Tipo de cuenta: Corriente</p>
                    <p>Titular de la cuenta: Kiero International Group</p>
                    <p>
                        Debes tener presente que cuentas con 3 días para realizar la
                        consignación y confirmar el pedido, de lo contrario será cancelado.
                    </p>
                </div>
            </>
        );
        const content3 = (
            <>
                <div className="header-modal">
                    <h3 className="texto-metodo">Paga en efectivo</h3>
                </div>
                <div className="cash-transfer-content">
                    <h4>Efecty</h4>
                    <p>
                        Acércate a cualquier punto Efecty del país, tienes un plazo de 2 días, si pasados estos días de
                        realizar el pedido en www.kiero.co no se efectúa el pago, el pedido
                        se cancelará. En el punto Efecty, es indispensable informar que va dirigido a KIERO Cuando te
                        soliciten la referencia, suministra el número de pedido.
                    </p>
                </div>
            </>
        );
        return (
            <>
                <div className="payment no-movil">
                    {this.state.modal1 ? (
                        <Modal toggle={this.toggleModal} num="1" content={content1} button/>
                    ) : null}
                    <div
                        className="payment-block"
                        onClick={() => {
                            this.toggleModal(1);
                        }}
                    >
                        <p className="payments-icon payments-item-block">
                            <FontAwesomeIcon icon={faPlusCircle}/>
                        </p>
                        <p className="payments-item-block">Más medios de pago</p>
                        <p className="payments-item-block sub">Ver más</p>
                    </div>
                    {this.state.modal2 ? (
                        <Modal toggle={this.toggleModal} num="2" content={content2}/>
                    ) : null}
                    <div
                        className="payment-block"
                        onClick={() => {
                            this.toggleModal(2);
                        }}
                    >
                        <p className="payments-icon payments-item-block">
                            <FontAwesomeIcon icon={faUniversity}/>
                        </p>
                        <p className="payments-item-block">Transferencia bancaria</p>
                        <p className="payments-item-block sub">Ver más</p>
                    </div>
                    {this.state.modal3 ? (
                        <Modal toggle={this.toggleModal} num="3" content={content3}/>
                    ) : null}
                    <div
                        className="payment-block"
                        onClick={() => {
                            this.toggleModal(3);
                        }}
                    >
                        <p className="payments-icon payments-item-block">
                            <FontAwesomeIcon icon={faMoneyBillAlt}/>
                        </p>
                        <p className="payments-item-block">Paga en efectivo</p>
                        <p className="payments-item-block sub">Ver más</p>
                    </div>
                </div>
                {/*payments-movil*/}
                <div className="payment payment-movil no-web">
                    {this.state.modal1 ? (
                        <Modal toggle={this.toggleModal} num="1" content={content1} button/>
                    ) : null}

                    {this.state.modal2 ? (
                        <Modal toggle={this.toggleModal} num="2" content={content2}/>
                    ) : null}
                    {this.state.modal3 ? (
                        <Modal toggle={this.toggleModal} num="3" content={content3}/>
                    ) : null}

                    <Slider autoplay={5000}>
                        <div className="payment-block" onClick={() => {
                            this.toggleModal(1);
                        }}>
                            <p className="payments-icon payments-item-block">
                                <FontAwesomeIcon icon={faPlusCircle}/>
                            </p>
                            <p className="payments-item-block">Más medios de pago</p>
                            <p className="payments-item-block sub">Ver más</p>
                        </div>
                        <div
                            className="payment-block" onClick={() => {
                            this.toggleModal(2);
                        }}>
                            <p className="payments-icon payments-item-block">
                                <FontAwesomeIcon icon={faUniversity}/>
                            </p>
                            <p className="payments-item-block">Transferencia bancaria</p>
                            <p className="payments-item-block sub">Ver más</p>
                        </div>
                        <div
                            className="payment-block" onClick={() => {
                            this.toggleModal(3);
                        }}>
                            <p className="payments-icon payments-item-block">
                                <FontAwesomeIcon icon={faMoneyBillAlt}/>
                            </p>
                            <p className="payments-item-block">Paga en efectivo</p>
                            <p className="payments-item-block sub">Ver más</p>
                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}

export default PaymentBar;
