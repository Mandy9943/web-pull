import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import BannerImg1 from "../../assets/img/banners/banner-grande-v2-10col-03.jpg";
import BannerImg2 from "../../assets/img/banners/banner-grande-v2-10col-04.jpg";
import BannerImg3 from "../../assets/img/banners/banner-grande-v2-10col-05.jpg";
import BannerMobil1 from "../../assets/img/bannerCelular/banner-bebes.jpg";
import BannerMobil2 from "../../assets/img/bannerCelular/banner-electronica.jpg";
import BannerMobil3 from "../../assets/img/bannerCelular/dispositivos-belleza.png";
import "./PrincipalSlider.css";
import ProductCard from "../ProductCard";

let slides = [
    { url: BannerImg1 },
    {url: BannerImg3},
    { url: BannerImg2,
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
    { url: BannerMobil3,
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
