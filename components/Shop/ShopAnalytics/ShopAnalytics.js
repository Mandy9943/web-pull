import React from "react";
import Link from "next/link";
import "./ShopAnalytics.sass";

export default function ShopAnalytics({cb}) {
    return (
        <section class="edit-menu">
            <header>
                <h4>Instala Google Analytics</h4>
                <p>Obten toda la informacion necesaria de tus visitantes y sacale provecho
                a tus campanas de marketing.</p>
            </header>
            <main>
                <div>
                    <label htmlFor="textarea">Copia y pega aqui la etiqueta del sitio web global o el id de
                        seguimiento</label>
                    <Link href='/ayuda'>
                        <a className="help">Ayuda</a>
                    </Link>
                </div>
                <textarea name="textarea" id="textarea"></textarea>
                <p>Una vez agregues tu codigo configuraremos el seguimiento de comercio electronico.
                    Para hacerlo funcionar debe ser habilitado desde el administrador de Google Analytics.</p>
            </main>
            <footer>
                <button
                    style={{
                        backgroundColor: '#b9b9b9',
                        color: 'white'
                    }}
                    onClick={(e)=>{
                        e.preventDefault();
                    }}
                >Confirmar</button>
                <button
                    style={{
                        backgroundColor: '#F3F3F3',
                        color: 'red'
                    }}
                    onClick={(e)=>{
                        cb('start', e)
                    }}
                >Cancelar</button>
            </footer>
        </section>
    );
}