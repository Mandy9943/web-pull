import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../assets/img/category-img/banner-de 2-react_Mesa-de-trabajo-1-copia-2.jpg";
import "./Finding.css";

class Finding extends Component {
  render() {
    return (
      <div className="wrap-finding">
        <h2 className="home-section-title">Encuentra los mejores productos de Electrónica <Link href="#"><a>Ver todos</a></Link></h2>
        <div className="content-finding">
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg} />
            </div>
            <div className="wrap-info">
              <p className="category-text">Electrónica</p>
              <h3 className="finding-title">Diseño y Tecnología</h3>
              <button>ver mas</button>
            </div>
          </div>
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg} />
            </div>
            <div className="wrap-info">
              <p className="category-text">Electrónica</p>
              <h3 className="finding-title">Diseño y Tecnología</h3>
              <button>ver mas</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finding;
