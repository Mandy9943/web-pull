import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ center, color, children }) => {
  return (
    <Box>
      <Typography gutterBottom component="div">
        <Box
          sx={{
            fontWeight: { xs: "700", sm: "700", md: "800" },
            fontStyle: "normal",
            color: color,
            textAlign: center ? "center" : "start",
            fontSize: { xs: "5vw", sm: "3.5vw", md: "3vw", lg: "3vw" },
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
