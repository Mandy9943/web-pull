import React, { useState, useEffect } from 'react';
import { Sms as SmsIcon, CloseRounded, Send } from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import './style.css';
import GeneralSocketChat from '../Services/socker-general-chat';
import Cookies from 'js-cookie';
import Form from './components/form.js';
import { generalsocketchat } from '../Services/socker-general-chat';
import { showNotification } from '../Services/socket.js';
import Spinner from '../Common/Spinner/Spinner';

export default function GeneralChat() {
	const [values, setValues] = useState({
		message: '',
		openChats: '',
		closeButtons: '',
		login: false,
		dataRoom: '',
	});
	const [dataError, setDataError] = useState(false);
	const [dataMsg, setDataMsg] = useState([{}]);
	const [pointData, setPointData] = useState(false);
	const [loading, setLoading] = useState(false);
	const endMessage = React.useRef(null);

	useEffect(() => {
		//Aquí se valida la sala cuando me voy a conectar, si el error es false, entonces procede si es true,
		//se envía mensaje que hay error, los mensajes de error se llegan al apartado de notifications

		generalsocketchat.on('response_open_chat', function (msg) {
			Cookies.set('roomId', msg.room_id);
			Cookies.set('room', msg.room);
			console.log('validando sala', msg.room, msg);
			setLoading(true);
			setTimeout(() => {
				//aqui puedes poner un loader que diga "sala validada, espere mientras creamos su sala" y luego ejecutas el handleOpenChat
				setLoading(false);
				handleOpenChat();
			}, 1000);
			// console.log("mensaje", msg);
		});

		////////////////////////////////////////

		//Aquí llegan todos los mensajes de errores
		//El primer error es cuando al iniciar una sala, determine si está bien o no (open-chat)
		//El segundo mensaje identifica si la sala ya fue cerrada por el asesor o no (get-chat)

		generalsocketchat.on('notifications', function (msg) {
			console.log('notificación', msg);
			if (msg.error == true && msg.type == 'open-chat') {
				// setDataError(msg.error);
				console.log('hay un error');
			}
			if (msg.type == 'get-chat' && msg.archive == true) {
				Cookies.remove('roomId');
				Cookies.remove('room');
			}
		});

		///////////////////////////////////////

		//Éste socket trae los mensajes cuando se abre la sala

		generalsocketchat.on('response_get_chat', function (msg) {
			setDataMsg(msg.chats.messages);
			// console.log("new_msg_12", msg);
			// console.log("mnsjaes al entrar", dataMsg);
		});

		//////////////////////////////////////

		//Éste socket pinta los nuevos mensajes, si puedes poner un "enviando"  o agregarle la fecha por debajo de cada mensaje, excelente

		generalsocketchat.on('response_chat', function (msg) {
			// console.log("new_msg", msg.messages.messages);
			setDataMsg(msg.messages.messages);
			endMessage.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
			const openPublicChat = document.querySelector('.openPublicChat');
			if (openPublicChat) {
			} else {
				showNotification(
					'Te han enviado un mensaje en el chat'
				);
			}
		});

		/////////////////////////////////////

		//Cuando tiene la sala abierta y el asesor la cierra, debe salir un mensaje que diga "estamos cerrando la sala", junto con un loader
		//Puedes decirme cuando llegues a éste paso, que abramos un chat para cerrar la sala y te des cuenta lo que imprime
		generalsocketchat.on('response_archive', function (msg) {
			// console.log("respuesta", msg);
			if (msg.type == 'archive' && msg.chat.error == false) {
				// console.log("estamos borrando su sala");
				setTimeout(() => {
					// console.log("sala borrada con éxito")
					Cookies.remove('roomId');
					Cookies.remove('room');
					handleOpenChat();
				}, 5000);
			}
		});
		////////////////////////////////////////////
	}, []);

	//Aquí determino la sesion y renderizo el chat enviando por props, el valor de login para renderizar el formulario

	const handleOpenChat = () => {
		setPointData(false);
		const chatContent = document.querySelector('.generalChat');
		chatContent.classList.remove('hiddenChat');
		chatContent.classList.add('containerChats');
		chatContent.classList.add('openPublicChat');
		const user_id = Cookies.get('user_id');
		if (!user_id) {
			return setValues({ ...values, login: false });
			// renderFormChat(room)
		} else {
			return setValues({ ...values, login: true });
			// renderFormChat(room)
		}
		// setShowMsgs(renderFormChat(values.login))
	};

	//////////////////////////////////////////////////

	//Función para cerrar ventana de chat

	const handleCloseChat = () => {
		const chatContent = document.querySelector('.generalChat');
		chatContent.classList.add('hiddenChat');
		chatContent.classList.remove('containerChats');
		chatContent.classList.remove('openPublicChat');
	};

	////////////////////////////////////////////

	//Aquí, dependiendo el estado, voy a renderizar el formulario

	const renderFormChat = () => {
		// console.log("mensajes en render", dataMsg);
		const roomId = Cookies.get('roomId');
		if (dataError == true) {
			return (
				<div>
					Lamentamos los inconvenientes, en el momento no estamos en funcionamiento
					<button onClick={(setDataError(true), handleOpenChat())}>
						Validar nuevamente
					</button>
				</div>
			);
		}
		if (roomId) {
			emitGetPublicChat();
			return showMsg(dataMsg);
		} else {
			return <Form logedIn={values.login} validateRoom={handleOpenChat} />;
		}
		// }
	};

	/////////////////////////////////////////

	//Aquí me renderiza el botón si debe o no, enviar mensajes

	const handleRenderButton = () => {
		if (!pointData) {
			return <></>;
		} else {
			return (
				<div className="sendMessage">
					<TextareaAutosize
						id="outlined-multiline-static"
						label="Escribir mensaje"
						rows={1}
						rowsMax={2}
						variant="outlined"
						value={values.message}
						onInput={handleWriteMessage('message')}
					/>
					<Send onClick={handleSendMessage} />
				</div>
			);
		}
	};

	///////////////////////////////////////

	//Función para detectar value de input

	const handleWriteMessage = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	////////////////////////////////////////

	//Función para enviar los mensajes, si no hay usuario, el id del usuario debe ser cero(0)

	const handleSendMessage = () => {
		let date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		var hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

		if (month < 10) {
			var fecha = year + '-0' + month + '-' + day + ' ' + hora;
		} else {
			var fecha = year + '-' + month + '-' + day + ' ' + hora;
		}

		var user_ids = Cookies.get('user_id');
		if (!user_ids) {
			var user_ids = 0;
		}
		const dataSend = {
			room_id: Cookies.get('roomId'),
			message: values.message,
			user_id: user_ids,
			send: 0,
			date: fecha,
		};
		generalsocketchat.emit('chat-response', dataSend);
		setValues({ ...values, message: '' });
	};

	////////////////////////////////////////

	//Aquí muestro los mensajes, es donde se renderiza el mensaje, lugar donde puedes agregar lo de la fecha y hora

	const showMsg = (msg) => {
		// console.log("entró el mensaje", dataMsg);
		setTimeout(() => {
			endMessage.current.scrollIntoView({ block: 'end' });
		}, 50);
		return (
			<>
				{msg.map((msg, i) => {
					const type = !msg.send ? 'rightMessage' : 'leftMessage';
					if (!msg) {
						return <div>No hay ningún mensaje</div>;
					} else {
						return (
							<div style={{ width: '100%' }} key={i}>
								<div className={type}>{msg.message}</div>
							</div>
						);
					}
				})}
			</>
		);
	};

	//////////////////////////////

	//Función para emitir los mensajes

	const emitGetPublicChat = () => {
		// console.log("data", data, "estado", pointData);
		const datas = {
			room_id: Cookies.get('roomId'),
		};
		if (pointData) {
		} else {
			generalsocketchat.emit('join', { room: Cookies.get('room') });
			generalsocketchat.emit('get-chat', datas);
			setPointData(true);
		}
	};

	/////////////////////////////////

	return (
		<>
			<GeneralSocketChat />
			<div className="generalChat hiddenChat">
				<div className="headChat">
					<p>Usuario</p>
					<CloseRounded onClick={handleCloseChat} />
				</div>

				<div className="containerMessages">
					{loading ? (
						<div style={{ textAlign: 'center', marginTop: '45%' }}>
							Estamos buscando un asesor
							<Spinner />
						</div>
					) : (
						renderFormChat()
					)}
					<div ref={endMessage} style={{ height: 5 }}></div>
				</div>

				{handleRenderButton()}
			</div>
			<Fab className="buttonChat" variant="extended" onClick={handleOpenChat}>
				<SmsIcon />
				Hablar con un asesor
			</Fab>
		</>
	);
}
