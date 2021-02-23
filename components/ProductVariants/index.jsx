import React from 'react';
import './ProductVariants.css'

function ProductVariants({ dimensions }) {

    const keys = Object.keys(dimensions);

    const Variant1 = () => {
        return (
            <div className={"variants"}>
                {
                    keys.map((item, index) =>
                        <div key={index} className="selector">
                            <label>{item}</label>
                            <select>
                                {
                                    dimensions[item].variants.map((variant) =>
                                        <option value={variant.product_global_id}>
                                            {variant.value}
                                        </option>)
                                }
                            </select>
                        </div>
                    )}
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
        </>
    );
}

export default ProductVariants;