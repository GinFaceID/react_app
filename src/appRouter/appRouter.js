import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Main from '../pages/main';
import Second from '../pages/second';
export default class AppRouter extends React.Component {
  

  render() {
    return <HashRouter >
    
      <div>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/second" component={Second} />
        </Switch>
      </div>

    </HashRouter>
  }
}
