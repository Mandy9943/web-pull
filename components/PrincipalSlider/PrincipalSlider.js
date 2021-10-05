import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import BannerImg1 from "../../assets/img/banners/banner-grande-v2-10col-03.jpg";
import BannerImg2 from "../../assets/img/banners/banner-grande-v2-10col-04.jpg";
import BannerImg3 from "../../assets/img/banners/banner-grande-v2-10col-05.jpg";
import BannerImg4 from "../../assets/img/banners/banner-grande-v2-10col-06.jpg";
import BannerImg5 from "../../assets/img/banners/banner-grande-v2-10col-07.jpg";
import BannerMobil1 from "../../assets/img/bannerCelular/banners-apk.jpg";
import BannerMobil2 from "../../assets/img/bannerCelular/banners-apk5.jpg";
import BannerMobil3 from "../../assets/img/bannerCelular/banners-apk2.jpg";
import BannerMobil4 from "../../assets/img/bannerCelular/banners-apk3.jpg";
import BannerMobil5 from "../../assets/img/bannerCelular/banners-apk4.jpg";
import "./PrincipalSlider.css";
import ProductCard from "../ProductCard";

let slides = [
    { url: BannerImg1 , href:'/categoria/Computadoras%20y%20accesorios'},
    {url: BannerImg2, href:'/categoria/Belleza'},
    {url: BannerImg3, href:'/categoria/Instrumentos%20musicales'},
    {url: BannerImg4, href: '/categoria/Salud'},
    { url: BannerImg5,
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
        animateOut: 'animateOut',
        href:'/categoria/Deportes%20y%20fitness'
    },
];

let slidesMobil = [
    { url: BannerMobil1, href:'/categoria/Computadoras%20y%20accesorios'},
    { url: BannerMobil2, href:'/categoria/Belleza'},
    { url: BannerMobil3, href:'/categoria/Bebés'},
    { url: BannerMobil4, href:'/categoria/Electrónica,%20audio%20y%20video'},
    { url: BannerMobil5,
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
        animateOut: 'animateOut', 
        href:'/categoria/Deportes%20y%20fitness'},
];

export default class PrincipalSlider extends Component {

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
                        {slides.map((slide, index) =>
                        <a href={slide.href} key={index}>
                            <img src={slide.url} />
                        </a>)}
                    </Slider>
                </section>
                <section className="mobil">
                    <Slider autoplay={4000}>
                        {slidesMobil.map((slide, index) =>
                        <a href={slide.href} key={index}>
                            <img src={slide.url} />
                        </a>)}
                    </Slider>
                </section>
            </div>
        )
    }
}
