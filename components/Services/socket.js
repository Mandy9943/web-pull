import socketIOClient from 'socket.io-client';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { div } from 'prelude-ls';
import Alert from './alertchatmsg';

// const ENDPOINT = "http://192.168.1.2:5001/chat";
const ENDPOINT = 'https://socket-chat.kieroapi.net/chat';

const socket = socketIOClient(ENDPOINT);



export { socket };
export default function SocketChat() {
	// const [newNotification, setNewNotification] = React.useState(false)
	const user_id = Cookies.get('user_id');
	if (!user_id) {
		console.log('no hay inicio de sesión');
	} else {
		socket.emit('join', { room: `kieroUser_` + user_id });
		console.log('si hay inicio de sesión');
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
			console.log('existe');
		} else {
			showNotification();
			console.log('no existe');
		}
	};

	// const [room_user, setRoom_user] = useState(`KieroUser_${this.props.data.myID}`);
	return <></>;
}
