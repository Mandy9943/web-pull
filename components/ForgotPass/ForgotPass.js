import React, {Component} from 'react';
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import "./ForgotPass.css";
import {recover} from "../../lib/auth";
import Success from "../Login/Success";
import Error from "../Login/Error";

export default class ForgotPass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    render() {
        console.log(this.props)
        const { success } = this.props;
        const { error } = this.state;
        return (
            <div className="container forgot-component">
                <Header/>
                <div className="forgot-pass">
                    <h1>Recuperar contraseña</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="forgot-pass-content">
                            <p className="forgot-pass-text">Ingrese el correo electrónico asociado a su cuenta</p>
                            <input className="input" type="email" name="email" placeholder="Correo lectrónico"/>
                        </div>
                        <button type="submit" className="main-button">
                            <p>Recuperar</p>
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
        const email = e.target.elements.email.value;
        const error = await recover(email);
        if (error) {
            this.setState({
                error
            });
            return false;
        }else{
            console.log("OK")
        }
    };
}
