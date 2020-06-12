import React, { Component } from "react";
import "./HelpSearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class HelpSearchBar extends Component {
  render() {
    return (
      <div className="wrap-search-bar">
        <div>
          <h4>¿En qué podemos ayudarte?</h4>
        </div>
        <div className="search-bar">
          <label htmlFor="search" className="search-help-icon">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input id="search" />
        </div>
      </div>
    );
  }
}

export default HelpSearchBar;
