import React from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/about" component={About} exact />

      </Switch>
    </Router>
  );
}

export default App;
