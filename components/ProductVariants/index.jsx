import React from 'react';
import { useRouter } from 'next/router'
import './ProductVariants.css'
import SelectVariant from "./SelectVariant";

function ProductVariants({ id, dimensions }) {

    const router = useRouter();

    const onChange = e => {
        router.push(`/detalle/${e.target.value}`);
    };

    return (
        <>
            <SelectVariant
                id={id}
                dimensions={dimensions}
                onChange={onChange}
            />
        </>
    );
}

export default ProductVariants;