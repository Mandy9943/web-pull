import React from 'react';
import "./Benefits.module.css"
import benefit_01 from "../../../../assets/img/productDetail/01-benefit@2x.svg"

const Benefits = () => {
    return (
        <div id="Benefits">
            <div className="beneficio">
                <h1>
                    Beneficios de comprar con <div className="red">KIERO</div>
                </h1>
                <img src={benefit_01} alt="Envío gratuito y rápido a cualquier parte de Colombia"/>
                <h3>Envío gratuito y rápido a cualquier parte de Colombia</h3>
            </div>
        </div>
    );
}

export default Benefits;