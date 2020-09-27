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
import "./PurchaseReceived.css";


export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="purchase-received">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <section className="info">
                            <h1>Ya tienes tu Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</h1>
                            <p>Tu pedido ha llegado de forma exitosa</p>
                            <p>¡Disfruta tu compra!</p>
                        </section>
                        <img src="https://picsum.photos/100" />
                    </section>
                    <section className="bottom">
                        <p className="title">Realizamos la entrega en cr 54 1A #54-SN, Medellín C.P. .</p>
                        <p className="sub-title">Deseamos este conforme con su compra, en caso contrario contactarnos dentro de las siguientes 24 horas para poder ayudarte.</p>
                        <div className="buttons">
                            <Link href="#"><a className="main-button"><p>Detalle de compra</p></a></Link>
                            <Link href="#"><a className="main-button button"><p>Ayuda</p></a></Link></div>
                    </section>
                        
                    
                </section>
                <Footer />
            </div>
        )
    }
}
