import React, { Component } from 'react';
import Link from 'next/link';
import './Home.css';
import Social from './../SocialBar';
import ProductCardFinding from '../Common/ProductCardFinding/ProductCardFinding';
import Logo1 from '../../assets/img/logo-social.png';
import Logo2 from '../../assets/img/logo-social1.png';

import dynamic from 'next/dynamic';

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

const Nav = dynamic(() => import('../Common/Nav/Nav'));
const PrincipalSlider = dynamic(() => import('./../PrincipalSlider'));
const Payment = dynamic(() => import('./../PaymentBar'));
const ProductsSlider = dynamic(() => import('./../ProductsSlider'));
const SecundarySlider = dynamic(() => import('./../SecundarySlider'));
const LoginMovil = dynamic(() => import('./../LoginMovil'));
const Finding = dynamic(() => import('./../Finding'));
const Explorer = dynamic(() => import('./../Common/Explorer'));
const ListProductMovil = dynamic(() => import('./../listProductMovil/listProductMovil'));
const CategoriesImgMenu = dynamic(() => import('./../CategoriesImgMenu'));
const Tickets = dynamic(() => import('./../Tickets'));
const Info = dynamic(() => import('./../Info'));
const News = dynamic(() => import('./../News'));
const Footer = dynamic(() => import('../Common/Footer'));

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
				<PrincipalSlider />
				<div className="home-content">
					<Payment />
					<ProductsSlider productSpent='product-spent-home' category={'Computadoras y tabletas'} />
					<ProductsSlider productSpent='product-spent-home' category={'Cosméticos y maquillaje'} />
					<SecundarySlider />
					<LoginMovil user={u_data.user} authenticated={u_data.authenticated} />
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
					<ProductsSlider productSpent='product-spent-home' category={'Juguetes y juegos'} />
					<Explorer />
					<ProductsSlider productSpent='product-spent-home' category={'Bebés'} />
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
					<Explorer />
					<ProductsSlider productSpent='product-spent-home' category={'Animales y Mascotas'} />
					<ListProductMovil jwt={u_data.jwt} />
					<CategoriesImgMenu />
					<Tickets />
				</div>
				<Info />
				<News />
				{/*<Social />*/}
				<Footer />
				<div className="footer-social">
					<Link href={'//sic.gov.co'}>
						<a rel="noopener noreferrer">
							<img alt="sic.gov.co" src={Logo1} />
						</a>
					</Link>
					<Link href={'//sic.gov.co'}>
						<a rel="noopener noreferrer">
							<img alt="sic.gov.co" src={Logo2} />
						</a>
					</Link>
				</div>
			</div>
		);
	}
}
