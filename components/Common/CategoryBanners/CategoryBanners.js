import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./CategoryBanners.css";
import { getImgUrl } from "../../../lib/config"

class CategoryBanners extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {

    let urlBanner = "//kiero.co/images/resources/";
    return (
      <div className="category-banners">
        <h3 className="title">Compra por categoría</h3>
        <div className="group-category">
          <section className="item">
            <img src={urlBanner+"categoria"+"nombre-imagen-.png"}/>
          </section>
          <section className="item">
            <img src={urlBanner + "categoria" + "nombre-imagen-.png"} />
          </section>
          <section className="item">
            <img src={urlBanner + "categoria" + "nombre-imagen-.png"} />
          </section>
        </div>
      </div>
    );
  }
}
export default CategoryBanners;
