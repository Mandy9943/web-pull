import react from "react";
import OfferSection from "../OfferSection/OfferSection";
import Discount from "./componentsDiscount/Discount/Discount";
import DivindingLine from "./componentsDiscount/DivindingLine/DivindingLine";
import PriceSaving from "./componentsDiscount/PriceSaving/PriceSaving";
import BuyButton from "./componentsDiscount/BuyButton/BuyButton";
import "./DiscountPrice.css"
const DiscountPrice = () => {
    return(
        <div className="containerDiscountPrice">
            <OfferSection />
            <Discount/>
            <DivindingLine/>
            <PriceSaving/>
            <div className="widthButton">
                <BuyButton
                    text="Comprar"
                    rounded
                />
            </div>
            <div className="wrapperButtons">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default DiscountPrice;