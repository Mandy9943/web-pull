import React, { useState } from "react";
import "./ShopEdit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faMobile,
  faLaptop,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

const ShopEdit = ({ cb, section_edit, data }) => {
  const [clasification, setClasification] = useState(1);
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

      <div className="edit-header">
        <h3>{data.store.name || "Mi tienda"}</h3>
        <p>Menú</p>
      </div>

      <div
        className="edit-image"
        style={{

          backgroundImage: data.design.header.background_img !='undefined' ?"url(" + data.design.header.background_img + ")":"url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p style={{

          color: data.design.header.title.color || "black",
        }}>
          {data.store.name || "Texto"}
        </p>
        <h5 style={{
          color: data.design.header.subtitle.color || "black" ,
        }}>
          {data.design.header.subtitle.text || "Texto"}
        </h5>
      </div>

      <div className="edit-banner">
        <div className="block-container">
          <div className="block">
            <div className="block-image">
              <p>banner</p>
            </div>
            <div className="block-footer"></div>
          </div>

          <div className="block">
            <div className="block-image">
              <p>banner</p>
            </div>
            <div className="block-footer"></div>
          </div>

          <div className="block">
            <div className="block-image">
              <p>banner</p>
            </div>
            <div className="block-footer"></div>
          </div>
        </div>

        <ul className="clasification">
          <li className={clasification === 1 ? "active" : ""}>
            <a onClick={(e) => setClasification(1)}>Destacados</a>
          </li>
          <li className={clasification === 2 ? "active" : ""}>
            <a onClick={(e) => setClasification(2)}>En venta</a>
          </li>
          <li className={clasification === 3 ? "active" : ""}>
            <a onClick={(e) => setClasification(3)}>Lo más vendido</a>
          </li>
        </ul>

        <div className="block-container">
          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>
        </div>

        <div className="central-banner">
          <p>banner</p>
        </div>

        <div className="block-container">
          <div className="block-sub-banner">
            <div className="block-sub-banner-image image-round"></div>
          </div>

          <div className="block-sub-banner">
            <div className="block-sub-banner-image image-round"></div>
          </div>
        </div>

        <ul className="clasification">
          <li>
            <p>Lo mas reciente</p>
          </li>
        </ul>

        <div className="block-container rows2">
          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>
        </div>

        <div className="block-container">
          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>

          <div className="block-clasificaction">
            <div className="block-clasificaction-image image-round image-shadow"></div>
          </div>
        </div>

        <div className="more">
          <a>Ver más</a>
        </div>

        {(section_edit !== 'theme')
          ? <ul className="more-options">
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
          : <ul className="other-details">
            <li>
              <h3>Pago y entrega</h3>
              <p>Envios gratis para algunos productos.</p>
            </li>
            <li>
              <h3>Reembolso de vuelta</h3>
              <p>Garantia gratuita de devolucion del 100%.</p>
            </li>
            <li>
              <h3>Soporte de calidad</h3>
              <p>Soporte en linea 24/7.</p>
            </li>
          </ul>
        }

        <ul className="clasification">
          <li>
            <p>Síguenos en Instagram</p>
          </li>
        </ul>

        <div
          className="edit-image"
          style={{
            backgroundImage:
              "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)",
          }}
        ></div>
      </div>

      <div className="edit-header footer"
          style={{
            backgroundColor: data.design.header.title.color || "black"
            
          }}
        >
        <p> {data.store.name || "Texto"}</p>
        <p>Información</p>
      </div>
    </div >
  );
};

export default ShopEdit;
