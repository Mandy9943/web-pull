import React, { Component } from "react";
import "./DetailImg.css";
import PrincipalSlider from "./../PrincipalSlider";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, image: null };
    this.showImage = this.showImage.bind(this);
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((r) => r.json())
      .then((r) => {
        this.setState({ data: r });
        const mainImg = r.find((img) => img.id == 0);
        this.setState({ image: mainImg.download_url });
      });
  }

  showImage(num) {
    const result = num ? this.state.data.find((img) => img.id == num) : 0;
    this.setState({ image: result.download_url });
  }

  render() {
    return (
      <>
        <div className="wrap-gallery">
          <div className="list-gallery">
            {this.state.data && this.state.data.length ? (
              this.state.data.map((img, i) =>
                i < 5 ? (
                  <img
                    src={img.download_url}
                    className="size-img-list"
                    onMouseEnter={() => {
                      this.showImage(img.id);
                    }}
                    key={i}
                  />
                ) : null
              )
            ) : (
              <div>cargando...</div>
            )}
          </div>
          <div className="main-image">
            <img src={this.state.image} className="size-img-main" />
          </div>
        </div>
        <div className="gallery-responsive">
          <PrincipalSlider />
        </div>
      </>
    );
  }
}

export default Detail;
