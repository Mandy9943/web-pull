import React, { Component } from 'react';
import Slider from 'react-animated-slider';
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
import "./SeconSlider.css";


let slides = [
    { url: BannerImg1 },
    { url: BannerImg2 },
    { url: BannerImg3 },
    { url: BannerImg4 },
    { url: BannerImg5 },
    { url: BannerImg6 },
    { url: BannerImg7 },
    { url: BannerImg8 },
    { url: BannerImg9 },
    { url: BannerImg10 },
    { url: BannerImg11 },
    { url: BannerImg12 },
    { url: BannerImg13 },
    { url: BannerImg14 },
    { url: BannerImg15 },
    { url: BannerImg16 },
    { url: BannerImg17 },
    { url: BannerImg18 },
    {
        url: BannerImg19,
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

export default class SeconSlider extends Component {

    render() {
        return (
            <div className="secon-slider no-movil">
                <Slider autoplay={3000}>
                    {slides.map((slide, index) =>
                        <div key={index}>
                            <img src={slide.url} />
                        </div>)}
                </Slider>
            </div>
        )
    }
}
