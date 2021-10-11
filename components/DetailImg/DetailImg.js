import React, { Component } from "react";
import "./DetailImg.css";
import SliderDetail from "./../SliderDetail";
import { getImgUrl } from "../../lib/config";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./../Common/Spinner";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.images[this.props.images.length - 1].url,
      images: [],
    };
    this.showImage = this.showImage.bind(this);
  }

  showImage(url) {
    this.setState({ image: url });
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    this.setState({ images: this.props.images.reverse() });
  }

>>>>>>> af5de16bdc8323059ab58345121ec161429ff691
  render() {
    let url = "/categoria/" + this.props.category;
    return (
      <>
        <div className="wrap-gallery">
          <div className="list-gallery">
            {this.state.images && this.state.images.length ? (
              this.state.images.slice(0, 5).map((img, i) =>
                i < 5 ? (
                  <img
                    // src={'https://api.kieroapi.net/img/v1/'+ img.product_id + '?img=' + encodeURIComponent(img.url)}
                    src={getImgUrlMinMin(img.url)}
                    alt={this.props.product_name + " " + i}
                    className="size-img-list"
                    onMouseEnter={() => {
                      this.showImage(img.url);
                    }}
                    key={i}
                  />
                ) : null
              )
            ) : (
              <Spinner />
            )}
          </div>
          <div className="main-image">
            <img src={this.state.image} className="size-img-main" />
          </div>
        </div>
        <div className="gallery-responsive">
          <Link href={url}>
            <a className="back-button">
              <FontAwesomeIcon icon={faAngleLeft} /> Ir al listado
            </a>
          </Link>
          {/*NEED FIX THIS SHIT*/}
          <SliderDetail img={this.state.images} />
        </div>
      </>
    );
  }
}

export default Detail;
