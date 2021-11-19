import React, { Component } from "react";
import Link from "next/link";
import CategoryImg from "../../../assets/img/category-img/category-tools.webp";
import "./Explorer.css";
import { getProductsBasic } from "../../../services/productsApi";
import { getImgUrl } from "../../../lib/config";
import { handleFormatUrl } from "../../../lib/functions";
import Spinner from "../Spinner";
import accesorios from "../../../assets/img/category-img/category-accesorios.webp";
import accesoriosvehiculos from "../../../assets/img/category-img/category-accesoriosvehiculos.webp";
import bebes from "../../../assets/img/category-img/category-bebes.webp";
import belleza from "../../../assets/img/category-img/category-belleza.webp";
import camaras from "../../../assets/img/category-img/category-camaras.webp";
import celulares from "../../../assets/img/category-img/category-celulares.webp";
import coleccionables from "../../../assets/img/category-img/category-coleccionables.webp";
import computacion from "../../../assets/img/category-img/category-computacion.webp";
import deportes from "../../../assets/img/category-img/category-deportes.webp";
import electrodomesticos from "../../../assets/img/category-img/category-electrodomesticos.webp";
import electronica from "../../../assets/img/category-img/category-electronica.webp";
import herramientas from "../../../assets/img/category-img/category-herramientas.webp";
import hogar from "../../../assets/img/category-img/category-hogar.webp";
import instrumentos from "../../../assets/img/category-img/category-instrumentos.webp";
import juguetes from "../../../assets/img/category-img/category-juguetes.webp";
import libros from "../../../assets/img/category-img/category-libros.webp";
import mascotas from "../../../assets/img/category-img/category-mascotas.webp";
import musica from "../../../assets/img/category-img/category-musica.webp";
import oficina from "../../../assets/img/category-img/category-oficina.webp";
import relojesjoyas from "../../../assets/img/category-img/category-relojesjoyas.webp";
import salud from "../../../assets/img/category-img/category-salud.webp";
import videojuegos from "../../../assets/img/category-img/category-videojuegos.webp";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      exploreImage: "",
      categoryName: "",
    };
  }

  componentDidMount() {
    const categoryRandom = Math.floor(Math.random() * 18 + 1) - 1;
    const category = [
      //{name:"Accesorios", image: accesorios},
      { name: "Vehículos", image: accesoriosvehiculos },
      { name: "Bebés", image: bebes },
      { name: "Belleza", image: belleza },
      { name: "Cámaras fotografia y video", image: camaras },
      { name: "Celulares y accesorios", image: celulares },
      { name: "Coleccionables y bellas artes", image: coleccionables },
      { name: "Computadoras y Accesorios", image: computacion },
      { name: "Deportes y fitness", image: deportes },
      { name: "Electrodomésticos", image: electrodomesticos },
      { name: "Electrónica, Audio y Video", image: electronica },
      { name: "Herramientas", image: herramientas },
      { name: "Hogar", image: hogar },
      { name: "Instrumentos musicales", image: instrumentos },
      { name: "Juguetes", image: juguetes },
      //{name:"Libros, Revistas y Comics", image: libros},
      { name: "Animales y Mascotas", image: mascotas },
      //{name:"Música", image: musica},
      { name: "Oficina", image: oficina },
      { name: "Relojes Y Joyería", image: relojesjoyas },
      { name: "Salud", image: salud },
      { name: "Consolas y videojuegos", image: videojuegos },
    ];

    getProductsBasic(category[categoryRandom].name, 8).then((response) => {
      let data = [];
      let product;
      for (product in response.data.results) {
        data.push(response.data.results[product]);
      }
      this.setState({
        data: data,
        categoryName: category[categoryRandom].name,
        exploreImage: category[categoryRandom].image,
      });
    });
  }

  render() {
    return (
      <div className="explorer">
        <h3 className="home-section-title">
          Encuentra los mejores productos de {this.state.categoryName}{" "}
          <a
            className="accent"
            href={
              "/categoria/" +
              this.state.categoryName.replace(/ /g, "-").toLowerCase()
            }
          >
            {" "}
            Ver todos
          </a>
        </h3>
        <div className="content-explorer">
          <div className="main-img">
            <a
              href={
                "/categoria/" +
                this.state.categoryName.replace(/ /g, "-").toLowerCase()
              }
            >
              {this.state.exploreImage ? (
                <div className="anullProperties">
                  <Image
                    layout="fill"
                    alt={this.state.categoryName}
                    src={this.state.exploreImage}
                  />
                </div>
              ) : (
                <Skeleton className="skeleton" />
              )}
            </a>
          </div>
          <div className="group-img">
            {!this.state.exploreImage ? (
              <div className="wrapImgExplorer">
                <Skeleton className="loaderSkeleton" />
                <Skeleton className="loaderSkeleton" />
                <Skeleton className="loaderSkeleton" />
                <Skeleton className="loaderSkeleton" />
              </div>
            ) : (
              this.state.data.map((item, i) => (
                <div className="wrapImgExplorer" key={i}>
                  <a href={handleFormatUrl(item.product_id, item.title)}>
                    <Spinner />
                    <div className="anullProperties">
                      <Image layout="fill" alt={item.title} src={item.image} />
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Explorer;
