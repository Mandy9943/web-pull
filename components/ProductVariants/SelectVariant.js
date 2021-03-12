import React, { useState } from "react";
import './SelectVariant.sass';


const defaultText = 'Seleccionar';

export default function SelectVariant({dimensions, select, name}) {
    const [selected, setSelected] = useState(defaultText);

    function handleSelect(e) {
        e.preventDefault();
        const index = Number(e.target.getAttribute('data-index'));

        if (index === -1) {
            setSelected(defaultText)
            return;
        }
        setSelected(dimensions.values[index].value)

        select({
            name,
            value: e.target.innerText,
            available: dimensions.values[index].available,
        });
    }

    return (
        <div className="dropdown">
            <span>{selected}</span>
            <div className="dropdown-content">
                <ul className="menu">
                    <li
                        data-index={-1}
                        onClick={handleSelect}
                    >Seleccionar
                    </li>
                    {dimensions.values.map((item,index)=> {
                        if (item.select) {

                        }
                        return (
                            <li
                                key={index}
                                data-index={index}
                                className={item.available ? "" : "unavailable"}
                                onClick={handleSelect}
                            >
                                {item.value}
                            </li>
                        )
                    })
                    }
                </ul>

            </div>
        </div>
            // <select onChange={e=>{
            //     e.preventDefault();
            //     if (e.target.selectedIndex === 0) {
            //         // Do not call select if none is selected
            //         // Tal vez deseleccionar aqui
            //         return
            //     }
            //     select({
            //         name,
            //         value: e.target.value,
            //         available: e.target[e.target.selectedIndex]
            //             .getAttribute('data-available') === 'true' ? true : false,
            //     });
            // }}>
            //     <option>Seleccionar</option>
            //     {
            //         dimensions.values.map((item,index)=>(
            //             <option key={index} data-available={item.available}>
            //                 {item.value}
            //             </option>
            //         ))
            //     }
            // </select>
    )
}