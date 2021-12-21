import React from "react";
import "./DivindingLine.css";

const DivindingLine = ({
  color = "#D6D6D6",
  width = "90%",
  height = "2px",
  margin = "auto",
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
    ></div>
  );
};

export default DivindingLine;
