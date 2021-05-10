import React, { useState } from "react";
import Link from "next/link";
import "./ShopFacebookPixel.sass";
import { useForm } from 'react-hook-form'


export default function ShopFacebookPixel({ cb, facebook_pixel, setFacebookPixel, onSaveFacebookPixel,hasChange,setHasChange }) {
    const [activate, setActivate] = useState(facebook_pixel ? true : false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onChangeValue = (value) => {

        setFacebookPixel(value)
    }

    const handleCheckboxChange = () => {
        setActivate(!activate)

    }

    const onSubmitForm = () => {
        setHasChange(false)
        if (!activate) {
            setFacebookPixel("")
        }
        onSaveFacebookPixel()
    }


    return (
        <section className="edit-menu-facebook-pixel">
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <header>
                    <h4>Vinculate a Facebook Pixel</h4>
                    <p>Obten toda la informacion necesaria de tus visitantes y sacale provecho
                a tus campanas de marketing.</p>
                </header>
                <main>
                    <div className="encabezado"> 
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

                                <label>Identificador del pixel<input type="text" className="codigo" value={facebook_pixel || ''}
                                    
                                    {...register('codigo', { pattern: /^[0-9]+$/ })}
                                    onChange={(e) => onChangeValue(e.target.value)}></input>  </label>
                                <p className="error">
                                    {errors.codigo && <span>Tiene que ser un numero</span>}
                                </p>

                                {/* {<ErrorMessage errors={errors} name="codigo" render={({message})=><p>{message}</p>}/>} */}
                            </>
                        }
                    </div>
                    <p>Una vez agregues tu codigo configuraremos el seguimiento de comercio electronico.
                    Para hacerlo funcionar debe ser habilitado desde el administrador de Google Analytics.</p>
                </main>
                <footer>
                    <button
                        style={{
                            backgroundColor: hasChange ? '#cf0a2c' : '#b9b9b9',
                            color: 'white'
                        }}

                        type="submit"

                    >Confirmar</button>
                    <button
                        style={{
                            backgroundColor: '#F3F3F3',
                            color: 'red'
                        }}
                        onClick={(e) => {
                            setHasChange(false)
                            cb('start', e)
                        }}
                    >Cancelar</button>
                </footer>
            </form>
        </section>
    );
}