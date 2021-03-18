
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import { Header }  from './AuthPages/Header.js'
import PrivateRoute   from './AuthPages/PrivateRoute.js'
import { Login } from './AuthPages/Login.js';
import { SignUp } from './AuthPages/Signup.js'
import { HomePage } from './GamePages/HomePage.js'
import { addUsertoLocalStorage, getUserFromLocalStorage } from './localStorageUtils';



export default class App extends Component {

  state = { 
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => { 
    this.setState({ user })
    addUsertoLocalStorage(user);

  }

  redirectHome = () => { 

    window.location.replace('/')
  }

  redirectToSignUp = () => { 
    window.location.replace('/signup')
  }



  handleLogOut = () => { 
    this.handleUserChange();
    localStorage.clear();
    
    window.location.replace('/login')

  }

  render() {
  
   const { user } = this.state;
      return (
          <div>
              <Router>
              <Header
                handleLogOut={this.handleLogOut}
                redirectHome={this.redirectHome}
                redirectToSignUp={this.redirectToSignUp}/>
                  <Switch>
                      <PrivateRoute 
                          path="/" 
                          exact
                          token={user && user.token}
                          render={(routerProps) => <HomePage
                          {...routerProps} />} 
                          user={this.state.user}
                      />
                      <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => (
                          <SignUp
                           {...routerProps} 
                          handleUserChange={this.handleUserChange}/>)} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => ( 
                          <Login 
                          {...routerProps}
                          handleUserChange={this.handleUserChange}/>)} 
                         />
                  </Switch>
              </Router>
          </div>
      )
  }
}
