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
      showMenu: false,
      moreAll: false,
      lessAll: true,
    }
  }

  menuMouseEnter = (cat_it) => {
    this.setState({ showMenu: true, selectedCategory: cat_it });
  }

  showAll = () => {
    this.setState({
      lessAll: !this.state.lessAll,
      moreAll: !this.state.moreAll,
    });
  }

  menuMouseLeave = () => {
    setInterval(() => {
      this.setState({ showMenu: true });
    }, 100);
  }

  subMenuMouseEnter = () => {
    this.setState({ showMenu: true });
  }


  render() {

    let urlBanner = "//kiero.co/images/resources/categorias-menu/";
    let categoriBanner = ['0/', '1/', '2/', '3/', '4/'];
    
  
    return (
      <div className="wrap-menu-categories">
        <div
          className="close" onClick={() => { this.props.toggle(this.props.num); }}
        />
        <div className="menu-categories" onMouseLeave={() => { this.props.toggle(this.props.num); }}>

          <section className="title-categories">
            {this.props.categories.map((ccat, i) => {
              return <span className="active-link" onMouseEnter={() => this.menuMouseEnter(i)} onMouseLeave={this.menuMouseLeave}>
                <Link href={"/categoria/" + ccat.name}><a>{ccat.name}<FontAwesomeIcon icon={faAngleRight} />
                </a></Link></span>
            })
            }

          </section>
          {this.state.showMenu ?
            <section onMouseEnter={this.subMenuMouseEnter} className="sub-categories">
              <section className="title-sub">
                <span>{this.props.categories[this.state.selectedCategory].name}</span>

                {categoriBanner.map((i) => {
                  return(
                    <img key={i} src={urlBanner + i + "1.jpg"} />
                  )
                })
                }

              </section>
              {this.props.categories[this.state.selectedCategory].childs.map((sl_cat, i) => {
                return<section className="sub-cat" key={i}>
                  {<h5><Link href={"/categoria/" + sl_cat.name}><a>{sl_cat.name}</a></Link></h5>}
                  {sl_cat.childs.map((tl_cat, i) => {
                    return <span><Link href={"/categoria/" + tl_cat.name}><a>{tl_cat.name}</a></Link></span>
                  })
                  }
                </section>
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
