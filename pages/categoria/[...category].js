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
        "deportes y fitness": {
            "estructure": [1, 2, 3],
            "links": ["Deportes%20y%20fitness", "Accesorios%20deportes%20y%20aire%20libre", "Entrenamiento%20de%20fitness", "Recreación%20en%20exteriores", "Deportes%20y%20acondicionamiento%20físico", "Tienda%20para%20fanáticos%20de%20los%20deportes"],
            "image_path": encodeURI("//kiero.co/images/resources/deportes y fitness/"), "enable": true
        },

        "animales y mascotas": {
            "estructure": [1, 2, 3, 2, 3, 3, 2],
            "links": ["Animales%20y%20mascotas", "Suministros%20para%20perros", "Suministros%20para%20gatos", "Suministros%20para%20aves%20domésticas", "Alimentos%20para%20mascotas", "Centro%20de%20pulgas%20y%20garrapatas", "Suministros%20para%20peces", "Suministros%20para%20reptiles%20y%20anfibios", "Alimentos%20especiales%20para%20mascotas", "Productos%20para%20cumpleaños%20de%20mascotas", "Suministros%20de%20salud%20mascotas", "Cercado%20y%20contención%20mascotas", "Disfraces%20de%20halloween%20para%20mascotas", "Tecnología%20para%20mascotas", "Suministros%20para%20animales%20pequeños", "Suministros%20para%20caballos"],
            "image_path": encodeURI("//kiero.co/images/resources/animales y mascotas/"), "enable": true
        },

        "bebés": {
            "estructure": [1, 2, 3, 2, 3, 2, 1],
            "links": ["Bebés", "Bacinicas%20y%20bancos%20infantiles", "Regalos%20para%20recién%20nacidos", "Asientos%20y%20accesorios%20de%20carro%20para%20bebés", "Productos%20cambio%20de%20pañales%20bebés", "Productos%20para%20embarazo%20y%20maternidad", "Centros%20actividad%20entretenimiento%20bebés", "Coches%20de%20bebés%20y%20accesorios", "Papelería%20para%20bebés", "Productos%20para%20el%20cuidado%20del%20bebé", "Recámara%20del%20bebé", "Productos%20de%20seguridad%20para%20bebés", "Lactancia%20y%20alimentación", "Artículos%20de%20viaje%20para%20bebés"],
            "image_path": encodeURI("//kiero.co/images/resources/bebes/"), "enable": true
        },



        "belleza": {
            "estructure":  [1, 2, 3, 3, 1],
            "links": ["Belleza", "Artículos%20y%20accesorios%20de%20belleza", "Cosméticos%20y%20maquillaje", "Productos%20para%20el%20cuidado%20bucal", "Cuidado%20de%20la%20piel", "Cuidado%20de%20pies%20manos%20y%20uñas", "Cuidado%20del%20cabello", "Productos%20de%20cuidado%20personal", "Perfumes%20y%20fragancias", "Productos%20de%20afeitado%20y%20depilación"],
            "image_path": encodeURI("//kiero.co/images/resources/belleza/"), "enable": true
        },

        "cámaras, fotografía y video": {
            "estructure": [1, 2, 3, 3, 3, 2, 1],
            "links": ["Cámaras,%20fotografía%20y%20video", "Binoculares,%20telescopios%20y%20óptica", "Accesorios%20para%20cámara,%20foto%20y%20video", "Estuches%20y%20bolsas%20para%20cámaras", "Cámaras%20de%20vigilancia%20simuladas", "Flash%20de%20cámara", "Cámaras%20digitales", "Fotografía%20cinematográfica", "Iluminación%20y%20estudio%20para%20cámaras", "Equipo%20de%20video", "Impresoras%20y%20escáneres", "Trípodes%20y%20monopie%20de%20cámara", "Cámaras%20de%20fotografía%20subacuático", "Cámaras%20de%20vigilancia%20y%20seguridad", "Videocámaras%20y%20lentes%20de%20cámara"],
            "image_path": encodeURI("//kiero.co/images/resources/camaras fotografia y video/"), "enable": true
        },


        "celulares y accesorios": {
            "estructure": [1, 2],
            "links": ["Celulares%20y%20accesorios", "Celulares", "Accesorios%20para%20celulares"],
            "image_path": encodeURI("//kiero.co/images/resources/celulares y accesorios/"), "enable": true
        },

        "consolas y videojuegos": {
            "estructure": [1, 2, 3, 3, 3, 1],
            "links": ["Consolas%20y%20videojuegos", "Juegos,%20consolas%20y%20accesorios%20PlayStation%204", "Xbox%20One", "Nintendo Switch", "Juegos%20y%20accesorios%20de%20PC", "Juegos%20y%20accesorios%20para%20Mac", "Nintendo%203DS%20y%202DS", "PlayStation%20Vita", "Sistemas%20heredados, juegos%20retro", "Accesorios%20de%20Xbox%20Serie%20X", "Accesorios%20realidad%20virtual%20independientes", "Juegos%20de%20Xbox%20Serie%20X%20&%20S", "Microconsolas%20de%20videojuegos"],
            "image_path": encodeURI("//kiero.co/images/resources/consolas y videojuegos/"), "enable": true
        },

        "electrónica, audio y video": {
            "estructure": [1, 2, 3, 3, 2, 3, 3, 1],
            "links": ["Electrónica,%20audio%20y%20video", "Televisión%20y%20video", "Accesorios%20y%20suministros%20de%20electrónica", "Contenedores%20de%20almacenamiento%20baterías", "Componentes%20electrónicos", "Dispositivos%20y%20accesorios%20de%20Amazon", "Electrónica%20para%20carros%20y%20vehículos", "Lectores%20de%20libros%20digitales%20y%20accesorios", "GPS,%20buscadores%20y%20accesorios", "Otros%20accesorios%20de%20electrónica", "Equipo%20de%20seguridad%20y%20vigilancia", "Baterías,%20cargadores%20y%20accesorios%20hogar", "Proyectores%20de%20vídeo", "Plan%20de%20servicio%20computadora%20electrónica", "Portapilas%20y%20soportes", "Transformadores%20de%20aislamiento", "Unidades%20de%20distribución%20energía", "Tecnología%20vestible"],
            "image_path": encodeURI("//kiero.co/images/resources/electronica audio y video/"), "enable": true
        },

        "electrodomésticos": {
            "estructure": [1, 2, 3, 2],
            "links": ["Electrodomésticos", "Piezas%20y%20accesorios", "Electrodomésticos%20de%20lavandería", "Refrigeradores%20y%20fabricadores%20de%20hielo", "Trituradores%20de%20basura%20y%20compactadores", "Garantías%20de%20electrodomésticos", "Cocinas%20hornos%20y%20estufas", "Electrodomésticos%20del%20hogar"],
            "image_path": encodeURI("//kiero.co/images/resources/electrodomesticos/"), "enable": true
        },

        "herramientas": {
            "estructure": [1, 2, 3, 3,  2],
            "links": ["Herramientas", "Almacenamiento%20y%20organización%20del%20hogar", "Equipo%20eléctrico", "Electrodomésticos%20y%20repuestos", "Accesorios%20para%20cocina%20y%20baño", "Herramientas%20para%20ferretería", "Focos%20y%20bombillas%20para%20el%20hogar", "Herramientas%20manuales%20y%20eléctricas", "Equipo%20de%20soldadura", "Productos%20para%20la%20construcción", "Protección%20y%20seguridad%20para%20el%20hogar"],
            "image_path": encodeURI("//kiero.co/images/resources/herramientas/"), "enable": true
        },



        "hogar": {
            "estructure": [1, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 1],
            "links": ["Hogar", "Productos%20de%20baño%20hogar", "Set%20de%20toallas%20y%20toallones%20de%20baño", "Funda%20decorativa%20para%20almohada%20de%20niño", "Alfombras%20y%20tapetes%20para%20el%20hogar", "Aspiradoras%20y%20cuidado%20de%20pisos", "Cubrecamas%20o%20mantas%20para%20cuartos", "Cortinas,%20ganchos%20y%20forros%20de%20ducha", "Artículos%20de%20uso%20doméstico", "Calefacción,%20enfriamiento%20y%20calidad%20del%20aire", "Ropa%20de%20cama%20doméstico", "Cubrecolchones", "Difusores%20y%20fragancias%20para%20el%20hogar", "Entrepaños%20flotantespara%20el%20hogar", "Equipos%20para%20café%20té%20y%20exprés", "Espejos", "Mejoras%20del%20hogar", "Colecciones%20de%20ropa%20de%20cama", "Muebles%20para%20el%20hogar", "Obras%20de%20arte%20y%20material%20decorativo", "Organizador%20almacenamiento%20en%20el%20hogar", "Controladores%20de%20riego%20automático", "Protectores%20y%20cubrealmohadas", "Relojes%20de%20hogar", "Tienda%20infantil%20para%20el%20hogar", "Otros%20productos%20hogar", "Suministros%20de%20papelería%20y%20envoltura%20de%20regalos", "Suministros%20para%20eventos%20y%20fiestas", "Cocina%20y%20comedor", "Decoración%20de%20temporada", "Accesorios%20decorativos"],
            "image_path": encodeURI("//kiero.co/images/resources/hogar/"), "enable": true
        },


        "instrumentos musicales": {
            "estructure": [1, 2, 3, 3, 2, 3, 1],
            "links": ["Instrumentos%20musicales", "Instrumentos%20musicales%20de%20banda%20y%20orquesta", "Bajos%20musicales", "Música%20electrónica,%20DJ%20y%20karaoke", "Equipo%20de%20grabación%20de%20estudio", "Guitarras", "Accesorios%20para%20instrumentos%20musicales", "Micrófonos%20de%20grabación%20y%20accesorios", "Equipo%20de%20escenario%20y%20sonido%20en%20vivo", "Instrumentos%20musicales%20de%20cuerda", "Tambores%20y%20percusiones", "Ukeleles,%20mandolinas%20y%20banjos", "Instrumentos%20musicales%20de%20viento%20y%20madera", "Amplificadores%20y%20efectos", "Teclados%20y%20MIDI"],
            "image_path": encodeURI("//kiero.co/images/resources/instrumentos musicales/"), "enable": true
        },

        "juguetes y juegos": {
            "estructure": [1, 2, 3, 3, 2, 3, 3, 2, 1],
            "links": ["Juguetes%20y%20juegos", "Juguetes%20y%20deportes%20al%20aire%20libre", "Juguetes%20de%20aprendizaje%20y%20educación", "Artículos%20para%20fiesta", "Bicicletas,%20triciclos%20y%20carritos", "Juguetes%20y%20juegos%20coleccionables", "Figuras%20y%20sets%20de%20juegos", "Juegos%20y%20accesorios", "Juegos%20de%20imitación", "Juguetes%20novedosos%20y%20de%20broma", "Juguetes%20para%20bebés%20y%20niños%20pequeños", "Vehículos%20de%20juguete%20y%20control%20remoto", "Muebles,%20decoración%20y%20almacenamiento%20niños", "Muñecas%20y%20accesorios", "Pasatiempos", "Juguetes%20y%20animales%20de%20peluche", "Rompecabezas", "Juguetes%20electrónicos", "Juguetes%20de%20construcción", "Títeres%20y%20teatros%20de%20títeres"],
            "image_path": encodeURI("//kiero.co/images/resources/juguetes y juegos/"), "enable": true
        },


        "relojes y joyería": {
            "estructure": [1, 2, 2, 2],
            "links": ["Relojes%20y%20joyería", "Accesorios%20para%20relojes", "Joyeria", "Reloj%20para%20hombre", "Relojes%20para%20mujer", "Relojes%20para%20niña", "Relojes%20para%20niño"],
            "image_path": encodeURI("//kiero.co/images/resources/relojes y joyeria/"), "enable": true
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
        "ropa, calzado y accesorios": {
            "estructure": [1, 2, 3, 3, 2, 1],
            "links": ["Ropa,%20calzado%20y%20accesorios", "Moda%20para%20hombres", "Moda%20para%20mujeres", "Tiendas%20para%20niñas", "Disfraces%20y%20accesorios%20para%20todo%20género", "Accesorios para zapatos y relojes", "Ropa%20para%20bebés", "Novedades%20y%20de%20uso%20especial", "Uniformes,%20trabajo%20y%20seguridad", "Moda%20para%20niños", "Moda%20para%20niñas", "Equipaje%20y%20equipo%20de%20viaje"],
            "image_path": encodeURI("//kiero.co/images/resources/ropa calzado y accesorios/"), "enable": true
        },

        "vehículos": {
            "estructure": [1, 2, 3, 3, 2, 3, 3, 1],
            "links": ["Vehículos", "Accesorios%20exteriores%20para%20carro", "Accesorios%20interiores%20para%20carro", "Neumáticos%20y%20rines%20para%20carro", "Aceites%20y%20fluidos%20para%20carro", "Cuidado%20de%20carro%20y%20moto", "Equipo%20de%20carros%20comerciales%20y%20uso%20pesado", "Luces,%20bombillas%20e%20indicadores", "Motos,%20accesorios%20y%20piezas", "Piezas%20de%20repuestos%20para%20carro", "Herramientas%20para%20carro", "Otros%20accesorios%20de%20vehículos", "Piezas%20y%20repuestos%20para%20caravanas", "Pintura%20y%20suministros%20de%20pintura%20carro", "Artículos%20para%20aficionados%20de%20vehículos", "Accesorios%20para%20remolques", "Electrónica%20y%20accesorios%20para%20carros", "Repuestos%20y%20accesorios%20rendimiento%20carro"],
            "image_path": encodeURI("//kiero.co/images/resources/vehiculos/"), "enable": true
        },
        "computadoras y accesorios": {
            "estructure": [1, 2, 3, 3, 2, 1],
            "links": ["Computadoras%20y%20Accesorios", "Computadoras%20y%20tabletas", "Monitores%20de%20computadoras", "Componentes%20para%20computadoras", "Almacenamiento%20de%20datos%20para%20computador", "Accesorios%20para%20tablets", "Piezas%20y%20repuestos%20para%20tablets", "Garantías%20de%20equipos%20informáticos", "Servidores%20para%20computadora", "Dispositivos%20para%20redes%20de%20computadoras", "Accesorios%20y%20periféricos%20informáticos", "Accesorios%20para%20laptop"],
            "image_path": encodeURI("//kiero.co/images/resources/computadoras y accesorios/"), "enable": true
        },
        "salud": {
            "estructure": [1, 2, 3, 3],
            "links": ["Salud", "Cuidado%20de%20la%20salud", "Equipo%20y%20suministros%20médicos", "Cuidado%20de%20bebés%20y%20niños", "Productos%20de%20bienestar%20y%20relajación", "Productos%20para%20cuidado%20de%20los%20ojos", "Nutrición%20deportiva", "Productos%20relacionados%20con%20el%20tabaco", "Vitaminas%20y%20suplementos%20dietéticos"],
            "image_path": encodeURI("//kiero.co/images/resources/salud/"), "enable": true
        },


        "industria%20y%20científico": {
            "estructure": [1, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 1],
            "links": ["Industria%20y%20científico", "Accesorios%20y%20equipos%20de%20tiendas%20minoristas", "Cintas,%20adhesivos%20y%20sellantes", "Productos%20de%20laboratorio%20y%20ciencias", "Equipo%20industrial", "Equipo%20y%20suministros%20para%20servicio", "Filtración%20industrial", "Herramientas%20de%20corte", "Herramientas%20eléctricas%20y%20de%20mano", "Productos%20de%20iluminación%20comercial", "Industrial%20y%20eléctrico", "Materias%20primas", "Hidráulica,%20neumática%20y%20plomería", "Higiene%20y%20seguridad%20laboral", "Productos%20abrasivos%20y%20de%20acabado", "Medición%20y%20test%20industrial", "Productos%20de%20laboratorio%20y%20ciencias", "Señalización%20digital", "Sujetadores", "Productos%20para%20manipulación%20de%20materiales", "Productos%20de%20puertas%20comerciales", "Productos%20de%20transmisión%20de%20energía", "Robótica", "Suministros%20de%20empaque%20y%20envío", "Suministros%20de%20limpieza%20y%20saneamiento", "Suministros%20médicos%20profesionales", "Productos%20para%20impresión%203D", "Suministros%20dentales%20profesionales"],
            "image_path": encodeURI("//kiero.co/images/resources/industria y cientifico/"), "enable": true
        },
        
         "artes y manualidades": {
            "estructure": [1, 2, 3, 3, 2, 1],
            "links": ["Artes%20y%20manualidades", "Artes%20y%20manualidades%20para%20niños", "Materiales%20para%20arte%20y%20manualidades", "Almacenamiento%20de%20materiales%20de%20arte", "Cuentas%20y%20adornos,%20elaboración%20bisutería", "Productos%20de%20costura", "Telas%20para%20manualidades", "Suministro%20de%20punto%20y%20ganchillo", "Suministros%20para%20álbumes%20de%20recortes", "Artículos%20para%20pintura,%20dibujo%20y%20arte", "Suministros%20de%20grabado", "Suministros%20de%20tejido%20y%20costura"],
            "image_path": encodeURI("//kiero.co/images/resources/artes y manualidades/"), "enable": true

      },
        
         "artesanías y productos hechos a mano": {
            "estructure": [1, 2, 1],
            "links": ["Artesanías%20y%20productos%20hechos%20a%20mano", "Artículos%20hechos%20a%20mano%20para%20boda", "Decoración%20hogar%20hecha%20a%20mano", "Utensilios%20para%20hornear%20hechos%20a%20mano"],
            "image_path": encodeURI("//kiero.co/images/resources/artesanias y productos hechos a manos/"), "enable": true
             
     },
        
         "coleccionables y bellas artes": {
            "estructure": [1, 2, 3, 3],
            "links": ["Coleccionables%20y%20bellas%20artes", "Arte%20coleccionable%20y%20bellas%20artes", "Artículos%20de%20deportes%20coleccionables", "Accesorios%20coleccionables%20de%20hockey", "Accesorios%20recuerdos%20históricos%20y%20políticos", "Cascos%20coleccionables%20de%20fútbol", "Entretenimiento%20coleccionable", "Monedas%20coleccionables", "Tarjetas%20coleccionables%20de%20béisbol"],
            "image_path": encodeURI("//kiero.co/images/resources/coleccionables y bellas artes/"), "enable": true
             
     },
        
         "libros": {
            "estructure": [1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 1],
            "links": ["Libros", "Libros%20de%20autoayuda", "Libros%20de%20calendarios", "Libros%20de%20adolescente%20y%20jóvenes", "Libros%20de%20artesanía%20hobbies%20y%20hogar", "Libros%20de%20arte%20y%20fotografía", "Libros%20de%20biografías%20y%20memorias", "Libros%20de%20ciencia%20ficción%20y%20fantasía", "Libros%20de%20ciencia%20y%20matemáticas", "Libros%20de%20cómics%20y%20novelas%20gráficas", "Libros%20de%20crianza%20y%20relaciones", "Libros%20de%20cristianismo", "Libros%20de%20computadoras%20y%20tecnología", "Libros%20de%20negocios%20e%20inversiones", "Libros%20deportes%20y%20tiempo%20libre", "Libros%20de%20educación%20y%20enseñanza", "Libros%20de%20LGBTQ", "Libros%20de%20humor%20y%20entretenimiento", "Libros%20de%20ingeniería%20y%20transportes", "Libros%20derecho", "Libros%20de%20medicina%20y%20médicos", "Libros%20de%20viaje", "Libros%20de%20misterio%20thriller%20y%20suspenso", "Libros%20de%20recetas%20comida%20y%20vino", "Libros%20de%20infantil%20y%20juvenil", "Libros%20de%20política%20y%20ciencias%20sociales", "Libros%20de%20preparación%20para%20pruebas", "Libros%20de%20referencias", "Libros%20de%20religión%20y%20espiritualidad", "Libros%20de%20romance", "Libros%20de%20salud%20fitness%20y%20dieta", "Libros%20de%20literatura%20y%20ficción"],
            "image_path": encodeURI("//kiero.co/images/resources/libros/"), "enable": true
             
         },
        
         "productos y suministros de oficina": {
            "estructure": [1, 2, 1],
            "links": ["Productos%20y%20suministros%20de%20oficina", "Electrónicos%20de%20oficina", "Productos%20de%20oficina", "Suministros%20escolares%20y%20de%20oficina"],
            "image_path": encodeURI("//kiero.co/images/resources/productos y suministros de oficina/"), "enable": true
             
         },
        
         "jardín y exteriores": {
            "estructure": [1, 2, 3, 2, 1],
            "links": ["Jardín%20y%20exteriores", "Herramientas%20eléctricas%20para%20exterior", "Calefacción%20exterior", "Almacenamiento%20y%20vivienda%20al%20aire%20libre", "Cuidado%20del%20césped", "Generadores%20y%20energía%20portátil", "Albercas,%20jacuzzis%20y%20suministros", "Agricultura%20urbana%20y%20ganadería", "Patio,%20césped%20y%20jardín"],
            "image_path": encodeURI("//kiero.co/images/resources/jardin y exteriores/"), "enable": true
        }
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
