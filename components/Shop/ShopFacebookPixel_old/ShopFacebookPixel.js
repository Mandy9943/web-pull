import { React, useState } from "react";
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import "./ShopFacebookPixel.sass"


export default function ShopFacebookPixel({ cb, onSaveFacebookPixel, setFacebookPixel, facebook_pixel }) {
    // const [activate, setActivate] = useState(facebook_pixel ? true : false)

    // const onChange = (value) => {

    //     setFacebookPixel(value)
    // }



    return (
        // <section className="edit-menu-facebook-pixel">
        //     <header>
        //         <h4>Instala Facebook Pixel</h4>
        //         <p>Obten toda la informacion necesaria de tus visitantes y sacale provecho
        //         a tus campanas de marketing.</p>
        //     </header>
        //     <main>
        //         <div>
        //             <label htmlFor="textarea">Activa Pixel de Facebook</label>
        //             <Link href='/ayuda'>
        //                 <a className="help">Ayuda</a>
        //             </Link>
        //         </div>
        //         <div>
        //             <label><input type="checkbox" checked={facebook_pixel || false}
        //             />Activar Pixel de Facebook </label>

        //         </div>
        //         <div>
        //             {activate &&
        //                 <>

        //                     <label>Codigo de Pixel<input type="text" className="codigo" value={facebook_pixel}
        //                         onChange={(e) => setFacebookPixel(e.target.value)}></input>  </label>
        //                 </>
        //             }
        //         </div>
        //         <p>Una vez agregues tu codigo configuraremos el seguimiento de comercio electronico.
        //             Para hacerlo funcionar debe ser habilitado desde el administrador de Google Analytics.</p>
        //     </main>
        //     <footer>
        //         <button
        //             style={{
        //                 backgroundColor: '#b9b9b9',
        //                 color: 'white'
        //             }}
        //             onClick={(e) => {
        //                 e.preventDefault();
        //                 onSaveFacebookPixel()
        //             }}
        //         >Confirmar</button>
        //         <button
        //             style={{
        //                 backgroundColor: '#F3F3F3',
        //                 color: 'red'
        //             }}
        //             onClick={(e) => {
        //                 cb('start', e)
        //             }}
        //         >Cancelar</button>
        //     </footer>
        // </section>
        <div>
            hola
        </div>
    );
}