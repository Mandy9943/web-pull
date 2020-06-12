import React, { Component } from "react";
import "./DetailProductInfo.css";

class DetailProductInfo extends Component {
  render() {
    return (
      <div className="wrap-detail-info">
        <h4>DETALLE DEL PRODUCTO</h4>
        <div className="item-detail-info">
          <p>
              {this.props.desciption}
          </p>
        </div>
      </div>
    );
  }
}

export default DetailProductInfo;
