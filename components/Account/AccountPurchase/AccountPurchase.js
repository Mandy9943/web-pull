import React, { Component } from "react";
import "./AccountPurchase.css";
import {getData} from "../../../services/userApi";

class AccountPurchase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      error: null
    }
  }

  componentDidMount() {
    const endp = "/getOrders"
    getData(endp, this.props.user.jwt)
        .then((response) => {
          this.setState({ orders: response.data });
        });
  }


  render() {
    return (
      <div className="billing-page">
        <div className="account-purchase-title">
          <h2>Compras</h2>
          <span>todos</span>
        </div>
        <div className="account-purchase-item">
          <div className="account-purchase-subtitle">
            <h4>Entregado el 10 de septiembre</h4>
            <p>28 dias desde que se entrego</p>
          </div>
          <div className="account-purchase-wrap-content">
            <div className="account-purchase-wrap-content-picture ">
              <div className="account-purchase-wrap-img">
                <img src="https://picsum.photos/200" />
              </div>
              <div className="account-purchase-wrap-info">
                <h4>portatil premium 2020</h4>
                <p>$ 100.000</p>
                <p>1 unidad</p>
              </div>
            </div>
            <div className="account-purchase-wrap-info-seller">
              <p>Detalles de compra</p>
              <h4>Vendedor</h4>
              <p>Julio</p>
              <p>ver mensajes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPurchase;
