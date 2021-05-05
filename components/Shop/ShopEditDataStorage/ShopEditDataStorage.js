import React, { useState } from "react";
import Link from "next/link";

import DomainImg from '../../../assets/img/shop/domain.png';
import OwnDomainImg from '../../../assets/img/shop/own_domain.png';
import "./ShopEditDataStorage.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ShopEditDataStorage({ store_name, cb, saveDomain, store_design,quick_config }) {

    
    const [display, setDisplay] = useState(false);
    const [domain, setDomain] = useState(store_name || '')

    switch (display) {
        case 'store':
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
                        <h4>Nombre de la Tienda</h4>
                    </header>
                    <main>
                        <div>
                            <h4>Mi Tienda</h4>

                            <div className="white-box row">
                                <div className="col-md-2">
                                    <img src={DomainImg} alt="" />
                                </div>
                                <div className="ml-2">
                                     <p>{store_name || "midominio"}</p>
                                     {/* <p>{store_name || "midominio"}</p>
                                     <p>{store_name || "midominio"}</p> */}
                                </div>
                               
                                <a
                                    className="push-right"
                                    onClick={e => {
                                        e.preventDefault()
                                        setDisplay('store')
                                    }}
                                >
                                    Editar
                                </a>
                            </div>




                        </div>
                        <div>
                            <h4>Diseño</h4>

                            <div className="white-box row">
                                <div className="col-md-2">
                                    <img src={DomainImg} alt="" />
                                </div>
                                <div className="ml-2">
                                     <p>Background Image URL: {store_design.header.background_img || "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)"}</p>
                                     <p>Color del Titulo: {store_design.header.title.color || "black"}</p>
                                     <p>Tipografia del Titulo: {store_design.header.title.font_family || "Arial"}</p>
                                     <p>Texto del Subtitulo: {store_design.header.subtitle.text || "Texto"}</p>
                                     <p>Color del Subtitulo: {store_design.header.subtitle.color || "black"}</p>
                                     <p>Tipografia del Subtitulo: {store_design.header.subtitle.font_family || "Arial"}</p>
                                     <p>Color del Contenido: {store_design.main.background_color || "white"}</p>
                                     <p>Plantilla: {store_design.main.widget || "p2"}</p>
                                     <p>Color del Footer: {store_design.footer.background_color || "#333333"}</p>
                                     <p>Texto del Footer: {store_design.footer.copyright || "Texto de copyright"}</p>
                                     <p>Logo Footer URL: {store_design.footer.logo || "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)"}</p>
                                </div>
                               
                                <a
                                    className="push-right"
                                    onClick={e => {
                                        e.preventDefault()
                                        setDisplay('store')
                                    }}
                                >
                                    Editar
                                </a>
                            </div>




                        </div>
                        {/* <div>
                            <h4>Asocia tu dominio</h4>
                            <div className="white-box">
                                <img src={OwnDomainImg} alt="" />
                                <span>Si ya posees un dominio propio puedes asociarlo</span>
                                <a className="push-right"><FontAwesomeIcon icon={faAngleRight} /></a>
                            </div>
                        </div> */}
                    </main>
                </section>
            );
    }
}