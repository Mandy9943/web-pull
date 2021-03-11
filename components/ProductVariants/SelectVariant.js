import React from "react";


export default function SelectVariant({dimensions, select, name}) {
    return (
            <select onChange={e=>{
                e.preventDefault();
                if (e.target.selectedIndex === 0) {
                    // Do not call select if none is selected
                    // Tal vez deseleccionar aqui
                    return
                }
                select({
                    name,
                    value: e.target.value,
                    available: e.target[e.target.selectedIndex]
                        .getAttribute('data-available') === 'true' ? true : false,
                });
            }}>
                <option>Seleccionar</option>
                {
                    dimensions.values.map((item,index)=>(
                        <option key={index} data-available={item.available}>
                            {item.value}
                        </option>
                    ))
                }
            </select>
    )
}