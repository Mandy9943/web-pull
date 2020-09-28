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
import "./SaleNotification.css";


export default class SaleNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="sale-notification">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <section className="info">
                            <h1>¡Felicidades acabas de vender!</h1>
                        </section>
                        <img src="https://picsum.photos/100" />
                    </section>
                    <section className="bottom">
                        <img className="no-movil" src="https://picsum.photos/100" />
                        <section className="movil-content">
                            <section>
                                <p className="title">Contacta a tu comprador para concretar la entrega</p>
                                <p className="bold">Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</p>
                                <p className="price bold">$ 141.700</p>
                                <p className="sub-title">1 unidad</p>
                                <div className="buttons no-movil">
                                    <Link href="#"><a className="main-button"><p>Detalle</p></a></Link>
                                    <Link href="#"><a className="main-button button"><p>Contactar</p></a></Link>
                                </div>
                            </section>
                            <img className="no-web" src="https://picsum.photos/100" />
                        </section>

                        <div className="buttons no-web">
                            <Link href="#"><a className="main-button"><p>Detalle</p></a></Link>
                            <Link href="#"><a className="main-button button"><p>Contactar</p></a></Link>
                        </div>
                    </section>
                </section>
                <Footer />
            </div>
        )
    }
}
