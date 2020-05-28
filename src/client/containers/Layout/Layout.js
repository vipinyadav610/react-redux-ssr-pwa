import React from "react";
import { withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ClientRoutes from "../../routes/ClientRoutes";
import logo from "../../images/y18.gif";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="layout-main-container">
      <header className="main-header">
        <img className="logo" src={logo} alt="Hacker News" />
        <div className="navigation-item">top</div>
        <div className="navigation-item">new</div>
      </header>
      <ClientRoutes location={props.location} />
    </div>
  );
}

export default withRouter(connect()(Layout));
