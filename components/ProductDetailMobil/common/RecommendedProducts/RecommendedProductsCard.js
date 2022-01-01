import React, { useEffect, useRef } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./RecommendedProductsCard.module.css";
import button from "../../../../assets/img/productDetail/component-4@2x.svg";
import Image from "next/image";
import {
  sendProductListViewed,
  handleFormatUrl,
} from "../../../../lib/functions";

function RecommendedProductsCard({ product, index }) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sendProductListViewed(product, index, "Recommended Products List");
          observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [index, product, ref]);

  const redirectUrl = (productId, productName) => {
    window.location.href = handleFormatUrl(productId, productName);
  };

  return (
    <div id="RecommendedProductsCard" ref={ref}>
      {product ? (
        <>
          <div
            className="product"
            onClick={() => redirectUrl(product.product_id, product.title)}
          >
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
