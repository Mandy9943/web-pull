import React, { Component } from "react";
import "./AccountSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell } from "@fortawesome/free-solid-svg-icons";
import src from "../../../assets/img/tickets-img/banner-electronica.jpg";
import Link from "next/link";


class AccountSummary extends Component {
  render() {
    let count = 1;
    let user = "jhouberto"

    return (
      <div className="account-summary-wrap">
        <h2 className="account-summary-title">Resumen</h2>
        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faComment} /> Preguntas
          </div>
          {count > 0 ? <div className="question">
            <h5>{user} Respondio tu pregunta en:</h5>
            <div className='item-question'>
              <img src={src}/>
              <section className="text">
              <p className="title">Portátil Premium 2020 HP 15 15,6" HD pantalla táctil Prem fsdfsdfsadfsdf sdfsdfdsa fadsfd
              sfsdfsdfsdfsdfsdaf asdf asdfs dfsda f</p>
              <Link href="#"><a className="responses">Ver respuesta</a></Link>
              </section>
            </div>
          </div> 
          :<div className="account-summary-item"><span className="Count">0</span> Sin respuesta</div>}
        </div>
        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faBell} /> Notificaciones
          </div>
          <div className="account-summary-item"><span className="Count">0</span> Sin Notificaciones</div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
