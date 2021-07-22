import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
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

export default function VideoAcordeon({ video, setVideo, videoError }) {
	const classes = useStyles();
	const [expandedVideo, setExpandedVideo] = useState(false);
	const [videoInfo, setVideoInfo] = useState(false);

	function handleVideo(e) {
		setVideo(e.target.value);
	}

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Video
				{expandedVideo || videoError ? (
					<HtmlTooltip
						open={videoInfo}
						placement="top-start"
						title={
							<div>
								<div className="videoInfoTitle">Agrega un video</div>
								<div className="videoInfoParagraph">
									Es importante complementar la publicación con un video que muestre la
									funcionalidad del producto que estás ofertando.
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setVideoInfo(!videoInfo)}
							onMouseOver={() => setVideoInfo(true)}
							onMouseOut={() => setVideoInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedVideo || videoError ? '#CF0A2C' : '',
						marginBottom: expandedVideo || videoError ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedVideo || videoError,
					})}
					onClick={() => setExpandedVideo(!expandedVideo)}
					aria-expanded={expandedVideo || videoError}
				/>
			</div>
			<Collapse in={expandedVideo || videoError} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">Agrega el link de algún video de Youtube</div>
				<div className="videoInput">
					<TextField
						onChange={handleVideo}
						value={video}
						fullWidth
						placeholder="Agrega un link de video"
					/>
					{videoError && !video ? (
						<div className="productTitleError">Debes completar este campo</div>
					) : (
						''
					)}
				</div>
			</Collapse>
		</div>
	);
}
