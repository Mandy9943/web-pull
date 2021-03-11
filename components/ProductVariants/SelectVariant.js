import React from "react";

//     "display_type":"image",
//         "values":[
//         {
//             "available":false,
//             "image":"https://images-na.ssl-images-amazon.com/images/I/41d3obyVMVL.jpg",
//             "select":false,
//             "value":"White"
//         },
//         {
//             "available":false,
//             "image":"https://images-na.ssl-images-amazon.com/images/I/41TlePgOFzL.jpg",
//             "select":false,
//             "value":"Pink"
//         },
//         {
//             "available":false,
//             "image":"https://images-na.ssl-images-amazon.com/images/I/41YRaWJlJtL.jpg",
//             "select":false,
//             "value":"Black"
//         }
//     ]


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