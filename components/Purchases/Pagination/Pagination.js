import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { values } from 'lodash';

export default function PaginationOutlined({
	actual,
	totalPages,
	currentPage,
	setCurrentPage,
}) {
	const changePage = (event, value) => {
		setCurrentPage(value);
	};

	return (
		<>
			<Pagination
				page={currentPage}
				onChange={changePage}
				count={totalPages}
				variant="outlined"
				shape="rounded"
				color="secondary"
				style={{ display: 'flex' }}
			/>
		</>
	);
}
