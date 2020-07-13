import React, { Component } from "react";
import Footer from "../Common/Footer";
import Link from "next/link"
import "./CategoryList.css";
import Nav from "../Common/Nav/Nav";
import Finding from "./../Finding";
import Tickets from "./../Tickets";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";

export default class CategoryList extends Component {
  render() {
    let u_data = this.props.user_data
    let authenticated = this.props.authenticated
    let url = "//www.sic.gov.co";

    let urlBanner = "//kiero.co/images/resources/deportes%20y%20fitness/1.jpg";

    var complete = {
      "deporte y fitness": {
        "estucture":[1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
        "links": ["","Gafas%20de%20Sol", "Ropa%20deportiva", "Rugby", "Tenis%20y%20raquetas", "Yoga", "Suministros%20y%20equipo%20médico", "Snowboard", "Voleibol", "Airsoft%20y%20Paintball", "Fútbol", "Artes%20Marciales", "Béisbol%20y%20softball", "Bocce", "Ciclismo", "Camping", "Buceo%20y%20snorkel", "Canotaje", "Cricket", "Correr", "Natación", "Deportes%20ecuestres", "Navegación", "Nutrición%20deportiva", "Canotaje", "Entrenamiento%20cardiovascular%20y%20de%20fuerza", "Hockey", "Juegos%20al%20aire%20libre", "Juegos%20de%20lanzamiento", "Accesorios%20deportivos", "Escalada", "Equipo%20de%20casino", "Esgrima", "Fan%20Shop", "Gimnasia", "Golf", "Arcade%20y%20juegos%20de%20mesa", "Baile", "Bebidas%20en%20botella", "Baloncesto", "Boxeo", "Bolos", "Brújulas%20y%20odómetros", "Danza", "Juegos%20de%20sala", "Caza%20y%20pesca", "Esquí", "Ropa%20al%20aire%20libre", "Waterpolo", "Surf", "Billar", "Dardos", "Entrenadoresy%20árbitros", "Lacrosse", "Lucha%20deportiva", "Medicina%20deportiva", "Tienda%20para%20fanáticos", "Equipo%20de%20campo,%20cancha%20y%20pista", "Salud%20y%20bienestar"],
        "image_path":encodeURI("//kiero.co/images/resources/deportes y fitness/"),"enable":true},

      "animales y mascotas": {"estructure":[1, 3, 2, 3, 1],
        "links": ["","Comida%20para%20animales%20", "Estetica%20y%20cuidado%20para%20animales%20", "Aves", "Roedores", "Gatos", "Reptiles%20y%20anfibios", "Caballos", "Peces", "Perros"],
        "image_path": encodeURI("//kiero.co/images/resources/animales y mascotas/"),"enable": true},

      "bebes": {"estructure":[1, 2, 3, 2, 3, 2, 1],
        "links": ["","Ropa%20para%20Bebés", "Caminadores%20y%20Correpasillos", "Cuarto%20del%20Bebé", "Higiene%20y%20cuidado%20del%20bebé", "Lactancia%20y%20Alimentación", "Entretenimiento%20para%20Bebés", "Paseo%20del%20Bebé", "Salud%20del%20bebé%20", "Seguridad%20para%20bebés", "Artículos%20de%20maternidad", "Corrales%20para%20bebés", "Chupetes%20y%20mordedores", "Art%C3%ADculos%20para%20Beb%C3%A9s"],
        "image_path": encodeURI("//kiero.co/images/resources/bebes/"),"enable": true},

      "belleza y cuidado personal": {"estructure":[1, 2, 3, 2, 3, 2],
        "links": ["","electrodomesticos%20de%20belleza", "extensiones%20y%20pelucas", "higiene%20personal", "Articulos%20de%20peluqueria", "cuidado%20del%20cuerpo", "maquillaje", "depilación", "perfumes%20y%20fragancias", "cuidado%20del%20cabello", "cuidado%20de%20la%20piel", "barbería", "manicure%20y%20pedicure"],
        "image_path": encodeURI("//kiero.co/images/resources/Belleza y cuidado personal/"),"enable": true},

      "camaras y accesorios":  {"estructure":[1, 2, 3, 2],
        "links": ["","Camaras", "accesorios%20para%20cámaras", "memorias%20digitales", "bater%C3%ADas%20y%20cargadores", "video", "binoculares%20y%20telescopios", "videoc%C3%A1maras"],
        "image_path": encodeURI("//kiero.co/images/resources/camaras y accesorios/"),"enable": true},

      "celulares":{"estructure":[1, 2, 3, 2],
        "link": ["","celulares", "smartwatch", "tel%C3%A9fonos", "accesorios", "Memorias%20para%20Celular", "radios", "estuches%20y%20fundas"],
        "image_path": encodeURI("//kiero.co/images/resources/Celulares y telefonos/"),"enable": true},

      "consolas y videojuegos": {"estructure":[1, 2, 3, 2, 3, 2, 2],
        "links": ["","playstation", "xbox", "atari", "game%20boy", "nvidia%20shield", "Otros", "sony%20psp", "sega", "playstation%20vita", "GameCube  ", "nintendo", "mac", "juegos", "accesorios"],
        "image_path": encodeURI("//kiero.co/images/resources/consolas y videojuegos/"),"enable": true},

      "electronica audio y video": {"estructure":[1, 2, 3, 2, 3, 2, 3, 2, 1],
        "links": ["","audio%20para%20el%20hogar", "audio%20profesional%20y%20djs", "audio%20portátil", "accesorios%20de%20audio%20y%20video", "reproductores%20blu-ray", "drones%20y%20accesorios", "televisores", "video%20beams%20y%20pantallas", "//kiero.co/busqueda/pilas,%20bater%C3%ADas%20y%20cargadores", "Palms,%20Agendas%20y%20Accesorios", "//kiero.co/busqueda/reproductores%20mp3%20y%20mp4", "ipod", "lectores%20de%20libros%20digitales%20y%20accesorios", "componentes%20electronicos", "equipos%20de%20seguridad", "dvd", "calculadoras", "gps"],
        "image_path": encodeURI("//kiero.co/images/resources/electronica audio y video/"),"enable": true},

      "herramientas":{ "estructure":[1, 2, 3, 2],
        "links": ["","construcci%C3%B3n", "herramientas", "herramientas%20manuales", "herramientas%20el%C3%A9ctricas", "Pisos,%20Paredes%20y%20Aberturas", "mobiliario%20para%20cocinas", "mobiliario%20para%20ba%C3%B1os"],
        "image_path": encodeURI("//kiero.co/images/resources/herramientas y construccion/"),"enable": true},

      "hogar": {"estructure":[1, 2, 3, 2, 1],
        "links": ["","muebles", "cocina%20y%20comedor", "ba%C3%B1o", "jardines%20y%20exteriores", "muebles%20de%20acento", "alcobas", "decoracion%20del%20hogar", "Artículos%20para%20el%20hogar"],
        "image_path": encodeURI("//kiero.co/images/resources/hogar y muebles/"),"enable": true},

      "industrias y oficinas": {"estructure":[1, 2, 3, 2],
        "links": ["","equipamiento%20para%20oficinas", "industria%20gastron%C3%B3mica", "m%C3%A1quinas%20para%20industrias", "Embalajes", "equipo%20hidr%C3%A1ulico", "industria%20textil", "seguridad%20para%20industrias"],
        "image_path": encodeURI("//kiero.co/images/resources/industrias y oficinas/"),"enable": true},

      "instrumentos musicales": {"estructure":[1, 2, 3, 2],
        "links": ["", "instrumentos%20de%20cuerda", "instrumentos%20de%20viento", "micr%C3%B3fonos", "accesorios", "amplificadores", "bater%C3%ADas%20y%20percusi%C3%B3n", "teclados%20y%20pianos"],
        "image_path": encodeURI("//kiero.co/images/resources/instrumentos musicales/"),"enable": true},

      "juegos y juguetes": {"estructure":[1, 2, 3, 2, 3, 2, 3, 2, 3, 3],
        "links": ["", "disfraces%20y%20juegos%20de%20fantas%C3%ADa", "peluches", "Juguetes%20y%20Carros%20de%20Control%20Remoto", "electr%C3%B3nica%20para%20ni%C3%B1os", "juegos%20al%20aire%20libre", "arte%20y%20manualidades", "Juguetes%20de%20construcción", "aprendizaje%20y%20educaci%C3%B3n", "articulos%20para%20fiestas", "juguetes%20montables", "juegos%20de%20imitaci%C3%B3n", "juegos%20estrat%C3%A9gicos", "Juegos%20de%20Adultos", "Juguetes%20de%20Novedad", "mu%C3%B1ecas", "Juguetes%20para%20Bebes%20y%20Niños", "rompecabezas", "figuras%20de%20acci%C3%B3n%20y%20estatuas", "juegos%20y%20veh%C3%ADculos", "hobbies", "titeres", "mochilas%20y%20loncheras", "pasatiempos"],
        "image_path": encodeURI("//kiero.co/images/resources/juegos y juguetes/"),"enable": true},

      "relojes y joyas": {"estructure":[1, 3, 2, 3, 2, 3, 1],
        "links": ["","relojes%20de%20pulsera", "relojeras", "Accesorios%20Para%20Relojes", "joyeria", "smartwatch", "relojes%20digitales", "relojes%20de%20bolsillo", "Relojes%20Cuarzo", "relojes%20deportivos", "relojes%20de%20cuero", "relojes%20casuales", "relojes%20de%20acero%20inoxidable", "relojes%20analogicos", "marcas"],
        "image_path": encodeURI("//kiero.co/images/resources/relojes y joyas/"),"enable": true},

      "ropa zapatos y accesorios": {"estructure":[1, 2, 2],
        "links": ["","ropa%20y%20accesorios%20para%20ni%C3%B1os", "ropa%20y%20accesorios%20para%20ni%C3%B1as", "ropa%20y%20accesorios%20para%20mujeres", "ropa%20y%20accesorios%20para%20hombres"],
        "image_path": encodeURI("//kiero.co/images/resources/ropa,zapatos y accesorios/"),"enable": true},

      "vehiculos y accesorios": {
        "estructure": [1, 2, 3, 2, 3, 2],
        "links": ["https://kiero.co/categoria/Accesorios%20para%20Vehículos", "Repuestos%20para%20Carro", "audio%20para%20carro", "accesorios%20para%20aviones", "Afinación%20y%20Rendimiento%20para%20Carro", "accesorios%20para%20carro", "herramientas%20para%20carro", "Repuestos%20para%20Carro", "accesorios%20de%20exterior%20para%20carro", "accesorios%20de%20interior%20para%20carro", "accesorios%20para%20moto", "llantas", "Repuestos%20para%20Moto"],
        "image_path": encodeURI("//kiero.co/images/resources/vehiculos y accesorios/"),"enable": true}
    }


    let category_name = "juegos y juguetes";

  }
}
