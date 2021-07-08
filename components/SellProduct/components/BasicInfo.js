import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import barCode from '../img/barCode.png';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

export default function BasicInfo({
	pictureInfo,
	setPictureInfo,
	codeInfo,
	setCodeInfo,
}) {
	const classes = useStyles();

	return (
		<>
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
					<div className="productCharacteristicstTitle">Características del producto</div>
					<div className="picturesContainer">
						<div className="picturesTitle">
							Fotos
							<ErrorIcon
								id="picturesTitleInfo"
								onClick={() => setPictureInfo(!pictureInfo)}
								onMouseOver={() => setPictureInfo(true)}
								onMouseOut={() => setPictureInfo(false)}
							/>
							{pictureInfo ? (
								<div className="picturesInfo">
									<div className="picturesInfoContainer">
										<div className="picturesInfoTitle">Selecciona una buena foto</div>
										<div className="picturesInfoParagraph">
											Realizar la captura de buenas imágenes es fundamental, para que
											puedas resaltar tu producto y obtener publicaciones con una buena
											calidad. Te recomendamos que utilices fondo blanco en tus imágenes
											con un tamaño de 1200 x 900 píxeles, con la finalidad de que los
											compradores puedan ampliarlas.
										</div>
									</div>
								</div>
							) : (
								''
							)}
						</div>
						<div className="picturesInstruction">Agrega fotos de tu producto</div>
						<TextField id="uploadImageButton" type="file" style={{ display: 'none' }} />
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
							onClick={() => setCodeInfo(!codeInfo)}
							onMouseOver={() => setCodeInfo(true)}
							onMouseOut={() => setCodeInfo(false)}
						/>
						{codeInfo ? (
							<div className="codeInfo">
								<div className="codeInfoContainer">
									<div className="codeInfoTitle">Códigos de producto</div>
									<div className="codeInfoParagraph">
										Estos son parte importante, puesto que son únicos para identificar
										cada producto de los demás. Existen diferentes códigos dependiendo de
										lo que deseas vender, destacando los EAN, ISBN, y UPC. Así mismo, es
										importante señalar que lo puedes encontrar junto al código de barra
										y/o en la caja del producto.
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
		</>
	);
}
