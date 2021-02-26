import React from 'react';
import { useRouter } from 'next/router'
import './ProductVariants.css'

function ProductVariants({ id, dimensions }) {

    const router = useRouter();
    const keys = Object.keys(dimensions);

    const onChange = e => {
        router.push(`/detalle/${e.target.value}`);
    };

    const getVariant = (arr) => {
        return arr.find(d=>d.product_global_id === id);
    };

    const Variant1 = () => {
        return (
            <div className={"variants"}>
                {
                    keys.map((item, index) =>
                        <div key={index} className="selector">
                            <label>{item}</label>
                            <select onChange={onChange}>
                                {
                                    getVariant(dimensions[item].variants) ?
                                    <option value={getVariant(dimensions[item].variants).product_global_id}>
                                        {getVariant(dimensions[item].variants).value}
                                    </option>:
                                    <option value={id}>
                                        {'Seleccionar'}
                                    </option>
                                }
                                {
                                    dimensions[item].variants.filter((e, index, ar) => ar.findIndex((el) => el.value === e.value) === index).map((variant) =>
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

    return (
        <>
            <Variant1 />
        </>
    );
}

export default ProductVariants;