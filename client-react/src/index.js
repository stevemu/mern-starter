// Set up your application entry point here...
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./styles/styles.scss";
import Board from './example/Board';

/*
class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/games/:userId" component={ Board } />

        </Switch>
      </Router>
    );
  }

}
*/

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>hello</div>

    );
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
