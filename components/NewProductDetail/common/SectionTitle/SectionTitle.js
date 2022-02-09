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
            fontStyle: "normal",
            color: color,
            textAlign: center ? "center" : "start",
            fontSize: big ? { xs: 30, md: 52 } : { xs: 22, md: 32 },
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
};
export default SectionTitle;
