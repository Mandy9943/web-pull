import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import Link from "next/link";
import 'react-animated-slider/build/horizontal.css';
import BannerImg1 from "../../assets/img/banners/news/2 (1).jpg";
import BannerImg2 from "../../assets/img/banners/news/2 (2).jpg";
import BannerImg3 from "../../assets/img/banners/news/2 (3).jpg";
import BannerImg4 from "../../assets/img/banners/news/2 (4).jpg";
import BannerImg5 from "../../assets/img/banners/news/2 (5).jpg";
import BannerImg6 from "../../assets/img/banners/news/2 (6).jpg";
import BannerImg7 from "../../assets/img/banners/news/2 (7).jpg";
import BannerImg8 from "../../assets/img/banners/news/2 (8).jpg";
import BannerImg9 from "../../assets/img/banners/news/2 (9).jpg";
import BannerImg10 from "../../assets/img/banners/news/2 (10).jpg";
import BannerImg11 from "../../assets/img/banners/news/2 (11).jpg";
import BannerImg12 from "../../assets/img/banners/news/2 (12).jpg";
import BannerImg13 from "../../assets/img/banners/news/2 (13).jpg";
import BannerImg14 from "../../assets/img/banners/news/2 (14).jpg";
import BannerImg15 from "../../assets/img/banners/news/2 (15).jpg";
import BannerImg16 from "../../assets/img/banners/news/2 (16).jpg";
import BannerImg17 from "../../assets/img/banners/news/2 (17).jpg";
import BannerImg18 from "../../assets/img/banners/news/2 (18).jpg";
import BannerImg19 from "../../assets/img/banners/news/2 (19).jpg";
import "./SecundarySlider.css";

let link1 = "/categoria/Hogar%20y%20Muebles";
let link2 = "/busqueda/articulos%20para%20bebes";
let link3 = "/categoria/Bebés";
let link4 = "/categoria/Belleza%20y%20Cuidado%20Personal";
let link5 = "/categoria/Cámaras%20y%20accesorios";
let link6 = "/categoria/Celulares%20y%20Teléfonos";
let link7 = "/categoria/Consolas%20y%20Videojuegos";
let link8 = "/categoria/Deportes%20y%20Fitness";
let link9 = "/categoria/Herramientas%20y%20Construcción";
let link10 = "/categoria/Hogar%20y%20Muebles";
let link11 = "/categoria/Industrias%20y%20Oficinas";
let link12 = "/categoria/Música";
let link13 = "/categoria/Juegos%20y%20Juguetes";
let link14 = "/categoria/Relojes%20y%20Joyas";
let link15 = "/categoria/Ropa,%20Zapatos%20y%20Accesorios";
let link16 = "/categoria/Accesorios%20para%20Vehiculos";
let link17 = "/categoria/Electrónica";
let link18 = "/categoria/Salud"
let link19 = "/categoria/Animales%20y%20Mascotas"


let slides = [
    { url: BannerImg1,  enlace: link1 },
    { url: BannerImg2,  enlace: link2 },
    { url: BannerImg3,  enlace: link3 },
    { url: BannerImg4,  enlace: link4 },
    { url: BannerImg5,  enlace: link5 },
    { url: BannerImg6,  enlace: link6 },
    { url: BannerImg7,  enlace: link7 },
    { url: BannerImg8,  enlace: link8 },
    { url: BannerImg9,  enlace: link9 },
    { url: BannerImg10,  enlace: link10 },
    { url: BannerImg11,  enlace: link11 },
    { url: BannerImg12,  enlace: link12 },
    { url: BannerImg13,  enlace: link13 },
    { url: BannerImg14,  enlace: link14 },
    { url: BannerImg15,  enlace: link15 },
    { url: BannerImg16,  enlace: link16 },
    { url: BannerImg17,  enlace: link17 },
    { url: BannerImg18,  enlace: link18 },
    {
        url: BannerImg19,
        enlace: link19,
        slider: 'slider',
        previousButton: 'previousButton',
        nextButton: 'nextButton',
        buttonDisabled: 'disabled',
        track: 'track',
        slide: 'slide',
        hidden: 'hidden',
        previous: 'previous',
        current: 'current',
        next: 'next',
        animateIn: 'animateIn',
        animateOut: 'animateOut'
    },
];

export default class SecundarySlider extends Component {

    render() {
        return (
            <div className="secundary-slider no-movil">
                <Slider autoplay={4500}>
                    {slides.map((slide, index) =>
                        <div key={index}>
                            <Link href={slide.enlace}>
                                <a>
                                    <img src={slide.url} />
                                </a>
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}