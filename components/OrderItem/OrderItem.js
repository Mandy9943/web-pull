import React, { useState } from 'react';
import Link from 'next/link';
import {getProductImgs} from "../../lib/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faStar} from "@fortawesome/free-solid-svg-icons";
import './OrderItem.sass';
import Modal from '../../components/Common/Modal';
// import '../Purchases/PurchaseItem/PurchaseItem.css';
import {Iniciada, Verificada, Entregado, Calificada} from './StateViews'

export default function OrderItem({ item, onSelect }) {
    const [showModal, setShowModal] = useState(false);

    function getComponentByState(state) {
        // Perhaps there is a cleaner way to do this, I dont like it D:
        switch (state) {
            case "INICIADA":
                return (<Iniciada item={item} onSelect={onSelect} />);
            case "VERIFICADA":
                return ( <Verificada item={item} showModal={showModal} toggle={()=>{setShowModal(!showModal)}} />);
            case "ENTREGADO":
                return (<Entregado item={item} />);
            case "CALIFICADA":
                return (<Calificada item={item} showModal={showModal} toggle={()=>{setShowModal(!showModal)}} />);
        }
    }

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
                        <a>Ver Mensajes</a>
                        {1 &&
                            <span className="accent-background">5</span>
                        }
                    </div>
                    {/*</Link>*/}
                </section>

                {getComponentByState(item.data.purchase_status)}

            </div>

        </div>
    );
}
