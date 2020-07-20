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
    this.setState({ showMenu: true, selectecCategory: cat_it });
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

    let menu = this.state.moreAll ? " show-all" : '  '

    let url = "https://picsum.photos/100"

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
            this.props.categories.map((cat, i) => {
              return <span className="active-link" key={i} onMouseEnter={() => this.menuMouseEnter(i)} onMouseLeave={this.menuMouseLeave}>
                <Link href={"/categoria/" + cat.name}><a>{cat.name} <FontAwesomeIcon icon={faAngleRight} />
                </a></Link></span>
            })
          }
          </section>
          {this.state.showMenu ?
            <section onMouseEnter={this.subMenuMouseEnter} className={`${menu} sub-categories`}>
              <section className="title-sub">
                <span>{this.props.categories[this.state.selectecCategory].name}</span>
                {
                  /*
                <img src={url}/>
                <img src={url} />
                <img src={url} />
                <img src={url} />
                 */
                }

              </section>
              {this.props.categories[this.state.selectecCategory].childs.length > 20 ? 
                <span onClick={this.showAll} className="load-more">
                  <a className="accent">{!this.state.moreAll ? "Ver mas" : 'Ver menos'}</a>
                  {/*NEED ACTION*/}
                </span> 
                : 
                null
              }
              {this.props.categories[this.state.selectecCategory].childs.map((ccat, i) => {
                return <section className={!this.state.moreAll ? "sub-cat less" : 'sub-cat more'}key={i}> {/*<h5>categoria nivel 2</h5>*/}
                  <span><Link href={"/categoria/" + ccat.name}><a>{ccat.name}</a></Link></span>
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
