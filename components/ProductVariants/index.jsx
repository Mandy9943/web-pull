import React from 'react';
import { useRouter } from 'next/router'
import './ProductVariants.css'

import SelectVariant from "./SelectVariant";
import ImageVariant from "./ImageVariant";


function ProductVariants({ id, dimensions, select }) {
    const keys = Object.keys(dimensions);
    const router = useRouter();

    function getVariant(item) {
        // Kinda ugly this switch
        switch (dimensions[item].display_type) {
            case 'image':
                return (
                    <ImageVariant
                        dimensions={dimensions[item]}
                        select={select}
                        name={item}
                    />
                )
            case 'select':
                return (
                    <SelectVariant
                        id={dimensions.product_global_id}
                        dimensions={dimensions[item]}
                        select={select}
                        name={item}
                    />
                );
        }
    }

    return (
        <div className="variants">
            {
                keys.filter(key=>{return key !== 'product_global_id'}).map((item, index)=>(
                    <div key={index} className="selector">
                        <label>{item}</label>
                        {getVariant(item)}
                    </div>
                ))
            }
        </div>
    );
}

export default ProductVariants;