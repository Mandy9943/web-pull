import React, { Component } from 'react'
import './MenuMessageAccount.css'

class MenuMessageAccount extends Component {
  render() {
    return (
      <div className="chat-menu">
        <div className="chat-menu-help">
          <p>necesito ayuda</p>
        </div>
        <div className="chat-menu-wrap-subtitle">
          <h3>Vendedor</h3>
        </div>
        <div className="chat-menu-item">
          <div className="chat-menu-wrap-img">
            <img src="https://picsum.photos/100" />
          </div>
          <div className="chat-menu-wrap-info">
            <h3>Julio</h3>
            <p>123456789</p>
            <p>detalle de compras</p>
          </div>
        </div>
        <div className="chat-menu-wrap-subtitle">
          <h3>Entregado</h3>
        </div>
        <div className="chat-menu-item">
          <div className="chat-menu-wrap-img">
            <img src="https://picsum.photos/100" />
          </div>
          <div className="chat-menu-wrap-info">
            <h3>potatil</h3>
            <p>$ 100.000</p>
            <p>1 unidad</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MenuMessageAccount
