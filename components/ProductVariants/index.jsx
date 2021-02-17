import React from 'react';
import './ProductVariants.css'

function ProductVariants(props) {


    const Variant1 = () => {
        return (
            <div className={"variants"}>
                <div className="selector">
                    <label>Talla</label>
                    <select>
                        <option>{'Seleccionar talla'}</option>
                    </select>
                </div>
                <div className="selector">
                    <label>Color</label>
                    <select>
                        <option>{'Seleccionar color'}</option>
                    </select>
                </div>
            </div>
        )
    }

    const Variant2 = () => {
        return (
            <div className={"variants"}>
                <>
                    <div className={'variant-title'}>
                        <label>Variante: tipo 1</label>
                    </div>
                    <div className="selector">
                        <button className="active">Variante1</button>
                    </div>
                    <div className="selector">
                        <button>Variante2</button>
                    </div>
                </>
            </div>
        )
    }

    return (
        <>
            <Variant1 />
            <Variant2 />
        </>
    );
}

export default ProductVariants;