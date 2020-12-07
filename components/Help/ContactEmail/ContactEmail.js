import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./ContactEmail.css";
import Success from "../../../components/Login/Success";
import Error from "../../../components/Login/Error";
import { contact } from '../../../services/userApi';


export default class ContactEmail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            success: null,
        };
    }
    
    handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.elements.mail.value;
        const error = await contact({email});
        if (error) {
            this.setState({
                error: null,
                success: "Hemos recibido su solicitud, un asesor se pondra en contacto contigo a la brevedad posible."
            });
            return false;
        }else{
            this.setState({
                error: "Se produjo un error al crear tu solicitud, por favor intentalo nuevamente en unos minutos.",
                success: null
            });
            return false;
        }
    };

    goBack = () => {
        window.history.back();
    };

    render() {

        return (
            <div className="contact-email">
                <Header />
                <div className="contact-email-top">
                    <div className="contact-email-bar">
                        <div className="back-btn">            
                                <a onClick={this.goBack} style={{cursor:'pointer'}}>
                                    <p className="back-btn-icon">
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </p>
                                    <p>Volver</p>
                                </a>
                        </div>
                        <h1>Contáctanos por Correo</h1>
                    </div>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="contact-email-content">
                        <div className="contact-email-box">
                            <p>Indícanos tu e-mail nuestro equipo se pondrá en contacto.</p>
                            <div className="code-input"><input placeholder="Correo electrónico" name="mail"/>
                            </div>
                            <div className="contact-email-box-btn">
                                
                                    <Button type="submit" text={"Confirmar"} />
                                
                            </div>
                            {this.state.success && <Success message={this.state.success} />}
                            {this.state.error && <Error message={this.state.error} />}
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}
