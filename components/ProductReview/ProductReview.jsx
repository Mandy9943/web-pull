import React, { useState } from 'react';
import Link from "next/link";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faShoppingBag, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import "./ProductReview.css";


function ProductReview({ order }) {

    const [c_rating, setC_rating] = useState(0);
    const [p_rating, setP_rating] = useState(0);
    
    return (
        <div className="product-review">
            <Header />

            <div className="title-review">
                <h3>{'Califica tu compra'}</h3>
            </div>

            <section className="component-product">


                <div className="product-detail">
                    <div className="product-detail-container">
                    <img alt={order.data.product.title} src={order.data.product.images.length > 0 ? order.data.product.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                        <div>
                            <p>{order.data.product.title}</p>
                            <p>$ {order.data.total}</p>
                            <p><small>{order.data.quantity} unidad</small></p>
                        </div>
                    </div>
                </div>
                <div className="seller-detail">
                    <div className="seller-detail-container">
                        <img src="https://picsum.photos/100" />
                        <div>
                            <p>Vendedor</p>
                            <p>{order.data.seller.name + " " + order.data.seller.last_name}</p>
                            <p>{order.data.seller.phone}</p>
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
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p><small>{'Calificar compra'}</small></p>
                        <p className="stars">
                            <FontAwesomeIcon className={c_rating>0?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(1)} />
                            <FontAwesomeIcon className={c_rating>1?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(2)}/>
                            <FontAwesomeIcon className={c_rating>2?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(3)}/>
                            <FontAwesomeIcon className={c_rating>3?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(4)}/>
                            <FontAwesomeIcon className={c_rating>4?'active':'inactive'} icon={faStar} onClick={()=>setC_rating(5)}/>
                        </p>
                    </div>
                    <div className="rating-product">
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <p><small>{'Calificar producto'}</small></p>
                        <p className="stars">
                        <FontAwesomeIcon className={p_rating>0?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(1)} />
                            <FontAwesomeIcon className={p_rating>1?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(2)}/>
                            <FontAwesomeIcon className={p_rating>2?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(3)}/>
                            <FontAwesomeIcon className={p_rating>3?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(4)}/>
                            <FontAwesomeIcon className={p_rating>4?'active':'inactive'} icon={faStar} onClick={()=>setP_rating(5)}/>
                        </p>
                    </div>
                </div>
                <div className="review-comment">
                    <label><small>{'Escribele un comentario al vendedor y carga las fotos del producto recibido'}</small></label>
                    <input placeholder={'Escribe un comentario'} />
                </div>

                <div className="review-images">
                    <div style={{ width: '100%', float: 'left' }}>
                        <button className="add-image">{'agregar fotos'} <FontAwesomeIcon icon={faPaperclip} /></button>
                    </div>
                    <div style={{ width: '100%', float: 'left', paddingLeft: '4%' }}>
                        <img src="https://picsum.photos/100" />
                        <img src="https://picsum.photos/100" />
                    </div>
                    <div style={{ width: '100%', float: 'left' }}>
                        <button className="send-review">{'Calificar'}</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ProductReview;
