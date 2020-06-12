import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./ModifyCategory.css";

export default class ModifyCategory extends Component {
    render() {
        return (
            <div className="modify-category">
                <Header />
                <div className="modify-category-container">
                    <div className="back-btn">
                        <Link href="/publicacion">
                            <a>
                                <p className="back-btn-icon">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </p>
                                <p>Volver</p>
                            </a>
                        </Link>
                    </div>
                    <h2>Modificar categoría</h2>
                    <div className="modify-category-content">
                        <div className="modify-category-actual">
                            <h4>Actual</h4>
                            <div className="modify-category-actual modify-category-box">
                                <p>
                                    Belleza y cuidado personal/Electrodomesticos/Plancha para el cabello
                                </p>
                            </div>
                        </div>
                        <div className="modify-category-select">
                            <h4>Selecionar una nueva categoría</h4>
                            <div className="modify-category-select-level">
                                <div className="modify-category-select modify-category-box">
                                    <p>
                                        Categoría nivel 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modify-category-btn">
                        <Button text={"Confirmar"} />
                        <div className="modify-category-cancel-btn">
                            <Link href="#">
                                <a>
                                    <p>
                                        Cancelar
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
