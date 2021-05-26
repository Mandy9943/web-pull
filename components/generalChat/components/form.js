import React, { useState } from 'react';
import Cookies from 'js-cookie';

function Form({ logedIn }) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [answer, setAnswer] = useState('');
	const [terms, setTerms] = useState(false);

	function validateName(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[a-zA-Z\u0080-\uFFFF ]+$');
		setName(pattern.test(value) ? value : value.slice(0, -1));
	}

	function validatePhone(event) {
		const { name, value } = event.target;
		const pattern = new RegExp('^[0-9]*$');
		setPhone(pattern.test(value) ? value : value.slice(0, -1));
	}

	function validateEmail(event) {
		const { name, value } = event.target;
		setEmail(value);
	}
	function validateAnswer(event) {
		const { name, value } = event.target;
		setAnswer(value);
	}
	const handleValidateForm = () => {
		const validateForms = document.querySelector('.infoValidate');
		if(name.length < 1 || phone.length < 1 || email.length < 1 || answer.length < 1 || terms==false){
			validateForms.classList.remove('hiddenChat');
			validateForms.classList.add('formValidate');
		} else {
			validateForms.classList.add('hiddenChat');
			validateForms.classList.remove('formValidate');
			Cookies.set("roomId","123")
		}
	}
	const handleValidateFormLogin = () =>{
		const validateForms = document.querySelector('.infoValidate');
		if(answer.length < 1 || terms==false){
			validateForms.classList.remove('hiddenChat');
			validateForms.classList.add('formValidate');
		} else {
			validateForms.classList.add('hiddenChat');
			validateForms.classList.remove('formValidate');
			Cookies.set("roomId","123")
		}
	}
	return (
		<div>
			{logedIn ? (
				<div className="formLogin">
					<textarea
							required
							autocomplete="off"
							type="textarea"
							onChange={validateAnswer}
							value={answer}
							placeholder="Escribe tu pregunta aqui"
						></textarea>
						<div className=" hiddenChat infoValidate">
							Debe llenar todos los campos y aceptar los términos para continuar
						</div>
						<div className="termsOutLogin">
							<input
								required
								id={'acceptTerms'}
								type="checkbox"
								onChange={() => setTerms(!terms)}
							/>
							<label htmlFor={'acceptTerms'}>Aceptar terminos y condiciones </label>
						</div>
					<button type="button" onClick={handleValidateFormLogin}>
						<p>Conectar</p>
					</button>
				</div>
				
			) : (
				<div className="" className="formOutLogin">
						<input
							style={{ display: 'flex' }}
							required
							autocomplete="off"
							value={name}
							onChange={validateName}
							placeholder="Nombres y apellidos"
						/>
						<input
							style={{ display: 'flex' }}
							required
							autocomplete="off"
							value={phone}
							onChange={validatePhone}
							placeholder="Telefono"
						/>

						<input
							required
							autocomplete="off"
							type="email"
							onChange={validateEmail}
							value={email}
							placeholder="Correo"
						/>
						<textarea
							style={{ display: 'flex' }}
							required
							autocomplete="off"
							type="textarea"
							onChange={validateAnswer}
							value={answer}
							placeholder="Escribe tu pregunta aqui"
						></textarea>
						<div className=" hiddenChat infoValidate">
							Debe llenar todos los campos y aceptar los términos para continuar
						</div>
						<div className="termsOutLogin">
							<input
								required
								id={'acceptTerms'}
								type="checkbox"
								onChange={() => setTerms(!terms)}
							/>
							<label htmlFor={'acceptTerms'}>Aceptar terminos y condiciones </label>
						</div>
					<button type="button" onClick={handleValidateForm}>
						<p>Conectar</p>
					</button>
				</div>
			)}
		</div>
	);
}

export default Form;
