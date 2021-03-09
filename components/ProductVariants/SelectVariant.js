import React from "react";


export default function SelectVariant({id, dimensions, onChange}) {
    const keys = Object.keys(dimensions);

    const getVariant = (arr) => {
        return arr.find(d=>d.product_global_id === id);
    };

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