import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import BannerImg1 from "../../assets/img/banners/banner-grande-v2-10col-03.jpg";
import BannerImg2 from "../../assets/img/banners/banner-grande-v2-10col-04.jpg";
import BannerImg3 from "../../assets/img/banners/banner-grande-v2-10col-05.jpg";
import "./PrincipalSlider.css";

const slides = [
    { url: BannerImg1 },
    { url: BannerImg2 },
    { url: BannerImg3,
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
        return (
            <div className="principal-slider">
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
