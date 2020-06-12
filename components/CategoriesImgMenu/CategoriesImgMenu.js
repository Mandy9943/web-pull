import React, { Component } from 'react';
import Link from "next/link";
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDog,
    faBabyCarriage,
    faCameraRetro,
    faChair,
    faFemale,
    faBriefcase,
    faMobileAlt,
    faHeadphones,
    faFutbol,
    faGamepad,
    faDesktop,
    faDice,
    faDrum,
    faCar
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> Jorge
import "./CategoriesImgMenu.css";

export default class CategoriesImgMenu extends Component {
    render() {
        return (
            <div className="categories-img-menu">
                <h2 className="home-section-title">Encuentra los mejores productos de Electrónica</h2>
                <div className="content-categories-img-menu">
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDog} />
                                </p>
>>>>>>> Jorge
                                <p>Animales y Mascotas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBabyCarriage} />
                                </p>
>>>>>>> Jorge
                                <p>Bebés</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCameraRetro} />
                                </p>
>>>>>>> Jorge
                                <p>Cámaras y Accesorios</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faChair} />
                                </p>
>>>>>>> Jorge
                                <p>Hogar y Muebles</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFemale} />
                                </p>
>>>>>>> Jorge
                                <p>Salud</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </p>
>>>>>>> Jorge
                                <p>Industrias y Ofocinas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </p>
>>>>>>> Jorge
                                <p>Celulares y Teléfonos</p>
                            </div>
                        </a>
                    </Link>
                    {/*----------------------------- DIVISION ---------------------------*/}
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </p>
>>>>>>> Jorge
                                <p>Electrónica</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFutbol} />
                                </p>
>>>>>>> Jorge
                                <p>Deportes y Fitness</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faGamepad} />
                                </p>
>>>>>>> Jorge
                                <p>Consolas y Videojuegos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDesktop} />
                                </p>
>>>>>>> Jorge
                                <p>Computación</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDice} />
                                </p>
>>>>>>> Jorge
                                <p>Juegos y Juguetes</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDrum} />
                                </p>
>>>>>>> Jorge
                                <p>Instrumentos Musicales</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="categories-img">
                            <div>
<<<<<<< HEAD
=======
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCar} />
                                </p>
>>>>>>> Jorge
                                <p>Accesorios para Vehiculos</p>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        )
    }
}
