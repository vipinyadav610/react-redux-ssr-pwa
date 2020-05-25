import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";

function ClientRoutes({ location }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} location={location} />
      <Route path="/aboutus" component={AboutUs} location={location} />
    </Switch>
  );
}

export default withRouter(connect()(ClientRoutes));
