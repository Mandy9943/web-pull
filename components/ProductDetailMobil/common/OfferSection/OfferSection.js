import React from 'react';
import './OfferSection.module.css';
import SwiperSlider from '../../common/SwiperSlider/SwipperSlider';
const OfferSection = () => {
    return (
        <>
            <div className="containerOffer">
                <div className="headerOffer">
                    <p className="backgroundOffer">
                        OFERTA ESPECIAL
                    </p>
                    <p className="titleOffer">OFERTA ESPECIAL</p>
                </div>
                <div className="contentOffer">
                    <p>Obtén descuentos en tu compra de <strong>2 o más productos</strong></p>
                    <SwiperSlider type={"OfferSection"}/>
                </div>
            </div>
        </>
    )
}

export default OfferSection;