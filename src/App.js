import React from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import SingleRecipe from './components/SingleRecipe';
// import LoginPage from './components/LoginPage';
import './styles/App.scss';


function App() {

  return (
    <Router basename="recipe-react-app">
      <Navigation />
      <Switch>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/about" component={About} />
        <Route path="/recipes/:id" component={SingleRecipe} />
        <Route path="/login" 
        // component={LoginPage} 
        // render={props => <LoginPage {...props} />}
        />

      </Switch>
    </Router>
  );
}

export default App;
