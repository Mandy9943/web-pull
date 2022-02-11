import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ center, color, children, variant = "h5" }) => {
  return (
    <Box>
      <Typography gutterBottom component="h2" variant={variant}>
        <Box
          sx={{
            fontWeight: { xs: "700", sm: "700", md: "800" },
            fontStyle: "normal",
            color: color,
            textAlign: center ? "center" : "start",
          }}
        >
          {children}
        </Box>
      </Typography>
    </Box>
  );
};

SectionTitle.propTypes = {
  big: PropTypes.bool,
  variant: PropTypes.string,
  center: PropTypes.bool,
  color: PropTypes.string,
};
export default SectionTitle;
