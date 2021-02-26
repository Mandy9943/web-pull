import React from 'react';
import { useRouter } from 'next/router'
import './ProductVariants.css'

function ProductVariants({ dimensions }) {

    const router = useRouter();
    const keys = Object.keys(dimensions);

    const onChange = e => {
        router.push(`/detalle/${e.target.value}`);
    };

    const Variant1 = () => {
        return (
            <div className={"variants"}>
                {
                    keys.map((item, index) =>
                        <div key={index} className="selector">
                            <label>{item}</label>
                            <select onChange={onChange}>
                                <option>{'Seleccionar'}</option>    
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

    // const Variant2 = () => {
    //     return (
    //         <div className={"variants"}>
    //             <>
    //                 <div className={'variant-title'}>
    //                     <label>Variante: tipo 1</label>
    //                 </div>
    //                 <div className="selector">
    //                     <button className="active">Variante1</button>
    //                 </div>
    //                 <div className="selector">
    //                     <button>Variante2</button>
    //                 </div>
    //             </>
    //         </div>
    //     )
    // }

    return (
        <>
            <Variant1 />
        </>
    );
}

export default ProductVariants;