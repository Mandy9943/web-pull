import React, { Component } from 'react';
import './PaySection.css';
import PayCredit from '../../assets/img/pay-credit.png';
import iconCredit from '../../assets/img/card.svg';
import PayOnline from '../../assets/img/pay-online.png';
import PayTransfer from '../../assets/img/pay-transfer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Seller from './../SellerInfo';
import Link from 'next/link';
import ListProductMovil from './../listProductMovil/listProductMovil';
// import Rating from '../RatingProduct/RatingProduct';
import ProductVariants from '../ProductVariants';
import { getVariantAvailable } from '../../services/productsApi';
import Select from '../Common/SelectDropdown/Select';
import Spinner from '../Common/Spinner';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class PaySection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cantidad: 0,
			dimensions: {},
			variantsSpinner: props.m_pgid ? false : true,
		};
	}

	componentDidMount() {
		if (this.props.m_pgid) return;

		this.loadData();
	}

	go = (id) => {
		var quantity = this.state.cantidad == 0 ? 1 : this.state.cantidad

		const concatCategories = ()=>{
			var dataCategory = [];
			this.props.props.data.breadcum.forEach((prod, index) => {
				dataCategory.push(prod.name)
			});
			return dataCategory.join(' / ')
		}

		// dataLayer.push({ ecommerce: null });
		// let dataLayerBeginCheckout = {
		// 	'event': 'begin_checkout',
		// 	'ecommerce': {
		// 		'items': [{
		// 			'item_name': this.props.props.data.product_global_title, // Name or ID is required.
		// 			'item_id': this.props.props.data.product_global_id,
		// 			'price': this.props.props.data.price,
		// 			'item_brand': this.props.props.data.brand,
		// 			'quantity': this.state.cantidad == 0 ? 1 : this.state.cantidad,
		// 			'url':'https://kiero.co/detalle/' + this.props.props.data.product_global_id + '_' + this.props.props.data.product_global_title
		// 			.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 			.replace('//', '%2F')
		// 																							.replace('%', '')
		// 																							.split(' ')
		// 																							.join('-'),
		// 																						}]
		// 																					}
		// 	};
		// 	const beginCheckoutGooleDataLayerG4 = (dataLayerBeginCheckout) => {
		// 		this.props.props.data.breadcum.forEach((prod, index) => {
		// 			let keyCategory = `item_category${index + 1}`;
		// 			let valueNameCategory = prod.name;
		// 			dataLayerBeginCheckout['ecommerce']['items'][0][keyCategory] = valueNameCategory;
		// 		});
		// 		return dataLayerBeginCheckout;
		// 	}
			
		// 	let resultDataLayerBeginCheckout = beginCheckoutGooleDataLayerG4(dataLayerBeginCheckout);
			
		// 	dataLayer.push(resultDataLayerBeginCheckout);

		dataLayer.push({
			'event':'checkout',
			'ecommerce': {
				'checkout':{
					"currencyCode": "COP",
					"actionField": {
									"step": 1
									},
					'impressions': [
						{ 
							'name': this.props.props.data.product_global_title, // Name or ID is required.
							'id': this.props.props.data.product_global_id,
							'price': this.props.props.data.price,
							'brand': this.props.props.data.brand,
							'category': concatCategories(),
							'url':'https://kiero.co/detalle/' + this.props.props.data.product_global_id + '_' + this.props.props.data.product_global_title
																							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																							.replace('//', '%2F')
																							.replace('%', '')
																							.split(' ')
																							.join('-'),
							'quantity': this.state.cantidad == 0 ? 1 : this.state.cantidad,
						}
					]
				}
					
			},
			// 'eventCallback': function(){
			// 	window.location = '/pagar/' + id + '/' + quantity;
			// } 
		})

		
		// gtag('event', 'begin_checkout', {
		// 								"items": [
		// 											{
		// 												"id": this.props.props.data.product_global_id,
		// 												"name": this.props.props.data.product_global_title,
		// 												"list_name": "Search Results",
		// 												"brand": this.props.props.data.brand,
		// 												"category": concatCategories(),
		// 												"quantity": 5,
		// 												'price': this.props.props.data.price,
		// 												'url':'https://kiero.co/detalle/' + this.props.props.data.product_global_id + '_' + this.props.props.data.product_global_title
		// 																							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
		// 																							.replace('//', '%2F')
		// 																							.replace('%', '')
		// 																							.split(' ')
		// 																							.join('-'),
		// 												"list_position": 0,
		// 											}
		// 								]
		// 	});

		if (typeof window !== "undefined") {
				if (window.fbq != null) { 
					window.fbq('track','InitiateCheckout',{
														'content_ids': this.props.props.data.product_global_id,
														'content_name': this.props.props.data.product_global_title,
														'product_group': this.props.props.data.type,
														'content_type':'product',
														'content_category':this.props.props.data.breadcum[0].name,
														'contents': [{
															'id':this.props.props.data.product_global_id,
															'quantity':this.state.cantidad == 0 ? 1 : this.state.cantidad,
														}],
														'currency': 'COP',
														'value': this.props.props.data.price,
														'num_items':this.state.cantidad == 0 ? 1 : this.state.cantidad
													}) 
				} else {
						fbq('track','InitiateCheckout',{
														'content_ids': this.props.props.data.product_global_id,
														'content_name': this.props.props.data.product_global_title,
														'product_group': this.props.props.data.type,
														'content_type':'product',
														'content_category':this.props.props.data.breadcum[0].name,
														'contents': [{
															'id':this.props.props.data.product_global_id,
															'quantity':this.state.cantidad == 0 ? 1 : this.state.cantidad,
														}],
														'currency': 'COP',
														'value': this.props.props.data.price,
														'num_items':this.state.cantidad == 0 ? 1 : this.state.cantidad
													}) 
						}
		}

		

			
		};
		
		loadData = async () => {
		this.setState({
			variantsSpinner: true,
		});
		const res = await getVariantAvailable(this.props.pid, {});
		const data = await res.data;

		this.setState({
			dimensions: data.data,
			variantsSpinner: false,
			m_pgid: data.data.product_id ? true : false, //Aqui va product_global_id
		});
	};

	handleSelect = async (queryset) => {
		let params = {};
		// 1- Check if product is not available
		if (!queryset.available) {
			//  If it is not available query just that one
			params[queryset.name] = queryset.value;
		} else {
			//  If it's available, so you can mix with another previously selected variant
			// 2- Obtain selected keys
			let selectedDimensions = [];
			for (const key of Object.keys(this.state.dimensions).filter(
				(key) => key !== queryset.name && key !== 'product_global_id'
			)) {
				for (const value of this.state.dimensions[key].values) {
					if (value.select) {
						selectedDimensions.push({ name: key, value: value.value });
					}
				}
			}

			// 3- Prepare query for selected dimensions
			// 3.1 Insert queryset into params
			params[queryset.name] = queryset.value;
			//
			// // 3.2 Insert selectedDimensions into params
			selectedDimensions.forEach((item) => {
				params[item.name] = item.value;
			});
		}

		// 4- Once I have the payload (params) fetch data
		const res = await getVariantAvailable(this.props.pid, { params: params }); // TODO handle exception
		const data = await res.data;

		// 5- Check if product_global_id is non null
		if (data.data.product_global_id) {
			this.props.reloadDetails(data.data.product_global_id);
		}

		// 6- If it is not a variant, update current data
		this.setState({ dimensions: data.data });
	};

	handleChangeCantidad = (event) => {
		this.setState({ cantidad: event.target.value });
	};

	renderPayButtonSection = () => {
		const btnEnabled = <button type="submit" onClick={() => this.go(this.props.pgid)}>Comprar</button>;
		const btnDisabled = (
			<button
				style={{ opacity: '0.35', cursor: 'not-allowed' }}
				onClick={(e) => {
					e.preventDefault();
				}}
			>
				Comprar
			</button>
		);

		if (this.props.m_pgid) {
			let qty_options = {
				values: [],
			};

			if (Number(this.props.stock) > 0) {
				for (let i = 1; i <= this.props.stock; i++) {
					qty_options['values'][i - 1] = {
						available: true,
						text: `Cantidad: ${i} (stock disponible ${this.props.stock})`,
						value: i,
					};
				}
			}

			return qty_options.values.length > 0 ? (
				<div className="pay-item">
					<section className="select-icon">
						<Select
							items={qty_options}
							showDefault={false}
							onSelect={(qnt) => {
								this.setState({ cantidad: qnt });
							}}
						/>
					</section>
					{btnEnabled}
				</div>
			) : (
				<div className="pay-item info-pay-product-detail">
					<h3>Sin unidades disponibles.</h3>
					{btnDisabled}
				</div>
			);
		} else {
			return (
				<div className="pay-item">
					<div className="pay-item info-pay-product-detail">
						<h3>Debe seleccionar la variante deseada</h3>
					</div>
					{btnDisabled}
				</div>
			);
		}
	};

	render() {
		return (
			<div className="pay">
				<div className="pay-item">
					<h1 className="title-pay-product-detail">{this.props.title.substr(0, 60)} </h1>
					{/* <div className="productFavIcon2">
						<Checkbox
							style={{ color: '#CF0A2C' }}
							icon={<FavoriteBorder fontSize="large" />}
							checkedIcon={<Favorite fontSize="large" />}
						/>
					</div> */}
				</div>
				{/* <div className="pay-item">
          <Rating productId={this.props.pid}/>
        </div> */}
				<div className="pay-item">
					<h3 className="price-pay-product-detail">
						${' '}
						{this.props.price
							? this.props.price
									.toString()
									.split('.')[0]
									.replace(/(.)(?=(\d{3})+$)/g, '$1.')
							: ' ... '}
					</h3>
				</div>
				<div className="pay-item pay-img no-movil">
					<img src={iconCredit} className="icon-credit" />
					<img src={PayCredit} className="pay-section-img" />
					<Link href="/ayuda">
						<a>
							<p>Más informacion</p>
						</a>
					</Link>
				</div>
				<div className="pay-item info-pay-product-detail">
					<h3>
						<span className="no-movil">Kiero</span> envíos{' '}
						<span className="no-web">gratis</span> <FontAwesomeIcon icon={faTruck} />{' '}
						<FontAwesomeIcon className="no-web icon-right" icon={faAngleRight} />
					</h3>
					<p>Nuestros productos son importados</p>
					<Link href="/ayuda">
						<a>
							<p>Conoce más</p>
						</a>
					</Link>
				</div>
				{this.state.variantsSpinner ? (
					<Spinner />
				) : (
					<ProductVariants
						id={this.props.pgid}
						dimensions={this.state.dimensions}
						select={this.handleSelect}
					/>
				)}
				<div className="clasecantidad">
					{this.state.cantidad > 0 ? (
						<div className="cantidad">
							{'Haz Seleccionado la cantidad de ' + this.state.cantidad + ' articulos'}
						</div>
					) : (
						''
					)}
				</div>
				<form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/" target="_blank">
						<input name="merchantId"    type="hidden"  value="530932"   />
						<input name="accountId"     type="hidden"  value="512321" />
						<input name="description"   type="hidden"  value="Kiero Pagos"  />
						<input name="referenceCode" type="hidden"  value="kieropagosfgkjwl24332" />
						<input name="amount"        type="hidden"  value="20000"   />
						<input name="tax"           type="hidden"  value="3193"  />
						<input name="taxReturnBase" type="hidden"  value="16806" />
						<input name="currency"      type="hidden"  value="COP" />
						<input name="signature"     type="hidden"  value="1a0d02164c30fed7e6fcf65ac78ebb7c"  />
						<input name="test"          type="hidden"  value="0" />
						<input name="buyerEmail"    type="hidden"  value="test@test.com" />
						<input name="responseUrl"    type="hidden"  value="http://www.test.com/response" />
						<input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation" />
						{this.renderPayButtonSection()}
						{/* <input name="Submit"        type="submit"  value="Enviar" > */}
				</form>

				<ListProductMovil />
				<div className="section-pay-type no-movil">
					<div className="section-pay-type-title">
						<h4>Medios de pago</h4>
						<FontAwesomeIcon icon={faAngleRight} />
					</div>
					<div className="section-pay-type-items">
						<p>Tarjetas de crédito</p>
						<div>
							<img src={PayCredit} />
						</div>
						<p>Efectivo en puntos de pago</p>
						<div>
							<img src={PayOnline} />
						</div>
						<p>Transferencia desde tu banco</p>
						<div>
							<img src={PayTransfer} />
						</div>
					</div>
				</div>
				<div className="section-pay-send no-movil">
					<div className="section-pay-send-title">
						<h4>Formas de envío</h4>
						<FontAwesomeIcon icon={faAngleRight} />
					</div>
					<div className="section-pay-send-subtitle">
						<span>
							<FontAwesomeIcon icon={faTruck} />
						</span>
						<p>Envíos gratis a todo el país</p>
					</div>
					<div className="section-pay-send-description">
						<p>
							Es el servicio de kiero que permite recibir tus productos de forma rápida y
							segura
						</p>
					</div>
				</div>
				<div className="section-pay-wrap-seller no-movil">
					<Seller productId={this.props.pid} />
				</div>
			</div>
		);
	}
}

export default PaySection;
