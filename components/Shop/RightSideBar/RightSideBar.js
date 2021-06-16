import React, { useState } from "react";
import "./RightSideBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faBars
} from "@fortawesome/free-solid-svg-icons";

import MyColorPicker from '../../Common/MyColorPicker'
import { ColorPicker } from 'material-ui-color';
import { HexColorPicker } from "react-colorful";
import InputColor from 'react-input-color';
import { ChromePicker } from 'react-color';


import { useForm } from 'react-hook-form'


import p2 from '../../../assets/img/themeImg/plantilla2.jpg'
import p7 from '../../../assets/img/themeImg/plantilla7.jpg'


//import state from "sweetalert/typings/modules/state";






const RightSideBAr = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const {
        section_edit, setEditSection, cb,
        menu, store_design, setDesignValues, quick_config, hasChange, setHasChange
    } = props;



    const [tab, setTab] = useState(1);


    const [color, setColor] = useState()


    const handleDesign = (name, value) => {

        setHasChange(true)
        setDesignValues(name, value)


    }



    const onSaveDesign = () => {
        const design = {
            "header": {
                "background_img": store_design.st_design_header_backgroundimage,
                "title": {
                    "color": store_design.st_design_header_title_color,
                    "font": store_design.st_design_header_title_font_family,
                },
                "subtitle": {
                    "text": store_design.st_design_header_subtitle_text,
                    "color": store_design.st_design_header_subtitle_color,
                    "font": store_design.st_design_st_design_header_subtitle_font_family
                },
            },
            "main": {
                "background_color": store_design.st_design_main_background_color,
                "widget": store_design.st_desing_main_widget
            },
            "footer": {
                "background_color": store_design.st_design_footer_background_color,
                "copyright": store_design.st_design_st_design_footer_copyright,
                "logo": store_design.st_design_footer_logo,
                // "facebook_link":"",
                // "twitter_link":"",
                // "instagram_link":"",
                // "youtube_link":"",
                // "pinterest_link":"",
            }
        }


        const response = quick_config(design)
        response && setHasChange(false)

    }

    const onSubmitForm = () => {

        setHasChange(false)
        onSaveDesign()

    }





    return (
        <div className="right-panel">
            <section >
                {section_edit === 'main' &&
                    <>
                        <ul className="options">
                            <li className={tab === 1 ? "active" : ""}>
                                <a onClick={(e) => setTab(1)}>Diseño</a>
                            </li>
                            <li className={tab !== 1 ? "active" : ""}>
                                <a onClick={(e) => setTab(2)}>Configuración</a>
                            </li>
                        </ul>

                        <ul className={tab === 1 ? "design" : "design hide"}>
                            {/* <li onClick={() => setEditSection('theme')}>Temas</li> */}
                            <li onClick={(e) => cb('theme',e)}>Temas</li>
                            <li onClick={() => setEditSection('color')}>Colores</li>
                            <li onClick={() => setEditSection('edit')}>Edici&oacute;n</li>
                        </ul>

                        <ul className={tab !== 1 ? "config" : "config hide"}>
                            {menu.map((item, index) => (
                                <li key={item.key} onClick={(e) => item.cb(item.key, e)} >{item.text}</li>
                            ))}
                        </ul>

                        <button disabled={!hasChange} onClick={onSaveDesign}>Actualizar</button>
                        <p className="right-panel-help">
                            <a>Ayuda</a>
                        </p>
                    </>
                }
                {
                    section_edit === 'color' &&
                    <>
                        <header>
                            <span onClick={() => setEditSection("main")}><FontAwesomeIcon icon={faArrowLeft} /></span>
                            <h4>Colores</h4>
                        </header>
                        <main>
                            <p>Selecciona el color que quieres para tu sitio. Puedes combinar colores
                            o elegir tu propia paleta.
                    </p>
                            <MyColorPicker hex={"#52fcf3"} store_design={store_design} setEditSection={setEditSection} handleDesign={handleDesign} />

                        </main>
                        <button disabled={!hasChange} onClick={onSaveDesign}>Actualizar</button>
                    </>
                }
                {
                    section_edit === 'colorEdit' &&
                    <>
                        <header>
                            <span onClick={() => setEditSection("color")}><FontAwesomeIcon icon={faArrowLeft} /></span>
                            <h4>Elige tu paleta de colores</h4>
                        </header>
                        <main>
                            <p>Crea una paleta de colores para tu sitio
                    </p>
                            <div>
                                <div >

                                    <div >
                                        <p>Encabezado y pie de paguina</p>
                                        {/* <div className="colorSelect" name="midiv"  style={{ background: store_design.st_design_footer_background_color }} 
                                     onClick={(e) => handleDesign(e.target.name,()=>{
                                     
                                         <ColorPicker hideTextfield defaultValue={store_design.st_design_footer_background_color}/>
                                     
                                     }
                                     )}/> */}
                                        {/* <InputColor
                                        initialValue={store_design.st_design_footer_background_color}
                                        onChangeComplete={
                                            (color)=>handleDesign("st_design_header_title_color",color.css.backgroundColor)
                                            // (color)=>console.log(color.css.backgroundColor)
                                            
                                        }
                                        placement="right"
                                    /> */}
                                        {/* <ChromePicker onChangeComplete={
                                        (color) => handleDesign("st_design_header_title_color", color.hex)
                                    }/> */}
                                        {/* <ColorPicker hideTextfield defaultValue={store_design.st_design_header_title_color}
                                        onChange={
                                            // (color) => handleDesign("st_design_header_title_color", color.css.backgroundColor)
                                            (color) => console.log(color.css.backgroundColor)

                                        } /> */}

                                        <HexColorPicker color={store_design.st_design_footer_background_color} onChange={

                                            (color) => handleDesign("st_design_footer_background_color", color)
                                        } />

                                    </div>
                                    <div>
                                        <p>Fondo</p>
                                        <div  >
                                            <HexColorPicker color={store_design.st_design_main_background_color} onChange={

                                                (color) => handleDesign("st_design_main_background_color", color)
                                            } />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Titulo</p>
                                        <div >
                                            <HexColorPicker color={store_design.st_design_header_title_color} onChange={

                                                (color) => handleDesign("st_design_header_title_color", color)
                                            } />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Subtitulo</p>
                                        <div >
                                            <HexColorPicker color={store_design.st_design_header_subtitle_color} onChange={

                                                (color) => handleDesign("st_design_header_subtitle_color", color)
                                            } />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </main>
                        <button disabled={!hasChange} onClick={onSaveDesign}>Actualizar</button>
                    </>
                }
                {
                    section_edit === 'edit' &&
                    <>
                        <header>
                            <span onClick={() => setEditSection("main")}><FontAwesomeIcon icon={faArrowLeft} /></span>
                            <h4>Edici&oacute;n</h4>
                        </header>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <main>


                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail1">Background Image URL</label>
                                    <input type="text" className="form-control" id="exampleInputEmail2"
                                        name="st_design_header_backgroundimage" placeholder="URL de la imagen de fondo"
                                        value={store_design.st_design_header_backgroundimage}
                                        {...register('st_design_header_backgroundimage', { pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9-@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/ })}
                                        onChange={(e) => handleDesign(e.target.name, e.target.value)} />
                                    {errors.st_design_header_backgroundimage && <span className="error">Introduzca url a una imagen</span>}

                                </div>

                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail3">Tipografia del Titulo</label>

                                    <select className="form-select " name="st_design_header_title_font_family"
                                        onChange={(e) => handleDesign(e.target.name, e.target.value)}>
                                        <option value="Arial, sans-serif" >Arial</option>
                                        <option value="Verdana" >Verdana</option>
                                        <option value="Gill Sans, sans-serif">Gill Sans</option>
                                        <option value="Times New Roman, serif">Times New Roman</option>
                                    </select>


                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail4">Texto del Subtitulo</label>
                                    <input type="text" className="form-control" id="exampleInputEmail5"
                                        name="st_design_header_subtitle_text" aria-describedby="emailHelp" placeholder="Introduce el subtitulo"
                                        value={store_design.st_design_header_subtitle_text}
                                        {...register('st_design_header_subtitle_text',
                                            { pattern: /^[0-9a-zA-Z. ,:]+$/ })}
                                        onChange={(e) => handleDesign(e.target.name, e.target.value)}
                                    />
                                    {errors.st_design_header_subtitle_text && <span className="error">Introduzca el subtitulo</span>}


                                </div>

                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail6">Tipografia del Subtitulo</label>

                                    <select className="form-select " name="st_design_st_design_header_subtitle_font_family"
                                        onChange={(e) => handleDesign(e.target.name, e.target.value)}>
                                        <option value="Arial, sans-serif" >Arial</option>
                                        <option value="Helvetica, sans-serif" >Helvetica</option>
                                        <option value="Gill Sans, sans-serif">Gill Sans</option>
                                        <option value="Times New Roman, serif">Times New Roman</option>
                                    </select>

                                </div>

                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail9">Texto del Footer</label>
                                    <input type="text" className="form-control" id="exampleInputEmail9"
                                        name="st_design_st_design_footer_copyright" aria-describedby="emailHelp" placeholder="Texto del Copyright"
                                        value={store_design.st_design_st_design_footer_copyright}
                                        {...register('st_design_st_design_footer_copyright',
                                            { pattern: /^[0-9a-zA-Z. ,:]+$/ })}

                                        onChange={(e) => handleDesign(e.target.name, e.target.value)} />
                                    {errors.st_design_st_design_footer_copyright && <span className="error">Introduzca Copyright</span>}

                                </div>
                                <div className="form-group pt-2">
                                    <label htmlFor="exampleInputEmail10">Logo Footer URL</label>
                                    <input type="text" className="form-control" id="exampleInputEmail10"
                                        name="st_design_footer_logo" aria-describedby="emailHelp" placeholder="Intrudzca url de imagen "
                                        value={store_design.st_design_footer_logo}
                                        {...register('st_design_footer_logo',
                                            { pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9-@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/ })}

                                        onChange={(e) => handleDesign(e.target.name, e.target.value)} />
                                    {errors.st_design_footer_logo && <span className="error">Introduzca url a una imagen</span>}


                                </div>




                            </main>
                            <button disabled={!hasChange} type="submit" >Actualizar</button>

                        </form>
                    </>

                }
                {
                    section_edit === 'theme' &&
                    <>
                        <header>
                            <span onClick={() => setEditSection("main")}><FontAwesomeIcon icon={faArrowLeft} /></span>
                            <h4>Temas</h4>
                        </header>
                        <main>
                            <p>Theme Section</p>

                            <div>
                                <div>
                                    <div className="block" onClick={() => { handleDesign("st_desing_main_widget", "p2") }}
                                    >
                                        <div className="block-footer"
                                            style={{ backgroundColor: store_design.st_desing_main_widget === "p2" ? "#cf0a2c" : "" }}>Plantilla 2</div>
                                        <div className="block-image">
                                            <img src={p2} />
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div className="block" onClick={() => { handleDesign("st_desing_main_widget", "p7") }} >
                                        <div className="block-footer"
                                            style={{ backgroundColor: store_design.st_desing_main_widget === "p7" ? "#cf0a2c" : "" }}
                                        >Plantilla 7</div>
                                        <div className="block-image">
                                            <img src={p7} />
                                        </div>

                                    </div>

                                </div>


                            </div>
                        </main>
                        <button disabled={!hasChange} onClick={onSaveDesign}>Actualizar</button>

                    </>

                }
                {/* {/* {section_edit !== 'color'
                ? <>
                    <ul className="options">
                        <li className={tab === 1 ? "active" : ""}>
                            <a onClick={(e) => setTab(1)}>Diseño</a>
                        </li>
                        <li className={tab !== 1 ? "active" : ""}>
                            <a onClick={(e) => setTab(2)}>Configuración</a>
                        </li>
                    </ul>

                    <ul className={tab === 1 ? "design" : "design hide"}>
                        <li onClick={() => setEditSection('theme')}>Temas</li>
                        <li onClick={() => setEditSection('color')}>Colores</li>
                        <li onClick={() => setEditSection('edit')}>Edici&oacute;n</li>
                    </ul>

                    <ul className={tab !== 1 ? "config" : "config hide"}>
                        {menu.map((item, index) => (
                            <li key={item.key} onClick={(e) => item.cb(item.key, e)} >{item.text}</li>
                        ))}
                    </ul>

                    <p className="right-panel-help">
                        <a>Ayuda</a>
                    </p>
                </>
                : <>
                    <header>
                        <span onClick={() => setEditSection(false)}><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <h4>Colores</h4>
                    </header>
                    <main>
                        <p>Selecciona el color que quieres para tu sitio. Puedes combinar colores
                        o elegir tu propia paleta.
                    </p>

                        
            <MyColorPickerex={"#52fcf3"} />

                    </main>
                </>
            }  */}
            </section >
        </div>
    );
};



export default RightSideBAr;
