import React, { Component } from 'react';
import Link from 'next/link';
import "./PurchasesDetail.css";
import ProductItem from '../ProductItem/ProductItem';
import { getData } from "../../services/userApi";
import ProductCard from "../ProductCard";
import OptionList from '../OptionList/OptionList';
import AccountStoreSales from '../AccountStore/AccountStoreSales/AccountStoreSales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList, faAngleLeft, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";



export default class PurchasesDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            error: null
        }
    }

    componentDidMount() {
        const endp = this.props.mode === "sell" ? "/getSells" : "/getOrders"
        getData(endp, this.props.user.jwt)
            .then((response) => {
                this.setState({ orders: response.data });
            });
    }

    render() {
        let mde = this.props.mode;
        let orderList = this.state.orders.map(function (order, i) {
            return <ProductItem key={i} order={order} mode={mde} />;
        });

        return (
            <div className="purchases-detail">
                <h1>Compra #4124</h1>
                <h3 className="status">Entregado</h3>

                <section className="item-product">
                    <img src="https://picsum.photos/100" />
                    <div className="info">
                        <p className="t1">Compraste</p>
                        <p className="title">Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Premium...</p>
                        <p className="description">Recibiras tu pedido en un periodo minimo de 48 horas</p>
                        <p className="price">$ 141.700</p>
                        <span className="Unit">1 unidad</span>
                    </div>
                </section>

                <section className="detail-info">
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
                </section>

                <section className="twins">
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
                </section>

                <div className="vendor-info">
                    <section className="info">
                        <img src="https://picsum.photos/100" />
                        <section className="info-text">
                            <h4 className="title">Vendedor</h4>
                            <h4 className="sub-1"> Wild Commerce</h4>
                            <h4 className="sub-1">364 777 7777</h4>
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

                <div className="product-valoration">
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
                </div>

                

            </div>
        )
    }
}
