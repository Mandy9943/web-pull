import React from "react";
import Loader from "../../../assets/img/loader/Loading Animation.svg";
import "./Loading.module.css";
const Loading = () => {
  return (
    <div id="LoadingComponent">
      <object type="image/svg+xml" data={Loader} />
    </div>
  );
};

export default Loading;
