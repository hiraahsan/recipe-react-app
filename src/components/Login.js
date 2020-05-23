import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import firebase from './firebase';

const auth = firebase.auth();

const Login = (props) => {
    const {userSetup} = props;
    const login = (e) => {
        e.preventDefault();
        console.log('this is logging in');
        const email = document.getElementById("textEmail").value
        const password = document.getElementById("textPassword").value; 
        auth.signInWithEmailAndPassword(email, password).then((result) => {
            const user = result.user;
            const email = result.user.email;
            const name = document.getElementById("textName").value;
    
           userSetup(user, email, name)
        })
        
    }
    const signUp = (e) => {
        e.preventDefault();
        //Check for real email
        const email = document.getElementById("textEmail").value
        const password = document.getElementById("textPassword").value;
        const name = document.getElementById("textName").value;
    
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage)
        });
    }

    
    
    return(
        // <Router>
            <form className="homePage">
            <div className="wrapper">
                <h1>Welcome!</h1>
                <p>Log in or create an account if you don't have one already. To create an account, enter an email and password before clicking sign up.</p>
                <label htmlFor="textName" className="visuallyHidden">Enter your name:</label>
                <input id="textName" type="name" placeholder="Name"></input>
                <label htmlFor="textEmail" className="visuallyHidden">Enter your email:</label>
                <input id="textEmail" type="email" placeholder="Email"></input>
                <label htmlFor="textPassword" className="visuallyHidden">Enter your password:</label>
                <input id="textPassword" type="password" placeholder="Password"></input>
                    <div className="buttons">
                <button onClick={login} id="loginBtn">Log In</button>
                    <button onClick={signUp} id="signUpBtn">Sign Up</button>
                </div>
                <p>Click here to test the website without signing up.</p>
            </div>
        </form>
        // </Router>
    )
}

export default Login;