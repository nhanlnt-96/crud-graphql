import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateUser from '../containers/createUser';
import UserList from '../containers/UserList';
import PageNotFound from '../containers/PageNotFound';

const routes = [
  {
    path: '/',
    isExact: true,
    module: CreateUser
  },
  {
    path: '/user-list',
    isExact: true,
    module: UserList
  },
  {
    path: '*',
    isExact: true,
    module: PageNotFound
  }
];

const RouterOutlet: FC = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((route, index) => {
            const {path, isExact, module} = route;
            return <Route key={index} path={path} exact={isExact} component={module}/>
          })
        }
      </Switch>
    </Router>
  )
}

export default RouterOutlet;