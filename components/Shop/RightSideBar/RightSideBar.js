import React, { useState } from "react";
import "./RightSideBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faBars
} from "@fortawesome/free-solid-svg-icons";

import ColorPicker from '../../Common/ColorPicker';
//import state from "sweetalert/typings/modules/state";






const RightSideBAr = (props) => {


    const {
        section_edit, setEditSection, cbConfig,
        menu, store_design, setDesignValues, quick_config
    } = props;

    const [tab, setTab] = useState(1);

    const [hasChange, setHasChange] = useState(false)

    const handleText = (name, value) => {
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
                    "color": store_design.st_design_main_background_color,
                    "font": store_design.st_design_st_design_header_subtitle_font_family
                },
            },
            "main": {
                "background_color": store_design.st_design_footer_background_color,
                "widget": "p2"
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



    return (
        <section className="right-panel">
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
                        <ColorPicker hex={"#52fcf3"} />

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
                    <main>
                        <p>Edit Section</p>
                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail1">Background Image URL</label>
                            <input type="email" className="form-control" id="exampleInputEmail2"
                                name="st_design_header_backgroundimage" aria-describedby="emailHelp" placeholder="URL de la imagen de fondo"
                                value={store_design.st_design_header_backgroundimage}
                                onChange={(e) => handleText(e.target.name, e.target.value)} />


                        </div>

                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail3">Tipografia del Titulo</label>
                           
                            <select className="form-select " name="st_design_header_title_font_family"
                            onChange={(e) => handleText(e.target.name, e.target.value)}>
                                <option value="Arial, sans-serif" >Arial</option>
                                <option value="Verdana" >Verdana</option>
                                <option value="Gill Sans, sans-serif">Gill Sans</option>
                                <option value="Times New Roman, serif">Times New Roman</option>
                            </select>


                        </div>
                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail4">Texto del Subtitulo</label>
                            <input type="email" className="form-control" id="exampleInputEmail5"
                                name="st_design_header_subtitle_text" aria-describedby="emailHelp" placeholder="Introduce el subtitulo"
                                value={store_design.st_design_header_subtitle_text}
                                onChange={(e) => handleText(e.target.name, e.target.value)}
                            />


                        </div>

                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail6">Tipografia del Subtitulo</label>
                            
                            <select className="form-select " name="st_design_st_design_header_subtitle_font_family"
                            onChange={(e) => handleText(e.target.name, e.target.value)}>
                                <option value="Arial, sans-serif" >Arial</option>
                                <option value="Helvetica, sans-serif" >Helvetica</option>
                                <option value="Gill Sans, sans-serif">Gill Sans</option>
                                <option value="Times New Roman, serif">Times New Roman</option>
                            </select>

                        </div>

                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail9">Texto del Footer</label>
                            <input type="email" className="form-control" id="exampleInputEmail9"
                                name="st_design_st_design_footer_copyright" aria-describedby="emailHelp" placeholder="Texto del Copyright"
                                value={store_design.st_design_st_design_footer_copyright}
                                onChange={(e) => handleText(e.target.name, e.target.value)} />


                        </div>
                        <div className="form-group pt-2">
                            <label htmlFor="exampleInputEmail10">Logo Footer URL</label>
                            <input type="email" className="form-control" id="exampleInputEmail10"
                                name="st_design_footer_logo" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.st_design_footer_logo}
                                onChange={(e) => handleText(e.target.name, e.target.value)} />


                        </div>




                    </main>
                    <button disabled={!hasChange} onClick={onSaveDesign}>Actualizar</button>


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
                                <div className="block">
                                    <div className="block-image">
                                        <p>banner</p>
                                    </div>
                                    <div className="block-footer"></div>
                                </div>
                                <input id="p2" value="p2" type="radio" name="Plantilla 2" /><span>Plantilla 2</span>
                            </div>
                            <div>
                                <input id="p7" value="p7" type="radio" name="Plantilla 7 " /><span>Plantilla 7</span>
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

                        
            <ColorPicker hex={"#52fcf3"} />

                    </main>
                </>
            }  */}
        </section >
    );
};



export default RightSideBAr;
