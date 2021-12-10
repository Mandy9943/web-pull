import { TextField } from "@material-ui/core";
import React from "react";
import FormDialog from "./components/FormDialog/FormDialog";

const FormProductDetail = () => {
  return (
    <div>
      <FormDialog open={true}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </FormDialog>
    </div>
  );
};

export default FormProductDetail;
