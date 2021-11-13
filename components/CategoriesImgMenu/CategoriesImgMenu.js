import React, {Component} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
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
                        <a href="/categoria/vehículos" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCar}/>
                                </p>
                                <p>Accesorios para vehículos</p>
                            </div>
                        </a>
                        <a href="/categoria/animales-y-mascotas" className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDog}/>
                                </p>
                                <p>Animales y mascotas</p>
                            </div>
                        </a>
                        <a href="/categoria/bebés" className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBabyCarriage}/>
                                </p>
                                <p>Bebés</p>
                            </div>
                        </a>
                        <a href="/categoria/belleza" className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} alt="belleza" src={belleza}/></p>
                                <p>Belleza y cuidado Personal</p>
                            </div>
                        </a>
                        <a href="/categoria/camaras-fotografia-y-video" className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faCameraRetro}/>
                                </p>
                                <p>Cámaras y accesorios</p>
                            </div>
                        </a>
                        <a href="/categoria/celulares-y-teléfonos" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faMobileAlt}/>
                                </p>
                                <p>Celulares y teléfonos</p>
                            </div>
                        </a>
                        <a href="/categoria/coleccionables" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={hobbies} alt="Coleccionables y hobbies"/>
                                </p>
                                <p>Coleccionables y hobbies</p>
                            </div>
                        </a>
                        <a href="/categoria/computación" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDesktop}/>
                                </p>
                                <p>Computación</p>
                            </div>
                        </a>
                        <a href="/categoria/consolas-y-videojuegos" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faGamepad}/>
                                </p>
                                <p>Consolas y videojuegos</p>
                            </div>
                        </a>
                        <a href="/categoria/deporte" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFutbol}/>
                                </p>
                                <p>Deportes y fitness</p>
                            </div>
                        </a>
                        <a href="/categoria/electrodomésticos" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} alt="Electrodomésticos" src={Electrodomesticos}/>
                                </p>
                                <p>Electrodomésticos</p>
                            </div>
                        </a>
                        <a href="/categoria/electrónica-audio-y-video" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faHeadphones}/>
                                </p>
                                <p>Electrónica, audio y video</p>
                            </div>
                        </a>
                        <a href="/categoria/herramientas" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={herramientas} alt="Herramientas y construcción"/>
                                </p>
                                <p>Herramientas y construcción</p>
                            </div>
                        </a>
                        <a href="/categoria/hogar" className="categories-img">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faChair}/>
                                </p>
                                <p>Hogar y muebles</p>
                            </div>
                        </a>
                    </div>
                    <div className="content-categories-img-menu diferent-numbers no-movil">
                        <a href="/categoria/industria-y-científico" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faBriefcase}/>
                                </p>
                                <p>Industria y científico </p>
                            </div>
                        </a>
                        <a href="/categoria/instrumentos-musicales" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDrum}/>
                                </p>
                                <p>Instrumentos musicales</p>
                            </div>
                        </a>
                        <a href="/categoria/juguetes" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faDice}/>
                                </p>
                                <p>Juegos y juguetes</p>
                            </div>
                        </a>
                        <a href="categoria/libros" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={libros} alt="Libros, revistas y comics"/>
                                </p>
                                <p>Libros, revistas y comics</p>
                            </div>
                        </a>
                        <a href="/categoria/música" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={musica} alt="Música"/>
                                </p>
                                <p>Música</p>
                            </div>
                        </a>
                        <a href="/categoria/relojes-y-joyería" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={relojes} alt="Relojes y joyas"/>
                                </p>
                                <p>Relojes y joyas</p>
                            </div>
                        </a>
                        <a href="/categoria/ropa" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <Imagen limpio={true} src={ropa} alt="Relojes y joyas"/>
                                </p>
                                <p>Ropa, zapatos y accesorios</p>
                            </div>
                        </a>
                        <a href="/categoria/salud" className="categories-img no-movil">
                            <div className="item">
                                <p className="categories-menu-icon">
                                    <FontAwesomeIcon icon={faFemale}/>
                                </p>
                                <p>Salud y equipamiento médico</p>
                            </div>
                        </a>
                    </div>
                </Slider>
                <div className="content-categories-img-menu no-web">
                    <a href="/categoria/vehículos" className="categories-img">
                        <div className="item">
                            <p className="categories-menu-icon">
                                <FontAwesomeIcon icon={faCar}/>
                            </p>
                            <p>Accesorios para vehículos</p>
                        </div>
                    </a>
                    <a href="/categoria/animales-y-mascotas" className="categories-img">
                        <div className="item">
                            <p className="categories-menu-icon">
                                <FontAwesomeIcon icon={faDog}/>
                            </p>
                            <p>Animales y mascotas</p>
                        </div>
                    </a>
                    <a href="/categoria/bebés" className="categories-img">
                        <div className="item">
                            <p className="categories-menu-icon">
                                <FontAwesomeIcon icon={faBabyCarriage}/>
                            </p>
                            <p>Bebés</p>
                        </div>
                    </a>
                    <a href="/categoria/belleza" className="categories-img">
                        <div className="item">
                            <p className="categories-menu-icon">
                                <Imagen limpio={true} alt="Belleza y cuidado personal" src={belleza}/></p>
                            <p>Belleza y cuidado personal</p>
                        </div>
                    </a>
                </div>
                <Link href={{pathname: "/lista_categorias"}}><a className="main-button"><p>Ver más</p></a></Link>
            </div>
        )
    }
}
