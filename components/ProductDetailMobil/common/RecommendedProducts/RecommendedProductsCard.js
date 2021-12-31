import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./RecommendedProductsCard.module.css";
import Image from "next/image";

function RecommendedProductsCard({ product }) {
  return (
    <div id="RecommendedProductsCard">
      {product ? (
        <>
          <div className="product">
            <div className="anullProperties">
              <Image
                loading="lazy"
                src={product.image}
                alt={product.title.substr(0, 80)}
                layout="fill"
                className="productImg"
              />
            </div>
            <div className="priceSection">
              <h3 className="price">
                {product.price
                  .toString()
                  .split(".")[0]
                  .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
              </h3>
              <span className="discount">- 10%</span>
            </div>
            <h4>{product.title.substr(0, 80)}</h4>
          </div>
        </>
      ) : (
        <>
          <Skeleton
            variant="rectangular"
            width={300}
            height={324}
            className="skeletonProductDetail"
          />
        </>
      )}
    </div>
  );
}

export default RecommendedProductsCard;
