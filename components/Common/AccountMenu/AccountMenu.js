import React, { Component } from "react";
import "./AccountMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faMoneyBill,
  faShoppingBag,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

class AccountMenu extends Component {
  render() {
    return (
      <ul className="menu-account">
        <li>
          <FontAwesomeIcon icon={faUser} /> mi cuenta
        </li>
        <li>
          <FontAwesomeIcon icon={faClipboardList} /> resumen
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyBill} /> facturacion
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingBag} /> compras
        </li>
        <li>
          <FontAwesomeIcon icon={faCog} /> mis datos
        </li>
      </ul>
    );
  }
}

export default AccountMenu;
