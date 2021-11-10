import React, {Component} from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import BannerImg1 from "../../assets/img/banners/banner-grande-v2-10col-03.webp";
import BannerImg2 from "../../assets/img/banners/banner-grande-v2-10col-04.webp";
import BannerImg3 from "../../assets/img/banners/banner-grande-v2-10col-05.webp";
import BannerImg4 from "../../assets/img/banners/banner-grande-v2-10col-06.webp";
import BannerImg5 from "../../assets/img/banners/banner-grande-v2-10col-07.webp";
import BannerMobil1 from "../../assets/img/bannerCelular/banners-apk.webp";
import BannerMobil2 from "../../assets/img/bannerCelular/banners-apk5.webp";
import BannerMobil3 from "../../assets/img/bannerCelular/banners-apk2.webp";
import BannerMobil4 from "../../assets/img/bannerCelular/banners-apk3.webp";
import BannerMobil5 from "../../assets/img/bannerCelular/banners-apk4.webp";
import "./PrincipalSlider.css";
import ProductCard from "../ProductCard";
import Spinner from "./../Common/Spinner";
import Image from "next/image";
import Imagen from "../Common/Imagen/Imagen";

export default class PrincipalSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
            slidesMobil: [],
        };
    }

    componentDidMount() {
        this.setState({
            slides: [
                {url: BannerImg1, href: "/categoria/Computadoras-y-accesorios"},
                {url: BannerImg2, href: "/categoria/Belleza"},
                {url: BannerImg3, href: "/categoria/Instrumentos-musicales"},
                {url: BannerImg4, href: "/categoria/Salud"},
                {
                    url: BannerImg5,
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
                    href: "/categoria/Deportes-y-fitness",
                },
            ],

            slidesMobil: [
                {url: BannerMobil1, href: "/categoria/Computadoras-y-accesorios"},
                {url: BannerMobil2, href: "/categoria/Belleza"},
                {url: BannerMobil3, href: "/categoria/Bebés"},
                {url: BannerMobil4, href: "/categoria/Electrónica-audio-y-video"},
                {
                    url: BannerMobil5,
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
                    href: "/categoria/Deportes-y-fitness",
                },
            ],
        });
    }

    render() {
        /*
            console.log(this.props)
            if(this.props.img && this.props.img.length > 0){
                slides = [];

                this.props.img.map((img, i) => {
                    let url = "";
                    if(img.url){
                        url = "http://158.69.183.107/images/"+img.url;
                    }
                    if(url!=""){
                        slides.push({ url: url });
                    }
                });
                slides[slides.length-1] = {
                    url: slides[slides.length-1].url,
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
                }
            }
            */
        return (
            <div className="principal-slider">
                <section className="desktop">
                    <Slider autoplay={4000}>
                        {this.state.slides.length > 1 ? (
                            this.state.slides.map((slide, index) => (
                                <a href={slide.href} key={index}>
                                    <div className="anullProperties">
                                        <Imagen
                                            layout="fill"
                                            alt={slide.url.replace(/-/g, " ")}
                                            src={slide.url}
                                            loading="lazy"
                                        />
                                    </div>
                                </a>
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
                                <Spinner/>
                            </div>
                        )}
                    </Slider>
                </section>
                <section className="mobil">
                    <Slider autoplay={4000}>
                        {this.state.slidesMobil.length > 1 ? (
                            this.state.slidesMobil.map((slide, index) => (
                                <a href={slide.href} key={index}>
                                    <div className="anullProperties">
                                        <Imagen
                                            alt={slide.url.replace(/-/g, " ")}
                                            src={slide.url}
                                        />
                                    </div>
                                </a>
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
                                <Spinner/>
                            </div>
                        )}
                    </Slider>
                </section>
            </div>
        );
    }
}
