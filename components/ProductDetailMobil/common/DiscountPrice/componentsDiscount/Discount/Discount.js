import React from "react";
import Image from "next/image";
import Logo1 from "../../../../../../assets/img/venom.jpg";
import "./Discount.module.css"

const Discount = () => {
    return(
        <div className="containerDiscount">
            <div className="wrapperDiscount wrapperPercent">
                <p className="percentDiscount">10%</p>
                <p className="textDiscount">DESCUENTO</p>
            </div>
            <div className=" wrapperDiscount wrapperImage">
                <div className="wrapperAnullProperties">
                <div className="anullProperties">
                    <Image
                        loading="lazy"
                        alt="Red background"
                        src={Logo1}
                        layout="fill" 
                    />
                 </div>
                </div>
               <p className="cantDiscount">x2</p>
            </div>
        </div>
    );
}


export default Discount;