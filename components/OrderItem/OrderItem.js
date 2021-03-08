import React, { useState } from 'react';
import Link from 'next/link';
import {getProductImgs} from "../../lib/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faStar} from "@fortawesome/free-solid-svg-icons";
import './OrderItem.sass';
import Modal from '../../components/Common/Modal';
// import '../Purchases/PurchaseItem/PurchaseItem.css';

export default function OrderItem({ item, onSelect }) {
    const [showModal, setShowModal] = useState(false)

    const qModal = (
        <section>
            <div className="item-product-modal">
                <div className="vendor-reputation">
                    <section className="info">
                        <p className="stars">
                            {Array.from(Array(item.data.rate_purchase_data.rate_shop), i=>(
                                <FontAwesomeIcon icon={faStar} />
                            ))}
                        </p>
                        {item.data.rate_purchase_data.rate_shop == 5 &&
                        <h4 className="sub">Excelente vendedor!</h4>
                        }
                    </section>
                    <section className="info-text">
                        <h3>Calificación del producto</h3>
                        <h4 className="sub-1">{item.data.product.title}</h4>
                        <p className="description">{item.data.rate_purchase_data.comments}</p>
                    </section>
                </div>
            </div>
        </section>
    )

    return (
        <div className="order-item">
            {item.purchase_status==="CALIFICADA" &&
                <p className="detail-status">{item.data.rate_purchase.created_since}</p>
            }

            <div className="order-item-content">
                <section className="order">
                    <div className="order-card-img">
                        <img
                            alt={item.data.product.title}
                            src={getProductImgs(item.data.product.images)}
                        />
                    </div>
                    <div className='description'>
                        <h3>{item.data.product.title}</h3>
                        <h3>$ {item.data.total}</h3>
                        <h3 className="order-stock">{item.data.quantity} unidad</h3>
                    </div>
                </section>

                <section id="order-client-data">
                    <p>Cliente:</p>
                    <p>{item.data.client.name + " " + item.data.client.last_name}</p>
                    <p className="phone-client"> {item.data.client.phone}</p>
                    {/*<Link href={"/chat/" + 'Texto'}>*/}
                    <div className="messages">
                        <a>Ver Mensaje</a>
                        {1 &&
                            <span className="accent-background">5</span>
                        }
                    </div>
                    {/*</Link>*/}
                </section>
                {item.data.purchase_status === 'ENTREGADO' &&
                    <section className="info">
                        <p>En espera por calificacion</p>
                    </section>
                }
                {item.data.purchase_status === 'CALIFICADO' &&
                    <section className="info">
                        <FontAwesomeIcon icon={faCheck}/>
                        <p>Venta calificada</p>
                        <a onClick={() => setShowModal(true)}> Ver</a>
                        { showModal &&
                            <Modal content={qModal} toggle={()=>setShowModal(false)}/>
                        }
                    </section>
                }
                {item.data.purchase_status === 'Algo' &&
                    <section className="info">
                        <a onClick={() => onSelect(item)}> Verificar</a>
                    </section>
                }
            </div>
        </div>
    );
}
