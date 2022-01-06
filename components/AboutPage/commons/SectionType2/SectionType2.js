import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "@mui/material/Collapse";
import React, { useState } from "react";
import "./SectionType2.module.css";

const SectionType2 = ({ imgSection, captionText, descriptionText }) => {
  const [showText, setShowText] = useState(false);
  const handleToggle = () => {
    setShowText(!showText);
  };
  return (
    <div className="SectionType2">
      <div
        className="imageSection"
        style={{
          backgroundImage: `url(${imgSection})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "gray",
        }}
      >
        <div className="imgContent" onClick={handleToggle}>
          <p className="caption">{captionText}</p>
          <span className="icon">
            {showText ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </div>
      </div>
      <div className="desktopTextSection">
        <div className="textSection">
          <div className="text">
            {descriptionText.map((des, i) => {
              return <p key={i}>{des}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="responsiveTextSection">
        <Collapse in={showText}>
          <div className="textSection">
            <div className="text">
              {descriptionText.map((des, i) => {
                return <p key={i}>{des}</p>;
              })}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default SectionType2;
