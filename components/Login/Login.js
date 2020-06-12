import React, { Component } from 'react';
import Link from "next/link";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { ButtonGoogle, ButtonFacebook } from "../Common/ButtonSocialLogin/ButtonSocialLogin";
import Button from "../Common/Button/Button";
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="login">
                    <h1>Iniciar sesión</h1>
                    <p className="login-text">Eres nuevo en este sitio? <br/> <Link href="/registro"><a>Regístrate</a></Link></p>
                    <div className="social-buttons">
                        <ButtonGoogle />
                        <ButtonFacebook />
                    </div>
                    <p className="login-text">O inicia sesión con tu Kiero account</p>
                    <form className="form">
                        <input className="input" type="email" name="mail" placeholder="Correo lectrónico" />
                        <input className="input" type="password" name="password" placeholder="Contraseña" />
                    </form>
                    <p className="forgot-pass-link"><Link href="/recuperar"><a>¿Olvidaste tu contraseña?</a></Link></p>
                    <Button text={"Ingresar"}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
