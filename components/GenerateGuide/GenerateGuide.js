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
import "./GenerateGuide.css";


export default class GenerateGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="generate-guide">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <img src="https://picsum.photos/100" />
                    </section>
                    <section className="bottom">
                        <p className="title">Ya puedes empezar a generar las guías para una mejor experiencia en el despacho de tus productos</p>
                        <Link href="#"><a className="main-button"><p>Generar guía</p></a></Link>
                    </section>
                </section>
                <Footer />
            </div>
        )
    }
}
