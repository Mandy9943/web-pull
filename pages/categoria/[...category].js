import React from 'react';
import Head from 'next/head';
import Category from '../../components/Category/Category';
import { getUser, isAuthenticated } from "../../lib/auth";
import Finding from "../../components/Finding";
import Tickets from "../../components/Tickets";
import Nav from "../../components/Common/Nav";
import Footer from "../../components/Common/Footer";
import Link from "next/link";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import "../../components/CategoryList/CategoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";


function Results({ data, session }) {
    let url = "//www.sic.gov.co";
    var complete = {
        "deportes y fitness": {
            "estructure": [1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
            "links": ["", "Gafas%20de%20Sol", "Ropa%20deportiva", "Rugby", "Tenis%20y%20raquetas", "Yoga", "Suministros%20y%20equipo%20médico", "Snowboard", "Voleibol", "Airsoft%20y%20Paintball", "Fútbol", "Artes%20Marciales", "Béisbol%20y%20softball", "Bocce", "Ciclismo", "Camping", "Buceo%20y%20snorkel", "Canotaje", "Cricket", "Correr", "Natación", "Deportes%20ecuestres", "Navegación", "Nutrición%20deportiva", "Canotaje", "Entrenamiento%20cardiovascular%20y%20de%20fuerza", "Hockey", "Juegos%20al%20aire%20libre", "Juegos%20de%20lanzamiento", "Accesorios%20deportivos", "Escalada", "Equipo%20de%20casino", "Esgrima", "Fan%20Shop", "Gimnasia", "Golf", "Arcade%20y%20juegos%20de%20mesa", "Baile", "Bebidas%20en%20botella", "Baloncesto", "Boxeo", "Bolos", "Brújulas%20y%20odómetros", "Danza", "Juegos%20de%20sala", "Caza%20y%20pesca", "Esquí", "Ropa%20al%20aire%20libre", "Waterpolo", "Surf", "Billar", "Dardos", "Entrenadoresy%20árbitros", "Lacrosse", "Lucha%20deportiva", "Medicina%20deportiva", "Tienda%20para%20fanáticos", "Equipo%20de%20campo,%20cancha%20y%20pista", "Salud%20y%20bienestar"],
            "image_path": encodeURI("//kiero.co/images/resources/deportes y fitness/"), "enable": true
        },

        "animales y mascotas": {
            "estructure": [1, 3, 2, 3, 1],
            "links": ["", "Comida%20para%20animales%20", "Estetica%20y%20cuidado%20para%20animales%20", "Aves", "Roedores", "Gatos", "Reptiles%20y%20anfibios", "Caballos", "Peces", "Perros"],
            "image_path": encodeURI("//kiero.co/images/resources/animales y mascotas/"), "enable": true
        },

        "bebés": {
            "estructure": [1, 2, 3, 2, 3, 2, 1],
            "links": ["", "Ropa%20para%20Bebés", "Caminadores%20y%20Correpasillos", "Cuarto%20del%20Bebé", "Higiene%20y%20cuidado%20del%20bebé", "Lactancia%20y%20Alimentación", "Entretenimiento%20para%20Bebés", "Paseo%20del%20Bebé", "Salud%20del%20bebé%20", "Seguridad%20para%20bebés", "Artículos%20de%20maternidad", "Corrales%20para%20bebés", "Chupetes%20y%20mordedores", "Art%C3%ADculos%20para%20Beb%C3%A9s"],
            "image_path": encodeURI("//kiero.co/images/resources/bebes/"), "enable": true
        },

        "belleza y cuidado personal": {
            "estructure": [1, 2, 3, 2, 3, 2],
            "links": ["", "electrodomesticos%20de%20belleza", "extensiones%20y%20pelucas", "higiene%20personal", "Articulos%20de%20peluqueria", "cuidado%20del%20cuerpo", "maquillaje", "depilación", "perfumes%20y%20fragancias", "cuidado%20del%20cabello", "cuidado%20de%20la%20piel", "barbería", "manicure%20y%20pedicure"],
            "image_path": encodeURI("//kiero.co/images/resources/belleza y cuidado personal/"), "enable": true
        },

        "cámaras y accesorios": {
            "estructure": [1, 2, 3, 2],
            "links": ["", "Camaras", "accesorios%20para%20cámaras", "memorias%20digitales", "bater%C3%ADas%20y%20cargadores", "video", "binoculares%20y%20telescopios", "videoc%C3%A1maras"],
            "image_path": encodeURI("//kiero.co/images/resources/camaras y accesorios/"), "enable": true
        },

        "celulares y teléfonos": {
            "estructure": [1, 2, 3, 2],
            "links": ["", "celulares", "smartwatch", "tel%C3%A9fonos", "accesorios", "Memorias%20para%20Celular", "radios", "estuches%20y%20fundas"],
            "image_path": encodeURI("//kiero.co/images/resources/celulares y telefonos/"), "enable": true
        },

        "consolas y videojuegos": {
            "estructure": [1, 2, 3, 2, 3, 2, 2],
            "links": ["", "playstation", "xbox", "atari", "game%20boy", "nvidia%20shield", "Otros", "sony%20psp", "sega", "playstation%20vita", "GameCube  ", "nintendo", "mac", "juegos", "accesorios"],
            "image_path": encodeURI("//kiero.co/images/resources/consolas y videojuegos/"), "enable": true
        },

        "electrónica": {
            "estructure": [1, 2, 3, 2, 3, 2, 3, 2, 1],
            "links": ["", "audio%20para%20el%20hogar", "audio%20profesional%20y%20djs", "audio%20portátil", "accesorios%20de%20audio%20y%20video", "reproductores%20blu-ray", "drones%20y%20accesorios", "televisores", "video%20beams%20y%20pantallas", "//kiero.co/busqueda/pilas,%20bater%C3%ADas%20y%20cargadores", "Palms,%20Agendas%20y%20Accesorios", "//kiero.co/busqueda/reproductores%20mp3%20y%20mp4", "ipod", "lectores%20de%20libros%20digitales%20y%20accesorios", "componentes%20electronicos", "equipos%20de%20seguridad", "dvd", "calculadoras", "gps"],
            "image_path": encodeURI("//kiero.co/images/resources/electronica audio y video/"), "enable": true
        },

        "herramientas": {
            "estructure": [1, 2, 3, 2],
            "links": ["", "construcci%C3%B3n", "herramientas", "herramientas%20manuales", "herramientas%20el%C3%A9ctricas", "Pisos,%20Paredes%20y%20Aberturas", "mobiliario%20para%20cocinas", "mobiliario%20para%20ba%C3%B1os"],
            "image_path": encodeURI("//kiero.co/images/resources/herramientas y construccion/"), "enable": true
        },

        "hogar y muebles": {
            "estructure": [1, 2, 3, 2, 1],
            "links": ["", "muebles", "cocina%20y%20comedor", "ba%C3%B1o", "jardines%20y%20exteriores", "muebles%20de%20acento", "alcobas", "decoracion%20del%20hogar", "Artículos%20para%20el%20hogar"],
            "image_path": encodeURI("//kiero.co/images/resources/hogar y muebles/"), "enable": true
        },

        "industrias y oficinas": {
            "estructure": [1, 2, 3, 2],
            "links": ["", "equipamiento%20para%20oficinas", "industria%20gastron%C3%B3mica", "m%C3%A1quinas%20para%20industrias", "Embalajes", "equipo%20hidr%C3%A1ulico", "industria%20textil", "seguridad%20para%20industrias"],
            "image_path": encodeURI("//kiero.co/images/resources/industrias y oficinas/"), "enable": true
        },

        "instrumentos musicales": {
            "estructure": [1, 2, 3, 2],
            "links": ["", "instrumentos%20de%20cuerda", "instrumentos%20de%20viento", "micr%C3%B3fonos", "accesorios", "amplificadores", "bater%C3%ADas%20y%20percusi%C3%B3n", "teclados%20y%20pianos"],
            "image_path": encodeURI("//kiero.co/images/resources/instrumentos musicales/"), "enable": true
        },

        "juegos y juguetes": {
            "estructure": [1, 2, 3, 2, 3, 2, 3, 2, 3, 3],
            "links": ["", "disfraces%20y%20juegos%20de%20fantas%C3%ADa", "peluches", "Juguetes%20y%20Carros%20de%20Control%20Remoto", "electr%C3%B3nica%20para%20ni%C3%B1os", "juegos%20al%20aire%20libre", "arte%20y%20manualidades", "Juguetes%20de%20construcción", "aprendizaje%20y%20educaci%C3%B3n", "articulos%20para%20fiestas", "juguetes%20montables", "juegos%20de%20imitaci%C3%B3n", "juegos%20estrat%C3%A9gicos", "Juegos%20de%20Adultos", "Juguetes%20de%20Novedad", "mu%C3%B1ecas", "Juguetes%20para%20Bebes%20y%20Niños", "rompecabezas", "figuras%20de%20acci%C3%B3n%20y%20estatuas", "juegos%20y%20veh%C3%ADculos", "hobbies", "titeres", "mochilas%20y%20loncheras", "pasatiempos"],
            "image_path": encodeURI("//kiero.co/images/resources/juegos y juguetes/"), "enable": true
        },

        "relojes y joyas": {
            "estructure": [1, 3, 2, 3, 2, 3, 1],
            "links": ["", "relojes%20de%20pulsera", "relojeras", "Accesorios%20Para%20Relojes", "joyeria", "smartwatch", "relojes%20digitales", "relojes%20de%20bolsillo", "Relojes%20Cuarzo", "relojes%20deportivos", "relojes%20de%20cuero", "relojes%20casuales", "relojes%20de%20acero%20inoxidable", "relojes%20analogicos", "marcas"],
            "image_path": encodeURI("//kiero.co/images/resources/relojes y joyas/"), "enable": true
        },

        "ropa zapatos y accesorios": {
            "estructure": [1, 2, 2],
            "links": ["", "ropa%20y%20accesorios%20para%20ni%C3%B1os", "ropa%20y%20accesorios%20para%20ni%C3%B1as", "ropa%20y%20accesorios%20para%20mujeres", "ropa%20y%20accesorios%20para%20hombres"],
            "image_path": encodeURI("//kiero.co/images/resources/ropa,zapatos y accesorios/"), "enable": true
        },

        "accesorios para vehiculos": {
            "estructure": [1, 2, 3, 2, 3, 2],
            "links": ["", "Repuestos%20para%20Carro", "audio%20para%20carro", "accesorios%20para%20aviones", "Afinación%20y%20Rendimiento%20para%20Carro", "accesorios%20para%20carro", "herramientas%20para%20carro", "Repuestos%20para%20Carro", "accesorios%20de%20exterior%20para%20carro", "accesorios%20de%20interior%20para%20carro", "accesorios%20para%20moto", "llantas", "Repuestos%20para%20Moto"],
            "image_path": encodeURI("//kiero.co/images/resources/vehiculos y accesorios/"), "enable": true
        },
        "computación": {
            "estructure": [1,2,3,2,3,2,3,2,3,1],
            "links": ["","Tablets%20y%20accesorios", "Apple", "Discos%20Duros%20y%20Externos", "Fuentes,%20UPS%20y%20Estabilizadores", "Memorias%20Portátiles%20USB", "Monitores", "Servidores", "Software%20y%20complementos%20de%20audio%20para%20computadora", "Aspiradoras%20para%20computadoras", "Productos%20de%20red", "Componentes%20de%20computadora", "Accesorios%20para%20Portátiles", "Software", "All%20In%20One", "Medios%20en%20blanco", "Repuestos%20de%20tableta", "Periféricos%20y%20Accesorios%20de%20PC", "Impresoras%20y%20Repuestos", "Computadoras", "Almacenamiento%20de%20datos", "Accesorios%20para%20tableta"],
            "image_path": encodeURI("//kiero.co/images/resources/computacion/"), "enable": true
        },
        "salud": {
            "estructure": [1,2,3,2,3,2,3,2,3,2],
            "links": ["","Cuidado%20de%20la%20Salud", "Equipamiento%20Odontologico", "Lupas", "Utensilios%20y%20Accesorias%20para%20Camas", "Camillas%20Hospitalarias", "Material%20de%20Laboratorio", "Ortopedia", "Pruebas%20caseras", "Barandales%20para%20camas", "Duchas%20Hospitalarias", "Instrumental%20Medico", "Equipos%20de%20Monitoreo", "Fajas%20Y%20Cinturillas", "Indumentaria", "Masajes", "Suplementos%20Alimenticios", "Suministros%20y%20equipo%20médico", "Vitaminas%20y%20suplementos%20dietéticos", "Cupulas", "Test%20Medicos", "Terapias", "Tanques%20de%20Oxigeno"],
            "image_path": encodeURI("//kiero.co/images/resources/salud y equipo medico/"), "enable": true
        }
    }

    let category_name = data.search.toLowerCase();

    let structure = [];
    const e = complete[category_name];

    if (category_name in complete) {
        let bannerNo = 1;
        for (let i = 0; i < e.estructure.length; i++) {

            if (e.estructure[i] === 1) {
                structure.push(<img alt={category_name} key={i} className="banner-principal" src={e.image_path + (bannerNo++) + ".jpg"} />)
            } else if (e.estructure[i] === 2) {
                structure.push(<Finding key={i} img_left={e.image_path + (bannerNo++) + ".jpg"} link_left={e.links[bannerNo - 2]}
                    img_right={e.image_path + (bannerNo++) + ".jpg"} link_right={e.links[bannerNo - 2]} />);
            } else if (e.estructure[i] === 3) {
                structure.push(<Tickets key={i}
                    img_left={e.image_path + (bannerNo++) + ".jpg"} link_left={e.links[bannerNo - 2]}
                    img_center={e.image_path + (bannerNo++) + ".jpg"} link_center={e.links[bannerNo - 2]}
                    img_right={e.image_path + (bannerNo++) + ".jpg"} link_right={e.links[bannerNo - 2]} />)
            }
        }


        return (
            <>
                <Head>
                    <title>Kiero | Categorías</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <title>Compra en Kiero.co Marketplace | {category_name}</title>
                    <meta name="Title" content={"Compra en Kiero.co Marketplace | " + category_name} />
                    <meta name="Description" content={"KIERO.CO Marketplace | Encuentra " + category_name + " en Kiero.co - Descubre millones de productos online"} />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="google" content="notranslate" />
                    <meta name="twitter: card" content={"Encuentra todo lo relacionado con productos de " + category_name + " en kiero.co"} />
                    <meta name="twitter: site" content="@kierogroup1" />
                    <meta name="twitter: title" content=" Compra en Kiero todo lo encuentras en nuestra Tienda Online" />
                    <meta name="twitter: description" contenido={"Envíos gratis en Colombia - Encuentra productos de " + category_name + " en Kiero.co - Descubre millones de productos online."} />
                    <meta name="twitter: image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg" />
                    <meta property="og:title" content={"Compra " + category_name + " en Kiero.co Compra Portatiles y accesorios en Kiero.co "} />
                    <meta property="og:description" content={"Encuentra " + category_name + " en Kiero.co - Descubre millones de p roductos online. Encuentra Portatiles y accesorios en Kiero.co "} />
                    <meta property="og:url" content="url de listado" />
                    <meta property='og:locale' content='es_ES' />
                    <meta property='og:type' content='website' />
                    <meta property='og:site_name' content='Kiero.co' />
                    <meta property="og:image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"/>
                </Head>

                <div className="container category-list">
                    <Nav user={session.user} home={true} authenticated={session.authenticated} />
                    <section className="content">
                        <div className="breadcrumb">
                            <Link href="/">
                                <a>
                                    Inicio
                                </a>
                            </Link>
                            <FontAwesomeIcon icon={faAngleRight} />
                            <Link href="/categoria/[category]" as={"/categoria/" + category_name}>
                                <a>
                                    {category_name}
                                </a>
                            </Link>
                        </div>
                        {
                            structure
                        }

                    </section>
                    <Footer />
                    <div className="footer-social">
                        <Link  href={url}><a target="_blank"><img alt={url} src={Logo1} /></a></Link>
                        <Link href={url}><a target="_blank"><img alt={url} src={Logo2} /></a></Link>
                    </div>
                </div>
            </>
        );
    } else {

        return (
            <div>
                <Head>
                    <title>Kiero | Categorías</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <title>Compra en Kiero.co Marketplace | {category_name}</title>
                    <meta name="Title" content={"Compra en Kiero.co Marketplace | " + category_name} />
                    <meta name="Description" content={"KIERO.CO Marketplace | Encuentra " + category_name + " en Kiero.co - Descubre millones de productos online"} />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="google" content="notranslate" />
                    <meta name="twitter: card" content={"Encuentra todo lo relacionado con productos de " + category_name + " en kiero.co"} />
                    <meta name="twitter: site" content="@kierogroup1" />
                    <meta name="twitter: title" content=" Compra en Kiero todo lo encuentras en nuestra Tienda Online" />
                    <meta name="twitter: description" contenido={"Envíos gratis en Colombia - Encuentra productos de " + category_name + " en Kiero.co - Descubre millones de productos online."} />
                    <meta name="twitter: image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg" />
                    <meta property="og:title" content={"Compra " + category_name + " en Kiero.co Compra Portatiles y accesorios en Kiero.co "} />
                    <meta property="og:description" content={"Encuentra " + category_name + " en Kiero.co - Descubre millones de p roductos online. Encuentra Portatiles y accesorios en Kiero.co "} />
                    <meta property="og:url" content="url de listado" />
                    <meta property='og:locale' content='es_ES' />
                    <meta property='og:type' content='website' />
                    <meta property='og:site_name' content='Kiero.co' />
                    <meta property="og:image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"/>
                </Head>
                <Category data={data} user_data={session} />
            </div>
        )
    }


}

export async function getServerSideProps(context) {
    const data = {
        "type": "category",
        "search": String(context.params.category),
        "params": {
            "items_per_page": 15,
            "price_range": "",
            "order": "desc"
        }
    }

    let usr = getUser(context);
    const session = {
        user: (usr !== undefined ? usr : null),
        authenticated: isAuthenticated(context)
    }

    return { props: { data, session } }
}


export default Results
