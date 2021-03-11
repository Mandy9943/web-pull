import React from "react";


// {
//     "available":false,
//     "image":"https://images-na.ssl-images-amazon.com/images/I/41d3obyVMVL.jpg",
//     "select":false,
//     "value":"White"
// }
export default function SelectVariant({dimensions, select, name}) {
    return (
        <section style={{
            display: "flex",

        }}>
            <div style={{flex:"1"}}>
                {dimensions.values.map((item,index)=>(
                    <img
                        key={index}
                        data-value={item.value}
                        data-available={item.available}
                        onClick={e=>{
                            e.preventDefault();
                            select({
                                name,
                                value: e.target.getAttribute('data-value'),
                                available: e.target.getAttribute('data-available'),
                            });
                        }}
                        src={item.image}
                        alt={item.value}
                        className={(item.available ? "" : "unavailable ") + (item.select ? "selected ": "")}
                        style={{
                            width: "55px",
                            height: "auto",
                            border:"1px solid lightgray",
                            margin: "5px",
                            padding: "2px",
                            borderRadius: "5px"
                    }}/>
                ))}
            </div>

        </section>
    )
}