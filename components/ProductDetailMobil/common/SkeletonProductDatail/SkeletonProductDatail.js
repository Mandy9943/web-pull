import React from "react";
import Skeleton from "react-loading-skeleton";
import "./SkeletonProductDatail.css";

class SkeletonProductDatail {
  render() {
    return (
      <div className="skeleton-movil-product-datail">
        <div className="content-curve-shape mb"></div>
        <div className="content">
          <div className="wrapper">
            <div className="product-img">
              <Skeleton className="product-datail-skeleton" />
            </div>
          </div>
        </div>
        <div className="skeleton-envios mb">
          <Skeleton className="product-datail-skeleton" />
        </div>
        <div className="skeleton-pagos mb">
          <Skeleton className="product-datail-skeleton" />
        </div>
        <div className="skeleton-detalles mb">
          <Skeleton className="product-datail-skeleton" />
        </div>
        <div className="skeleton-detalles mb">
          <Skeleton className="product-datail-skeleton" />
        </div>
        <div className="skeleton-others mb">
          <Skeleton className="product-datail-skeleton" />
        </div>
      </div>
    );
  }
}

export default SkeletonProductDatail;
