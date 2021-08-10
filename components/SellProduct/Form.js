import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			email: '',
			phone: '',
			mobile_phone: '',
			city: '',
			phone: '',
			region: '',
			address: '',
			neighborhood: '',
			validForm: true,
		};
	}

	validateNumber(name, value) {
		const pattern = new RegExp('^[0-9]*$');
		this.setState({
			[name]: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	validateText(name, value) {
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		this.setState({
			[name]: pattern.test(value) ? value : value.slice(0, -1),
		});
	}

	handleFormValue = (e) => {
		let { name, value } = e.target;

		if (name === 'phone' || name === 'mobile_phone') {
			this.validateNumber(name, value);
		}
		if (name === 'region' || name === 'neighborhood' || name === 'city') {
			this.validateText(name, value);
		}
		if (name === 'user' || name === 'email' || name === 'address') {
			this.setState({ [name]: value });
		}
	};

	validateForm = () => {
		const { user, email, phone, mobile_phone, city, region, address, neighborhood } =
			this.state;
		if (
			!user ||
			!email ||
			!phone ||
			!mobile_phone ||
			!city ||
			!region ||
			!address ||
			!neighborhood
		) {
			this.setState({ validForm: false });
		} else {
			this.setState({ validForm: true });
		}
	};

	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<div style={{ width: '300px' }}>
					<input
						value={this.state.user}
						onChange={this.handleFormValue}
						placeholder="Usuario"
						name="user"
					/>
					<input
						value={this.state.email}
						onChange={this.handleFormValue}
						placeholder="Correo"
						name="email"
					/>
					<input
						value={this.state.phone}
						onChange={this.handleFormValue}
						placeholder="Telefono fijo"
						name="phone"
					/>
					<input
						value={this.state.mobile_phone}
						onChange={this.handleFormValue}
						placeholder="Telefono Movil"
						name="mobile_phone"
					/>
					<input
						value={this.state.city}
						onChange={this.handleFormValue}
						placeholder="Ciudad"
						name="city"
					/>
					<input
						value={this.state.region}
						onChange={this.handleFormValue}
						placeholder="Region/Departamento"
						name="region"
					/>
					<input
						value={this.state.address}
						onChange={this.handleFormValue}
						placeholder="Direccion"
						name="address"
					/>
					<input
						value={this.state.neighborhood}
						onChange={this.handleFormValue}
						placeholder="Barrio"
						name="neighborhood"
					/>
					<button onClick={this.validateForm}>Enviar</button>
					{!this.state.validForm ? (
						<div style={{ color: '#CF0A2C' }}>Tienes campos pendientes por completar</div>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}
