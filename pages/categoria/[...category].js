import React from "react";
import Head from "next/head";
import Category from "../../components/Category/Category";
import { getJwt, getUser, isAuthenticated } from "../../lib/auth";
import CategoryFinding from "../../components/CategoryFinding";
import Tickets from "../../components/Tickets";
import Nav from "../../components/Common/Nav";
import Footer from "../../components/Common/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import "../../components/CategoryList/CategoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import favicon from "../../assets/img/favicon.svg";
import { searchItemsPerPage } from "../../lib/config";
import { handleFormatName } from "../../lib/functions";
import Image from "next/image";

function Results({ data, session }) {
  const router = useRouter();
  const { page } = router.query;
  const currentPath = router.asPath;
  let url = "//www.sic.gov.co";
  var complete = {
    // "deportes y fitness": {
    //     "estructure": [1, 2, 3],
    //     "links": ["Deportes-y-fitness", "Accesorios-deportes-y-aire-libre", "Entrenamiento-de-fitness", "Recreación-en-exteriores", "Deportes-y-acondicionamiento-físico", "Tienda-para-fanáticos-de-los-deportes"],
    //     "image_path": encodeURI("https://kiero.co/images/resources/deportes y fitness/"), "enable": true
    // },

    // "deportes y fitness": {
    //     "estructure": [1, 2, 3],
    //     "links": ["Deportes-y-fitness", "Accesorios-deportes-y-aire-libre", "Entrenamiento-de-fitness", "Recreación-en-exteriores", "Deportes-y-acondicionamiento-físico", "Tienda-para-fanáticos-de-los-deportes"],
    //     "image_path": encodeURI("//127.0.0.1/images/resources/deportes y fitness/"), "enable": true
    // },

    "deportes y fitness": {
      estructure: [1, 2, 3],
      links: [
        "Deportes-y-fitness",
        "Accesorios-deportes-y-aire-libre",
        "Entrenamiento-de-fitness",
        "Recreación-en-exteriores",
        "Deportes-y-acondicionamiento-físico",
        "Tienda-para-fanáticos-de-los-deportes",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/deportes y fitness/"
      ),
      enable: true,
    },

    "animales y mascotas": {
      estructure: [1, 2, 3, 2, 3, 3, 2],
      links: [
        "Animales-y-mascotas",
        "Suministros-para-perros",
        "Suministros-para-gatos",
        "Suministros-para-aves-domésticas",
        "Alimentos-para-mascotas",
        "Centro-de-pulgas-y-garrapatas",
        "Suministros-para-peces",
        "Suministros-para-reptiles-y-anfibios",
        "Alimentos-especiales-para-mascotas",
        "Productos-para-cumpleaños-de-mascotas",
        "Suministros-de-salud-mascotas",
        "Cercado-y-contención-mascotas",
        "Disfraces-de-halloween-para-mascotas",
        "Tecnología-para-mascotas",
        "Suministros-para-animales-pequeños",
        "Suministros-para-caballos",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/animales y mascotas/"
      ),
      enable: true,
    },

    bebés: {
      estructure: [1, 2, 3, 2, 3, 2, 1],
      links: [
        "Bebés",
        "Regalos-para-recién-nacidos",
        "Bacinicas-y-bancos-infantiles",
        "Asientos-y-accesorios-de-carro-para-bebés",
        "Productos-cambio-de-pañales-bebés",
        "Productos-para-embarazo-y-maternidad",
        "Centros-actividad-entretenimiento-bebés",
        "Coches-de-bebés-y-accesorios",
        "Productos-para-el-cuidado-del-bebé",
        "Papelería-para-bebés",
        "Recámara-del-bebé",
        "Productos-de-seguridad-para-bebés",
        "Lactancia-y-alimentación",
        "Artículos-de-viaje-para-bebés",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/bebes/"),
      enable: true,
    },

    belleza: {
      estructure: [1, 2, 3, 3, 1],
      links: [
        "Belleza",
        "Artículos-y-accesorios-de-belleza",
        "Cosméticos-y-maquillaje",
        "Productos-para-el-cuidado-bucal",
        "Cuidado-de-la-piel",
        "Cuidado-de-pies-manos-y-uñas",
        "Cuidado-del-cabello",
        "Productos-de-cuidado-personal",
        "Perfumes-y-fragancias",
        "Productos-de-afeitado-y-depilación",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/belleza/"),
      enable: true,
    },

    "cámaras fotografía y video": {
      estructure: [1, 2, 3, 3, 3, 2, 1],
      links: [
        "Cámaras-fotografía-y-video",
        "Binoculares-telescopios-y-óptica",
        "Accesorios-para-cámara-foto-y-video",
        "Estuches-y-bolsas-para-cámaras",
        "Cámaras-de-vigilancia-simuladas",
        "Flash-de-cámara",
        "Cámaras-digitales",
        "Fotografía-cinematográfica",
        "Iluminación-y-estudio-para-cámaras",
        "Equipo-de-video",
        "Impresoras-y-escáneres",
        "Trípodes-y-monopie-de-cámara",
        "Cámaras-de-fotografía-subacuático",
        "Cámaras-de-vigilancia-y-seguridad",
        "Videocámaras-y-lentes-de-cámara",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/camaras, fotografia y video/"
      ),
      enable: true,
    },

    "celulares y accesorios": {
      estructure: [1, 2],
      links: [
        "Celulares-y-accesorios",
        "Celulares",
        "Accesorios-para-celulares",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/celulares y accesorios/"
      ),
      enable: true,
    },

    "consolas y videojuegos": {
      estructure: [1, 2, 3, 3, 3, 1],
      links: [
        "Consolas-y-videojuegos",
        "Juegos-consolas-y-accesorios-PlayStation-4",
        "Xbox-One",
        "Nintendo Switch",
        "Juegos-y-accesorios-de-PC",
        "Juegos-y-accesorios-para-Mac",
        "Nintendo-3DS-y-2DS",
        "PlayStation-Vita",
        "Sistemas-heredados, juegos-retro",
        "Accesorios-de-Xbox-Serie-X",
        "Accesorios-realidad-virtual-independientes",
        "Juegos-de-Xbox-Serie-X-&-S",
        "Microconsolas-de-videojuegos",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/consolas y videojuegos/"
      ),
      enable: true,
    },

    "electrónica audio y video": {
      estructure: [1, 2, 3, 3, 2, 3, 3, 1],
      links: [
        "Electrónica-audio-y-video",
        "Televisión-y-video",
        "Accesorios-y-suministros-de-electrónica",
        "Contenedores-de-almacenamiento-baterías",
        "Componentes-electrónicos",
        "Dispositivos-y-accesorios-de-Amazon",
        "Electrónica-para-carros-y-vehículos",
        "Lectores-de-libros-digitales-y-accesorios",
        "GPS-buscadores-y-accesorios",
        "Otros-accesorios-de-electrónica",
        "Equipo-de-seguridad-y-vigilancia",
        "Baterías-cargadores-y-accesorios-hogar",
        "Proyectores-de-vídeo",
        "Plan-de-servicio-computadora-electrónica",
        "Portapilas-y-soportes",
        "Transformadores-de-aislamiento",
        "Unidades-de-distribución-energía",
        "Tecnología-vestible",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/electronica audio y video/"
      ),
      enable: true,
    },

    electrodomésticos: {
      estructure: [1, 2, 3, 2],
      links: [
        "Electrodomésticos",
        "Piezas-y-accesorios",
        "Electrodomésticos-de-lavandería",
        "Refrigeradores-y-fabricadores-de-hielo",
        "Trituradores-de-basura-y-compactadores",
        "Garantías-de-electrodomésticos",
        "Cocinas-hornos-y-estufas",
        "Electrodomésticos-del-hogar",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/electrodomesticos/"
      ),
      enable: true,
    },

    herramientas: {
      estructure: [1, 2, 3, 3, 2],
      links: [
        "Herramientas",
        "Almacenamiento-y-organización-del-hogar",
        "Equipo-eléctrico",
        "Electrodomésticos-y-repuestos",
        "Accesorios-para-cocina-y-baño",
        "Herramientas-para-ferretería",
        "Focos-y-bombillas-para-el-hogar",
        "Herramientas-manuales-y-eléctricas",
        "Equipo-de-soldadura",
        "Productos-para-la-construcción",
        "Protección-y-seguridad-para-el-hogar",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/herramientas/"),
      enable: true,
    },

    hogar: {
      estructure: [1, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 1],
      links: [
        "Hogar",
        "Productos-de-baño-hogar",
        "Set-de-toallas-y-toallones-de-baño",
        "Funda-decorativa-para-almohada-de-niño",
        "Alfombras-y-tapetes-para-el-hogar",
        "Aspiradoras-y-cuidado-de-pisos",
        "Cubrecamas-o-mantas-para-cuartos",
        "Cortinas-ganchos-y-forros-de-ducha",
        "Artículos-de-uso-doméstico",
        "Calefacción-enfriamiento-y-calidad-del-aire",
        "Ropa-de-cama-doméstico",
        "Cubrecolchones",
        "Difusores-y-fragancias-para-el-hogar",
        "Entrepaños-flotantes-para-el-hogar",
        "Equipos-para-café-té-y-exprés",
        "Espejos",
        "Mejoras-del-hogar",
        "Colecciones-de-ropa-de-cama",
        "Muebles-para-el-hogar",
        "Obras-de-arte-y-material-decorativo",
        "Organizador-almacenamiento-en-el-hogar",
        "Controladores-de-riego-automático",
        "Protectores-y-cubrealmohadas",
        "Relojes-de-hogar",
        "Tienda-infantil-para-el-hogar",
        "Otros-productos-hogar",
        "Suministros-de-papelería-y-envoltura-de-regalos",
        "Suministros-para-eventos-y-fiestas",
        "Cocina-y-comedor",
        "Decoración-de-temporada",
        "Accesorios-decorativos",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/hogar/"),
      enable: true,
    },

    "instrumentos musicales": {
      estructure: [1, 2, 3, 3, 2, 3, 1],
      links: [
        "Instrumentos-musicales",
        "Instrumentos-musicales-de-banda-y-orquesta",
        "Bajos-musicales",
        "Música-electrónica-DJ-y-karaoke",
        "Equipo-de-grabación-de-estudio",
        "Guitarras",
        "Accesorios-para-instrumentos-musicales",
        "Micrófonos-de-grabación-y-accesorios",
        "Equipo-de-escenario-y-sonido-en-vivo",
        "Instrumentos-musicales-de-cuerda",
        "Tambores-y-percusiones",
        "Ukeleles-mandolinas-y-banjos",
        "Instrumentos-musicales-de-viento-y-madera",
        "Amplificadores-y-efectos",
        "Teclados-y-MIDI",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/instrumentos musicales/"
      ),
      enable: true,
    },

    "juguetes y juegos": {
      estructure: [1, 2, 3, 3, 2, 3, 3, 2, 1],
      links: [
        "Juguetes-y-juegos",
        "Juguetes-y-deportes-al-aire-libre",
        "Juguetes-de-aprendizaje-y-educación",
        "Artículos-para-fiesta",
        "Bicicletas-triciclos-y-carritos",
        "Juguetes-y-juegos-coleccionables",
        "Figuras-y-sets-de-juegos",
        "Juegos-y-accesorios",
        "Juegos-de-imitación",
        "Juguetes-novedosos-y-de-broma",
        "Juguetes-para-bebés-y-niños-pequeños",
        "Vehículos-de-juguete-y-control-remoto",
        "Muebles-decoración-y-almacenamiento-niños",
        "Muñecas-y-accesorios",
        "Pasatiempos",
        "Juguetes-y-animales-de-peluche",
        "Rompecabezas",
        "Juguetes-electrónicos",
        "Juguetes-de-construcción",
        "Títeres-y-teatros-de-títeres",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/juguetes y juegos/"
      ),
      enable: true,
    },

    "relojes y joyería": {
      estructure: [1, 2, 2, 2],
      links: [
        "Relojes-y-joyería",
        "Accesorios-para-relojes",
        "Joyería",
        "Reloj-para-hombre",
        "Reloj-para-mujer",
        "Relojes-para-niña",
        "Relojes-para-niño",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/relojes y joyeria/"
      ),
      enable: true,
    },

    // "ropa,-calzados-y-accesorios": {
    //     "estructure": [1, 2, 2, 2],
    //     "links": ["Ropa,-calzados-y-accesorios", "Ropa-para-mujeres", "Moda-para-hombres", "Moda-para-niñas", "Moda-para-niños", "Ropa-para-bebés", "Ropa-y-zapatos-para-niños-"],
    //     "image_path": encodeURI("https://kiero.co/images/resources/ropa/"), "enable": true
    // },
    // "ropa-calzados-y-accesorios": {
    //     "estructure": [1, 2, 2, 2],
    //     "links": ["Ropa,-calzados-y-accesorios", "Ropa-para-mujeres", "Moda-para-hombres", "Moda-para-niñas", "Moda-para-niños", "Ropa-para-bebés", "Ropa-y-zapatos-para-niños-"],
    //     "image_path": encodeURI("https://kiero.co/images/resources/ropa/"), "enable": true
    // },
    "ropa calzado y accesorios": {
      estructure: [1, 2, 3, 3, 2, 1],
      links: [
        "Ropa-calzado-y-accesorios",
        "Moda-para-hombres",
        "Moda-para-mujeres",
        "Tiendas-para-niñas",
        "Disfraces-y-accesorios-para-todo-género",
        "Accesorios para zapatos y relojes",
        "Ropa-para-bebés",
        "Novedades-y-de-uso-especial",
        "Uniformes-trabajo-y-seguridad",
        "Moda-para-niños",
        "Moda-para-niñas",
        "Equipaje-y-equipo-de-viaje",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/ropa calzado y accesorios/"
      ),
      enable: true,
    },

    vehículos: {
      estructure: [1, 2, 3, 3, 2, 3, 3, 1],
      links: [
        "Vehículos",
        "Accesorios-exteriores-para-carro",
        "Accesorios-interiores-para-carro",
        "Neumáticos-y-rines-para-carro",
        "Aceites-y-fluidos-para-carro",
        "Cuidado-de-carro-y-moto",
        "Equipo-de-carros-comerciales-y-uso-pesado",
        "Luces-bombillas-e-indicadores",
        "Motos-accesorios-y-piezas",
        "Piezas-de-repuestos-para-carro",
        "Herramientas-para-carro",
        "Otros-accesorios-de-vehículos",
        "Piezas-y-repuestos-para-caravanas",
        "Pintura-y-suministros-de-pintura-carro",
        "Artículos-para-aficionados-de-vehículos",
        "Accesorios-para-remolques",
        "Electrónica-y-accesorios-para-carros",
        "Repuestos-y-accesorios-rendimiento-carro",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/vehiculos/"),
      enable: true,
    },

    "computadoras y accesorios": {
      estructure: [1, 2, 3, 3, 2, 1],
      links: [
        "Computadoras-y-Accesorios",
        "Computadoras-y-tabletas",
        "Monitores-de-computadoras",
        "Componentes-para-computadoras",
        "Almacenamiento-de-datos-para-computador",
        "Accesorios-para-tablets",
        "Piezas-y-repuestos-para-tablets",
        "Garantías-de-equipos-informáticos",
        "Servidores-para-computadora",
        "Dispositivos-para-redes-de-computadoras",
        "Accesorios-y-periféricos-informáticos",
        "Accesorios-para-laptop",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/computadoras y accesorios/"
      ),
      enable: true,
    },

    salud: {
      estructure: [1, 2, 3, 3],
      links: [
        "Salud",
        "Cuidado-de-la-salud",
        "Equipo-y-suministros-médicos",
        "Cuidado-de-bebés-y-niños",
        "Productos-de-bienestar-y-relajación",
        "Productos-para-cuidado-de-los-ojos",
        "Nutrición-deportiva",
        "Productos-relacionados-con-el-tabaco",
        "Vitaminas-y-suplementos-dietéticos",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/salud/"),
      enable: true,
    },

    "industria y científico": {
      estructure: [1, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 1],
      links: [
        "industria y científico",
        "Accesorios-y-equipos-de-tiendas-minoristas",
        "Cintas-adhesivos-y-sellantes",
        "Productos-de-laboratorio-y-ciencias",
        "Equipo-industrial",
        "Equipo-y-suministros-para-servicio",
        "Filtración-industrial",
        "Herramientas-de-corte",
        "Herramientas-eléctricas-y-de-mano",
        "Productos-de-iluminación-comercial",
        "Industrial-y-eléctrico",
        "Materias-primas",
        "Hidráulica-neumática-y-plomería",
        "Higiene-y-seguridad-laboral",
        "Productos-abrasivos-y-de-acabado",
        "Medición-y-test-industrial",
        "Productos-de-laboratorio-y-ciencias",
        "Señalización-digital",
        "Sujetadores",
        "Productos-para-manipulación-de-materiales",
        "Productos-de-puertas-comerciales",
        "Productos-de-transmisión-de-energía",
        "Robótica",
        "Suministros-de-empaque-y-envío",
        "Suministros-de-limpieza-y-saneamiento",
        "Suministros-médicos-profesionales",
        "Productos-para-impresión-3D",
        "Suministros-dentales-profesionales",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/industria y científico/"
      ),
      enable: true,
    },

    "artes y manualidades": {
      estructure: [1, 2, 3, 3, 2, 1],
      links: [
        "Artes-y-manualidades",
        "Artes-y-manualidades-para-niños",
        "Materiales-para-arte-y-manualidades",
        "Almacenamiento-de-materiales-de-arte",
        "Cuentas-y-adornos-elaboración-bisutería",
        "Productos-de-costura",
        "Telas-para-manualidades",
        "Suministro-de-punto-y-ganchillo",
        "Suministros-para-álbumes-de-recortes",
        "Artículos-para-pintura-dibujo-y-arte",
        "Suministros-de-grabado",
        "Suministros-de-tejido-y-costura",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/artes y manualidades/"
      ),
      enable: true,
    },

    "artesanías y productos hechos a mano": {
      estructure: [1, 2, 1],
      links: [
        "Artesanías-y-productos-hechos-a-mano",
        "Artículos-hechos-a-mano-para-boda",
        "Decoración-hogar-hecha-a-mano",
        "Utensilios-para-hornear-hechos-a-mano",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/artesanias y productos hechos a manos/"
      ),
      enable: true,
    },

    "coleccionables y bellas artes": {
      estructure: [1, 2, 3, 3],
      links: [
        "Coleccionables-y-bellas-artes",
        "Arte-coleccionable-y-bellas-artes",
        "Artículos-de-deportes-coleccionables",
        "Accesorios-coleccionables-de-hockey",
        "Accesorios-recuerdos-históricos-y-políticos",
        "Cascos-coleccionables-de-fútbol",
        "Entretenimiento-coleccionable",
        "Monedas-coleccionables",
        "Tarjetas-coleccionables-de-béisbol",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/coleccionables y bellas artes/"
      ),
      enable: true,
    },

    libros: {
      estructure: [1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 1],
      links: [
        "Libros",
        "Libros-de-autoayuda",
        "Libros-de-calendarios",
        "Libros-de-adolescente-y-jóvenes",
        "Libros-de-artesanía-hobbies-y-hogar",
        "Libros-de-arte-y-fotografía",
        "Libros-de-biografías-y-memorias",
        "Libros-de-ciencia-ficción-y-fantasía",
        "Libros-de-ciencia-y-matemáticas",
        "Libros-de-cómics-y-novelas-gráficas",
        "Libros-de-crianza-y-relaciones",
        "Libros-de-cristianismo",
        "Libros-de-computadoras-y-tecnología",
        "Libros-de-negocios-e-inversiones",
        "Libros-deportes-y-tiempo-libre",
        "Libros-de-educación-y-enseñanza",
        "Libros-de-LGBTQ",
        "Libros-de-humor-y-entretenimiento",
        "Libros-de-ingeniería-y-transportes",
        "Libros-derecho",
        "Libros-de-medicina-y-médicos",
        "Libros-de-viaje",
        "Libros-de-misterio-thriller-y-suspenso",
        "Libros-de-recetas-comida-y-vino",
        "Libros-de-infantil-y-juvenil",
        "Libros-de-política-y-ciencias-sociales",
        "Libros-de-preparación-para-pruebas",
        "Libros-de-referencias",
        "Libros-de-religión-y-espiritualidad",
        "Libros-de-romance",
        "Libros-de-salud-fitness-y-dieta",
        "Libros-de-literatura-y-ficción",
      ],
      image_path: encodeURI("https://kiero.co/images/resources/libros/"),
      enable: true,
    },

    "productos y suministros de oficina": {
      estructure: [1, 2, 1],
      links: [
        "Productos-y-suministros-de-oficina",
        "Electrónicos-de-oficina",
        "Productos-de-oficina",
        "Suministros-escolares-y-de-oficina",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/productos y suministros de oficina/"
      ),
      enable: true,
    },

    "jardín y exteriores": {
      estructure: [1, 2, 3, 2, 1],
      links: [
        "Jardín-y-exteriores",
        "Herramientas-eléctricas-para-exterior",
        "Calefacción-exterior",
        "Almacenamiento-y-vivienda-al-aire-libre",
        "Cuidado-del-césped",
        "Generadores-y-energía-portátil",
        "Albercas-jacuzzis-y-suministros",
        "Agricultura-urbana-y-ganadería",
        "Patio-césped-y-jardín",
      ],
      image_path: encodeURI(
        "https://kiero.co/images/resources/jardin y exteriores/"
      ),
      enable: true,
    },
  };

  let category_name = data.search.toLowerCase();

  let structure = [];
  const e = complete[category_name];

  if (category_name in complete) {
    // console.log(category_name);
    let bannerNo = 1;
    for (let i = 0; i < e.estructure.length; i++) {
      if (e.estructure[i] === 1) {
        if (e.links[bannerNo - 1] !== "") {
          structure.push(
            // <Link href={"/categoria/[category]"} as={"/categoria/" + e.links[bannerNo - 1]} ></Link>
            // <Link
            //   key={i}
            //   href={"/categoria/[...category]"}
            //   as={
            //     "/categoria/" +
            //     e.links[bannerNo - 1]
            //       .replace(/^[, ]+|[, ]+$|[, ]+/g, "-")
            //       .trim()
            //       .toLowerCase()
            //   }
            // >
            <a
              key={i}
              href={
                "/categoria/" +
                e.links[bannerNo - 1]
                  .replace(/^[, ]+|[, ]+$|[, ]+/g, "-")
                  .trim()
                  .toLowerCase()
              }
              className="tickets"
            >
              <div className="anullProperties">
                <Image
                  layout="fill"
                  alt={category_name}
                  key={i + 1}
                  className="banner-principal"
                  src={
                    e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
                    bannerNo++ +
                    ".webp"
                  }
                />
              </div>
            </a>
            // </Link>
          );
        } else {
          structure.push(
            <div className="anullProperties">
              <Image
                layout="fill"
                alt={category_name}
                key={i}
                className="banner-principal"
                src={
                  e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
                  bannerNo++ +
                  ".webp"
                }
              />
            </div>
          );
        }
      } else if (e.estructure[i] === 2) {
        structure.push(
          <CategoryFinding
            key={i}
            img_left={
              e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
              bannerNo++ +
              ".webp"
            }
            link_left={e.links[bannerNo - 2]}
            img_right={
              e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
              bannerNo++ +
              ".webp"
            }
            link_right={e.links[bannerNo - 2]}
          />
        );
      } else if (e.estructure[i] === 3) {
        structure.push(
          <Tickets
            key={i}
            img_left={
              e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
              bannerNo++ +
              ".webp"
            }
            link_left={e.links[bannerNo - 2]}
            img_center={
              e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
              bannerNo++ +
              ".webp"
            }
            link_center={e.links[bannerNo - 2]}
            img_right={
              e.image_path.replace(/^[, ]+|[, ]+$|[, ]+/g, "").trim() +
              bannerNo++ +
              ".webp"
            }
            link_right={e.links[bannerNo - 2]}
          />
        );
      }
    }

    return (
      <>
        <Head>
          <title>Kiero | Categorías</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>
            Compra en Kiero.co Marketplace | {handleFormatName(category_name)}
          </title>
          <meta
            name="Title"
            content={
              "Compra en Kiero.co Marketplace | " +
              handleFormatName(category_name)
            }
          />
          <meta
            name="Description"
            content={
              "KIERO.CO Marketplace | Encuentra " +
              handleFormatName(category_name) +
              " en Kiero.co - Descubre millones de productos online"
            }
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="robots" content="index,follow" />
          <meta name="robots" content="noodp" />
          <meta name="robots" content="noydir" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="google" content="notranslate" />
          <meta
            name="twitter: card"
            content={
              "Encuentra todo lo relacionado con productos de " +
              handleFormatName(category_name) +
              " en kiero.co"
            }
          />
          <meta name="twitter: site" content="@kierogroup1" />
          <meta
            name="twitter: title"
            content=" Compra en Kiero todo lo encuentras en nuestra Tienda Online"
          />
          <meta
            name="twitter: description"
            contenido={
              "Envíos gratis en Colombia - Encuentra productos de " +
              handleFormatName(category_name) +
              " en Kiero.co - Descubre millones de productos online."
            }
          />
          <meta
            name="twitter: image"
            content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg"
          />
          <meta
            property="og:title"
            content={
              "Compra " +
              handleFormatName(category_name) +
              " en Kiero.co Encuentra los mejores productos de " +
              handleFormatName(category_name) +
              "en Kiero.co"
            }
          />
          <meta
            property="og:description"
            content={
              "Envíos gratis en Colombia - Encuentra productos de " +
              handleFormatName(category_name) +
              " en Kiero.co - Descubre millones de productos online."
            }
          />
          <meta property="og:url" content="url de listado" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Kiero.co" />
          <meta
            property="og:image"
            content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"
          />
          <link rel="icon" href={favicon} type="image/png" />
        </Head>

        <div className="container category-list">
          <Nav
            jwt={session.jwt}
            user={session.user}
            home={true}
            authenticated={session.authenticated}
          />
          <section className="content">
            <div className="breadcrumb">
              <Link href="/">
                <a>Inicio</a>
              </Link>
              <FontAwesomeIcon icon={faAngleRight} />
              {/* <Link href="/categoria/[category]" as={"/categoria/" + category_name}> */}
              <a href={"/categoria/" + category_name}>
                {category_name.replace(/-/g, " ")}
              </a>
            </div>
            {structure}
          </section>
          <Footer />
          <div className="footer-social">
            <Link href={url}>
              <a target="_blank">
                <div className="anullProperties">
                  <Image layout="fill" alt={url} src={Logo1} />
                </div>
              </a>
            </Link>
            <Link href={url}>
              <a target="_blank">
                <div className="anullProperties">
                  <Image layout="fill" alt={url} src={Logo2} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <Head>
          <title>Kiero | Categorías</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>
            Compra en Kiero.co Marketplace | {handleFormatName(category_name)}
          </title>
          <meta
            name="Title"
            content={
              "Compra en Kiero.co Marketplace | " +
              handleFormatName(category_name)
            }
          />
          <meta
            name="Description"
            content={
              "KIERO.CO Marketplace | Encuentra " +
              handleFormatName(category_name).substring(0, 40) +
              " en Kiero.co - Descubre millones de productos online".substring(
                0,
                159
              )
            }
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="robots" content="index,follow" />
          <meta name="robots" content="noodp" />
          <meta name="robots" content="noydir" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="google" content="notranslate" />
          <meta
            name="twitter: card"
            content={
              "Encuentra todo lo relacionado con productos de " +
              handleFormatName(category_name) +
              " en kiero.co"
            }
          />
          <meta name="twitter: site" content="@kierogroup1" />
          <meta
            name="twitter: title"
            content=" Compra en Kiero todo lo encuentras en nuestra Tienda Online"
          />
          <meta
            name="twitter: description"
            contenido={
              "Envíos gratis en Colombia - Encuentra productos de " +
              handleFormatName(category_name) +
              " en Kiero.co - Descubre millones de productos online."
            }
          />
          <meta
            name="twitter: image"
            content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg"
          />
          <meta
            property="og:title"
            content={
              "Compra " +
              handleFormatName(category_name) +
              " en Kiero.co Compra Portatiles y accesorios en Kiero.co "
            }
          />
          <meta
            property="og:description"
            content={
              "Encuentra " +
              handleFormatName(category_name) +
              " en Kiero.co - Descubre millones de p roductos online. Encuentra Portatiles y accesorios en Kiero.co "
            }
          />
          <meta property="og:url" content="url de listado" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Kiero.co" />
          <meta
            property="og:image"
            content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"
          />
          <link rel="icon" href={favicon} type="image/png" />
        </Head>
        <Category
          data={data}
          user_data={session}
          page={page}
          path={currentPath}
        />
        {/* {console.log("category",data)} */}
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  var dataFirstUpperCase = String(context.params.category).split("", 1);
  var dataCategoryName = String(context.params.category).slice(1);
  // console.log(String(dataFirstUpperCase[0].toUpperCase()) + dataCategoryName.replace(/-/g, " "))
  const data = {
    type: "category",
    // "search": String(context.params.category),
    // search: String(context.params.category).replace(/-/g, " "),
    search:
      String(dataFirstUpperCase[0].toUpperCase()) +
      dataCategoryName.replace(/-/g, " "),
    params: {
      items_per_page: searchItemsPerPage,
      price_range: "",
      order: "desc",
    },
  };

  let usr = getUser(context);
  let jwt = getJwt(context);

  const session = {
    user: usr !== undefined ? usr : null,
    authenticated: isAuthenticated(context),
    jwt: jwt !== undefined ? jwt : null,
  };

  return { props: { data, session } };
}

export default Results;
