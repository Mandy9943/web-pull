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
import moment from 'moment';
import { getProductImgs } from '../../lib/functions';

function PurchasesDetail({ item, close }) {
    let splitUrl = item.data.product.images[0].url.split("/");
    let titleImg = (splitUrl[splitUrl.length - 1] !== "None") ? item.data.product.title : "";

    let calificationStore = null;
    let calificationProduct = null;
    
    if (item.show_calificate) {
        calificationStore = <div className="purchase-evaluation-link">
            <div className="link-content">
                <Link href={`/resena_producto/${item.data.order_id}`}><a>Calificar compra</a></Link>
            </div>
        </div>;
    } else {        
        calificationProduct = (Object.keys(item.rate_purchase_data).length > 0) &&
            <div className="product-valoration">
                <section className="info">
                    <img src={getProductImgs(item.data.product.images)} width="80" height="80" />
                    <section className="info-text">
                        <h4 className="title">Calificación del producto</h4>
                        <h4 className="sub-1">{item.data.product.title}</h4>
                        <p className="description">{item.rate_purchase_data.comments}</p>
                    </section>
                </section>
                {item.rate_purchase_data.images.length > 0 &&
                    <section className="thumbnails">
                        {item.rate_purchase_data.images.map((url, i) => (
                            <img src={"https://api.kieroapi.org/getFile/" + url} key={i} width="80" height="80" />
                        ))}
                    </section>
                }
            </div>;
        calificationStore = (Object.keys(item.rate_purchase_data).length > 0) &&
            < div className = "vendor-reputation" >
                <section className="info">
                    <h4 className="title">Calificación de la tienda</h4>
                    <p className="stars">
                        {Array.from(Array(item.rate_purchase_data.rate_shop), i => (
                            <FontAwesomeIcon icon={faStar} />
                        ))}
                    </p>
                    {item.rate_purchase_data.rate_shop == 5 &&
                        <h4 className="sub">Excelente vendedor!</h4>
                    }
                </section>
                <img src={item.data.seller.photo} width="80" height="80" />
            </div>;        
    }

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
                    <img
                        alt={titleImg}
                        src={getProductImgs(item.data.product.images)}
                        width="80"
                        height="80"
                    />
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
                        <h4 className="sub-1 sub-title">{item.data.method.name}</h4>
                        <h4 className="sub-1">Transacción #{item.data.transaction_id}</h4>
                        <h4 className="sub-1">{moment(item.data.created_since).locale('es').format('D [de] MMMM [del] YYYY')}</h4>
                    </section>
                </div>
            </section>

            <section className="twins">
                <div className="vendor-info">
                    <section className="info">
                        <img src={item.data.seller.photo} width="80" height="80" />
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
                {calificationStore}
            </section>

            {calificationProduct}

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

            {/*<section className="twins">
                <div className="payment-status">
                    <FontAwesomeIcon icon={faCheck} />
                    <section className="info">
                        <h4 className="title">Pago aprobado</h4>
                        <h4 className="sub-1"> Efecty</h4>
                        <h4 className="sub-1">Transacción #7861284</h4>
                        <h4 className="sub-1">21 de febrero de 2020</h4>
                    </section>
                </div>
            </section>*/}
        </div>
    );
}

export default PurchasesDetail;
