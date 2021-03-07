import React from 'react';
import Link from 'next/link';
import {getProductImgs} from "../../lib/functions";
import './OrderItem.sass';
// import '../Purchases/PurchaseItem/PurchaseItem.css';

export default function OrderItem({ item, onSelect }) {
    console.log(item)
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
                        <a>Ver Mensaje</a>
                    {/*</Link>*/}
                </section>

                <section className="info">
                    <a onClick={()=>onSelect(item)}> Verificar</a>
                </section>

            </div>
        </div>
    );
}
