import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Feeds from "../pages/Feeds";

function ClientRoutes({ location }) {
  return (
    <Switch>
      <Route exact path="/feeds/:pageno" component={Feeds} />
    </Switch>
  );
}

export default withRouter(connect()(ClientRoutes));
