import socketIOClient from 'socket.io-client';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import './socket.css';
import { div } from 'prelude-ls';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// const ENDPOINT = "http://192.168.1.2:5001/chat";
const ENDPOINT = 'https://socket-chat.kieroapi.net/chat';

const socket = socketIOClient(ENDPOINT);

const showNotification = (text) => {
	const Toast = withReactContent(Swal).mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	Notification.requestPermission().then(function (result) {
		if (result === 'granted') {
			Notification.requestPermission();
		} else {
			//alert("notificacion web")
			Toast.fire({
				iconHtml: <NotificationsNoneIcon fontSize="large" />,
				iconColor: 'white',
				border: 'none !important',
				title: <div style={{ color: 'white', border: 'none' }}>{text}</div>,
				background: '#cf0a2c',
			});
		}
	});
	var options = {
		body: 'Revisa tu cuenta para ver el mensaje',
		icon: 'https://kiero.co/_next/static/images/logo-kiero-8bcc295b260198657f0395231376ca1a.png',
		dir: 'ltr',
	};
	var notification = new Notification('Tienes un nuevo mensaje', options);
};

export { showNotification };
export { socket };
export default function SocketChat() {
	// const [newNotification, setNewNotification] = React.useState(false)
	const user_id = Cookies.get('user_id');
	if (!user_id) {
		// console.log('no hay inicio de sesión');
	} else {
		socket.emit('join', { room: `kieroUser_` + user_id });
		// console.log('si hay inicio de sesión');
	}
	useEffect(() => {
		if (!('Notification' in window)) {
			alert('Tu navegador no es compatible con notificaciones, actualizaa por favor.');
		} else {
			Notification.requestPermission();
		}
		socket.on('new_response_user', (data) => {
			handleLoad();
			// showNotification()
			// setNewNotification(true)
		});
	}, []);
	const handleLoad = () => {
		var addClass = document.getElementsByClassName('containerChat');
		if (addClass.length === 1) {
			// console.log('existe');
		} else {
			showNotification();
			// console.log('no existe');
		}
	};

	// const [room_user, setRoom_user] = useState(`KieroUser_${this.props.data.myID}`);
	return <></>;
}
