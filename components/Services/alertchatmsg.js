import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Alert({ notify }) {
	// const [notify, setNotify] = useState(false);
	return (
		<div>
			{notify ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						color: 'white',
						background: '#CF0A2C',
						borderRadius: '5px',
						position: 'fixed',
						float: 'right',
						top: '15%',
						width: '240px',
						height: 'fit-content',
						right: '10px',
						zIndex: 2,
						padding: '10px 20px',
						cursor: 'pointer',
					}}
				>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '180px',
						}}
					>
						<NotificationsNoneIcon fontSize="large" />
						Tienes un nuevo mensaje
					</div>
					<CloseIcon
						// onClick={() => setNotify(false)}
						fontSize="small"
					/>
				</div>
			) : (
				''
			)}
		</div>
	);
}
