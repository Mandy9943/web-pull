import React, { Component } from 'react';
import Link from 'next/link';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faList,
	faTh,
	faTimes,
	faAngleRight,
	faChevronCircleRight,
	faWindowClose,
	faTruck,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fromPrice: '',
			toPrice: '',
			menuOrder: false,
			menuFilter: false,
			categorySize: 10,
		};

		this.brands = React.createRef();
		this.categories = React.createRef();

		this.validateFromPrice = this.validateFromPrice.bind(this);
		this.validateToPrice = this.validateToPrice.bind(this);
		this.toggleMenuOrder = this.toggleMenuOrder.bind(this);
		this.toggleMenuFilter = this.toggleMenuFilter.bind(this);
	}

	toggleMenuOrder() {
		this.setState({ menuOrder: !this.state.menuOrder });
	}

	toggleMenuFilter() {
		this.setState({ menuFilter: !this.state.menuFilter });
	}

	ShowAllCategories() {
		this.setState({ categorySize: this.state.categorySize + 10 });
	}

	setSort(event) {
		this.setState({ menuOrder: false });
		this.props.sortProducts('' + event.target.value);
	}

	viewAll = (ele, ref) => {
		ele.classList.add('display-none');
		if (ref === 'brands') this.brands.current.classList.remove('filter-height-overflow');

		if (ref === 'categories')
			this.categories.current.classList.remove('filter-height-overflow');
	};

	handlePrice = (e) => {
		e.preventDefault();

		const from_price = parseInt(e.target.elements.from_price.value);
		const to_price = parseInt(e.target.elements.to_price.value);

		if (!Number.isInteger(from_price) && Number.isInteger(to_price)) {
			this.props.applyFilter('price', 'Desde ' + 0 + ' Hasta ' + to_price);
		}

		if (Number.isInteger(from_price) && !Number.isInteger(to_price)) {
			this.props.applyFilter('price', 'Más de ' + from_price);
		}

		if (Number.isInteger(from_price) && Number.isInteger(to_price)) {
			this.props.applyFilter('price', 'Desde ' + from_price + ' Hasta ' + to_price);
		}
	};

	validateFromPrice(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			fromPrice: pattern.test(value) ? value : value.slice(0, -1),
		});
	}
	validateToPrice(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			toPrice: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	render() {
		let res_categories = [];
		let res_brands = [];
		let prices = [];
		let renderedPrices = [];

		if (this.props.data && this.props.data.categories) {
			res_categories = this.props.data.categories;
		}

		if (this.props.data && this.props.data.brands) {
			res_brands = this.props.data.brands;
		}

		if (this.props.data && this.props.data.max_price) {
			var max_price = this.props.data.max_price;
			let top = Math.round((max_price * 0.1) / 100000) * 100000;
			if (top > 1000000) {
				if (max_price > 9999999) {
					top = 1000000;
				} else if (max_price > 999999) {
					top = 100000;
				} else if (max_price > 99999) {
					top = 10000;
				} else if (max_price > 9999) {
					top = 1000;
				} else if (max_price > 999) {
					top = 100;
				} else if (max_price > 99) {
					top = 10;
				} else if (max_price > 9) {
					top = 1;
				} else if (max_price > 0.9) {
					top = 0.1;
				}
			}

			function moneyFormater(price) {
				var num = price;
				num = num
					.toString()
					.split('')
					.reverse()
					.join('')
					.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
				num = num.split('').reverse().join('').replace(/^[\.]/, '');
				return num;
			}

			let div = top / 4;
			prices.push('Más de ' + top);
			renderedPrices.push('Más de ' + moneyFormater(top));
			for (let it = 0; it < 4; it++) {
				if (
					this.props.filters.indexOf(
						'price|' + 'Desde ' + (top - div * (it + 1)) + ' Hasta ' + (top - div * it)
					) === -1
				)
					prices.push('Desde ' + (top - div * (it + 1)) + ' Hasta ' + (top - div * it));
				renderedPrices.push(
					'Desde ' +
						moneyFormater(top - div * (it + 1)) +
						' Hasta ' +
						moneyFormater(top - div * it)
				);
			}
		}

		const filters = this.props.filters.map((item, index) => {
			if (item.split('|')[0] !== 'category') {
				return (
					<p key={index} className="result">
						{item.split('|')[1]}
						<div className="resultIconContainer">
							<FontAwesomeIcon
								className="resultIcon"
								icon={faTimes}
								onClick={() => {
									this.props.removeFilter(index);
								}}
							/>
						</div>
					</p>
				);
			}
		});

		const buttonState = this.props.format;
		const responsiveButton = buttonState == 'grid' ? faTh : faList;
		const text = buttonState == 'grid' ? 'Mosaico' : 'Lista';

		return (
			<>
				<div className="wrap-filter">
					<div
						style={{
							marginTop: '30px',
							width: '100%',
						}}
					>
						<div>Filtros seleccionados</div>
						{filters}
					</div>
					<div className="filter-group categories">
						<div className="filter-container">
							<div className="content-left">
								<span className="ots">{this.props.search}</span>
								{this.props.isSearch && (
									<span className="breadcrumb">
										{this.props.treeSelectedCategory.map((item, i) => (
											<>
												<span
													key={item.key}
													onClick={() => this.props.onSelectCategory(item, item.index)}
												>
													{item.key}
												</span>
												<FontAwesomeIcon icon={faAngleRight} />
											</>
										))}
										{this.props.treeSelectedCategory.length > 0 && this.props.search}
									</span>
								)}
								<span className="totals">{this.props.totalItems} resultados</span>
							</div>
						</div>

						<div className="filter-top-container-order">
							<div>
								<div className="text">Ordenar publicaciones</div>
								<div className="wrap-filter-button">
									<select onChange={(e) => this.setSort(e)} className="select-filter">
										<option value="0">Más relevantes</option>
										<option value="1">Mayor precio</option>
										<option value="2">Menor precio</option>
									</select>
									<p>|</p>
									<div className="wrap-filter-format">
										<div
											style={{ padding: '0px', margin: '0px' }}
											onClick={() => {
												this.props.toggle({ format: 'list' });
											}}
											className={buttonState == 'list' ? 'actives' : null}
										>
											<FontAwesomeIcon
												style={{ padding: '0px', margin: '0px' }}
												icon={faList}
											/>
										</div>
										<div
											style={{ padding: '0px', margin: '0px' }}
											onClick={() => {
												this.props.toggle({ format: 'grid' });
											}}
											className={buttonState == 'grid' ? 'actives' : null}
										>
											<FontAwesomeIcon
												style={{ padding: '0px', margin: '0px' }}
												icon={faTh}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="filter-title">Categorías</div>
						{res_categories.length > 0 && (
							<>
								<div ref={this.categories} className="filter-height-overflow">
									{res_categories.map((node, i) => {
										return (
											<div className="tree-view" key={node.label}>
												<div className="tree-view_item">
													<span
														className="node"
														onClick={() => this.props.onSelectCategory(node, i)}
														style={
															node.selected ? { color: '#d00a2d', fontWeight: '600' } : {}
														}
													>
														{node.label}
													</span>
												</div>
												{node.items &&
													node.items.length > 0 &&
													node.items.map((node1, i1) => {
														return (
															<div className="tree-view_children" key={node1.label}>
																<span
																	className="node"
																	onClick={() => this.props.onSelectCategory(node1, i1)}
																	style={
																		node1.selected
																			? { color: '#d00a2d', fontWeight: '600' }
																			: {}
																	}
																>
																	{node1.label}
																</span>
																{node1.items &&
																	node1.items.length > 0 &&
																	node1.items.map((node2, i2) => {
																		return (
																			<div
																				className="tree-view_children"
																				key={node2.label}
																			>
																				<span
																					className="node"
																					onClick={() =>
																						this.props.onSelectCategory(node2, i2)
																					}
																					style={
																						node2.selected
																							? { color: '#d00a2d', fontWeight: '600' }
																							: {}
																					}
																				>
																					{node2.label}
																				</span>
																				{node2.items &&
																					node2.items.length > 0 &&
																					node2.items.map((node3, i3) => {
																						return (
																							<div
																								className="tree-view_children"
																								key={node3.label}
																							>
																								<span
																									className="node"
																									onClick={() =>
																										this.props.onSelectCategory(node3, i3)
																									}
																									style={
																										node3.selected
																											? {
																													color: '#d00a2d',
																													fontWeight: '600',
																											  }
																											: {}
																									}
																								>
																									{node3.label}
																								</span>
																								{node3.items &&
																									node3.items.length > 0 &&
																									node3.items.map((node4, i4) => {
																										return (
																											<div
																												className="tree-view_children"
																												key={node4.label}
																											>
																												<span
																													className="node"
																													onClick={() =>
																														this.props.onSelectCategory(
																															node4,
																															i4
																														)
																													}
																													style={
																														node4.selected
																															? {
																																	color: '#d00a2d',
																																	fontWeight: '600',
																															  }
																															: {}
																													}
																												>
																													{node4.label}
																												</span>
																											</div>
																										);
																									})}
																							</div>
																						);
																					})}
																			</div>
																		);
																	})}
															</div>
														);
													})}
											</div>
										);
									})}
								</div>
								<div
									style={{ marginTop: 12 }}
									className="view-all"
									onClick={(e) => this.viewAll(e.target, 'categories')}
								>
									Ver Todos
								</div>
							</>
						)}
					</div>
					<div className="filter-group">
						<div className="filter-title">Marca</div>
						{res_brands.length > 0 && (
							<>
								<div
									ref={this.brands}
									className="filter-height-overflow"
									style={{ paddingLeft: 4 }}
								>
									{res_brands.map((item, index) => (
										<p
											key={index}
											className="item-filter-group show"
											onClick={() => {
												this.props.applyFilter('brand', item.key);
											}}
										>
											{item.key} ({item.doc_count})
										</p>
									))}
								</div>
								<div
									className="view-all"
									onClick={(e) => this.viewAll(e.target, 'brands')}
								>
									Ver Todos
								</div>
							</>
						)}
					</div>

					<div className="filter-group show">
						<div className="filter-title">Precio</div>
						<div style={{ paddingLeft: 4 }}>
							{prices.map((item, index) => (
								<div key={index}>
									<a
										onClick={() => {
											this.props.applyFilter('price', item);
										}}
									>
										<p className="item-filter-group show">{renderedPrices[index]}</p>
									</a>
								</div>
							))}
						</div>
						{prices.length > 0 && (
							<form onSubmit={this.handlePrice}>
								<div className="wrap-filter-price" style={{ paddingLeft: 4 }}>
									<input
										onChange={this.validateFromPrice}
										value={this.state.fromPrice}
										placeholder="Mínimo"
										name={'from_price'}
										type="number"
									/>
									<div className="align-center">-</div>
									<input
										onChange={this.validateToPrice}
										value={this.state.toPrice}
										placeholder="Máximo"
										name={'to_price'}
										type="number"
									/>
									<button type="submit">
										<FontAwesomeIcon color={'#fff'} icon={faChevronRight} />
									</button>
								</div>
							</form>
						)}
					</div>
					{/*<div className="send-free">*/}
					{/*  <h4>Envio</h4>*/}
					{/*  <span>Envío gratis <FontAwesomeIcon icon={faTruck} /></span>*/}
					{/*</div> */}
				</div>
				<div className="responsive-filter">
					<div className="responsive-filter-item" onClick={this.toggleMenuOrder}>
						Ordenar
					</div>
					<div
						className="responsive-filter-item"
						onClick={() => {
							const format =
								buttonState == 'grid' ? { format: 'list' } : { format: 'grid' };
							this.props.toggle(format);
						}}
					>
						{text} <FontAwesomeIcon icon={responsiveButton} />
					</div>
					<div
						className="responsive-filter-item border-none"
						onClick={this.toggleMenuFilter}
					>
						Filtrar
					</div>
					<div
						className={`responsive-menu-filter ${this.state.menuOrder ? 'show' : null}`}
					>
						<ul>
							<li>
								<FontAwesomeIcon icon={faTimes} onClick={this.toggleMenuOrder} />
							</li>
							<li>Ordenar</li>
							<li
								onClick={(e) => this.setSort(e)}
								value="2"
								className="responsive-dropdown-item"
							>
								Menor precio
							</li>
							<li
								onClick={(e) => this.setSort(e)}
								value="1"
								className="responsive-dropdown-item"
							>
								Mayor precio
							</li>
							<li
								onClick={(e) => this.setSort(e)}
								value="0"
								className="responsive-dropdown-item"
							>
								Mas relevante
							</li>
						</ul>
					</div>
					<div
						className={`responsive-menu-filter ${this.state.menuFilter ? 'show' : null}`}
					>
						<ul>
							<li>
								<FontAwesomeIcon icon={faTimes} onClick={this.toggleMenuFilter} />
							</li>
							<li>Filtrar</li>
							{filters}
							<li>
								<details className="responsive-dropdown">
									<summary>Categoria</summary>
									{res_categories.map((item, index) => (
										<div
											key={index}
											className="responsive-dropdown-item"
											onClick={() => {
												this.props.applyFilter('category', item[0]);
											}}
										>
											{item[0]}
										</div>
									))}
								</details>
							</li>
							<li>
								<details className="responsive-dropdown">
									<summary>Marca</summary>
									{res_brands.map((item, index) => (
										<div
											key={index}
											className="responsive-dropdown-item"
											onClick={() => {
												this.props.applyFilter('brand', item[0]);
											}}
										>
											{item[0]}
										</div>
									))}
								</details>
							</li>
							<li>
								<details className="responsive-dropdown">
									<summary>Precio</summary>
									<div className="filter-group filter-responsive show">
										<h4>Rango de precios</h4>
										<div>
											{prices.map((item, index) => (
												<div key={index}>
													<a
														onClick={() => {
															this.props.applyFilter('price', item);
														}}
													>
														<p className="item-filter-group show">{item}</p>
													</a>
												</div>
											))}
										</div>
										<form onSubmit={this.handlePrice}>
											<div className="wrap-filter-price">
												<input
													placeholder="Minimo"
													name={'from_price'}
													type="number"
													size="mini"
												/>
												<p>-</p>
												<input
													placeholder="Maximo"
													name={'to_price'}
													type-="number"
													size="mini"
												/>
												<FontAwesomeIcon icon={faChevronCircleRight} />
												<button type="submit">Filtrar</button>
											</div>
										</form>
									</div>
								</details>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Filter;
