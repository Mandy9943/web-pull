import Cards from 'react-credit-cards';

export default function Credit({ state }) {
	const card_change = (type, valid) => {
		this.setState({ card_max_length: type.maxLength });
		if (valid) {
			this.setState({ card_type: type.issuer });
		} else {
			this.setState({ card_type: 'invalid' });
		}
	};

	const payCC = async (e) => {
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
			quantity: this.props.cantidad,
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
			dataLayer.push({
				event: 'checkoutOption',
				ecommerce: {
					checkout_option: {
						actionField: {
							step: 2,
							option: 'cc',
						},
					},
				},
			});
			// let dataLayerAddPaymentInfoCC = {
			// 	'event': 'add_payment_info',
			// 	'ecommerce': {
			// 		'currency': 'COP',
			// 		'items': [{
			// 			'item_name': this.props.data.product_global_title, // Name or ID is required.
			// 			'item_id': this.props.data.product_global_id,
			// 			'price': this.props.data.price,
			// 			'item_brand': this.props.data.brand,
			// 			'quantity': this.props.cantidad,
			// 			'url':'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
			// 																							.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
			// 																							.replace('//', '%2F')
			// 																							.replace('%', '')
			// 																							.split(' ')
			// 																							.join('-'),
			// 			'payment_type':'cc'
			// 			}]
			// 		}
			// 	};
			// const addPaymentInfoCCGooleDataLayer = (dataLayerAddPaymentInfoCC) => {
			// 	this.props.data.breadcum.forEach((prod, index) => {
			// 		let keyCategory = `item_category${index + 1}`;
			// 		let valueNameCategory = prod.name;
			// 		dataLayerAddPaymentInfoCC['ecommerce']['items'][0][keyCategory] = valueNameCategory;
			// 	});
			// 	return dataLayerAddPaymentInfoCC;
			// }

			// let resultDataLayerAddPaymentInfoCC = addPaymentInfoCCGooleDataLayer(dataLayerAddPaymentInfoCC);

			// dataLayer.push(resultDataLayerAddPaymentInfoCC);

			if (window.fbq != null) {
				window.fbq('track', 'AddPaymentInfo', {
					content_ids: this.props.data.product_global_id,
					content_name: this.props.data.product_global_title,
					product_group: this.props.data.type,
					content_type: 'product',
					content_category: this.props.data.breadcum[0].name,
					contents: [
						{
							id: this.props.data.product_global_id,
							quantity: this.props.cantidad,
						},
					],
					currency: 'COP',
					value: this.props.data.price,
					payment_type: 'cc',
				});
			} else {
				fbq('track', 'AddPaymentInfo', {
					content_ids: this.props.data.product_global_id,
					content_name: this.props.data.product_global_title,
					product_group: this.props.data.type,
					content_type: 'product',
					content_category: this.props.data.breadcum[0].name,
					contents: [
						{
							id: this.props.data.product_global_id,
							quantity: this.props.cantidad,
						},
					],
					currency: 'COP',
					value: this.props.data.price,
					payment_type: 'cc',
				});
			}

			gtag('event', 'set_checkout_option', {
				checkout_step: 2,
				checkout_option: 'cc',
				value: this.props.data.price * this.props.cantidad,
			});

			const rs = await makePaymentCC(ccPayload, this.props.user.jwt);

			if (rs.data) {
				// console.log('CC',rs.data.data)
				dataLayer.push({ ecommerce: null });
				// let resultDataLayerPurchaseCC = rs.data.data;
				// resultDataLayerPurchaseCC.ecommerce.transaction_status = rs.data.result;
				// resultDataLayerPurchaseCC.ecommerce.items[0].url = 'https://kiero.co/detalle/' + this.props.data.product_global_id + '_' + this.props.data.product_global_title
				// 																									.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
				// 																									.replace('//', '%2F')
				// 																									.replace('%', '')
				// 																									.split(' ')
				// 																									.join('-'),
				// dataLayer.push(resultDataLayerPurchaseCC);

				dataLayer.push({
					ecommerce: {
						purchase: {
							actionField: {
								id: rs.data.data.ecommerce.transaction_id,
								affiliation: this.props.data.user.name,
								tax: rs.data.data.ecommerce.tax,
								shipping: rs.data.data.ecommerce.shipping,
								value: rs.data.data.ecommerce.items[0].price,
							},
							products: [
								{
									name: rs.data.data.ecommerce.items[0].item_name,
									id: rs.data.data.ecommerce.items[0].item_id,
									category: this.props.data.category.name,
									brand: rs.data.data.ecommerce.items[0].item_brand,
									price: rs.data.data.ecommerce.value,
									quantity: parseInt(rs.data.data.ecommerce.items[0].quantity),
									url:
										'https://kiero.co/detalle/' +
										this.props.data.product_global_id +
										'_' +
										this.props.data.product_global_title
											.replace(/[^\w\s\&\/\\#,+()$~%.'":*?<>{}]/gi, '')
											.replace('//', '%2F')
											.replace('%', '')
											.split(' ')
											.join('-'),
								},
							],
						},
					},
				});

				if (typeof window !== 'undefined') {
					if (window.fbq != null) {
						window.fbq('track', 'Purchase', {
							content_ids: this.props.data.product_global_id,
							content_name: this.props.data.product_global_title,
							product_group: this.props.data.type,
							content_type: 'product',
							content_category: this.props.data.breadcum[0].name,
							contents: [
								{
									id: this.props.data.product_global_id,
									quantity: this.props.cantidad,
								},
							],
							currency: 'COP',
							value: this.props.data.price,
							payment_type: 'cc',
							num_items: this.props.cantidad,
						});
					} else {
						fbq('track', 'Purchase', {
							content_ids: this.props.data.product_global_id,
							content_name: this.props.data.product_global_title,
							product_group: this.props.data.type,
							content_type: 'product',
							content_category: this.props.data.breadcum[0].name,
							contents: [
								{
									id: this.props.data.product_global_id,
									quantity: this.props.cantidad,
								},
							],
							currency: 'COP',
							value: this.props.data.price,
							payment_type: 'cc',
							num_items: this.props.cantidad,
						});
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

	const handleInputFocus = (e) => {
		let name = '';
		if (e.target.name != 'ccv') {
			name = e.target.name;
		} else {
			name = 'cvc';
		}
		this.setState({ focus: name });
	};

	const handleInputChange = (e) => {
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

	return (
		<div
			className={
				state.closeCredit ? 'accordion-payment-way' : 'accordion-payment-way actives'
			}
		>
			<div className="content-accordion">
				<Cards
					cvc={state.ccv}
					expiry={state.expiration_date}
					focused={state.focus}
					name={state.card_holder}
					number={state.card_number}
					callback={card_change}
					// placeholders={"TU NOMBRE"}
				/>
				<form id="form-credit" onSubmit={payCC}>
					<input
						required
						type="tel"
						name="card_number"
						placeholder="Numero de tarjeta."
						onCut={(e) => e.preventDefault}
						onCopy={(e) => e.preventDefault}
						onPaste={(e) => e.preventDefault}
						autoComplete="off"
						value={state.ccNumber}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
						maxLength={state.card_max_length}
					/>
					<InputTip msg={state.tips.card_number} />
					<input
						required
						onCut={(e) => e.preventDefault}
						onCopy={(e) => e.preventDefault}
						onPaste={(e) => e.preventDefault}
						autoComplete="off"
						maxLength={64}
						name={'card_holder'}
						value={state.ccName}
						onChange={handleInputChange}
						onFocus={handleInputFocus}
						placeholder="Nombre y apellido impreso *"
					/>
					<InputTip msg={state.tips.card_holder} />
					<div className="input-form">
						<Datetime
							inputProps={{ readOnly: true, appearance: 'auto' }}
							onChange={handleDateTimeChange}
							value={state.expiration_date}
							placeholder="AA/MM"
							dateFormat="YY/MM"
							timeFormat={false}
						/>
						<input
							onCut={(e) => e.preventDefault}
							onCopy={(e) => e.preventDefault}
							onPaste={(e) => e.preventDefault}
							autoComplete="off"
							required
							maxLength={4}
							onChange={handleInputChange}
							value={state.ccCvv}
							onFocus={handleInputFocus}
							onBlur={exitccv}
							name={'cvv'}
							placeholder="CVV"
						/>
					</div>
					<div className="input-form">
						<InputTip msg={state.tips.expiration_date} />
						<InputTip msg={state.tips.ccv} />
					</div>
					Coutas:
					<div className={'content-accordion-form'}>
						<Select name={'monthly_fees'}>{months_fees}</Select>
					</div>
					<div className="input-form">
						<InputTip msg={state.tips.monthly_fees} />
					</div>
					<div className={'content-accordion-form'}>
						<Select name={'document_type'}>{docType}</Select>
						<InputTip msg={state.tips.document_type} />
					</div>
					<input
						onCut={(e) => e.preventDefault}
						onCopy={(e) => e.preventDefault}
						onPaste={(e) => e.preventDefault}
						autoComplete="off"
						onChange={handleInputChange}
						value={state.ccId}
						required
						name={'document_number'}
						placeholder="Número de documento"
					/>
					<InputTip msg={state.tips.document_number} />
				</form>
				<input
					required
					onChange={() => loadAcceptanceToken(!state.acp_checked)}
					id={'tos_cb'}
					type="checkbox"
					checked={state.acp_checked}
				/>
				<label htmlFor={'tos_cb'}>Aceptar terminos y condiciones </label>
				<InputTip msg={state.tips.acceptance_token} />
			</div>
			<button
				onClick={() => hidePaymentOptions(1)}
				type="submit"
				form="form-credit"
				className="button-continue main-button"
			>
				<p>Pagar</p>
			</button>

			{state.cc_error && <Error message={state.cc_error} />}
		</div>
	);
}
