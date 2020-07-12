import React, { Component } from "react";
import "./CategoriesMovil.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";



class CategoriesMovil extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {


    return (
      <div className="menu-categorias">
        <h1 className="tite-categories"><Logo /> <span>Categorias</span> <Link href="/ayuda"><a>Ayuda</a></Link> </h1>
        <div className="menu-list">
          {this.props.categories.map((cat, i) => {
              return <span className="item" key={i}>
                <Link href={"/categoria/" + cat.name}><a>{cat.name}
                </a></Link></span>
            })
          }
        </div>
      </div>
    );
  }
}

export default CategoriesMovil;
<button>cerrar</button>;
