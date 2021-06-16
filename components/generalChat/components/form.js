import React, { useState } from 'react';
import Cookies from 'js-cookie';
import {generalsocketchat} from '../../Services/socker-general-chat'

function Form({ logedIn, validateRoom }) {
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
			const _json = {
				"name": name,
				"number":phone,
				"email":email,
				'message':answer,
				//"user_id":0,
				"login":false,
			}
			generalsocketchat.emit('open-chat', _json);
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
			const _json = {
				'message':answer,
				"user_id":Cookies.get('user_id'),
				"login":true,
			}
			generalsocketchat.emit('open-chat', _json);
		}
	}
	
	return (
		<>
			{logedIn ? (
				<div className="formLogin">
					<textarea
							required
							autoComplete="off"
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
							autoComplete="off"
							value={name}
							onChange={validateName}
							placeholder="Nombres y apellidos"
						/>
						<input
							style={{ display: 'flex' }}
							required
							autoComplete="off"
							value={phone}
							onChange={validatePhone}
							placeholder="Telefono"
						/>

						<input
							required
							autoComplete="off"
							type="email"
							onChange={validateEmail}
							value={email}
							placeholder="Correo"
						/>
						<textarea
							style={{ display: 'flex' }}
							required
							autoComplete="off"
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
		</>
	);
}

export default Form;
