import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Header, Configuracao, Timeline } from './components/index';

class App extends Component {

  render() {

    return (
      <div>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/configuracao" component={Configuracao} />
          </Switch>        
      </div>
    );
  }
}

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default Router;
