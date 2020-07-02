import React, { Component } from 'react';
import Link from "next/link";
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
import "./CategoriesImgMenu.css";
import Button from "../Common/Button/Button";


export default class CategoriesImgMenu extends Component {
    render() {
        return (
            <div className="categories-img-menu">
                <h3 className="home-section-title">Categorías populares</h3>
                <div className="content-categories-img-menu">
                    <Link href="/categoria/Animales y Mascotas">
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDog} />
                                </p>
                                <p>Animales y Mascotas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Bebés">
                        <a className="categories-img">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBabyCarriage} />
                                </p>
                                <p>Bebés</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Cámaras y Accesorios">
                        <a className="categories-img">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCameraRetro} />
                                </p>
                                <p>Cámaras y Accesorios</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Hogar y Muebles">
                        <a className="categories-img">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faChair} />
                                </p>
                                <p>Hogar y Muebles</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Salud">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFemale} />
                                </p>
                                <p>Salud</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Industrias y Ofocinas">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </p>
                                <p>Industrias y Ofocinas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Celulares y Teléfonos">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </p>
                                <p>Celulares y Teléfonos</p>
                            </div>
                        </a>
                    </Link>
                    {/*----------------------------- DIVISION ---------------------------*/}
                    <Link href="/categoria/Electrónica">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </p>
                                <p>Electrónica</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Deportes y Fitness">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFutbol} />
                                </p>
                                <p>Deportes y Fitness</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Consolas y Videojuegos">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faGamepad} />
                                </p>
                                <p>Consolas y Videojuegos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Computación">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDesktop} />
                                </p>
                                <p>Computación</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Juegos y Juguetes">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDice} />
                                </p>
                                <p>Juegos y Juguetes</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Instrumentos Musicales">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDrum} />
                                </p>
                                <p>Instrumentos Musicales</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Accesorios para Vehiculos">
                        <a className="categories-img no-movil">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCar} />
                                </p>
                                <p>Accesorios para Vehiculos</p>
                            </div>
                        </a>
                    </Link>
                </div>
                <Link href="category_list"><a className="main-button"><p>Ver mas</p></a></Link>
            </div>
        )
    }
}
