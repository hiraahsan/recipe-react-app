import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import SingleRecipe from './components/SingleRecipe';
import Login from './components/Login';
import firebase from './components/firebase';
import './App.css';

const auth = firebase.auth();

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const userSetup = (assignUser, email, name) => {
    setUser(assignUser)
    setEmail(email)
    setName(name)
}

const logout = () => {
  auth.signOut()
  .then(() => {
      setUser(null)
      setEmail(null)
      setName(null)
  })
}

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Dashboard} exact/>
        <Route path="/about" component={About} exact />
        <Route path="/recipes/:id" component={SingleRecipe} />
        <Route path="/login" 
        // component={Login} 
        render={(props) => <Login {...props} userSetup={userSetup} />}
        />

      </Switch>
    </Router>
  );
}

export default App;
