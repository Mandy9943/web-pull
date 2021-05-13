import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

export default function PaginationOutlined({ actual, totalPages, cb }) {
	return (
		<>
			<Pagination
				count={totalPages}
				variant="outlined"
				shape="rounded"
				color="secondary"
				style={{ display: 'flex' }}
			/>
		</>
	);
}
