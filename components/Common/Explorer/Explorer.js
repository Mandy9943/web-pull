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

    const categoryRandom=(Math.floor((Math.random() * 21) + 1) )-1 
    const category = [
        //{name:"Accesorios", image: accesorios},
        {name:"Accesorios para Vehículos", image: accesoriosvehiculos},
        {name:"Bebés", image: bebes},
        {name:"Belleza y Cuidado Personal", image: belleza},
        {name:"Cámaras y Accesorios", image: camaras},
        {name:"Celulares y Teléfonos", image: celulares},
        {name:"Coleccionables y Hobbies", image: coleccionables},
        {name:"Computación", image: computacion},
        {name:"Deportes y Fitness", image: deportes},
        {name:"Electrodomésticos", image: electrodomesticos},
        {name:"Electrónica, Audio y Video ", image: electronica},
        {name:"Herramientas y Contrucción", image: herramientas},
        {name:"Hogar y Muebles", image: hogar},
        {name:"Instrumentos Musicales", image: instrumentos},
        {name:"Juegos y Juguetes", image: juguetes},
        {name:"Libros, Revistas y Comics", image: libros},
        {name:"Animales y Mascotas", image: mascotas},
        {name:"Música", image: musica},
        {name:"Industrias y Oficinas", image: oficina},
        {name:"Relojes y Joyas", image: relojesjoyas},
        {name:"Salud y Equipamiento Medico", image: salud},
        {name:"Consolas y Videojuegos", image: videojuegos}
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
        <h2 className="home-section-title">Encuentra los mejores productos de {this.state.categoryName} <Link href={"/categoria/"+this.state.categoryName}><a>Ver todos</a></Link></h2>
        <div className="content-explorer">
          <div className="main-img">
            <img src={this.state.exploreImage} />
            {/*<div>texto de prueba</div>*/}
          </div>
          <div className="group-img">
            {this.state.data.map((item, i) => (
              <div className="wrapImgExplorer" key={i}>
                <img src={ getImgUrl(item.image) } />
              </div>
            ))}
          </div>
        </div>
        </div>
    );
  }
}

export default Explorer;
