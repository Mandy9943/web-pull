import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./QuestionProblem.css";

const Checkbox = props => (
    <input type="checkbox" {...props} />
)

export default class QuestionProblem extends Component {

    render() {
        return (
            <div className="question-problem">
                <Header />
                <div className="question-problem-top">
                    <div className="question-problem-bar">
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
                        <h2>No puedo efectuar una pregunta</h2>
                    </div>
                </div>
                <div className="question-problem-content">
                    <div className="question-problem-box">
                        <p>¿Cómo solucionar un inconveniente para hacer preguntas en una publicación?</p>
                        <p>Es posible que el vendedor te haya bloqueado. Puedes comunicarte con nuestro equipo de atención al cliente a través de nuestro correo</p>

                        <Link href="/mailto:soporte@kiero.co?Subject=Problema%20el%20preguntas%20">
                            <a target="_blank" className="accent">
                                <p>soporte@kiero.co</p>
                            </a>
                        </Link>
                    </div>
                    <Link href="/ayuda">
                        <a className="button-b">
                            <div className="question-problem-box classic">
                                <p>Infórmate acerca de cómo adquirir un producto</p>
                            </div>
                        </a>
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }
}
