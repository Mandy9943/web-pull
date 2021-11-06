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
import "./Evaluation.css";


export default class Evaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="evaluation">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <section className="info">
                            <span>¿Qué te pareció este producto?</span>
                            <h1>Ya tienes tu Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</h1>
                        </section>
                    </section>
                        <img loading="lazy" alt='evaluation kiero.co' src="https://picsum.photos/100" />
                    <Link href="#"><a className="main-button"><p>Tu opinión es importante</p></a></Link>
                </section>
                <Footer />
            </div>
        )
    }
}
