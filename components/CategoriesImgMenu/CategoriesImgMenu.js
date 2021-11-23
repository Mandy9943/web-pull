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
import Electrodomesticos from "../../assets/img/iconosHome/blender-solid.svg";
import herramientas from "../../assets/img/iconosHome/tools-solid.svg";
import libros from "../../assets/img/iconosHome/book-solid.svg";
import musica from "../../assets/img/iconosHome/music-solid.svg";
import relojes from "../../assets/img/iconosHome/clock-regular.svg";
import ropa from "../../assets/img/iconosHome/tshirt-solid.svg";
import Slider from 'react-animated-slider';
import Imagen from "../Common/Imagen/Imagen";


export default class CategoriesImgMenu extends Component {
    render() {
        return (
            <div className="categories-img-menu">
                <h3 className="home-section-title">Categorías populares</h3>
                <Slider autoplay={0}>
                    <div className="content-categories-img-menu no-movil">
                        <Link href={"/categoria/[...category]"} as="/categoria/vehículos">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faCar} />
                                    </p>
                                    <p>Accesorios para vehículos</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/animales-y-mascotas" >
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDog} />
                                    </p>
                                    <p>Animales y mascotas</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/bebés" >
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faBabyCarriage} />
                                    </p>
                                    <p>Bebés</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/belleza" >
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img loading="lazy" alt="belleza" src={belleza} /></p>
                                    <p>Belleza y cuidado Personal</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/camaras-fotografia-y-video" >
                            <a className="categories-img">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faCameraRetro} />
                                    </p>
                                    <p>Cámaras y accesorios</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/celulares-y-teléfonos" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </p>
                                    <p>Celulares y teléfonos</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/coleccionables" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Hobbies' loading="lazy" src={hobbies} />
                                    </p>
                                    <p>Coleccionables y hobbies</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/computación">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDesktop} />
                                    </p>
                                    <p>Computación</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/consolas-y-videojuegos" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faGamepad} />
                                    </p>
                                    <p>Consolas y videojuegos</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/deporte" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faFutbol} />
                                    </p>
                                    <p>Deportes y fitness</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/electrodomésticos" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Electrodomésticos' loading="lazy" src={Electrodomésticos} />
                                    </p>
                                    <p>Electrodomésticos</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/electrónica-audio-y-video" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faHeadphones} />
                                    </p>
                                    <p>Electrónica, audio y video</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/herramientas">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Herramientas' loading="lazy" src={herramientas} />
                                    </p>
                                    <p>Herramientas y construcción</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/hogar" >
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
                        <Link href={"/categoria/[...category]"} as="/categoria/industria-y-científico" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </p>
                                    <p>Industria y científico </p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/instrumentos-musicales" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDrum} />
                                    </p>
                                    <p>Instrumentos musicales</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/juguetes">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <FontAwesomeIcon icon={faDice} />
                                    </p>
                                    <p>Juegos y juguetes</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/libros" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Libros' loading="lazy" src={libros} />
                                    </p>
                                    <p>Libros, revistas y comics</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/música" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Musica' loading="lazy" src={musica} />
                                    </p>
                                    <p>Música</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/relojes-y-joyería" >
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Relojes' loading="lazy" src={relojes} />
                                    </p>
                                    <p>Relojes y joyas</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/ropa">
                            <a className="categories-img no-movil">
                                <div className="item">
                                    <p className="categories-menu-icon">
                                        <img alt='Ropa' loading="lazy" src={ropa} />
                                    </p>
                                    <p>Ropa, zapatos y accesorios</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={"/categoria/[...category]"} as="/categoria/salud" >
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
                    <Link href={"/categoria/[...category]"} as="/categoria/vehículos" >
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCar} />
                                </p>
                                <p>Accesorios para vehículos</p>
                            </div>
                        </a>
                    </Link>
                    <Link href={"/categoria/[...category]"} as="/categoria/animales-y-mascotas">
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDog} />
                                </p>
                                <p>Animales y mascotas</p>
                            </div>
                        </a>
                    </Link>
                    <Link href={"/categoria/[...category]"} as="/categoria/bebés" >
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBabyCarriage} />
                                </p>
                                <p>Bebés</p>
                            </div>
                        </a>
                    </Link>
                    <Link href={"/categoria/[...category]"} as="/categoria/belleza">
                        <a className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <img loading="lazy" alt="belleza" src={belleza} /></p>
                                <p>Belleza y cuidado personal</p>
                            </div>
                        </a>
                    </Link>
                </div>
                <Link href={"/lista_categorias"}><a className="main-button"><p>Ver más</p></a></Link>
            </div>
        )
    }
}
