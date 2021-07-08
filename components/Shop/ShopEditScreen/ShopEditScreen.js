import React from "react";
import "./ShopEditScreen.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function({ cb, children, section }) {
    return (
        <div className="edit-screen">
            {/* Inicio Breadcrumb*/}
            {/* Non scalable breadcrum*/}
            <div className="breadcrumb">
                <a onClick={(e) => cb("start", e)}>KieroShop</a>
                <FontAwesomeIcon icon={faAngleRight} />
                {['menu','domain','theme'].some(el=>el===section.key) &&
                <>
                    <a onClick={(e) => cb("edit", e)}>Editar la tienda</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                    {/* <a onClick={(e) => cb("edit", e)}>Configuraci&oacute;n</a>
                    <FontAwesomeIcon icon={faAngleRight} /> */}
                </>
                }
                <span>{section.text}</span>
            </div>
            {/* Fin breadcrumb*/}

            {children}

        </div>
    )
}