import React, { Component } from 'react';
import Link from "next/link";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { ButtonGoogle, ButtonFacebook } from "../Common/ButtonSocialLogin/ButtonSocialLogin";
import Button from "../Common/Button/Button";
import './Register.css';

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="register">
                    <h1>Crear cuenta</h1>
                    <div className="social-buttons">
                        <ButtonGoogle />
                        <ButtonFacebook />
                    </div>
                    <p className="register-text">O crea tu cuenta de Kiero account</p>
                    <form className="form">
                        <input className="input" name="name" placeholder="Nombres" />
                        <input className="input" name="last-name" placeholder="Apellidos" />
                        <input className="input" type="email" name="mail" placeholder="Correo lectrónico" />
                        <input className="input" type="password" name="password" placeholder="Contraseña" />
                    </form>
                    <p className="terms">Creando una cuenta, usted ha aceptado los <Link href="#"><a>Terminos y condiciones</a></Link> y las <Link href="#"><a>Políticas de privacidad de Kiero.</a></Link></p>
                    <Button text={"Crea tu cuenta en Kiero"}/>
                </div>
                <Footer />
            </div>
        )
    }
}
