import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import history from './history';

import * as Pages from '~/pages';

import { AuthRoute, PrivateRoute } from './components';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <AuthRoute path="/login" component={Pages.Auth.Login} exact />

        <PrivateRoute path="/" component={Pages.Dashboard} exact />

        <PrivateRoute exact path="/questions" component={Pages.Questions.List} />
        <PrivateRoute exact path="/questions/create" component={Pages.Questions.Create} />
        <PrivateRoute exact path="/questions/:id/edit" component={Pages.Questions.Edit} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
