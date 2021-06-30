import React, { useState } from 'react';
import './SellProduct.css';
import Footer from '../Common/Footer';
import Nav from '../Common/Nav/Nav';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Switch from '@material-ui/core/Switch';
import barCode from './img/barCode.png';

import clsx from 'clsx';

const BootstrapInput = withStyles((theme) => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		backgroundColor: theme.palette.background.paper,
		fontSize: 15,
		border: '0.01px solid #a8a8a8',
		borderRadius: '5px',
		width: '28px',
		height: '21px',
		padding: '10px 26px 8px 12px',
		margin: '-8px -8px 0 0',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

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
	margin: {
		margin: theme.spacing(1),
	},

	toggle: {
		'& .Mui-checked': {
			color: '#CF0A2C',
		},
	},
}));

export default function SellProduct({ sesion }) {
	const [pictureInfo, setPictureInfo] = useState(false);
	const [codeInfo, setCodeInfo] = useState(false);
	const [expandedDataSheet, setExpandedDataSheet] = useState(false);
	const [dataSheetInfo, setDataSheetInfo] = useState(false);
	const [expandedWithdraw, setExpandedWithdraw] = useState(false);
	const [withdrawInfo, setWithdrawInfo] = useState(false);
	const [switchedWithdraw, setSwitchedWithdraw] = useState(false);

	const classes = useStyles();

	return (
		<>
			<Nav
			// user={sesion.user}
			// home={true}
			// jwt={sesion.jwt}
			// authenticated={sesion.authenticated}
			/>
			<div className="sellProductContainer">
				<div>
					<div className="backOption">
						<ArrowBackIosIcon fontSize="small" id="backOptionArrow" />
						Volver
					</div>
					<div className="productTitle">
						<div>Título</div>
						<div className="productTitleInput">
							<InputBase
								margin="dense"
								fullWidth
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
								placeholder="Escribe el titulo del producto"
							/>
						</div>
						<div className="charCount">54/150</div>
					</div>
					<div className="productPrice">
						<div>Precio</div>
						<div className="productPriceInput">
							<InputBase
								margin="dense"
								fullWidth
								className={classes.margin}
								inputProps={{ 'aria-label': 'naked' }}
								placeholder="$."
							/>
						</div>
					</div>
					<div className="productCharacteristicsContainer">
						<div>
							<div className="productCharacteristicstTitle">
								Características del producto
							</div>
							<div className="picturesContainer">
								<div className="picturesTitle">
									Fotos
									<ErrorIcon
										id="picturesTitleInfo"
										onMouseOver={() => setPictureInfo(true)}
										onMouseOut={() => setPictureInfo(false)}
									/>
									{pictureInfo ? (
										<div className="picturesInfo">
											<div className="picturesInfoContainer">
												<div className="picturesInfoTitle">Selecciona una buena foto</div>
												<div className="picturesInfoParagraph">
													Realizar la captura de buenas imágenes es fundamental, para que
													puedas resaltar tu producto y obtener publicaciones con una
													buena calidad. Te recomendamos que utilices fondo blanco en tus
													imágenes con un tamaño de 1200 x 900 píxeles, con la finalidad
													de que los compradores puedan ampliarlas.
												</div>
											</div>
										</div>
									) : (
										''
									)}
								</div>
								<div className="picturesInstruction">Agrega fotos de tu producto</div>
								<TextField
									id="uploadImageButton"
									type="file"
									style={{ display: 'none' }}
								/>
								<div className="picturesButtonContainer">
									<label htmlFor="uploadImageButton">
										<div className="picturesAddButton">
											Agregar
											<CameraAltIcon id="picturesCameraIcon" />
										</div>
									</label>
								</div>
							</div>
						</div>
						<div>
							<div className="productColorTitle">Color</div>
							<div className="productColorInput">
								<InputBase
									margin="dense"
									fullWidth
									className={classes.margin}
									inputProps={{ 'aria-label': 'naked' }}
									placeholder="Escribe el color de tu producto"
								/>
							</div>
							<div className="productQuantityTitle">Cantidad</div>
							<div>
								<div className="productQuantityInput">
									<InputBase
										margin="dense"
										fullWidth
										inputProps={{ 'aria-label': 'naked' }}
										placeholder="0"
									/>
								</div>
							</div>
							<div className="productCodeTitle">
								Código universal del producto
								<ErrorIcon
									id="picturesTitleInfo"
									onMouseOver={() => setCodeInfo(true)}
									onMouseOut={() => setCodeInfo(false)}
								/>
								{codeInfo ? (
									<div className="codeInfo">
										<div className="codeInfoContainer">
											<div className="codeInfoTitle">Códigos de producto</div>
											<div className="codeInfoParagraph">
												Estos son parte importante, puesto que son únicos para identificar
												cada producto de los demás. Existen diferentes códigos dependiendo
												de lo que deseas vender, destacando los EAN, ISBN, y UPC. Así
												mismo, es importante señalar que lo puedes encontrar junto al
												código de barra y/o en la caja del producto.
												<div>
													<img className="codeInfoBarCode" src={barCode} alt="" />
												</div>
											</div>
										</div>
									</div>
								) : (
									''
								)}
							</div>

							<div className="productCodeOptContainer">
								<div className="productCodeInput">
									<InputBase
										margin="dense"
										fullWidth
										className={classes.margin}
										inputProps={{ 'aria-label': 'naked' }}
									/>
								</div>
								<div className="productCodeCheckBoxContainer">
									<Checkbox style={{ color: '#CF0A2C' }} />
									<div className="productCodeCheckBoxText">Sin código</div>
								</div>
							</div>
							<div className="productConfirmAndCancelButtons">
								<Button id="productConfirmButton" variant="outlined" color="secondary">
									Confirmar
								</Button>
								<Button id="productCancelButton">Cancelar</Button>
							</div>
						</div>
					</div>
					<div className="productAcordeonsContainer">
						<div className="productAcordeonContainer">
							<div className="productAcordeon">
								Ficha técnica
								{expandedDataSheet ? (
									<ErrorIcon
										onMouseOver={() => setDataSheetInfo(true)}
										onMouseOut={() => setDataSheetInfo(false)}
										id="picturesCodeInfo"
									/>
								) : (
									''
								)}
								{expandedDataSheet && dataSheetInfo ? (
									<div className="dataSheetInfo">
										<div className="dataSheetInfoContainer">
											<div className="dataSheetInfoTitle">
												Agrega las características del producto que estás vendiendo
											</div>
											<div className="dataSheetInfoParagraph">
												Recuerda que entre más específico seas en tu descripción mayor
												confianza le vas a generar al comprador, además de que vas a
												evitar preguntas referentes a los detalles del producto que
												ofreces.
											</div>
										</div>
									</div>
								) : (
									''
								)}
								<ExpandMoreIcon
									style={{
										color: expandedDataSheet ? '#CF0A2C' : '',
										marginBottom: expandedDataSheet ? '40px' : '',
										cursor: 'pointer',
									}}
									className={clsx(classes.expand, {
										[classes.expandOpen]: expandedDataSheet,
									})}
									onClick={() => setExpandedDataSheet(!expandedDataSheet)}
									aria-expanded={setExpandedDataSheet}
								/>
							</div>
							<Collapse in={expandedDataSheet} timeout="auto" unmountOnExit>
								<div className="dataSheetContainer">
									<div className="dataSheetText">
										Completa estos datos con la ayuda de la caja de producto,
										<br /> su etiqueta, envase o usando las especificaciones del
										fabricante
									</div>
									<div className="dataSheetBrandAndModel">
										<div className="dataSheetInput">
											<InputBase
												margin="dense"
												fullWidth
												placeholder="Marca"
												className={classes.margin}
												inputProps={{ 'aria-label': 'naked' }}
											/>
										</div>
										<div className="dataSheetInput">
											<InputBase
												margin="dense"
												fullWidth
												placeholder="Modelo"
												className={classes.margin}
												inputProps={{ 'aria-label': 'naked' }}
											/>
										</div>
									</div>
									<div className="dataSheetBrandAndModel">
										<div className="dataSheetInput">
											<InputBase
												margin="dense"
												fullWidth
												placeholder="Material"
												className={classes.margin}
												inputProps={{ 'aria-label': 'naked' }}
											/>
										</div>
										<div className="dataSheetLongContainer">
											<div className="dataSheetLongInput">
												<InputBase
													margin="dense"
													fullWidth
													placeholder="Largo"
													className={classes.margin}
													inputProps={{ 'aria-label': 'naked' }}
												/>
											</div>
											<div>
												<FormControl className={classes.margin}>
													<NativeSelect
														style={{ color: '#A2A2A2' }}
														id="demo-customized-select-native"
														// value={age}
														// onChange={handleChange}
														input={<BootstrapInput />}
														IconComponent={ExpandMoreIcon}
													>
														<option value="cm">cm</option>
														<option value="mm">mm</option>
														<option value="mt">mt</option>
														<option value="pulgada">plg</option>
													</NativeSelect>
												</FormControl>
											</div>
										</div>
									</div>
									<div className="dataSheetShortContainer">
										<div className="dataSheetLongContainer">
											<div className="dataSheetLongInput">
												<InputBase
													margin="dense"
													fullWidth
													placeholder="Ancho"
													className={classes.margin}
													inputProps={{ 'aria-label': 'naked' }}
												/>
											</div>
											<div>
												<FormControl className={classes.margin}>
													<NativeSelect
														style={{ color: '#A2A2A2' }}
														id="demo-customized-select-native"
														// value={age}
														// onChange={handleChange}
														input={<BootstrapInput />}
														IconComponent={ExpandMoreIcon}
													>
														<option value="cm">cm</option>
														<option value="mm">mm</option>
														<option value="mt">mt</option>
														<option value="pulgada">plg</option>
													</NativeSelect>
												</FormControl>
											</div>
										</div>
										<div className="productConfirmAndCancelButtons">
											<Button id="dataSheetConfirmButton" variant="outlined">
												Confirmar
											</Button>
											<Button id="dataSheetCancelButton">Cancelar</Button>
										</div>
									</div>
								</div>
							</Collapse>
						</div>
						<div className="productAcordeonContainer">
							<div className="productAcordeon">
								{expandedWithdraw ? <b>Retiro en persona</b> : 'Retiro'}
								{expandedWithdraw ? (
									<ErrorIcon
										onMouseOver={() => setWithdrawInfo(true)}
										onMouseOut={() => setWithdrawInfo(false)}
										id="picturesCodeInfo"
									/>
								) : (
									''
								)}
								{expandedDataSheet && withdrawInfo ? (
									<div className="withdrawInfo">
										<div className="withdrawInfoContainer">
											<div className="withdrawInfoParagraph">
											Indícale a tus clientes si el producto puede ser retirado directamente en la tienda física o no cuenta con esta alternativa.
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
								<div>
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
								</div>
							</Collapse>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
