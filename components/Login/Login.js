import React, { Component } from 'react';
import Link from "next/link";
import Router from "next/router";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Success from "../../components/Login/Success";
import Error from "../../components/Login/Error";
import { ButtonGoogle, ButtonFacebook } from "../Common/ButtonSocialLogin/ButtonSocialLogin";
import './Login.css';
import { signIn } from "../../lib/auth";


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    render() {
        const { success } = this.props;
        const { error } = this.state;
        return (
            <div className="container login-component">
                <Header/>
                <div className="login">
                    <h1>Iniciar sesión</h1>
                    <p className="login-text">Eres nuevo en este sitio? <Link href="/registro"><a className="link">Regístrate</a></Link></p>
                    <div className="social-buttons">
                        <ButtonGoogle />
                        <ButtonFacebook />
                    </div>
                    <p className="login-text">O inicia sesión con tu Kiero account</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input className="input" type="text" name="mail" placeholder="Correo lectrónico" />
                        <input className="input" type="password" name="password" placeholder="Contraseña" />

                    <p className="forgot-pass-link"><Link href="/recuperar"><a>¿Olvidaste tu contraseña?</a></Link></p>
                    <button type="submit" className="main-button">
                        <p>Ingresar</p>
                    </button>
                    </form>
                    {success && <Success message={success} />}
                    {error && <Error message={error} />}
                </div>
                <Footer/>
            </div>
        )
    }

    handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.elements.mail.value;
        const password = e.target.elements.password.value;

        const error = await signIn(email, password);

        if (error) {
            this.setState({
                error
            });
            return false;
        }
    };

}
