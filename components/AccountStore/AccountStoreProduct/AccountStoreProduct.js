import React, { Component } from "react";
import "./AccountStoreProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCamera } from "@fortawesome/free-solid-svg-icons";

import DataSheet from "./../../DataSheet";
import Remove from "./../../Remove";

class AccountStoreProduct extends Component {
  render() {
    return (
      <div className="account-store-product-wrap">
        <div className="account-store-product-wrap-back">
          <span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>{" "}
          volver
        </div>
        <div className="account-store-product-header">
          <h2>Portatil</h2>
          <p>3 visitas | 0 ventas</p>
        </div>
        <div className="account-store-product-info-1">
          <label>Titulo</label>
          <input type="number" />
        </div>
        <div className="account-store-product-info-2">
          <label>precio</label>
          <input type="number" />
        </div>
        <div className="account-store-product-wrap-add-info">
          <div>
            <div>
              <h3>Caracteristicas del producto</h3>
            </div>
            <div className="account-store-product-wrap-add-photo">
              <div>
                <h4>Fotos</h4>
              </div>
              <div className="account-store-product-wrap-gallery">
                <div className="">
                  <img src="https://picsum.photos/100" />
                </div>
                <div className="">
                  <img src="https://picsum.photos/100" />
                </div>
                <div className="">
                  <img src="https://picsum.photos/100" />
                </div>
                <div className="">
                  <img src="https://picsum.photos/100" />
                </div>
                <div className="">
                  <img src="https://picsum.photos/100" />
                </div>
              </div>
              <div>
                <button>
                  Agregar foto <FontAwesomeIcon icon={faCamera} />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="account-store-product-info-1">
              <label>color</label>
              <input type="text" />
            </div>
            <div className="account-store-product-info-1">
              <label>cantidad</label>
              <input type="number" />
            </div>
            <div className="account-store-product-info-1">
              <label>codigo universal del producto</label>
              <input type="number" />
            </div>
            <div className="account-store-product-wrap-button">
              <button>guardar</button>
              <button>cancelar</button>
            </div>
          </div>
        </div>
        <div className="account-store-product-wrap-section-2">
          <DataSheet title="Ficha tecnica" />
          <Remove title="Retiro en persona" />
        </div>
      </div>
    );
  }
}

export default AccountStoreProduct;
