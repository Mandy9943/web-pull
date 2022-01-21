import React from "react";
import Image from "next/image";
import "./Discount.module.css";

import { PropTypes } from "prop-types";

const Discount = ({
  quantityProduct,
  discountPercentage,
  images,
  altImg,
  movil = true,
}) => {
  const desktopRender = (
    <>
      <div className=" wrapperDiscount">
        <p className="cantDiscount">x{quantityProduct}</p>
        <div className="wrapperImage">
          <div className="wrapperAnullProperties">
            <div className="anullProperties">
              <Image alt={altImg} src={images[0].url} layout="fill" />
            </div>
          </div>
        </div>
        <div className="wrapperPercent">
          <p className="percentDiscount">{discountPercentage}%</p>
          <p className="textDiscount">DESCUENTO</p>
        </div>
      </div>
    </>
  );
  const movilRender = (
    <>
      <div className="wrapperDiscount wrapperPercent">
        <p className="percentDiscount">{discountPercentage}%</p>
        <p className="textDiscount">DESCUENTO</p>
      </div>
      <div className=" wrapperDiscount wrapperImage">
        <div className="wrapperAnullProperties">
          <div className="anullProperties">
            <Image alt={altImg} src={images[0].url} layout="fill" />
          </div>
        </div>
        <p className="cantDiscount">x{quantityProduct}</p>
      </div>
    </>
  );
  return (
    <div className="containerDiscount">
      {movil === true ? movilRender : desktopRender}
    </div>
  );
};

Discount.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  quantityProduct: PropTypes.number.isRequired,
  altImg: PropTypes.string.isRequired,
  discountPercentage: PropTypes.number.isRequired,
};
export default Discount;
