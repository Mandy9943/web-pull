import React, { Component } from "react";
import "./SocialBar.css";

class SocialBar extends Component {
  render() {
    return (
      <div className="wrap-social-bar">
        <div className="content-social-bar">
          <div className="social-bar">
            <img src="https://picsum.photos/300/150" />
          </div>
          <div className="social-bar-icons">
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
            <img src="https://picsum.photos/50/50" />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialBar;
