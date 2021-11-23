import Imagen from "../Common/Imagen/Imagen";
import kiero_logo from "../../assets/img/kiero.png";
import React from "react";
import '../ProductCard/ProductCard.css'

const ProductCardVoid = (props) => {
    return (
        <div className="producto-card">
            <div className="product-card-img">
                <Imagen
                    src={kiero_logo}
                    alt=""
                    className={props.className}
                />
            </div>
            <button>Cargando producto</button>
        </div>
    )
}

export default ProductCardVoid;