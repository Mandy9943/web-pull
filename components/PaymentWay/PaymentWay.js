import React, { Component } from 'react';
import CardImg from '../../assets/img/default.webp';
import PayEfecty from '../../assets/img/pay-cash-efecty.png';
import PayBaloto from '../../assets/img/pay-cash-baloto.png';
import PaySured from '../../assets/img/pay-cash-sured.png';
import Button from '../Common/Button/Button';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer';
import Select from '../Common/Select';
import './PaymentWay.css';
import './PaymentWayMovil.css';
import {
	getData,
	makePayment,
	makePaymentCC,
	makePaymentCash,
} from '../../services/userApi';
import Modal from '../Common/Modal';
import AddAddress from '../UserAccount/AddAddress';
import { validatePayCC, validatePaymentPSE } from '../../lib/validation';
import { priceFormat, wompi_at_url } from '../../lib/config';
import Error from '../Login/Error';
import InputTip from '../InputTip';
import PaymentLoading from '../PaymentLoading';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import PaymentCash from '../PaymentCash';
import PaymentCashResult from '../PaymentCashResult';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { apiget } from '../../lib/request';

export default class PaymentWay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			idNumber: '',
			ccNumber: '',
			ccName: '',
			ccCvv: '',
			ccId: '',
			productQuantity: this.props.cantidad,
			shownPaymentOption: 0,
			closeCredit: true,
			closeCash: true,
			closeTransfer: true,
			banks: [],
			addresses: [],
			modal: false,
			modalAddr: false,
			modalCashAfterAddr: false,
			selectedAddr: -1,
			auxAddr: 0,
			addrLoaded: false,
			error: null,
			cc_error: null,
			pse_error: null,
			tips: {},
			ccv: '',
			expiration_date: '',
			focus: '',
			card_holder: '',
			card_number: '',
			card_max_length: 16,
			card_type: 'invalid',
			paymentLoading: false,
			paymentError: false,
			paymentCash: false,
			paymentCashType: 0,
			paymentCashResult: false,
			paymentCashDocument: '',
			modalValidate: false,
			acceptance_token: '',
			acp_checked: false,
		};
		this.validateName = this.validateName.bind(this);
		this.validatePhone = this.validatePhone.bind(this);
		this.validateIdNumber = this.validateIdNumber.bind(this);

		this.validateCcNumber = this.validateCcNumber.bind(this);
		this.validateCcName = this.validateCcName.bind(this);
		this.validateCcCvv = this.validateCcCvv.bind(this);
		this.validateCcId = this.validateCcId.bind(this);
	}

	componentDidMount() {
		this.loadBanks();
		this.loadAddresses();
	}

	preventCopyPasteCut(event) {
		event.preventDefault();
	}

	validateName(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		this.setState({
			name: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	validatePhone(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			phone: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	validateIdNumber(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			idNumber: pattern.test(value) ? value : value.slice(0, -1),
		});
	}
	validateCcNumber(value) {
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			ccNumber: pattern.test(value) ? value : value.slice(0, -1),
		});
	}
	validateCcName(value) {
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		this.setState({
			ccName: pattern.test(value) ? value : value.slice(0, -1),
		});
	}
	validateCcCvv(value) {
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			ccCvv: pattern.test(value) ? value : value.slice(0, -1),
		});
	}
	validateCcId(value) {
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			ccId: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	loadBanks() {
		getData('/getPseBanks').then((response) => {
			this.setState({ banks: response.data.banks ? response.data.banks : [] });
		});
	}

	loadAcceptanceToken = (enabled) => {
		this.setState({ acp_checked: enabled });
		if (!enabled) {
			return false;
		}

		apiget(wompi_at_url).then((response) => {
			if (response.data.data.presigned_acceptance.acceptance_token.length > 0) {
				let actkn = response.data.data.presigned_acceptance.acceptance_token;
				this.setState({ acceptance_token: actkn });
			}
		});
	};

	loadAddresses = () => {
		getData('/getAddresses', this.props.user.jwt).then((response) => {
			this.setState({
				addresses: response.data,
				addrLoaded: true,
				modalAddr: false,
				modal: false,
			});
		});
	};

	hidePaymentOptions = (option) => {
		if (option === 1) {
			this.setState({
				shownPaymentOption: 1,
			});
		}
		if (option === 2) {
			this.setState({
				shownPaymentOption: 2,
			});
		}
		if (option === 3) {
			this.setState({
				shownPaymentOption: 3,
			});
		}
	};

	accordionCredit = () => {
		this.setState({
			closeCredit: !this.state.closeCredit,
			closeCash: true,
			closeTransfer: true,
		});
	};

	accordionCash = () => {
		this.setState({
			closeCash: !this.state.closeCash,
			closeCredit: true,
			closeTransfer: true,
		});
	};

	accordionTransfer = () => {
		this.setState({
			closeTransfer: !this.state.closeTransfer,
			closeCash: true,
			closeCredit: true,
		});
	};

	openAddrsModal = () => {
		this.setState({
			modalAddr: true,
		});
	};

	setAddr = () => {
		const x = this.state.auxAddr;
		if (x !== '-1' && x !== 0) {
			this.setState({ modalAddr: false, selectedAddr: x });
			if (this.state.paymentCashType > 0) {
				this.setState({ paymentCash: true });
			}
			dataLayer.push({ ecommerce: null });
			let dataLayerAddShippingInfo = {
				'event': 'add_shipping_info',
				'ecommerce': {
					'currency': 'COP',
					'items':[ {
						'item_name': this.props.data.product_global_title, // Name or ID is required.
						'item_id': this.props.data.product_global_id,
						'price': this.props.data.price,
						'item_brand': this.props.data.brand,
						'quantity': this.props.cantidad,
						'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																										.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																										.replace('//', '%2F')
																										.replace('%', '')
																										.split(' ')
																										.join('-'),
						}]
					}
				};
			const AddShippingInfoGooleDataLayer = (dataLayerAddShippingInfo) => {
				this.props.data.breadcum.forEach((prod, index) => {
					let keyCategory = `item_category${index + 1}`;
					let valueNameCategory = prod.name;
					dataLayerAddShippingInfo['ecommerce']['items'][0][keyCategory] = valueNameCategory;
				});
				return dataLayerAddShippingInfo;
			}
			
			let resultDataLayerAddShippingInfo = AddShippingInfoGooleDataLayer(dataLayerAddShippingInfo);

			dataLayer.push(resultDataLayerAddShippingInfo);
		} else {
			alert('Seleccione una dirección');
		}
	};

	tmpChangeAddr = (e) => {
		this.setState({ auxAddr: e.target.value });
	};

	payPSE = async (e) => {
		e.preventDefault();

		if (this.state.selectedAddr == -1) {
			this.setState({
				modalAddr: true,
			});
			return false;
		}

		const result = await makePayment(
			{
				product_id: this.props.data.product_id,
				address_id: this.state.addresses[this.state.selectedAddr].address_id,
				names: e.target.elements.names.value,
				email: e.target.elements.email.value,
				phone: e.target.elements.phone.value,
				person_type: e.target.elements.person_type.value,
				document_type: e.target.elements.document_type.value,
				document_number: e.target.elements.document_number.value,
				bank_id: e.target.elements.bank_id.value,
				quantity:this.props.cantidad
			},
			this.props.user.jwt
		);
		dataLayer.push({ ecommerce: null });
		let dataLayerAddPaymentInfoPSE = {
			'event': 'add_payment_info',
			'ecommerce': {
				'currency': 'COP',
				'items': [{
					'item_name': this.props.data.product_global_title, // Name or ID is required.
					'item_id': this.props.data.product_global_id,
					'price': this.props.data.price,
					'item_brand': this.props.data.brand,
					'quantity': this.props.cantidad,
					'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																									.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																									.replace('//', '%2F')
																									.replace('%', '')
																									.split(' ')
																									.join('-'),
					'payment_type':'pse'																				
					}]
				}
			};
			const addPaymentInfoPSEGooleDataLayer = (dataLayerAddPaymentInfoPSE) => {
				this.props.data.breadcum.forEach((prod, index) => {
					let keyCategory = `item_category${index + 1}`;
					let valueNameCategory = prod.name;
					dataLayerAddPaymentInfoPSE['ecommerce']['items'][0][keyCategory] = valueNameCategory;
				});
				return dataLayerAddPaymentInfoPSE;
			}
				
			let resultDataLayerAddPaymentInfoPSE = addPaymentInfoPSEGooleDataLayer(dataLayerAddPaymentInfoPSE);

			dataLayer.push(resultDataLayerAddPaymentInfoPSE);
			
			if (typeof window !== "undefined") {
				if (window.fbq != null) { 
					window.fbq('track','AddPaymentInfo',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
															'id':this.props.data.product_global_id,
															'quantity':this.props.cantidad,
														}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'pse'
													}) 
				} else {
						fbq('track','AddPaymentInfo',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
															'id':this.props.data.product_global_id,
															'quantity':this.props.cantidad,
														}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'pse'
													}) 
						}
			}

		if (result.data) {
			dataLayer.push({ ecommerce: null });
			let resultDataLayerPurchasePSE = result.data.data;
			resultDataLayerPurchasePSE.ecommerce.transaction_status = result.data.transaction_status;
			resultDataLayerPurchasePSE.ecommerce.items[0].url = 'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																												.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																												.replace('//', '%2F')
																												.replace('%', '')
																												.split(' ')
																												.join('-'),
			dataLayer.push(resultDataLayerPurchasePSE);
			if (typeof window !== "undefined") {
				if (window.fbq != null) { 
					window.fbq('track','Purchase',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'pse',
													'num_items':this.props.cantidad
												}) 
				} else {
						fbq('track','Purchase',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'pse',
													'num_items':this.props.cantidad
												}) 
						}
		}
			window.location = result.data.URL;
		} else {
			this.setState({
				error: result.error,
			});
		}
	};

	payCC = async (e) => {
		e.preventDefault();

		this.setState({ cc_error: null });
		const actualSize = e.target.elements.card_number.value.length;
		let tips = {};

		if (this.state.card_type == 'invalid') {
			tips.card_number = 'El numero de tarjeta ingresado no es valido';
		}

		if (this.state.acceptance_token.length < 1 || !this.state.acp_checked) {
			tips.acceptance_token =
				'Debes aceptar los terminos y condiciones antes de continuar.';
		}

		const ccPayload = {
			product_id: this.props.data.product_id,
			device_session_id: this.props.user.dsi.dsi,
			document_type: e.target.elements.document_type.value,
			document_number: e.target.elements.document_number.value
				.split(' ')
				.join('')
				.split('.')
				.join(''),
			card_type: this.state.card_type,
			card_number: e.target.elements.card_number.value.split(' ').join(''),
			ccv: this.state.ccCvv,
			expiration_date: '20' + this.state.expiration_date, // .expiration_date.value,
			card_holder: e.target.elements.card_holder.value,
			monthly_fees: e.target.elements.monthly_fees.value,
			accept_token: this.state.acceptance_token,
			quantity: this.props.cantidad
		};
		// console.log("payment",ccPayload, "this.state.ccCvv",this.state.ccCvv, "cvv",e.target.elements)

		const validated = Object.assign(tips, validatePayCC(ccPayload));
		// console.log(validated);
		if (Object.values(validated).length == 0) {
			if (this.state.selectedAddr == -1) {
				this.setState({
					modalAddr: true,
				});
				return false;
			}

			ccPayload.address_id = this.state.addresses[this.state.selectedAddr].address_id;
			this.setState({ paymentLoading: true });

			dataLayer.push({ ecommerce: null });
			let dataLayerAddPaymentInfoCC = {
				'event': 'add_payment_info',
				'ecommerce': {
					'currency': 'COP',
					'items': [{
						'item_name': this.props.data.product_global_title, // Name or ID is required.
						'item_id': this.props.data.product_global_id,
						'price': this.props.data.price,
						'item_brand': this.props.data.brand,
						'quantity': this.props.cantidad,
						'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																										.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																										.replace('//', '%2F')
																										.replace('%', '')
																										.split(' ')
																										.join('-'),
						'payment_type':'cc'
						}]
					}
				};
			const addPaymentInfoCCGooleDataLayer = (dataLayerAddPaymentInfoCC) => {
				this.props.data.breadcum.forEach((prod, index) => {
					let keyCategory = `item_category${index + 1}`;
					let valueNameCategory = prod.name;
					dataLayerAddPaymentInfoCC['ecommerce']['items'][0][keyCategory] = valueNameCategory;
				});
				return dataLayerAddPaymentInfoCC;
			}
				
			let resultDataLayerAddPaymentInfoCC = addPaymentInfoCCGooleDataLayer(dataLayerAddPaymentInfoCC);

			dataLayer.push(resultDataLayerAddPaymentInfoCC);

			if (window.fbq != null) { 
				window.fbq('track','AddPaymentInfo',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'cc'
												}) 
			} else {
					fbq('track','AddPaymentInfo',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'cc'
												}) 
					}
	

			const rs = await makePaymentCC(ccPayload, this.props.user.jwt);
			
			if (rs.data) {
				// console.log('CC',rs.data.data)
				dataLayer.push({ ecommerce: null });
				let resultDataLayerPurchaseCC = rs.data.data;
				resultDataLayerPurchaseCC.ecommerce.transaction_status = rs.data.result;
				resultDataLayerPurchaseCC.ecommerce.items[0].url = 'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																													.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																													.replace('//', '%2F')
																													.replace('%', '')
																													.split(' ')
																													.join('-'),
				dataLayer.push(resultDataLayerPurchaseCC);
				if (typeof window !== "undefined") {
					if (window.fbq != null) { 
						window.fbq('track','Purchase',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
																		'id':this.props.data.product_global_id,
																		'quantity':this.props.cantidad,
																	}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'cc',
														'num_items':this.props.cantidad
													}) 
					} else {
							fbq('track','Purchase',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
																		'id':this.props.data.product_global_id,
																		'quantity':this.props.cantidad,
																	}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'cc',
														'num_items':this.props.cantidad
													}) 
							}
				}

				window.location = '/pay_result/' + rs.data.id;

			} else {
				this.setState({
					paymentLoading: false,
					error: rs.error,
					paymentError: true,
				});
			}
		} else {
			this.setState({
				tips: validated,
			});
		}
	};

	payCash = async (e) => {
		e.preventDefault();
		this.hidePaymentOptions(2);
		const cashPayload = {
			product_id: this.props.data.product_id,
			product_quantity: this.state.productQuantity,
			full_name: e.target.elements.cash_form_name.value,
			email: e.target.elements.cash_form_email.value,
			phone_number: e.target.elements.cash_form_number.value,
			paymentMethod: this.getPaymentType(),
		};
		// console.log('propiedades de pagar', cashPayload);
		if (cashPayload.email && cashPayload.full_name && cashPayload.phone_number) {
			cashPayload.address_id = this.state.addresses[this.state.selectedAddr].address_id;

			dataLayer.push({ ecommerce: null });
			let dataLayerAddPaymentInfoMoney = {
				'event': 'add_payment_info',
				'ecommerce': {
					'currency': 'COP',
					'items': [{
						'item_name': this.props.data.product_global_title, // Name or ID is required.
						'item_id': this.props.data.product_global_id,
						'price': this.props.data.price,
						'item_brand': this.props.data.brand,
						'quantity': this.props.cantidad,
						'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																										.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																										.replace('//', '%2F')
																										.replace('%', '')
																										.split(' ')
																										.join('-'),
						'payment_type':'cash'
						}]
					}
				};
			const AddPaymentInfoMoneyGooleDataLayer = (dataLayerAddPaymentInfoMoney) => {
				this.props.data.breadcum.forEach((prod, index) => {
					let keyCategory = `item_category${index + 1}`;
					let valueNameCategory = prod.name;
					dataLayerAddPaymentInfoMoney['ecommerce']['items'][0][keyCategory] = valueNameCategory;
				});
				return dataLayerAddPaymentInfoMoney;
			}
			
			let resultDataLayerAddPaymentInfoMoney = AddPaymentInfoMoneyGooleDataLayer(dataLayerAddPaymentInfoMoney);

			dataLayer.push(resultDataLayerAddPaymentInfoMoney);
			if (window.fbq != null) { 
				window.fbq('track','AddPaymentInfo',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'cash'
												}) 
			} else {
					fbq('track','AddPaymentInfo',{
													'content_ids': this.props.data.product_global_id,
													'content_name': this.props.data.product_global_title,
													'product_group': this.props.data.type,
													'content_type':'product',
													'content_category':this.props.data.breadcum[0].name,
													'contents': [{
																	'id':this.props.data.product_global_id,
																	'quantity':this.props.cantidad,
																}],
													'currency': 'COP',
													'value': this.props.data.price,
													'payment_type':'cash'
												}) 
					}
		
	

			const rs = await makePaymentCash(cashPayload, this.props.user.jwt);
			// console.log(rs);
			if (rs.data) {
				dataLayer.push({ ecommerce: null });
				let resultDataLayerPurchaseCash = rs.data.data;
				resultDataLayerPurchaseCash.ecommerce.transaction_status = rs.data.result.state;
				resultDataLayerPurchaseCash.ecommerce.items[0].url = 'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
																													.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
																													.replace('//', '%2F')
																													.replace('%', '')
																													.split(' ')
																													.join('-'),
				dataLayer.push(resultDataLayerPurchaseCash);

				if (typeof window !== "undefined") {
					if (window.fbq != null) { 
						window.fbq('track','Purchase',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
																		'id':this.props.data.product_global_id,
																		'quantity':this.props.cantidad,
																	}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'cash',
														'num_items':this.props.cantidad
													}) 
					} else {
							fbq('track','Purchase',{
														'content_ids': this.props.data.product_global_id,
														'content_name': this.props.data.product_global_title,
														'product_group': this.props.data.type,
														'content_type':'product',
														'content_category':this.props.data.breadcum[0].name,
														'contents': [{
																		'id':this.props.data.product_global_id,
																		'quantity':this.props.cantidad,
																	}],
														'currency': 'COP',
														'value': this.props.data.price,
														'payment_type':'cash',
														'num_items':this.props.cantidad
													}) 
							}
			}

				this.setState({
					paymentCashResult: true,
					paymentCash: false,
					paymentCashDocument: rs.data.result.pdf,
				});

			} else {
				// console.log(rs);
			}
		} else {
			alert('Complete todos los campos');
		}
	};

	openPaymentCash = (type) => {
		if (this.state.selectedAddr == -1) {
			this.setState({ modalAddr: true, paymentCashType: type });
			return false;
		} else {
			this.setState({ paymentCash: true, paymentCashType: type });
		}
	};

	exitccv = (e) => {
		this.setState({ focus: '' });
	};

	handleInputFocus = (e) => {
		let name = '';
		if (e.target.name != 'ccv') {
			name = e.target.name;
		} else {
			name = 'cvc';
		}
		this.setState({ focus: name });
	};

	handleInputChange = (e) => {
		let { name, value } = e.target;
		this.setState({ [name]: value });
		if (name === 'card_number') {
			this.validateCcNumber(value);
		}
		if (name === 'card_holder') {
			this.validateCcName(value);
		}
		if (name === 'cvv') {
			this.validateCcCvv(value);
		}
		if (name === 'document_number') {
			this.validateCcId(value);
		}
	};

	handleDateTimeChange = (e) => {
		let value = moment(e).format('YY/MM');
		this.setState({ expiration_date: value });
	};

	card_change = (type, valid) => {
		this.setState({ card_max_length: type.maxLength });
		if (valid) {
			this.setState({ card_type: type.issuer });
		} else {
			this.setState({ card_type: 'invalid' });
		}
	};

	getPaymentType = () => {
		// console.log(this.state.paymentCashType);

		if (this.state.paymentCashType === 1) {
			return 'EFECTY';
		}

		if (this.state.paymentCashType === 2) {
			return 'BALOTO';
		}

		if (this.state.paymentCashType === 3) {
			return 'SURED';
		}
	};
	// dataPaymentGoogle = {}
	render() {
		// console.log("propiedades al pagar", this.props)
		const addAddressContent = (
			<AddAddress
				jwt={this.props.user.jwt}
				save={this.loadAddresses}
				cancel={() => this.setState({ modal: false, modalAddr: false })}
				noheader="1"
			/>
		);

		const addressListContent = (
			<>
				<Select  customStyles="paymentWaySelect" onChange={this.tmpChangeAddr}>
					<option value="-1" key={99999999}>Seleccione una dirección existente</option>
					{this.state.addresses.map((addr, i) => {
						return (
							<option key={i + 1} value={i}>
								{addr.address}
							</option>
						);
					})}
				</Select>
				<Button onClick={this.setAddr} text={'Aceptar'} />

				<Button
					onClick={() => this.setState({ modal: 1, modalAddr: false })}
					text={'Agregar dirección'}
				/>
			</>
		);

		const modalValidatePay = (
			<>
				<p
					style={{
						width: '80%',
						margin: '0 auto',
						textAlign: 'center',
						marginBottom: '2em',
					}}
				>
					{
						'Para realizar el pago debes completar el formulario. Por favor introduce tu dirección de domicilio.'
					}
				</p>

				<Button
					onClick={() =>
						this.setState({ modal: 1, modalAddr: false, modalValidate: false })
					}
					text={'Agregar dirección'}
				/>
			</>
		);

		const docType = (
			<>
				{' '}
				<option key={1} value={'CC'}>Cédula de ciudadanía </option>
				<option key={2} value={'CE'}>Cédula de extranjería </option>
				<option key={3} value={'NIT'}> NIT </option>
				{/* <option key={4} value={"TI"}>Tarjeta de Identidad </option> */}
				<option key={5} value={'PP'}>Pasaporte </option>
				<option key={6} value={'DE'}>Documento de identificación extranjero </option>
			</>
		);

		let months_fees = [];
		let i = 0;
		for (i = 1; i < 32; i++) {
			months_fees.push(<option value={i} key={i + 1}>{i}</option>);
		}

		const totalPrice = priceFormat(
			parseFloat(this.props.data.price) * this.state.productQuantity
		);

		return (
			<div className="payment-way">
				<script
					type="text/javascript"
					src={
						'https://maf.pagosonline.net/ws/fp/tags.js?id=' +
						this.props.user.dsi.dsi +
						this.props.user.dsi.ui
					}
				></script>
				<noscript>
					<iframe
						style={{
							width: '100px',
							height: '100px',
							border: '0',
							position: 'absolute',
							top: '-5000px',
						}}
						src={
							'https://maf.pagosonline.net/ws/fp/tags.js?id=' +
							this.props.user.dsi.dsi +
							this.props.user.dsi.ui
						}
					></iframe>
				</noscript>

				{this.state.modal ? (
					<Modal
						toggle={() => this.setState({ modal: false })}
						content={addAddressContent}
						button
					/>
				) : null}

				{this.state.modalAddr ? (
					<Modal
						toggle={() => this.setState({ modalAddr: false, paymentCashType: 0 })}
						content={addressListContent}
						button
					/>
				) : null}

				{this.state.paymentCash ? (
					<Modal
						toggle={() => this.setState({ paymentCash: false, paymentCashType: 0 })}
						content={<PaymentCash onSubmit={this.payCash} />}
						button
					/>
				) : null}
				{this.state.modalValidate ? (
					<Modal
						toggle={() => this.setState({ modalValidate: false })}
						content={modalValidatePay}
						button
					/>
				) : null}
				<Header />

				{this.state.paymentLoading ? (
					<PaymentLoading
						error={this.state.paymentError}
						back={() => this.setState({ paymentLoading: false })}
					/>
				) : (
					<div className="container-payment-way">
						<div className="product-description payment-way-box only-movil">
							<img
								src={
									this.props.data.images.length > 0
										? this.props.data.images[0].url
										: 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'
								}
							/>
							<div className="content-product-description">
								<p>{this.props.data.title}</p>
								<p className="quantity">Cantidad: {this.state.productQuantity}</p>
								<h3>Total: $ {totalPrice} </h3>
							</div>
						</div>
						<h2>Elige la forma de pago</h2>

						<div className="content-payment-way">
							<div className="way-to-pay">
								{this.state.shownPaymentOption === 0 ||
								this.state.shownPaymentOption === 1 ? (
									<div
										className="credit payment-way-box"
										onClick={() => this.accordionCredit()}
									>
										<p>Crédito</p>
									</div>
								) : (
									''
								)}
								<div
									className={
										this.state.closeCredit
											? 'accordion-payment-way'
											: 'accordion-payment-way actives'
									}
								>
									<div className="content-accordion">
										<Cards
											cvc={this.state.ccv}
											expiry={this.state.expiration_date}
											focused={this.state.focus}
											name={this.state.card_holder}
											number={this.state.card_number}
											callback={this.card_change}
											// placeholders={"TU NOMBRE"}
										/>
										<form id="form-credit" onSubmit={this.payCC}>
											<input
												required
												type="tel"
												name="card_number"
												placeholder="Numero de tarjeta."
												onCut={this.preventCopyPasteCut}
												onCopy={this.preventCopyPasteCut}
												onPaste={this.preventCopyPasteCut}
												autoComplete="off"
												value={this.state.ccNumber}
												onChange={this.handleInputChange}
												onFocus={this.handleInputFocus}
												maxLength={this.state.card_max_length}
											/>
											<InputTip msg={this.state.tips.card_number} />
											<input
												required
												onCut={this.preventCopyPasteCut}
												onCopy={this.preventCopyPasteCut}
												onPaste={this.preventCopyPasteCut}
												autoComplete="off"
												maxLength={64}
												name={'card_holder'}
												value={this.state.ccName}
												onChange={this.handleInputChange}
												onFocus={this.handleInputFocus}
												placeholder="Nombre y apellido impreso *"
											/>
											<InputTip msg={this.state.tips.card_holder} />
											<div className="input-form">
												<Datetime
													inputProps={{ readOnly: true, appearance: 'auto' }}
													onChange={this.handleDateTimeChange}
													value={this.state.expiration_date}
													placeholder="AA/MM"
													dateFormat="YY/MM"
													timeFormat={false}
												/>
												<input
													onCut={this.preventCopyPasteCut}
													onCopy={this.preventCopyPasteCut}
													onPaste={this.preventCopyPasteCut}
													autoComplete="off"
													required
													maxLength={4}
													onChange={this.handleInputChange}
													value={this.state.ccCvv}
													onFocus={this.handleInputFocus}
													onBlur={this.exitccv}
													name={'cvv'}
													placeholder="CVV"
												/>
											</div>
											<div className="input-form">
												<InputTip msg={this.state.tips.expiration_date} />
												<InputTip msg={this.state.tips.ccv} />
											</div>
											Coutas:
											<div className={'content-accordion-form'}>
												<Select  name={'monthly_fees'}>{months_fees}</Select>
											</div>
											<div className="input-form">
												<InputTip msg={this.state.tips.monthly_fees} />
											</div>
											<div className={'content-accordion-form'}>
												<Select  name={'document_type'}>{docType}</Select>
												<InputTip msg={this.state.tips.document_type} />
											</div>
											<input
												onCut={this.preventCopyPasteCut}
												onCopy={this.preventCopyPasteCut}
												onPaste={this.preventCopyPasteCut}
												autoComplete="off"
												onChange={this.handleInputChange}
												value={this.state.ccId}
												required
												name={'document_number'}
												placeholder="Número de documento"
											/>
											<InputTip msg={this.state.tips.document_number} />
										</form>
										<input
											required
											onChange={() => this.loadAcceptanceToken(!this.state.acp_checked)}
											id={'tos_cb'}
											type="checkbox"
											checked={this.state.acp_checked}
										/>
										<label htmlFor={'tos_cb'}>Aceptar terminos y condiciones </label>
										<InputTip msg={this.state.tips.acceptance_token} />
									</div>
									<button
										onClick={() => this.hidePaymentOptions(1)}
										type="submit"
										form="form-credit"
										className="button-continue main-button"
									>
										<p>Pagar</p>
									</button>

									{this.state.cc_error && <Error message={this.state.cc_error} />}
								</div>
								{this.state.shownPaymentOption === 0 ||
								this.state.shownPaymentOption === 2 ? (
									<div
										className="cash payment-way-box"
										onClick={() => this.accordionCash()}
									>
										<p>Efectivo</p>
									</div>
								) : (
									''
								)}
								<div
									className={
										this.state.closeCash
											? 'accordion-payment-way'
											: 'accordion-payment-way actives'
									}
								>
									{!this.state.paymentCashResult ? (
										<div className="payment-cash-logos">
											<div>
												<img
													alt="pago en linea"
													src={PayEfecty}
													onClick={() => this.openPaymentCash(1)}
												/>
												<img
													alt="pago en linea"
													src={PayBaloto}
													onClick={() => this.openPaymentCash(2)}
												/>
												<img
													alt="pago en linea"
													src={PaySured}
													onClick={() => this.openPaymentCash(3)}
												/>
											</div>
										</div>
									) : (
										<PaymentCashResult
											type={this.state.paymentCashType}
											amount={totalPrice}
											document={this.state.paymentCashDocument}
											props={this.props}
										/>
									)}
								</div>
								{this.state.shownPaymentOption === 0 ||
								this.state.shownPaymentOption === 3 ? (
									<div
										className="transfer payment-way-box"
										onClick={() => this.accordionTransfer()}
									>
										<p>Transferencia desde PSE</p>
									</div>
								) : (
									''
								)}
								<form onSubmit={this.payPSE}>
									<div
										className={
											this.state.closeTransfer
												? 'accordion-payment-way'
												: 'accordion-payment-way actives'
										}
									>
										<div className="content-accordion">
											<div className="content-accordion-form">
												<label>
													<p>Datos de titular</p>
													<input
														onCut={this.preventCopyPasteCut}
														onCopy={this.preventCopyPasteCut}
														onPaste={this.preventCopyPasteCut}
														autoComplete="off"
														onChange={this.validateName}
														value={this.state.name}
														required
														name={'names'}
														placeholder="Nombre completo *"
													/>
													<input
														onCut={this.preventCopyPasteCut}
														onCopy={this.preventCopyPasteCut}
														onPaste={this.preventCopyPasteCut}
														autoComplete="off"
														type="email"
														required
														name={'email'}
														placeholder="Email *"
													/>
													<input
														onCut={this.preventCopyPasteCut}
														onCopy={this.preventCopyPasteCut}
														onPaste={this.preventCopyPasteCut}
														autoComplete="off"
														onChange={this.validatePhone}
														value={this.state.phone}
														required
														name={'phone'}
														placeholder="Teléfono *"
													/>
												</label>
												<label>
													<p>Banco</p>
													<Select  name={'bank_id'}>
														{this.state.banks.map((bank, i) => {
															return (
																<option key={i + 2} value={bank.pseCode}>
																	{' '}
																	{bank.description}{' '}
																</option>
															);
														})}
													</Select>
												</label>
												<label>
													<p>Tipo de persona</p>

													<Select  name={'person_type'}>
														<option key={1} value={'N'}>Natural</option>
														<option key={2}  value={'J'}>Juridica</option>
													</Select>
												</label>
											</div>
											<div className="content-accordion-form">
												<label>
													<p>Documento de identificación</p>

													<Select  name={'document_type'}>{docType}</Select>

													<input
														onCut={this.preventCopyPasteCut}
														onCopy={this.preventCopyPasteCut}
														onPaste={this.preventCopyPasteCut}
														autoComplete="off"
														onChange={this.validateIdNumber}
														value={this.state.idNumber}
														required
														name={'document_number'}
														placeholder="Número documento"
													/>
												</label>

												<button
													onClick={() => this.hidePaymentOptions(3)}
													type="submit"
													className="button-continue main-button"
												>
													<p>Continuar con la compra</p>
												</button>
											</div>
											{this.state.error && <Error message={this.state.error} />}
										</div>
									</div>
								</form>
							</div>
							<div className="payment-data">
								<div className="product-description payment-way-box only-desktop">
									<img
										src={
											this.props.data.images.length > 0
												? this.props.data.images[0].url
												: 'https://thednetworks.com/wp-content/uploads/2012/01/picture_not_available_400-300.png'
										}
									/>
									<div className="content-product-description">
										<p>{this.props.data.title}</p>
										<p className="quantity">Cantidad: {this.state.productQuantity}</p>
										<h3>$ {totalPrice} </h3>
									</div>
								</div>

								<div className="shipping-address payment-way-box">
									{this.state.addrLoaded && this.state.addresses.length == 0 && (
										<>
											<h3>No tienes direcciones registradas.</h3>
											<Button
												onClick={() => this.setState({ modal: 1 })}
												text={'Agregar dirección'}
											/>
										</>
									)}

									{this.state.selectedAddr > -1 ? (
										<>
											<p>{this.state.addresses[this.state.selectedAddr].description}</p>
											<h3>Dirección de envío</h3>
											<p>
												Dirección: {this.state.addresses[this.state.selectedAddr].address}
											</p>
											<p>
												Barrio:
												{this.state.addresses[this.state.selectedAddr].neighborhood}
											</p>
											<p>
												Departamento:
												{this.state.addresses[this.state.selectedAddr].department}
											</p>
											<p>Ciudad:{this.state.addresses[this.state.selectedAddr].city}</p>

											<Button onClick={this.openAddrsModal} text={'Cambiar dirección'} />
										</>
									) : (
										<>
											<Button
												onClick={this.openAddrsModal}
												text={'Seleccione una dirección'}
											/>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
				<Footer />
			</div>
		);
	}
}
