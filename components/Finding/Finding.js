import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../assets/img/category-img/banner-de 2-react_Mesa-de-trabajo-1-copia-2.jpg";
import CategoryImg2 from "../../assets/img/category-img/banner-deportes.jpg";
import "./Finding.css";

class Finding extends Component {

    constructor(props) {
        super(props);
    }


  go() {
    window.location = this.props.category.url1 ;
  }
  go2() {
    window.location = this.props.category.url2;
  }


  render() {
    
    return (
      <div className="wrap-finding">
        <h3 className="home-section-title">Encuentra los mejores productos de {this.props.category.father}<Link href={this.props.category.urlFather}><a className='accent'>Ver todos</a></Link></h3>
        <div className="content-finding">
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg} alt={"Electrónica audio y video"} />
            </div>
            <div className="wrap-info">
              <p className="category-text">{this.props.category.father}</p>
              <h3 className="finding-title"> {this.props.category.sub1}</h3>
              <button onClick={this.go}>Ver mas</button>
            </div>
          </div>
          <div className="finding">
            <div className="wrap-img">
              <img src={CategoryImg2} alt={"Deportes"} />
            </div>
            <div className="wrap-info">
              <p className="category-text">{this.props.category.father}</p>
              <h3 className="finding-title">{this.props.category.sub2}</h3>
              <button onClick={this.go2}>Ver mas</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Finding;
