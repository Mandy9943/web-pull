import React from 'react'
import {handleFormatUrl} from "../../lib/functions";
import Imagen from "../Common/Imagen/Imagen";
import {getImgProduct} from "../../lib/config";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import "./ListCategory.css";
import kiero_logo from "../../assets/img/kiero.png";


const ProductCardList = ({product, i, ...props}) => {

    if (props.empty !== true) {
        return (
            <a
                href={handleFormatUrl(product.product_id, product.title)}

            >
                <div
                    className="d-flex formatCard"
                    data-index={i}

                    onClick={() => props.handleDataInfoSearch(product, i)}
                    style={{height: "100% !important"}}
                >
                    <div className="temp-card">
                        <div className="product-card-img">
                            <div className="anullProperties">
                                <Imagen spinner={true}
                                        alt={product.title}
                                        src={getImgProduct(product)}
                                        className="img"
                                />
                            </div>
                        </div>
                        <div className="product-card-description-box">
                            <h2>
                                {" "}
                                $
                                {product.price
                                    ? String(product.price)
                                        .split(".")[0]
                                        .replace(/(.)(?=(\d{3})+$)/g, "$1.")
                                    : "$ ... "}
                            </h2>
                            <h4>{product.brand} </h4>
                            <div className="product-card-description">
                                <p>
                                    {product.title.substr(0, 60) +
                                    (product.title.length > 60 ? "..." : ".")}
                                </p>
                                {/* {parseInt(product.is_prime) ? ( */}
                                <div className="kiero-envios-card">
                                    <div className="kiero-envios-card-icon">
                                        <FontAwesomeIcon icon={faTruck}/>
                                    </div>
                                    <div>Envío gratis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    } else {
        return (
            <a href="#">
                <div className="d-flex formatCard" style={{height: "100% !important"}}>
                    <div className="temp-card">
                        <div className="product-card-img">
                            <div className="anullProperties">
                                <Imagen spinner={true}
                                        alt=" "
                                        src={kiero_logo}
                                        className="img"
                                />
                            </div>
                        </div>
                        <div className="product-card-description-box">

                            <div className="product-card-description">
                                <div className="kiero-envios-card">
                                    <div className="kiero-envios-card-icon">
                                        <FontAwesomeIcon icon={faTruck}/>
                                    </div>
                                    <div>Cargando producto</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default ProductCardList