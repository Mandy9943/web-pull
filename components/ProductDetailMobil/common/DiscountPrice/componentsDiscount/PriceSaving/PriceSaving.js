import React from "react";
import "./PriceSaving.module.css";


const PriceSaving = () => {
    return(
        <div className="containerPriceSaving">
            <div className="wrapperPrice">
                <div className="wrapperCurrentPrice">
                    <p className="currentPrice">$ {"4.980.315"}</p>
                </div>
                <div className="wrapperOtherPrices">
                    <p className="lastPrice">Costaba $ {"5.401.315"}</p>
                    <p className="savingPrice">Ahorra $520.000</p>
                </div>
            </div>
        </div>
    );
}

export default PriceSaving;