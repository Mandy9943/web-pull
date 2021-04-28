import React, { useState } from "react";
import "./RightSideBar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faBars
} from "@fortawesome/free-solid-svg-icons";

import ColorPicker from '../../Common/ColorPicker';


const RightSideBAr = (props) => {
    const [tab, setTab] = useState(1);
    const {
        section_edit, setEditSection, cbConfig,
        menu, store_design
    } = props;

    console.log(section_edit)

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
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Background Image URL</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.header.background_img || "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)"} />


                        </div>
                        {/* <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Color del Titulo</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                            value={store_design.header.title.color || "black"}  />
                               
                            
                        </div> */}
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Tipografia del Titulo</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.header.title.font_family || "Arial"} />


                        </div>
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Texto del Subtitulo</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.header.subtitle.text || "Texto"} />


                        </div>
                        {/* <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Color del Subtitulo</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                            value={store_design.header.subtitle.color || "black"}/>
                               
                            
                        </div> */}
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Tipografia del Subtitulo</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.header.subtitle.font_family || "Arial"} />


                        </div>
                        {/* <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Color del Contenido</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                            value={store_design.main.background_color || "white"}/>
                               
                            
                        </div> */}
                        {/* <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Color del Footer</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                            value={store_design.footer.background_color || "#333333"}/>
                               
                            
                        </div> */}
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Texto del Footer</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.footer.copyright || "Texto de copyright"} />


                        </div>
                        <div class="form-group pt-2">
                            <label for="exampleInputEmail1">Logo Footer URL</label>
                            <input type="email" class="form-control" readOnly id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                                value={store_design.footer.logo || "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)"} />


                        </div>




                    </main>


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
