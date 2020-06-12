import React, { Component } from 'react';
import Button from "../Common/Button/Button";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./ForgotPass.css";

export default class ForgotPass extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="forgot-pass">
                    <h1>Recuperar contraseña</h1>
                    <div className="forgot-pass-content">
                        <p className="forgot-pass-text">Ingrese el correo electrónico asociado a su cuenta</p>
                        <form className="form">
                            <input className="input" type="email" name="mail" placeholder="Correo lectrónico" />
                        </form>
                    </div>
                    <Button text={"Recuperar"}/>
                </div>
                <Footer />
            </div>
        )
    }
}
