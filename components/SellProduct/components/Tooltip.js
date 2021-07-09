import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: 'white',
		color: 'black',
		margin: '0  0 -5px 20px',
		maxWidth: 600,
		fontSize: 12,
		boxShadow: '0px 3px 6px #00000029',
		borderRadius: '5px',
		padding: '15px',
	},
}))(Tooltip);

export default HtmlTooltip;
