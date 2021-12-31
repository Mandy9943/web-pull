import React from "react";

const DivindingLine = ({
  color = "#D6D6D6",
  width = "90%",
  height = "2px",
  margin = "0px auto",
}) => {
  return (
    <div
      className="divindingLine"
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        margin: margin,
      }}
    />
  );
};

export default DivindingLine;
