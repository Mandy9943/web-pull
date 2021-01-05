import React, { Component } from "react";
import "./HelpContent.css";

class HelpContent extends Component {
  render() {
    const test = [1, 2, 3, 4];
    return (
      <div className="help-content">
        {test.map((item) => (
          <div className="help-content-item" key={item}>
            item - {item}
          </div>
        ))}
      </div>
    );
  }
}

export default HelpContent;
