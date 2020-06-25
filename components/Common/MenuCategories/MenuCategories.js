import React, { Component } from "react";
import "./MenuCategories.css";
import Link from "next/link";
import categories from "../../../assets/img/banner-categories.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


class MenuCategories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  mouseEnter = () => {
    this.setState({ show: true });
  }

  mouseLeave = () => {
    this.setState({ show: false });
  }

  render() {

    let cls = 1 === 1 ? "active " : '  '

    let menu = 1 === 2 ? "active " : '  '

    return (
      <div className="wrap-menu-categories">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className={`${menu} menu-categories`}
          onMouseLeave={() => {
            this.props.toggle(this.props.num);
          }}>
          <section className="title-categories">          {
            this.props.categories.map((cat, i)  => {
              return <span className="active-link" key={i} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Link href={"/categoria/" + cat.name}><a>{cat.name} <FontAwesomeIcon icon={faAngleRight} />
                </a></Link></span>
            })
          }
          </section>
          {this.state.show ?
            <section toggle={this.mouseLeave} className={`${cls} sub-categories`}>
              <img src={categories} />
              {/* NEED FIX THIS SHIT*/}
              <span><Link href="#"><a>sub-categoria generica</a></Link></span>
              <span><Link href="#"><a>sub-categoria generica</a></Link></span>
              <span><Link href="#"><a>sub-categoria generica</a></Link></span>
              <span><Link href="#"><a>sub-categoria generica</a></Link></span>
              <span><Link href="#"><a>sub-categoria generica</a></Link></span>
            </section>

            : null}

        </div>
      </div>
    );
  }
}

export default MenuCategories;
<button>cerrar</button>;
