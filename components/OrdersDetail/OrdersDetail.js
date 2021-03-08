import React from 'react';
import Link from 'next/link';
import './OrdersDetail.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faPaperclip} from "@fortawesome/free-solid-svg-icons";
import {getProductImgs} from "../../lib/functions";

export default function OrderDetail({item, close}) {
    return (
        <div className="orders-detail">
            <section class="left-panel">
                <div className="breadcrumb">
                    <a onClick={close}>Ventas</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a>#{item.data.order_id}</a>
                </div>

                <main>
                    <div className="messages-area">
                    </div>

                    <div className="action-area">
                        <input type="text" placeholder="Escribe tu mensaje"/>
                        <button>Algo</button>
                        <button>Enviar</button>
                    </div>
                </main>

            </section>
            <section className="right-panel">
                <Link href={"/ayuda"}>
                    <a>Necesito ayuda</a>
                </Link>

                {/* Seccion Cliente */}
                <section className="card">
                    <header>
                        <h4>Cliente</h4>
                    </header>
                    <main>
                        <div className="card-img">
                            <img
                                alt={item.data.product.title}
                                src={getProductImgs(item.data.product.images)}
                            />
                        </div>

                        <section className='card-description'>
                            <h3>{item.data.client.name + " " + item.data.client.last_name}</h3>
                            <h3 className="product-stock">{item.data.client.phone}</h3>
                            <a href="#">Detalles de venta</a>
                        </section>

                    </main>
                </section>
                {/* Fin seccion cliente */}

                {/* Seccion producto */}
                <section className="card" id="product">
                    <header>
                        <h4>Entregado</h4>
                    </header>

                    <main>
                        <div className="card-img">
                            <img
                                alt={item.data.product.title}
                                src={getProductImgs(item.data.product.images)}
                            />
                        </div>

                        <section className='card-description'>
                            <h3>{item.data.product.title}</h3>
                            <h3>$ {item.data.total}</h3>
                            <h3 className="product-stock">{item.data.quantity} unidad{item.data.quantity > 1 && "es"}</h3>
                        </section>

                    </main>
                </section>
                {/* Fin seccion producto */}

                {/* Seccion Action */}
                <section className="action">
                    <p className="description">
                        Una vez confirme los detalles del producto y el tiempo de entrega podrás calificar la venta como verificada.
                    </p>
                    <a href="#">He verificado esta venta</a>
                </section>
                {/* Fin Seccion Action */}

            </section>
        </div>
    )
}