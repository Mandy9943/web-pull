import React from "react";

import "./ShopCrumble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ShopCrumble = ({
  section,
  setSetcion,
  sideBarRight,
  sideBarRightAction,
}) => {
  const buildOptions = () => {
    let option = null;

    switch (section) {
      case "edit":
        if (sideBarRight === null) {
          option = (
            <>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Editar tienda</span>
            </>
          );
        } else {
          option = (
            <>
              <FontAwesomeIcon icon={faAngleRight} />
              <a
                onClick={(e) => {
                  setSetcion("edit", e);
                  sideBarRightAction(null);
                }}
              >
                Editar tienda
              </a>
              <FontAwesomeIcon icon={faAngleRight} />
              {sideBarRight === "theme" && <span>Temas</span>}
              {sideBarRight === "config" && <span>Configuración</span>}
            </>
          );
        }
        break;

      case "menu":
        option = (
          <>
            <FontAwesomeIcon icon={faAngleRight} />
            <a
              onClick={(e) => {
                setSetcion("edit", e);
                sideBarRightAction(null);
              }}
            >
              Editar tienda
            </a>
            <FontAwesomeIcon icon={faAngleRight} />
            <a
              onClick={(e) => {
                setSetcion("menu", e);
                sideBarRightAction(null);
              }}
            >
              Configuración
            </a>
            <FontAwesomeIcon icon={faAngleRight} />
            <span>Menú</span>
          </>
        );
        break;

      default:
        break;
    }
    return option;
  };

  return (
    <div className="breadcrumb">
      <a onClick={(e) => setSetcion("start", e)}>KieroShop</a>
      {buildOptions()}
    </div>
  );
};

export default ShopCrumble;
