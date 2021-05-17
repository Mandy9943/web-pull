import React, { useState } from "react";
import "./ShopEdit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMobile,
  faLaptop,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

import Theme2 from './ShopThemes/Theme2'
import Theme7 from './ShopThemes/Theme7'


const ShopEdit = ({ cb, section_edit, data, store_design }) => {

  const [display, setDisplay] = useState(2);


  const ulMoreOptions = () => (
    <ul className="more-options">
      <li>
        <a>Hasta 12 cuotas sin interés</a>
      </li>
      <li>
        <a>Efectivo</a>
      </li>
      <li>
        <a>Más medios de pago</a>
      </li>
    </ul>
  );

  const divCards = () => (
    <div className="cards">
      <div>
        <h4>Pago y Entrega</h4>
        <p>Envios gratis para algunos productos</p>
      </div>

      <div>
        <h4>Reembolso de vuelta</h4>
        <p>Garantía gratuita de devolución del 100%</p>
      </div>

      <div>
        <h4>Soporte de calidad</h4>
        <p>Soorte en lína 24/7</p>
      </div>
    </div>
  );

  return (
    <div className="edit">

      {/* Inicio Breadcrumb*/}
      <div className="breadcrumb">
        <a onClick={(e) => cb("start", e)}>KieroShop</a>
        <FontAwesomeIcon icon={faAngleRight} />
        <span>Editar tienda</span>
      </div>
      {/* Fin breadcrumb*/}

      <h3>Editar</h3>

      {/* Inicio Display selection*/}
      <div className="shop-icons">
        <a onClick={(e) => setDisplay(1)}>
          <FontAwesomeIcon
            icon={faMobile}
            className={display === 1 ? "active" : ""}
          />
        </a>
        <a onClick={(e) => setDisplay(2)}>
          <FontAwesomeIcon
            icon={faTv}
            className={display === 2 ? "active" : ""}
          />
        </a>
        <a onClick={(e) => setDisplay(3)}>
          <FontAwesomeIcon
            icon={faLaptop}
            className={display === 3 ? "active" : ""}
          />
        </a>
      </div>
      {/* Fin Display selection*/}

      {store_design.st_desing_main_widget === "p7" &&
        <Theme7 store_design={store_design} data={data} section_edit={section_edit} />}

      {store_design.st_desing_main_widget !== "p7" &&
        <Theme2 store_design={store_design} data={data} section_edit={section_edit} />}







    </div>
  );
};

export default ShopEdit;
