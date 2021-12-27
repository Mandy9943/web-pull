import React from "react";
import Image from "next/image";
import "./Discount.module.css";

const Discount = ({quantityProduct, discountPercentage, images, altImg}) => {
  return (
    <div className="containerDiscount">
      <div className="wrapperDiscount wrapperPercent">
        <p className="percentDiscount">{discountPercentage}%</p>
        <p className="textDiscount">DESCUENTO</p>
      </div>
      <div className=" wrapperDiscount wrapperImage">
        <div className="wrapperAnullProperties">
          <div className="anullProperties">
            <Image
              alt={altImg}
              src={images[0].url}
              layout="fill"
            />
          </div>
        </div>
        <p className="cantDiscount">x{quantityProduct}</p>
      </div>
    </div>
  );
};

export default Discount;
