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
    { url: BannerImg1 },
    {url: BannerImg2},
    {url: BannerImg3},
    {url: BannerImg4},
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
        animateOut: 'animateOut'
    },
];

let slidesMobil = [
    { url: BannerMobil1 },
    { url: BannerMobil2 },
    { url: BannerMobil3 },
    { url: BannerMobil4 },
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
        animateOut: 'animateOut'
    },
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
                    <Slider autoplay={3000}>
                        {slides.map((slide, index) =>
                        <div key={index}>
                            <img src={slide.url} />
                        </div>)}
                    </Slider>
                </section>
                <section className="mobil">
                    <Slider autoplay={3000}>
                        {slidesMobil.map((slide, index) =>
                        <div key={index}>
                            <img src={slide.url} />
                        </div>)}
                    </Slider>
                </section>
            </div>
        )
    }
}
