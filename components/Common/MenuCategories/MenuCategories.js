import React, { Component } from "react";
import "./MenuCategories.css";

class MenuCategories extends Component {
  render() {
    return (
      <div className="wrap-menu-categories">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className="menu-categories">
          {
            this.props.categories.map(function (cat, i) {
                return <li key={i}><a href={"/categoria/" + cat.name}>{cat.name}</a></li>
            })
          }

        </div>
      </div>
    );
  }
}

export default MenuCategories;
<button>cerrar</button>;
