import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Result from './pages/Result';
import Detail from './pages/Detail';

import { Logo } from './styles/global';
import logoSrc from './assets/img/logo.svg';

export default function Routes() {
  return (
    <BrowserRouter>
      <Logo to="/">
        <img src={logoSrc} alt="Juno" />
      </Logo>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/result" component={Result} />
        <Route path="/hero/:hero" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
