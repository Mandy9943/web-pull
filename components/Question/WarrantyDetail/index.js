import React from 'react';
import "./WarrantyDetail.css";
function WarrantyDetail() {
    return (
        <div className="warranty-questions">
            <h3>Garantía</h3> 
            <br />
            <h4><strong>Programa de Compra Segura</strong></h4>
            <p>El propósito del Programa Compras Seguras es brindar cobertura
                a todos los compradores que hayan realizado y pagado sus
                compras a través de KieroMarketplace.</p>

            <p>Dentro de los 20 (veinte) días desde la fecha de compra,
            si no se recibió el artículo, mantendremos protegido tu dinero.</p> 

            <p>Dentro de los 25 (veinticinco) días siguientes a la fecha de
            entrega del producto, cuando lo recibido sea diferente,
            incompleto, defectuoso, el comprador se arrepienta de haberlo
            comprado.</p>   
            <br />
            <h4><strong>Garantía del vendedor</strong></h4>
            <p>30 días de garantía hábiles por defectos de fábrica.</p>
        </div>
    );
}

export default WarrantyDetail;