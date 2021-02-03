import React, { Component } from 'react';
import Link from "next/link";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faShoppingCart, faShoppingBag, faPaperclip } from "@fortawesome/free-solid-svg-icons";
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

                <div className="title-review">
                 <h3>{'Califica tu compra'}</h3>
                </div>
                
                <section className="component-product">
                   
                 
                    <div className="product-detail">
                        <div className="product-detail-container">
                            <img src="https://picsum.photos/100" />
                            <div>
                                <p>Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</p>
                                <p>$ 141.700</p>
                                <p><small>1 unidad</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="seller-detail">
                        <div className="seller-detail-container">
                                <img src="https://picsum.photos/100" />
                                <div>
                                    <p>Vendedor</p>
                                    <p>Wild Commerce</p>
                                    <p>364 777 7777</p>
                                </div>
                        </div>
                    </div>                 
                </section>

                <section className="component-seller">
                    <div className="seller-review-title">
                        <h5>{'Califica tu experiencia con el vendedor'}</h5>
                    </div>
                    <div className="seller-review-content">
                        <div className="rating-purchases">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            <p><small>{'Calificar compra'}</small></p>
                            <p className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                        <div className="rating-product">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                            <p><small>{'Calificar producto'}</small></p>
                            <p className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                        </div>
                    </div>
                    <div className="review-comment">
                        <label><small>{'Escribele un comentario al vendedor y carga las fotos del producto recibido'}</small></label>
                        <input placeholder={'Escribe un comentario'}/>
                    </div>

                    <div className="review-images">
                        <div style={{width:'100%',float:'left'}}>
                         <button className="add-image">{'agregar fotos'} <FontAwesomeIcon icon={faPaperclip} /></button>
                        </div>
                        <div style={{width:'100%',float:'left', paddingLeft:'4%'}}>
                            <img src="https://picsum.photos/100" />
                            <img src="https://picsum.photos/100" />
                        </div>   
                        <div style={{width:'100%',float:'left'}}>
                             <button className="send-review">{'Calificar'}</button>
                        </div>         
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}
