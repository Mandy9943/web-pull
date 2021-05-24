import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import '../ForgotPass/ForgotPass.css';
import { resetPassword } from '../../services/userApi';
import './ResetPass.css';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function ResetPass({ token }) {
	const router = useRouter();
	const [password1, setPassword1] = useState();
	const [password2, setPassword2] = useState();
	const [equal, setEqual] = useState(false);
	const [error, setError] = useState();
	const handlePassword1 = (e) => {
		setPassword1(e.target.value);
        if (e.target.value && password2 && e.target.value === password2) {
			setEqual(true);
		} else {
			setEqual(false);
		}
	};
	const handlePassword2 = (e) => {
		setPassword2(e.target.value);
		if (e.target.value && password1 && e.target.value === password1) {
			setEqual(true);
		} else {
			setEqual(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const rs = await resetPassword(password1, token);
		if (rs !== 1) {
			setError(rs);
		} else {
			if (password1 !== password2) {
				setError('Las contraseñas no coinciden');
			} else {
				router.push('/login');
			}
		}
	};

	return (
		<div className="container forgot-component">
			<Header />
			<div className="forgot-pass">
				<h1>Nueva contraseña</h1>
				{error && <small>{error}</small>}
				<form className="form" onSubmit={handleSubmit}>
					<div className="forgot-pass-content">
						<p className="forgot-pass-text">Ingrese la nueva contraseña</p>
						<div className="inputContainer">
							<input
								id="passwd1"
								required
								minLength={8}
								className="input"
								type="password"
								value={password1}
								onChange={handlePassword1}
								placeholder="Contraseña"
							/>
							{equal ? (
								<CheckIcon className="equalityConfirm" />
							) : (
								<CloseIcon className="equalityConfirm" />
							)}
						</div>
						<div className="inputContainer">
							<input
								id="passwd2"
								required
								minLength={8}
								className="input"
								type="password"
								value={password2}
								onChange={handlePassword2}
								placeholder="Confirma la contraseña"
							/>
							{equal ? (
								<CheckIcon className="equalityConfirm" />
							) : (
								<CloseIcon className="equalityConfirm" />
							)}
						</div>
					</div>
					<button type="submit" className="main-button button-recovery">
						<p>Cambiar</p>
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default ResetPass;
