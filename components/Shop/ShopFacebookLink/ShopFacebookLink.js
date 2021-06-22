import React from "react";
import Link from "next/link";
import "./ShopFacebookLink.sass";

export default function ShopFacebookLink({cb}) {
    return (
        <section className="edit-menu">
            <header>
                <div>
                    <h4>Tu tienda en Facebook</h4>
                    <p>Vincula tu cat&aacute;logo de productos en tu tienda de Facebook.</p>
                </div>
                <div className="shop_help_link">
                    <Link href='/ayuda'>
                        <a className="help">Ayuda</a>
                    </Link>
                </div>
                
            </header>
            <main>
                <div>
                    <label>Beneficios de vincular tu tienda:</label>
                    
                    
                </div>
                <div >
                    <ul>
                        <li>Un canal nuevo para exhibir tus productos.</li>
                        <li>Aumentar el tráfico de compradores a tu tienda.</li>
                        <li>Vincula tu tienda con Instagram al mismo tiempo que tu página de Facebook permitiéndote llegar a mas compradores, lo que te hará aumentar tus ventas.</li>
                    </ul>
                </div>
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