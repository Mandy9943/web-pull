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
    menu
  } = props;

  return (
    <section className="right-panel">
        { section_edit !== 'color'
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
            </ul>

            <ul className={tab !== 1 ? "config" : "config hide"}>
              {menu.map((item, index)=>(
                  <li key={item.key} onClick={(e)=>item.cb(item.key, e)} >{item.text}</li>
              ))}
            </ul>

            <p className="right-panel-help">
                <a>Ayuda</a>
            </p>
        </>
        :   <>
                <header>
                    <span onClick={()=>setEditSection(false)}><FontAwesomeIcon icon={faArrowLeft}/></span>
                    <h4>Colores</h4>
                </header>
                <main>
                    <p>Selecciona el color que quieres para tu sitio. Puedes combinar colores
                        o elegir tu propia paleta.
                    </p>

                {/*  COLOR PICKER HERE  */}
                <ColorPicker hex={"#52fcf3"}/>

                </main>
            </>
        }
    </section>
  );
};

export default RightSideBAr;
