import React, { Component, createRef } from "react";
import "./DetailImg.css";
import SliderDetail from "./../SliderDetail";
import { getImgUrl } from "../../lib/config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./../Common/Spinner";
import ReactImageMagnify from "react-image-magnify";
import Image from "next/image"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.images[this.props.images.length - 1].url,
            images: [],
            marginXZoomImage: 0,
            marginYZoomImage: 0,
            widthZoomImage: 0,
        };
        this.showImage = this.showImage.bind(this);
    }

    mainImage = createRef(null);

    showImage(url) {
        this.setState({ image: url }, this.findMarginWidthForZoomImage);
    }

    componentDidMount() {
        this.findMarginWidthForZoomImage();
        this.setState({ images: this.props.images.reverse() });

        window.addEventListener("resize", this.findMarginWidthForZoomImage);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.findMarginWidthForZoomImage);
    }

    /* Funcion para poder establecer los margin y el width adecuado de la imagen en zoom */
    findMarginWidthForZoomImage = () => {
        if (
            this.mainImage !== null &&
            this.mainImage.current !== null &&
            this.mainImage.current.firstElementChild !== null
        ) {
            const wrapperImage = this.mainImage.current;
            const divImage = this.mainImage.current.firstElementChild;

            const width1 = wrapperImage.clientWidth;
            const width2 = divImage.clientWidth;

            const height1 = wrapperImage.clientHeight;
            const height2 = divImage.clientHeight;

            const paySectionWidth =
                document.getElementById("pay-section").clientWidth;

            this.setState({
                marginXZoomImage: (width1 - width2) / 2,
                marginYZoomImage: (height1 - height2) / 2 - (height1 - height2),
                widthZoomImage: paySectionWidth,
            });
        }
    };

    render() {
        let url =
            "/categoria/" + this.props.category.replace(/ /g, "-").toLowerCase();
        return (
            <>
                <div className="wrap-gallery">
                    <div className="list-gallery">
                        {this.state.images && this.state.images.length ? (
                            this.state.images.slice(0, 5).map((img, i) =>
                                i < 5 ? (
                                    <div className="anullProperties">
                                        <Image
                                            // src={'https://api.kieroapi.net/img/v1/'+ img.product_id + '?img=' + encodeURIComponent(img.url)}
                                            src={getImgUrl(img.url)}
                                            alt={this.props.product_name + " " + i}
                                            className="size-img-list"
                                            onMouseEnter={() => {
                                                this.showImage(img.url);
                                            }}
                                            key={i}
                                            layout="fill"
                                        />
                                    </div>
                                ) : null
                            )
                        ) : (
                            <Spinner />
                        )}
                    </div>
                    <div className="main-image" ref={this.mainImage}>
                        {this.props.allowZoom ? (
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: "Wristwatch by Ted Baker London",
                                        isFluidWidth: true,
                                        src: this.state.image,
                                    },
                                    largeImage: {
                                        src: this.state.image,
                                        width: 1000,
                                        height: 900,
                                    },
                                    imageClassName: "size-img-main",
                                    enlargedImageContainerDimensions: {
                                        width: this.state.widthZoomImage - 9,
                                        height: 386,
                                    },
                                    enlargedImageContainerStyle: {
                                        marginLeft: this.state.marginXZoomImage + 4,
                                        marginTop: this.state.marginYZoomImage + 2,
                                        zIndex: "1000",
                                    },
                                }}
                            />
                        ) : (
                            <div className="anullProperties">
                                <Image
                                    alt={this.props.product_name}
                                    src={this.state.image}
                                    className="size-img-main"
                                    layout="fill"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="gallery-responsive">
                    <a className="back-button" href={url}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Ir al listado
                    </a>
                    {/*NEED FIX THIS SHIT*/}
                    <SliderDetail
                        alt={this.props.product_name}
                        img={this.state.images}
                        allowZoomModal={this.props.allowZoom}
                    />
                </div>
            </>
        );
    }
}

export default Detail;
