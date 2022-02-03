import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ big, center, color, children }) => {
  return (
    <Box>
      <Typography gutterBottom component="div">
        <Box
          sx={{
            fontWeight: big ? 900 : 800,
            fontFamily: " Montserrat, sans-serif",
            fontStyle: "normal",
            color: color,
            textAlign: center ? "center" : "start",
            fontSize: big ? { xs: 32, sm: 52 } : { xs: 20, sm: 32 },
          }}
        >
          {children}
        </Box>
      </Typography>
    </Box>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  big: PropTypes.bool,
};
