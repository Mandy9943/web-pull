import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


export default function PaginationOutlined() {

  return (
      <>
      <Pagination count={10} variant="outlined" color="secondary" style={{display: "flex"}}/>
      </>
  );
}