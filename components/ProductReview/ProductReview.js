import React, { Component } from 'react';
import Link from "next/link";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";
import "./ProductReview.css";


export default class ProductReview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="product-review">
                <Header />
                <section className="component-product">
                    <section className="top">
                        <section className="info">
                            <span>¿Con cuantas estrellas calificarías esta compra?</span>
                            <h1>Ya tienes tu Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</h1>
                        </section>
                    </section>
                    <section className="bottom">
                        <textarea id="w3review" name="w3review" rows="4" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                        </textarea>
                        <section className="righ">
                            <img className="no-web" src="https://picsum.photos/100" />
                            <p className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <img className="no-movil" src="https://picsum.photos/100" />
                        </section>
                    </section>
                    <Link href="#"><a className="main-button"><p>Calificar</p></a></Link>
                </section>
                <Footer />
            </div>
        )
    }
}
