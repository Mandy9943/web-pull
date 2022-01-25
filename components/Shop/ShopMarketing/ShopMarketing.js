import React from "react";
import Link from "next/link";

import "./ShopMarketing.sass";

import GAnlitycs from "../../../assets/img/iconos/marketing/googleanalitics.png";
import GAds from "../../../assets/img/iconos/marketing/googleads.png";
import Gconsole from "../../../assets/img/iconos/marketing/googleconsole.png";
import GShopping from "../../../assets/img/iconos/marketing/googleshopping.png";
import fb from "../../../assets/img/iconos/marketing/facebook.png";
import fblike from "../../../assets/img/iconos/marketing/facebooklike.png";
import Instagram from "../../../assets/img/iconos/marketing/instagram.png";

export default function ShopMarketing({ cb }) {
  return (
    <section className="edit-marketing">
      <header>
        <h4>Herramientas de Marketing</h4>
        <p>
          Con esta herramienta puedes realizar el seguimiento de tus campañas y
          conocer más sobre las acciones de tus visitantes. Podrás aumentar el
          tráfico y las ventas de tu tienda.
        </p>
      </header>
      <main>
        <div className="row">
          <div className="marketing">
            <div className="info">
              <img src={GAnlitycs} alt="Picture of the author" />

              <div>
                <h4>
                  <b>Google Analytics</b>
                </h4>
                <p>
                  Conoce y obtén información de tus visitantes para tus campañas
                  de marketing.
                </p>
              </div>
            </div>
            <div className="link">
              <a onClick={(e) => cb("analytics", e)}>Configurar</a>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={GAds} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Google Ads</b>
                </h4>
                <p>
                  Mide las acciones que realizan tus visitantes y la eficacia de
                  tus anuncios.{" "}
                </p>
              </div>
            </div>
            <div className="link">
              <Link href="/tienda">Configurar</Link>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={Gconsole} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Google Search Console</b>
                </h4>
                <p>
                  Mejora el posicionamiento de tu tienda en los resultados de
                  búsqueda de Google.{" "}
                </p>
              </div>
            </div>
            <div className="link">
              <Link href="/tienda">Configurar</Link>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={GShopping} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Google Shoping</b>
                </h4>
                <p>
                  Crea anuncios publicitarios en Google para promocionar tus
                  productos y aumentar las ventas de tu tienda.{" "}
                </p>
              </div>
            </div>
            <div className="link">
              <Link href="/tienda">Configurar</Link>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={fb} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Facebook Pixel</b>
                </h4>
                <p>
                  Mide las acciones que realizan tus visitantes y la eficacia de
                  tus anuncios.{" "}
                </p>
              </div>
            </div>
            <div className="link">
              <a onClick={(e) => cb("facebookPixel", e)}>Configurar</a>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={fblike} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Tu Tienda en Facebook</b>
                </h4>
                <p>
                  Vincula tu tienda con Facebook y aumenta tu tráfico en
                  KieroShops.
                </p>
              </div>
            </div>
            <div className="link">
              <Link href="/tienda">Configurar</Link>
            </div>
          </div>
          <div className="marketing">
            <div className="info">
              <img src={Instagram} alt="Picture of the author" />
              <div>
                <h4>
                  <b>Tu Tienda en Instagram</b>
                </h4>
                <p>
                  Vincula tu tienda con Instagram y etiqueta tus productos para
                  aumentar tu tráfico en KieroShops.
                </p>
              </div>
            </div>
            <div className="link">
              <Link href="/tienda">Configurar</Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
