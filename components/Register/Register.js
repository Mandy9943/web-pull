import React, { Component } from 'react';
import Link from "next/link";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { ButtonGoogle, ButtonFacebook } from "../Common/ButtonSocialLogin/ButtonSocialLogin";
import Button from "../Common/Button/Button";
import './Register.css';
import Success from "../../components/Login/Success";
import Error from "../../components/Login/Error";
import { signUp, redirectIfAuthenticated } from "../../lib/auth";
import { getCookie, removeCookie } from "../../lib/session";



export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    mostrarContrasena() {
        let tipo = document.getElementById("password");
        if (tipo.type == "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
    }
    // handleValidate(){
    //     // if (this.state.error.length > 0){
    //     //     console.log("hay error")
    //     // } else {
    //     //     console.log("no hay error")
    //     // }
    //     console.log(this.state)
    // }


    render() {
        const { success } = this.props;
        const { error } = this.state;
        return (
            <div className="container register-component">
                <Header />
                <div className="register">
                    <h1>Crear cuenta</h1>
                    <div className="social-buttons">
                        <ButtonGoogle />
                        <ButtonFacebook />
                    </div>
                    <p className="register-text">O crea tu cuenta de Kiero account</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input className="input" name="name" placeholder="Nombres" />
                        <input className="input" name="last_name" placeholder="Apellidos" />
                        <input className="input" type="email" name="email" placeholder="Correo electrónico" />
                        <div className="password">
                            <input id="password" className="input" type="password" name="password" placeholder="Contraseña" />
                            <a onClick={this.mostrarContrasena}>Mostrar</a> 
                        </div>
                    <p className="terms">Creando una cuenta, usted ha aceptado los 
                     <Link href="/terminos"><a> Terminos y condiciones</a>
                     </Link> y las <Link href="/privacidad"><a>Políticas de privacidad de Kiero.</a></Link></p>
                        <Button text={"Crear cuenta"} onClick={this.handleValidate}/>
                        {success && <Success message={success} />}
                        {error && <Error message={error} />}
                        <br></br>
                        <p className="register-text">¿Ya tienes una cuenta?
                     <Link href="/login"><a> Inicia sesión</a></Link></p>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }

    handleSubmit = async e => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const last_name = e.target.elements.last_name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const password_confirmation = e.target.elements.password.value;

        const error = await signUp(name, last_name, email, password, password_confirmation);
        console.log("console_1",error)
        if (error) {
            console.log(this)
            this.setState({
                error
            });
            return false;
        }
    };

}
