import React, { useState, useEffect } from 'react';
import '../styles.css';

import GeneralChat from '../components/generalChat/index.js';
import SocketChat from '../components/Services/socket';
import SocketUser from '../components/Services/socketuser';
import KieroSocketChat from '../components/Services/kierochat-socket';
import showNotification from '../components/Services/socket'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<SocketChat />
			<SocketUser />
			<KieroSocketChat />
			<Component {...pageProps} />
			<GeneralChat />
		</>
	);
}
