import React,{useState} from "react";
import Link from "next/link";
import { useForm } from 'react-hook-form'
import "./ShopAnalytics.sass";

export default function ShopAnalytics({ cb, onSaveGoogleAnalytic,
    google_analytic, setGoogleAnalytic, hasChange, setHasChange }) {

    const onChangeValue = (value) => {
        setHasChange(true)
        setGoogleAnalytic(value)
    }

    const [activate, setActivate] = useState(google_analytic ? true : false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleCheckboxChange = () => {
        setActivate(!activate)

    }

    const onSubmitForm = () => {
        setHasChange(false)
        if (!activate) {
            setGoogleAnalytic("")
        }
        onSaveGoogleAnalytic()
    }

    return (
        <section className="edit-menu-analytics">
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <header>
                    <h4>Instala Google Analytics</h4>
                    <p>Obten toda la informacion necesaria de tus visitantes y sacale provecho
                a tus campanas de marketing.</p>
                </header>
                <main className="encabezado">
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
                        />Activar Google Analytics </label>

                    </div>
                    <div>
                        {activate &&
                            <>

                                <label>ID de seguimiento <input type="text" className="codigo" value={google_analytic || ''}
                                    placeholder="UA-XXXXXXX-X"
                                    {...register('codigo', { pattern: /^UA-[0-9]+-[0-9]+$/ })}
                                    onChange={(e) => onChangeValue(e.target.value)}></input>  </label>
                                <p className="error">
                                    {errors.codigo && <span>Tiene que tener el formato UA-XXXXXXX-X</span>}
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
                        // onClick={(e) => {
                        //     e.preventDefault();
                           
                        // }}
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