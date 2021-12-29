import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.module.css";

const Header = ({ title, bredCumbs }) => {
  const bredCumb = [];
  if (bredCumbs?.length > 0) {
    bredCumbs.map((b) => {
      bredCumb.push(
        <>
          <span className="bredItem">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <span className="bredItem">{b.name}</span>
        </>
      );
    });
  }
  return (
    <div id="HeaderProductDatailMobil">
      <div className="bredcumbs">
        <span className="bredItem">...</span>
        {bredCumb}
      </div>
      <div className="title">
        <h2 className="titleText">
          {title.length > 80 ? title.substr(0, 80) + "..." : title}
        </h2>
      </div>
    </div>
  );
};

export default Header;
