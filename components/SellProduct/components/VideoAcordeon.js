import React from 'react';
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

export default function VideoAcordeon({
	expandedVideo,
	setExpandedVideo,
	videoInfo,
	setVideoInfo,
}) {
	const classes = useStyles();

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Video
				{expandedVideo ? (
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
						color: expandedVideo ? '#CF0A2C' : '',
						marginBottom: expandedVideo ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedVideo,
					})}
					onClick={() => setExpandedVideo(!expandedVideo)}
					aria-expanded={expandedVideo}
				/>
			</div>
			<Collapse in={expandedVideo} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">Agrega el link de algún video de Youtube</div>
				<div className="videoInput">
					<TextField fullWidth placeholder="Agrega un link de video" />
				</div>
			</Collapse>
		</div>
	);
}
