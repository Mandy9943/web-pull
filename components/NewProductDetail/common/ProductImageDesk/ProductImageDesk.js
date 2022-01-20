import React, { useState } from "react";
import DivindingLine from "../DivindingLine/DivindingLine";
import Image from "next/image";
import "./ProductImageDesk.module.css";
const ProductImageDesk = ({ images, altImg }) => {
  const [actualImage, setActualImage] = useState(images[0].url);
  const handleClickImage = (imageURL) => {
    setActualImage(imageURL);
  };
  return (
    <div className="ProductImageDesk">
      <div className="deskImages">
        {images.map((image) => {
          return (
            <div
              className={`content ${
                actualImage === image.url && "selectedContent"
              }`}
              key={image.url}
              onClick={() => handleClickImage(image.url)}
            >
              <div className="anullProperties">
                <Image
                  layout="fill"
                  data-src={image.url}
                  src={image.url}
                  alt={"Producto de kiero " + altImg.substr(0, 80)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <DivindingLine width="2px" height="auto" margin="0 4vw" color="#D1D1D1" />
      <div className="actualImageWrapper">
        <div className="actualImage">
          <div className="anullProperties">
            <Image
              layout="fill"
              data-src={actualImage}
              src={actualImage}
              alt={"Producto de kiero " + altImg.substr(0, 80)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageDesk;
