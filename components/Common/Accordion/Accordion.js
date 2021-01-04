import React, { Component } from "react";
import "./Accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
class Accordion extends Component {
  render() {
    return (
      <details>
        <summary>
          {this.props.title ? this.props.title : null}
          <span>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </summary>
        {this.props.children}
      </details>
    );
  }
}

export default Accordion;
