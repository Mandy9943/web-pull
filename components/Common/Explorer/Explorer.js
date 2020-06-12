import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../../assets/img/category-img/category-tools.jpg";
import "./Explorer.css";
<<<<<<< HEAD
=======

>>>>>>> Jorge
class Explorer extends Component {
  data = [
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
    {
      url: "https://picsum.photos/150",
    },
  ];
  render() {
    return (
      <>
        <div className="explorer">
        <h2 className="home-section-title">Encuentra los mejores productos de Electrónica <Link href="#"><a>Ver todos</a></Link></h2>
<<<<<<< HEAD
        <div className="container-explorer">
=======
        <div className="content-explorer">
>>>>>>> Jorge
          <div className="main-img">
            <img src={CategoryImg} />
            {/*<div>texto de prueba</div>*/}
          </div>
          <div className="group-img">
            {this.data.map((item, i) => (
              <div className="wrapImgExplorer" key={i}>
                <img src={item.url} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default Explorer;
