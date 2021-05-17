import React, { useState } from 'react'

const Theme2 = ({ store_design, data, section_edit }) => {

    const [clasification, setClasification] = useState(1);

    return (
        <>
            <div className="edit-header" style={{

                backgroundColor: store_design.st_design_footer_background_color || "black",
            }}>
                <h3>{data.store.name || "Mi tienda"}</h3>
                <p>Menú Theme2</p>
            </div>

            <div
                className="edit-image"
                style={{

                    backgroundImage: data.design.header.background_img != 'undefined' ? "url(" + data.design.header.background_img + ")" : "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <p style={{
                    fontFamily: store_design.st_design_header_title_font_family || "Verdana",
                    color: store_design.st_design_header_title_color || "black",
                }}>
                    {data.store.name || "Texto"}

                </p>
                <h5 style={{
                    color: store_design.st_design_header_subtitle_color || "black",
                    fontFamily: store_design.st_design_st_design_header_subtitle_font_family || "Verdana",
                }}>
                    {store_design.st_design_header_subtitle_text || "Texto"}
                </h5>
            </div>

            <div className="edit-banner" style={{
                backgroundColor: store_design.st_design_main_background_color || "white",

            }}>
                <div className="block-container">
                    <div className="block">
                        <div className="block-image">
                            <p>Producto 1</p>
                        </div>
                        <div className="block-footer"></div>
                    </div>

                    <div className="block">
                        <div className="block-image">
                            <p>Producto 2</p>
                        </div>
                        <div className="block-footer"></div>
                    </div>

                    <div className="block">
                        <div className="block-image">
                            <p>Producto 3</p>
                        </div>
                        <div className="block-footer"></div>
                    </div>
                </div>

                <ul className="clasification">
                    <li className={clasification === 1 ? "active" : ""}>
                        <a onClick={(e) => setClasification(1)}>Destacados</a>
                    </li>
                    <li className={clasification === 2 ? "active" : ""}>
                        <a onClick={(e) => setClasification(2)}>En venta</a>
                    </li>
                    <li className={clasification === 3 ? "active" : ""}>
                        <a onClick={(e) => setClasification(3)}>Lo más vendido</a>
                    </li>
                </ul>

                <div className="block-container">
                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>
                </div>

                <div className="central-banner">
                    <p>banner</p>
                </div>

                <div className="block-container">
                    <div className="block-sub-banner">
                        <div className="block-sub-banner-image image-round"></div>
                    </div>

                    <div className="block-sub-banner">
                        <div className="block-sub-banner-image image-round"></div>
                    </div>
                </div>

                <ul className="clasification">
                    <li>
                        <p>Lo mas reciente</p>
                    </li>
                </ul>

                <div className="block-container rows2">
                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>
                </div>

                <div className="block-container">
                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>

                    <div className="block-clasificaction">
                        <div className="block-clasificaction-image image-round image-shadow"></div>
                    </div>
                </div>

                <div className="more">
                    <a>Ver más</a>
                </div>

                {(section_edit !== 'theme')
                    ? <ul className="more-options">
                        <li>
                            <a>Hasta 12 cuotas sin interés</a>
                        </li>
                        <li>
                            <a>Efectivo</a>
                        </li>
                        <li>
                            <a>Más medios de pago</a>
                        </li>
                    </ul>
                    : <ul className="other-details">
                        <li>
                            <h3>Pago y entrega</h3>
                            <p>Envios gratis para algunos productos.</p>
                        </li>
                        <li>
                            <h3>Reembolso de vuelta</h3>
                            <p>Garantia gratuita de devolucion del 100%.</p>
                        </li>
                        <li>
                            <h3>Soporte de calidad</h3>
                            <p>Soporte en linea 24/7.</p>
                        </li>
                    </ul>
                }

                <ul className="clasification">
                    <li>
                        <p>Síguenos en Instagram</p>
                    </li>
                </ul>

                <div
                    className="edit-image"
                    style={{
                        backgroundImage:
                            "url(https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png)",
                    }}
                ></div>
            </div>

            <div className="edit-header footer"
                style={{
                    backgroundColor: store_design.st_design_footer_background_color || "black"

                }}
            >
                <p> {data.store.name || "Texto"}</p>
                <p>Información</p>
            </div>

        </>
    )

}

export default Theme2