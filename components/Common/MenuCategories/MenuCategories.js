import React, { Component } from 'react';
import './MenuCategories.css';
import Link from 'next/link';
import categories from '../../../assets/img/banner-categories.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

class MenuCategories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			moreAll: false,
			lessAll: true,
		};
	}

	menuMouseEnter = (cat_it) => {
		this.setState({ showMenu: true, selectedCategory: cat_it });
	};

	showAll = () => {
		this.setState({
			lessAll: !this.state.lessAll,
			moreAll: !this.state.moreAll,
		});
	};

	menuMouseLeave = () => {
		setInterval(() => {
			this.setState({ showMenu: true });
		}, 100);
	};

	subMenuMouseEnter = () => {
		this.setState({ showMenu: true });
	};
	componentWillUnmount() {
		this.setState({
			showMenu: false,
			moreAll: false,
			lessAll: true,
		});
	}

	render() {
		// console.log(this.props)
		let urlBanner = 'https://kiero.co/images/resources/categorias-menu/';
		// let urlBanner = '//localhost/images/resources/categorias-menu/';
		return (
			<div className="wrap-menu-categories">
				<div
					className="close"
					onClick={() => {
						this.props.toggle(this.props.num);
					}}
				/>
				<div
					className="menu-categories"
					onMouseLeave={() => {
						this.props.toggle(this.props.num);
					}}
				>
					<section className="title-categories">
						{this.props.categories?.map((ccat, i) => {
							return (
								<span
									key={i}
									className="active-link"
									onMouseEnter={() => this.menuMouseEnter(i)}
									onMouseLeave={this.menuMouseLeave}
								>
									<a href={'/categoria/' + ccat.name.replace(/^[, ]+|[, ]+$|[, ]+/g, "-").trim().toLowerCase()}>
										{ccat.name}
									</a>
									<FontAwesomeIcon
										onClick={() => this.menuMouseEnter(i)}
										icon={faAngleRight}
									/>
								</span>
							);
						})}
					</section>
					{this.state.showMenu ? (
						<section onMouseEnter={this.subMenuMouseEnter} className="sub-categories">
							<section className="title-sub">
								<span>{this.props.categories[this.state.selectedCategory].name}</span>

								<Image layout='fill' alt={this.state.selectedCategory} src={urlBanner + this.state.selectedCategory + '/1.webp'} />
								<Image layout='fill' alt={this.state.selectedCategory} src={urlBanner + this.state.selectedCategory + '/2.webp'} />
								<Image layout='fill' alt={this.state.selectedCategory} src={urlBanner + this.state.selectedCategory + '/3.webp'} />
								<Image layout='fill' alt={this.state.selectedCategory} src={urlBanner + this.state.selectedCategory + '/4.webp'} />
								<Image layout='fill' alt={this.state.selectedCategory} src={urlBanner + this.state.selectedCategory + '/5.webp'} />
							</section>
							{this.props.categories[this.state.selectedCategory].childs.map(
								(sl_cat, i) => {
									return (
										<section className="sub-cat" key={i}>
											{
												<a href={'/categoria/' + sl_cat.name.replace(/^[, ]+|[, ]+$|[, ]+/g, "-").trim().toLowerCase()}>
												{/* <a href={'/categoria/' + sl_cat.name.replace(/ /g, "-").trim().toLowerCase()}> */}
													<h5>
														<div className="subCatText">{sl_cat.name}</div>
													</h5>
												</a>
											}
											{sl_cat.childs.map((tl_cat, i) => {
												return (
													<span key={i + 1}>
														<a href={'/categoria/' + tl_cat.name.replace(/^[, ]+|[, ]+$|[, ]+/g, "-").trim().toLowerCase()}>
															{tl_cat.name}
														</a>
													</span>
												);
											})}
										</section>
									);
								}
							)}
						</section>
					) : null}
				</div>
			</div>
		);
	}
}

export default MenuCategories;
<button>cerrar</button>;
