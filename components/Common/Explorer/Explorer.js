import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../../assets/img/category-img/category-tools.jpg";
import "./Explorer.css";
import { getProductsBasic } from "../../../services/productsApi";
import { getImgUrl } from "../../../lib/config"



import accesorios from "../../../assets/img/category-img/category-accesorios.jpg"
import accesoriosvehiculos from "../../../assets/img/category-img/category-accesoriosvehiculos.jpg"
import bebes from "../../../assets/img/category-img/category-bebes.jpg"
import belleza from "../../../assets/img/category-img/category-belleza.jpg"
import camaras from "../../../assets/img/category-img/category-camaras.jpg"
import celulares from "../../../assets/img/category-img/category-celulares.jpg"
import coleccionables from "../../../assets/img/category-img/category-coleccionables.jpg"
import computacion from "../../../assets/img/category-img/category-computacion.jpg"
import deportes from "../../../assets/img/category-img/category-deportes.jpg"
import electrodomesticos from "../../../assets/img/category-img/category-electrodomesticos.jpg"
import electronica from "../../../assets/img/category-img/category-electronica.jpg"
import herramientas from "../../../assets/img/category-img/category-herramientas.jpg"
import hogar from "../../../assets/img/category-img/category-hogar.jpg"
import instrumentos from "../../../assets/img/category-img/category-instrumentos.jpg"
import juguetes from "../../../assets/img/category-img/category-juguetes.jpg"
import libros from "../../../assets/img/category-img/category-libros.jpg"
import mascotas from "../../../assets/img/category-img/category-mascotas.jpg"
import musica from "../../../assets/img/category-img/category-musica.jpg"
import oficina from "../../../assets/img/category-img/category-oficina.jpg"
import relojesjoyas from "../../../assets/img/category-img/category-relojesjoyas.jpg"
import salud from "../../../assets/img/category-img/category-salud.jpg"
import videojuegos from "../../../assets/img/category-img/category-videojuegos.jpg"



class Explorer extends Component {


  constructor(props) {
      super(props);
      this.state = {
          data: [],
          exploreImage: "",
          categoryName: ""
      }

  }
  
  componentDidMount() {

    const categoryRandom=(Math.floor((Math.random() * 18) + 1) )-1 
    const category = [
        //{name:"Accesorios", image: accesorios},
        {name:"Vehículos", image: accesoriosvehiculos},
        {name:"Bebés", image: bebes},
        {name:"Belleza", image: belleza},
        {name:"Cámaras y accesorios", image: camaras},
        {name:"Celulares y Teléfonos", image: celulares},
        {name:"Coleccionables", image: coleccionables},
        {name:"Computación", image: computacion},
        {name:"Deporte", image: deportes},
        {name:"Electrodomésticos", image: electrodomesticos},
        {name:"Electrónica, Audio y Video", image: electronica},
        {name:"Herramientas", image: herramientas},
        {name:"Hogar", image: hogar},
        {name:"Instrumentos musicales", image: instrumentos},
        {name:"Juguetes", image: juguetes},
        //{name:"Libros, Revistas y Comics", image: libros},
        {name:"Animales y Mascotas", image: mascotas},
        //{name:"Música", image: musica},
        {name:"Oficina", image: oficina},
        {name:"Relojes Y Joyería", image: relojesjoyas},
        {name:"Salud", image: salud},
        {name:"Consolas y videojuegos", image: videojuegos}
    ]


  
    getProductsBasic(category[categoryRandom].name, 8)
        .then((response) => {
            let data = [];
            let product;
            for (product in response.data.products) {
                data.push(response.data.products[product]);
            }
            this.setState({ data: data, categoryName:category[categoryRandom].name, exploreImage: category[categoryRandom].image  });
        });
  }



  render() {
        return (
        <div className="explorer">
        <h3 className="home-section-title">Encuentra los mejores productos de {this.state.categoryName} <Link href={"/categoria/"+this.state.categoryName}><a className="accent">Ver todos</a></Link></h3>
        <div className="content-explorer">
          <div className="main-img">
                <Link href={"/categoria/"+this.state.categoryName}>
                  <img alt={this.state.categoryName} src={this.state.exploreImage} />
                </Link>
          </div>
          <div className="group-img">
            {this.state.data.map((item, i) => (
              <div className="wrapImgExplorer" key={i}>
                <Link href={"/detalle/"+item.product_id+"_"+item.title.replace(/[^\w\s]/gi, '').split(" ").join("-")} ><a>
                  <img alt={item.title} src={ getImgUrl(item.image) } /></a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Explorer;
