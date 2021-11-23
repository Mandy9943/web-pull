import React, {Component} from "react";
import Link from "next/link";
import "./Home.css";
import Social from "./../SocialBar";
import ProductCardFinding from "../Common/ProductCardFinding/ProductCardFinding";
import Logo1 from "../../assets/img/logo-social.png";
import Logo2 from "../../assets/img/logo-social1.png";
import Image from "next/image"

import dynamic from "next/dynamic";
import Imagen from "../Common/Imagen/Imagen";
// import Nav from "../Common/Nav/Nav";
// import PrincipalSlider from './../PrincipalSlider';
// import Payment from './../PaymentBar';
// import ProductsSlider from './../ProductsSlider';
// import SecundarySlider from './../SecundarySlider';
// import LoginMovil from './../LoginMovil';
// import Finding from './../Finding';
// import Explorer from './../Common/Explorer';
// import ListProductMovil from './../listProductMovil/listProductMovil';
// import CategoriesImgMenu from './../CategoriesImgMenu';
// import Tickets from './../Tickets';
// import Info from './../Info';
// import News from './../News';
// import Footer from '../Common/Footer';

const Nav = dynamic(() => import("../Common/Nav/Nav"));
const PrincipalSlider = dynamic(() => import("./../PrincipalSlider"));
const Payment = dynamic(() => import("./../PaymentBar"));
const ProductsSlider = dynamic(() => import("./../ProductsSlider"));
const SecundarySlider = dynamic(() => import("./../SecundarySlider"));
const LoginMovil = dynamic(() => import("./../LoginMovil"));
const Finding = dynamic(() => import("./../Finding"));
const Explorer = dynamic(() => import("./../Common/Explorer"));
const ListProductMovil = dynamic(() =>
    import("./../listProductMovil/listProductMovil")
);
const CategoriesImgMenu = dynamic(() => import("./../CategoriesImgMenu"));
const Tickets = dynamic(() => import("./../Tickets"));
const Info = dynamic(() => import("./../Info"));
const Footer = dynamic(() => import("../Common/Footer"));

export default class Home extends Component {
    render() {
        //console.log(this.props.user_data)
        let u_data = this.props.user_data;
        let authenticated = this.props.authenticated;

        return (
            <div className="container">
                <Nav
                    user={u_data.user}
                    role={u_data.role}
                    jwt={u_data.jwt}
                    home={true}
                    authenticated={u_data.authenticated}
                />
                <PrincipalSlider/>
                <div className="home-content">
                    <Payment/>
                    {/* {/* <ProductsSlider category={'Computadoras y tabletas'}/> */}
                    <ProductsSlider category={'Cosméticos y maquillaje'}/>
                    <SecundarySlider/>
                    <LoginMovil user={u_data.user} authenticated={u_data.authenticated}/>
                    <Finding
                        category={{
                            father0: 'Electrodomésticos',
                            father1: 'Computación',
                            img0: 'banner-electrodomesticos.webp',
                            img1: 'banner-computacion.webp',
                            sub1: 'Aspiradoras',
                            url1: 'categoria/Aspiradoras-domésticas',
                            sub2: 'Monitores',
                            url2: 'categoria/Monitores-de-computadoras',
                        }}
                    />
                    <ProductsSlider category={'Juguetes y juegos'}/>
                    <Explorer/>
                    <ProductsSlider category={'Bebés'}/>
                    <Finding
                        category={{
                            father0: 'Deportes',
                            father1: 'Electrónica',
                            img0: 'banner-deportes.webp',
                            img1: 'banner-drones.webp',
                            sub1: 'Bicicletas-de-carretera',
                            url1: 'categoria/Bicicletas',
                            sub2: 'Drones',
                            url2: 'categoria/Cuadricópteros-drones-y-accesorios',
                        }}
                    />
                    <Explorer/>
                    <ProductsSlider category={'Animales y Mascotas'}/>
                    <ListProductMovil jwt={u_data.jwt}/>
                    <CategoriesImgMenu/>
                    <Tickets/> */}
                </div>
                {/* <Info/> */}
                {/*<News/>*/}
                {/*/!*<Social />*!/*/}
                {/* <Footer/> */}
                {/* <div className="footer-social">
                    <a href="https://www.sic.gov.co" rel="noopener noreferrer" target="_blank">
                        <Imagen limpio={true} alt="Superintendencia de Industria y Comercio" src={Logo1}/>
                    </a>
                    <a href="https://www.sic.gov.co" rel="noopener noreferrer" target="_blank">
                        <Imagen limpio={true} alt="Superintendencia de Industria y Comercio" src={Logo2}/>
                    </a>
                </div> */}
            </div>
        );
    }
}
