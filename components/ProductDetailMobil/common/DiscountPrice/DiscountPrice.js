import react,{useState, useEffect} from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import OfferSection from "../OfferSection/OfferSection";
import Discount from "./componentsDiscount/Discount/Discount";
import DivindingLine from "../DivindingLine/DivindingLine";
import PriceSaving from "./componentsDiscount/PriceSaving/PriceSaving";

import "./DiscountPrice.module.css";
const DiscountPrice = ({priceProduct, discountPercentage, stock, discountPercentageBd, quantityProduct} ) => {
  const [finalPrice, setFinalPrice] = useState(0)
  useEffect(() => {
    let dataPrice = priceProduct - (priceProduct * ((parseInt(discountPercentageBd ) + discountPercentage) / 100))
        dataPrice = ~~dataPrice
    let totalPrice = (priceProduct - dataPrice) * quantityProduct
    setFinalPrice(totalPrice
                    .toString()
                    .split(".")[0]
                    .replace(/(.)(?=(\d{3})+$)/g, "$1.")
                  )
            console.log(dataPrice)
            },[finalPrice])
  return (
    <div className="containerDiscountPrice">
      <OfferSection />
      <Discount />
      <DivindingLine />
      <PriceSaving 
        priceProduct={priceProduct}
        discountPercentage={discountPercentage}
        finalPrice={finalPrice}
        // savingPrice={dataPrice}
      />
      <div className="widthButton">
        <CheckoutButton text="Comprar" rounded secundary notShowCar />
      </div>
    </div>
  );
};

export default DiscountPrice;
