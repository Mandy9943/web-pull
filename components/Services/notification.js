import Alert from './alertchatmsg';

export default function ShowNotification(data, param) {
	Notification.requestPermission().then(function (result) {
		if (result === 'granted') {
			Notification.requestPermission();
		} else {
			// return (
			// 	<div>
			// 		<Alert msg="oelo" notify={true} />;
			// 	</div>
			// );
		}
	});
	var options = {
		body: 'Revisa tu cuenta para ver el mensaje',
		icon: 'https://kiero.co/_next/static/images/logo-kiero-8bcc295b260198657f0395231376ca1a.png',
		dir: 'ltr',
	};
	var notification = new Notification('Tienes un nuevo mensaje', options);
}
