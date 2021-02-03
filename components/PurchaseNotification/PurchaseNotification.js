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
import "./PurchaseNotification.css";


export default class PurchaseNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="purchase-notification">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <section className="info">
                            <p>Compraste</p>
                            <h1>Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</h1>
                        </section>
                        <img src="https://picsum.photos/100" />
                    </section>
                    <section className="bottom">
                        
                        <p className="sub-title">Resumen de compra realizada</p>

                        <p className="title">
                            <FontAwesomeIcon icon={faCog} />Total a pagar <span className="font-bold">$ 141.700</span>
                            <br />
                            <span className="company">Efecty</span>
                        </p>

                        <p className="title">
                            <FontAwesomeIcon icon={faCog} />Envíos a: 
    
                            <span className="direction">Cr 56 1B #56 -SN - Cristo rey - Antioquia, Medellín María Briceño - 3875908976</span>
                        </p>
                                
                        
                                
                    
                        
                        <Link href="#"><a className="main-button"><p>Ir al listado de compras</p></a></Link>
                    </section>
                </section>
                <Footer />
            </div>
        )
    }
}
