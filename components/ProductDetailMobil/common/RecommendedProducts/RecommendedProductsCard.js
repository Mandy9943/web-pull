import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import "./RecommendedProductsCard.module.css"
import button from "../../../../assets/img/productDetail/component-4@2x.svg"

function RecommendedProductsCard({ product }) {
    return (
        <div id="RecommendedProductsCard">
            {product ? (
                <React.Fragment>
                    <div className="product">
                        <img src={product.image} alt={product.title.substr(0, 80)} />
                        <h4>{product.title.substr(0, 80)}</h4>
                        <h3 className="price">
                            {product.price
                                .toString()
                                .split(".")[0]
                                .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
                        </h3>
                        <div className="stock">
                            <h3>Cantidad en stock: 6</h3>
                            <a href="#" onClick={() => {
                                alert("Ir al producto!");
                            }}>
                                <img src={button} alt="Ir" />
                            </a>
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Skeleton variant="rectangular" width={300} height={324} className="skeletonProductDetail" />
                </React.Fragment>
            )}
        </div>
    );
}

export default RecommendedProductsCard;