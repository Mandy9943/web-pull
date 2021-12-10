import React from "react";

import { Dialog, DialogContent } from "@material-ui/core";

export default function FormDialog({ handleClose, open, children }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
