import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./HowCanHelp.css";


export default class HowCanHelp extends Component {

    render() {
        return (
            <div className="how-can-help">
                <Header />
                <div className="how-can-help-top">
                    <div className="how-can-help-bar">
                        <div className="back-btn">
                            <Link href="/ayuda">
                                <a>
                                    <p className="back-btn-icon">
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </p>
                                    <p>Volver</p>
                                </a>
                            </Link>
                        </div>
                        <h1>¿Como podemos ayudarte?</h1>
                    </div>
                </div>
                <div className="how-can-help-content">
                    <Link href="/ayuda">
                        <a className="button-b">
                            <div className="question-problem-box classic">
                                <p>No he recibido el producto</p>
                            </div>
                        </a>
                    </Link>
                    {/*NEED FIX THIS SHIT */}
                    <Link href="/ayuda">
                        <a className="button-b">
                            <div className="question-problem-box classic">
                                <p>Tengo problemas con el producto recibido</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/ayuda">
                        <a className="button-b">
                            <div className="question-problem-box classic">
                                <p>Deseo cambiar o devolver el producto</p>
                            </div>
                        </a>
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }
}
