import CheckoutButton from "../CheckoutButton/CheckoutButton";
import OfferSection from "../OfferSection/OfferSection";
import Discount from "./componentsDiscount/Discount/Discount";
import DivindingLine from "../DivindingLine/DivindingLine";
import PriceSaving from "./componentsDiscount/PriceSaving/PriceSaving";

import "./DiscountPrice.module.css";
import { useAppDispatch } from "../../../../lib/hooks/redux";
import { openForm, setCount } from "../../../../redux/feature/pay/paySlice";
import { sendCheckoutStepViewed } from "../../../../lib/functions";
const DiscountPrice = ({
  priceProduct,
  discountPercentage,
  stock,
  quantityProduct,
  images,
  altImg,
}) => {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    // sendCheckoutStepViewed(1);
    dispatch(openForm(true));
    dispatch(setCount(quantityProduct));
  };
  return (
    <div className="containerDiscountPrice">
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
    </div>
  );
};

export default DiscountPrice;
