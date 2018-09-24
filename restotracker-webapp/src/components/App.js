import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
// import requireAuth from '../components/Auth';
import AsyncComponent from '../components/AsyncComponent';

// const AsyncTable = AsyncComponent(() => import('containers/Table/Table'), this.props.match.params.id);
const AsyncLoginPage = AsyncComponent(() => import('../containers/LoginPage/LoginPage'));
// const AsyncOpen = AsyncComponent(() => import('containers/OpenTables/OpenTables'));
// const AsyncClosed = AsyncComponent(() => import('containers/ClosedTables/ClosedTables'));
// const AsyncSummary = AsyncComponent(() => import('containers/Summary/Summary'));
const AsyncNotFound = AsyncComponent(() => import('../containers/NotFound/NotFound'));


const App = () => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Route path="/login" component={AsyncLoginPage} />

    {/* <Route exact path="/open" component={requireAuth(AsyncOpen)} /> */}
    {/* <Route path="/open/:id" component={requireAuth(AsyncTable)} /> */}

    {/* <Route exact path="/closed" component={requireAuth(AsyncClosed)} /> */}
    {/* <Route exact path="/summary" component={requireAuth(AsyncSummary)} /> */}

    <Route component={AsyncNotFound} />
  </Switch>
);

export default hot(module)(App);
