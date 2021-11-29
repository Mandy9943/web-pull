import kiero_logo from "../../assets/img/kiero.png";
import React from "react";
import '../ProductCard/ProductCard.css'
import Image from "next/image"

const ProductCardVoid = (props) => {
    return (
        <div className="producto-card">
            <div className="product-card-img">
                <Image
                    src={kiero_logo}
                    alt=""
                    className={props.className}
                    layout="fill"
                    placeholder="skeleton"
                />
            </div>
            <button>Cargando producto</button>
        </div>
    )
}

export default ProductCardVoid;