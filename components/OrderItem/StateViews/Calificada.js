import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faStar} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Common/Modal";


export default function Calificada({item, toggle, showModal}) {
    const qModal = (
        <div className="item-product-modal">
            <div className="vendor-reputation">
                <section>
                    <p>
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
                    <p className="description">{item.data.product.title}</p>
                    <p className="description" style={{marginTop: "15px"}}>{item.data.rate_purchase_data.comments}</p>
                </section>
            </div>
        </div>
    );

    return (
        <div>
            <section id="info">
                <FontAwesomeIcon icon={faCheck}/>
                <p>Venta calificada</p>
                <a onClick={() => toggle(true)}> Ver</a>
            </section>
            { showModal &&
                <Modal content={qModal} toggle={()=>toggle(false)}/>
            }
        </div>
    )
}
