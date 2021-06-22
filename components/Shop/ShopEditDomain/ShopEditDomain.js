import React, { useState } from "react";
import Link from "next/link";

import DomainImg from '../../../assets/img/shop/domain.png';
import OwnDomainImg from '../../../assets/img/shop/own_domain.png';
import "./ShopEditDomain.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopEditDomain({ store_domain, cb, saveDomain }) {

    
    const [display, setDisplay] = useState(false);
    const [domain, setDomain] = useState(store_domain || '')

    switch (display) {
        case 'domain':
            return (
                <section className="edit-domain">
                    <header>
                        <h4>Dominio Web Actual</h4>
                    </header>
                    <main className="white-box form">
                        <input
                            name="domain"
                            id="domain"
                            value={domain}
                            onChange={e => {
                                e.preventDefault();
                                setDomain(e.target.value)
                            }}
                        />
                        <label htmlFor="domain">.shops.kiero.co</label>
                    </main>
                    <footer>
                        <button
                            style={{
                                backgroundColor: '#b9b9b9',
                                color: 'white'
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                saveDomain(domain);
                            }}
                        >Confirmar</button>
                        <button
                            style={{
                                backgroundColor: '#F3F3F3',
                                color: 'red'
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                setDisplay(false);
                            }}
                        >Cancelar</button>
                    </footer>
                </section>
            )

        case 'own_domain':
            return (
                <>
                </>
            )

        default:
            return (
                <section className="edit-domain">
                    <header>
                        <h4>Dominio Web</h4>
                    </header>
                    <main>
                        <div>
                            <h4>Tu dominio</h4>
                            <div className="white-box">
                                <img src={DomainImg} alt="" />
                                <span>{store_domain || "midominio"}.shops.kiero.co</span>
                                <a
                                    className="push-right"
                                    onClick={e => {
                                        e.preventDefault()
                                        setDisplay('domain')
                                    }}
                                >
                                    Editar
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4>Asocia tu dominio</h4>
                            <div className="white-box">
                                <img src={OwnDomainImg} alt="" />
                                <span>Si ya posees un dominio propio puedes asociarlo</span>
                                <a className="push-right"><FontAwesomeIcon icon={faAngleRight} /></a>
                            </div>
                        </div>
                    </main>
                </section>
            );
    }
}