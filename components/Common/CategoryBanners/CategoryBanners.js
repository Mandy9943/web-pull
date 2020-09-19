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
    
    return (
      <div className="category-banners">
        <h3 className="title">Compra por categoría</h3>
        <div className="group-category">
          <section className="item">
            <img />
            <span className="title">titulo de la sub-categoria</span>
          </section>
          <section className="item">
            <img />
            <span className="title">titulo de la sub-categoria</span>
          </section>
          <section className="item">
            <img />
            <span className="title">titulo de la sub-categoria</span>
          </section>
        </div>
      </div>
    );
  }
}
export default CategoryBanners;
