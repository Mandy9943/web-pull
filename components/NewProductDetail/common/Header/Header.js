import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import "./Header.module.css";

const Header = ({ title, bredCumbs, isDesktop }) => {
  const bredCumb = [];
  if (bredCumbs?.length > 0) {
    bredCumbs.map((b) => {
      bredCumb.push(
        <React.Fragment key={b.name}>
          <span className="bredItem nextCategory">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <Link
            href="/categoria/[...category]"
            as={"/categoria/" + b.name.replace(/ /g, "-")}
          >
            <a>
              <span className="bredItem">{b.name}</span>
            </a>
          </Link>
        </React.Fragment>
      );
    });
  }
  return (
    <div id="HeaderProductDatailMobil">
      <div className="bredcumbs">
        <span className="bredItem">...</span>
        {bredCumb}
      </div>
      {!isDesktop && (
        <div className="title">
          <h2 className="titleText">
            {title.length > 80 ? title.substr(0, 80) + "..." : title}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Header;
