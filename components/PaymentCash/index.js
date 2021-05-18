import React, { useState } from 'react';
import './PaymentCash.css';

const PaymentCash = ({ onSubmit }) => {
	const [name, setName] = useState();
	const [phone, setPhone] = useState();

	const validateName = (event) => {
		const { name, value } = event.target;
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		setName(pattern.test(value) ? value : value.slice(0, -1));
	};

	const validatePhone = (event) => {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		setPhone(pattern.test(value) ? value : value.slice(0, -1));
	};

	const preventCopyPasteCut = (e) => {
		e.preventDefault();
	};

	return (
		<div className="payment-cash">
			<h2>Ingresa los siguientes datos</h2>
			<br />
			<form onSubmit={onSubmit}>
				<input
					autocomplete="off"
					onCut={preventCopyPasteCut}
					onCopy={preventCopyPasteCut}
					onPaste={preventCopyPasteCut}
					required
					onChange={validateName}
					value={name}
					name={'cash_form_name'}
					placeholder="Nombre y apellido *"
				/>
				<br />
				<input
					autocomplete="off"
					onCut={preventCopyPasteCut}
					onCopy={preventCopyPasteCut}
					onPaste={preventCopyPasteCut}
					required
					type="email"
					name={'cash_form_email'}
					placeholder="Email *"
				/>
				<br />
				<input
					autocomplete="off"
					onCut={preventCopyPasteCut}
					onCopy={preventCopyPasteCut}
					onPaste={preventCopyPasteCut}
					required
					onChange={validatePhone}
					value={phone}
					name={'cash_form_number'}
					placeholder="Número de contacto *"
				/>
				<br />
				<button type="submit" className="button-continue main-button">
					<p>Continuar</p>
				</button>
			</form>
		</div>
	);
};

export default PaymentCash;
