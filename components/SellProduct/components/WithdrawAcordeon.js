import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},

	toggle: {
		'& .Mui-checked': {
			color: '#CF0A2C',
		},
	},
}));

export default function WithdrawAcordeon({
	expandedWithdraw,
	setExpandedWithdraw,
	withdrawInfo,
	setWithdrawInfo,
	switchedWithdraw,
	setSwitchedWithdraw,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				{expandedWithdraw ? <b>Retiro en persona</b> : 'Retiro'}
				{expandedWithdraw ? (
					<ErrorIcon
						onClick={() => setWithdrawInfo(!withdrawInfo)}
						onMouseOver={() => setWithdrawInfo(true)}
						onMouseOut={() => setWithdrawInfo(false)}
						id="picturesCodeInfo"
					/>
				) : (
					''
				)}
				{expandedWithdraw && withdrawInfo ? (
					<div className="withdrawInfo">
						<div className="withdrawInfoContainer">
							<div className="withdrawInfoParagraph">
								Indícale a tus clientes si el producto puede ser retirado directamente en
								la tienda física o no cuenta con esta alternativa.
							</div>
						</div>
					</div>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedWithdraw ? '#CF0A2C' : '',
						marginBottom: expandedWithdraw ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedWithdraw,
					})}
					onClick={() => setExpandedWithdraw(!expandedWithdraw)}
					aria-expanded={expandedWithdraw}
				/>
			</div>
			<Collapse in={expandedWithdraw} timeout="auto" unmountOnExit>
				<div className="withdrawText">
					Selecciona si aceptas o no el retiro en persona
				</div>
				<div className="withdrawSwitch">
					{switchedWithdraw ? 'Si, acepto' : 'No acepto'}

					<Switch
						className={classes.toggle}
						onChange={() => setSwitchedWithdraw(!switchedWithdraw)}
						checked={switchedWithdraw}
					/>
				</div>
				<div>
					<div className="withdrawButtonsContainer">
						<div className="withdrawConfirmAndCancelButtons">
							<Button id="dataSheetConfirmButton" variant="outlined">
								Confirmar
							</Button>
							<Button id="dataSheetCancelButton">Cancelar</Button>
						</div>
					</div>
				</div>
			</Collapse>
		</div>
	);
}
