import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./SecurityAccount.css";



export default class SecurityAccount extends Component {

    goBack = () => {
        window.history.back();
    };
    
    render() {
        return (
            <div className="security-account">
                <Header />
                <div className="security-account-top">
                    <div className="security-account-bar">
                        <div className="back-btn">
                        <a onClick={this.goBack} style={{cursor:'pointer'}}>
                                    <p className="back-btn-icon">
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </p>
                                    <p>Volver</p>
                                </a>
                        </div>
                        <h1>Anular cuenta</h1>
                    </div>
                </div>
                <div className="security-account-content">
                    <div className="security-account-box">
                        <p>En caso de robo, perdida o extravío de tu clave, puedes <span className="accent">recuperarla</span> a través de tu e-mail con el cual te registraste.</p>
                        <p>Te sugerimos mantener tus datos actualizados.</p>
                        <Link href="/cuenta">
                            <a className="button-a">
                                <p>Volver</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
