import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./CancelAccount.css";

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

export default class CancelAccount extends Component {
    state = {
        checkedProduct: false,
        checkedAdvisory: false,
        checkePrice: false,
    }
    handleCheckboxChange = event => {
        this.setState({
            checkedProduct: event.target.checkedProduct,
            checkedAdvisory: event.target.checkedAdvisory,
            checkePrice: event.target.checkePrice,
        })
    }
    render() {
        return (
            <div className="cancel-account">
                <Header />
                    <div className="cancel-account-top">
                        <div className="cancel-account-bar">
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
                            <h1>Anular cuenta</h1>
                        </div>
                    </div>
                    <div className="cancel-account-content">
                        <div className="cancel-account-box">
                            <h3>¿Cual es el motivo?</h3>
                            <p>Usaremos esta información para mejorar nuestro servício.</p>
                            <div className="cancel-account-checkbox">
                                <label>
                                    <Checkbox
                                        checkedProduct={this.state.checkedProduct}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>No tienen el producto que busco</p>
                                </label>
                                <label>
                                    <Checkbox
                                        checkedAdvisory={this.state.checkedAdvisory}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>No recibí la asesoría que esperaba</p>
                                </label>
                                <label>
                                    <Checkbox
                                        checkePrice={this.state.checkePrice}
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <p>Productos muy caros</p>
                                </label>
                            </div>
                            <div className="cancel-account-textarea">
                                <p>¿Alguna recomendación?</p>
                                <textarea />
                            </div>
                            <div className="cancel-account-box-btn">
                                <Button text={"Confirmar"} />
                            </div>
                            {/*NEED FIX THIS SHIT */}
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
