import React, { useState } from "react";
import Link from "next/link";
import "./ShopFacebookPixel.sass";

export default function ShopFacebookPixel({ cb, facebook_pixel, setFacebookPixel, onSaveFacebookPixel }) {
    const [activate, setActivate] = useState(facebook_pixel ? true : false)

    const onChangeValue = (value) => {
         
        setFacebookPixel(value)
        
        
    }

    const handleCheckboxChange =()=>{
        setActivate(!activate)
        setFacebookPixel('')
    }




    return (
        <section className="edit-menu-facebook-pixel">
            <header>
                <h4>Vinculate a Facebook</h4>
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
                <div>
                    <label><input type="checkbox" checked={activate}
                      onChange={handleCheckboxChange}  
                    />Activar Pixel de Facebook </label>

                </div>
                <div>
                    {activate &&
                        <>

                            <label>Codigo de Pixel<input type="text" className="codigo" value={facebook_pixel||''}
                                onChange={(e) => onChangeValue(e.target.value)}></input>  </label>
                        </>
                    }
                </div>
                <p>Una vez agregues tu codigo configuraremos el seguimiento de comercio electronico.
                    Para hacerlo funcionar debe ser habilitado desde el administrador de Google Analytics.</p>
            </main>
            <footer>
                <button
                    style={{
                        backgroundColor: '#b9b9b9',
                        color: 'white'
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        onSaveFacebookPixel().then(console.log('salvo'))
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
            </footer>
        </section>
    );
}