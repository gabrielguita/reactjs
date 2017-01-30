import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { About } from './screens/About';

const App = React.createClass({
  render () {
    return (
      <div className="App">
        Main app component
        <div>
          <Link to={`${About.path}`}>About</Link>        
        </div>
      </div>
    )
  }
})

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path={About.path} component={About} />
        <Route path="*" component={NotFound} />
    </Router>
  ), document.getElementById('root'));