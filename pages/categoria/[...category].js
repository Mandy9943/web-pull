import React from 'react';
import Head from 'next/head';
import Category from '../../components/Category/Category';
import { getJwt, getUser, isAuthenticated } from "../../lib/auth";
import CategoryFinding from "../../components/CategoryFinding";
import Tickets from "../../components/Tickets";
import Nav from "../../components/Common/Nav";
import Footer from "../../components/Common/Footer";
import Link from "next/link";
import { useRouter } from 'next/router'
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import "../../components/CategoryList/CategoryList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import favicon from "../../assets/img/favicon.svg";
import {searchItemsPerPage} from "../../lib/config";



function Results({ data, session }) {
    const router = useRouter();
    const {page} = router.query;
    const currentPath = router.asPath;
    let url = "//www.sic.gov.co";
    var complete = {
        "deporte": {
            "estructure": [1, 2, 3, 3, 3, 2],
            "links": ["Deporte", "Tiendas%20Destacadas", "Entrenamiento%20de%20fitness", "Caza%20y%20Pezca", 
            "Deportes%20recreativos%20y%20sala%20de%20juegos", "Fútbol%20de%20mesa%20y%20futbolito", "Hockey%20de%20mesa%20y%20mini%20hockey", "Conjunto%20de%20juego%20de%20tejo", "Tenis%20de%20mesa", "Paintball%20y%20Airsoft", 
            "Equipo%20deportivo%20para%20atletismo", "Equipo%20de%20Natación", "Accesorios%20deportivos%20para%20deportes", "Compra%20por%20Deporte"],
            "image_path": encodeURI("//kiero.co/images/resources/deportes y fitness/"), "enable": true
        },

        "animales y mascotas": {
            "estructure": [1, 2, 3, 2],
            "links": ["Animales%20y%20Mascotas%20", "Perro", "Gatos", "Aves", "Acuaticos", "Reptiles%20y%20Anfibios", "Animales%20Pequeños", "Caballos"],
            "image_path": encodeURI("//kiero.co/images/resources/animales y mascotas/"), "enable": true
        },

        "bebés": {
            "estructure": [1, 2, 3, 3, 2, 3, 2],
            "links": ["Bebés%20", "Accesorios%20y%20Ropa", "Bacinicas%20y%20Bancos%20Infantiles", "Asientos%20y%20accesorios%20de%20carro%20para%20bebés", "Productos%20cambio%20de%20pañales%20bebés", "Coches%20y%20accesorios%20para%20bebés", "Centros%20actividad%20entretenimiento%20bebés", "Productos%20para%20el%20cuidado%20del%20bebé", "Productos%20para%20embarazo%20y%20maternidad", "Trompos%20de%20juguete%20para%20bebés", "Alimentos%20para%20bebés%20de%20etapa%202", "Papelería%20de%20bebé", "Productos%20para%20bebé", "Recámara%20del%20bebé", "Regalos%20para%20recién%20nacidos", "Seguridad%20de%20bebé"],
            "image_path": encodeURI("//kiero.co/images/resources/bebes/"), "enable": true
        },



        "belleza": {
            "estructure":  [1, 2, 3, 3, 1],
            "links": ["Belleza", "Artículos%20y%20accesorios%20de%20belleza", "Cosméticos%20y%20maquillaje", "Cuidado%20de%20Boca", "Cuidado%20de%20la%20Piel", "Mascarillas%20para%20pies", "Cuidado%20del%20Cabello", "Cuidado%20Personal", "Fragancia", "Productos%20de%20afeitado%20y%20depilación"],
            "image_path": encodeURI("//kiero.co/images/resources/belleza/"), "enable": true
        },

        "cámaras y accesorios": {
            "estructure": [1, 2, 3, 3, 3, 2],
            "links": ["Cámaras%20y%20Accesorios%20", "Cámaras%20y%20Fotografía", "Accesorios%20cámaras", "Estuches%20y%20bolsas%20para%20cámaras", "Binoculares%20telescopios%20y%20óptica", "Fotografía%20de%20rollo%20para%20cámaras", "Flashes", "Lentes", "Iluminación%20y%20estudio%20para%20cámaras", "Video", "Impresoras%20y%20Escáneres", "Trípodes%20y%20Monopie%20para%20cámaras", "Cámaras%20de%20fotografía%20Subacuático", "Cámaras%20de%20vigilancia%20y%20seguridad"],
            "image_path": encodeURI("//kiero.co/images/resources/camaras y accesorios/"), "enable": true
        },


        "celulares y teléfonos": {
            "estructure": [1, 2, 2],
            "links": ["Celulares%20y%20Teléfonos%20", "Celulares%20y%20accesorios", "Estuches%20y%20Fundas%20Iphone", "Dispositivos%20Conectados", "Accesorios%20de%20Celulares"],
            "image_path": encodeURI("//kiero.co/images/resources/celulares y telefonos/"), "enable": true
        },

        "consolas y videojuegos": {
            "estructure": [1, 2, 3, 3, 1],
            "links": ["Consolas%20y%20Videojuegos%20", "PlayStation%204", "Xbox%20One", "Nintendo%20Switch", "PC", "Mac", "Nintendo%203DS%20y%202DS", "PlayStation%20Vita", "Sistemas%20Heredados", "Microconsoles"],
            "image_path": encodeURI("//kiero.co/images/resources/consolas y videojuegos/"), "enable": true
        },

        "electrónica, audio y video": {
            "estructure": [1, 2, 3, 3, 3, 2, 3],
            "links": ["Electrónica,%20Audio%20y%20Video", "Accesorios%20de%20audio%20y%20video", "Accesorios%20y%20Suministros", "Audio%20y%20video%20portátil", "Componentes%20electronicos", "DVD", "Electrónica%20para%20Autos%20y%20Vehículos", "Electrónicos%20de%20oficina", "Lectores%20de%20Libros%20Digitales%20y%20accesorios", "Navegación%20satelital%20y%20GPS", "Pilas,%20Baterías,%20cargadores", "Proyectores%20de%20vídeo", "Reproductores%20MP3%20y%20MP4", "Seguridad%20y%20vigilancia", "Tecnología%20vestible", "Televisión%20y%20video", "Video%20beams%20y%20pantallas"],
            "image_path": encodeURI("//kiero.co/images/resources/electronica audio y video/"), "enable": true
        },

        "electrodomésticos": {
            "estructure": [1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 1],
            "links": ["Electrodomésticos","Aparatos%20de%20Lavandería","Aparatos%20para%20Café,%20Té%20y%20Expreso","Arroceras","Aspiradoras%20y%20Cuidado%20de%20Pisos","Batidoras","Cafeteras%20de%20expreso%20y%20cafeteras","Calefacción,%20Refrigeración%20y%20Calidad%20del%20Aire","Calentadores%20de%20Bebidas","Cavas","Electrodomésticos%20Especializados","Freidoras","Gamas,%20Hornos%20y%20Encimeras","Hornos%20de%20microondas","Hornos%20y%20Tostadores","Jarras%20Eléctricas", "Kettles%20&%20Tea%20Machines", "Lavavajillas", "Licuadoras", "Licuadoras%20y%20Exprimidores", "Máquinas%20para%20Hacer%20Helado", "Moldes%20de%20Minipasteles%20y%20Cake%20Pops", "Ollas%20a%20Presión%20Eléctricas", "Ollas%20de%20Cocción%20Lenta", "Panificadoras", "Parrillas%20Eléctricas", "Partes%20y%20Accesorios", "Planchas%20Eléctricas", "Procesadores%20de%20Alimentos", "Quemadores%20de%20Mostrador", "Refrigeradores%20Compactos", "Refrigeradores,%20Congeladores%20y%20Máquinas%20de%20Hielo", "Sartenes%20Eléctricos", "Sifones%20y%20Máquinas%20para%20Hacer%20Refresco", "Trituradores%20y%20Compactadores%20de%20Basura", "Vaporeras%20Eléctricas", "Wafleras", "Woks%20Eléctricos"],
            "image_path": encodeURI("//kiero.co/images/resources/electrodomesticos/"), "enable": true
        },

        "herramientas": {
            "estructure": [1, 2, 3, 3,  1],
            "links": ["Herramientas", "Almacenamiento%20y%20organización%20del%20hogar", "Electricidad", "Electrodomésticos", "Accesorios%20para%20cocina%20y%20baño", "Herramientas%20para%20ferretería", "Focos%20y%20bombillas%20para%20el%20hogar", "Herramientas%20manuales%20y%20eléctricas", "Protección%20y%20seguridad%20para%20el%20hogar", "Suministros%20de%20construcción"],
            "image_path": encodeURI("//kiero.co/images/resources/herramientas/"), "enable": true
        },




        "hogar": {
            "estructure": [1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3],
            "links": ["Hogar%20y%20Muebles%20", "Accesorios%20de%20Baño", "Accesorios%20de%20cuchillos%20y%20cubiertos", "Accesorios%20Decorativos", "Alfombras%20y%20tapetes%20para%20el%20hogar", "Almacenamiento%20y%20organización%20de%20cocina", "Organizador%20almacenamiento%20en%20el%20hogar", "Almohadas%20y%20posicionadores%20de%20cama", "Aspiradoras%20y%20cuidado%20de%20pisos", "Baño%20infantil", "Baterías%20o%20juegos%20de%20ollas%20para%20cocina", "Equipos%20para%20café%20té%20y%20espresso", "Almohadas%20y%20fundas%20decorativas", "Colecciones%20de%20ropa%20de%20cama", "Utensilios%20mesa%20y%20comedor%20para%20el%20hogar", "Revestimientos%20para%20cortinas", "Cortinas,%20Ganchos%20y%20Forros%20de%20ducha", "Protectores%20y%20cubrealmohadas", "Cubrecamas%20o%20mantas%20para%20cuartos", "Cubrecolchones", "Iluminación%20de%20temporada", "Electrodomésticos%20del%20hogar", "Entrepaños%20flotantes%20para%20el%20hogar", "Espejos", "Difusores%20y%20fragancias%20para%20el%20hogar", "Iluminación%20de%20Exterior", "Iluminación%20y%20ventiladores%20de%20techo", "Jarrones", "Juegos%20de%20accesorios%20de%20baño", "Juegos%20de%20Edredones", "Juegos%20de%20Edredones%20y%20Fundas%20para%20Edredón", "Juegos%20de%20vajilla", "Macetas,%20Plantadores%20y%20Contenedores", "Marcos%20de%20Fotos", "Mejoras%20del%20hogar", "Muebles%20de%20Cocina%20y%20Comedor", "Muebles%20de%20Dormitorio", "Muebles%20de%20Oficina", "Muebles%20de%20patio", "Muebles%20de%20Sala", "Muebles%20de%20Vestíbulo", "Muebles%20para%20Entretenimiento%20de%20Hogar", "Muebles%20para%20niños", "Obras%20de%20arte%20y%20material%20decorativo", "Organizadores%20para%20regadera", "Asientos%20y%20sillas%20para%20patios", "Plantas%20y%20Flores%20Artificiales", "Plantas,%20Semillas%20y%20Bulbos", "Portavelas", "Relojes", "Repostería", "Ropa%20blanca%20para%20la%20cocina%20y%20el%20comedor", "Ropa%20de%20cama", "Funda%20decorativa%20para%20almohada%20de%20niño", "Suministros%20para%20Eventos%20y%20Fiestas", "Tapetes%20de%20Baño", "Tienda%20infantil%20para%20el%20hogar", "Set%20de%20toallas%20y%20toallones%20de%20baño", "Toldos%20carpas%20y%20pérgolas", "Utensilios%20y%20Aparatos%20de%20Cocina", "Velas"],
            "image_path": encodeURI("//kiero.co/images/resources/hogar y muebles/"), "enable": true
        },


        "instrumentos musicales": {
            "estructure": [1, 2, 3, 3, 1],
            "links": ["Instrumentos%20Musicales%20", "Guitarras", "Bajos", "Instrumentos%20de%20Cuerda", "Baterías%20y%20percusión", "DJ%20y%20Karaoke", "TECLADOS%20Y%20MIDI", "Microfonos%20y%20accesorios", "Estudio%20de%20grabacion", "Sonido%20en%20Vivo%20y%20Escenario"],
            "image_path": encodeURI("//kiero.co/images/resources/instrumentos musicales/"), "enable": true
        },

        "juguetes": {
            "estructure": [1, 2, 3, 3, 3, 2, 3, 3, 1],
            "links": ["Juegos%20y%20Juguetes%20", "Aire%20Libre%20y%20Deportes", "Artes%20y%20Manualidades", "Artículos%20para%20Fiesta", "Collectible%20Toys", "Bicicletas,%20Triciclos%20y%20Carritos", "Figuras%20de%20Acción%20y%20Estatuas", "Juegos", "Juegos%20de%20Imitación", "Juguetes%20de%20Construcción", "Juegos%20Educativos", "Juguetes%20Electrónicos", "Juguetes%20Novedosos%20y%20de%20Broma", "Juguetes%20para%20bebés%20y%20Niños", "Juguetes%20Vehicular%20de%20RC", "Muebles,%20Decoración%20y%20Almacenamiento", "Muñecas%20y%20Accesorios", "Pasatiempos", "Peluches", "Rompecabezas", "Títeres"],
            "image_path": encodeURI("//kiero.co/images/resources/juegos y juguetes/"), "enable": true
        },


        "relojes y joyería": {
            "estructure": [1, 2, 3, 3, 3],
            "links": ["Relojes%20y%20Joyas%20", "Relojes%20inteligentes%20para%20hombre", "Accesorios%20para%20Relojes", "Correas%20de%20reloj%20para%20hombre", "Joyeria", "Relojes%20de%20Bolsillo%20para%20hombres%20", "Relojes%20de%20Pulsera%20para%20Hombre", "Relojes%20de%20Pulsera%20para%20mujeres%20", "Relojes%20deportivos%20para%20hombre", "Relojes%20para%20mujer", "Relojes%20para%20niña", "Relojes%20para%20niño"],
            "image_path": encodeURI("//kiero.co/images/resources/relojes/"), "enable": true
        },

        // "ropa,%20calzados%20y%20accesorios": {
        //     "estructure": [1, 2, 2, 2],
        //     "links": ["Ropa,%20calzados%20y%20accesorios", "Ropa%20para%20mujeres", "Moda%20para%20hombres", "Moda%20para%20niñas", "Moda%20para%20niños", "Ropa%20para%20bebés", "Ropa%20y%20zapatos%20para%20niños%20"],
        //     "image_path": encodeURI("//kiero.co/images/resources/ropa/"), "enable": true
        // },
        // "ropa%20calzados%20y%20accesorios": {
        //     "estructure": [1, 2, 2, 2],
        //     "links": ["Ropa,%20calzados%20y%20accesorios", "Ropa%20para%20mujeres", "Moda%20para%20hombres", "Moda%20para%20niñas", "Moda%20para%20niños", "Ropa%20para%20bebés", "Ropa%20y%20zapatos%20para%20niños%20"],
        //     "image_path": encodeURI("//kiero.co/images/resources/ropa/"), "enable": true
        // },
        "ropa": {
            "estructure": [1, 2, 2, 2],
            "links": ["Ropa,%20calzados%20y%20accesorios", "Ropa%20para%20mujeres", "Moda%20para%20hombres", "Moda%20para%20niñas", "Moda%20para%20niños", "Ropa%20para%20bebés", "Ropa%20y%20zapatos%20para%20niños%20"],
            "image_path": encodeURI("//kiero.co/images/resources/ropa/"), "enable": true
        },

        "vehículos": {
            "estructure": [1, 2, 3, 3, 3, 2],
            "links": ["Vehículos", "Cuidado%20de%20Carro%20y%20Moto", "Accesorios%20Interiores", "Luces,%20Bombillas%20e%20Indicadores", "Motos,%20Accesorios%20y%20Pieza", "Aceites%20y%20Fluidos", "Pintura%20y%20Suministros%20de%20Pintura", "Repuestos%20y%20Accesorios%20de%20Rendimiento", "Piezas%20para%20Coche", "Piezas%20y%20Repuestos%20para%20Caravanas", "Neumáticos%20y%20Llantas%20para%20Coche", "Herramientas%20para%20Carro", "Productos%20para%20Aficionados", "Equipo%20de%20Uso%20Pesado%20y%20Comerciales"],
            "image_path": encodeURI("//kiero.co/images/resources/vehiculos y accesorios/"), "enable": true
        },
        "computación": {
            "estructure": [1, 2, 3],
            "links": ["Computación%20", "Monitores", "Accesorios de computadoras", "Unidades flash USB", "Computadoras y accesorios", "Accesorios para Disco Duro"],
            "image_path": encodeURI("//kiero.co/images/resources/computacion/"), "enable": true
        },
        "salud": {
            "estructure": [1, 2, 3, 2],
            "links": ["Salud%20y%20Equipamiento%20Medico", "Cuidado%20de%20la%20salud", "Equipo%20y%20suministros%20médicos", "Herramientas%20y%20equipos%20para%20masajes", "Utensilios%20para%20movilidad%20y%20vida%20diaria", "Tirantes%20férulas%20y%20soportes", "Vitaminas%20y%20suplementos%20dietéticos", "Productos%20de%20medicina%20alternativa"],
            "image_path": encodeURI("//kiero.co/images/resources/salud y equipo medico/"), "enable": true
        },



        "industria": {
            "estructure": [1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3],
            "links": ["Industria%20y%20cientifico","Aditamentos%20y%20Equipo%20para%20Tienda","Cintas,%20Adhesivos%20y%20Sellantes", "Educación%20en%20Ciencias", "Equipo%20de%20Riego%20Automático", "Equipo%20Industrial", "Equipo%20y%20Suministros%20para%20Servicio", "Filtración", "Herramientas%20de%20Corte", "Herramientas%20Eléctricas%20y%20de%20Mano", "Hidráulica,%20Neumática%20y%20Plomería", "Higiene%20y%20Seguridad%20Laboral", "Iluminación%20Comercial", "Industrial%20y%20Eléctrico", "Materias%20Primas", "Medición%20y%20test%20industrial", "Productos%20Abrasivos%20y%20de%20Terminado", "Productos%20de%20Laboratorio%20y%20Ciencias", "Productos%20de%20Manipulación%20de%20Materiales", "Productos%20de%20Puertas%20Comerciales", "Productos%20de%20Transmisión%20de%20Energía", "Robótica", "Señalización%20Digital", "Sujetadores", "Suministros%20de%20Empaque%20y%20Envío", "Suministros%20de%20Limpieza%20y%20Saneamiento", "Suministros%20Dentales%20Profesionales", "Suministros%20Médicos%20Profesionales"],
            "image_path": encodeURI("//kiero.co/images/resources/industria/"), "enable": true
        },

    }

    let category_name = data.search.toLowerCase();

    let structure = [];
    const e = complete[category_name];

    if (category_name in complete) {
        let bannerNo = 1;
        for (let i = 0; i < e.estructure.length; i++) {

            if (e.estructure[i] === 1) {
                if (e.links[bannerNo - 1] !== "") {
                    structure.push(
                        <Link href={"/categoria/[category]"} as={"/categoria/" + e.links[bannerNo - 1]} >
                            <a className="tickets">
                                <img alt={category_name} key={i} className="banner-principal" src={e.image_path + (bannerNo++) + ".jpg"} />
                            </a>
                        </Link>
                    )
                } else {
                    structure.push(<img alt={category_name} key={i} className="banner-principal" src={e.image_path + (bannerNo++) + ".jpg"} />)
                }
            } else if (e.estructure[i] === 2) {
                structure.push(<CategoryFinding key={i} img_left={e.image_path + (bannerNo++) + ".jpg"} link_left={e.links[bannerNo - 2]}
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
                    <meta property="og:title" content={"Compra " + category_name + " en Kiero.co Encuentra los mejore de " + category_name +"en Kiero.co"} />
                    <meta property="og:description" content={"Envíos gratis en Colombia - Encuentra productos de " + category_name + " en Kiero.co - Descubre millones de productos online."} />
                    <meta property="og:url" content="url de listado" />
                    <meta property='og:locale' content='es_ES' />
                    <meta property='og:type' content='website' />
                    <meta property='og:site_name' content='Kiero.co' />
                    <meta property="og:image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"/>
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>

                <div className="container category-list">
                    <Nav jwt={session.jwt} user={session.user} home={true} authenticated={session.authenticated} />
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
                        <Link href={url}><a target="_blank"><img alt={url} src={Logo1} /></a></Link>
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
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>
                <Category data={data} user_data={session} page={page} path={currentPath}/>
            </div>
        )
    }


}

export async function getServerSideProps(context) {
    const data = {
        "type": "category",
        "search": String(context.params.category),
        "params": {
            "items_per_page": searchItemsPerPage,
            "price_range": "",
            "order": "desc"
        }
    }

    let usr = getUser(context);
    let jwt = getJwt(context);

    const session = {
        user: (usr !== undefined ? usr : null),
        authenticated: isAuthenticated(context),
        jwt: (jwt !== undefined ? jwt : null),
    }

    return { props: { data, session } }
}


export default Results
