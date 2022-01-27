import React, { useState } from "react";
import DivindingLine from "../DivindingLine/DivindingLine";
import Image from "next/image";
import "./ProductImageDesk.module.css";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
const ActualImg = styled(Paper)(() => ({
  borderRadius: "10px",
}));
const ProductImgDesk = styled(Paper)(() => ({
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  padding: "50px 1.5vw 50px 4.5vw",
  marginBottom: "12px",
}));

const ProductImageDesk = ({ images, altImg }) => {
  const [actualImage, setActualImage] = useState(images[0].url);
  const handleClickImage = (imageURL) => {
    setActualImage(imageURL);
  };
  return (
    <div className="ProductImageDesk">
      <ProductImgDesk elevation={6}>
        <div className="deskImages">
          {images.slice(0, 6).map((image) => {
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
        <DivindingLine
          width="2px"
          height="auto"
          margin="0 0 0 4vw"
          color="#D1D1D1"
        />
        <div className="actualImageWrapper">
          <ActualImg elevation={6}>
            <div className="anullProperties">
              <Image
                layout="fill"
                data-src={actualImage}
                src={actualImage}
                alt={"Producto de kiero " + altImg.substr(0, 80)}
              />
            </div>
          </ActualImg>
        </div>
      </ProductImgDesk>
    </div>
  );
};

export default ProductImageDesk;
