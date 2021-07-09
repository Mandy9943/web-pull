import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import HtmlTooltip from './Tooltip';
import { getData } from '../../../services/userApi';
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

export default function CategoryAcordeon({
	expandedCategory,
	setExpandedCategory,
	categoryInfo,
	setCategoryInfo,
	categoryValue,
	setCategoryValue,
}) {
	const classes = useStyles();

	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		getData('/getCategoriesForMenu').then((response) => {
			const extractSubCategories = response.data.map((cat) => {
				return cat.childs;
			});
			const subCategories = [];
			for (let i = 0; i < extractSubCategories.length; i++) {
				for (let y = 0; y < extractSubCategories[i].length; y++) {
					subCategories.push(extractSubCategories[i][y].name);
				}
			}
			setSubCategories(subCategories.sort());
		});
	}, []);

	return (
		<div className="productAcordeonContainer">
			<div className="productAcordeon">
				Categoría
				{expandedCategory ? (
					<HtmlTooltip
						open={categoryInfo}
						placement="top-start"
						title={
							<div>
								<div className="categoryInfoTitle">
									Organiza tus productos por categorias
								</div>
								<div className="categoryInfoParagraph">
									Seleccionar correctamente la categoría a la cual pertenece tu producto
									es fundamental para que pueda ser encontrado.
								</div>
							</div>
						}
					>
						<ErrorIcon
							onClick={() => setCategoryInfo(!categoryInfo)}
							onMouseOver={() => setCategoryInfo(true)}
							onMouseOut={() => setCategoryInfo(false)}
							id="picturesCodeInfo"
						/>
					</HtmlTooltip>
				) : (
					''
				)}
				<ExpandMoreIcon
					style={{
						color: expandedCategory ? '#CF0A2C' : '',
						marginBottom: expandedCategory ? '40px' : '',
						cursor: 'pointer',
					}}
					className={clsx(classes.expand, {
						[classes.expandOpen]: expandedCategory,
					})}
					onClick={() => setExpandedCategory(!expandedCategory)}
					aria-expanded={expandedCategory}
				/>
			</div>
			<Collapse in={expandedCategory} timeout="auto" unmountOnExit>
				<div className="typeOfAddP">
					Indica en que categoría se encuentra se encuentra tu producto
				</div>
				<Autocomplete
					options={subCategories}
					getOptionLabel={(option) => option}
					style={{ width: 380, marginBottom: 20 }}
					renderInput={(params) => (
						<TextField {...params} label="Seleccionar categoria" variant="outlined" />
					)}
					popupIcon={<ExpandMoreIcon />}
					noOptionsText="La categoria que buscas no existe"
				/>
			
			</Collapse>
		</div>
	);
}
