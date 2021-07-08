import React from "react";
import Link from "next/link";
import "./ShopGoogleAds.sass";

export default function ShopGoogleAds({cb}) {
    return (
        <section className="edit-menu-googleads">
            <header>
                <div>
                    <h4>Instala Google Ads</h4>
                    <p>Mide el rendimiento de tus anuncios de Google Ads y optimízalos.</p>
                </div>

                
            </header>
            <h5><b>Conversión </b></h5>
            <main>
                <div >
                    <div className="space">
                        <spam>
                            <label><b>Intención de compra</b></label>
                            <p>Toma en cuenta a los usuarios que realizan clic en comprar </p>
                        </spam>
                    
                        <div className="google-link">
                            <Link href="/ayuda"><a>Agregar el código</a></Link>
                        </div>
                    </div>
                    <hr/>
                    <div className="space">
                        <spam>
                            <label><b>Confirmacion de compra</b></label>
                            <p>Mide a los usuarios que finalizan la compra </p>
                        </spam>
                    
                        <div className="google-link">
                            <Link href="/ayuda"><a>Agregar el código</a></Link>
                        </div>
                    </div>
                </div>
            </main>
            <h5><b>Público</b></h5>
            <main>
                <div >
                    <div className="space">
                        <spam>
                            <label><b>Remarketing </b></label>
                            <p>Consiga toda la información sobre las acciones de los visitantes en la tienda</p>
                        </spam>
                    
                        <div className="google-link">
                            <Link href="/ayuda"><a>Agregar el código</a></Link>
                        </div>
                    </div>
                    
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