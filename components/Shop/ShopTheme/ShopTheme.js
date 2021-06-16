import React from "react";
import Link from "next/link";
import "./ShopTheme.sass";

import p2 from '../../../assets/img/themeImg/plantilla2.jpg'
import p7 from '../../../assets/img/themeImg/plantilla7.jpg'

export default function ShopTheme({ cb }) {
    return (
        <section className="edit-menu">
            <header>
                <div>
                    <h4>Descubre diseños para tu tienda</h4>
                    <p>Selecciona el tema que mas te guste para tu tienda.</p>
                </div>

            </header>
            <main>
                <div className="edit-theme">
                    <div>
                        <img src={p2}></img>
                    </div>
                    <div>
                        <div className="edit-theme-text">
                            <h3><b>Cl&aacute;sico</b></h3>
                            <button>Seleccionar Tema</button>
                            <b>(Selecionado)</b>
                        </div>
                    </div>



                </div>
                <div className="edit-theme">
                    <div>
                        <img src={p7}></img>
                    </div>
                    <div>
                        <div className="edit-theme-text">
                            <h3><b>Cl&aacute;sico</b></h3>
                            <button>Seleccionar Tema</button>
                        </div>
                    </div>



                </div>
            </main>
            {/* <footer>
                <button
                    style={{
                        backgroundColor: '#b9b9b9',
                        color: 'white'
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >Confirmar</button>
                <button
                    style={{
                        backgroundColor: '#F3F3F3',
                        color: 'red'
                    }}
                    onClick={(e) => {
                        cb('start', e)
                    }}
                >Cancelar</button>
            </footer> */}
        </section>
    );
}