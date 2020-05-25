import React from "react";
import { withRouter, NavLink, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ClientRoutes from "../../routes/ClientRoutes";

function Layout(props) {
  return (
    <Switch>
      <ClientRoutes location={props.location} />
    </Switch>
  );
}

export default withRouter(connect()(Layout));
