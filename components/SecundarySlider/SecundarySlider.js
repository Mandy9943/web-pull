import React, { Component } from "react";
import Slider from "react-animated-slider";
import Link from "next/link";
import "react-animated-slider/build/horizontal.css";
import BannerImg1 from "../../assets/img/banners/news/1.webp";
import BannerImg2 from "../../assets/img/banners/news/2.webp";
import BannerImg3 from "../../assets/img/banners/news/3.webp";
import BannerImg4 from "../../assets/img/banners/news/4.webp";
import BannerImg5 from "../../assets/img/banners/news/5.webp";
import BannerImg6 from "../../assets/img/banners/news/6.webp";
import BannerImg7 from "../../assets/img/banners/news/7.webp";
import BannerImg8 from "../../assets/img/banners/news/8.webp";
import BannerImg9 from "../../assets/img/banners/news/9.webp";
import BannerImg10 from "../../assets/img/banners/news/10.webp";
import BannerImg11 from "../../assets/img/banners/news/11.webp";
import BannerImg12 from "../../assets/img/banners/news/12.webp";
import BannerImg13 from "../../assets/img/banners/news/13.webp";
import BannerImg14 from "../../assets/img/banners/news/14.webp";
import BannerImg15 from "../../assets/img/banners/news/15.webp";
import BannerImg16 from "../../assets/img/banners/news/16.webp";
import BannerImg17 from "../../assets/img/banners/news/17.webp";
import "./SecundarySlider.css";
import Spinner from "./../Common/Spinner";
import Image from "next/image";

let link1 = "/categoria/Hogar";
let link2 = "/categoria/Electrodomésticos";
let link3 = "/categoria/Bebés";
let link4 = "/categoria/Belleza";
let link5 = "/categoria/Cámaras fotografía y video";
let link6 = "/categoria/Electrónica Audio y Video";
let link7 = "/categoria/Consolas y videojuegos";
let link8 = "/categoria/Deportes y fitness";
let link9 = "/categoria/Herramientas";
let link10 = "/categoria/Instrumentos musicales";
let link11 = "/categoria/Industria y científico";
let link12 = "/categoria/Computadoras y Accesorios";
let link13 = "/categoria/Animales y Mascotas";
let link14 = "/categoria/Relojes Y Joyería";
let link15 = "/categoria/Ropa calzados y accesorios";
let link16 = "/categoria/Vehículos";
let link17 = "/categoria/Salud";

export default class SecundarySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
    };
  }

  componentDidMount() {
    this.setState({
      slides: [
        { url: BannerImg1, enlace: link1 },
        { url: BannerImg2, enlace: link2 },
        { url: BannerImg3, enlace: link3 },
        { url: BannerImg4, enlace: link4 },
        { url: BannerImg5, enlace: link5 },
        { url: BannerImg6, enlace: link6 },
        { url: BannerImg7, enlace: link7 },
        { url: BannerImg8, enlace: link8 },
        { url: BannerImg9, enlace: link9 },
        { url: BannerImg10, enlace: link10 },
        { url: BannerImg11, enlace: link11 },
        { url: BannerImg12, enlace: link12 },
        { url: BannerImg13, enlace: link13 },
        { url: BannerImg14, enlace: link14 },
        { url: BannerImg15, enlace: link15 },
        { url: BannerImg16, enlace: link16 },
        {
          url: BannerImg17,
          enlace: link17,
          slider: "slider",
          previousButton: "previousButton",
          nextButton: "nextButton",
          buttonDisabled: "disabled",
          track: "track",
          slide: "slide",
          hidden: "hidden",
          previous: "previous",
          current: "current",
          next: "next",
          animateIn: "animateIn",
          animateOut: "animateOut",
        },
      ],
    });
  }
  render() {
    return (
      <div className="secundary-slider no-movil">
        <Slider autoplay={3000}>
          {this.state.slides.length > 1 ? (
            this.state.slides.map((slide, index) => (
              <div key={index}>
                <a href={slide.enlace.replace(/ /g, "-").toLocaleLowerCase()}>
                  <div className="anullProperties">
                    <Image layout="fill" src={slide.url} alt={slide.enlace} />
                  </div>
                </a>
              </div>
            ))
          ) : (
            <div
              style={{
                position: "absolute !important",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <Spinner />
            </div>
          )}
        </Slider>
      </div>
    );
  }
}
