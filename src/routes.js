import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/result" component={Result} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
