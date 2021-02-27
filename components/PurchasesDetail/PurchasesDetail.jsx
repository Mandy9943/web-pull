import React from 'react';
import Link from 'next/link';
import "./PurchasesDetail.css";
import ProductItem from '../ProductItem/ProductItem';
import { getData } from "../../services/userApi";
import ProductCard from "../ProductCard";
import OptionList from '../OptionList/OptionList';
import AccountStoreSales from '../AccountStore/AccountStoreSales/AccountStoreSales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faThList, faAngleLeft, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";


function PurchasesDetail({ item, close }) {

    console.log(item);
    return (
        <div className="purchases-detail">

                <div className="breadcrumb">
                    <a onClick={close}>Compras</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a>{'Detalles de compra'}</a>
                </div>
     
            <h1>Compra #{item.data.order_id}</h1>
            <h3 className="status">{item.purchase_status_name}</h3>

            <section className="twins">
                <div className="item-product">
                    <img alt={item.data.product.title} src={item.data.product.images.length > 0 ? item.data.product.images[0].url : 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'} />
                    <div className="info">
                        <p className="title">{item.data.product.title}</p>
                        <p className="price">$ {item.data.total}</p>
                        <span className="Unit">{item.data.quantity} unidad</span>
                    </div>
                </div>
                <div className="payment-status">
                    <FontAwesomeIcon icon={faCheck} />
                    <section className="info">
                        <h4 className="title">Pago aprobado</h4>
                        <h4 className="sub-1">{item.data.method.name}</h4>
                        <h4 className="sub-1">Transacción #7861284</h4>
                        <h4 className="sub-1">21 de febrero de 2020</h4>
                    </section>
                </div>
            </section>
           
            <section className="twins">
                <div className="vendor-info">
                    <section className="info">
                        <img src="https://picsum.photos/100" />
                        <section className="info-text">
                            <h4 className="title">Vendedor</h4>
                            <h4 className="sub-1">{item.data.seller.name + " " + item.data.seller.last_name}</h4>
                            <h4 className="sub-1">{item.data.seller.phone}</h4>
                        </section>
                    </section>
                    <div className="link-msg">
                        <Link href="#">
                            <a>
                                Ver mensajes
                            <span className="contador">2</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="purchase-evaluation-link">
                    <div className="link-content">
                        <Link href={`/resena_producto/${item.data.order_id}`}><a>Calificar compra</a></Link>
                    </div>
                </div>
            </section>


            {/* <section className="detail-info">
                <h4 className="title">Detalle de la compra</h4>
                <section className="info-1">
                    <p>Producto </p>
                    <p className="right"> $ 141.700</p>
                </section>
                <section className="info-1">
                    <p>Costo de envío </p>
                    <p className="right"> $ 0</p>
                </section>
                <section className="info-2">
                    <p>Total a pagar </p>
                    <p className="right"> $ 141.700</p>
                </section>
            </section> */}

            {/* <section className="twins">
                <div className="vendor-reputation">
                    <section className="info">
                        <h4 className="title">Calificación de la tienda</h4>
                        <p className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                        <h4 className="sub">Excelente vendedor!</h4>
                    </section>
                    <img src="https://picsum.photos/100" />
                </div>
                <div className="payment-status">
                    <FontAwesomeIcon icon={faCheck} />
                    <section className="info">
                        <h4 className="title">Pago aprobado</h4>
                        <h4 className="sub-1"> Efecty</h4>
                        <h4 className="sub-1">Transacción #7861284</h4>
                        <h4 className="sub-1">21 de febrero de 2020</h4>
                    </section>
                </div>
            </section> */}

          

            {/* <div className="product-valoration">
                <section className="info">
                    <img src="https://picsum.photos/100" />
                    <section className="info-text">
                        <h4 className="title">Calificación del producto</h4>
                        <h4 className="sub-1"> Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</h4>
                    </section>
                </section>
                <p className="description">Lo compramos porque necesitábamos un 2 portátil en casa y el tamaño no era importante. Por lo que me costo 250eur me da un rendimiento muy bueno. Para el trabajo no tengo ningún problema, la batería me ha durado todo el día.</p>
                <section className="thumbnails">
                    <img src="https://picsum.photos/100" />
                    <img src="https://picsum.photos/100" />
                    <img src="https://picsum.photos/100" />
                    <img src="https://picsum.photos/100" />
                    <img src="https://picsum.photos/100" />
                </section>
            </div> */}



        </div>
    );
}

export default PurchasesDetail;
