import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../assets/img/category-img/banner-de 2-react_Mesa-de-trabajo-1-copia-2.jpg";
import CategoryImg2 from "../../assets/img/category-img/banner-deportes.jpg";
import "./Finding.css";

class Finding extends Component {

  go(){
    window.location="/categoria/Electrónica, Audio y Video";
  }
  go2(){
    window.location="/categoria/Deportes y Fitness";
  }

  render() {
    let CategoryImg3 = "//kiero.co/images/resources/deportes%20y%20fitness/2.jpg";
    let CategoryImg4 = "//kiero.co/images/resources/deportes%20y%20fitness/3.jpg";
    return (
      <div className="wrap-finding">
        <h3 className="home-section-title">Encuentra los mejores productos de Electrónica <Link href="/categoria/Electrónica"><a>Ver todos</a></Link></h3>
        <div className="content-finding">
          <div className="finding">
            <Link href="#"><a className="no-finding">
              <img src={CategoryImg3} />
            {/*NEED THIS FIX SHIT*/}
            </a></Link>
            <div className="wrap-img">
              <img src={CategoryImg} />
            </div>
            <div className="wrap-info">
              <p className="category-text">Electrónica</p>
              <h3 className="finding-title"> Audio y Video</h3>
              <button onClick={this.go}>ver mas</button>
            </div>
          </div>
          <div className="finding">
            <Link href="#"><a className="no-finding">
              <img src={CategoryImg4} />
              {/*NEED THIS FIX SHIT*/}
            </a></Link>
            <div className="wrap-img">
              <img src={CategoryImg2} />
            </div>
            <div className="wrap-info">
              <p className="category-text">Deportes</p>
              <h3 className="finding-title">Bicicletas, Ciclismo y  más</h3>
              <button onClick={this.go2}>ver mas</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finding;
