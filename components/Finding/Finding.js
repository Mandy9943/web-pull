import React, {Component} from "react";
import Link from "next/link";
import "./Finding.css";
import Image from "next/image";
import Imagen from "../Common/Imagen/Imagen";

class Finding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let CategoryImg = "https://kiero.co/images/resources/finding-banner/";
        // let CategoryImg = "//localhost/images/resources/finding-banner/";

        return (
            <div className="wrap-finding">
                <div className="content-finding">
                    <div className="finding">
                        <div className="wrap-img">
                            <div className="anullProperties">
                                <Imagen
                                    src={CategoryImg + this.props.category.img0}
                                    alt={this.props.category.img0}
                                />
                            </div>
                        </div>
                        <div className="wrap-info">
                            <p className="category-text">{this.props.category.father0}</p>
                            <h3 className="finding-title">{this.props.category.sub1}</h3>
                            <a
                                href={this.props.category.url1.replace(/ /g, "-").toLowerCase()}
                            >
                                Ver más
                            </a>
                        </div>
                    </div>
                    <div className="finding">
                        <div className="wrap-img">
                            <div className="anullProperties">
                                <Imagen
                                    src={CategoryImg + this.props.category.img1}
                                    alt={this.props.category.img1}
                                />
                            </div>
                        </div>
                        <div className="wrap-info">
                            <p className="category-text">{this.props.category.father1}</p>
                            <h3 className="finding-title">{this.props.category.sub2}</h3>
                            <a
                                href={this.props.category.url2.replace(/ /g, "-").toLowerCase()}
                            >
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Finding;
