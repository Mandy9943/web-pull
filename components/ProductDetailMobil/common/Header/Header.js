import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
const Header = ({ title, bredCumbs }) => {
  console.log("bredCumbs", bredCumbs);
  return (
    <div id="HeaderProductDatailMobil">
      <div className="bredcumbs">
        <span className="bredItem">...</span>
        <span className="bredItem">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="bredItem">{bredCumbs[bredCumbs.length - 2].name}</span>
        <span className="bredItem">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <span className="bredItem">{bredCumbs[bredCumbs.length - 1].name}</span>
      </div>
      <div className="title">
        <h2 className="titleText">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
