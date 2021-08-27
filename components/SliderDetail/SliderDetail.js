import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./SliderDetail.css";
import { getImgUrl } from "../../lib/config"

let slidesMobil = [
    {
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

export default class SliderDetail extends Component {

    render() {

        let images = this.props.img;
        images[images.length-1] = {url:images[images.length-1].url,
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
            animateOut: 'animateOut'}

        return (
            <div className="SliderDetail">
                <section className="mobil">
                    <Slider autoplay={3000}>
                        {images.map((slide, index) =>
                        <div key={index}>
                            <img src={getImgUrl(slide.url,1000)} />
                        </div>)}
                    </Slider>
                </section>
            </div>
        )
    }
}






// import React, { Component } from 'react';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
// import "./SliderDetail.css";
// import { getImgUrl } from "../../lib/config"

// let slidesMobil = [
//     {
//         slider: 'slider',
//         previousButton: 'previousButton',
//         nextButton: 'nextButton',
//         buttonDisabled: 'disabled',
//         track: 'track',
//         slide: 'slide',
//         hidden: 'hidden',
//         previous: 'previous',
//         current: 'current',
//         next: 'next',
//         animateIn: 'animateIn',
//         animateOut: 'animateOut'
//     },
// ];

// export default class SliderDetail extends Component {

//     render() {

//         let images = this.props.img;
//         images[images.length-1] = {url:images[images.length-1].url,
//             slider: 'slider',
//             previousButton: 'previousButton',
//             nextButton: 'nextButton',
//             buttonDisabled: 'disabled',
//             track: 'track',
//             slide: 'slide',
//             hidden: 'hidden',
//             previous: 'previous',
//             current: 'current',
//             next: 'next',
//             animateIn: 'animateIn',
//             animateOut: 'animateOut'}

//         const renderImages = (images) =>{
//            return images.map((slide, index) =>
//            <div key={index}>
//                 <img src={'https://api.kieroapi.net/img/v1/'+ slide.product_id + '?img=' + encodeURIComponent(slide.url)} />        
//            </div>
//             )
//         }
//             return (
//                 <div className="SliderDetail">
//                 <section className="mobil">
//                     <Slider autoplay={3000}>
//                         {renderImages(images)}
//                     </Slider>
//                 </section>
//             </div>
//         )
//     }
// }

