import React, { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import clsx from 'clsx';
import HtmlTooltip from './Tooltip';

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

export default function WithdrawAcordeon({ switchedWithdraw, setSwitchedWithdraw }) {
	const classes = useStyles();

	const [expandedWithdraw, setExpandedWithdraw] = useState(false);
	const [withdrawInfo, setWithdrawInfo] = useState(false);

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				{expandedWithdraw ? <b>Retiro en persona</b> : 'Retiro'}
				{expandedWithdraw ? (
					<HtmlTooltip
						open={withdrawInfo}
						placement="top-start"
						title={
							<div className="withdrawInfoParagraph">
								Indícale a tus clientes si el producto puede ser retirado directamente en
								la tienda física o no cuenta con esta alternativa.
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setWithdrawInfo(!withdrawInfo)}
							onMouseOver={() => setWithdrawInfo(true)}
							onMouseOut={() => setWithdrawInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
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
			</Collapse>
		</div>
	);
}
