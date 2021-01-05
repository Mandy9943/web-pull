import React, { Component } from 'react';
import Link from "next/link";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faTag,
    faShoppingBag,
    faCog,
    faLock,
    faAngleRight,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import "./Help.css";
import "./HelpTips.css";


export default class Help extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionTitleBuy: true,
            accordionTitleSecurity: true,
            accordionTitleAccount: true,
            closeBuy: true,
            closeSecurity: true,
            closeAccount: true,
            iconBuy: true,
            iconSecurity: true,
            iconAccount: true,
            helpIconBuy: faAngleRight,
            helpIconSecurity: faAngleRight,
            helpIconAccount: faAngleRight,
            //iconOpen: faAngleDown
            closeBuyHelp: true,
            accordionBuyHelpTitle: true,
            accordionTip: true,
            closeTip: true,
            accordionTip2: true,
            closeTip2: true,
            closeAskInPost: true,
            accordionAskInPostTitle: true,
        }
    }
    accordionBuy = () => {
        this.setState({
            closeBuy: !this.state.closeBuy,
            accordionTitleBuy: !this.state.accordionTitleBuy,
            iconBuy: !this.state.iconBuy
        });
        if (this.state.iconBuy === true) {
            this.setState({
                helpIconBuy: faAngleDown
            })
        } else if (this.state.iconBuy === false) {
            this.setState({
                helpIconBuy: faAngleRight
            })
        }
    }
    accordionBuyHelp = () => {
        this.setState({
            closeBuyHelp: !this.state.closeBuyHelp,
            accordionBuyHelpTitle: !this.state.accordionBuyHelpTitle,
        });
    }
    accordionTip = () => {
        this.setState({
            closeTip: !this.state.closeTip,
            accordionTip: !this.state.accordionTip,
        });
    }
    accordionTip2 = () => {
        this.setState({
            closeTip2: !this.state.closeTip2,
            accordionTip2: !this.state.accordionTip2,
        });
    }
    accordionAskInPost = () => {
        this.setState({
            closeAskInPost: !this.state.closeAskInPost,
            accordionAskInPostTitle: !this.state.accordionAskInPostTitle,
        });
    }
    accordionSecurity = () => {
        this.setState({
            closeSecurity: !this.state.closeSecurity,
            accordionTitleSecurity: !this.state.accordionTitleSecurity,
            iconSecurity: !this.state.iconSecurity
        });
        if (this.state.iconSecurity === true) {
            this.setState({
                helpIconSecurity: faAngleDown
            })
        } else if (this.state.iconSecurity === false) {
            this.setState({
                helpIconSecurity: faAngleRight
            })
        }
    }
    accordionAccount = () => {
        this.setState({
            closeAccount: !this.state.closeAccount,
            accordionTitleAccount: !this.state.accordionTitleAccount,
            iconAccount: !this.state.iconAccount
        });
        if (this.state.iconAccount === true) {
            this.setState({
                helpIconAccount: faAngleDown
            })
        } else if (this.state.iconAccount === false) {
            this.setState({
                helpIconAccount: faAngleRight
            })
        }
    }
    render() {
        return (
            <div className="help">
                <Header />
                <div className="help-top">
                    <div className="content-help-top">
                        {this.state.accordionAskInPostTitle ? <h1>{this.state.accordionTip ? "En qué podemos ayudarte?" : "¿Cuándo opinar sobre el vendedor?"}</h1> : <h1>Te asesoramos para realizar tus preguntas</h1>}
                        <div className="help-search">
                            <p className="help-search-icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </p>
                            <input placeholder="Buscar soluciones" />
                        </div>
                    </div>
                </div>
                <div className="content-help">

                    <div className={this.state.accordionTip ? "help-tip-1" : "help-tip-1 active"}>
                        <p>En el momento que tengas el producto, puedes dejar un comentario al vendedor, este se mostrara en su perfil.
                        La forma de realizar este comentario depende como hayas recibido el producto.
                            </p>
                        <h5>A traves de Kiero Envíos</h5>
                        <p>En esta opicion encontraras en el menu de listado de compras alli podras opinar sobre el vendedor</p>
                        <h5>Entrega acordada</h5>
                        <p>Si acordaste la entrega perosnalemente con el vendor, o en su defecto uso una forma propia de envio te haremos llegar
                        un email asi podremos asegurarnos de que recibiste el producto de forma correcta. Una vez confirmado el estado y experiencia
                        de tu entrega podras dejar un comentario.
                            </p>
                        {/*NEED FIX THIS SHIT*/}
                        <Link href="/cuenta#orders">
                            <a className="main-button">
                                <p>
                                    Ir al listado de compras
                                </p>
                            </a>
                        </Link>
                    </div>


                    {this.state.accordionAskInPostTitle ? null :
                        <div className="help-left active">
                            <Link href="#">
                                <a className="help-button">
                                    <p>Han eliminado una pregunta que he realizado</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="help-button">
                                    <p>No puedo efectuar una pregunta</p>
                                </a>
                            </Link>
                        </div>
                    }
                    {this.state.accordionTip2 ?
                        <>{this.state.accordionAskInPostTitle ?
                            <div className={this.state.accordionTip ? "help-left active " : "help-left off"}>
                                {/*<Link href="#">
                                    <a className="help-button">
                                        <p className="help-icon">
                                            <FontAwesomeIcon icon={faTag} />
                                        </p>
                                        <p>Vende en kiero</p>
                                    </a>
                                </Link>*/}
                                
                                    <a className="help-button" onClick={() => this.accordionBuy()}>
                                        <p className="help-icon" >
                                            <FontAwesomeIcon icon={faShoppingBag} />
                                        </p>
                                        <p>Compras</p>
                                    </a>
                                    <a className="help-button" onClick={() => this.accordionAccount()}>
                                        <p className="help-icon">
                                            <FontAwesomeIcon icon={faCog} />
                                        </p>
                                        <p>Mi cuenta</p>
                                    </a>
                                    <a className="help-button" onClick={() => this.accordionSecurity()}>
                                        <p className="help-icon">
                                            <FontAwesomeIcon icon={faLock} />
                                        </p>
                                        <p>Seguridad</p>
                                    </a>
                                
                            </div>
                            : null} </> :
                        <div className="help-left active">
                            <Link href="/contactanos_email">
                                <a className="help-button">
                                    <p>Contáctanos por e-mail Te enviaremos un formulario y los requerimientos</p>
                                </a>
                            </Link>
                            <Link href="/contactanos_wsp">
                                <a className="help-button">
                                    <p>Te contactamos por Whatsapp</p>
                                </a>
                            </Link>
                        </div>
                    }

                    <div className="help-right">
                        <h5>Ayuda Kiero</h5>
                        {/*<div className="help-accordion-title fisrt-element">
                            <p>Vende en kiero</p>
                            <p className="help-icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </p>
                        </div>
                        */}
                        <div className="help-accordion"></div>
                        <div className={this.state.accordionTitleBuy ? "help-accordion-title fisrt-element" : "help-accordion-title active"} onClick={() => this.accordionBuy()}>
                            <p>Compras</p>
                            <p className="help-icon">
                                <FontAwesomeIcon icon={this.state.helpIconBuy} />
                            </p>
                        </div>
                        <div className={this.state.closeBuy ? "help-accordion" : "help-accordion active"}>
                            <p className={this.state.accordionBuyHelpTitle ? "help-buy-accordion-title" : "help-buy-accordion-title active"} onClick={() => this.accordionBuyHelp()}>Comprar</p>
                            <div className={this.state.closeBuyHelp ? "help-buy-accordion" : "help-buy-accordion active"}>
                                <Link href="/reputacion_de_vendedor">
                                    <a>
                                        <p>Como saber a quien comprarle</p>
                                    </a>
                                </Link>
                                <Link href="/como_pagar">
                                    <a>
                                        <p>Como puedes pagar tu compra</p>
                                    </a>
                                </Link>
                                <Link href="/recibir_compra">
                                    <a>
                                        <p>Como recibo mi compra</p>
                                    </a>
                                </Link>
                                <Link href="/como_ayudarte">
                                    <a>
                                        <p>Solucionar problemas en la compra</p>
                                    </a>
                                </Link>
                                <Link href="/proteccion_comprador">
                                    <a>
                                        <p>Protección al comprador</p>
                                    </a>
                                </Link>
                            </div>
                            <p onClick={() => this.accordionTip()}>¿En qué momento debo opinar sobre el vendedor?</p>
                            <p className={this.state.accordionAskInPostTitle ? "ask-in-post-title" : "ask-in-post-title active"} onClick={() => this.accordionAskInPost()}>Preguntar en publicaciones</p>
                            <div className={this.state.closeAskInPost ? "ask-in-post-accordion" : "ask-in-post-accordion active"}>
                                <p>Han eliminado una pregunta que he realizado</p>
                                <Link href="/pregunta_problemas">
                                    <a>
                                        <p>No puedo efectuar una preguntar</p>
                                    </a>
                                </Link>

                            </div>
                        </div>
                        <div className={this.state.accordionTitleAccount ? "help-accordion-title" : "help-accordion-title active"} onClick={() => this.accordionAccount()}>
                            <p>Mi cuenta</p>
                            <p className="help-icon">
                                <FontAwesomeIcon icon={this.state.helpIconAccount} />
                            </p>
                        </div>
                        <div className={this.state.closeAccount ? "help-accordion" : "help-accordion active"}>
                                <a onClick={() => this.accordionTip2()}>
                                    <p>Crear una cuenta como empresa</p>
                                </a>
                            
                            <Link href="/recuperar">
                                <a>
                                    <p>¿Cómo recuperar mis datos?</p>
                                </a>
                            </Link>
                            {/* <p>Eliminar o modificar los datos adicionales del código de seguridad</p>*/}
                            <Link href="/cuenta">
                                <a>
                                    <p>Modificar mis datos</p>
                                </a>
                            </Link>
                            <Link href="/anular_cuenta">
                                <a>
                                    <p>¿Cómo anular mi cuenta?</p>
                                </a>
                            </Link>
                        </div>
                        <div className={this.state.accordionTitleSecurity ? "help-accordion-title" : "help-accordion-title active"} onClick={() => this.accordionSecurity()}>
                            <p>Seguridad</p>
                            <p className="help-icon">
                                <FontAwesomeIcon icon={this.state.helpIconSecurity} />
                            </p>
                        </div>
                        <div className={this.state.closeSecurity ? "help-accordion" : "help-accordion active"}>
                            <Link href="/proteccion_comprador">
                                <a>
                                    <p>Protección al comprador</p>
                                </a>
                            </Link>
                            <Link href="/proteccion_vendedor">
                                <a>
                                    <p>¿Seguridad proporcionada para los vendedores?</p>
                                </a>
                            </Link>
                            <Link href="/seguridad">
                                <a>
                                    <p>¿Cómo resguardar la seguridad de mi cuenta?</p>
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
