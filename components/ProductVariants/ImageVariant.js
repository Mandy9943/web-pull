import React from "react";


export default function SelectVariant({dimensions, select, name}) {
    const imageVariantStyle = {
        width: "55px",
        height: "auto",
        border:"1px solid lightgray",
        margin: "5px",
        padding: "2px",
        borderRadius: "5px"
    };

    return (
        <section style={{
            display: "flex",

        }}>
            <div style={{flex:"1"}}>
                {dimensions.values.map((item,index)=> {
                    let style = Object.assign({},imageVariantStyle);
                    if (item.select) {
                        style.border = "1px solid orange";
                    }

                    return (
                        <img
                            key={index}
                            data-value={item.value}
                            data-available={item.available}
                            onClick={e => {
                                e.preventDefault();
                                select({
                                    name,
                                    value: e.target.getAttribute('data-value'),
                                    available: e.target.getAttribute('data-available') === 'true' ? true : false,
                                });
                            }}
                            src={item.image}
                            alt={item.value}
                            className={(item.available ? "" : "unavailable ")}
                            style={style}/>
                    )
                })}
            </div>

        </section>
    )
}