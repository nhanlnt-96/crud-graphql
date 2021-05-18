import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../configs/router.config";

const RouterOutlet: FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          const { path, isExact, module } = route;
          return (
            <Route key={index} path={path} exact={isExact} component={module} />
          );
        })}
      </Switch>
    </Router>
  );
};

export default RouterOutlet;
