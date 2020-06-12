import React, { Component } from "react";
import "./AccountStoreMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faTag,
  faShoppingBag,
  faClipboardList,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
class AccountStoreMenu extends Component {
  render() {
    return (
      <ul className="store-management-menu">
        <li className="menu-account-store-title">
          <FontAwesomeIcon icon={faUser} /> mi cuenta
        </li>
        <li className="menu-account-store-item">
          <FontAwesomeIcon icon={faClipboardList} /> resumen
        </li>
        <li className="menu-account-store-item">
          <details>
            <summary>
              <div>
                <FontAwesomeIcon icon={faTag} /> ventas
              </div>
              <span className="arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </summary>
            <ul>
              <li className="menu-account-store-item-dropdown">
                publicaciones
              </li>
              <li className="menu-account-store-item-dropdown">ventas</li>
              <li className="menu-account-store-item-dropdown">preguntas</li>
            </ul>
          </details>
        </li>
        <li className="menu-account-store-item">
          <FontAwesomeIcon icon={faShoppingBag} /> compras
        </li>
        <li className="menu-account-store-item">
          <FontAwesomeIcon icon={faCog} /> mis datos
        </li>
      </ul>
    );
  }
}

export default AccountStoreMenu;
