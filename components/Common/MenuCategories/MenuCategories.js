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

  mouseEnter = (cat_it) => {
    this.setState({ show: true, selectecCategory: cat_it });
  }

  mouseLeave = () => {
    this.setState({ show: false });
  }

  render() {

  

    let menu = this.state.show ? " full-width " : '  '

    return (
      <div className="wrap-menu-categories">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className="menu-categories"
          onMouseLeave={() => {
            this.props.toggle(this.props.num);
          }}>
          <section className="title-categories">          {
            this.props.categories.map((cat, i)  => {
              return <span className="active-link" key={i} onMouseEnter={() => this.mouseEnter(i)} onMouseLeave={this.mouseLeave}>
                <Link href={"/categoria/" + cat.name}><a>{cat.name} <FontAwesomeIcon icon={faAngleRight} />
                </a></Link></span>
            })
          }
          </section>
          {this.state.show ?
            <section toggle={this.mouseLeave} className={`${menu} sub-categories`}>
                {this.props.categories[this.state.selectecCategory].childs.map((ccat, i) => {
                    return <span key={i}><Link href="#"><a>{ccat.name}</a></Link></span>
                })}
            </section>

            : null}

        </div>
      </div>
    );
  }
}

export default MenuCategories;
<button>cerrar</button>;
