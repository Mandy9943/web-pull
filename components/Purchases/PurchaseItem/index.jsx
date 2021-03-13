import React from 'react';
import './PurchaseItem.css';
import Link from 'next/link';
import { getProductImgs } from "../../../lib/functions";

function PurchaseItem({ item, onSelect }) {

    return (
        <div className="product-item">
            <h5 className="status">{item.purchase_status_name}</h5>
            {item.purchase_status_name === "ENTREGADO" && <p className="detail-status">{item.data.days_msg}</p>}
            {/*NEED FIX*/}
            <div className="content">
                <a>
                    <section className="product">
                        <div className="product-card-img">
                            <img
                                alt={item.data.product.title.length < 10 ? item.data.product.title : item.data.product.title.slice(0, 10)}
                                src={getProductImgs(item.data.product.images)}
                            />
                        </div>
                        <section className='description'>
                            <h3>{item.data.product.title}</h3>
                            <h3>$ {item.data.total}</h3>
                            <h3 className="product-stock">{item.data.quantity}{" "} {Number(item.data.quantity) > 1 ? "unidades" : "unidad"}</h3>
                        </section>
                    </section>
                </a>

                <section className="info">
                    <a onClick={() => onSelect(item)}> Detalle de compra</a>
                    <p className="vendedor">Vendedor:</p>
                    <p>{item.data.seller.name + " " + item.data.seller.last_name}</p>
                    <p className="phone-client"> {item.data.seller.phone}</p>
                    <Link href={"/chat/" + 'Texto'}>
                        <a> Enviar mensaje</a>
                    </Link>
                </section>

            </div>
        </div>
    );
}

export default PurchaseItem;
