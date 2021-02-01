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
import belleza from "../../assets/img/iconosHome/BELLEZA.svg";
import hobbies from "../../assets/img/iconosHome/chess-queen-solid.svg";
import Electrodomésticos from "../../assets/img/iconosHome/blender-solid.svg";
import herramientas from "../../assets/img/iconosHome/tools-solid.svg";
import libros from "../../assets/img/iconosHome/book-solid.svg";
import musica from "../../assets/img/iconosHome/music-solid.svg";
import relojes from "../../assets/img/iconosHome/clock-regular.svg";
import ropa from "../../assets/img/iconosHome/tshirt-solid.svg";
import Slider from 'react-animated-slider';



export default class CategoriesImgMenu extends Component {
    render() {
        return (
            <div className="categories-img-menu">
                <h3 className="home-section-title">Categorías populares</h3>
                <Slider autoplay={0}>
                    <div className="content-categories-img-menu no-movil">
                    <Link href="/categoria/Vehículos">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCar} />
                                </p>
                                <p>Accesorios para vehículos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Animales y Mascotas">
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDog} />
                                </p>
                                <p>Animales y mascotas</p>
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
                    <Link href="/categoria/Belleza">
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <img alt="belleza" src={belleza} /></p>
                                <p>Belleza y cuidado Personal</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Cámaras y accesorios">
                        <a className="categories-img">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCameraRetro} />
                                </p>
                                <p>Cámaras y accesorios</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Celulares y Teléfonos">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </p>
                                <p>Celulares y teléfonos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Coleccionables">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <img src={hobbies} />
                                </p>
                                <p>Coleccionables y hobbies</p>
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
                    <Link href="/categoria/Consolas y Videojuegos">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faGamepad} />
                                </p>
                                <p>Consolas y videojuegos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Deporte">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFutbol} />
                                </p>
                                <p>Deportes y fitness</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Electrodomésticos">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <img src={Electrodomésticos} />
                                </p>
                                <p>Electrodomésticos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Electrónica, Audio y Video">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faHeadphones} />
                                </p>
                                <p>Electrónica, audio y video</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Herramientas">
                        <a className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <img src={herramientas} />
                                </p>
                                <p>Herramientas y construcción</p>
                            </div>
                        </a>
                    </Link>
                    <Link href="/categoria/Hogar">
                        <a className="categories-img">
                        <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faChair} />
                                </p>
                                <p>Hogar y muebles</p>
                            </div>
                        </a>
                    </Link>
                </div>
                    <div className="content-categories-img-menu diferent-numbers no-movil">
                        <Link href="/categoria/Industria%20y%20cientifico">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </p>
                                    <p>Industria y científico </p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/categoria/Instrumentos musicales">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDrum} />
                                    </p>
                                    <p>Instrumentos musicales</p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/categoria/Juguetes">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDice} />
                                    </p>
                                    <p>Juegos y juguetes</p>
                                </div>
                            </a>
                        </Link>
                        {/* <Link href="categoria/Libros, revistas, comics">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img src={libros} />
                                    </p>
                                    <p>Libros, revistas y comics</p>
                                </div>
                            </a>
                        </Link> */}
                        {/* <Link href="/categoria/Música">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img src={musica} />
                                    </p>
                                    <p>Música</p>
                                </div>
                            </a>
                        </Link> */}
                        <Link href="/categoria/Relojes Y Joyería">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img src={relojes} />
                                    </p>
                                    <p>Relojes y joyas</p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/categoria/Ropa">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img src={ropa} />
                                    </p>
                                    <p>Ropa, zapatos y accesorios</p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/categoria/Salud">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faFemale} />
                                    </p>
                                    <p>Salud y equipamiento médico</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </Slider>
                    <div className="content-categories-img-menu no-web">
                        <Link href="/categoria/Vehículos">
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faCar} />
                                    </p>
                                    <p>Accesorios para vehículos</p>
                                </div>
                            </a>
                        </Link>
                        <Link href="/categoria/Animales y Mascotas">
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDog} />
                                    </p>
                                    <p>Animales y mascotas</p>
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
                        <Link href="/categoria/Belleza">
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt="belleza" src={belleza} /></p>
                                    <p>Belleza y cuidado personal</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                
                <Link href="lista_categorias"><a className="main-button"><p>Ver más</p></a></Link>
            </div>
        )
    }
}
