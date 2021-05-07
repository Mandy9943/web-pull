import React from "react";

import "./ShopStart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faClone,
  faGlobe,
  faTag,
  faLightbulb,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { getProductImgs } from "../../../lib/functions";
import Link from "next/link";
import Router from "next/router";
import GoogleAnalytisc from "../../../assets/img/shop/Google analytics@2x.png";
import PixelFacebook from "../../../assets/img/shop/Pixel de Facebook@2x.png";
import GoogleAds from "../../../assets/img/shop/Google Ads@2x.png";
import VinculateFacebook from "../../../assets/img/shop/Vincúlate a Facebook@2x.png";
import { update_store } from "../../../services/storeApi";
import shopQuickConfig from "./lib";

const ShopStart = (props) => {
  let {
    store_name, store_domain, store_status,
    cb
  } = props

  let store_status_style = {
    color: store_status ? 'green' : 'red'
  }


  return (
    <div>
      <div className="shop-block shop-principal">
        <div className="shop-principal-add-photo">
          <a href="#">
            <FontAwesomeIcon icon={faCamera} />
            <sub>Agrega tu logo</sub>
          </a>
        </div>
        <div className="shop-principal-data">
          <h3>{store_name}</h3>
          <p className="direction">
            {store_domain} {" "}
            <sup>
              <a href="#">
                <FontAwesomeIcon icon={faClone} />
              </a>
            </sup>
          </p>
          <p className="link">
            <a onClick={(e) => cb("edit", e)}>Editar tienda</a> {" - "}
            <a onClick={(e) => {
              e.preventDefault();
              shopQuickConfig(props.quick_config);
            }}>Edicion rapida</a>
          </p>
        </div>
        <div className="shop-principal-state">
          <p className="title">Estado de mi tienda:</p>
          <p className="botton">
            <span style={store_status_style}>{store_status ? 'Activo' : 'Inactivo'}</span>
          </p>
        </div>
        <hr />
        <div className="shop-icons">
          <FontAwesomeIcon icon={faLightbulb} />
          <FontAwesomeIcon icon={faGlobe} />
          <FontAwesomeIcon icon={faClone} />
          <FontAwesomeIcon icon={faMobile} />
          <FontAwesomeIcon icon={faTag} />
        </div>
      </div>

      <div className="shop-block shop-stadistic">
        <div className="shop-stadistic-left">
          <p>Estadística de la tienda</p>
        </div>
        <div className="shop-stadistic-right">
          <p>Últimos 30 días</p>
        </div>
        <hr />
        <div className="shop-stadistic-data">
          <div>
            <p className="type">Visitas</p>
            <p className="number">15</p>
          </div>
          <div>
            <p className="type">Pedidos concretados</p>
            <p className="number">01</p>
          </div>
          <div>
            <p className="type">Porcentaje de visitas</p>
            <p className="number">10%</p>
          </div>
        </div>
      </div>

      <div className="shop-block shop-adventage">
        <div>
          <div
            className="shop-adventage-block"
            onClick={e => cb('analytics', e)}
          >
            <div className="shop-adventage-block-icon">
              <img
                alt="Foto del icono"
                src={GoogleAnalytisc}
                width="100"
                height="80"
              />
            </div>
            <h4>
              Google <br /> Analytics
            </h4>
            <p>
              Conoce el comportamiento de tus clientes en tu tienda y forma
              estrategias para vender más.
            </p>
          </div>

          <div className="shop-adventage-block"
            onClick={e => cb('facebookPixel', e)}
          >

            <div className="shop-adventage-block-icon">
              <img
                alt="Foto del icono"
                src={PixelFacebook}
                width="100"
                height="80"
              />
            </div>
            <h4>
              Pixel de <br /> Facebook
            </h4>
            <p>
              Agrega los códigos de conversión y remarketing para medir el
              rendimiento de tus anuncios de Google Ads, y poder obtimizarlos.
            </p>

          </div>
        </div>

        <div>
          <div className="shop-adventage-block"
           onClick={e => cb('googleAds', e)}>
            <div className="shop-adventage-block-icon">
              <img
                alt="Foto del icono"
                src={GoogleAds}
                width="100"
                height="80"
              />
            </div>
            <h4>Google Ads</h4>
            <p>
              Analiza el comportamiento de tus visitantes y haz remarketing
              midiendo el rendimiento de tus anuncios de Google Ads, y
              optimízalos.
            </p>
          </div>

          <div className="shop-adventage-block"
          onClick={e => cb('googleAds', e)}>
            <div className="shop-adventage-block-icon">
              <img
                alt="Foto del icono"
                src={VinculateFacebook}
                width="100"
                height="80"
              />
            </div>
            <h4>
              Vínculate a<br /> Facebook
            </h4>
            <p>
              Aumenta el trafico de tu tienda vinculando tu cuenta a Facebook.
            </p>
          </div>
        </div>
      </div>

      <div className="shop-block shop-novelty">
        <h4>Novedades</h4>
        <ul className="options">
          <li>
            <div>
              <h4>Bajamos nuestros cargos por venta!</h4>
              <p>Toma en cuenta a los usuarios que realizan click en comprar</p>
            </div>
            <div>
              <Link href="#">
                <a>Conocer más</a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h4>Bajamos nuestros cargos por venta!</h4>
              <p>Toma en cuenta a los usuarios que realizan click en comprar</p>
            </div>
            <div>
              <Link href="#">
                <a>Conocer más</a>
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h4>Bajamos nuestros cargos por venta!</h4>
              <p>Toma en cuenta a los usuarios que realizan click en comprar</p>
            </div>
            <div>
              <Link href="#">
                <a>Conocer más</a>
              </Link>
            </div>
          </li>
        </ul>
        <div className="links">
          <h4>Conoce más sobre KieroShops</h4>
          <ul>
            <li>
              <Link href="#">
                <a>Centro de vendedores</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Preguntas frecuentes</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopStart;
