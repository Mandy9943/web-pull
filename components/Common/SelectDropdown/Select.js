import React, { useState } from "react";
import './Select.sass';


const defaultText = 'Seleccionar';


export default function Select(props) {
    const {onSelect, items, showDefault} = props;
    const [selected, setSelected] = useState(showDefault === true ? defaultText : (items.values[0].text || items.values[0].value))

    function handleSelect(e) {
        e.preventDefault();
        const index = Number(e.target.getAttribute('data-index'));

        if (index === -1) {
            setSelected(defaultText)
            return;
        }
        setSelected(items.values[index].text || items.values[index].value)
        onSelect(items.values[index].value, items.values[index].available)
    }

    return (
        <div className="dropdown">
            <span>{selected}</span>
            <div className="dropdown-content">
                <ul className="menu">
                    {showDefault===true &&
                        <li
                            data-index={-1}
                            onClick={handleSelect}
                        >Seleccionar
                        </li>
                    }
                    {items.values.map((item,index)=> {
                        return (
                            <li
                                key={index}
                                data-index={index}
                                className={item.available ? "" : "unavailable"}
                                onClick={handleSelect}
                            >
                                {item.text || item.value}
                            </li>
                        )
                    })
                    }
                </ul>

            </div>
        </div>
    )
}