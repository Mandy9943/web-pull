import CheckoutButton from "../CheckoutButton/CheckoutButton";
import OfferSection from "../OfferSection/OfferSection";
import Discount from "./componentsDiscount/Discount/Discount";
import DivindingLine from "../DivindingLine/DivindingLine";
import PriceSaving from "./componentsDiscount/PriceSaving/PriceSaving";

import "./DiscountPrice.module.css";
import { useAppDispatch } from "../../../../lib/hooks/redux";
import { openForm, setCount } from "../../../../redux/feature/pay/paySlice";
import { Box } from "@mui/material";
// import { sendCheckoutStepViewed } from "../../../../lib/functions";
const DiscountPrice = ({
  priceProduct,
  discountPercentage,
  stock,
  quantityProduct,
  images,
  altImg,
  movil = true,
}) => {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    // sendCheckoutStepViewed(1);
    dispatch(openForm(true));
    dispatch(setCount(quantityProduct));
  };
  const movilRender = (
    <>
      <OfferSection />
      <Discount
        quantityProduct={quantityProduct}
        discountPercentage={discountPercentage}
        images={images}
        altImg={altImg}
      />
      <DivindingLine />
      <PriceSaving
        priceProduct={priceProduct}
        discountPercentage={discountPercentage}
        quantityProduct={quantityProduct}
      />
      <div className="widthButton">
        {stock <= 0 ? (
          <CheckoutButton text="SIN STOCK" rounded notShowCar disabled />
        ) : (
          <CheckoutButton
            text="Comprar"
            rounded
            secundary
            notShowCar
            onClick={handleOpenForm}
          />
        )}
      </div>
    </>
  );
  const desktopRender = (
    <>
      <OfferSection />
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "column", sm: "column" },
          justifyContent: "center",

          alignItems: "center",
          width: "100%",
        }}
      >
        <Discount
          quantityProduct={quantityProduct}
          discountPercentage={discountPercentage}
          images={images}
          altImg={altImg}
          movil={false}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { md: "60%", lg: "auto" },
          }}
        >
          <PriceSaving
            priceProduct={priceProduct}
            discountPercentage={discountPercentage}
            quantityProduct={quantityProduct}
          />
          <Box
            sx={{
              width: { xs: "auto" },
            }}
            className="widthButton"
          >
            {stock <= 0 ? (
              <CheckoutButton text="SIN STOCK" rounded notShowCar disabled />
            ) : (
              <CheckoutButton
                text="Comprar"
                rounded
                secundary
                notShowCar
                onClick={handleOpenForm}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
  return (
    <div className="containerDiscountPrice">
      {movil ? movilRender : desktopRender}
    </div>
  );
};

export default DiscountPrice;
