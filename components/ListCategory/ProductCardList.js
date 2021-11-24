import React from 'react'
import { handleFormatUrl } from "../../lib/functions";
import { getImgProduct } from "../../lib/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import "./ListCategory.css";
import Image from "next/image"

const ProductCardList = ({ product, i, ...props }) => {
    return (
        <div>
            <a
                href={handleFormatUrl(product.product_id, product.title)}

                onClick={() => props.handleDataInfoSearch(product, i)}
            >
                <div className="temp-list">
                    <div className="product-list-img">
                        <div className="anullProperties">
                            <Image
                                layout="fill"
                                alt={product.title}
                                src={getImgProduct(product)}
                                className="img"
                            />
                        </div>
                    </div>
                    <div className="product-list-description-box">
                        <h2>
                            ${" "}
                            {product.price
                                ? String(product.price)
                                    .split(".")[0]
                                    .replace(/(.)(?=(\d{3})+$)/g, "$1.")
                                : "$ ... "}{" "}
                        </h2>
                        <h4>{product.brand}</h4>
                        <p>{product.title}</p>
                        {/* {parseInt(product.is_prime) ? ( */}
                        <div className="kiero-envios-card">
                            <div className="kiero-envios-card-icon">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <div>Envío gratis</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProductCardList