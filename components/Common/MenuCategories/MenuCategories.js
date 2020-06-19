import React, { Component } from "react";
import "./MenuCategories.css";
import Link from "next/link";
import categories from "../../../assets/img/banner-categories.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


class MenuCategories extends Component {
  render() {
    return (
      <div className="wrap-menu-categories">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className="menu-categories">
          <section className="title-categories">          {
            this.props.categories.map(function (cat, i) {
                return <span key={i}><Link href={"/categoria/" + cat.name}><a>{cat.name} <FontAwesomeIcon icon={faAngleRight}  /></a></Link></span>
            })
          }
          </section>
          <section className="sub-categories">
            <img src={categories} />
            {/* NEED FIX THIS SHIT*/}
            <span><Link href="#"><a>sub-categoria generica</a></Link></span>
            <span><Link href="#"><a>sub-categoria generica</a></Link></span>
            <span><Link href="#"><a>sub-categoria generica</a></Link></span>
            <span><Link href="#"><a>sub-categoria generica</a></Link></span>
            <span><Link href="#"><a>sub-categoria generica</a></Link></span>
          </section>

        </div>
      </div>
    );
  }
}

export default MenuCategories;
<button>cerrar</button>;
