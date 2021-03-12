import React, { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faStar} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Common/Modal";

export default function Verificada({item, showModal, toggle}) {
    const qModal = (
        <section id="verified-modal">
            <h3>¿Este producto ya fue entregado?</h3>
            <p>Invita al comprador a calificar su experiencia con la compra</p>
            <div className="actions">
                <a onClick={e=>{
                    e.preventDefault();
                    // TODO Logic behind this
                    toggle()
                }}>Ya fue entregado</a>
                <a onClick={e=>{
                    e.preventDefault();
                    // TODO Logic behind this
                    toggle()
                }}>Aun no lo ha recibido</a>
            </div>
        </section>
    );

    return (
        <section className="info" style={{textAlign: "center"}}>
            <a onClick={toggle}>¿Este producto ya fue <br/>entregado?</a>
            {!showModal &&
                <Modal content={qModal} toggle={toggle} />
            }
        </section>
    )
}
