import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './components/Main';
import Tool from './components/Tool';

import './App.css';

const App = () => {

  return(
    <Router>
      <Switch>
        <Route path="/:id" component={Tool}/>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  )
}

export default App;