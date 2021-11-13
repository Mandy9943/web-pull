import Imagen from "../Common/Imagen/Imagen";
import kiero_logo from "../../assets/img/kiero.png";
import React from "react";
import '../ProductCard/ProductCard.css'

const ProductCardVacio = () => {
    return (
        <div className="producto-card">
            <div className="product-card-img">
                <Imagen
                    src={kiero_logo}
                    alt=""
                />
            </div>
            <button>Cargando producto</button>
        </div>
    )
}

export default ProductCardVacio;