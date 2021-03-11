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
                select({name, value: e.target.value});
            }}>
                {
                    dimensions.values.map((item,index)=>(
                        <option key={index}>
                            {item.value}
                        </option>
                    ))
                }
                <option>Seleccionar</option>
            </select>
    )
}