import React from "react";
import "./Spinner.scss";

function Spinner(props) {
  return props.loading ? <div className="spinner" /> : props.children;
}

export default Spinner;
