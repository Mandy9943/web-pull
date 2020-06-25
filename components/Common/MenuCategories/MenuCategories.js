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
        showMenu: false
    }
  }

    menuMouseEnter = (cat_it) => {
        this.setState({ showMenu: true, selectecCategory: cat_it });
    }

    menuMouseLeave = () => {
        setInterval(() => {
            this.setState({ showMenu: true});
        },100);
    }

    subMenuMouseEnter = () => {
        this.setState({ showMenu: true});
    }


  render() {


    let menu = this.state.showMenu ? " full-width " : '  '

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
              return <span className="active-link" key={i} onMouseEnter={() => this.menuMouseEnter(i)} onMouseLeave={this.menuMouseLeave}>
                <Link href={"/categoria/" + cat.name}><a>{cat.name} <FontAwesomeIcon icon={faAngleRight} />
                </a></Link></span>
            })
          }
          </section>
          {this.state.showMenu ?
            <section onMouseEnter={this.subMenuMouseEnter} className={`${menu} sub-categories`}>
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
